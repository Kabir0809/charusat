"use client";
import { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

const Food = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: "/assets/images/food-hygiene/fh7.webp", alt: "Cafeteria Area" },
    { src: "/assets/images/food-hygiene/fh6.webp", alt: "Food Court" },
    { src: "/assets/images/food-hygiene/fh5.webp", alt: "Food Court" },
    { src: "/assets/images/food-hygiene/fh4.webp", alt: "Hostel Mess" },
    { src: "/assets/images/food-hygiene/fh3.webp", alt: "Dining Area" },
    { src: "/assets/images/food-hygiene/fh2.webp", alt: "Canteen" },
    { src: "/assets/images/food-hygiene/fh1.webp", alt: "Food Service" },
  ];

  return (
    <Fragment>
      <div className="blog-section p-4">
        <div className="container p-4" style={{ backgroundColor: "#fff" }}>
          <h1 className="text-center mb-4 h1 text-white fw-bold gradient-header">
            Food Facilities
          </h1>

          <Container>
            <Row className="justify-content-center">
              {images.map((image, index) => (
                <Col key={index} lg={4} md={6} className="mb-4">
                  <div 
                    className="card-wrapper"
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="card">
                      <Image
                        src={image.src}
                        className="card-img"
                        alt={image.alt}
                        width={500}
                        height={500}
                        priority={index < 3} // Prioritize loading first 3 images
                        loading={index < 3 ? "eager" : "lazy"}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSUuJSEwLzYvLi0vLzY1PzpHOz89PT04NS85RkdITkhMTU1NNUFOVlJWTU3/2wBDAR"
                      />
                      <div className="card-overlay">
                        <h5 style={{color:"white"}}>{image.alt}</h5>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>

          {selectedImage && (
            <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
              <div className="modal-content">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={1000}
                  height={1000}
                  className="modal-image"
                />
                <h3 className="modal-title">{selectedImage.alt}</h3>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .blog-section {
          background-color: #fff9f1;
        }

        .gradient-header {
          background-color: #ff4d00;
          padding: 15px;
          border-radius: 8px;
          margin-bottom: 2rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .card-wrapper {
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .card-wrapper:hover {
          transform: translateY(-5px);
        }

        .card {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .card-img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .card:hover .card-img {
          transform: scale(1.1);
        }

        .card-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          padding: 20px;
          color: white;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .card:hover .card-overlay {
          opacity: 1;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          cursor: pointer;
        }

        .modal-content {
          max-width: 90vw;
          max-height: 90vh;
          position: relative;
        }

        .modal-image {
          max-width: 100%;
          max-height: 80vh;
          object-fit: contain;
          border-radius: 8px;
        }

        .modal-title {
          color: white;
          text-align: center;
          margin-top: 1rem;
        }

        @media (max-width: 768px) {
          .card-img {
            height: 200px;
          }
          
          .modal-content {
            width: 95vw;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Food;
