"use client";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

const categories = [
  { key: "current", label: "Current", sub: [{ key: "news", label: "News" }, { key: "events", label: "Events" }, { key: "views", label: "Views" }, { key: "research", label: "Research" }, { key: "happenings", label: "Happenings" }, { key: "awards", label: "Awards" }] },
  { key: "media", label: "Photos/Videos", sub: [{ key: "photos", label: "Photos" }, { key: "videos-short", label: "Videos (Short)" }, { key: "videos-long", label: "Videos (Long)" }] },
  { key: "print", label: "Print Media", sub: [{ key: "clippings", label: "Press Clippings" }, { key: "in-news", label: "In the News" }] },
  { key: "electronic", label: "Electronic Media", sub: [{ key: "tv", label: "TV" }, { key: "youtube", label: "YouTube" }, { key: "facebook", label: "Facebook" }] },
  { key: "articles", label: "Articles/Blogs", sub: [{ key: "magazine", label: "Magazine" }, { key: "newspaper", label: "Newspaper" }, { key: "blog-list", label: "Blogs" }] }
];

const mediaData = {
  news: [{ title: "CHARUSAT wins national award", img: "/media/news1.jpg", link: "#" }, { title: "Research breakthrough in AI", img: "/media/news2.jpg", link: "#" }],
  events: [{ title: "Annual Tech Fest", img: "/media/event1.jpg", link: "#" }, { title: "Convocation 2025", img: "/media/event2.jpg", link: "#" }]
};

