"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import React from "react";

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
const title = "Faculties";

const CourseData = [
  {
    imgUrl: cspit,
    imgAlt: "CSPIT image",
    cate: "Chandubhai S. Patel Institute of Technology (CSPIT)",
    programs: "Engineering",
    title: "B. Tech, M. Tech, PG Diploma(PGDEAMT), Ph. D.,",
    link: "https://www.charusat.ac.in/cspit/",
    author: "assets/images/course/author/01.jpg",
    id: 1,
  },
  {
    imgUrl: depstar,
    imgAlt: "Depstar image",
    cate: "Devang Patel Institute of Advance Technology and Research (DEPSTAR)",
    programs: "Engineering",
    title: "B. Tech",
    link: "https://www.charusat.ac.in/depstar/",
    author: "assets/images/course/author/01.jpg",
    authorName: "William Smith",
    price: "$199.00",
    id: 2,
  },
  {
    imgUrl: rpcp,
    imgAlt: "RPCP image",
    cate: "Ramanbhai Patel College of Pharmacy (RPCP)",
    programs: "Pharmacy",
    title: "B. Pharm., M. Pharm., Ph. D.",
    link: "https://www.charusat.ac.in/rpcp/",
    author: "assets/images/course/author/02.jpg",
    authorName: "Angel Mili",
    price: "$199.00",
    id: 3,
  },
  {
    imgUrl: cmpica,
    imgAlt: "CMPICA image",
    cate: "Smt. Chandaben Mohanbhai Patel Institute of Computer Application (CMPICA)",
    programs: "Computer Science and Application",
    title: "BCA,B.Sc(IT), MCA,M.Sc(IT), Ph. D.",
    link: "https://www.charusat.ac.in/cmpica/",
    author: "assets/images/course/author/03.jpg",
    id: 4,
  },
  {
    imgUrl: i2im,
    imgAlt: "I2IM image",
    cate: "Indukaka Ipcowala Institute of Management (I2IM)",
    programs: "Management Studies",
    title: "BBA, BA(English), Library Science, MBA, Ph. D.",
    link: "https://www.charusat.ac.in/i2im/",
    author: "assets/images/course/author/04.jpg",
    id: 5,
  },
  {
    imgUrl: pdpias,
    imgAlt: "PDPIAS image",
    cate: "P. D. Patel Institute of Applied Sciences (PDPIAS)",
    programs: "Sciences",
    title: "B. Sc., PG Diploma(Data Science), M. Sc., Ph. D.",
    link: "https://www.charusat.ac.in/pdpias/",
    author: "assets/images/course/author/05.jpg",
    id: 6,
  },
  {
    imgUrl: MTIN,
    imgAlt: "MTIN image",
    cate: "Manikaka Topawala Institute of Nursing (MTIN)",
    programs: "Medical Sciences",
    title: "GNM, B. Sc., Post Basic Nursing, M. Sc., Ph. D.",
    link: "https://www.charusat.ac.in/mtin/",
    author: "assets/images/course/author/06.jpg",
    id: 7,
  },
  {
    imgUrl: arip,
    imgAlt: "ARIP image",
    cate: "Ashok & Rita Patel Institute of Physiotherapy (ARIP)",
    programs: "Medical Sciences",
    title: "BPT, MPT, Ph. D.",
    link: "https://www.charusat.ac.in/arip/",
    author: "assets/images/course/author/01.jpg",
    id: 8,
  },
  {
    imgUrl: arip,
    imgAlt: "BDIPS image",
    cate: "Bapubhai Desaibhai Patel Institute of Paramedical Sciences (BDIPS)",
    programs: "Medical Sciences",
    title: "B. Opto., B. Sc., M. Sc., Ph. D.",
    link: "https://www.charusat.ac.in/bdips/",
    author: "assets/images/course/author/02.jpg",
    id: 9,
  },
  {
    imgUrl: CLASS,
    imgAlt: "CLASS image",
    cate: "Charotar Institute Of Languages, Arts and Social Studies (CLASS)(Proposed)",
    programs: "Humanities",
    title: "B.A., B.LIB., Ph.D.",
    link: "https://foh.charusat.ac.in/",
    author: "assets/images/course/author/02.jpg",
    id: 10,
  },
];

