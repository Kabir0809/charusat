"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import csrtc from "@/public/assets/images/initiative/SPACE RESEARCH CELL.jpg";
import kradle from "@/public/assets/images/event/2.jpg";
import credp from "@/public/assets/images/initiative/RURAL EDUCATION.jpg";
import icc from "@/public/assets/images/initiative/ICC.jpg";
import sdg from "@/public/assets/images/initiative/SDG HANDPRINT ACTION LAB.png";
import hrdc from "@/public/assets/images/initiative/HRDC.png";
import edic from "@/public/assets/images/initiative/EDIC.jpg";
import uiic from "@/public/assets/images/initiative/IIC_2.jpg";
import nabl from "@/public/assets/images/initiative/NABL & TESTING LAB.jpg";
import CIVF from "@/public/assets/images/initiative/CIVF.png";

const subTitle = "Driving Innovation Forward";
const title = "Research & Innovation Ecosystem";

const eventSliderList = [
  {
    imgUrl: csrtc,
    imgAlt: "CSRTC space research center showing laboratory equipment and satellite technology",
    title: "CHARUSAT Space Research and Technology Center",
    btnText: "Read More",
    url: "/csrtc",
    id: 1,
    icon: "🚀",
    category: "Space Technology",
    description: "Leading space research initiatives with cutting-edge satellite technology and astronomical research programs.",
    highlights: ["Satellite Technology Research", "Space Mission Planning", "Astronomical Observatory", "Student Research Programs"]
  },
  {
    imgUrl: kradle,
    imgAlt: "KRADLE research and development center showing modern laboratory facilities",
    title: "Dr. K. C. Patel Research & Development Center",
    btnText: "Read More",
    url: "https://kradle.charusat.ac.in/",
    id: 2,
    icon: "🔬",
    category: "R&D Excellence",
    description: "Premier research and development facility fostering innovation across multiple engineering disciplines.",
    highlights: ["Advanced Research Labs", "Industry Collaboration", "Patent Development", "Technology Transfer"]
  },
  {
    imgUrl: credp,
    imgAlt: "CREDP rural education program showing students and teachers in village setting",
    title: "CHARUSAT Rural Education Development Program",
    btnText: "Read More",
    url: "/CREDP",
    id: 3,
    icon: "🌱",
    category: "Social Impact",
    description: "Transforming rural communities through quality education and sustainable development initiatives.",
    highlights: ["Rural School Development", "Teacher Training", "Digital Literacy", "Community Engagement"]
  },
  {
    imgUrl: icc,
    imgAlt: "ICC international cosmology center showing astronomical equipment and research facilities",
    title: "International Cosmology Center (ICC)",
    btnText: "Read More",
    url: "#",
    id: 4,
    icon: "🌌",
    category: "Cosmology Research",
    description: "World-class research center dedicated to advancing our understanding of the universe and cosmic phenomena.",
    highlights: ["International Collaboration", "Cosmological Studies", "Research Publications", "Academic Partnerships"]
  },
  {
    imgUrl: sdg,
    imgAlt: "SDG Handprint Action Lab showing sustainable development goals activities",
    title: "SDG Handprint Action Lab",
    btnText: "Read More",
    url: "#",
    id: 5,
    icon: "🌍",
    category: "Sustainability",
    description: "Creating positive environmental and social impact through innovative sustainable development solutions.",
    highlights: ["UN SDG Alignment", "Sustainability Projects", "Environmental Research", "Social Innovation"]
  },
  {
    imgUrl: hrdc,
    imgAlt: "HRDC human resource development center showing training and development activities",
    title: "Pri. B. I. Patel Human Resource Development Center",
    btnText: "Read More",
    url: "/hrdc",
    id: 6,
    icon: "💼",
    category: "Professional Development",
    description: "Excellence in human resource development through comprehensive training and capacity building programs.",
    highlights: ["Leadership Training", "Skill Development", "Faculty Enhancement", "Professional Certification"]
  },
  {
    imgUrl: edic,
    imgAlt: "CSIC startup and innovation center showing entrepreneurship activities and incubation facilities",
    title: "Charusat Startup and Innovation Centre (CSIC)",
    btnText: "Read More",
    url: "/csic",
    id: 7,
    icon: "🚀",
    category: "Entrepreneurship",
    description: "Fostering innovation and entrepreneurship through startup incubation and business development support.",
    highlights: ["Startup Incubation", "Mentorship Programs", "Funding Support", "Innovation Labs"]
  },
  {
    imgUrl: uiic,
    imgAlt: "UIIC university industry interaction cell showing collaboration between academia and industry",
    title: "University Industry Interaction Cell (UIIC)",
    btnText: "Read More",
    url: "/university-industry-interaction-cell",
    id: 8,
    icon: "🤝",
    category: "Industry Partnership",
    description: "Bridging the gap between academia and industry through strategic partnerships and collaborative projects.",
    highlights: ["Industry Collaboration", "Internship Programs", "Joint Research", "Technology Transfer"]
  },
  {
    imgUrl: nabl,
    imgAlt: "NABL testing facilities showing accredited laboratory equipment and quality testing procedures",
    title: "NABL & Testing Facilities",
    btnText: "Read More",
    url: "#",
    id: 9,
    icon: "🔬",
    category: "Quality Assurance",
    description: "State-of-the-art testing facilities with NABL accreditation ensuring highest quality standards.",
    highlights: ["NABL Accreditation", "Quality Testing", "Calibration Services", "Compliance Standards"]
  },
  {
    imgUrl: CIVF,
    imgAlt: "CIVF innovative ventures foundation showing entrepreneurship and innovation activities",
    title: "Charusat Innovative Ventures Foundation",
    btnText: "Read More",
    url: "https://civf.co.in/",
    id: 10,
    icon: "💡",
    category: "Innovation Foundation",
    description: "Empowering innovative ventures and breakthrough technologies through strategic funding and mentorship.",
    highlights: ["Venture Funding", "Innovation Support", "Technology Commercialization", "Strategic Partnerships"]
  },
];