export default function MediaCenter() {
  // show blogs by default for quick dev testing
  const [activeCategory, setActiveCategory] = useState("articles");
  const [activeSub, setActiveSub] = useState("blog-list");

  const [blogs, setBlogs] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(false);
  const [blogsError, setBlogsError] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);

  // use env if present otherwise fallback
  const API_URL = (process.env.NEXT_PUBLIC_STRAPI_API_URL || "https://university-cms-cv0q.onrender.com").replace(/\/$/, "");

  const handleCategory = (cat) => {
    setActiveCategory(cat.key);
    setActiveSub(cat.sub[0].key);
    setSelectedBlog(null);
  };

  // NORMALIZE helper: take either item.attributes (Strapi v4 default) or the item itself (your current object)
  function normalizeItem(item) {
    const raw = item.attributes ?? item; // fallback to item if attributes not present
    // Title field may be "Title" (capital) in your API; normalize to title
    const title = raw.title ?? raw.Title ?? "";
    const excerpt = raw.excerpt ?? raw.excert ?? "";
    const content = raw.content ?? "";
    const slug = raw.slug ?? "";
    // featuredImage may be either: raw.featuredImage (direct object) OR raw.featuredImage.data.attributes
    let featured = null;
    if (raw.featuredImage) {
      // if it's nested as { data: { id, attributes: { url, formats... } } }
      if (raw.featuredImage.data && raw.featuredImage.data.attributes) {
        featured = { id: raw.featuredImage.data.id, ...raw.featuredImage.data.attributes };
      } else {
        // direct object shape (your current API response)
        featured = raw.featuredImage;
      }
    }
    return {
      id: item.id ?? raw.id,
      title,
      excerpt,
      content,
      slug,
      publishedAt: raw.publishedAt ?? raw.published,
      featuredImage: featured,
      raw // keep raw for debugging if needed
    };
  }

  useEffect(() => {
    if (activeSub !== "blog-list") return;

    setBlogsLoading(true);
    setBlogsError(null);

    const url = `${API_URL}/api/blogs?populate=*&sort[0]=publishedAt:desc`;
    console.log("Fetching blogs from:", url);

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Network response not ok");
        return res.json();
      })
      .then((json) => {
        console.log("raw json.data:", json.data);
        // json.data may be array of flat items or items with attributes; normalize each
        const mapped = (json.data || []).map((item) => normalizeItem(item));
        console.log("normalized blogs:", mapped);
        setBlogs(mapped);
        setBlogsLoading(false);
      })
      .catch((err) => {
        console.error("Failed fetching blogs:", err);
        setBlogsError("Failed to load blogs.");
        setBlogsLoading(false);
      });
  }, [activeSub, API_URL]);

  const handleBlogClick = (blog) => {
    // If blog already has full content, set selected directly to avoid extra fetch
    if (blog.content) {
      setSelectedBlog(blog);
      return;
    }

    setBlogsLoading(true);
    setBlogsError(null);

    const filtersUrl = `${API_URL}/api/blogs?filters[slug][$eq]=${encodeURIComponent(blog.slug)}&populate=*`;
    fetch(filtersUrl)
      .then((res) => {
        if (!res.ok) throw new Error("Detail fetch failed");
        return res.json();
      })
      .then((json) => {
        const item = json.data && json.data[0] ? json.data[0] : null;
        if (!item) throw new Error("No blog detail found");
        const normalized = normalizeItem(item);
        setSelectedBlog(normalized);
        setBlogsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load blog detail:", err);
        setBlogsError("Failed to load blog detail.");
        setBlogsLoading(false);
      });
  };

  // safe image builder
  function buildImageUrl(imgPath) {
    if (!imgPath) return null;
    if (imgPath.startsWith("http")) return imgPath;
    // ensure no double slash
    return `${API_URL}${imgPath.startsWith("/") ? "" : "/"}${imgPath}`;
  }

  const BlogGrid = () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "2rem", padding: "2rem" }}>
      {blogs.map((blog) => {
        const imgObj = blog.featuredImage;
        // prefer formats.small, fallback to url
        const imgPath = imgObj?.formats?.small?.url ?? imgObj?.formats?.thumbnail?.url ?? imgObj?.url ?? null;
        const imageUrl = buildImageUrl(imgPath);

        return (
          <div key={blog.id} style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }} onClick={() => handleBlogClick(blog)}>
            <div style={{ border: "1px solid #ccc", borderRadius: "8px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", background: "#fff" }}>
              {imageUrl ? <img src={imageUrl} alt={blog.title || "blog"} style={{ width: "100%", height: "200px", objectFit: "cover" }} /> : <div style={{ width: "100%", height: 200, background: "#eee", display: "flex", alignItems: "center", justifyContent: "center", color: "#666" }}>No image</div>}
              <div style={{ padding: "1rem" }}>
                <h2 style={{ marginBottom: "0.5rem" }}>{blog.title || "(No title)"}</h2>
                <p>{blog.excerpt || "(No excerpt)"}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  const BlogDetail = () => {
    if (!selectedBlog) return null;
    const imgObj = selectedBlog.featuredImage;
    const imgPath = imgObj?.formats?.small?.url ?? imgObj?.formats?.thumbnail?.url ?? imgObj?.url ?? null;
    const imageUrl = buildImageUrl(imgPath);

    return (
    <div style={{ maxWidth: "800px", margin: "2rem auto", padding: "1rem" }}>
      <button onClick={() => setSelectedBlog(null)} style={{
        marginBottom: "1rem",
        background: "#ff4d00",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        padding: "0.5rem 1.2rem",
        cursor: "pointer"
      }}>
        ← Back to Blogs
      </button>
      <h1>{selectedBlog.title}</h1>
      {imageUrl && <img src={imageUrl} alt={selectedBlog.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />}
      
      {/* Render Markdown content */}
      <ReactMarkdown
  components={{
    p: ({node, ...props}) => <p style={{ marginBottom: "1rem", lineHeight: "1.7" }} {...props} />
  }}
>{selectedBlog.content}</ReactMarkdown>
    </div>
  );
  };

  return (
    <div className="media-center-section py-4">
      <Container className="bg-white p-4 rounded-3 shadow-sm">
        <h2 className="header-title mb-4">CHARUSAT in the Media</h2>
        <Tab.Container activeKey={activeCategory}>
          <Row>
            <Col md={3} className="mb-3">
              <div className="media-menu-card">
                <nav className="media-nav">
                  {categories.map((cat, idx) => (
                    <div key={cat.key}>
                      <button className={`media-nav-btn${activeCategory === cat.key ? " active" : ""}`} onClick={() => handleCategory(cat)} type="button">{cat.label}</button>
                      {idx < categories.length - 1 && <hr className="media-nav-separator" />}
                    </div>
                  ))}
                </nav>
              </div>
            </Col>

            <Col md={9}>
              <div className="media-subnav mb-3">
                {categories.find((cat) => cat.key === activeCategory).sub.map((sub) => (
                  <button key={sub.key} className={`media-subnav-btn ${activeSub === sub.key ? "active" : ""}`} onClick={() => { setActiveSub(sub.key); setSelectedBlog(null); }}>{sub.label}</button>
                ))}
              </div>

              <div className="media-grid">
                {activeSub === "blog-list" ? (
                  blogsLoading ? (<div className="no-media">Loading blogs...</div>) :
                    blogsError ? (<div className="no-media">{blogsError}</div>) :
                      selectedBlog ? (<BlogDetail />) :
                        blogs.length === 0 ? (<div className="no-media">No blogs available.</div>) :
                          (<BlogGrid />)
                ) : (mediaData[activeSub] || []).length === 0 ? (
                  <div className="no-media">No items available.</div>
                ) : (
                  <Row xs={1} sm={2} md={3} className="g-4">
                    {(mediaData[activeSub] || []).map((item, idx) => (
                      <Col key={idx}>
                        <a href={item.link} className="media-card" target="_blank" rel="noopener noreferrer">
                          <div className="media-thumb"><img src={item.img} alt={item.title} /></div>
                          <div className="media-title">{item.title}</div>
                          <div className="media-readmore">Read More →</div>
                        </a>
                      </Col>
                    ))}
                  </Row>
                )}
              </div>
            </Col>
          </Row>
        </Tab.Container>
      </Container>

      <style jsx>{`
        .media-center-section {
          background: #fff9f1;
          min-height: 80vh;
        }
        .header-title {
          color: white;
          background: linear-gradient(135deg, #ff4d00, #ff6b00);
          padding: 1rem;
          border-radius: 10px;
          text-align: center;
          font-weight: bold;
          font-size: 2rem;
          box-shadow: 0 4px 6px rgba(0,0,0,0.08);
        }
        .media-menu-card {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0,78,146,0.06);
          border: 1.5px solid #e5eaf2;
          padding: 1.2rem 0.5rem;
          font-family: 'Segoe UI', Arial, sans-serif;
          margin-bottom: 1.5rem;
          position: sticky;
          top: 2rem;
        }
        .media-nav {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .media-nav-btn {
          width: 100%;
          background: none;
          border: none;
          outline: none;
          text-align: left;
          padding: 0.9rem 1.2rem;
          font-size: 1.13rem;
          font-weight: 600;
          color: #004e92;
          font-family: inherit;
          letter-spacing: 0.5px;
          border-left: 4px solid transparent;
          border-radius: 0;
          cursor: pointer;
          transition: background 0.18s, color 0.18s, border-left 0.18s;
        }
        .media-nav-btn.active,
        .media-nav-btn:hover {
          background: #f5f8ff;
          color: #ff4d00;
          border-left: 4px solid #ff4d00;
        }
        .media-nav-separator {
          border: none;
          border-top: 1.5px solid #e5eaf2;
          margin: 0 0 0 1.2rem;
          width: calc(100% - 1.2rem);
        }
        .media-subnav {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        .media-subnav-btn {
          background: #fff8e7;
          color: #004e92;
          border: none;
          border-radius: 6px;
          padding: 0.5rem 1.2rem;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .media-subnav-btn.active, .media-subnav-btn:hover {
          background: #ff4d00;
          color: #fff;
        }
        .media-grid {
          min-height: 200px;
        }
        .media-card {
          display: flex;
          flex-direction: column;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          overflow: hidden;
          text-decoration: none;
          color: #004e92;
          transition: box-shadow 0.2s, transform 0.2s;
          height: 100%;
        }
        .media-card:hover {
          box-shadow: 0 6px 24px rgba(255,77,0,0.10);
          transform: translateY(-3px) scale(1.02);
        }
        .media-thumb img {
          width: 100%;
          height: 160px;
          object-fit: cover;
          background: #eee;
        }
        .media-title {
          font-weight: 600;
          font-size: 1.08rem;
          padding: 0.8rem 1rem 0.3rem 1rem;
          color: #222;
          flex: 1;
        }
        .media-readmore {
          color: #ff4d00;
          font-weight: 500;
          padding: 0 1rem 0.8rem 1rem;
        }
        .no-media {
          color: #888;
          text-align: center;
          padding: 2rem 0;
        }
        @media (max-width: 900px) {
          .header-title {
            font-size: 1.3rem;
            padding: 0.7rem;
          }
          .media-menu-card {
            position: static;
            padding: 0.7rem 0.2rem;
          }
        }
        @media (max-width: 700px) {
          .media-menu-card {
            border-radius: 8px;
            padding: 0.5rem 0.1rem;
            margin-bottom: 1rem;
          }
          .media-nav {
            flex-direction: row;
            overflow-x: auto;
            gap: 0.5rem;
          }
          .media-nav-btn {
            min-width: 120px;
            text-align: center;
            padding: 0.7rem 0.5rem;
            border-left: none;
            border-bottom: 3px solid transparent;
            border-radius: 0;
          }
          .media-nav-btn.active,
          .media-nav-btn:hover {
            border-left: none;
            border-bottom: 3px solid #ff4d00;
            background: #f5f8ff;
          }
          .media-nav-separator {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
