"use client";

import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

export default function Announcement() {
  const marqueeRef = useRef(null);
  return (
    <div className="announcements-wrapper" role="banner" aria-label="University announcements banner">
      <div className="announcement-container">
        <div className="announcement-label" role="img" aria-label="Announcements section with megaphone icon">
          <span className="announcement-icon" aria-hidden="true">📢</span>
          <b>Announcements</b>
        </div>
        <div className="marquee-wrapper" role="region" aria-label="Scrolling announcements" aria-live="polite">
          <marquee
            ref={marqueeRef}
            behavior="scroll"
            direction="left"
            className="marquee-text"
            scrollamount="6"
            onMouseOver={() => marqueeRef.current?.stop()}
            onMouseOut={() => marqueeRef.current?.start()}
            role="marquee"
            aria-label="University announcements ticker - automatically scrolling content that pauses on hover"
          >
            {/* <Link
              href="https://livestatus.charusat.in"
              target="_blank"
              className="text-white"
              // onMouseOver={(e) => e.target.parentElement.stop()}
              // onMouseOut={(e) => e.target.parentElement.start()}
            >
              MQ/NRI Quota Live Admission Status
            </Link>
            &nbsp;&nbsp; ||&nbsp;&nbsp; */}
            <Link
              href="./assets/files/Advertisement-other-event/Hands-on-Cell-Culture-Training-01-06-SEP-2025.pdf"
              target="_blank"
              className="text-white"
              aria-label="National-level hands-on training program on Animal Cell Culture and Cytotoxicity Assay on September 1-6, 2025 - Opens PDF in new tab"
              // onMouseOver={(e) => e.target.parentElement.stop()}
              // onMouseOut={(e) => e.target.parentElement.start()}
            >
             National-level hands-on training program on "Animal Cell Culture and Cytotoxicity Assay" on September 1-6,  2025
            </Link>
              &nbsp;&nbsp; <span aria-hidden="true">||</span>
            <Link
              href="./assets/images/phd/Phd_2025_ad.webp"
              target="_blank"
              className="text-white"
              aria-label="PhD Advertisement August-Intake-2025 - Opens image in new tab"
              // onMouseOver={(e) => e.target.parentElement.stop()}
              // onMouseOut={(e) => e.target.parentElement.start()}
            >
              PhD Advertisement August-Intake-2025
            </Link>
            &nbsp;&nbsp; <span aria-hidden="true">||</span>&nbsp;&nbsp;
            <Link
              href="https://admission.charusat.ac.in/Registration.aspx"
              target="_blank"
              className="text-white"
              aria-label="PhD Admission Apply Now - Opens admission portal in new tab"
            >
              PhD Admission Apply Now
            </Link>
            &nbsp;&nbsp; <span aria-hidden="true">||</span>&nbsp;&nbsp;
            <Link
              href="https://www.charusat.ac.in/cmpica/files/ADVERTISEMENT%20FOR%20FIELD%20INVESTIGATOR%20AND%20RESEARCH%20ASSISTANT.pdf"
              target="_blank"
              className="text-white"
              aria-label="Advertisement for Field Investigator and Research Assistant/Associate positions - Opens PDF in new tab"
              // onMouseOver={(e) => e.target.parentElement.stop()}
              // onMouseOut={(e) => e.target.parentElement.start()}
            >
              ADVERTISEMENT FOR FIELD INVESTIGATOR AND RESEARCH
              ASSISTANT/ASSOCIATE
            </Link>
            {/* &nbsp;&nbsp; ||&nbsp;&nbsp;
            <Link
              href="/assets/files/Advertisement-other-event/Tender_for_providing_Housekeeping_and_Sanitation_services_at_CHARUSAT.pdf"
              target="_blank"
              className="text-white"
              // onMouseOver={(e) => e.target.parentElement.stop()}
              // onMouseOut={(e) => e.target.parentElement.start()}
            >
              Tender for providing housekeeping & sanitation services at
              CHARUSAT
            </Link> */}
            &nbsp;&nbsp; <span aria-hidden="true">||</span>&nbsp;&nbsp;
            <Link
              href="assets/files/Advertisement-other-event/JRF-BDIPS-Advertisement.pdf"
              target="_blank"
              className="text-white"
              aria-label="Advertisement for Junior Research Fellow position under GSBTM funded project - Opens PDF in new tab"
              // onMouseOver={(e) => e.target.parentElement.stop()}
              //onMouseOut={(e) => e.target.parentElement.start()}
            >
              Advertisement for the Post of Junior Research Fellow (JRF) under
              GSBTM funded project
            </Link>
            &nbsp;&nbsp; <span aria-hidden="true">||</span> &nbsp;&nbsp;
            <Link
              href="assets/files/Advertisement-other-event/MPT_FAQ_2025.pdf"
              target="_blank"
              className="text-white"
              aria-label="Frequently Asked Questions for MPT Admission 2025 - Opens PDF in new tab"
              //onMouseOver={(e) => e.target.parentElement.stop()}
              //onMouseOut={(e) => e.target.parentElement.start()}
            >
              FAQ for MPT Admission 2025
            </Link>
            &nbsp;&nbsp; <span aria-hidden="true">||</span> &nbsp;&nbsp;
            <Link
              href="assets/files/Advertisement-other-event/MTIN_admission.pdf"
              target="_blank"
              className="text-white"
              aria-label="M.sc Nursing and PBBN Admission Open for 2025 - Opens PDF in new tab"
              //onMouseOver={(e) => e.target.parentElement.stop()}
              //onMouseOut={(e) => e.target.parentElement.start()}
            >
              M.sc Nursing and PBBN Admission Open for 2025
            </Link>
            &nbsp;&nbsp; <span aria-hidden="true">||</span> &nbsp;&nbsp;
          </marquee>
          
          {/* Screen reader accessible version of announcements */}
          <div className="sr-only" role="region" aria-label="Announcements list for screen readers">
            <h2>University Announcements</h2>
            <ul>
              <li>
                <a href="./assets/files/Advertisement-other-event/Hands-on-Cell-Culture-Training-01-06-SEP-2025.pdf" target="_blank">
                  National-level hands-on training program on Animal Cell Culture and Cytotoxicity Assay on September 1-6, 2025
                </a>
              </li>
              <li>
                <a href="./assets/images/phd/Phd_2025_ad.webp" target="_blank">
                  PhD Advertisement August-Intake-2025
                </a>
              </li>
              <li>
                <a href="https://admission.charusat.ac.in/Registration.aspx" target="_blank">
                  PhD Admission Apply Now
                </a>
              </li>
              <li>
                <a href="https://www.charusat.ac.in/cmpica/files/ADVERTISEMENT%20FOR%20FIELD%20INVESTIGATOR%20AND%20RESEARCH%20ASSISTANT.pdf" target="_blank">
                  Advertisement for Field Investigator and Research Assistant/Associate
                </a>
              </li>
              <li>
                <a href="assets/files/Advertisement-other-event/JRF-BDIPS-Advertisement.pdf" target="_blank">
                  Advertisement for Junior Research Fellow under GSBTM funded project
                </a>
              </li>
              <li>
                <a href="assets/files/Advertisement-other-event/MPT_FAQ_2025.pdf" target="_blank">
                  FAQ for MPT Admission 2025
                </a>
              </li>
              <li>
                <a href="assets/files/Advertisement-other-event/MTIN_admission.pdf" target="_blank">
                  M.sc Nursing and PBBN Admission Open for 2025
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{`
        .announcements-wrapper {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background: rgb(0, 102, 179);
        }
        .announcement-container {
          display: flex;
          align-items: center;
          padding: 5px 0;
        }

        .announcement-label {
          display: flex;
          align-items: center;
          padding: 0 10px;
          color: white;
          font-weight: 500;
          white-space: nowrap;
          border-right: 1px solid rgba(255, 255, 255, 0.2);
        }

        .announcement-icon {
          margin-right: 8px;
          animation: pulse 2s infinite;
        }

        .marquee-wrapper {
          flex: 1;
          overflow: hidden;
        }

        .marquee-text {
          color: white;
          padding: 0 10px;
                  }

        .announcement-link {
          color: white;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .announcement-link:hover {
          color: #ff4d00;
        }

        /* Links in marquee - focus styles */
        .text-white:focus {
          color: #ff4d00 !important;
          outline: 2px solid #ffffff;
          outline-offset: 2px;
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

        .sr-only a {
          color: inherit;
          text-decoration: none;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .announcements-wrapper {
            border-top: 2px solid currentColor;
          }
          
          .text-white:focus {
            outline: 3px solid currentColor !important;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .announcement-icon {
            animation: none;
          }
          
          .marquee-text {
            animation: none;
          }
          
          marquee {
            animation: none !important;
            transform: none !important;
          }
        }

        @media (max-width: 768px) {
          .announcement-label {
            padding: 0 10px;
            font-size: 14px;
          }

          .marquee-text {
            padding: 0 10px;
            font-size: 14px;
          }
          
          .text-white:focus {
            outline-width: 1px;
          }
        }

        /* Print accessibility */
        @media print {
          .announcements-wrapper {
            position: static;
            background: transparent;
            color: black;
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
          
          .marquee-text {
            display: none;
          }
        }
        
      `}</style>
    </div>
  );
}