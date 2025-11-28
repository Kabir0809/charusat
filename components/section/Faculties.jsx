"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

import cspit from "@/public/assets/images/institute/CSPIT.jpg";
import depstar from "@/public/assets/images/institute/DEPSTAR.jpg";
import rpcp from "@/public/assets/images/institute/RPCP.jpg";
import arip from "@/public/assets/images/institute/ARIP.jpg";
import cmpica from "@/public/assets/images/institute/CMPICA.jpg";
import i2im from "@/public/assets/images/institute/I2IM.jpg";
import pdpias from "@/public/assets/images/institute/PDPIAS.jpg";
import MTIN from "@/public/assets/images/institute/MTIN.jpg";
import CLASS from "@/public/assets/images/institute/CLASS.png";

const title = "Our Faculties & Institutes";

const CourseData = [
  {
    imgUrl: cspit,
    imgAlt: "CSPIT - Modern engineering building with state-of-the-art facilities",
    cate: "Chandubhai S. Patel Institute of Technology",
    shortName: "CSPIT",
    programs: "Engineering",
    title: "B. Tech, M. Tech, PG Diploma(PGDEAMT), Ph. D.",
    link: "https://www.charusat.ac.in/cspit/",
    studentCount: "3000+",
    programCount: "12",
    specialization: "Technology & Innovation",
    id: 1,
  },
  {
    imgUrl: depstar,
    imgAlt: "DEPSTAR - Advanced technology and research institute campus",
    cate: "Devang Patel Institute of Advance Technology and Research",
    shortName: "DEPSTAR",
    programs: "Engineering",
    title: "B. Tech",
    link: "https://www.charusat.ac.in/depstar/",
    studentCount: "1500+",
    programCount: "8",
    specialization: "Advanced Technology",
    id: 2,
  },
  {
    imgUrl: rpcp,
    imgAlt: "RPCP - Pharmacy college building with modern laboratories",
    cate: "Ramanbhai Patel College of Pharmacy",
    shortName: "RPCP",
    programs: "Pharmacy",
    title: "B. Pharm., M. Pharm., Ph. D.",
    link: "https://www.charusat.ac.in/rpcp/",
    studentCount: "800+",
    programCount: "5",
    specialization: "Pharmaceutical Sciences",
    id: 3,
  },
  {
    imgUrl: cmpica,
    imgAlt: "CMPICA - Computer application institute with modern IT infrastructure",
    cate: "Smt. Chandaben Mohanbhai Patel Institute of Computer Application",
    shortName: "CMPICA",
    programs: "Computer Science and Application",
    title: "BCA, B.Sc(IT), MCA, M.Sc(IT), Ph. D.",
    link: "https://www.charusat.ac.in/cmpica/",
    studentCount: "1200+",
    programCount: "6",
    specialization: "IT & Computing",
    id: 4,
  },
  {
    imgUrl: i2im,
    imgAlt: "I2IM - Management institute building with modern business facilities",
    cate: "Indukaka Ipcowala Institute of Management",
    shortName: "I2IM",
    programs: "Management Studies",
    title: "BBA, BA(English), Library Science, MBA, Ph. D.",
    link: "https://www.charusat.ac.in/i2im/",
    studentCount: "900+",
    programCount: "7",
    specialization: "Business & Management",
    id: 5,
  },
  {
    imgUrl: pdpias,
    imgAlt: "PDPIAS - Applied sciences institute with research laboratories",
    cate: "P. D. Patel Institute of Applied Sciences",
    shortName: "PDPIAS",
    programs: "Sciences",
    title: "B. Sc., PG Diploma(Data Science), M. Sc., Ph. D.",
    link: "https://www.charusat.ac.in/pdpias/",
    studentCount: "600+",
    programCount: "8",
    specialization: "Applied Research",
    id: 6,
  },
  {
    imgUrl: MTIN,
    imgAlt: "MTIN - Nursing institute with clinical training facilities",
    cate: "Manikaka Topawala Institute of Nursing",
    shortName: "MTIN",
    programs: "Medical Sciences",
    title: "GNM, B. Sc., Post Basic Nursing, M. Sc., Ph. D.",
    link: "https://www.charusat.ac.in/mtin/",
    studentCount: "400+",
    programCount: "6",
    specialization: "Healthcare & Nursing",
    id: 7,
  },
  {
    imgUrl: arip,
    imgAlt: "ARIP - Physiotherapy institute with rehabilitation facilities",
    cate: "Ashok & Rita Patel Institute of Physiotherapy",
    shortName: "ARIP",
    programs: "Medical Sciences",
    title: "BPT, MPT, Ph. D.",
    link: "https://www.charusat.ac.in/arip/",
    studentCount: "300+",
    programCount: "3",
    specialization: "Physiotherapy & Rehabilitation",
    id: 8,
  },
  {
    imgUrl: arip,
    imgAlt: "BDIPS - Paramedical sciences institute with diagnostic facilities",
    cate: "Bapubhai Desaibhai Patel Institute of Paramedical Sciences",
    shortName: "BDIPS",
    programs: "Medical Sciences",
    title: "B. Opto., B. Sc., M. Sc., Ph. D.",
    link: "https://www.charusat.ac.in/bdips/",
    studentCount: "250+",
    programCount: "4",
    specialization: "Paramedical Sciences",
    id: 9,
  },
  {
    imgUrl: CLASS,
    imgAlt: "CLASS - Liberal arts and social studies institute",
    cate: "Charotar Institute Of Languages, Arts and Social Studies",
    shortName: "CLASS",
    programs: "Humanities",
    title: "B.A., B.LIB., Ph.D.",
    link: "https://foh.charusat.ac.in/",
    studentCount: "200+",
    programCount: "3",
    specialization: "Liberal Arts",
    id: 10,
  },
];

