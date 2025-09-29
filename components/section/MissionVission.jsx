"use client";
import Link from "next/link";
import Social_Connect from "./Social_Connect";

const subTitle = "Highly cherished by students worldwide";
const title = "Mission and Vision";

const VisionMission = () => {
  const studentList = [
    {
      name: "Vision",
      desc: "To become dynamic global institution in a knowledge driven world through excellence in teaching, research and social contribution.",
    },
    {
      name: "Mission",
      desc: "To serve society by striving to transform it through creation, augmentation, dissemination and perpetuation of knowledge.",
    },
  ];
 
  return (
    <>
      <div 
        className="course-section p-4 vision-main"
        role="region"
        aria-labelledby="mission-vision-heading"
      >
        <div className="container">
          <div className="section-header text-center">
            <span 
              className="subtitle"
              role="text"
              aria-label="Section subtitle: Highly cherished by students worldwide"
            >
              {subTitle}
            </span>
            <h2 
              id="mission-vision-heading"
              className="title fw-bold"
              role="heading"
              aria-level="2"
            >
              {title}
            </h2>
          </div>
          <div className="section-wrapper">
            <div 
              className="row justify-content-center row-cols-lg-2 row-cols-1 g-4"
              role="list"
              aria-label="University Mission and Vision statements"
            >
              {studentList.map((val, i) => (
                <div 
                  className="col" 
                  key={i}
                  role="listitem"
                >
                  <div 
                    className="vision-card h-100"
                    role="article"
                    aria-labelledby={`${val.name.toLowerCase()}-heading-${i}`}
                    tabIndex="0"
                  >
                    <div className="card-inner p-4">
                      <h3 
                        id={`${val.name.toLowerCase()}-heading-${i}`}
                        className="text-center mb-3"
                        role="heading"
                        aria-level="3"
                      >
                        {val.name}
                      </h3>
                      <p 
                        className="text-center mb-0"
                        role="text"
                        aria-describedby={`${val.name.toLowerCase()}-heading-${i}`}
                      >
                        {val.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Social_Connect />
      </div>

      {/* Add Social Connect Component */}
      

      <style jsx>{`
        .vision-card {
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .vision-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
        }

        .card-inner {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .text-primary {
          color: #f16126 !important;
        }

        /* Enhanced focus styles for keyboard navigation - ONLY ADDED */
        .vision-card:focus {
          outline: 3px solid #0066cc;
          outline-offset: 2px;
          transform: translateY(-5px);
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
        }

        /* Remove focus outline for mouse users */
        .vision-card:focus:not(:focus-visible) {
          outline: none;
        }

        /* Screen reader only content - ONLY ADDED */
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

        /* High contrast mode support - ONLY ADDED */
        @media (prefers-contrast: high) {
          .vision-card {
            border: 2px solid currentColor;
          }
          
          .vision-card:focus {
            outline: 4px solid currentColor;
          }
        }

        /* Reduced motion support - ONLY ADDED */
        @media (prefers-reduced-motion: reduce) {
          .vision-card {
            transition: none;
          }
          
          .vision-card:hover,
          .vision-card:focus {
            transform: none;
          }
        }

        /* Windows high contrast mode - ONLY ADDED */
        @media (-ms-high-contrast: active) {
          .vision-card {
            border: 2px solid;
          }
          
          .vision-card:focus {
            outline: 3px solid;
          }
        }

        @media (max-width: 768px) {
          .vision-card {
            margin-bottom: 1rem;
          }
          
          /* Smaller focus outline on mobile - ONLY ADDED */
          .vision-card:focus {
            outline-width: 2px;
          }
        }

        /* Print accessibility - ONLY ADDED */
        @media print {
          .vision-card {
            border: 1px solid #000;
            box-shadow: none;
            break-inside: avoid;
          }
          
          .sr-only {
            position: static !important;
            width: auto !important;
            height: auto !important;
            margin: 0 !important;
            overflow: visible !important;
            clip: auto !important;
            white-space: normal !important;
          }
        }
      `}</style>
    </>
  );
};

export default VisionMission;