// // app/api/blogs/route.js

// export async function GET(req) {
//   try {
//     const mediumRSSFeedURL = 'https://medium.com/feed/@22it078';
//     const response = await fetch(mediumRSSFeedURL);
//     if (!response.ok) {
//       throw new Error('Failed to fetch from Medium');
//     }
//     const xmlText = await response.text();
//     return new Response(xmlText, {
//       status: 200,
//       headers: { 'Content-Type': 'application/xml' },
//     });
//   } catch (error) {
//     console.error('API Error:', error);
//     return new Response(JSON.stringify({ error: 'Failed to fetch blogs' }), {
//       status: 500,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   }
// }


// app/api/blogs/route.js
import { NextResponse } from "next/server";
import { XMLParser } from "fast-xml-parser";

export const dynamic = "force-static"; // allow caching on the edge
export const revalidate = 600; // 10 minutes ISR for static optimization

const MEDIUM_FEED = "https://medium.com/feed/@22it078";

// Helper: normalize possible content fields from RSS
function pickContent(item) {
  // medium uses "content:encoded" for full html.
  // fast-xml-parser maps colon tags under an object like { "content:encoded": "<html>" }
  // or sometimes under "content" with "encoded".
  return (
    item["content:encoded"] ||
    (item.content && item.content.encoded) ||
    item.description ||
    ""
  );
}

export async function GET() {
  try {
    const resp = await fetch(MEDIUM_FEED, {
      // Helps with some CDNs
      headers: { "User-Agent": "Mozilla/5.0 (+https://nextjs.org)" },
      next: { revalidate: 600 }, // cache at fetch level too
    });

    if (!resp.ok) {
      throw new Error(`Medium RSS fetch failed: ${resp.status} ${resp.statusText}`);
    }
    const xml = await resp.text();

    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "",
      parseTagValue: true,
      parseAttributeValue: true,
      preserveOrder: false,
      trimValues: true,
    });

    const parsed = parser.parse(xml);
    const channel = parsed?.rss?.channel;
    const items = Array.isArray(channel?.item) ? channel.item : [];

    const blogs = items.map((item) => {
      // Image extraction: from content HTML if present
      const html = pickContent(item);
      let imageUrl = null;
      if (html) {
        const match = html.match(/<img[^>]+src="([^">]+)"/i);
        imageUrl = match ? match[1] : null;
      }

      return {
        title: item.title || "Untitled",
        link: item.link || "#",
        author: Array.isArray(item["dc:creator"])
          ? item["dc:creator"][0]
          : item["dc:creator"] || channel?.title || "Unknown",
        publishedAt: item.pubDate || null,
        contentHtml: html || null, // prefer full content from RSS
        imageUrl,
        excerpt:
          (item.description || "")
            .replace(/<[^>]+>/g, "")
            .slice(0, 180)
            .trim() + "…",
      };
    });

    return new NextResponse(JSON.stringify({ blogs }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        // Cache: CDN (600s), allow SWR (1h)
        "Cache-Control": "s-maxage=600, stale-while-revalidate=3600",
      },
    });
  } catch (err) {
    console.error("API /blogs error:", err);
    return new NextResponse(
      JSON.stringify({ error: "Failed to fetch blogs" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
