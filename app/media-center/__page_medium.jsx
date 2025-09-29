// "use client";
// import React, { useState, useEffect } from "react";
// import { Container, Row, Col, Tab } from "react-bootstrap";
// import DOMPurify from 'dompurify';

// const categories = [
//   {
//     key: "current",
//     label: "Current",
//     sub: [
//       { key: "news", label: "News" },
//       { key: "events", label: "Events" },
//       { key: "views", label: "Views" },
//       { key: "research", label: "Research" },
//       { key: "happenings", label: "Happenings" },
//       { key: "awards", label: "Awards" },
//     ],
//   },
//   {
//     key: "media",
//     label: "Photos/Videos",
//     sub: [
//       { key: "photos", label: "Photos" },
//       { key: "videos-short", label: "Videos (Short)" },
//       { key: "videos-long", label: "Videos (Long)" },
//     ],
//   },
//   {
//     key: "print",
//     label: "Print Media",
//     sub: [
//       { key: "clippings", label: "Press Clippings" },
//       { key: "in-news", label: "In the News" },
//     ],
//   },
//   {
//     key: "electronic",
//     label: "Electronic Media",
//     sub: [
//       { key: "tv", label: "TV" },
//       { key: "youtube", label: "YouTube" },
//       { key: "facebook", label: "Facebook" },
//     ],
//   },
//   {
//     key: "articles",
//     label: "Articles/Blogs",
//     sub: [
//       { key: "magazine", label: "Magazine" },
//       { key: "newspaper", label: "Newspaper" },
//       { key: "blog-list", label: "Blogs" },
//     ],
//   },
// ];

// const mediaData = {
//   news: [
//     {
//       title: "CHARUSAT wins national award",
//       img: "/media/news1.jpg",
//       link: "#",
//     },
//     {
//       title: "Research breakthrough in AI",
//       img: "/media/news2.jpg",
//       link: "#",
//     },
//   ],
//   events: [
//     { title: "Annual Tech Fest", img: "/media/event1.jpg", link: "#" },
//     { title: "Convocation 2025", img: "/media/event2.jpg", link: "#" },
//   ],
// };

// export default function MediaCenter() {
//   const [activeCategory, setActiveCategory] = useState("articles");
//   const [activeSub, setActiveSub] = useState("blog-list");
//   const [blogs, setBlogs] = useState([]);
//   const [blogsLoading, setBlogsLoading] = useState(false);
//   const [blogsError, setBlogsError] = useState(null);
//   const [selectedBlog, setSelectedBlog] = useState(null);

//   const handleCategory = (cat) => {
//     setActiveCategory(cat.key);
//     setActiveSub(cat.sub[0].key);
//     setSelectedBlog(null);
//   };

//   // --- Step 1: Fetch the list of blogs from the RSS feed ---
//   useEffect(() => {
//     if (activeSub !== "blog-list") return;
//     setBlogsLoading(true);
//     setBlogsError(null);
//     fetch("/api/blogs") // This route fetches the RSS feed
//       .then((response) => {
//         if (!response.ok) throw new Error("Network response was not ok");
//         return response.text();
//       })
//       .then((str) => {
//         const parser = new window.DOMParser();
//         const xmlDoc = parser.parseFromString(str, "text/xml");
//         const items = xmlDoc.querySelectorAll("item");
//         const fetchedBlogs = Array.from(items).map((item) => {
//           const title = item.querySelector("title")?.textContent || "No Title";
//           const link = item.querySelector("link")?.textContent || "#";
//           const description = item.querySelector("description")?.textContent || "No Excerpt";
//           const pubDate = item.querySelector("pubDate")?.textContent;
//           const imgMatch = description.match(/<img[^>]+src="([^">]+)"/);
//           const imageUrl = imgMatch ? imgMatch[1] : null;
//           return {
//             title,
//             link,
//             imageUrl,
//             publishedAt: pubDate,
//             excerpt: description.replace(/<[^>]+>/g, "").substring(0, 150) + "...",
//           };
//         });
//         setBlogs(fetchedBlogs);
//         setBlogsLoading(false);
//       })
//       .catch((err) => {
//         setBlogsError("Failed to load blogs from Medium.");
//         setBlogsLoading(false);
//       });
//   }, [activeSub]);

//   // --- Step 2: Fetch the detailed blog content when a blog is clicked ---
//   const handleBlogClick = (blog) => {
//     setBlogsLoading(true);
//     setBlogsError(null);