// Category configurations with colors and icons
const categoryConfig = {
  "Engineering": {
    color: "primary",
    bgGradient: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)",
    borderColor: "#007bff",
    icon: "⚙️",
    bgColor: "rgba(0, 123, 255, 0.1)"
  },
  "Medical Sciences": {
    color: "danger",
    bgGradient: "linear-gradient(135deg, #dc3545 0%, #c82333 100%)",
    borderColor: "#dc3545",
    icon: "🏥",
    bgColor: "rgba(220, 53, 69, 0.1)"
  },
  "Management Studies": {
    color: "success",
    bgGradient: "linear-gradient(135deg, #28a745 0%, #1e7e34 100%)",
    borderColor: "#28a745",
    icon: "📊",
    bgColor: "rgba(40, 167, 69, 0.1)"
  },
  "Sciences": {
    color: "info",
    bgGradient: "linear-gradient(135deg, #17a2b8 0%, #138496 100%)",
    borderColor: "#17a2b8",
    icon: "🔬",
    bgColor: "rgba(23, 162, 184, 0.1)"
  },
  "Pharmacy": {
    color: "warning",
    bgGradient: "linear-gradient(135deg, #ffc107 0%, #e0a800 100%)",
    borderColor: "#ffc107",
    icon: "💊",
    bgColor: "rgba(255, 193, 7, 0.1)"
  },
  "Computer Science and Application": {
    color: "dark",
    bgGradient: "linear-gradient(135deg, #343a40 0%, #23272b 100%)",
    borderColor: "#343a40",
    icon: "💻",
    bgColor: "rgba(52, 58, 64, 0.1)"
  },
  "Humanities": {
    color: "secondary",
    bgGradient: "linear-gradient(135deg, #6f42c1 0%, #59339d 100%)",
    borderColor: "#6f42c1",
    icon: "📚",
    bgColor: "rgba(111, 66, 193, 0.1)"
  }
};

