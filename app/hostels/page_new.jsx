"use client";
import { Fragment, useState } from "react";
import { Container, Row, Col, Tab, Nav, Card } from "react-bootstrap";
import Image from "next/image";
import Contact from "@/components/section/contact";

const Hostels = () => {
  const [activeTab, setActiveTab] = useState("girls");

  const girlsHostelImages = [
    { src: "/assets/images/girls_hostel_life/h1.webp", alt: "Common Area" },
    { src: "/assets/images/girls_hostel_life/h2.webp", alt: "Study Room" },
    { src: "/assets/images/girls_hostel_life/h3.webp", alt: "Recreation Area" },
    { src: "/assets/images/girls_hostel_life/h4.webp", alt: "Dining Hall" },
    { src: "/assets/images/girls_hostel_life/h5.webp", alt: "Room Interior" },
    { src: "/assets/images/girls_hostel_life/h6.webp", alt: "Garden Area" },
    { src: "/assets/images/girls_hostel_life/h7.webp", alt: "Sports Facility" },
    { src: "/assets/images/girls_hostel_life/h8.webp", alt: "Building View" }
  ];

  return (
    <Fragment>
      <div className="hostel-section">
        <Container className="py-4">
          <h1 className="main-title">Campus Accommodation @ CHARUSAT</h1>
          
          <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
            <Nav variant="pills" className="hostel-nav mb-4">
              <Nav.Item>
                <Nav.Link eventKey="girls" className="nav-button">
                  <span className="icon">👩</span> Girls' Hostels
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="boys" className="nav-button">
                  <span className="icon">👨</span> Boys' Hostels
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey="girls">
                <div className="content-box">
                  <h2>Life @ Girls Hostel</h2>
                  <div className="image-grid">
                    {girlsHostelImages.map((image, index) => (
                      <div key={index} className="grid-item">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={400}
                          height={300}
                          className="hostel-image"
                          loading={index < 4 ? "eager" : "lazy"}
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSUuJSEwLzYvLi0vLzY1PzpHOz89PT04NS85RkdITkhMTU1NNUFOVlJWTU3/2wBDAR"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="info-section">
                    <h3>Facilities & Details</h3>
                    <Image
                      src="/assets/images/hostel-details/Girls_hostel-details.webp"
                      alt="Girls Hostel Details"
                      width={800}
                      height={400}
                      className="details-image"
                    />
                  </div>

                  <Contact
                    title="Girls Hostel Contact"
                    name="Ms. Rasilaben Vala, Warden"
                    email="hostel@charusat.ac.in"
                    phone="+91-2697-265130 / 78638 10278"
                  />
                </div>
              </Tab.Pane>

              <Tab.Pane eventKey="boys">
                <div className="content-box">
                  <h2>Boys' Hostel Facilities</h2>
                  <Card className="info-card">
                    <Card.Body>
                      <h4>Accommodation Details</h4>
                      <ul className="facility-list">
                        <li>9 different locations within 1 km radius</li>
                        <li>Housing capacity for 1500+ students</li>
                        <li>Both AC and Non-AC rooms available</li>
                        <li>Dining hall and mess facilities</li>
                        <li>Sports and recreation areas</li>
                        <li>Wi-Fi connectivity</li>
                        <li>Transport facilities to campus</li>
                        <li>Guest rooms available</li>
                      </ul>
                    </Card.Body>
                  </Card>

                  <div className="info-section">
                    <Image
                      src="/assets/images/hostel-details/Boys-hostel-details.webp"
                      alt="Boys Hostel Details"
                      width={800}
                      height={400}
                      className="details-image"
                    />
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Container>
      </div>

      <style jsx>{`
        .hostel-section {
          background-color: #fff9f1;
          min-height: 100vh;
          padding: 2rem 0;
        }

        .main-title {
          color: white;
          background: linear-gradient(135deg, #ff4d00 0%, #ff6a00 100%);
          padding: 1rem;
          border-radius: 8px;
          text-align: center;
          margin-bottom: 2rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        :global(.hostel-nav) {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        :global(.nav-button) {
          padding: 1rem 2rem;
          border-radius: 25px;
          background: white;
          color: #333;
          border: 1px solid #ddd;
          transition: all 0.3s ease;
        }

        :global(.nav-button.active) {
          background: #0066b3;
          color: white;
          border-color: #0066b3;
        }

        .content-box {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .image-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin: 2rem 0;
        }

        :global(.hostel-image) {
          width: 100%;
          height: 250px;
          object-fit: cover;
          border-radius: 8px;
          transition: transform 0.3s ease;
        }

        :global(.hostel-image:hover) {
          transform: scale(1.05);
        }

        .info-section {
          margin-top: 2rem;
        }

        :global(.details-image) {
          width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 1rem 0;
        }

        .facility-list {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }

        .facility-list li {
          padding: 0.5rem 1rem;
          background: #f8f9fa;
          border-radius: 6px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .facility-list li::before {
          content: "•";
          color: #ff4d00;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .image-grid {
            grid-template-columns: 1fr;
          }

          :global(.nav-button) {
            padding: 0.75rem 1.5rem;
          }

          .content-box {
            padding: 1rem;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Hostels;