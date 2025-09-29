"use client";
import { Fragment, useState } from "react";
import { Container, Tab, Nav, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Contact from "@/components/section/contact";

const Hostels = () => {
  const girlsHostelImages = [
    { src: "/assets/images/girls_hostel_life/h1.webp", alt: "Common Area", title: "Modern Common Area" },
    { src: "/assets/images/girls_hostel_life/h2.webp", alt: "Study Room", title: "Quiet Study Spaces" },
    { src: "/assets/images/girls_hostel_life/h3.webp", alt: "Recreation Area", title: "Recreation Zone" },
    { src: "/assets/images/girls_hostel_life/h4.webp", alt: "Dining Hall", title: "Spacious Dining Hall" },
    { src: "/assets/images/girls_hostel_life/h5.webp", alt: "Room Interior", title: "Comfortable Rooms" },
    { src: "/assets/images/girls_hostel_life/h6.webp", alt: "Garden Area", title: "Green Spaces" },
    { src: "/assets/images/girls_hostel_life/h7.webp", alt: "Sports Facility", title: "Sports Facilities" },
    { src: "/assets/images/girls_hostel_life/h8.webp", alt: "Building View", title: "Hostel Building" }
  ];

  return (
    <Fragment>
      <div className="hostel-page">
        <Container>
          <h1 className="page-title">Accommodation @ CHARUSAT</h1>
          
          <Tab.Container defaultActiveKey="girls">
            <Nav variant="pills" className="hostel-nav">
              <Nav.Item>
                <Nav.Link eventKey="girls">
                  <i className="fas fa-female"></i> Girls' Hostels
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="boys">
                  <i className="fas fa-male"></i> Boys' Hostels
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey="girls">
                <div className="content-box">
                  <div className="intro-section">
                    <h2>Life @ Girls Hostel - CHARUSAT</h2>
                    <p className="intro-text">
                      Experience comfortable and secure living with modern amenities, 
                      dedicated study spaces, and a vibrant community atmosphere.
                    </p>
                  </div>

                  <div className="image-gallery">
                    {girlsHostelImages.map((image, index) => (
                      <div key={index} className="gallery-item">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={400}
                          height={300}
                          className="gallery-image"
                          loading={index < 4 ? "eager" : "lazy"}
                        />
                        <div className="image-overlay">
                          <h3>{image.title}</h3>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="details-section">
                    <h2>Facilities & Information</h2>
                    <Image
                      src="/assets/images/hostel-details/Girls_hostel-details.webp"
                      alt="Girls Hostel Details"
                      width={800}
                      height={400}
                      className="details-image"
                    />
                  </div>

                  
                </div>
              </Tab.Pane>

              <Tab.Pane eventKey="boys">
                <div className="content-box">
                  <div className="intro-section">
                    <h2>Boys' Hostel Facilities</h2>
                    <div className="feature-grid">
                      <div className="feature-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <h3>9 Convenient Locations</h3>
                        <p>Within 1 km radius of campus</p>
                      </div>
                      <div className="feature-item">
                        <i className="fas fa-users"></i>
                        <h3>Large Capacity</h3>
                        <p>Accommodation for 1500+ students</p>
                      </div>
                      <div className="feature-item">
                        <i className="fas fa-snowflake"></i>
                        <h3>Room Options</h3>
                        <p>AC and Non-AC rooms available</p>
                      </div>
                      <div className="feature-item">
                        <i className="fas fa-wifi"></i>
                        <h3>Modern Amenities</h3>
                        <p>Wi-Fi, dining, and recreation facilities</p>
                      </div>
                    </div>
                  </div>

                  <div className="details-section">
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
        .hostel-page {
          background-color: #fff9f1;
          padding: 3rem 0;
          min-height: 100vh;
        }

        .page-title {
          color: white;
          background: linear-gradient(135deg, #ff4d00 0%, #ff6a00 100%);
          padding: 1rem 2rem;
          font-size: 2rem;
          border-radius: 10px;
          text-align: center;
          margin-bottom: 2rem;
          box-shadow: 0 4px 15px rgba(255, 77, 0, 0.2);
        }

        :global(.hostel-nav) {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        :global(.nav-link) {
          padding: 1rem 2rem;
          border-radius: 25px;
          background: white;
          color: #333;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        :global(.nav-link.active) {
          background: #0066b3;
          color: white;
        }

        .content-box {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .intro-section {
          text-align: center;
          margin-bottom: 2rem;
        }

        .intro-text {
          color: #666;
          font-size: 1.1rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .image-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin: 2rem 0;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 10px;
          cursor: pointer;
        }

        :global(.gallery-image) {
          width: 100%;
          height: 250px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .gallery-item:hover :global(.gallery-image) {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 1rem;
          transform: translateY(100%);
          transition: transform 0.3s ease;
        }

        .gallery-item:hover .image-overlay {
          transform: translateY(0);
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin: 2rem 0;
        }

        .feature-item {
          text-align: center;
          padding: 2rem;
          background: #f8f9fa;
          border-radius: 10px;
          transition: transform 0.3s ease;
        }

        .feature-item:hover {
          transform: translateY(-5px);
        }

        .feature-item i {
          font-size: 2rem;
          color: #ff4d00;
          margin-bottom: 1rem;
        }

        .details-section {
          margin: 3rem 0;
        }

        :global(.details-image) {
          width: 100%;
          height: auto;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 768px) {
          .hostel-page {
            padding: 1rem;
          }

          .image-gallery {
            grid-template-columns: 1fr;
          }

          .feature-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          :global(.nav-link) {
            padding: 0.75rem 1.5rem;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Hostels;