function Faculties() {
  const [items, setItems] = useState(CourseData);
  const [activeFilter, setActiveFilter] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  
  const filterItem = (categItem) => {
    setActiveFilter(categItem);
    if (categItem === "All") {
      setItems(CourseData);
    } else {
      const updateItems = CourseData.filter((curElem) => {
        return curElem.programs === categItem;
      });
      setItems(updateItems);
    }
  };

  // Intersection Observer for scroll animations
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = document.querySelector('.faculties-container');
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  const imageStyle = {
    height: "250px",
    objectFit: "cover",
    width: "100%",
    transition: "transform 0.3s ease",
  };

  return (
    <div className={`faculties-container course-section style-3 py-5 ${isVisible ? 'animate-in' : ''}`} role="region" aria-labelledby="faculties-heading">
      <div className="container">
        {/* Enhanced Header with Gradient Background */}
        <div className="section-header-wrapper">
          <div className="header-decoration">
            <div className="floating-shapes">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <div className="shape shape-3"></div>
            </div>
          </div>
          <h2 id="faculties-heading" className="title text-center main-title">
            <span className="title-accent">Our</span> {title}
            <div className="title-underline"></div>
          </h2>
          <p className="subtitle text-center">
            Discover excellence across diverse academic disciplines with our world-class institutes
          </p>
        </div>

        {/* Enhanced Filter Buttons */}
        <div className="section-header">
          <div className="course-filter-group modern-filter" role="group" aria-label="Faculty filter options">
            <ul className="lab-ul demo1 filter-pills" aria-label="Filter faculties by program type">
              {[
                { key: "All", label: "All Programs", icon: "🎓" },
                { key: "Engineering", label: "Engineering", icon: "⚙️" },
                { key: "Pharmacy", label: "Pharmacy", icon: "💊" },
                { key: "Computer Science and Application", label: "Computer Science", icon: "💻" },
                { key: "Management Studies", label: "Management", icon: "📊" },
                { key: "Sciences", label: "Sciences", icon: "🔬" },
                { key: "Medical Sciences", label: "Medical Sciences", icon: "🏥" },
                { key: "Humanities", label: "Humanities", icon: "📚" }
              ].map((filter, index) => (
                <li key={filter.key} style={{ animationDelay: `${index * 0.1}s` }}>
                  <button 
                    className={`filter-btn modern-pill ${activeFilter === filter.key ? 'active' : ''}`}
                    onClick={() => filterItem(filter.key)}
                    aria-label={`Filter to show ${filter.label} faculties`}
                    onKeyDown={(e) => e.key === 'Enter' && filterItem(filter.key)}
                  >
                    <span className="filter-icon" aria-hidden="true">{filter.icon}</span>
                    <span className="filter-text">{filter.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Enhanced Cards Grid */}
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-1 course-filter" aria-label="List of university faculties and institutes">
            {items.map((elem, index) => {
              const {
                id,
                imgUrl,
                imgAlt,
                cate,
                programs,
                title,
                link,
              } = elem;
              return (
                <div key={id} className="col" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Link href={link} target="_blank" aria-label={`Visit ${cate} website - Programs: ${title} - Opens in new tab`}>
                    <article 
                      className={`course-item modern-card ${isVisible ? 'card-animate' : ''}`}
                      aria-labelledby={`faculty-${id}-title`}
                    >
                      <div className="course-inner">
                        <div className="course-thumb">
                          <div className="image-container">
                            <Image 
                              src={imgUrl} 
                              alt={imgAlt} 
                              style={imageStyle}
                              className="course-image" 
                            />
                            <div className="image-overlay">
                              <div className="overlay-content">
                                <span className="explore-text">Explore Programs</span>
                                <div className="arrow-icon">→</div>
                              </div>
                            </div>
                          </div>
                          <div className="course-category">
                            <div className="course-badge">
                              <span className="badge-text">{programs}</span>
                            </div>
                          </div>
                        </div>
                        <div className="course-content">
                          <h3
                            id={`faculty-${id}-title`}
                            className="course-title"
                          >
                            {cate}
                          </h3>
                          <div className="programs-info">
                            <p className="programs-text">
                              {title}
                            </p>
                          </div>
                          <div className="card-footer">
                            <span className="learn-more">
                              Learn More
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div className="card-glow"></div>
                      </div>
                    </article>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Modern Container and Animations */
        .faculties-container {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          position: relative;
          overflow: hidden;
        }

        .faculties-container.animate-in {
          animation: fadeInUp 0.8s ease-out;
        }

        /* Enhanced Header Section */
        .section-header-wrapper {
          position: relative;
          padding: 4rem 0 2rem;
          text-align: center;
        }

        .header-decoration {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.1;
          animation: float 6s ease-in-out infinite;
        }

        .shape-1 {
          width: 80px;
          height: 80px;
          background: linear-gradient(45deg, #007bff, #0056b3);
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 60px;
          height: 60px;
          background: linear-gradient(45deg, #28a745, #1e7e34);
          top: 20%;
          right: 15%;
          animation-delay: 2s;
        }

        .shape-3 {
          width: 100px;
          height: 100px;
          background: linear-gradient(45deg, #dc3545, #c82333);
          bottom: 10%;
          left: 20%;
          animation-delay: 4s;
        }

        .main-title {
          font-size: 3.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
          position: relative;
        }

        .title-accent {
          color: #e74c3c;
          -webkit-text-fill-color: #e74c3c;
        }

        .title-underline {
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, #e74c3c, #3498db);
          margin: 0 auto 2rem;
          border-radius: 2px;
          animation: expandLine 1s ease-out 0.5s both;
        }

        .subtitle {
          font-size: 1.2rem;
          color: #6c757d;
          font-weight: 400;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Modern Filter Pills */
        .modern-filter {
          margin: 3rem 0;
        }

        .filter-pills {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .filter-pills li {
          animation: slideInUp 0.6s ease-out both;
        }

        .modern-pill {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.5rem;
          background: white;
          border: 2px solid #e9ecef;
          border-radius: 50px;
          font-weight: 600;
          color: #495057;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .modern-pill::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s;
        }

        .modern-pill:hover::before {
          left: 100%;
        }

        .modern-pill:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          border-color: #007bff;
        }

        .modern-pill.active {
          background: linear-gradient(135deg, #007bff, #0056b3);
          color: white;
          border-color: #007bff;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 123, 255, 0.3);
        }

        .filter-icon {
          font-size: 1.2rem;
        }

        .filter-text {
          font-size: 0.95rem;
          white-space: nowrap;
        }

        /* Enhanced Cards */
        .modern-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          position: relative;
          height: 100%;
          animation: slideInUp 0.6s ease-out both;
        }

        .modern-card.card-animate {
          animation: cardEntrance 0.8s ease-out both;
        }

        .modern-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .course-inner {
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .image-container {
          position: relative;
          overflow: hidden;
          border-radius: 20px 20px 0 0;
        }

        .course-image {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .modern-card:hover .course-image {
          transform: scale(1.1);
        }

        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.8), rgba(0, 86, 179, 0.9));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .modern-card:hover .image-overlay {
          opacity: 1;
        }

        .overlay-content {
          text-align: center;
          color: white;
          transform: translateY(20px);
          transition: transform 0.3s ease;
        }

        .modern-card:hover .overlay-content {
          transform: translateY(0);
        }

        .explore-text {
          font-size: 1.1rem;
          font-weight: 600;
          display: block;
          margin-bottom: 0.5rem;
        }

        .arrow-icon {
          font-size: 2rem;
          animation: bounce 1s infinite;
        }

        .course-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          backdrop-filter: blur(10px);
        }

        .course-content {
          padding: 1.5rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .course-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 1rem;
          line-height: 1.3;
          min-height: 3.2rem;
        }

        .programs-info {
          flex-grow: 1;
          margin-bottom: 1rem;
        }

        .programs-text {
          color: #6c757d;
          font-size: 0.95rem;
          line-height: 1.5;
          margin: 0;
        }

        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 1rem;
          border-top: 1px solid #f8f9fa;
        }

        .learn-more {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #007bff;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .modern-card:hover .learn-more {
          color: #0056b3;
          transform: translateX(5px);
        }

        .card-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 20px;
          opacity: 0;
          background: linear-gradient(135deg, rgba(0, 123, 255, 0.1), rgba(0, 86, 179, 0.1));
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .modern-card:hover .card-glow {
          opacity: 1;
        }

        /* Keyframe Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cardEntrance {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes expandLine {
          from {
            width: 0;
          }
          to {
            width: 100px;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        /* Enhanced Focus Styles for Accessibility */
        .modern-pill:focus {
          outline: 3px solid #0066cc;
          outline-offset: 2px;
          box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.2);
        }

        .modern-card:focus-within {
          outline: 3px solid #0066cc;
          outline-offset: 2px;
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15), 0 0 0 3px rgba(0, 102, 204, 0.2);
        }

        /* High Contrast Mode Support */
        @media (prefers-contrast: high) {
          .modern-card {
            border: 2px solid currentColor;
          }
          
          .modern-pill {
            border: 3px solid currentColor;
          }

          .modern-pill.active {
            background: currentColor;
          }
        }

        /* Reduced Motion Support */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
          
          .modern-card:hover {
            transform: none;
          }
          
          .course-image {
            transition: none;
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .main-title {
            font-size: 2.5rem;
          }
          
          .filter-pills {
            gap: 0.5rem;
          }
          
          .modern-pill {
            padding: 0.6rem 1rem;
            font-size: 0.85rem;
          }
          
          .filter-text {
            display: none;
          }
          
          .course-title {
            font-size: 1.1rem;
            min-height: auto;
          }
          
          .floating-shapes {
            display: none;
          }
        }

        @media (max-width: 576px) {
          .main-title {
            font-size: 2rem;
          }
          
          .section-header-wrapper {
            padding: 2rem 0 1rem;
          }
        }

        /* Print Styles */
        @media print {
          .modern-card {
            break-inside: avoid;
            box-shadow: none;
            border: 1px solid #000;
          }
          
          .floating-shapes,
          .card-glow,
          .image-overlay {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

export default Faculties;
//  dynamic(()=> Promise.resolve(Faculties),{ssr:false});