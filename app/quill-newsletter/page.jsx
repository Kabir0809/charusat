"use client";
import { Fragment, useState, useEffect,useRef } from "react";
import { Container, Card, Accordion, Modal } from "react-bootstrap";
import { useRouter, useSearchParams } from "next/navigation";
import TeamQuill from "./TeamQuill";

const Newsletter = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentFlipbook, setCurrentFlipbook] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  // Handle URL parameters on component mount
  useEffect(() => {
    const vol = searchParams.get('vol');
    const issue = searchParams.get('issue');
    
    if (vol && issue) {
      const newsletter = newsletters.find(
        n => n.volume === parseInt(vol) && n.issue === parseInt(issue)
      );
      if (newsletter) {
        setCurrentFlipbook(newsletter.link);
        setShowModal(true);
      }
    }
  }, [searchParams]);

const isMounted = useRef(true);
useEffect(() => {
  isMounted.current = true;
  return () => { isMounted.current = false; };
}, []);
  
  // Function to handle read button click
  const handleReadClick = (volume, issue, link) => {
    setCurrentFlipbook(link);
    setShowModal(true);
    // Update URL without page refresh
    router.push(`/quill-newsletter?vol=${volume}&issue=${issue}`, { shallow: true });
  };
  const newsletters = [
    {
      volume: 10,
      issue: 4,
      date: "May-June 2025",
      link: "https://heyzine.com/flip-book/dd8ad43e35.html",
      highlights: ["Events @ CHARUSAT", "Industry Collaborations", "Innovations", "Academic Excellence"]
    },
    {
      volume: 10,
      issue: 3,
      date: "March-April 2025",
      link: "https://heyzine.com/flip-book/b31ac3779a.html",
      highlights: ["Faculty Publications", "Industry Collaborations", "Academic Excellence"]
    },
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
      <div className="newsletter-section">
        <Container className="bg-white p-4 rounded-3 shadow-sm">
          <h2 className="header-title">CHARUSAT Chronicles: The Quill</h2>
          
          <Accordion className="mb-4">
  <Accordion.Item eventKey="0">
    <Accordion.Header>About The Quill</Accordion.Header>
    <Accordion.Body>
      <div className="quill-content">
        <div className="quill-image-container mb-4">
          <img 
            src="/assets/images/quill/Quill_Title_Photo.webp"
            alt="Quill Newsletter"
            className="quill-image"
          />
        </div>
        
        <h3 className="welcome-text text-center">Welcome to Quill</h3>
        <p className="greeting-text mb-3">Greetings from CHARUSAT University!</p>
        
        <div className="content-section">
          <p>In the ever-evolving journey of academic excellence and innovation, we are delighted to introduce Quill — the official newsletter of CHARUSAT University. True to its name, Quill embodies the spirit of creativity, intellect, and expression that defines our vibrant community.</p>
          
          <p>With each issue, Quill promises to be your gateway to the latest happenings, achievements, and stories from our campus. From celebrating the extraordinary accomplishments of our students, faculty, and alumni in <strong>Accolades: CHARUSAT's Excellence</strong> to showcasing groundbreaking discoveries in <strong>Research Publications: The Edge of Exploration</strong>, this newsletter reflects the heartbeat of CHARUSAT.</p>
          
          <p>Dive into engaging conversations and transformative ideas through <strong>Eminent Speakers: Unveiling New Perceptions</strong>, experience the energy of campus life with <strong>Campus Buzz: Celebrating Campus Life</strong>, and be inspired by the brilliance of our academic and student community in <strong>Faculty Spotlight: Academic Excellence</strong> and <strong>Student Spotlight: Rising Stars</strong>.</p>
          
          <p>Quill is more than just a newsletter; it is a chronicle of our shared vision, growth, and success. Join us in celebrating the milestones and moments that make CHARUSAT a hub of inspiration and innovation.</p>
          
          <p className="journey-text">Let's embark on this journey together!</p>
          
          <div className="signature-section">
            <p className="mb-0">Warm regards,</p>
            <p className="mb-0"><strong>The Editorial Team</strong></p>
            <p>CHARUSAT University</p>
          </div>
        </div>
      </div>
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
                
                  
                  <button 
  onClick={() => handleReadClick(issue.volume, issue.issue, issue.link)}
  className="read-button"
>
  Read Now →
</button>
                </Card.Body>
              </Card>
            ))}
          </div>

          <Modal 
  show={showModal} 
  onHide={() => {
    setShowModal(false);
  setTimeout(() => {
    if (isMounted.current) {
      router.push('/quill-newsletter', { shallow: true });
    }
  }, 300);
}}
  size="xl"
  centered
  className="flipbook-modal"
