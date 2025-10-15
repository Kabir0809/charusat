"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import "normalize.css/normalize.css";
import "@/css/slider-animations.css";
import "@/css/slider-banner.css";

const BannerFive = () => {
  // Counter animation state
  const [counters, setCounters] = useState({
    students: 0,
    institutes: 0,
    faculty: 0,
    labs: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  // Target values for statistics
  const targets = {
    students: 14000,
    institutes: 15,
    faculty: 1500,
    labs: 100
  };

  // Statistics data
  const stats = [
    {
      key: 'students',
      value: targets.students,
      suffix: '+',
      label: 'Students',
      icon: 'icofont-graduate-alt',
      color: '#4fc3f7'
    },
    {
      key: 'institutes',
      value: targets.institutes,
      suffix: '+',
      label: 'Institutes',
      icon: 'icofont-building-alt',
      color: '#66bb6a'
    },
    {
      key: 'faculty',
      value: targets.faculty,
      suffix: '+',
      label: 'Faculty Members',
      icon: 'icofont-users-alt-2',
      color: '#ffa726'
    },
    {
      key: 'labs',
      value: targets.labs,
      suffix: '',
      label: 'Research Labs',
      icon: 'icofont-laboratory',
      color: '#ef5350'
    }
  ];

  // Animate counters when component becomes visible
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const intervals = {};

    Object.keys(targets).forEach(key => {
      const target = targets[key];
      const increment = target / (duration / 50);
      let current = 0;

      intervals[key] = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(intervals[key]);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 50);
    });

    return () => {
      Object.values(intervals).forEach(interval => clearInterval(interval));
    };
  }, [isVisible]);

  return (
    <>
      <section 
        className="d-block clearfix position-relative" 
        role="region" 
        aria-label="University Campus Background Video"
        style={{ 
          paddingTop: "40px",
          height: "100vh",
          minHeight: "600px",
          overflow: "hidden"
        }}
      >
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="position-absolute w-100 h-100"
          style={{
            top: 0,
            left: 0,
            objectFit: "cover",
            objectPosition: "center",
            zIndex: 0,
            pointerEvents: "none",
            transformOrigin: "center center",
            animation: "kenburns 24s ease-in-out infinite alternate",
            willChange: "transform"
          }}
          aria-hidden="true"
          onLoadedData={(e) => e.currentTarget.setAttribute("data-loaded", "true")}
          controlsList="nodownload noplaybackrate nofullscreen"
          disablePictureInPicture
        >
          <source src="assets/videos/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Video Overlay: brand-tinted gradient */}
        <div
          className="position-absolute w-100 h-100"
          style={{
            top: 0,
            left: 0,
            zIndex: 1,
            pointerEvents: "none",
            background: "linear-gradient(135deg, rgba(17, 24, 39, 0.70) 0%, rgba(31, 41, 55, 0.62) 35%, rgba(71, 85, 105, 0.55) 70%, rgba(79, 195, 247, 0.20) 100%)"
          }}
        />

        {/* Subtle vignette + noise texture for professionalism */}
        <div
          className="position-absolute w-100 h-100"
          style={{
            top: 0,
            left: 0,
            zIndex: 1,
            pointerEvents: "none",
            backgroundImage: `
              radial-gradient(ellipse at center, rgba(0,0,0,0) 40%, rgba(0,0,0,0.25) 100%),
              url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")
            `,
            backgroundRepeat: "no-repeat, repeat",
            backgroundSize: "100% 100%, 180px 180px",
            mixBlendMode: "normal"
          }}
        />
        {/* Statistics Floating Component */}
        <div
          className="position-absolute w-100"
          style={{
            bottom: "80px",
            left: 0,
            zIndex: 4,
            transform: isVisible ? "translateY(0)" : "translateY(50px)",
            opacity: isVisible ? 1 : 0,
            transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.5s"
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-11 col-lg-10">
                <div
                  className="stats-container"
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    backdropFilter: "blur(25px)",
                    borderRadius: "20px",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                    padding: "10px",
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  {/* Animated background glow */}
                  <div
                    className="position-absolute"
                    style={{
                      top: "-50%",
                      left: "-50%",
                      width: "200%",
                      height: "200%",
                      background: "conic-gradient(from 0deg, transparent, rgba(79, 195, 247, 0.1), transparent)",
                      animation: "rotate 20s linear infinite",
                      zIndex: -1
                    }}
                  />

                  <div className="row g-0">
                    {stats.map((stat, index) => (
                      <div key={stat.key} className="col-6 col-lg-3">
                        <div
                          className="stat-item text-center"
                          style={{
                            padding: "5px",
                            position: "relative",
                            borderRight: index < stats.length - 1 && index !== 1 ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
                            borderBottom: index < 2 ? "1px solid rgba(255, 255, 255, 0.1)" : "none",
                            transition: "all 0.3s ease",
                            cursor: "pointer"
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                            e.currentTarget.style.transform = "scale(1.05)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.transform = "scale(1)";
                          }}
                        >
                          {/* Icon */}
                          <div
                            className="stat-icon mb-2"
                            style={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "50%",
                              background: `linear-gradient(135deg, ${stat.color}20, ${stat.color}40)`,
                              border: `2px solid ${stat.color}30`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              margin: "0 auto 12px",
                              backdropFilter: "blur(10px)",
                              animation: `pulse-${index} 3s ease-in-out infinite`
                            }}
                          >
                            <i
                              className={stat.icon}
                              style={{
                                fontSize: "1.5rem",
                                color: stat.color
                              }}
                            />
                          </div>

                          {/* Counter */}
                          <div
                            className="stat-number"
                            style={{
                              fontSize: "clamp(1.5rem, 4vw, 2rem)",
                              fontWeight: "700",
                              color: "#ffffff",
                              lineHeight: "1",
                              marginBottom: "8px",
                              textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)"
                            }}
                          >
                            {counters[stat.key].toLocaleString()}{stat.suffix}
                          </div>

                          {/* Label */}
                          <div
                            className="stat-label"
                            style={{
                              fontSize: "0.9rem",
                              color: "rgba(255, 255, 255, 0.8)",
                              fontWeight: "500",
                              letterSpacing: "0.5px",
                              textTransform: "uppercase"
                            }}
                          >
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Screen reader content */}
        <div className="sr-only" aria-live="polite">
          Background video is decorative and muted, enhancing the page visually.
        </div>
      </section>

      {/* Embedded CSS */}
      <style jsx>{`
        /* Ken Burns effect */
        @keyframes kenburns {
          0% { transform: scale(1) translate3d(0, 0, 0); }
          100% { transform: scale(1.06) translate3d(0, 0, 0); }
        }

        /* Rotating background glow */
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* Individual pulse animations for icons */
        @keyframes pulse-0 {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        @keyframes pulse-1 {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        @keyframes pulse-2 {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        @keyframes pulse-3 {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
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

        /* Scroll animation */
        @keyframes scroll-animation {
          0% { opacity: 1; transform: translateX(-50%) translateY(0); }
          50% { opacity: 0.5; transform: translateX(-50%) translateY(15px); }
          100% { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        /* Enhanced focus styles */
        .btn:focus, .scroll-indicator:focus, .stat-item:focus {
          outline: 3px solid #4fc3f7 !important;
          outline-offset: 3px !important;
          box-shadow: 0 0 0 6px rgba(79, 195, 247, 0.3) !important;
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          video { animation: none !important; }
          .scroll-dot { animation: none !important; }
          .stats-container > div { animation: none !important; }
          .stat-icon { animation: none !important; }
          .stats-container { transition: none !important; }
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          section {
            height: 100vh !important;
            min-height: 600px !important;
          }

          .hero-content {
            padding: 30px 20px !important;
            margin-bottom: 80px !important;
          }

          .stats-container {
            margin: 0 10px !important;
            padding: 20px 15px !important;
          }

          .stat-item {
            padding: 15px 10px !important;
          }

          .stat-number {
            font-size: 1.5rem !important;
          }

          .stat-label {
            font-size: 0.8rem !important;
          }
        }

        /* Tablet adjustments */
        @media (max-width: 992px) and (min-width: 769px) {
          .stat-item {
            border-right: none !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
          }

          .stat-item:nth-child(4) {
            border-bottom: none !important;
          }
        }

        /* Video loading fallback */
        video:not([data-loaded]) {
          background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
        }

        /* Hide any native controls */
        video::-webkit-media-controls,
        video::-webkit-media-controls-enclosure {
          display: none !important;
        }

        /* High contrast mode */
        @media (prefers-contrast: high) {
          .stats-container {
            border: 2px solid #ffffff !important;
            background: rgba(0, 0, 0, 0.8) !important;
          }

          .stat-item {
            border-color: #ffffff !important;
          }
        }
      `}</style>
    </>
  );
};

export default BannerFive;