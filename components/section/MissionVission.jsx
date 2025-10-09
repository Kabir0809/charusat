"use client";
import Link from "next/link";
import { useState } from "react";

const subTitle = "Highly cherished by students worldwide";
const title = "Mission and Vision";

const VisionMission = () => {
  const [flipped, setFlipped] = useState(false);
  
  const studentList = [
    {
      name: "Vision",
      desc: "To become dynamic global institution in a knowledge driven world through excellence in teaching, research and social contribution.",
      icon: "🔭", // Telescope emoji for Vision
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      name: "Mission",
      desc: "To serve society by striving to transform it through creation, augmentation, dissemination and perpetuation of knowledge.",
      icon: "🎯", // Target emoji for Mission
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
  ];
 
  return (
    <>
      {/* Updated Design: Smaller cards with proper spacing */}
      <div 
        className="py-5 bg-light"
        role="region"
        aria-labelledby="mission-vision-heading"
        style={{
          // background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
          minHeight: "auto"
        }}
      >
        <div className="container">
          <div className="section-header text-center mb-5">
            <span 
              className="subtitle text-muted fs-6 mb-3 d-block"
              role="text"
              aria-label="Section subtitle: Highly cherished by students worldwide"
            >
              {subTitle}
            </span>
            <h2 
              id="mission-vision-heading"
              className="title fw-bold text-dark display-5 mb-0"
              role="heading"
              aria-level="2"
            >
              {title}
            </h2>
          </div>

          <div className="row justify-content-center align-items-stretch g-4">
            {studentList.map((val, i) => (
              <div 
                className="col-lg-6 col-md-6 col-sm-8" 
                key={i}
                role="listitem"
              >
                <div 
                  className="vision-card h-100 p-4 text-center position-relative rounded-4 shadow-sm"
                  role="article"
                  aria-labelledby={`${val.name.toLowerCase()}-heading-${i}`}
                  tabIndex="0"
                  style={{
                    background: "rgba(255, 255, 255, 0.95)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(0, 0, 0, 0.1)",
                    // minHeight: "350px"
                  }}
                >
                  {/* Icon */}
                  <div className="mb-3">
                    <div 
                      className="icon-container d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                      style={{
                        width: "70px",
                        height: "70px",
                        background: val.gradient,
                        fontSize: "2rem"
                      }}
                    >
                      <span 
                        role="img" 
                        aria-hidden="true"
                        className="text-white"
                      >
                        {val.icon}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 
                    id={`${val.name.toLowerCase()}-heading-${i}`}
                    className="fw-bold mb-3"
                    role="heading"
                    aria-level="3"
                    style={{
                      fontSize: "1.8rem",
                      background: val.gradient,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text"
                    }}
                  >
                    {val.name}
                  </h3>

                  {/* Description */}
                  <blockquote 
                    className="mb-0"
                    role="text"
                    aria-describedby={`${val.name.toLowerCase()}-heading-${i}`}
                  >
                    <p 
                      className="fs-6 text-dark lh-base mb-0"
                      style={{ 
                        fontFamily: "Georgia, serif",
                        textAlign: "center"
                      }}
                    >
                      <span className="text-primary fs-5 me-1">"</span>
                      {val.desc}
                      <span className="text-primary fs-5 ms-1">"</span>
                    </p>
                  </blockquote>

                  {/* Decorative Line */}
                  <div 
                    className="mx-auto mt-3"
                    style={{
                      width: "50px",
                      height: "2px",
                      background: val.gradient,
                      borderRadius: "1px"
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Card Styles */
        .vision-card {
          transition: all 0.3s ease;
        }

        .vision-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1) !important;
        }

        .icon-container {
          transition: all 0.3s ease;
        }

        .vision-card:hover .icon-container {
          transform: scale(1.1);
        }

        /* Enhanced focus styles for keyboard navigation */
        .vision-card:focus {
          outline: 3px solid #0066cc;
          outline-offset: 2px;
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1) !important;
        }

        .vision-card:focus:not(:focus-visible) {
          outline: none;
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .vision-card {
            border: 2px solid currentColor !important;
            background: white !important;
          }
          
          .vision-card:focus {
            outline: 4px solid currentColor !important;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .vision-card,
          .icon-container {
            transition: none !important;
          }
          
          .vision-card:hover,
          .vision-card:focus {
            transform: none !important;
          }
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .vision-card {
            min-height: 300px !important;
          }
          
          .icon-container {
            width: 60px !important;
            height: 60px !important;
            font-size: 1.5rem !important;
          }
          
          h3 {
            font-size: 1.5rem !important;
          }
          
          p {
            font-size: 0.9rem !important;
          }
        }

        @media (max-width: 576px) {
          .vision-card {
            min-height: 280px !important;
            padding: 1.5rem !important;
          }
        }

        /* Print accessibility */
        @media print {
          .vision-card {
            border: 1px solid #000 !important;
            box-shadow: none !important;
            break-inside: avoid;
            background: white !important;
          }
        }
      `}</style>
    </>
  );
};

export default VisionMission;