export default function Initiatives() {
  const [selectedInitiative, setSelectedInitiative] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const openModal = (initiative) => {
    setSelectedInitiative(initiative);
  };

  const closeModal = () => {
    setSelectedInitiative(null);
  };

  const handleKeyDown = (e, initiative) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(initiative);
    }
    if (e.key === 'Escape' && selectedInitiative) {
      closeModal();
    }
  };

  return (
    <section 
      className="py-5" 
      role="region" 
      aria-labelledby="initiatives-heading"
      style={{
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
        minHeight: "100vh"
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <span
            className="d-inline-block px-4 py-2 rounded-pill text-uppercase fw-semibold mb-3"
            style={{
              background: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)",
              color: "white",
              fontSize: "0.85rem",
              letterSpacing: "1px"
            }}
            aria-label="Section subtitle"
          >
            {subTitle}
          </span>
          <h2 
            id="initiatives-heading" 
            className="display-4 fw-bold text-dark mb-4"
            style={{ lineHeight: "1.2" }}
          >
            {title}
          </h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "600px" }}>
            Discover our comprehensive network of research centers and innovation hubs driving breakthrough discoveries
          </p>
        </div>

        {/* Honeycomb Grid */}
        <div className="honeycomb-container position-relative">
          <div className="row g-4 justify-content-center">
            {eventSliderList.map((elem, index) => {
              const isHovered = hoveredItem === elem.id;
              const delay = index * 0.1;
              
              return (
                <div 
                  key={elem.id} 
                  className="col-xl-3 col-lg-4 col-md-6 col-sm-12"
                  style={{
                    animationDelay: `${delay}s`
                  }}
                >
                  <div
                    className="hexagon-card position-relative overflow-hidden"
                    role="button"
                    tabIndex={0}
                    aria-label={`Open details for ${elem.title} - ${elem.category}`}
                    onClick={() => openModal(elem)}
                    onKeyDown={(e) => handleKeyDown(e, elem)}
                    onMouseEnter={() => setHoveredItem(elem.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    onFocus={() => setHoveredItem(elem.id)}
                    onBlur={() => setHoveredItem(null)}
                    style={{
                      height: "280px",
                      borderRadius: "24px",
                      background: isHovered 
                        ? "linear-gradient(135deg, #007bff 0%, #0056b3 100%)"
                        : "rgba(255, 255, 255, 0.9)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      boxShadow: isHovered 
                        ? "0 20px 40px rgba(0, 123, 255, 0.3)"
                        : "0 8px 32px rgba(0, 0, 0, 0.1)",
                      cursor: "pointer",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      transform: isHovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)"
                    }}
                  >
                    {/* Background Pattern */}
                    <div 
                      className="position-absolute top-0 start-0 w-100 h-100 opacity-10"
                      style={{
                        background: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23007bff' fill-opacity='0.1'%3E%3Cpolygon points='30,0 60,15 60,45 30,60 0,45 0,15'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat`
                      }}
                    />

                    {/* Icon */}
                    <div 
                      className="position-absolute top-0 end-0 m-3 d-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: "60px",
                        height: "60px",
                        background: isHovered 
                          ? "rgba(255, 255, 255, 0.2)" 
                          : "linear-gradient(135deg, #007bff 0%, #0056b3 100%)",
                        backdropFilter: "blur(10px)",
                        fontSize: "1.5rem",
                        transition: "all 0.3s ease"
                      }}
                    >
                      <span role="img" aria-hidden="true">
                        {elem.icon}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-4 h-100 d-flex flex-column justify-content-end">
                      <div 
                        className="text-start"
                        style={{
                          color: isHovered ? "white" : "#2c3e50",
                          transition: "color 0.3s ease"
                        }}
                      >
                        {/* Category Badge */}
                        <span 
                          className="badge rounded-pill px-3 py-1 mb-3 fw-semibold"
                          style={{
                            background: isHovered 
                              ? "rgba(255, 255, 255, 0.2)" 
                              : "rgba(0, 123, 255, 0.1)",
                            color: isHovered ? "white" : "#007bff",
                            fontSize: "0.75rem",
                            border: isHovered 
                              ? "1px solid rgba(255, 255, 255, 0.3)"
                              : "1px solid rgba(0, 123, 255, 0.3)"
                          }}
                        >
                          {elem.category}
                        </span>

                        {/* Title */}
                        <h3 
                          className="fw-bold mb-2"
                          style={{
                            fontSize: "1.1rem",
                            lineHeight: "1.3",
                            minHeight: "2.6rem",
                            display: "-webkit-box",
                            WebkitLineClamp: "2",
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden"
                          }}
                        >
                          {elem.title}
                        </h3>

                        {/* Description Preview */}
                        <p 
                          className="mb-3 opacity-75"
                          style={{
                            fontSize: "0.85rem",
                            lineHeight: "1.4",
                            display: "-webkit-box",
                            WebkitLineClamp: "2",
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden"
                          }}
                        >
                          {elem.description}
                        </p>

                        {/* Action Indicator */}
                        <div className="d-flex align-items-center justify-content-between">
                          <small 
                            className="fw-semibold"
                            style={{ fontSize: "0.8rem" }}
                          >
                            Click to explore
                          </small>
                          <div 
                            className="d-flex align-items-center justify-content-center rounded-circle"
                            style={{
                              width: "32px",
                              height: "32px",
                              background: isHovered 
                                ? "rgba(255, 255, 255, 0.2)" 
                                : "rgba(0, 123, 255, 0.1)",
                              transition: "all 0.3s ease"
                            }}
                          >
                            <span style={{ fontSize: "0.8rem" }}>→</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedInitiative && (
        <div 
          className="modal fade show d-block" 
          tabIndex={-1} 
          role="dialog"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          style={{ 
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            backdropFilter: "blur(10px)"
          }}
          onClick={closeModal}
        >
          <div 
            className="modal-dialog modal-lg modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "800px" }}
          >
            <div 
              className="modal-content border-0 shadow-lg"
              style={{
                borderRadius: "24px",
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(20px)"
              }}
            >
              {/* Modal Header */}
              <div 
                className="modal-header border-0 pb-0"
                style={{
                  background: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)",
                  borderTopLeftRadius: "24px",
                  borderTopRightRadius: "24px",
                  color: "white"
                }}
              >
                <div className="d-flex align-items-center">
                  <div 
                    className="d-flex align-items-center justify-content-center rounded-circle me-3"
                    style={{
                      width: "50px",
                      height: "50px",
                      background: "rgba(255, 255, 255, 0.2)",
                      fontSize: "1.3rem"
                    }}
                  >
                    <span role="img" aria-hidden="true">
                      {selectedInitiative.icon}
                    </span>
                  </div>
                  <div>
                    <h4 id="modal-title" className="modal-title fw-bold mb-1">
                      {selectedInitiative.title}
                    </h4>
                    <span className="badge bg-light text-dark px-3 py-1 rounded-pill">
                      {selectedInitiative.category}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  aria-label="Close modal"
                  onClick={closeModal}
                  onKeyDown={(e) => e.key === 'Escape' && closeModal()}
                />
              </div>

              {/* Modal Body */}
              <div className="modal-body p-4">
                <div className="row g-4">
                  {/* Image */}
                  <div className="col-md-5">
                    <div 
                      className="position-relative overflow-hidden rounded-3"
                      style={{ height: "250px" }}
                    >
                      <Image
                        src={selectedInitiative.imgUrl}
                        alt={selectedInitiative.imgAlt}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-3"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="col-md-7">
                    <p 
                      id="modal-description" 
                      className="text-muted mb-4 lh-lg"
                      style={{ fontSize: "1rem" }}
                    >
                      {selectedInitiative.description}
                    </p>

                    {/* Highlights */}
                    <h5 className="fw-bold text-dark mb-3">Key Highlights</h5>
                    <div className="row g-2 mb-4">
                      {selectedInitiative.highlights.map((highlight, index) => (
                        <div key={index} className="col-sm-6">
                          <div 
                            className="d-flex align-items-center p-2 rounded-3"
                            style={{
                              background: "rgba(0, 123, 255, 0.1)",
                              border: "1px solid rgba(0, 123, 255, 0.2)"
                            }}
                          >
                            <span 
                              className="text-primary me-2"
                              style={{ fontSize: "0.8rem" }}
                            >
                              ✓
                            </span>
                            <small className="fw-medium text-dark">
                              {highlight}
                            </small>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    {selectedInitiative.url !== "#" && (
                      <Link
                        href={selectedInitiative.url}
                        target={selectedInitiative.url.startsWith('http') ? "_blank" : undefined}
                        rel={selectedInitiative.url.startsWith('http') ? "noopener noreferrer" : undefined}
                        className="btn btn-primary rounded-pill px-4 py-2 fw-semibold"
                        style={{
                          background: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)",
                          border: "none"
                        }}
                      >
                        Visit {selectedInitiative.category} Page
                        <span className="ms-2">→</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        /* Honeycomb Animation */
        .honeycomb-container .col-xl-3:nth-child(1) { animation: fadeInUp 0.6s ease forwards; animation-delay: 0.1s; opacity: 0; }
        .honeycomb-container .col-xl-3:nth-child(2) { animation: fadeInUp 0.6s ease forwards; animation-delay: 0.2s; opacity: 0; }
        .honeycomb-container .col-xl-3:nth-child(3) { animation: fadeInUp 0.6s ease forwards; animation-delay: 0.3s; opacity: 0; }
        .honeycomb-container .col-xl-3:nth-child(4) { animation: fadeInUp 0.6s ease forwards; animation-delay: 0.4s; opacity: 0; }
        .honeycomb-container .col-xl-3:nth-child(5) { animation: fadeInUp 0.6s ease forwards; animation-delay: 0.5s; opacity: 0; }
        .honeycomb-container .col-xl-3:nth-child(6) { animation: fadeInUp 0.6s ease forwards; animation-delay: 0.6s; opacity: 0; }
        .honeycomb-container .col-xl-3:nth-child(7) { animation: fadeInUp 0.6s ease forwards; animation-delay: 0.7s; opacity: 0; }
        .honeycomb-container .col-xl-3:nth-child(8) { animation: fadeInUp 0.6s ease forwards; animation-delay: 0.8s; opacity: 0; }
        .honeycomb-container .col-xl-3:nth-child(9) { animation: fadeInUp 0.6s ease forwards; animation-delay: 0.9s; opacity: 0; }
        .honeycomb-container .col-xl-3:nth-child(10) { animation: fadeInUp 0.6s ease forwards; animation-delay: 1s; opacity: 0; }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Hexagon Card Focus Styles */
        .hexagon-card:focus {
          outline: 3px solid #0066cc !important;
          outline-offset: 2px;
          box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.3) !important;
        }

        .hexagon-card:focus-visible {
          outline: 3px solid #0066cc !important;
          outline-offset: 2px;
        }

        /* Modal Animations */
        .modal.show {
          animation: modalFadeIn 0.3s ease forwards;
        }

        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .modal-dialog {
          animation: modalSlideUp 0.3s ease forwards;
        }

        @keyframes modalSlideUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        /* Enhanced Accessibility */
        .hexagon-card:focus-within {
          outline: 3px solid #0066cc;
          outline-offset: 2px;
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .hexagon-card {
            border: 2px solid currentColor !important;
            background: white !important;
          }
          
          .hexagon-card:focus {
            outline: 4px solid currentColor !important;
          }

          .modal-content {
            border: 2px solid currentColor !important;
            background: white !important;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .hexagon-card,
          .modal,
          .modal-dialog {
            transition: none !important;
            animation: none !important;
          }
          
          .hexagon-card:hover {
            transform: none !important;
          }

          .honeycomb-container .col-xl-3 {
            animation: none !important;
            opacity: 1 !important;
          }
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .hexagon-card {
            height: 240px !important;
          }

          .hexagon-card:hover {
            transform: translateY(-4px) scale(1.01) !important;
          }

          .modal-dialog {
            margin: 1rem;
            max-width: calc(100vw - 2rem) !important;
          }

          .modal-body .row {
            flex-direction: column-reverse;
          }
        }

        /* Print styles */
        @media print {
          .hexagon-card {
            break-inside: avoid;
            box-shadow: none !important;
            border: 1px solid #000 !important;
            background: white !important;
            transform: none !important;
          }
          
          .modal {
            display: none !important;
          }
        }

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

        /* Windows high contrast mode */
        @media (-ms-high-contrast: active) {
          .hexagon-card {
            border: 2px solid;
          }
        }
      `}</style>
    </section>
  );
}