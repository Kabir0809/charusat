"use client";

import { useEffect, useState, useRef } from "react";

const achievementList = [
  {
    iconName: "icofont-papers",
    count: 600,
    desc: "Publications",
    suffix: "+",
    ariaLabel: "600 plus academic publications"
  },
  {
    iconName: "icofont-molecule",
    count: 30,
    desc: "Research Labs",
    suffix: "+",
    ariaLabel: "30 plus research laboratories"
  },
  {
    iconName: "icofont-businessman",
    count: 30,
    desc: "Entrepreneurs",
    suffix: "+",
    ariaLabel: "30 plus successful entrepreneurs"
  },
  {
    iconName: "icofont-bill",
    count: 23,
    desc: "Highest Package (Lacs)",
    suffix: "",
    ariaLabel: "23 lacs highest placement package"
  },
];

function Counter({ end, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Scalers() {
  return (
    <>
      <style jsx>{`
        .scalers-section {
          position: relative;
          padding: 0px 0;
          overflow: hidden;
        }

        .scalers-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url('assets/images/bg-img/charusat-uni.webp');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }

        .scalers-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
             180deg,
            rgba(0, 0, 0, 0.6) 0%,
            rgba(0, 0, 0, 0.65) 30%,
            rgba(0, 0, 0, 0.65) 60%,
            rgba(0, 0, 0, 0.7) 100%
          );
        }

        .scalers-content {
          position: relative;
          z-index: 10;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .highlight-text {
          color: #f59e0b;
        }

        .section-subtitle {
          color: #cbd5e1;
          font-size: 1.125rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .title-underline {
          width: 80px;
          height: 4px;
          background-color: #f59e0b;
          margin: 1.5rem auto 0;
          border-radius: 2px;
        }

        .stat-card {
          text-align: center;
          padding: 2rem 1.5rem;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          height: 100%;
        }

        .stat-card:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(245, 158, 11, 0.5);
          transform: translateY(-8px);
        }

        .stat-icon {
          font-size: 3rem;
          color: #f59e0b;
          margin-bottom: 1rem;
          display: inline-block;
          width: 80px;
          height: 80px;
          line-height: 80px;
          border-radius: 50%;
          background: rgba(245, 158, 11, 0.1);
          border: 2px solid rgba(245, 158, 11, 0.3);
          transition: all 0.3s ease;
        }

        .stat-card:hover .stat-icon {
          background: rgba(245, 158, 11, 0.2);
          border-color: rgba(245, 158, 11, 0.6);
          transform: scale(1.1);
        }

        .stat-value {
          font-size: 2.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.95rem;
          color: #cbd5e1;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media (min-width: 768px) {
          .scalers-section {
            padding: 100px 0;
          }

          .section-title {
            font-size: 3rem;
          }

          .stat-value {
            font-size: 3rem;
          }

          .stat-icon {
            font-size: 3.5rem;
            width: 90px;
            height: 90px;
            line-height: 90px;
          }
        }

        @media (min-width: 992px) {
          .section-title {
            font-size: 3.5rem;
          }

          .stat-value {
            font-size: 3.5rem;
          }
        }
      `}</style>

      <section className="scalers-section">
        {/* Background Image with Overlay */}
        <div className="scalers-bg">
          <div className="scalers-overlay"></div>
        </div>

        {/* Content */}
        <div className="scalers-content">
          <div className="container">
            {/* Header */}
            {/* <div className="text-center mb-5">
              <h2 className="section-title">
                Our <span className="highlight-text">Achievements</span>
              </h2>
              <p className="section-subtitle">
                Building a legacy of excellence in education, research, and
                innovation
              </p>
              <div className="title-underline"></div>
            </div> */}

            {/* Stats Grid */}
            <div className="row g-4 mt-2 justify-content-center">
              {achievementList.map((stat, index) => (
                <div key={index} className="col-6 col-md-6 col-lg-3">
                  <div className="stat-card" aria-label={stat.ariaLabel}>
                    <div className="stat-icon">
                      <i className={stat.iconName}></i>
                    </div>
                    <div className="stat-value">
                      <Counter end={stat.count} suffix={stat.suffix || ""} />
                    </div>
                    <div className="stat-label">{stat.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}