//     // Call the new scrape API route with the blog's link
//     fetch(`/api/blogs/scrape-post?url=${encodeURIComponent(blog.link)}`)
//       .then((response) => {
//         if (!response.ok) throw new Error("Network response was not ok");
//         return response.json();
//       })
//       .then((data) => {
//         const cleanContent = DOMPurify.sanitize(data.content, {
//           // Allow specific elements that are common in blog posts
//           ADD_TAGS: ['iframe', 'img', 'figure', 'figcaption', 'video', 'audio', 'div', 'blockquote', 'pre', 'code'],
//           ADD_ATTR: ['allow', 'frameborder', 'scrolling', 'src', 'alt', 'width', 'height', 'loading', 'class', 'data-testid'],
//         });

//         setSelectedBlog({ ...blog, content: cleanContent });
//         setBlogsLoading(false);
//       })
//       .catch((err) => {
//         setBlogsError("Failed to load blog content.");
//         setBlogsLoading(false);
//       });
//   };

//   const BlogGrid = () => (
//     <div
//       style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
//         gap: "2rem",
//         padding: "2rem",
//       }}
//     >
//       {blogs.map((blog, index) => (
//         <div
//           key={index}
//           style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
//           onClick={() => handleBlogClick(blog)}
//         >
//           <div
//             style={{
//               border: "1px solid #ccc",
//               borderRadius: "8px",
//               overflow: "hidden",
//               boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//               background: "#fff",
//             }}
//           >
//             {blog.imageUrl ? (
//               <img
//                 src={blog.imageUrl}
//                 alt={blog.title}
//                 style={{ width: "100%", height: "200px", objectFit: "cover" }}
//               />
//             ) : (
//               <div
//                 style={{
//                   width: "100%",
//                   height: 200,
//                   background: "#eee",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   color: "#666",
//                 }}
//               >
//                 No image
//               </div>
//             )}
//             <div style={{ padding: "1rem" }}>
//               <h2 style={{ marginBottom: "0.5rem" }}>
//                 {blog.title || "(No title)"}
//               </h2>
//               <p>{blog.excerpt || "(No excerpt)"}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );

//   const BlogDetail = () => {
//     if (!selectedBlog) return null;
//     return (
//       <div style={{ maxWidth: "800px", margin: "2rem auto", padding: "1rem", background: "#fff", borderRadius: 8 }}>
//         <button onClick={() => setSelectedBlog(null)} style={{ marginBottom: "1rem", background: "#ff4d00", color: "#fff", border: "none", borderRadius: "6px", padding: "0.5rem 1.2rem", cursor: "pointer" }}>← Back to Blogs</button>
//         <h1>{selectedBlog.title}</h1>
//         {selectedBlog.imageUrl && <img src={selectedBlog.imageUrl} alt={selectedBlog.title} style={{ width: "100%", height: "300px", objectFit: "cover", marginBottom: 12 }} />}
//         <div style={{ lineHeight: "1.6", fontSize: "18px" }} dangerouslySetInnerHTML={{ __html: selectedBlog.content }} />
//       </div>
//     );
//   };

