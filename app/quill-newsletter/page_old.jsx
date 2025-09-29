"use client";
import { Fragment } from "react";
import { Container, Row, Col, Card, Accordion } from "react-bootstrap";
import Link from "next/link";

const Newsletter = () => {
  const newsletters = [
    {
        volume: 10,
        issue: 2,
        date: "January-February 2025",
        link: "https://charusat.edu.in/flipbooks/Quill_Vol_10_2/",
        highlights: ["Faculty Publications", "Industry Collaborations", "Academic Excellence"]
      },
    {
      volume: 10,
      issue: 1,
      date: "July-December 2024",
      link: "https://charusat.edu.in/flipbooks/Quill_Vol_10_1/",
      highlights: ["Research Achievements", "Campus Events", "Student Success Stories"]
    } 
  ];

  return (
    <Fragment>
      <div className="newsletter-section p-4">
        <Container className="bg-white p-4 rounded-3 shadow-sm">
          <h2 className="header-title">CHARUSAT Chronicles: The Quill</h2>
          
          <Accordion className="mb-4">
            <Accordion.Item eventKey="0">
              <Accordion.Header>About The Quill</Accordion.Header>
              <Accordion.Body>
                <p className="welcome-text">
                  Welcome to Quill — the official newsletter of CHARUSAT University.
                  Through this publication, we bring you the latest updates on:
                </p>
                <ul className="feature-list">
                  <li>🎓 Academic Achievements</li>
                  <li>🏆 Accolades</li>
                  <li>🔬 Research Breakthroughs</li>
                  <li>🌟 Student Accomplishments</li>
                  <li>📚 Campus Events & Activities</li>
                  <li>🎤 Eminent Speakers</li>
                  <li>👥 Faculty Spotlight</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <div className="newsletter-grid">
            {newsletters.map((issue, index) => (
              <Card key={index} className="newsletter-card">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="volume-text">Vol. {issue.volume}, Issue {issue.issue}</h5>
                    <span className="date-badge">{issue.date}</span>
                  </div>
                  {/* <div className="highlights-section">
                    {issue.highlights.map((highlight, idx) => (
                      <span key={idx} className="highlight-badge">{highlight}</span>
                    ))}
                  </div> */}
                  <Link 
                    href={issue.link}
                    target="_blank"
                    className="read-button"
                  >
                    Read Now →
                  </Link>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Container>
      </div>

      <style jsx>{`
        .newsletter-section {
          background-color: #fff9f1;
          min-height: 70vh;
        }

        .header-title {
          color: white;
          background-color: #ff4d00;
          padding: 5px;
          border-radius: 8px;
          margin-bottom: 1rem;
          text-align: center;
          font-weight: bold;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .welcome-text {
          color: #0066b3;
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }

        .feature-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .feature-list li {
          margin: 0.5rem 0;
          color: #555;
          font-size: 1rem;
        }

        .newsletter-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }

        :global(.newsletter-card) {
          border: 1px solid #eee;
          border-radius: 12px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
          transition: transform 0.3s ease;
        }

        :global(.newsletter-card:hover) {
          transform: translateY(-5px);
        }

        .volume-text {
          color: #0066b3;
          margin: 0;
        }

        .date-badge {
          background: #f8f9fa;
          padding: 5px 10px;
          border-radius: 15px;
          font-size: 0.9rem;
          color: #666;
        }

        .highlights-section {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin: 1rem 0;
        }

        .highlight-badge {
          background: #e9ecef;
          padding: 5px 10px;
          border-radius: 15px;
          font-size: 0.85rem;
          color: #555;
        }

        :global(.read-button) {
          display: inline-block;
          background: #ff4d00;
          color: white;
          padding: 8px 20px;
          border-radius: 20px;
          text-decoration: none;
          transition: background 0.3s ease;
          margin-top: 1rem;
        }

        :global(.read-button:hover) {
          background: #0066b3;
          color: white;
          text-decoration: none;
        }

        @media (max-width: 768px) {
          .newsletter-grid {
            grid-template-columns: 1fr;
          }

          .highlights-section {
            margin: 0.5rem 0;
          }

          .feature-list li {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Newsletter;