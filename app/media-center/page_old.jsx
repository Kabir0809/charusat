"use client";
import { Fragment } from 'react';
import { Container, Accordion, Card, Row, Col } from 'react-bootstrap';

const Communications = () => {
  const resources = [
    {
      title: "Brand Guidelines",
      description: "Access CHARUSAT's visual identity guidelines, logos, and brand standards",
      link: "#",
      icon: "🎨"
    },
    {
      title: "Digital Assets",
      description: "Download official CHARUSAT logos, templates, and digital resources",
      link: "#",
      icon: "💾"
    },
    {
      title: "Media Relations",
      description: "Connect with our communications team for media inquiries",
      link: "#",
      icon: "📱"
    },
    {
      title: "Publications",
      description: "Access our newsletters, annual reports, and institutional publications",
      link: "#",
      icon: "📚"
    }
  ];

  return (
    <Fragment>
      <div className="page-section p-4">
        <Container className="bg-white p-4 rounded-3 shadow-sm">
          <h2 className="header-title">Communications at CHARUSAT</h2>
          
          <Accordion className="mb-4">
            <Accordion.Item eventKey="0">
              <Accordion.Header>About Communications</Accordion.Header>
              <Accordion.Body>
                <div className="content">
                  <div className="image-container mb-4">
                    <img 
                      src="#"
                      alt="CHARUSAT Communications"
                      className="header-image"
                    />
                  </div>
                  
                  <div className="content-section">
                    <p className="lead-text">
                      The Communications Office at CHARUSAT helps tell our university's story through strategic communications, brand management, and media relations.
                    </p>
                    <p>
                      We work collaboratively with departments and institutes across CHARUSAT to promote our academic excellence, research innovations, and community impact.
                    </p>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <section className="services-section mb-5">
            <h3 className="section-title">Our Services</h3>
            <Row className="g-4">
              {resources.map((resource, index) => (
                <Col md={6} lg={3} key={index}>
                  <Card className="content-card h-100">
                    <Card.Body>
                      <div className="icon-circle mb-3">{resource.icon}</div>
                      <h5 className="card-title">{resource.title}</h5>
                      <p className="card-text">{resource.description}</p>
                      <button className="action-button">
                        Learn More →
                      </button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </section>

          <section className="contact-section">
            <Card className="p-4 border-0 bg-light">
              <Row>
                <Col md={8}>
                  <h4 className="mb-3">Need Communication Support?</h4>
                  <p>
                    Our team is here to help you promote your work and connect with your audience effectively.
                  </p>
                </Col>
                <Col md={4} className="d-flex align-items-center justify-content-md-end">
                  <button className="action-button">Contact Us</button>
                </Col>
              </Row>
            </Card>
          </section>
        </Container>
      </div>

      <style jsx>{`
        .page-section {
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

        .image-container {
          max-width: 800px;
          margin: 0 auto;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
        }

        .header-image {
          width: 100%;
          height: auto;
          display: block;
        }

        .content-section {
          max-width: 900px;
          margin: 0 auto;
          color: #444;
          line-height: 1.8;
        }

        .content-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }

        :global(.content-card) {
          border: 1px solid #eee;
          border-radius: 12px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
          transition: transform 0.3s ease;
        }

        :global(.content-card:hover) {
          transform: translateY(-5px);
        }

        .action-button {
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

        .action-button:hover {
          background: #0066b3;
          transform: translateY(-2px);
        }

        .lead-text {
          font-size: 1.25rem;
          color: #0066b3;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }

        .section-title {
          color: #0066b3;
          font-size: 1.75rem;
          margin-bottom: 2rem;
          position: relative;
          padding-bottom: 0.5rem;
        }

        .section-title:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 60px;
          height: 3px;
          background: #ff4d00;
        }

        .icon-circle {
          width: 50px;
          height: 50px;
          background: #fff8e7;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        :global(.card-title) {
          color: #0066b3;
          margin-bottom: 1rem;
        }

        :global(.card-text) {
          color: #444;
          margin-bottom: 1.5rem;
        }

        .contact-section {
          background: #fff8e7;
          border-radius: 12px;
          margin-top: 3rem;
        }

        @media (max-width: 768px) {
          .content-grid {
            grid-template-columns: 1fr;
          }
          
          .content-section {
            padding: 0 1rem;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Communications;