//   return (
//     <div className="media-center-section py-4">
//       <Container className="bg-white p-4 rounded-3 shadow-sm">
//         <h2 className="header-title mb-4">CHARUSAT in the Media</h2>
//         <Tab.Container activeKey={activeCategory}>
//           <Row>
//             <Col md={3} className="mb-3">
//               <div className="media-menu-card">
//                 <nav className="media-nav">
//                   {categories.map((cat, idx) => (
//                     <div key={cat.key}>
//                       <button
//                         className={`media-nav-btn${activeCategory === cat.key ? " active" : ""}`}
//                         onClick={() => handleCategory(cat)}
//                         type="button"
//                       >
//                         {cat.label}
//                       </button>
//                       {idx < categories.length - 1 && <hr className="media-nav-separator" />}
//                     </div>
//                   ))}
//                 </nav>
//               </div>
//             </Col>
//             <Col md={9}>
//               <div className="media-subnav mb-3">
//                 {categories
//                   .find((cat) => cat.key === activeCategory)
//                   .sub.map((sub) => (
//                     <button
//                       key={sub.key}
//                       className={`media-subnav-btn ${activeSub === sub.key ? "active" : ""}`}
//                       onClick={() => { setActiveSub(sub.key); setSelectedBlog(null); }}
//                     >
//                       {sub.label}
//                     </button>
//                   ))}
//               </div>
//               <div className="media-grid">
//                 {activeSub === "blog-list" ? (
//                   blogsLoading ? (
//                     <div className="no-media">Loading blogs...</div>
//                   ) : blogsError ? (
//                     <div className="no-media">{blogsError}</div>
//                   ) : selectedBlog ? (
//                     <BlogDetail />
//                   ) : blogs.length === 0 ? (
//                     <div className="no-media">No blogs available.</div>
//                   ) : (
//                     <BlogGrid />
//                   )
//                 ) : (mediaData[activeSub] || []).length === 0 ? (
//                   <div className="no-media">No items available.</div>
//                 ) : (
//                   <Row xs={1} sm={2} md={3} className="g-4">
//                     {(mediaData[activeSub] || []).map((item, idx) => (
//                       <Col key={idx}>
//                         <a href={item.link} className="media-card" target="_blank" rel="noopener noreferrer">
//                           <div className="media-thumb"><img src={item.img} alt={item.title} /></div>
//                           <div className="media-title">{item.title}</div>
//                           <div className="media-readmore">Read More →</div>
//                         </a>
//                       </Col>
//                     ))}
//                   </Row>
//                 )}
//               </div>
//             </Col>
//           </Row>
//         </Tab.Container>
//       </Container>
//       <style jsx>{`
//         .media-center-section { background: #fff9f1; min-height: 80vh; }
//         .header-title { color: white; background: linear-gradient(135deg, #ff4d00, #ff6b00); padding: 1rem; border-radius: 10px; text-align: center; font-weight: bold; font-size: 2rem; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.08); }
//         .media-menu-card { background: #fff; border-radius: 12px; box-shadow: 0 2px 12px rgba(0, 78, 146, 0.06); border: 1.5px solid #e5eaf2; padding: 1.2rem 0.5rem; font-family: "Segoe UI", Arial, sans-serif; margin-bottom: 1.5rem; position: sticky; top: 2rem; }
//         .media-nav { display: flex; flex-direction: column; gap: 0; }
//         .media-nav-btn { width: 100%; background: none; border: none; outline: none; text-align: left; padding: 0.9rem 1.2rem; font-size: 1.13rem; font-weight: 600; color: #004e92; font-family: inherit; letter-spacing: 0.5px; border-left: 4px solid transparent; border-radius: 0; cursor: pointer; transition: background 0.18s, color 0.18s, border-left 0.18s; }
//         .media-nav-btn.active, .media-nav-btn:hover { background: #f5f8ff; color: #ff4d00; border-left: 4px solid #ff4d00; }
//         .media-nav-separator { border: none; border-top: 1.5px solid #e5eaf2; margin: 0 0 0 1.2rem; width: calc(100% - 1.2rem); }
//         .media-subnav { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem; }
//         .media-subnav-btn { background: #fff8e7; color: #004e92; border: none; border-radius: 6px; padding: 0.5rem 1.2rem; font-weight: 500; cursor: pointer; transition: background 0.2s, color 0.2s; }
//         .media-subnav-btn.active, .media-subnav-btn:hover { background: #ff4d00; color: #fff; }
//         .media-grid { min-height: 200px; }
//         .media-card { display: flex; flex-direction: column; background: #fff; border-radius: 10px; box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06); overflow: hidden; text-decoration: none; color: #004e92; transition: box-shadow 0.2s, transform 0.2s; height: 100%; }
//         .media-card:hover { box-shadow: 0 6px 24px rgba(255, 77, 0, 0.1); transform: translateY(-3px) scale(1.02); }
//         .media-thumb img { width: 100%; height: 160px; object-fit: cover; background: #eee; }
//         .media-title { font-weight: 600; font-size: 1.08rem; padding: 0.8rem 1rem 0.3rem 1rem; color: #222; flex: 1; }
//         .media-readmore { color: #ff4d00; font-weight: 500; padding: 0 1rem 0.8rem 1rem; }
//         .no-media { color: #888; text-align: center; padding: 2rem 0; }
//         @media (max-width: 900px) {
//           .header-title { font-size: 1.3rem; padding: 0.7rem; }
//           .media-menu-card { position: static; padding: 0.7rem 0.2rem; }
//         }
//         @media (max-width: 700px) {
//           .media-menu-card { border-radius: 8px; padding: 0.5rem 0.1rem; margin-bottom: 1rem; }
//           .media-nav { flex-direction: row; overflow-x: auto; gap: 0.5rem; }
//           .media-nav-btn { min-width: 120px; text-align: center; padding: 0.7rem 0.5rem; border-left: none; border-bottom: 3px solid transparent; border-radius: 0; }
//           .media-nav-btn.active, .media-nav-btn:hover { border-left: none; border-bottom: 3px solid #ff4d00; background: #f5f8ff; }
//           .media-nav-separator { display: none; }
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";

