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
      className="position-relative"
      aria-label="Awards and accreditations"
      style={{
        padding: "16px 0",
        background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.04))",
        borderTop: "1px solid rgba(0,0,0,0.04)",
        borderBottom: "1px solid rgba(0,0,0,0.04)",
        overflow: "hidden",
      }}
    >
      <div className="container">
        <div
          className="marquee-wrap"
          style={{
            position: "relative",
            // Edge fade for nicer look
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
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
                  padding: "0 28px",
                  opacity: 0.95,
                  minHeight: 44, // keeps row height stable
                }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  className="award-logo"
                  width={160}
                  height={48}
                  sizes="(max-width: 768px) 90px, 160px"
                  priority={idx < 6}
                  style={{
                    height: "38px",
                    width: "auto", // FIX: keep aspect ratio
                    objectFit: "contain", // FIX: prevent squish
                    display: "block",
                    filter: "grayscale(10%) contrast(110%) brightness(100%)",
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
          animation: scroll-left 28s linear infinite;
          will-change: transform;
        }

        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-wrap:hover .marquee-track {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; transform: translateX(0); }
        }

        @media (max-width: 768px) {
          .award-logo {
            height: 30px !important;
            width: auto !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AwardsMarquee;