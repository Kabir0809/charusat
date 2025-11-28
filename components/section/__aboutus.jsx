"use client";
import { useState, useRef } from "react";
import Image from "next/image";

const subtitle = "|| अमृतं तु विद्या ||";
const heading = "About CHARUSAT";

const aboutText = `CHARUSAT (Charotar University of Science and Technology) is a premier private university located in Changa, Gujarat, India. Established in 2009, the university has rapidly emerged as a center of excellence in higher education, research, and innovation.

With a sprawling green campus spanning over 200 acres, CHARUSAT offers a holistic learning environment that nurtures intellectual growth, creativity, and character development. The university comprises multiple constituent institutes offering undergraduate, postgraduate, and doctoral programs across diverse disciplines including Engineering, Pharmacy, Management, Computer Applications, and more.

Our mission is to provide quality education that transforms students into responsible global citizens equipped with knowledge, skills, and values to contribute meaningfully to society.`;

const achievements = [
  {
    year: "2024",
    title: "NAAC A+ Accreditation",
    description: "Achieved highest grade accreditation from National Assessment and Accreditation Council",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="achievement-icon">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
      </svg>
    ),
  },
  {
    year: "2023",
    title: "NIRF Top 200",
    description: "Ranked among Top 200 Universities in India by National Institutional Ranking Framework",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="achievement-icon">
        <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z"/>
      </svg>
    ),
  },
  {
    year: "2023",
    title: "GSIRF Top 3",
    description: "Ranked among Top 3 Universities in Gujarat by Gujarat State Institutional Rankings Framework",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="achievement-icon">
        <path d="M19 5H5C3.9 5 3 5.9 3 7V17C3 18.1 3.9 19 5 19H19C20.1 19 21 18.1 21 17V7C21 5.9 20.1 5 19 5ZM12 17L6 13V11L12 15L18 11V13L12 17ZM12 13L6 9V7L12 11L18 7V9L12 13Z"/>
      </svg>
    ),
  },
  {
    year: "2022",
    title: "UN Academic Impact",
    description: "Became proud member of United Nations Academic Impact initiative",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="achievement-icon">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.44 4 16.08 4 12C4 11.38 4.08 10.79 4.21 10.21L9 15V16C9 17.1 9.9 18 11 18V19.93ZM17.9 17.39C17.64 16.58 16.9 16 16 16H15V13C15 12.45 14.55 12 14 12H8V10H10C10.55 10 11 9.55 11 9V7H13C14.1 7 15 6.1 15 5V4.59C17.93 5.78 20 8.65 20 12C20 14.08 19.2 15.97 17.9 17.39Z"/>
      </svg>
    ),
  },
  {
    year: "2022",
    title: "SCIMAGO Q2 Rank",
    description: "Achieved Q2 Innovation Rank in 110th IND SCIMAGO Institutions Rankings",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="achievement-icon">
        <path d="M7 2V13H10V22L17 10H13L17 2H7Z"/>
      </svg>
    ),
  },
  {
    year: "2021",
    title: "Center of Excellence",
    description: "Certified as Center of Excellence by Government of Gujarat",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="achievement-icon">
        <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z"/>
      </svg>
    ),
  },
  {
    year: "2020",
    title: "NBA Accreditation",
    description: "Multiple programs accredited by National Board of Accreditation",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="achievement-icon">
        <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z"/>
      </svg>
    ),
  },
  {
    year: "2019",
    title: "Research Excellence",
    description: "Recognized for outstanding research contributions and publications",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="achievement-icon">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    ),
  },
  {
    year: "2015",
    title: "UGC Recognition",
    description: "Granted 12(B) and 2(f) status by University Grants Commission",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="achievement-icon">
        <path d="M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18ZM12 3L1 9L12 15L21 10.09V17H23V9L12 3Z"/>
      </svg>
    ),
  },
  {
    year: "2009",
    title: "University Established",
    description: "CHARUSAT founded with a vision to provide world-class education",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="achievement-icon">
        <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 16L12 18.72L7 16V12.27L12 15L17 12.27V16Z"/>
      </svg>
    ),
  },
];