import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";
import useSWR, { mutate } from "swr";
import DOMPurify from "dompurify";
import Image from "next/image";

// ---------- Config ----------
const categories = [
  {
    key: "current",
    label: "Current",
    sub: [
      { key: "news", label: "News" },
      { key: "events", label: "Events" },
      { key: "views", label: "Views" },
      { key: "research", label: "Research" },
      { key: "happenings", label: "Happenings" },
      { key: "awards", label: "Awards" },
    ],
  },
  {
    key: "media",
    label: "Photos/Videos",
    sub: [
      { key: "photos", label: "Photos" },
      { key: "videos-short", label: "Videos (Short)" },
      { key: "videos-long", label: "Videos (Long)" },
    ],
  },
  {
    key: "print",
    label: "Print Media",
    sub: [
      { key: "clippings", label: "Press Clippings" },
      { key: "in-news", label: "In the News" },
    ],
  },
  {
    key: "electronic",
    label: "Electronic Media",
    sub: [
      { key: "tv", label: "TV" },
      { key: "youtube", label: "YouTube" },
      { key: "facebook", label: "Facebook" },
    ],
  },
  {
    key: "articles",
    label: "Articles/Blogs",
    sub: [
      { key: "magazine", label: "Magazine" },
      { key: "newspaper", label: "Newspaper" },
      { key: "blog-list", label: "Blogs" },
    ],
  },
];

const staticMediaData = {
  news: [
    {
      title: "CHARUSAT wins national award",
      img: "/media/news1.jpg",
      link: "#",
    },
    {
      title: "Research breakthrough in AI",
      img: "/media/news2.jpg",
      link: "#",
    },
  ],
  events: [
    { title: "Annual Tech Fest", img: "/media/event1.jpg", link: "#" },
    { title: "Convocation 2025", img: "/media/event2.jpg", link: "#" },
  ],
};

// ---------- Helpers ----------
const fetcherText = (url) => fetch(url).then((r) => r.text());
const fetcherJson = (url) =>
  fetch(url).then((r) => {
    if (!r.ok) throw new Error("Network error");
    return r.json();
  });

function formatDate(d) {
  if (!d) return "";
  const dt = new Date(d);
  if (isNaN(dt)) return "";
  return dt.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function buildTOCFromHTML(html) {
  if (!html) return [];
  const doc = new DOMParser().parseFromString(html, "text/html");
  const headings = Array.from(doc.querySelectorAll("h2, h3"));
  return headings.map((h, idx) => {
    const text = h.textContent?.trim() || `Section ${idx + 1}`;
    const id =
      h.id ||
      text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, "");
    h.id = id;
    return { id, text, level: h.tagName.toLowerCase() === "h3" ? 3 : 2 };
  });
}

function injectIdsForTOC(html, toc) {
  if (!html || toc.length === 0) return html;
  let doc = new DOMParser().parseFromString(html, "text/html");
  toc.forEach(({ id, text }) => {
    const node =
      doc.getElementById(id) ||
      Array.from(doc.querySelectorAll("h2, h3")).find(
        (h) => h.textContent?.trim() === text
      );
    if (node && !node.id) node.id = id;
  });
  return doc.body.innerHTML;
}

