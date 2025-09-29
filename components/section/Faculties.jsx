"use client";
import Link from "next/link";
import { useState } from "react";

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
  const filterItem = (categItem) => {
    const updateItems = CourseData.filter((curElem) => {
      return curElem.programs === categItem;
    });
    setItems(updateItems);
  };

  const imageStyle = {
    height: "200px",
    objectFit: "cover",
    width: "100%",
  };

  return (
    <div className="course-section style-3 py-4" role="region" aria-labelledby="faculties-heading">
      <div className="container">
        <h2 id="faculties-heading" className="title text-center">{title}</h2>
        <div className="section-header">
          <div className="course-filter-group" role="group" aria-label="Faculty filter options">
            <ul className="lab-ul demo1" aria-label="Filter faculties by program type">
              <li>
                <button 
                  className="filter-btn"
                  onClick={() => setItems(CourseData)}
                  aria-label="Show all faculties"
                  onKeyDown={(e) => e.key === 'Enter' && setItems(CourseData)}
                >
                  All
                </button>
              </li>
              <li>
                <button 
                  className="filter-btn"
                  onClick={() => filterItem("Engineering")}
                  aria-label="Filter to show Engineering faculties"
                  onKeyDown={(e) => e.key === 'Enter' && filterItem("Engineering")}
                >
                  Engineering
                </button>
              </li>
              <li>
                <button 
                  className="filter-btn"
                  onClick={() => filterItem("Pharmacy")}
                  aria-label="Filter to show Pharmacy faculties"
                  onKeyDown={(e) => e.key === 'Enter' && filterItem("Pharmacy")}
                >
                  Pharmacy
                </button>
              </li>
              <li>
                <button 
                  className="filter-btn"
                  onClick={() => filterItem("Computer Science and Application")}
                  aria-label="Filter to show Computer Science and Application faculties"
                  onKeyDown={(e) => e.key === 'Enter' && filterItem("Computer Science and Application")}
                >
                  Computer Science and Application
                </button>
              </li>
              <li>
                <button 
                  className="filter-btn"
                  onClick={() => filterItem("Management Studies")}
                  aria-label="Filter to show Management Studies faculties"
                  onKeyDown={(e) => e.key === 'Enter' && filterItem("Management Studies")}
                >
                  Management Studies
                </button>
              </li>
              <li>
                <button 
                  className="filter-btn"
                  onClick={() => filterItem("Sciences")}
                  aria-label="Filter to show Sciences faculties"
                  onKeyDown={(e) => e.key === 'Enter' && filterItem("Sciences")}
                >
                  Sciences
                </button>
              </li>
              <li>
                <button 
                  className="filter-btn"
                  onClick={() => filterItem("Medical Sciences")}
                  aria-label="Filter to show Medical Sciences faculties"
                  onKeyDown={(e) => e.key === 'Enter' && filterItem("Medical Sciences")}
                >
                  Medical Sciences
                </button>
              </li>
              <li>
                <button 
                  className="filter-btn"
                  onClick={() => filterItem("Humanities")}
                  aria-label="Filter to show Humanities faculties"
                  onKeyDown={(e) => e.key === 'Enter' && filterItem("Humanities")}
                >
                  Humanities
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="section-wrapper">
          <div className="row g-3 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter" aria-label="List of university faculties and institutes">
            {items.map((elem) => {
              const {
                id,
                imgUrl,
                imgAlt,
                cate,
                programs,
                title,
                link,
                author,
                authorName,
                price,
              } = elem;
              return (
                <Link key={id} href={elem.link} target="_blank" aria-label={`Visit ${cate} website - Programs: ${title} - Opens in new tab`}>
                  <div className="col">
                    <article 
                      className="course-item style-4"
                      aria-labelledby={`faculty-${id}-title`}
                    >
                      <div className="course-inner" style={{ height: "300px" }}>
                        <div className="course-thumb">
                          <Image src={imgUrl} alt={imgAlt} style={imageStyle} />
                          <div
                            className="course-category"
                            style={{
                              backgroundColor: "transparent",
                              fontWeight: "bold",
                            }}
                          >
                            <div
                              className="course-cate"
                              style={{
                                height: "68px",
                              }}
                            >
                              <span
                                id={`faculty-${id}-title`}
                                style={{
                                  color: "white",
                                  fontWeight: "800",
                                }}
                              >
                                {cate}
                              </span>
                              <p
                                style={{
                                  fontSize: "0.8rem",
                                }}
                                aria-hidden="true"
                              ></p>
                            </div>
                          </div>
                        </div>
                        <div className="course-content">
                          <p
                            className="small"
                            style={{ textDecoration: "none" }}
                            aria-describedby={`faculty-${id}-title`}
                          >
                            {title}
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Generalized filter button styling */
        .filter-btn {
          width: 100%;
          height: 100%;
          background: none;
          border: none;
          padding: 0;
          margin: 0;
          cursor: pointer;
          color: inherit;
          text-align: inherit;
          display: block;
          font-size: 16px !important;
          line-height: inherit;
          font-weight: 500 !important;
          font-family: inherit;
          text-decoration: none;
          text-transform: none !important;
          transition: all 0.3s ease;
        }

        .filter-btn:hover {
          background-color: rgba(0, 0, 0, 0.05);
        }

        /* Enhanced focus styles for keyboard navigation */
        .filter-btn:focus {
          outline: 3px solid #0066cc;
          outline-offset: 2px;
          background-color: rgba(0, 102, 204, 0.1);
        }

        .course-item:focus-within {
          outline: 3px solid #0066cc;
          outline-offset: 2px;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        /* Remove focus outline for mouse users */
        .filter-btn:focus:not(:focus-visible) {
          outline: none;
          background-color: transparent;
        }

        .course-item:focus-within:not(:focus-visible) {
          outline: none;
        }

        /* Ensure card text stays visible on hover */
        .course-category span {
          color: white !important;
          z-index: 10;
          position: relative;
        }

        .course-item:hover .course-category span {
          color: white !important;
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

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .course-item {
            border: 2px solid currentColor;
          }

          .filter-btn:focus {
            outline: 4px solid currentColor;
          }

          .course-item:focus-within {
            outline: 4px solid currentColor;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .course-item {
            transition: none;
          }

          .course-item:focus-within {
            transform: none;
          }

          .filter-btn {
            transition: none;
          }
        }

        /* Windows high contrast mode */
        @media (-ms-high-contrast: active) {
          .course-item {
            border: 2px solid;
          }

          .filter-btn:focus {
            outline: 3px solid;
          }
        }

        @media (max-width: 768px) {
          /* Smaller focus outline on mobile */
          .filter-btn:focus {
            outline-width: 2px;
          }

          .course-item:focus-within {
            outline-width: 2px;
          }
        }

        /* Print accessibility */
        @media print {
          .course-item {
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
    </div>
  );
}

export default Faculties;
//  dynamic(()=> Promise.resolve(Faculties),{ssr:false});