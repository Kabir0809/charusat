"use client";
import { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// Import LinkedInFeed component
// import LinkedInFeed from "../../components/LinkedInFeed";

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
			{ key: "awards", label: "Awards" }
		]
	},
	{
		key: "media",
		label: "Photos/Videos",
		sub: [
			{ key: "photos", label: "Photos" },
			{ key: "videos-short", label: "Videos (Short)" },
			{ key: "videos-long", label: "Videos (Long)" }
		]
	},
	{
		key: "print",
		label: "Print Media",
		sub: [
			{ key: "clippings", label: "Press Clippings" },
			{ key: "in-news", label: "In the News" }
		]
	},
	{
		key: "electronic",
		label: "Electronic Media",
		sub: [
			{ key: "tv", label: "TV" },
			{ key: "youtube", label: "YouTube" },
			{ key: "facebook", label: "Facebook" }
		]
	},
	{
		key: "articles",
		label: "Articles/Blogs",
		sub: [
			{ key: "magazine", label: "Magazine" },
			{ key: "newspaper", label: "Newspaper" },
			{ key: "blog", label: "Blog" }
		]
	}
];

// Dummy data for demonstration
const mediaData = {
	news: [
		{ title: "CHARUSAT wins national award", img: "/media/news1.jpg", link: "#" },
		{ title: "Research breakthrough in AI", img: "/media/news2.jpg", link: "#" }
	],
	events: [
		{ title: "Annual Tech Fest", img: "/media/event1.jpg", link: "#" },
		{ title: "Convocation 2025", img: "/media/event2.jpg", link: "#" }
	],
	// ...add more for each subcategory
};

// JSON object for LinkedIn embed post links
const linkedinPosts = [
	{ id: 1, url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7374363903788679168" },
	{ id: 2, url: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7374363903788679168" },
	// Add more LinkedIn embed links here
];

export default function MediaCenter() {
	const [activeCategory, setActiveCategory] = useState(categories[0].key);
	const [activeSub, setActiveSub] = useState(categories[0].sub[0].key);

	// Update subcategory when main category changes
	const handleCategory = (cat) => {
		setActiveCategory(cat.key);
		setActiveSub(cat.sub[0].key);
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
											<button
												className={`media-nav-btn${
													activeCategory === cat.key ? " active" : ""
												}`}
												onClick={() => handleCategory(cat)}
												type="button"
											>
												{cat.label}
											</button>
											{idx < categories.length - 1 && (
												<hr className="media-nav-separator" />
											)}
										</div>
									))}
								</nav>
							</div>
						</Col>
						<Col md={9}>
							<div className="media-subnav mb-3">
								{categories
									.find((cat) => cat.key === activeCategory)
									.sub.map((sub) => (
										<button
											key={sub.key}
											className={`media-subnav-btn ${
												activeSub === sub.key ? "active" : ""
											}`}
											onClick={() => setActiveSub(sub.key)}
										>
											{sub.label}
										</button>
									))}
							</div>
							<div className="media-grid">
								{activeSub === "blog" ? (
									<Row xs={1} sm={2} md={3} className="g-4">
										{linkedinPosts.map((post) => (
											<Col key={post.id}>
												<div className="media-card">
													<div className="media-thumb">
														<iframe
															src={post.url}
															height="300"
															width="100%"
															frameBorder="0"
															allowFullScreen
															title={`linkedin-post-${post.id}`}
														></iframe>
													</div>
												</div>
											</Col>
										))}
									</Row>
								) : (mediaData[activeSub] || []).length === 0 ? (
									<div className="no-media">No items available.</div>
								) : (
									<Row xs={1} sm={2} md={3} className="g-4">
										{(mediaData[activeSub] || []).map((item, idx) => (
											<Col key={idx}>
												<a
													href={item.link}
													className="media-card"
													target="_blank"
													rel="noopener noreferrer"
												>
													<div className="media-thumb">
														<img src={item.img} alt={item.title} />
													</div>
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