// ---------- Page ----------
export default function MediaCenterPage() {
  const [activeCategory, setActiveCategory] = useState("articles");
  const [activeSub, setActiveSub] = useState("blog-list");
  const [selectedIndex, setSelectedIndex] = useState(null); // index within blogs array

  const { data, error, isLoading } = useSWR(
    activeSub === "blog-list" ? "/api/blogs" : null,
    fetcherJson,
    { revalidateOnFocus: false }
  );

  const blogs = data?.blogs || [];

  const selectedBlog = useMemo(() => {
    if (selectedIndex == null || !blogs.length) return null;
    return blogs[selectedIndex] || null;
  }, [selectedIndex, blogs]);

  // Prefetch scraped/fallback content on hover (only if needed)
  const prefetchContent = useCallback(async (blog) => {
    if (blog?.contentHtml) return; // RSS already has content
    const key = `/api/blogs/scrape-post?url=${encodeURIComponent(blog.link)}`;
    try {
      await mutate(key, fetcherJson(key), { revalidate: false });
    } catch (_) {}
  }, []);

  const [detail, setDetail] = useState({ sanitized: "", toc: [] });
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [detailError, setDetailError] = useState(null);

  // Load detailed content (RSS-first; fallback to scrape)
  useEffect(() => {
    async function loadDetail() {
      if (!selectedBlog) {
        setDetail({ sanitized: "", toc: [] });
        setDetailError(null);
        return;
      }
      setLoadingDetail(true);
      setDetailError(null);

      try {
        let html = selectedBlog.contentHtml;
        if (!html) {
          const key = `/api/blogs/scrape-post?url=${encodeURIComponent(
            selectedBlog.link
          )}`;
          const data = await (mutate.get?.(key) || fetcherJson(key));
          html = data?.content || "";
        }

        // Build TOC before sanitize so we can preserve headings/ids
        const toc = buildTOCFromHTML(html);
        const withIds = injectIdsForTOC(html, toc);
        const clean = DOMPurify.sanitize(withIds, {
          USE_PROFILES: { html: true },
          ADD_TAGS: [
            "iframe",
            "img",
            "figure",
            "figcaption",
            "video",
            "audio",
            "pre",
            "code",
          ],
          ADD_ATTR: [
            "allow",
            "frameborder",
            "scrolling",
            "src",
            "alt",
            "width",
            "height",
            "loading",
            "class",
            "data-testid",
            "referrerpolicy",
            "allowfullscreen",
          ],
          FORBID_TAGS: ["style", "form"],
        });

        setDetail({ sanitized: clean, toc });
      } catch (e) {
        console.error(e);
        setDetailError("Failed to load blog content.");
      } finally {
        setLoadingDetail(false);
      }
    }
    loadDetail();
  }, [selectedBlog]);

  // Reading progress bar (detail view)
  const progressRef = useRef(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (!selectedBlog) return;
    function onScroll() {
      const el = document.getElementById("blog-content");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY - (el.offsetTop || 0);
      const ratio = Math.min(1, Math.max(0, scrolled / (total || 1)));
      setProgress(ratio * 100);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [selectedBlog]);

  const handleCategory = (cat) => {
    setActiveCategory(cat.key);
    setActiveSub(cat.sub[0].key);
    setSelectedIndex(null);
  };

  const handleBlogClick = async (idx) => {
    setSelectedIndex(idx);
    // Smooth scroll to top of detail area
    setTimeout(() => {
      const header = document.getElementById("detail-top");
      if (header) header.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };

  const copyLink = async () => {
    const url = selectedBlog?.link;
    if (!url) return;
    try {
      await navigator.clipboard.writeText(url);
      alert("Link copied!");
    } catch (_) {}
  };

  const shareNative = async () => {
    if (!selectedBlog) return;
    if (navigator.share) {
      try {
        await navigator.share({
          title: selectedBlog.title,
          url: selectedBlog.link,
        });
      } catch (_) {}
    } else {
      copyLink();
    }
  };

  const nextPrev = useMemo(() => {
    if (selectedIndex == null) return { prev: null, next: null };
    const prev =
      selectedIndex > 0
        ? { index: selectedIndex - 1, item: blogs[selectedIndex - 1] }
        : null;
    const next =
      selectedIndex < blogs.length - 1
        ? { index: selectedIndex + 1, item: blogs[selectedIndex + 1] }
        : null;
    return { prev, next };
  }, [selectedIndex, blogs]);

  // ---------- UI subcomponents ----------
  const SkeletonCard = () => (
    <div className="card skeleton">
      <div className="thumb" />
      <div className="lines">
        <div className="line w70" />
        <div className="line w50" />
      </div>
    </div>
  );

  const BlogGrid = () => (
    <div className="grid">
      {(blogs || []).map((b, i) => (
        <button
          key={b.link + i}
          className="card"
          onClick={() => handleBlogClick(i)}
          onMouseEnter={() => prefetchContent(b)}
        >
          <div className="thumb">
            {b.imageUrl ? (
              <Image
                src={b.imageUrl}
                alt={b.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            ) : (
              <div className="noimg">No image</div>
            )}
          </div>
          <div className="meta">
            <div className="kicker">Blog</div>
            <h3>{b.title}</h3>
            <p className="excerpt">{b.excerpt}</p>
            <div className="byline">
              <span>{b.author || "Unknown"}</span>
              <span>•</span>
              <span>{formatDate(b.publishedAt)}</span>
            </div>
          </div>
        </button>
      ))}
    </div>
  );

  const BlogDetail = () => {
    if (!selectedBlog) return null;
    return (
      <article className="detail">
        <div id="detail-top" />
        <div className="progress" aria-hidden>
          <div className="bar" style={{ width: `${progress}%` }} />
        </div>

        <div className="hero">
          <div className="breadcrumbs">
            <button onClick={() => setSelectedIndex(null)} className="back">
              ← Back to Blogs
            </button>
          </div>
          <h1 className="title">{selectedBlog.title}</h1>
          <div className="sub">
            <div className="author">
              <div className="avatar" aria-hidden>
                🧑
              </div>
              <div>
                <div className="name">{selectedBlog.author || "Unknown"}</div>
                <div className="date">
                  {formatDate(selectedBlog.publishedAt)}
                </div>
              </div>
            </div>
            <div className="actions">
              <button onClick={shareNative} className="pill">
                Share
              </button>
              <button onClick={copyLink} className="pill">
                Copy link
              </button>
            </div>
          </div>
          {selectedBlog.imageUrl && (
            <div className="hero-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={selectedBlog.imageUrl} alt={selectedBlog.title} />
            </div>
          )}
        </div>

        {detailError && <div className="error">{detailError}</div>}
        {loadingDetail ? (
          <div className="detail-skel">
            <div className="line" />
            <div className="line w80" />
            <div className="line w60" />
            <div className="line w90" />
          </div>
        ) : (
          <div className="content-with-toc">
            {detail.toc.length > 0 && (
              <nav className="toc">
                <div className="toc-title">On this page</div>
                <ul>
                  {detail.toc.map((t) => (
                    <li key={t.id} className={t.level === 3 ? "lvl3" : "lvl2"}>
                      <a href={`#${t.id}`}>{t.text}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
            <div
              id="blog-content"
              className="content prose"
              dangerouslySetInnerHTML={{ __html: detail.sanitized }}
            />
          </div>
        )}

        {(nextPrev.prev || nextPrev.next) && (
          <div className="pager">
            {nextPrev.prev ? (
              <button
                className="navcard"
                onClick={() => handleBlogClick(nextPrev.prev.index)}
              >
                ← {nextPrev.prev.item?.title}
              </button>
            ) : (
              <div />
            )}
            {nextPrev.next ? (
              <button
                className="navcard"
                onClick={() => handleBlogClick(nextPrev.next.index)}
              >
                {nextPrev.next.item?.title} →
              </button>
            ) : (
              <div />
            )}
          </div>
        )}
      </article>
    );
  };

  return (
    <div className="wrap">
      <div className="header">CHARUSAT in the Media</div>
      <div className="layout">
        {/* Sidebar */}
        <aside className="sidebar">
          {categories.map((cat, idx) => (
            <div key={cat.key} className="side-group">
              <button
                className={`side-btn ${
                  activeCategory === cat.key ? "active" : ""
                }`}
                onClick={() => handleCategory(cat)}
              >
                {cat.label}
              </button>
              {activeCategory === cat.key && (
                <div className="subnav">
                  {cat.sub.map((s) => (
                    <button
                      key={s.key}
                      className={`sub-btn ${
                        activeSub === s.key ? "active" : ""
                      }`}
                      onClick={() => {
                        setActiveSub(s.key);
                        setSelectedIndex(null);
                      }}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              )}
              {idx < categories.length - 1 && <hr className="sep" />}
            </div>
          ))}
        </aside>

        {/* Main */}
        <main className="main">
          {activeSub === "blog-list" ? (
            selectedIndex != null ? (
              <BlogDetail />
            ) : isLoading ? (
              <div className="grid">
                {Array.from({ length: 6 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))}
              </div>
            ) : error ? (
              <div className="error center">
                Failed to load blogs from Medium.
              </div>
            ) : blogs.length === 0 ? (
              <div className="empty center">No blogs available.</div>
            ) : (
              <BlogGrid />
            )
          ) : (staticMediaData[activeSub] || []).length === 0 ? (
            <div className="empty center">No items available.</div>
          ) : (
            <div className="grid">
              {(staticMediaData[activeSub] || []).map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  className="card link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="thumb">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="meta">
                    <h3>{item.title}</h3>
                    <div className="kicker">Read more →</div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Styles – modern, clean, responsive */}
      <style jsx>{`
        :global(html) {
          scroll-behavior: smooth;
        }
        .wrap {
          background: #fff9f1;
          min-height: 100vh;
        }
        .header {
          color: #fff;
          text-align: center;
          font-weight: 800;
          font-size: 2rem;
          background: linear-gradient(135deg, #ff4d00, #ff6b00);
          padding: 1rem;
          border-radius: 0 0 16px 16px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
        }
        .layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 1.5rem;
          padding: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .sidebar {
          background: #fff;
          border: 1px solid #e9eef6;
          border-radius: 12px;
          position: sticky;
          top: 1rem;
          height: fit-content;
          padding: 0.75rem;
          box-shadow: 0 6px 16px rgba(0, 78, 146, 0.05);
        }
        .side-group {
          padding: 0.25rem 0;
        }
        .side-btn {
          width: 100%;
          border: 0;
          background: transparent;
          text-align: left;
          font-weight: 700;
          color: #053a6b;
          padding: 0.75rem 0.9rem;
          border-left: 4px solid transparent;
          border-radius: 8px;
          cursor: pointer;
        }
        .side-btn.active,
        .side-btn:hover {
          background: #f5f8ff;
          color: #ff4d00;
          border-left-color: #ff4d00;
        }
        .subnav {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          padding: 0.4rem 0.2rem 0.8rem;
        }
        .sub-btn {
          border: 0;
          background: #fff8e7;
          color: #053a6b;
          border-radius: 6px;
          padding: 0.4rem 0.9rem;
          font-weight: 600;
          cursor: pointer;
        }
        .sub-btn.active,
        .sub-btn:hover {
          background: #ff4d00;
          color: #fff;
        }
        .sep {
          border: 0;
          border-top: 1px solid #e9eef6;
          margin: 0.5rem 0;
        }

        .main {
          min-height: 60vh;
        }
        .grid {
          display: grid;
          gap: 1.25rem;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        }
        .card {
          display: flex;
          flex-direction: column;
          text-align: left;
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #eef2f8;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.04);
          transition: transform 0.15s ease, box-shadow 0.15s ease,
            border-color 0.15s ease;
          cursor: pointer;
          padding: 0;
          position: relative;
        }
        .card:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(255, 77, 0, 0.12);
          border-color: #ffe1d1;
        }
        .card.link {
          text-decoration: none;
          color: inherit;
        }
        .thumb {
          position: relative;
          width: 100%;
          height: 170px;
          background: #f0f2f6;
        }
        .noimg {
          width: 100%;
          height: 100%;
          display: grid;
          place-items: center;
          color: #888;
          font-size: 0.9rem;
        }
        .meta {
          padding: 0.9rem 1rem 1rem;
          display: grid;
          gap: 0.35rem;
        }
        .kicker {
          color: #ff4d00;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-size: 0.76rem;
        }
        .excerpt {
          color: #475569;
          line-height: 1.5;
          min-height: 2.6em;
        }
        .byline {
          color: #64748b;
          font-size: 0.86rem;
          display: flex;
          gap: 0.4rem;
          align-items: center;
        }

        .skeleton {
          animation: pulse 1.2s ease-in-out infinite;
        }
        .skeleton .thumb {
          background: #eef2f7;
        }
        .skeleton .lines {
          padding: 0.9rem;
          display: grid;
          gap: 0.5rem;
        }
        .skeleton .line {
          height: 10px;
          background: #eef2f7;
          border-radius: 6px;
        }
        .skeleton .line.w70 {
          width: 70%;
        }
        .skeleton .line.w50 {
          width: 50%;
        }
        @keyframes pulse {
          0% {
            opacity: 0.9;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 0.9;
          }
        }

        .detail {
          background: #fff;
          border: 1px solid #eef2f8;
          border-radius: 12px;
          padding: 0;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.04);
        }
        .progress {
          position: sticky;
          top: 0;
          height: 3px;
          background: transparent;
          z-index: 10;
        }
        .progress .bar {
          height: 3px;
          background: #ff4d00;
          transition: width 0.1s linear;
        }

        .hero {
          padding: 1rem 1.25rem 0.5rem;
        }
        .breadcrumbs {
          margin-bottom: 0.4rem;
        }
        .back {
          border: 0;
          background: #ffe8dc;
          color: #993000;
          padding: 0.4rem 0.7rem;
          border-radius: 6px;
          font-weight: 700;
          cursor: pointer;
        }
        .title {
          font-size: 2rem;
          line-height: 1.2;
          margin: 0.6rem 0 0.4rem;
          color: #1f2937;
        }
        .sub {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 0.7rem;
        }
        .author {
          display: flex;
          gap: 0.6rem;
          align-items: center;
          color: #475569;
        }
        .avatar {
          width: 36px;
          height: 36px;
          background: #f3f4f6;
          border-radius: 50%;
          display: grid;
          place-items: center;
        }
        .actions {
          display: flex;
          gap: 0.5rem;
        }
        .pill {
          border: 1px solid #ffd0bb;
          background: #fff;
          color: #ff4d00;
          border-radius: 999px;
          padding: 0.4rem 0.9rem;
          font-weight: 700;
          cursor: pointer;
        }
        .pill:hover {
          background: #fff3ec;
        }

        .hero-img {
          margin: 0.6rem -1px 0;
          border-top: 1px solid #f2f4f8;
        }
        .hero-img img {
          width: 100%;
          height: clamp(220px, 42vw, 420px);
          object-fit: cover;
          display: block;
        }

        .content-with-toc {
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 1.25rem;
          padding: 1rem 1.25rem 1.25rem;
        }
        .toc {
          position: sticky;
          top: 3.25rem;
          align-self: start;
          background: #fff;
          border: 1px solid #eef2f8;
          border-radius: 10px;
          padding: 0.75rem;
        }
        .toc-title {
          font-weight: 800;
          color: #334155;
          margin-bottom: 0.5rem;
        }
        .toc ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 0.35rem;
        }
        .toc a {
          color: #0f172a;
          text-decoration: none;
          font-size: 0.95rem;
        }
        .toc a:hover {
          text-decoration: underline;
        }
        .toc li.lvl3 a {
          padding-left: 0.75rem;
          font-size: 0.9rem;
          color: #334155;
        }

        .content {
          color: #1f2937;
          line-height: 1.75;
          font-size: 1.05rem;
        }
        .content :global(h2) {
          margin-top: 1.6rem;
          font-size: 1.5rem;
        }
        .content :global(h3) {
          margin-top: 1.2rem;
          font-size: 1.2rem;
        }
        .content :global(blockquote) {
          margin: 1rem 0;
          padding: 0.75rem 1rem;
          background: #fff7ed;
          border-left: 4px solid #ffb48a;
          border-radius: 8px;
        }
        .content :global(pre) {
          background: #0b1020;
          color: #f8fafc;
          padding: 1rem;
          border-radius: 10px;
          overflow: auto;
          font-size: 0.95rem;
        }
        .content :global(code) {
          background: #f3f4f6;
          padding: 0.15rem 0.35rem;
          border-radius: 6px;
        }
        .content :global(img),
        .content :global(figure) {
          max-width: 100%;
          height: auto;
          display: block;
          margin: 1rem auto;
        }
        .content :global(iframe) {
          width: 100%;
          min-height: 360px;
          border: 0;
          border-radius: 8px;
          overflow: hidden;
        }

        .pager {
          border-top: 1px solid #eef2f8;
          padding: 0.8rem 1.25rem 1.25rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.6rem;
        }
        .navcard {
          background: #fff;
          border: 1px solid #ffd9c9;
          border-radius: 10px;
          padding: 0.7rem 0.9rem;
          box-shadow: 0 6px 14px rgba(255, 77, 0, 0.08);
          cursor: pointer;
          text-align: left;
          color: #7a2e10;
          font-weight: 700;
        }
        .navcard:hover {
          background: #fff7f2;
        }

        .error {
          color: #b91c1c;
          background: #fee2e2;
          border: 1px solid #fecaca;
          border-radius: 8px;
          padding: 0.75rem 1rem;
        }
        .empty,
        .center {
          text-align: center;
          padding: 3rem 0;
        }

        @media (max-width: 1024px) {
          .layout {
            grid-template-columns: 1fr;
          }
          .sidebar {
            position: static;
          }
          .content-with-toc {
            grid-template-columns: 1fr;
          }
          .toc {
            position: static;
            margin-bottom: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
}