>
  <Modal.Header closeButton>
    <Modal.Title>CHARUSAT Chronicles: The Quill</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <div className="flipbook-container">
      <iframe 
        allowFullScreen="allowfullscreen" 
        scrolling="no" 
        className="fp-iframe"
        src={currentFlipbook}
        title="CHARUSAT Quill Flipbook"
      />
    </div>
  </Modal.Body>
          </Modal>
          <TeamQuill />
        </Container>
      </div>
    <br/>
      <style jsx>{`
        .quill-image-container {
    max-width: 800px;
    margin: 0 auto;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  }

  .quill-image {
    width: 100%;
    height: auto;
    display: block;
  }

  .greeting-text {
    color: #0066b3;
    font-size: 1.2rem;
    text-align: center;
    font-weight: 500;
  }

  .content-section {
    max-width: 900px;
    margin: 0 auto;
    color: #444;
    line-height: 1.8;
  }

  .content-section p {
    margin-bottom: 1.2rem;
    text-align: justify;
  }

  .journey-text {
    color: #ff4d00;
    font-weight: 500;
    text-align: center;
    font-size: 1.1rem;
    margin: 2rem 0;
  }

  .signature-section {
    text-align: right;
    margin-top: 2rem;
    color: #444;
  }

  @media (max-width: 768px) {
    .content-section {
      padding: 0 1rem;
    }
    
    .greeting-text {
      font-size: 1.1rem;
    }
  }

  .newsletter-section {
    background: #FFF8E7;
          min-height: 70vh;
          padding: 40px 0;
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
          grid-template-columns: repeat(3, 1fr); /* Show 3 cards per row */
          gap: 1.5rem;
          margin-top: 2rem;
        }

        @media (max-width: 992px) {
          .newsletter-grid {
            grid-template-columns: repeat(2, 1fr); /* 2 cards per row on medium screens */
          }
        }

        @media (max-width: 768px) {
          .newsletter-grid {
            grid-template-columns: 1fr; /* 1 card per row on small screens */
          }
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
          // Add to your existing style jsx block
:global(.flipbook-modal .modal-content) {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.15);
}

:global(.flipbook-modal .modal-header) {
  border-bottom: 2px solid #ff4d00;
  padding: 1rem 1.5rem;
}

:global(.flipbook-modal .modal-title) {
  color: #0066b3;
  font-weight: 600;
}

:global(.flipbook-modal .modal-body) {
  padding: 1.5rem;
  height: 90vh;
}

.flipbook-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
}

:global(.fp-iframe) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  background-color: #f8f9fa;
}

.read-button {
  display: inline-block;
  background: #ff4d00;
  color: white;
  padding: 8px 20px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.read-button:hover {
  background: #0066b3;
  color: white;
  transform: translateY(-2px);
}

//modal style
:global(.modal-backdrop) {
    background-color: rgba(0, 0, 0, 0.75);
  }

  :global(.modal-dialog) {
    max-width: 90vw;
    margin: 1.75rem auto;
  }

  @media (max-width: 768px) {
    :global(.modal-dialog) {
      max-width: 95vw;
      margin: 1rem auto;
    }
  }
      `}</style>
    </Fragment>
  );
};

export default Newsletter;