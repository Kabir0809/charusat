import Link from "next/link";
import Image from "next/image";
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
    imgAlt: "CSRTC space research center showing laboratory equipment and satellite technology",
    title: "CHARUSAT Space Research and Technology Center",
    btnText: "Read More",
    url: "/csrtc",
    id: 1,
  },
  {
    imgUrl: kradle,
    imgAlt: "KRADLE research and development center showing modern laboratory facilities",
    title: "Dr. K. C. Patel Research & Development Center",
    btnText: "Read More",
    url: "https://kradle.charusat.ac.in/",
    id: 2,
  },
  {
    imgUrl: credp,
    imgAlt: "CREDP rural education program showing students and teachers in village setting",
    title: "CHARUSAT Rural Education Development Program",
    btnText: "Read More",
    url: "/CREDP",
    id: 3,
  },
  {
    imgUrl: icc,
    imgAlt: "ICC international cosmology center showing astronomical equipment and research facilities",
    title: "International Cosmology Center (ICC)",
    btnText: "Read More",
    url: "#",
    id: 4,
  },
  {
    imgUrl: sdg,
    imgAlt: "SDG Handprint Action Lab showing sustainable development goals activities",
    title: "SDG Handprint Action Lab",
    btnText: "Read More",
    url: "#",
    id: 5,
  },
  {
    imgUrl: hrdc,
    imgAlt: "HRDC human resource development center showing training and development activities",
    title: "Pri. B. I. Patel Human Resource Development Center",
    btnText: "Read More",
    url: "/hrdc",
    id: 6,
  },
  {
    imgUrl: edic,
    imgAlt: "CSIC startup and innovation center showing entrepreneurship activities and incubation facilities",
    title: "Charusat Startup and Innovation Centre (CSIC)",
    btnText: "Read More",
    url: "/csic",
    id: 7,
  },
  {
    imgUrl: uiic,
    imgAlt: "UIIC university industry interaction cell showing collaboration between academia and industry",
    title: "University Industry Interaction Cell (UIIC)",
    btnText: "Read More",
    url: "/university-industry-interaction-cell",
    id: 8,
  },
  {
    imgUrl: nabl,
    imgAlt: "NABL testing facilities showing accredited laboratory equipment and quality testing procedures",
    title: "NABL & Testing Facilities",
    btnText: "Read More",
    url: "#",
    id: 9,
  },
  {
    imgUrl: CIVF,
    imgAlt: "CIVF innovative ventures foundation showing entrepreneurship and innovation activities",
    title: [
      <span key="title1">Charusat Innovative Ventures Foundation</span>,
      <br key="title2" />,
    ],
    btnText: "Read More",
    url: "https://civf.co.in/",
    id: 10,
  },
];

export default function Initiatives() {
  const imageStyle = {
    height: "200px",
    objectFit: "cover",
    width: "100%",
  };

  return (
    <section className="course-section shape-img padding-b" role="region" aria-labelledby="initiatives-heading">
      <div className="container py-4 text-center">
        <span
          className="subtitle h5"
          style={{
            color: "#f16126",
            fontWeight: "normal",
            letterSpacing: "2px",
          }}
          aria-label="Section subtitle"
        >
          {subTitle}
        </span>
        <div className="text-center">
          <h2 id="initiatives-heading" className="title mx-auto mb-4">{title}</h2>
        </div>

        <div className="section-wrapper">
          <div 
            className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter"
            role="list"
            aria-label="List of university initiatives and programs"
          >
            {eventSliderList.map((elem) => {
              const {
                id,
                imgUrl,
                imgAlt,
                cate,
                programs,
                title,
                url,
                author,
                authorName,
                price,
              } = elem;
              
              // Convert title to string for aria-label if it's an array
              const titleText = Array.isArray(title) 
                ? title.filter(item => typeof item === 'string' || (item && item.props && typeof item.props.children === 'string'))
                    .map(item => typeof item === 'string' ? item : item.props.children)
                    .join(' ')
                : title;

              return (
                <div key={id} className="col" role="listitem">
                  <Link 
                    href={url}
                    aria-label={`Visit ${titleText} - ${elem.btnText} - ${url.startsWith('http') ? 'Opens in new tab' : 'Internal page'}`}
                    target={url.startsWith('http') ? "_blank" : undefined}
                    rel={url.startsWith('http') ? "noopener noreferrer" : undefined}
                  >
                    <article 
                      className="course-item style-4"
                      aria-labelledby={`initiative-${id}-title`}
                    >
                      <div className="course-inner">
                        <div className="course-thumb">
                          <Image src={imgUrl} alt={imgAlt} style={imageStyle} />
                          <div
                            className="course-category"
                            style={{
                              backgroundColor: "transparent",
                              fontWeight: "bold",
                            }}
                          >
                            <div
                              className="course-cate text-center m-auto"
                              style={{
                                height: "68px",
                              }}
                            >
                              <span
                                style={{
                                  color: "white",
                                  fontWeight: "800",
                                }}
                                aria-hidden="true"
                              >
                                {cate}
                              </span>
                              <div
                                style={{
                                  fontSize: "1rem",
                                }}
                              >
                                <span
                                  id={`initiative-${id}-title`}
                                  style={{
                                    padding: "5px 15px",
                                    color: "white",
                                    fontWeight: "800",
                                  }}
                                >
                                  {title}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Enhanced focus styles for keyboard navigation */
        .course-item:focus-within {
          outline: 3px solid #0066cc;
          outline-offset: 2px;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        /* Remove focus outline for mouse users */
        .course-item:focus-within:not(:focus-visible) {
          outline: none;
        }

        /* Ensure text stays visible on hover */
        .course-category span {
          color: white !important;
          z-index: 10;
          position: relative;
        }

        .course-item:hover .course-category span {
          color: white !important;
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

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .course-item {
            border: 2px solid currentColor;
          }
          
          .course-item:focus-within {
            outline: 4px solid currentColor;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .course-item {
            transition: none;
          }
          
          .course-item:focus-within {
            transform: none;
          }
        }

        /* Windows high contrast mode */
        @media (-ms-high-contrast: active) {
          .course-item {
            border: 2px solid;
          }
        }

        @media (max-width: 768px) {
          /* Smaller focus outline on mobile */
          .course-item:focus-within {
            outline-width: 2px;
          }
        }

        /* Print accessibility */
        @media print {
          .course-item {
            border: 1px solid #000;
            box-shadow: none;
            break-inside: avoid;
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
        }
      `}</style>
    </section>
  );
}