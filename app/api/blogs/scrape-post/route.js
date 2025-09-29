// // app/api/blogs/scrape-post/route.js
// import * as cheerio from 'cheerio';
// import { NextResponse } from 'next/server';

// export async function GET(request) {
//   const { searchParams } = new URL(request.url);
//   const url = searchParams.get('url');

//   if (!url) {
//     return NextResponse.json({ error: 'URL is required' }, { status: 400 });
//   }

//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Failed to fetch URL: ${response.statusText}`);
//     }

//     const html = await response.text();
//     const $ = cheerio.load(html);

//     // This selector is designed to find the main article content on Medium pages.
//     // It targets specific div classes used for the post body.
//     const articleContent = $('div.s.t.u, article div[data-testid="post-content"]').html();

//     if (!articleContent) {
//       return NextResponse.json({ error: 'Could not find article content.' }, { status: 404 });
//     }

//     return NextResponse.json({ content: articleContent }, { status: 200 });

//   } catch (error) {
//     console.error('Scraping error:', error);
//     return NextResponse.json({ error: 'Failed to scrape blog post.' }, { status: 500 });
//   }
// }


// ---------------------------------WORKING--------------------
// import * as cheerio from 'cheerio';
// import { NextResponse } from 'next/server';

// export async function GET(request) {
//   const { searchParams } = new URL(request.url);
//   const url = searchParams.get('url');

//   if (!url) {
//     return NextResponse.json({ error: 'URL is required' }, { status: 400 });
//   }

//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Failed to fetch URL: ${response.statusText}`);
//     }

//     const html = await response.text();
//     const $ = cheerio.load(html);

//     // This is the updated, more specific selector.
//     // It targets the main article content area based on recent Medium page structures.
//     const articleContainer = $('article div.s.t.u.v.w.x.y.z.aa.ab.ac.ad.ae');

//     if (articleContainer.length === 0) {
//       // Fallback to a more general selector if the first one fails
//       const fallbackContent = $('article section div');
//       if (fallbackContent.length === 0) {
//         return NextResponse.json({ error: 'Could not find article content.' }, { status: 404 });
//       }
//       return NextResponse.json({ content: fallbackContent.html() }, { status: 200 });
//     }

//     const articleContent = articleContainer.html();

//     if (!articleContent) {
//       return NextResponse.json({ error: 'Could not extract content.' }, { status: 404 });
//     }

//     return NextResponse.json({ content: articleContent }, { status: 200 });

//   } catch (error) {
//     console.error('Scraping error:', error);
//     return NextResponse.json({ error: 'Failed to scrape blog post.' }, { status: 500 });
//   }
// }

// app/api/blogs/scrape-post/route.js
import * as cheerio from "cheerio";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// Try multiple selectors; Medium DOM changes frequently
const ARTICLE_SELECTORS = [
  "article",
  "main article",
  'article div[role="article"]',
  'article section',
  'div[data-test-id="post-content"]',
  'section[data-field="body"]',
  // your previous very-specific selector as last resort:
  "article div.s.t.u.v.w.x.y.z.aa.ab.ac.ad.ae",
];

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");
  if (!url) {
    return NextResponse.json({ error: "URL is required" }, { status: 400 });
  }

  try {
    const resp = await fetch(url, {
      // Some sites gate requests by UA
      headers: { "User-Agent": "Mozilla/5.0 (+https://nextjs.org)" },
      // avoid Next from caching paywalled content
      cache: "no-store",
    });
    if (!resp.ok) {
      throw new Error(`Failed to fetch URL: ${resp.status} ${resp.statusText}`);
    }

    const html = await resp.text();
    const $ = cheerio.load(html);

    let $container = null;
    for (const sel of ARTICLE_SELECTORS) {
      const node = $(sel);
      if (node.length) {
        $container = node.first();
        break;
      }
    }

    // Fallback: any sizable content block
    if (!$container || $container.length === 0) {
      const fallback = $("article section div");
      if (fallback.length === 0) {
        return NextResponse.json(
          { error: "Could not find article content." },
          { status: 404 }
        );
      }
      return NextResponse.json(
        { content: fallback.html() },
        {
          status: 200,
          headers: { "Cache-Control": "public, s-maxage=600" },
        }
      );
    }

    // Remove noisy bits if present
    $container.find("script,noscript,style,form,header,footer,aside").remove();

    // Ensure images lazy-src to src
    $container.find("img").each((_, img) => {
      const $img = $(img);
      const dataSrc = $img.attr("data-src") || $img.attr("data-original-src");
      if (dataSrc && !$img.attr("src")) $img.attr("src", dataSrc);
      // safe attributes only
      $img.removeAttr("srcset").removeAttr("sizes");
    });

    const articleContent = $container.html() || "";
    return NextResponse.json(
      { content: articleContent },
      {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=600, stale-while-revalidate=3600",
        },
      }
    );
  } catch (error) {
    console.error("Scraping error:", error);
    return NextResponse.json(
      { error: "Failed to scrape blog post." },
      { status: 500 }
    );
  }
}
