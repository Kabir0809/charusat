"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import I1 from "@/public/assets/images/clients/01.jpg";
import I2 from "@/public/assets/images/clients/02.jpg";
import I3 from "@/public/assets/images/clients/03.jpg";
import I4 from "@/public/assets/images/clients/04.webp";
import I5 from "@/public/assets/images/clients/05_.png";

const subTitle = "Testimonials";
const title = "See What They're Saying";
  
const clientSliderList = [
  {
    imgUrl: I1,
    imgAlt: "Dr A P J Abdul Kalam testimonial",
    desc: "I am happy to know that CHARUSAT has a goal set for mission of social uplifment with components of knowledge acquisition and imparting education.",
    name: "Dr A P J Abdul Kalam",
    degi: "Former President of India & Architect of Missile Programme of India",
    badge: "Bharat Ratna",
  },
  {
    imgUrl: I2,
    imgAlt: "Dr Vijay Bhatkar testimonial",
    desc: "I am extremely impressed with CHARUSAT as it is driven by Research and innovation.",
    name: "Dr. Vijay Bhatkar",
    degi: "Padmashri, Architect First Super Computer-PARAM",
    badge: "Padma Shri",
  },
  {
    imgUrl: I3,
    imgAlt: "Dr R A Mashelkar testimonial",
    desc: "I was proud to see that CHARUSAT has the dream of becoming world class in education and research. This dream can be converted into reality with stimulating ambience. I have no doubt that this dream will become a reality.",
    name: "Dr. R A Mashelkar",
    degi: "Padma Vibhushan, National Research Professor, National Chemical Laboratory",
    badge: "Padma Vibhushan",
  },
  {
    imgUrl: I4,
    imgAlt: "Shri Narendra Modi testimonial",
    desc: "CHARUSAT is indeed a Golden Truth of Gujarat.",
    name: "Shri Narendra Modi",
    degi: "Hon. Prime Minister of India",
    badge: "Prime Minister",
  },
  {
    imgUrl: I5,
    imgAlt: "Dr S Jaishankar testimonial",
    desc: "A nation cannot be considered significant without exceptional universities. CHARUSAT students, you are truly fortunate to have the privilege of being students at such an institution, which is part of contemporary education, the type of education that will define a Viksit Bharat.",
    name: "Dr. S. Jaishankar",
    degi: "External Affairs Minister, Government of India",
    badge: "EAM",
  },
];

