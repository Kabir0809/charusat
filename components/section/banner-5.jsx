"use client";
// import { useEffect, useState } from 'react';
// import Head from "next/head";
import Link from "next/link";
// Import your styles
import "normalize.css/normalize.css";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "@/css/slider-animations.css";
import "@/css/slider-banner.css";

// Your component content remains the same
// this is testing
const BannerFive = () => {
  const content = [
    {
      id: "1",
      title: "CHARUSAT University Main Gate",
      description: "Welcome to CHARUSAT University - A Premier Educational Institution",
      button: "Apply Now",
      image: "/assets/images/home/CHARUSAT_GATE.webp",
    },
    {
      id: "2",
      title: "CHARUSAT Campus View",
      description: "Modern Academic Infrastructure with State-of-the-Art Facilities",
      button: "Apply Now",
      image: "/assets/images/home/DSC06172.webp",
    },
    {
      id: "3",
      title: "Convocation Ceremony",
      description: "Celebrating Academic Excellence and Student Achievements",
      button: "Apply Now",
      image: "/assets/images/home/S3_Convocation.webp",
    },
    {
      id: "4",
      title: "University Campus",
      description: "Beautiful Campus Environment for Holistic Education",
      button: "Apply Now",
      image: "/assets/images/home/DSC07727.webp",
    },
    {
      id: "5",
      title: "Sports Complex",
      description: "World-Class Sports Facilities for Physical Fitness and Recreation",
      button: "Apply Now",
      image: "/assets/images/home/Sports-complex.webp",
    },
    {
      id: "6",
      title: "Paperless Examination System",
      description: "Digital Innovation in Assessment and Evaluation",
      button: "Apply Now",
      image: "/assets/images/home/Paperless-Exam.webp",
    },
  ];

  return (
    <>
      <section 
        className="d-block clearfix" 
        role="region" 
        aria-label="University Campus Image Carousel"
      >
        <Slider 
          autoplay="4000" 
          className="slider-wrapper"
          role="img"
          aria-label="CHARUSAT University Campus Slideshow"
        >
          {content.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{
                background: `url('${item.image}') no-repeat center center`,
              }}
              width="100%"
              height="100%"
              role="img"
              aria-label={`Slide ${index + 1} of ${content.length}: ${item.title} - ${item.description}`}
              tabIndex="0"
            >
              <div className="inner">
                <div
                  className="main-text-slider animated-text-front-page"
                  style={{
                    fontWeight: "700",
                  }}
                  role="heading"
                  aria-level="1"
                  aria-label={item.title}
                >
                  {/* Keeping titles empty as per original design, but adding screen reader text */}
                  <span className="sr-only">{item.title}</span>
                </div>
                {/* Adding screen reader description */}
                <p className="sr-only" aria-live="polite">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
        
        {/* Navigation instructions for screen readers */}
        <div className="sr-only" aria-live="polite">
          University campus slideshow with {content.length} images. Use arrow keys to navigate between slides.
        </div>
      </section>

      {/* Embedded CSS for Accessibility */}
      <style jsx>{`
        /* Screen reader only content */
        .sr-only {
          position: absolute !important;
          width: 1px !important;
          height: 1px !important;
          padding: 0 !important;
          margin: -1px !important;
          overflow: hidden !important;
          clip: rect(0, 0, 0, 0) !important;
          white-space: nowrap !important;
          border: 0 !important;
        }

        /* Ensure slider has proper focus styles */
        .slider-content:focus {
          outline: 3px solid #0066cc !important;
          outline-offset: 2px !important;
          box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.3) !important;
        }

        /* Enhanced focus for keyboard navigation */
        .slider-content:focus-visible {
          outline: 3px solid #0066cc !important;
          outline-offset: 2px !important;
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .slider-content {
            border: 2px solid currentColor !important;
          }
          
          .slider-content:focus {
            outline: 4px solid currentColor !important;
            outline-offset: 2px !important;
          }
        }

        /* Reduced motion support for accessibility */
        @media (prefers-reduced-motion: reduce) {
          .slider-wrapper {
            animation: none !important;
          }
          
          .slider-content {
            transition: none !important;
          }
          
          .animated-text-front-page {
            animation: none !important;
          }
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .slider-content:focus {
            outline-color: #66b3ff !important;
            box-shadow: 0 0 0 3px rgba(102, 179, 255, 0.3) !important;
          }
        }

        /* Mobile accessibility improvements */
        @media (max-width: 768px) {
          .slider-content {
            min-height: 300px !important;
          }
          
          .slider-content:focus {
            outline-width: 2px !important;
          }
        }

        /* Skip link for keyboard users */
        .skip-to-content {
          position: absolute;
          top: -40px;
          left: 6px;
          background: #000;
          color: #fff;
          padding: 8px;
          text-decoration: none;
          z-index: 1000;
          border-radius: 4px;
        }

        .skip-to-content:focus {
          top: 6px;
        }
      `}</style>
    </>
  );
};

export default BannerFive;