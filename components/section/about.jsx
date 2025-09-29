"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import Iframe from "react-iframe";
import Image from "next/image";
import img4 from "@/public/assets/images/about/04.png";
import img3 from "@/public/assets/images/about/icon/03.jpg";
import img2 from "@/public/assets/images/about/icon/02.jpg";
import img1 from "@/public/assets/images/about/icon/01.jpg";

const subTitle = "About CHARUSAT ";
const title = "|| अमृतं तु विद्या ||";

const aboutList = [
  {
    imgUrl: img2,
    imgAlt: "NAAC A+ Accreditation badge representing university quality standards",
    title: "Skilled Instructors",
    desc: "NAAC A+ Accredited University",
  },
  {
    imgUrl: img1,
    imgAlt: "NIRF ranking symbol showing top 200 university achievement",
    title: "Skilled Instructors",
    desc: "Ranked among Top 200 University by NIRF",
  },
  {
    imgUrl: img2,
    imgAlt: "GSIRF Gujarat ranking icon showing top 3 university status",
    title: "Get Certificate",
    desc: "Ranked among Top 3 Universities in Gujarat by GSIRF",
  },
  {
    imgUrl: img3,
    imgAlt: "United Nations Academic Impact membership emblem",
    title: "Online Classes",
    desc: "Member of United Nations of Academic Impact",
  },
  {
    imgUrl: img2,
    imgAlt: "SCIMAGO Q2 innovation ranking achievement badge",
    title: "Get Certificate",
    desc: "Achieved Q2 Innovation Rank in 110th IND SCIMAGO Institutions Rankings",
  },
  {
    imgUrl: img3,
    imgAlt: "Government of Gujarat Center of Excellence certification seal",
    title: "Online Classes",
    desc: "Certified as Center of Excellence by Government of Gujarat",
  },
];

const About = () => {
  const [showVideo, setShowVideo] = useState(false);
  useEffect(() => {
    AOS.init();
    setShowVideo(true); // Automatically load the video after page load
  }, []);
  return (
    <>
      <div className="about-section" role="region" aria-labelledby="about-heading">
        <br />
        <br />
        <div className="container">
          <p
            className="text-center subtitle"
            style={{ fontSize: "1rem", color: "#f16126" }}
            role="text"
            aria-label="Sanskrit motto meaning Knowledge is nectar"
          >
            {title}
          </p>
          <h2 className="title text-center" id="about-heading">
            {subTitle}&nbsp; {"   "}
          </h2>

          <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-end flex-row-reverse">
            <div className="col">
              <div className="about-right">
                <div className="section-header">
                  {/* Hidden heading for screen readers */}
                  <h3 className="sr-only">University Achievements and Rankings</h3>
                </div>
                <div className="section-wrapper">
                  <ul className="lab-ul" role="list" aria-label="CHARUSAT University achievements">
                    {aboutList.map((val, i) => (
                      <li key={i} role="listitem">
                        <div className="sr-left">
                          <Image
                            src={val.imgUrl}
                            alt={val.imgAlt}
                            width={55}
                            height={100}
                            role="img"
                          />
                        </div>
                        <div className="sr-right">
                          <h5 role="heading" aria-level="4">{val.desc}</h5>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="about-left">
                <div
                  className="about-thumb"
                  data-aos-anchor-placement="top-bottom"
                  role="img"
                  aria-label="CHARUSAT University Convocation Ceremony image showing graduates in traditional attire"
                >
                  <Image
                    src={img4}
                    alt="CHARUSAT University Convocation Ceremony image showing graduates in traditional attire"
                    height={650}
                    width={650} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
      <br />
      <br />
      <br />
      <div className="course-section" role="region" aria-labelledby="glance-heading">
        <div className="container">
          <div className="section-header text-center">
            <span className="subtitle" aria-hidden="true">&nbsp;</span>
            <h2 className="title" id="glance-heading">CHARUSAT At Glance</h2>
          </div>
          <div className="section-wrapper">
            <div className="row g-4 justify-content-center row-cols-lg-2 row-cols-1">
              {/* First Video */}
              <div className="col">
                <div className="video-wrapper" role="region" aria-label="CHARUSAT Campus Tour Video">
                  {showVideo && (
                    <Iframe
                      className="responsive-iframe"
                      src="https://www.youtube.com/embed/MBym3IPnPlE"
                      title="CHARUSAT Campus Tour - Virtual walkthrough showing university facilities, classrooms, labs, and student life"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullscreen
                      role="application"
                      aria-label="YouTube video player for CHARUSAT campus tour"
                      tabIndex="0"
                    />
                  )}
                </div>
              </div>

              {/* Second Video */}
              <div className="col">
                <div className="video-wrapper" role="region" aria-label="CHARUSAT University Overview Video">
                  {showVideo && (
                    <Iframe
                      className="responsive-iframe"
                      src="https://www.youtube-nocookie.com/embed/SCEzFwyYNwc"
                      title="CHARUSAT Overview - University introduction showcasing academic programs, research, and achievements"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullscreen
                      role="application"
                      aria-label="YouTube video player for CHARUSAT university overview"
                      tabIndex="0"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          /* Screen reader only content - hidden visually but available to assistive technology */
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

          .video-wrapper {
            position: relative;
            padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
            height: 0;
            overflow: hidden;
            border-radius: 8px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }

          .video-wrapper :global(.responsive-iframe) {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 0;
          }

          /* Enhanced focus styles for keyboard navigation */
          .video-wrapper :global(.responsive-iframe:focus) {
            outline: 3px solid #0066cc !important;
            outline-offset: 2px !important;
            box-shadow: 0 0 0 3px rgba(0, 102, 204, 0.3) !important;
          }

          /* High contrast mode support */
          @media (prefers-contrast: high) {
            .video-wrapper {
              border: 2px solid currentColor !important;
            }
            
            .video-wrapper :global(.responsive-iframe:focus) {
              outline: 4px solid currentColor !important;
              outline-offset: 2px !important;
            }
          }

          /* Reduced motion support for users with vestibular disorders */
          @media (prefers-reduced-motion: reduce) {
            .video-wrapper :global(.responsive-iframe) {
              animation: none !important;
              transition: none !important;
            }
          }

          @media (max-width: 768px) {
            .video-wrapper {
              margin-bottom: 1rem;
            }
            
            /* Smaller focus outline on mobile */
            .video-wrapper :global(.responsive-iframe:focus) {
              outline-width: 2px !important;
            }
          }

          /* Print accessibility - show video titles when printed */
          @media print {
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
    </>
  );
};

export default About;