const accentColor = "#4A90E2";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clientSliderList.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % clientSliderList.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + clientSliderList.length) % clientSliderList.length
    );
    setIsAutoPlay(false);
  };

  const currentTestimonial = clientSliderList[currentIndex];

  return (
    <section
      className="testimonials-section py-5"
      role="region"
      aria-labelledby="testimonials-heading"
      style={{
        background: "linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%)",
        minHeight: "650px",
      }}
    >
      <div className="container py-2">
        {/* Header */}
        <div className="section-header text-center py-1 mb-4">
          <span className="subtitle" aria-label="Section category">{subTitle}</span>
          <h2 id="testimonials-heading" className="title">{title}</h2>
          {/* <h2 className="abs-title">{absTitle}</h2> */}
        </div>
        {/* Main Content */}
        <div className="row justify-content-center align-items-center mb-4 position-relative">
          {/* Desktop Navigation - Previous */}
          <div className="col-auto d-none d-lg-flex align-items-center">
            <button
              onClick={prevSlide}
              className="nav-control-btn"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={28} strokeWidth={2.5} />
            </button>
          </div>

          {/* Testimonial Card */}
          <div className="col-12 col-lg-10 col-xl-9">
            <div className="testimonial-layout">
              {/* Circular Image Container - Floating on Left */}
              <div className="image-container">
                <div
                  className="circular-frame"
                  style={{
                    width: "280px",
                    height: "280px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: `6px solid ${accentColor}`,
                    boxShadow: `0 20px 60px ${accentColor}40, 0 0 0 12px rgba(255,255,255,0.5)`,
                    position: "relative",
                    background: "#fff",
                  }}
                >
                  <Image
                    src={currentTestimonial.imgUrl}
                    alt={currentTestimonial.imgAlt}
                    fill
                    priority
                    sizes="280px"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center top",
                    }}
                  />
                  {/* Subtle overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `linear-gradient(135deg, ${accentColor}10 0%, transparent 60%)`,
                    }}
                  />
                </div>

                
              </div>

              {/* Quote Container - Separate Card */}
              <div
                className="quote-container"
                style={{
                  background: "#ffffff",
                  borderRadius: "24px",
                  padding: "50px 50px 50px 180px",
                  boxShadow:
                    "0 20px 60px rgba(0, 0, 0, 0.08), 0 8px 20px rgba(0, 0, 0, 0.04)",
                  border: "1px solid rgba(0,0,0,0.06)",
                  position: "relative",
                  minHeight: "320px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
              

                {/* Quote Icon - Left Side Before Text */}
                <div
                  className="quote-icon"
                  style={{
                    position: "absolute",
                    top: "45px",
                    left: "180px",
                    opacity: 0.15,
                  }}
                >
                  <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M10 7L8 11H11V17H5V11L7 7H10ZM19 7L17 11H20V17H14V11L16 7H19Z"
                      fill={accentColor}
                    />
                  </svg>
                </div>

                {/* Quote Text */}
                <blockquote
                  className="mb-4"
                  style={{
                    fontSize: "1.2rem",
                    lineHeight: "1.85",
                    color: "#2c3e50",
                    fontWeight: "400",
                    fontStyle: "italic",
                    position: "relative",
                  }}
                >
                  "{currentTestimonial.desc}"
                </blockquote>

                {/* Author Info */}
                <div className="author-info">
                  <div className="d-flex align-items-center">
                    <div
                      style={{
                        width: "4px",
                        height: "50px",
                        background: `linear-gradient(180deg, ${accentColor}, ${accentColor}80)`,
                        borderRadius: "2px",
                        marginRight: "20px",
                      }}
                    />
                    <div>
                      <h4
                        className="mb-1 fw-bold"
                        style={{
                          color: "#0a0a0a",
                          fontSize: "1.5rem",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {currentTestimonial.name}
                      </h4>
                      <p
                        className="mb-0"
                        style={{
                          color: "#6c757d",
                          fontSize: "0.95rem",
                          lineHeight: "1.6",
                          fontWeight: "500",
                        }}
                      >
                        {currentTestimonial.degi}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation - Next */}
          <div className="col-auto d-none d-lg-flex align-items-center">
            <button
              onClick={nextSlide}
              className="nav-control-btn"
              aria-label="Next testimonial"
            >
              <ChevronRight size={28} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="row justify-content-center mt-4">
          <div className="col-12 col-lg-10 col-xl-9">
            <div className="d-flex align-items-center justify-content-center gap-4">
              {/* Mobile/Tablet Navigation - Previous */}
              <button
                onClick={prevSlide}
                className="nav-control-btn d-lg-none"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} strokeWidth={2.5} />
              </button>

              

              {/* Mobile/Tablet Navigation - Next */}
              <button
                onClick={nextSlide}
                className="nav-control-btn d-lg-none"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} strokeWidth={2.5} />
              </button>
            </div>

           
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonial-layout {
          position: relative;
          display: flex;
          align-items: center;
          animation: fadeInUp 0.6s ease-out;
        }

        .image-container {
          position: relative;
          z-index: 10;
          flex-shrink: 0;
        }

        .quote-container {
          flex: 1;
          margin-left: -140px;
        }

        .nav-control-btn {
          background: #ffffff;
          border: 2px solid rgba(74, 144, 226, 0.3);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          color: ${accentColor};
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 16px rgba(74, 144, 226, 0.15);

        }
        .nav-control-btn:active {
          transform: scale(0.95);
        }
        .nav-control-btn:hover {
          background: ${accentColor};
          border-color: ${accentColor};
          color: #ffffff;
          transform: scale(1.1);
          box-shadow: 0 8px 24px ${accentColor}50;
        }
        

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

        /* Tablet & Mobile Adjustments */
        @media (max-width: 992px) {
          .testimonial-layout {
            flex-direction: column;
            gap: 30px;
          }

          .quote-container {
            margin-left: 0 !important;
            padding: 40px 30px !important;
          }

          .quote-icon {
            left: 30px !important;
            top: 35px !important;
          }

          .circular-frame {
            width: 220px !important;
            height: 220px !important;
          }

          .nav-control-btn {
            width: 50px;
            height: 50px;
          }
        }

        @media (max-width: 768px) {
          .circular-frame {
            width: 180px !important;
            height: 180px !important;
          }

          .quote-container {
            padding: 30px 20px !important;
            min-height: auto !important;
          }

          .quote-icon {
            left: 20px !important;
            top: 25px !important;
          }

          .nav-control-btn {
            width: 48px;
            height: 48px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}