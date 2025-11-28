"use client";

import React from 'react';
import Image from 'next/image';
import samsung from "@/public/assets/images/recruiters/samsung.png";
import tcs from "@/public/assets/images/recruiters/tcs.png";
import gsfc from "@/public/assets/images/recruiters/gsfc.png";
import Ain from "@/public/assets/images/recruiters/in.png";
import jeavio from "@/public/assets/images/recruiters/jeavio.png";
import evosys from "@/public/assets/images/recruiters/evosys.png";
import mg from "@/public/assets/images/recruiters/mg.png";
import berger from "@/public/assets/images/recruiters/berger.png";
import ops from "@/public/assets/images/recruiters/ops.png";
import jaro from "@/public/assets/images/recruiters/jaro.png";
import crest from "@/public/assets/images/recruiters/crest.png";
import adani from "@/public/assets/images/recruiters/adani.png";
import motorola from "@/public/assets/images/recruiters/motorola.png";
import icici from "@/public/assets/images/recruiters/icici.jpeg";
import tbea from "@/public/assets/images/recruiters/tbea.png";
import tr from "@/public/assets/images/recruiters/tr.png";
import meditab from "@/public/assets/images/recruiters/meditab.png";
import odoo from "@/public/assets/images/recruiters/odoo.png";

const allRecruiters = [
  { imgUrl: samsung, imgAlt: "Samsung" },
  { imgUrl: tcs, imgAlt: "TCS" },
  { imgUrl: adani, imgAlt: "Adani Group" },
  { imgUrl: motorola, imgAlt: "Motorola" },
  { imgUrl: icici, imgAlt: "ICICI Bank" },
  { imgUrl: gsfc, imgAlt: "GSFC" },
  { imgUrl: mg, imgAlt: "MG Motors" },
  { imgUrl: berger, imgAlt: "Berger Paints" },
  { imgUrl: Ain, imgAlt: "Indian Navy" },
  { imgUrl: jaro, imgAlt: "Jaro Education" },
  { imgUrl: evosys, imgAlt: "Evosys" },
  { imgUrl: jeavio, imgAlt: "Jeavio" },
  { imgUrl: tbea, imgAlt: "TBEA" },
  { imgUrl: meditab, imgAlt: "Meditab" },
  { imgUrl: tr, imgAlt: "Thomson Reuters" },
  { imgUrl: odoo, imgAlt: "Odoo" },
  { imgUrl: crest, imgAlt: "Crest Data" },
  { imgUrl: ops, imgAlt: "OPS" },
];

const recruiters1 = allRecruiters.filter((_, i) => i % 2 === 0);
const recruiters2 = allRecruiters.filter((_, i) => i % 2 === 1);


const MarqueeRow = ({ recruiters, direction = "left", speed = 25 }) => {
  const duplicatedList = [...recruiters, ...recruiters];

  return (
    <div className="marquee-row py-3">
      <div
        className={`marquee-track marquee-${direction}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {duplicatedList.map((recruiter, index) => (
          <div key={index} className="recruiter-card">
            <Image
              src={recruiter.imgUrl}
              alt={recruiter.imgAlt}
              width={200}
              height={100}
              className="recruiter-logo"
              draggable="false"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Recruiters = () => {
  return (
    <section className="recruiters-section py-5" role="region" aria-labelledby="recruiters-heading">
      <style jsx global>{`
        

        /* Section Header */
        .section-header .main-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #111827;
          margin-bottom: 0.5rem;
        }

        .section-header .subtitle-text {
          font-size: 1.25rem;
          color: #4b5563;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .title-underline {
          width: 96px;
          height: 4px;
          background: linear-gradient(to right, #2563eb, #9333ea);
          margin: 0.75rem auto 0;
          border-radius: 9999px;
        }

        /* Marquee Styles */
        .marquee-row {
          overflow: hidden;
          position: relative;
        }

        .marquee-track {
          display: flex;
          gap: 2.5rem;
          width: max-content;
        }

        .marquee-left {
          animation: scrollLeft linear infinite;
        }

        .marquee-right {
          animation: scrollRight linear infinite;
          animation-direction: reverse;
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .recruiter-card {
          flex-shrink: 0;
          width: 220px;
          height: 120px;
          background: #ffffff;
          border-radius: 1rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .recruiter-card:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          transform: scale(1.1);
        }

        .recruiter-logo {
          width: 100% !important;
          height: auto !important;
          max-width: 180px !important;
          max-height: 100px !important;
          object-fit: contain !important;
          filter: grayscale(100%);
          opacity: 0.8;
          transition: all 0.3s ease;
        }

        .recruiter-card:hover .recruiter-logo {
          filter: grayscale(0%);
          opacity: 1;
          transform: scale(1.05);
        }

        
        /* Animation */
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

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        /* Responsive */
        @media (max-width: 992px) {
          .recruiter-card {
            width: 180px;
            height: 120px;
            padding: 1rem;
          }

          .recruiter-logo {
            max-width: 150px !important;
            max-height: 80px !important;
          }
        }

        @media (max-width: 768px) {
          .section-header .main-title {
            font-size: 2rem;
          }

          .section-header .subtitle-text {
            font-size: 1rem;
          }

          .recruiter-card {
            width: 160px;
            height: 100px;
            padding: 0.875rem;
          }

          .recruiter-logo {
            max-width: 130px !important;
            max-height: 70px !important;
          }

          .marquee-track {
            gap: 1.5rem;
          }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .marquee-left,
          .marquee-right {
            animation: none;
          }
        }
      `}</style>

      <div className="container px-4">
        {/* Section Header */}
        <div className="section-header text-center mb-4">
          <span className="subtitle">Trusted By</span>
          <h2 id="recruiters-heading" className="title">
            Our Top <span>Recruiters</span>
          </h2>
          <p className="section-description">
            Leading companies trust CHARUSAT for exceptional talent and innovation
          </p>
        </div>

        {/* Marquee Rows */}
        <div className="marquee-wrapper">
          <MarqueeRow recruiters={recruiters1} direction="right" speed={60} />
          <MarqueeRow recruiters={recruiters2} direction="left" speed={60} />
        </div>

      </div>
    </section>
  );
};

export default Recruiters;