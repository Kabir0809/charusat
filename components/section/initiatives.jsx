"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

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

const subTitle = "Why are we unique?";
const title = "Initiatives";

const eventSliderList = [
  {
    imgUrl: csrtc,
    imgAlt: "CHARUSAT Space Research and Technology Center",
    title: "CHARUSAT Space Research and Technology Center",
    url: "/csrtc",
    id: 1,
  },
  {
    imgUrl: kradle,
    imgAlt: "KRADLE - Dr. K. C. Patel Research & Development Center",
    title: "Dr. K. C. Patel Research & Development Center",
    url: "https://kradle.charusat.ac.in/",
    id: 2,
  },
  {
    imgUrl: credp,
    imgAlt: "CREDP - CHARUSAT Rural Education Development Program",
    title: "CHARUSAT Rural Education Development Program",
    url: "/CREDP",
    id: 3,
  },
  {
    imgUrl: icc,
    imgAlt: "International Cosmology Center",
    title: "International Cosmology Center (ICC)",
    url: "#",
    id: 4,
  },
  {
    imgUrl: sdg,
    imgAlt: "SDG Handprint Action Lab",
    title: "SDG Handprint Action Lab",
    url: "#",
    id: 5,
  },
  {
    imgUrl: hrdc,
    imgAlt: "Pri. B. I. Patel Human Resource Development Center",
    title: "Pri. B. I. Patel Human Resource Development Center",
    url: "/hrdc",
    id: 6,
  },
  {
    imgUrl: edic,
    imgAlt: "Charusat Startup and Innovation Centre (CSIC)",
    title: "Charusat Startup and Innovation Centre (CSIC)",
    url: "/csic",
    id: 7,
  },
  {
    imgUrl: uiic,
    imgAlt: "University Industry Interaction Cell (UIIC)",
    title: "University Industry Interaction Cell (UIIC)",
    url: "/university-industry-interaction-cell",
    id: 8,
  },
  {
    imgUrl: nabl,
    imgAlt: "NABL & Testing Facilities",
    title: "NABL & Testing Facilities",
    url: "#",
    id: 9,
  },
  {
    imgUrl: CIVF,
    imgAlt: "Charusat Innovative Ventures Foundation",
    title: "Charusat Innovative Ventures Foundation",
    url: "https://civf.co.in/",
    id: 10,
  },
];

// Common visual theme for initiatives
const initiativeConfig = {
  bgGradient: "linear-gradient(135deg, #007bff 0%, #0056b3 100%)",
  borderColor: "#007bff",
  icon: "🚀",
};

export default function Initiatives() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    
    <section
      className="py-5"
      style={{  minHeight: "100vh" }}
      role="region"
      aria-labelledby="initiatives-heading"
      >
      <div className="text-center mb-5">
        <p className="lead text-muted">{subTitle}</p>
        <h2 id="initiatives-heading" className="display-4 fw-bold text-dark">
          {title}
        </h2>
      </div>
      <div className="container">
        <div className="row g-4 justify-content-center">
          {eventSliderList.map((item, index) => (
            <div
              key={item.id}
              className="col-xl-3 col-lg-4 col-md-6 col-sm-12"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.4s ease ${index * 0.05}s`,
              }}
            >
              <Link
                href={item.url}
                target={item.url.startsWith("http") ? "_blank" : undefined}
                rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-decoration-none"
              >
                <article
                  className="card h-100 border-0 shadow-sm position-relative overflow-hidden faculty-card"
                  style={{
                    borderRadius: "24px",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    borderLeft: `5px solid ${initiativeConfig.borderColor}`,
                    background: "rgba(255, 255, 255, 0.25)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    boxShadow:
                      "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                  }}
                >
                  {/* Image */}
                  <div className="position-relative overflow-hidden" style={{ height: "220px" }}>
                    <Image
                      src={item.imgUrl}
                      alt={item.imgAlt}
                      fill
                      style={{
                        // objectFit: "cover",
                        transition: "transform 0.4s ease",
                      }}
                      className="faculty-image"
                    />
                    {/* Overlay */}
                    <div
                      className="position-absolute top-0 start-0 w-100 h-100 faculty-overlay d-flex align-items-center justify-content-center"
                      style={{
                        background: initiativeConfig.bgGradient,
                        opacity: 0,
                        transition: "opacity 0.4s ease",
                      }}
                    >
                      <div className="text-center text-white">
                        {/* <div
                          className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 bg-white bg-opacity-20"
                          style={{ width: "60px", height: "60px" }}
                        >
                          <span role="img" aria-hidden="true" className="fs-3">
                            {initiativeConfig.icon}
                          </span>
                        </div> */}
                        <div className="btn btn-light btn-sm rounded-pill px-4 fw-semibold">
                          Explore More ➡️
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="card-body p-4 text-center">
                    <h5
                      className="card-title fw-bold text-dark mb-2 lh-sm"
                      style={{
                        fontSize: "1.25rem",
                        minHeight: "2.2rem",
                        display: "-webkit-box",
                        WebkitLineClamp: "2",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {item.title}
                    </h5>

                    {/* Gradient Underline */}
                    <div className="d-flex justify-content-center mb-3">
                      <div
                        className="gradient-line"
                        style={{
                          width: "40px",
                          height: "3px",
                          background: initiativeConfig.bgGradient,
                          borderRadius: "2px",
                          transition: "width 0.3s ease",
                        }}
                      />
                    </div>

                    <small className="text-muted fst-italic">
                      Empowering innovation and impact
                    </small>
                  </div>
                </article>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
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
      `}</style>
    </section>
  );
}