const AboutUs = () => {
  const [isPaused, setIsPaused] = useState(false);
  const marqueeRef = useRef(null);

  return (
    <>
      <section 
        className="aboutus-section"
        role="region" 
        aria-labelledby="aboutus-heading"
      >
        <div className="section-overlay" />
        <div className="section-content">
          {/* Hero Header */}
          <div className="container">
            <div className="text-center hero-header">
              <p 
                className="hero-subtitle"
                aria-label="Sanskrit motto meaning Knowledge is nectar"
              >
                {subtitle}
              </p>
              <h1 id="aboutus-heading" className="hero-heading">
                {heading}
              </h1>
            </div>

            {/* About Content Row */}
            <div className="row align-items-center content-row">
              {/* Left Side - Text Content */}
              <div className="col-lg-6 col-12">
                <div className="about-text-content">
                  
                  <div className="content-text">
                    {aboutText.split('\n\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="stats-row">
                    <div className="stat-item">
                      <span className="stat-number">200+</span>
                      <span className="stat-label">Acres Campus</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">15+</span>
                      <span className="stat-label">Institutes</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">10000+</span>
                      <span className="stat-label">Students</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="col-lg-6 col-12">
                <div className="about-image-wrapper">
                  <div className="image-frame">
                    <Image
                      src="/assets/images/about/charusatglobe.jpg"
                      alt="CHARUSAT University campus showcasing modern architecture and green environment"
                      width={600}
                      height={450}
                      className="about-image"
                      priority
                    />
                  </div>
                  <div className="image-accent" />
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Marquee - Inside same section */}
          <div className="achievements-wrapper">
            <div className="container">
              <div className="achievements-header text-center">
                <h2 id="achievements-heading" className="achievements-title">
                  Our Journey of Excellence
                </h2>
                <p className="achievements-subtitle">
                  Milestones that define our commitment to quality education
                </p>
              </div>
            </div>

            <div 
              className="marquee-container"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              role="region"
              aria-label="Achievement timeline carousel - hover to pause"
            >
              <div 
                ref={marqueeRef}
                className={`marquee-track ${isPaused ? 'paused' : ''}`}
              >
                {/* Double the items for seamless loop */}
                {[...achievements, ...achievements].map((achievement, index) => (
                  <div 
                    key={index} 
                    className="flip-card"
                    role="article"
                    aria-label={`${achievement.year}: ${achievement.title}`}
                  >
                    <div className="flip-card-inner">
                      {/* Front Side - Icon and Year */}
                      <div className="flip-card-front">
                        <div className="card-icon">{achievement.icon}</div>
                        <div className="card-year">{achievement.year}</div>
                        <p className="flip-hint">Hover to reveal</p>
                      </div>
                      
                      {/* Back Side - Title and Description */}
                      <div className="flip-card-back">
                        <div className="card-year">{achievement.year}</div>
                        <h3 className="card-title">{achievement.title}</h3>
                        <p className="card-description">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Main Section Styles - Single unified section */
        .aboutus-section {
          position: relative;
          background-image: url('/assets/images/about/c1.jpeg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }

        .section-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.85) 0%,
            rgba(0, 0, 0, 0.80) 30%,
            rgba(0, 0, 0, 0.82) 60%,
            rgba(0, 0, 0, 0.88) 100%
          );
          z-index: 1;
        }

        .section-content {
          position: relative;
          z-index: 2;
          padding: 100px 0 80px;
        }

        /* Hero Header */
        .hero-header {
          margin-bottom: 60px;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: #f16126;
          margin-bottom: 15px;
          font-weight: 500;
          letter-spacing: 2px;
        }

        .hero-heading {
          font-size: 3.5rem;
          font-weight: 700;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 3px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .content-row {
          gap: 40px 0;
        }

        /* Text Content Styles */
        .about-text-content {
          padding-right: 30px;
        }

        .content-title {
          font-size: 2rem;
          color: #f16126;
          margin-bottom: 25px;
          font-weight: 600;
        }

        .content-text p {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 20px;
          text-align: justify;
        }

        .stats-row {
          display: flex;
          gap: 40px;
          align-items: center; 
          justify-content: center;
          margin-top: 40px;
          flex-wrap: wrap;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: 700;
          color: #f16126;
        }

        .stat-label {
          display: block;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Image Styles */
        .about-image-wrapper {
          position: relative;
          padding: 20px;
        }

        .image-frame {
          position: relative;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .about-image {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s ease;
        }

        .image-frame:hover .about-image {
          transform: scale(1.05);
        }

        .image-accent {
          position: absolute;
          top: 0px;
          right: 0px;
          width: 100%;
          height: 100%;
          border: 3px solid #f16126;
          border-radius: 15px;
          z-index: -1;
        }

        /* Achievements Wrapper - Inside same section */
        .achievements-wrapper {
          margin-top: 100px;
        }

        .achievements-header {
          margin-bottom: 50px;
        }

        .achievements-title {
          font-size: 2.5rem;
          color: #ffffff;
          font-weight: 700;
          margin-bottom: 15px;
        }

        .achievements-subtitle {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.6);
        }

        /* Marquee Styles */
        .marquee-container {
          overflow: hidden;
          padding: 20px 0;
          cursor: pointer;
        }

        .marquee-track {
          display: flex;
          gap: 30px;
          animation: marquee 40s linear infinite;
          width: max-content;
        }

        .marquee-track.paused {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Flip Card Styles */
        .flip-card {
          flex-shrink: 0;
          width: 280px;
          height: 320px;
          perspective: 1000px;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s ease;
          transform-style: preserve-3d;
        }

        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 30px 25px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        /* Front Side Styles */
        .flip-card-front {
          background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%);
          border: 2px solid rgba(241, 97, 38, 0.3);
        }

        .flip-card-front .card-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #f16126 0%, #ff8c42 100%);
          border-radius: 50%;
          margin-bottom: 20px;
          box-shadow: 0 8px 20px rgba(241, 97, 38, 0.4);
        }

        .flip-card-front .card-icon :global(.achievement-icon) {
          width: 40px;
          height: 40px;
          color: #ffffff;
        }

        .flip-card-front .card-year {
          display: inline-block;
          background: linear-gradient(135deg, #1a1a2e 0%, #2d2d44 100%);
          color: white;
          padding: 8px 30px;
          border-radius: 25px;
          font-size: 1.2rem;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .flip-hint {
          margin-top: 20px;
          font-size: 0.85rem;
          color: rgba(0, 0, 0, 0.4);
          font-style: italic;
        }

        /* Back Side Styles */
        .flip-card-back {
          background: linear-gradient(135deg, #f16126 0%, #ff8c42 100%);
          transform: rotateY(180deg);
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .flip-card-back .card-year {
          display: inline-block;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 5px 20px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 15px;
          backdrop-filter: blur(5px);
        }

        .flip-card-back .card-title {
          font-size: 1.3rem;
          color: #ffffff;
          font-weight: 700;
          margin-bottom: 15px;
          line-height: 1.3;
        }

        .flip-card-back .card-description {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          margin: 0;
        }

        /* Responsive Styles */
        @media (max-width: 1200px) {
          .hero-heading {
            font-size: 3rem;
          }
        }

        @media (max-width: 992px) {
          .aboutus-section {
            background-attachment: scroll;
          }

          .hero-heading {
            font-size: 2.5rem;
          }

          .about-text-content {
            padding-right: 0;
            margin-bottom: 40px;
          }

          .content-row {
            flex-direction: column-reverse;
          }

          .stats-row {
            justify-content: center;
          }

          .achievements-wrapper {
            margin-top: 80px;
          }

          .flip-card {
            width: 260px;
            height: 300px;
          }
        }

        @media (max-width: 768px) {
          .section-content {
            padding: 80px 0 60px;
          }

          .hero-subtitle {
            font-size: 1.2rem;
          }

          .hero-heading {
            font-size: 2rem;
            letter-spacing: 1px;
          }

          .content-title {
            font-size: 1.5rem;
          }

          .content-text p {
            font-size: 1rem;
          }

          .achievements-title {
            font-size: 2rem;
          }

          .flip-card {
            width: 240px;
            height: 280px;
          }

          .flip-card-front .card-icon {
            width: 70px;
            height: 70px;
          }

          .flip-card-front .card-icon :global(.achievement-icon) {
            width: 35px;
            height: 35px;
          }

          .flip-card-back .card-title {
            font-size: 1.1rem;
          }

          .flip-card-back .card-description {
            font-size: 0.9rem;
          }

          .stats-row {
            gap: 25px;
          }

          .stat-number {
            font-size: 2rem;
          }

          .achievements-wrapper {
            margin-top: 60px;
            padding-top: 40px;
          }
        }

        @media (max-width: 480px) {
          .hero-heading {
            font-size: 1.75rem;
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .stats-row {
            flex-direction: column;
            gap: 20px;
          }

          .flip-card {
            width: 220px;
            height: 260px;
          }

          .flip-card-front .card-icon {
            width: 60px;
            height: 60px;
            margin-bottom: 15px;
          }

          .flip-card-front .card-icon :global(.achievement-icon) {
            width: 30px;
            height: 30px;
          }

          .flip-card-front .card-year {
            font-size: 1rem;
            padding: 6px 20px;
          }

          .flip-hint {
            font-size: 0.75rem;
            margin-top: 15px;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
          }

          .flip-card {
            scroll-snap-align: center;
          }

          .flip-card-inner {
            transition: none;
          }

          .flip-card:hover .flip-card-inner {
            transform: none;
          }

          .flip-card-back {
            transform: none;
            position: relative;
            margin-top: 10px;
          }

          .about-image {
            transition: none;
          }
        }

        /* High contrast mode */
        @media (prefers-contrast: high) {
          .section-overlay {
            background: rgba(0, 0, 0, 0.95);
          }

          .flip-card-front,
          .flip-card-back {
            border: 2px solid #000;
          }

          .content-text p {
            color: #fff;
          }
        }

        /* Print styles */
        @media print {
          .aboutus-section {
            background: none;
          }

          .section-overlay {
            display: none;
          }

          .section-content {
            padding: 20px 0;
          }

          .hero-heading,
          .content-title,
          .achievements-title {
            color: #000;
          }

          .content-text p,
          .achievements-subtitle {
            color: #333;
          }

          .marquee-track {
            animation: none;
            flex-wrap: wrap;
            justify-content: center;
          }

          .flip-card-inner {
            transform: none;
          }

          .flip-card-back {
            transform: none;
            position: relative;
          }
        }
      `}</style>
    </>
  );
};

export default AboutUs;