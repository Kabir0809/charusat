"use client";
import Image from "next/image";

const logos = [
  { src: "/assets/images/awards/naac.png", alt: "NAAC" },
  { src: "/assets/images/awards/nba.jpeg", alt: "NBA" },
  { src: "/assets/images/awards/nirf.png", alt: "NIRF" },
  { src: "/assets/images/awards/aishe.png", alt: "AISHE" },
  { src: "/assets/images/awards/ariia.jpeg", alt: "ARIIA" },
  { src: "/assets/images/awards/iqac.png", alt: "IQAC" },
  { src: "/assets/images/awards/iic.png", alt: "IIC" },
  { src: "/assets/images/awards/swayam.png", alt: "SWAYAM" },
  { src: "/assets/images/awards/nss.png", alt: "NSS" },
  { src: "/assets/images/awards/uba.jpeg", alt: "UBA" },
  { src: "/assets/images/awards/aicte.jpeg", alt: "AICTE" },
];

const AwardsMarquee = () => {
  // Duplicate the list for seamless infinite scroll
  const track = [...logos, ...logos];

  return (
    <section
      className="position-relative awards-marquee"
      aria-label="Awards and accreditations"
      style={{
        padding: "30px 0",
        background: "#ffffff",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div
          className="marquee-wrap"
          style={{
            position: "relative",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="marquee-track">
            {track.map((item, idx) => (
              <div
                key={`${item.src}-${idx}`}
                className="logo-item"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0 32px",
                  minHeight: "80px",
                }}
              >
                <Image
                  loading="lazy"
                  src={item.src}
                  alt={item.alt}
                  className="award-logo"
                  width={140}
                  height={60}
                  sizes="(max-width: 768px) 100px, 140px"
                  style={{
                    height: "auto",
                    maxHeight: "60px",
                    width: "auto",
                    maxWidth: "140px",
                    objectFit: "contain",
                    display: "block",
                    filter: "grayscale(0%) contrast(105%) brightness(98%)",
                    transition: "all 0.3s ease",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-track {
          display: inline-flex;
          white-space: nowrap;
          gap: 0;
          animation: scroll-left 35s linear infinite;
          will-change: transform;
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-wrap:hover .marquee-track {
          animation-play-state: paused;
        }

        .logo-item:hover .award-logo {
          transform: scale(1.08);
          filter: grayscale(0%) contrast(110%) brightness(100%);
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
            transform: translateX(0);
          }
        }

        @media (max-width: 768px) {
          :global(.awards-marquee .award-logo) {
            max-height: 45px !important;
            max-width: 100px !important;
          }

          .logo-item {
            padding: 0 20px !important;
            min-height: 60px !important;
          }

          .marquee-track {
            animation-duration: 25s;
          }
        }

        @media (max-width: 480px) {
          :global(.awards-marquee .award-logo) {
            max-height: 38px !important;
            max-width: 85px !important;
          }

          .logo-item {
            padding: 0 16px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AwardsMarquee;