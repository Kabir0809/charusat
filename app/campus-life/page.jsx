"use client";
import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const images = {
  campusLife: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000",
  sports: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1000",
  foodCourt: "https://images.unsplash.com/photo-1567521464027-f127ff144326?q=80&w=1000",
  hostel: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1000",
  library: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1000",
  transport: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1000",
  physicalEd: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000",
  ncc: "https://images.unsplash.com/photo-1580070325658-5a7e4c1df1c4?q=80&w=1000", // Updated military training image
  barrierFree: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000", // Accessibility ramp image
  heroBg: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000",
  placeholder: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1000" // Generic academic placeholder
};

const Campus = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const campusFeatures = [
    {
      title: "Life At CHARUSAT",
      description: "Experience vibrant campus culture and student activities",
      icon: "icofont-university",
      image: images.campusLife,
      link: "/Life-at-charusat"
    },
    {
      title: "Sports & Healthcare",
      description: "State-of-the-art sports facilities and healthcare services",
      icon: "icofont-gym",
      image: images.sports,
      link: "/sports-health"
    },
    {
      title: "Food & Hygiene",
      description: "Quality dining facilities with highest hygiene standards",
      icon: "icofont-food-cart",
      image: images.foodCourt,
      link: "/food-hygiene"
    },
    {
      title: "Accommodation",
      description: "Comfortable and secure hostel facilities",
      icon: "icofont-home",
      image: images.hostel,
      link: "/hostels"
    },
    {
      title: "Library Services",
      description: "Modern library with vast knowledge resources",
      icon: "icofont-book",
      image: images.library, // Updated to use URL from images object
      link: "/library"
    },
    {
      title: "Transportation",
      description: "Convenient transport services for students",
      icon: "icofont-bus",
      image: images.transport, // Updated to use URL from images object
      link: "/transport"
    },
    {
      title: "Physical Education & Sports",
      description: "Comprehensive sports training and facilities",
      icon: "icofont-runner",
      image: images.physicalEd, // Updated to use URL from images object
      link: "/physical-education"
    },
    {
      title: "NCC",
      description: "National Cadet Corps training and activities",
      icon: "icofont-military",
      image: images.ncc, // Updated to use URL from images object
      link: "/NCC"
    },
    {
      title: "Barrier-free Environment",
      description: "Inclusive campus with accessibility features",
      icon: "icofont-wheelchair",
      image: images.barrierFree, // Updated to use URL from images object
      link: "/Barrier-free-environment"
    }
  ];

  useEffect(() => {
    const loadImages = async () => {
      try {
        await Promise.all(
          Object.values(images).map(src => {
            return new Promise((resolve, reject) => {
              const img = new Image();
              img.src = src;
              img.onload = resolve;
              img.onerror = reject;
            });
          })
        );
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };

    loadImages();
  }, []);

  return (
    <Fragment>
      {/* New Hero Section */}
      <div className="blog-section p-4">
        <div className="container p-4" style={{ backgroundColor: "#fff" }}>
          <div className="row justify-content-center">
            <div className="col">
              <article>
                <div className="section-wrapper" style={{ color: "#0066b3" }}>
                  <h1
                    className="text-center mb-4 h1 text-white fw-bold"
                    style={{
                      backgroundColor: "#ff4d00",
                      padding: "10px",
                      borderRadius: "10px",
                    }}
                  >
                    CHARUSAT Campus Life
                  </h1>
                </div>
              </article>
            </div>
          </div>
        

      {/* Features Grid */}
      <div className="campus-features">
        <div className="container">
          <div className="features-grid">
            {campusFeatures.map((feature, index) => (
              <Link href={feature.link} key={index}>
                <div className="feature-card">
                  <div className="feature-image">
                    <Image 
                      src={feature.image} 
                      alt={feature.title}
                      width={300}
                      height={200}
                      style={{ 
                        objectFit: "cover",
                        width: "100%",
                        height: "100%"
                      }}
                      loading="lazy"
                      className="card-img"
                      onError={(e) => {
                        e.target.src = images.placeholder;
                        console.log(`Failed to load image for ${feature.title}`);
                      }}
                    />
                    <div className="feature-icon">
                      <i className={feature.icon}></i>
                    </div>
                  </div>
                  <div className="feature-content">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

</div>
      </div>
      <br />
      <style jsx>{`
        .blog-section {
          background-color: #f8f9fa;
        }

        .section-wrapper {
          margin-bottom: 2rem;
        }

        .campus-features {
          padding: 2rem 0; // Adjusted padding to work with new hero
          
        }

        .hero-section {
          position: relative;
          height: 60vh;
          background-image: url('${images.heroBg}');
          background-size: cover;
          background-position: center;
          color: white;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7));
        }

        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
          padding: 0 20px;
        }

        .hero-content h1 {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #fff;
        }

        .hero-content p {
          font-size: 1.5rem;
          opacity: 0.9;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          padding: 0 1rem;
        }

        .feature-card {
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 15px rgba(0,0,0,0.2);
        }

        .feature-image {
          position: relative;
          height: 180px;         // Reduced from 200px
          overflow: hidden;
        }

        :global(.card-img) {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }

        .feature-icon {
          position: absolute;
          bottom: 5px;         // Adjusted from -25px
          right: 20px;
          width: 50px;          // Reduced from 50px
          height: 50px;         // Reduced from 50px
          background: #f16126;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
          z-index: 2;
          transition: transform 0.3s ease;
        }

        .feature-icon i {
          font-size: 24px;
          line-height: 1;
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.1);
        }

        .feature-content {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          z-index: 1;
          background: white;     // Added to ensure text is visible
        }

        .feature-content h3 {
          color: #1a56db;
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          margin-top: 0.5rem;    // Added to create space from icon
        }

        .feature-content p {
          color: #6b7280;
          font-size: 0.875rem;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .blog-section {
            padding: 2rem 1rem;
          }

          .hero-section {
            height: 50vh;
          }

          .hero-content h1 {
            font-size: 2.5rem;
          }

          .hero-content p {
            font-size: 1.25rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default Campus;