function Faculties() {
  const [items, setItems] = useState(CourseData);
  const [activeFilter, setActiveFilter] = useState("All");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const filterItem = (categItem) => {
    if (categItem === "All") {
      setItems(CourseData);
      setActiveFilter("All");
    } else {
      const updateItems = CourseData.filter((curElem) => {
        return curElem.programs === categItem;
      });
      setItems(updateItems);
      setActiveFilter(categItem);
    }
  };

  const categories = ["All", ...new Set(CourseData.map(item => item.programs))];

  return (
    <section 
      className="py-5 " 
      role="region" 
      aria-labelledby="faculties-heading"
      style={{
        // background: "#e1e1e1",
        minHeight: "100vh"
      }}
    >
      <div className="section">
        {/* Header */}
        <div className="text-center mb-5">
          <p className="lead text-muted">
            Discover our world-class institutes
          </p>
          <h2 
            id="faculties-heading" 
            className="display-4 fw-bold text-dark mb-3"
          >
            {title}
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="row justify-content-center mb-5">
          <div className="col-12">
            <div 
              className="d-flex justify-content-center gap-2 flex-nowrap overflow-auto pb-2"
              role="group" 
              aria-label="Faculty filter options"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {categories.map((category) => {
                const config = category === "All" 
                  ? { color: "primary", icon: "🏛️", borderColor: "#007bff" }
                  : categoryConfig[category] || { color: "primary", icon: "🏛️", borderColor: "#007bff" };
                return (
                  <button
                    key={category}
                    className={`btn btn-sm rounded-pill px-3 py-2 fw-semibold flex-shrink-0 ${
                      activeFilter === category 
                        ? `btn-${config.color} shadow-sm` 
                        : `btn-outline-${config.color}`
                    }`}
                    onClick={() => filterItem(category)}
                    aria-label={`Filter to show ${category === "All" ? "all" : category} faculties`}
                    style={{
                      minWidth: "100px",
                      fontSize: "0.85rem",
                      transform: activeFilter === category ? "translateY(-1px)" : "none",
                      transition: "all 0.2s ease",
                      border: `1px solid ${config.borderColor || '#007bff'}`,
                      whiteSpace: "nowrap"
                    }}
                  >
                    <span role="img" aria-hidden="true" className="me-1">
                      {category === "All" ? "🏛️" : config.icon}
                    </span>
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="container">
        <div className="row g-4 justify-content-center">
          {items.map((elem, index) => {
            const config = categoryConfig[elem.programs] || categoryConfig["Engineering"];
            return (
              <div
                key={elem.id}
                className="col-xl-3 col-lg-4 col-md-6 col-sm-12"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.4s ease ${index * 0.05}s`
                }}
              >
                <Link 
                  href={elem.link} 
                  target="_blank" 
                  className="text-decoration-none"
                  aria-label={`Visit ${elem.cate} website - Programs: ${elem.title}`}
                >
                  <article 
                    className="card h-100 border-0 shadow-sm position-relative overflow-hidden faculty-card"
                    role="article"
                    aria-labelledby={`faculty-${elem.id}-title`}
                    style={{
                      borderRadius: "24px",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      borderLeft: `5px solid ${config.borderColor}`,
                      background: "rgba(255, 255, 255, 0.25)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                    }}
                  >
                    {/* Category Badge */}
                    <div 
                      className="position-absolute top-0 end-0 m-3 z-3"
                    >
                      <span 
                        className={`badge px-3 py-2 rounded-pill fw-semibold text-white`}
                        style={{ 
                          background: "rgba(255, 255, 255, 0.2)",
                          backdropFilter: "blur(15px)",
                          border: "1px solid rgba(255, 255, 255, 0.3)",
                          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                          fontSize: "0.75rem",
                          color: "#2c3e50 !important"
                        }}
                      >
                        <span role="img" aria-hidden="true" className="me-1">
                          {config.icon}
                        </span>
                        {elem.programs}
                      </span>
                    </div>

                    {/* Image Container */}
                    <div 
                      className="position-relative overflow-hidden"
                      style={{ height: "220px" }}
                    >
                      <Image
                        src={elem.imgUrl}
                        alt={elem.imgAlt}
                        fill
                        className="card-img-top faculty-image"
                        style={{
                          objectFit: "contain",
                          transition: "transform 0.4s ease"
                        }}
                      />
                      {/* Overlay */}
                      <div 
                        className="position-absolute top-0 start-0 w-100 h-100 faculty-overlay d-flex align-items-center justify-content-center"
                        style={{
                          background: config.bgGradient,
                          opacity: 0,
                          transition: "opacity 0.4s ease"
                        }}
                      >
                        <div className="text-center text-white">
                          <div 
                            className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 bg-white bg-opacity-20"
                            style={{ width: "60px", height: "60px" }}
                          >
                            <span role="img" aria-hidden="true" className="fs-3">
                              {config.icon}
                            </span>
                          </div>
                          <div className="btn btn-light btn-sm rounded-pill px-4 fw-semibold">
                            Explore Programs
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div 
                      className="card-body p-4 text-center"
                      style={{
                        background: "rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(10px)",
                        borderTop: "1px solid rgba(255, 255, 255, 0.2)"
                      }}
                    >
                      {/* Institute Name */}
                      <div className="mb-3">
                        <h5 
                          id={`faculty-${elem.id}-title`}
                          className="card-title fw-bold text-dark mb-2 lh-sm"
                          style={{ 
                            fontSize: "1.5rem",
                            minHeight: "2.2rem",
                            display: "-webkit-box",
                            WebkitLineClamp: "2",
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden"
                          }}
                        >
                          {elem.shortName}
                        </h5>
                        <p className="text-muted small mb-3 lh-sm" style={{ fontSize: "0.85rem", minHeight: "2.5rem" }}>
                          {elem.cate}
                        </p>
                        {/* Gradient Underline */}
                        <div className="d-flex justify-content-center">
                          <div 
                            className="gradient-line"
                            style={{
                              width: "40px",
                              height: "3px",
                              background: config.bgGradient,
                              borderRadius: "2px",
                              transition: "width 0.3s ease"
                            }}
                          />
                        </div>
                      </div>

                      {/* Programs */}
                      <div className="mb-3">
                        <p 
                          className="text-dark mb-0 fw-medium"
                          style={{ 
                            fontSize: "0.9rem",
                            lineHeight: "1.4",
                            minHeight: "2.5rem",
                            display: "-webkit-box",
                            WebkitLineClamp: "2",
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden"
                          }}
                        >
                          {elem.title}
                        </p>
                      </div>

                      {/* Quick Stats */}
                      <div className="row g-2 text-center">
                        <div className="col-6">
                          <div 
                            className="p-2 rounded-3"
                            style={{ 
                              background: "rgba(255, 255, 255, 0.2)",
                              backdropFilter: "blur(10px)",
                              border: "1px solid rgba(255, 255, 255, 0.3)",
                              boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                            }}
                          >
                            <div className="fw-bold text-dark" style={{ fontSize: "0.9rem" }}>
                              {elem.studentCount}
                            </div>
                            <div className="text-muted small">Students</div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div 
                            className="p-2 rounded-3"
                            style={{ 
                              background: "rgba(255, 255, 255, 0.2)",
                              backdropFilter: "blur(10px)",
                              border: "1px solid rgba(255, 255, 255, 0.3)",
                              boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                            }}
                          >
                            <div className="fw-bold text-dark" style={{ fontSize: "0.9rem" }}>
                              {elem.programCount}
                            </div>
                            <div className="text-muted small">Programs</div>
                          </div>
                        </div>
                      </div>

                      {/* Specialization */}
                      <div className="mt-3">
                        <small className="text-muted fst-italic">
                          Specializing in {elem.specialization}
                        </small>
                      </div>
                    </div>
                  </article>
                </Link>
              </div>
            );
          })}
        </div>
        </div>
        {/* No Results */}
        {items.length === 0 && (
          <div className="text-center py-5">
            <div className="text-muted">
              <i className="bi bi-search fs-1 mb-3 d-block"></i>
              <h4>No faculties found</h4>
              <p>Try adjusting your filter selection</p>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        /* Card Hover Effects */
        .faculty-card {
          cursor: pointer;
        }

        .faculty-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15), 
                      0 15px 35px rgba(0, 0, 0, 0.1), 
                      inset 0 1px 0 rgba(255, 255, 255, 0.3) !important;
          background: rgba(255, 255, 255, 0.35) !important;
          
        }

        .faculty-card:hover .faculty-image {
          transform: scale(1.1);
        }

        .faculty-card:hover .faculty-overlay {
          opacity: 0.9 !important;
        }

        .faculty-card:hover .gradient-line {
          width: 120px !important;
        }

        /* Filter Button Animations */
        .btn {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        /* Hide scrollbar for filter buttons */
        .d-flex::-webkit-scrollbar {
          display: none;
        }

        /* Card consistent height */
        .faculty-card {
          min-height: 500px;
        }

        /* Staggered Animation */
        .col-xl-4:nth-child(1) { animation-delay: 0.1s; }
        .col-xl-4:nth-child(2) { animation-delay: 0.2s; }
        .col-xl-4:nth-child(3) { animation-delay: 0.3s; }
        .col-xl-4:nth-child(4) { animation-delay: 0.4s; }
        .col-xl-4:nth-child(5) { animation-delay: 0.5s; }
        .col-xl-4:nth-child(6) { animation-delay: 0.6s; }

        /* Focus States for Accessibility */
        .faculty-card:focus-within {
          outline: 3px solid #0066cc;
          outline-offset: 2px;
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15), 
                      0 15px 35px rgba(0, 0, 0, 0.1), 
                      inset 0 1px 0 rgba(255, 255, 255, 0.3) !important;
          background: rgba(255, 255, 255, 0.35) !important;
          border: 1px solid rgba(255, 255, 255, 0.4) !important;
        }

        .btn:focus {
          outline: 3px solid #0066cc !important;
          outline-offset: 2px !important;
          box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.3) !important;
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .faculty-card {
            border: 2px solid currentColor !important;
            background: white !important;
          }
          
          .faculty-card:focus-within {
            outline: 4px solid currentColor !important;
          }
          
          .btn:focus {
            outline: 4px solid currentColor !important;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .faculty-card,
          .faculty-image,
          .faculty-overlay,
          .gradient-line,
          .btn {
            transition: none !important;
            animation: none !important;
          }
          
          .faculty-card:hover,
          .faculty-card:focus-within {
            transform: none !important;
          }
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .faculty-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12), 
                        inset 0 1px 0 rgba(255, 255, 255, 0.25) !important;
            background: rgba(255, 255, 255, 0.3) !important;
          }
          
          .btn {
            min-height: 44px;
            font-size: 0.8rem !important;
            min-width: 80px !important;
            padding: 0.5rem 1rem !important;
          }
          
          .d-flex.justify-content-center {
            justify-content: flex-start !important;
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }

        /* Print styles */
        @media print {
          .faculty-card {
            break-inside: avoid;
            box-shadow: none !important;
            border: 1px solid #000 !important;
            background: white !important;
          }
          
          .faculty-overlay {
            display: none !important;
          }
          
          .btn {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Faculties;