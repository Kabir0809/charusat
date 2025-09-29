import React from "react";
// const subTitle = "Why Choose Us";
const title = " Collaborations";
import Image from "next/image";
import UOP from "@/public/assets/images/instructor/UNIVERSITY OF PRINCE.webp";
import AICTE from "@/public/assets/images/instructor/AICTE.webp";
import AIMST from "@/public/assets/images/instructor/AIMST University.webp";
import ATOMIC from "@/public/assets/images/instructor/BHABHA ATOMIC.webp";
import Envi from "@/public/assets/images/instructor/Centre of Envi Education.webp";
import DR from "@/public/assets/images/instructor/Defence Research Development.webp";
import DoB from "@/public/assets/images/instructor/Dept of BioTech.webp";
import GESIA from "@/public/assets/images/instructor/GESIA.webp";
import MGMT from "@/public/assets/images/instructor/GUJARAT INST OF DISASTER MGMT.webp";
import GUJCOST from "@/public/assets/images/instructor/GUJCOST.webp";
import HARRISBURG from "@/public/assets/images/instructor/HARRISBURG.webp";
import INESCTEC from "@/public/assets/images/instructor/INESCTEC.webp";
import IOP from "@/public/assets/images/instructor/INST OF PLASMA.webp";
import ISRO from "@/public/assets/images/instructor/ISRO.webp";
import KIU from "@/public/assets/images/instructor/KIU.webp";
import PTI from "@/public/assets/images/instructor/L&T PTI.webp";
import MSAT from "@/public/assets/images/instructor/MINISTRY OF SCIENCE AND TECH.webp";
import MOTOROLA from "@/public/assets/images/instructor/MOTOROLA SOLUTIONS.webp";
import NRS from "@/public/assets/images/instructor/NRS.webp";
import RAE from "@/public/assets/images/instructor/RAE.webp";
import TU from "@/public/assets/images/instructor/TECHNISCHE UNIVERSITY.webp";
import UGC_DAE from "@/public/assets/images/instructor/UGC_DAE.webp";
import UJC from "@/public/assets/images/instructor/UJC.webp";
import UOE from "@/public/assets/images/instructor/UNIVERSITY OF EXETER.webp";

// const instructorTopList = [
//   {
//     imgUrl: "assets/images/instructor/09.jpg",
//     imgAlt: "instructor rajibraj91 rajibraj",
//     name: "Emilee Logan",
//     degi: "Lead Instructor",
//     infoList: [
//       {
//         iconName: "icofont-envelope",
//         text: "info@prof.mail.com",
//       },
//       {
//         iconName: "icofont-youtube-play",
//         text: "www.youtube.com/prof.ls",
//       },
//     ],
//     socialList: [
//       {
//         iconName: "icofont-facebook",
//         className: "facebook",
//         siteLink: "#",
//       },
//       {
//         iconName: "icofont-twitter",
//         className: "twitter",
//         siteLink: "#",
//       },
//       {
//         iconName: "icofont-linkedin",
//         className: "linkedin",
//         siteLink: "#",
//       },
//     ],
//   },
//   {
//     imgUrl: "assets/images/instructor/10.jpg",
//     imgAlt: "instructor rajibraj91 rajibraj",
//     name: "Angel Mili",
//     degi: "Lead Instructor",
//     infoList: [
//       {
//         iconName: "icofont-envelope",
//         text: "info@prof.mail.com",
//       },
//       {
//         iconName: "icofont-youtube-play",
//         text: "www.youtube.com/prof.ls",
//       },
//     ],
//     socialList: [
//       {
//         iconName: "icofont-facebook",
//         className: "facebook",
//         siteLink: "#",
//       },
//       {
//         iconName: "icofont-twitter",
//         className: "twitter",
//         siteLink: "#",
//       },
//       {
//         iconName: "icofont-linkedin",
//         className: "linkedin",
//         siteLink: "#",
//       },
//     ],
//   },
// ];

const instructorBottomList = [
  {
    imgUrl: AICTE,
    imgAlt: "AICTE logo",
    name: "AICTE",
  },
  {
    imgUrl: AIMST,
    imgAlt: "AIMST University logo",
    name: "AIMST University",
  },
  {
    imgUrl: ATOMIC,
    imgAlt: "Bhabha Atomic logo",
    name: "BHABHA ATOMIC",
  },
  {
    imgUrl: Envi,
    imgAlt: "Centre of Environmental Education logo",
    name: "Centre of Envi Education",
  },
  {
    imgUrl: DR,
    imgAlt: "Defence Research Development logo",
    name: "Defence Research Development",
  },
  {
    imgUrl: DoB,
    imgAlt: "Department of BioTech logo",
    name: "Dept of BioTech",
  },
  {
    imgUrl: GESIA,
    imgAlt: "GESIA logo",
    name: "GESIA",
  },
  {
    imgUrl: MGMT,
    imgAlt: "Gujarat Institute of Disaster Management logo",
    name: "GUJARAT INST OF DISASTER MGMT",
  },
  {
    imgUrl: GUJCOST,
    imgAlt: "GUJCOST logo",
    name: "GUJCOST",
  },
  {
    imgUrl: HARRISBURG,
    imgAlt: "Harrisburg University logo",
    name: "HARRISBURG University",
  },
  {
    imgUrl: INESCTEC,
    imgAlt: "INESCTEC logo",
    name: "INESCTEC",
  },
  {
    imgUrl: IOP,
    imgAlt: "Institute of Plasma logo",
    name: "INST OF PLASMA",
  },
  {
    imgUrl: ISRO,
    imgAlt: "ISRO logo",
    name: "ISRO",
  },
  {
    imgUrl: KIU,
    imgAlt: "KIU logo",
    name: "KIU",
  },
  {
    imgUrl: PTI,
    imgAlt: "L&T PTI logo",
    name: "L&T PTI",
  },
  {
    imgUrl: MSAT,
    imgAlt: "Ministry of Science and Technology logo",
    name: "MINISTRY OF SCIENCE AND TECH",
  },
  {
    imgUrl: MOTOROLA,
    imgAlt: "Motorola Solutions logo",
    name: "MOTOROLA SOLUTIONS",
  },
  {
    imgUrl: NRS,
    imgAlt: "NRS logo",
    name: "NRS",
  },
  {
    imgUrl: RAE,
    imgAlt: "RAE logo",
    name: "RAE",
  },
  {
    imgUrl: TU,
    imgAlt: "Technische University logo",
    name: "TECHNISCHE UNIVERSITY",
  },
  {
    imgUrl: UGC_DAE,
    imgAlt: "UGC DAE logo",
    name: "UGC_DAE",
  },
  {
    imgUrl: UJC,
    imgAlt: "UJC logo",
    name: "UJC",
  },
  {
    imgUrl: UOE,
    imgAlt: "University of Exeter logo",
    name: "UNIVERSITY OF EXETER",
  },
  {
    imgUrl: UOP,
    imgAlt: "University of Prince logo",
    name: "UNIVERSITY OF PRINCE",
  },
];

export default function collaboration() {
  return (
    // <div>
    //   <div className="instructor-section style-3  padding-b  section-bg-ash">
    //     <div className="container">
    //       <div className="section-header text-center">
    //         {/* <span className="subtitle">University</span> */}
    //         <h2 className="title">{title}</h2>
    //       </div>
    //       <div className="section-wrapper">
    //         {/* <div className="instructor-top">
    //                     <div className="row g-4 justify-content-center row-cols-1 row-cols-lg-2">
    //                         {instructorTopList.map((val, i) => (
    //                             <div className="col" key={i}>
    //                                 <div className="instructor-item style-2">
    //                                     <div className="instructor-inner">
    //                                         <div className="instructor-thumb">
    //                                             <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
    //                                         </div>
    //                                         <div className="instructor-content">
    //                                             <Link to="/team-single"><h4>{val.name}</h4></Link>
    //                                             <span className="d-block">{val.degi}</span>
    //                                             <ul className="lab-ul ins-info">
    //                                                 {val.infoList.map((val, i) => (
    //                                                     <li key={i}><i className={val.iconName}></i> {val.text}</li>
    //                                                 ))}
    //                                             </ul>
    //                                             <ul className="lab-ul social-icons">
    //                                                 {val.socialList.map((val, i) => (
    //                                                     <li key={i}>
    //                                                         <a href={val.siteLink} className={val.className}><i className={val.iconName}></i></a>
    //                                                     </li>
    //                                                 ))}
    //                                             </ul>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         ))}
    //                     </div>
    //                 </div> */}
    //         <div className="instructor-bottom">
    //           <div className="instructor-slider overflow-hidden">
    //             <div className="instructor-navi instructor-slider-next">
    //               <i className="icofont-rounded-double-right"></i>
    //             </div>
    //             <div className="instructor-navi instructor-slider-prev">
    //               <i className="icofont-rounded-double-left"></i>
    //             </div>
    //             <Swiper
    //               spaceBetween={5}
    //               slidesPerView={2}
    //               loop={"true"}
    //               autoplay={{
    //                 delay: 5000,
    //                 disableOnInteraction: false,
    //               }}
    //               navigation={{
    //                 prevEl: ".instructor-slider-prev",
    //                 nextEl: ".instructor-slider-next",
    //               }}
    //               modules={[Autoplay, Navigation]}
    //               breakpoints={{
    //                 0: {
    //                   width: 340,
    //                   slidesPerView: 2,
    //                 },
    //                 768: {
    //                   width: 768,
    //                   slidesPerView: 3.5,
    //                 },
    //                 1200: {
    //                   width: 1200,
    //                   slidesPerView: 5.5,
    //                 },
    //               }}
    //             >
    //               {instructorBottomList.map((val, i) => (
    //                 <SwiperSlide key={i}>
    //                   <div className="instructor-item">
    //                     <div className="instructor-inner">
    //                       <div className="instructor-thumb">
    //                         <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
    //                       </div>
    //                       {/* <div className="instructor-content">
    //                                                 <Link to="/team-single"><h5>{val.name}</h5></Link>
    //                                                 <span className="d-block">{val.degi}</span>
    //                                             </div> */}
    //                     </div>
    //                   </div>
    //                 </SwiperSlide>
    //               ))}
    //             </Swiper>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <section className="clients-section style-3 py-4" role="region" aria-labelledby="collaborations-heading">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle" aria-label="Section category">ALLIANCE</span>
          <h2 id="collaborations-heading" className="title">{title}</h2>
          {/* <h2 className="abs-title">{absTitle}</h2> */}
        </div>

        <div className="section-wrapper">
          <div 
            className="sponsor-slider row sponsor-main"
            role="list"
            aria-label="List of institutional collaborations and partnerships"
          >
            {instructorBottomList.map((val, i) => (
              <div key={i} className="col-md-2" data-aos="flip-right" role="listitem">
                <div className="sponsor-iten">
                  <div 
                    className="sponsor-thumb bg-white border p-3 m-2 rounded"
                    role="img"
                    aria-label={`${val.name} collaboration partner`}
                  >
                    <Image
                      src={val.imgUrl}
                      alt={val.imgAlt}
                      height={"200px"}
                      width={"100%"}
                      style={{
                        objectFit: "contain",
                        height: "auto",
                        maxHeight: "200px"
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Enhanced focus styles for keyboard navigation */
        .sponsor-thumb:focus-within {
          outline: 3px solid #0066cc;
          outline-offset: 2px;
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        /* Remove focus outline for mouse users */
        .sponsor-thumb:focus-within:not(:focus-visible) {
          outline: none;
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
          .sponsor-thumb {
            border: 2px solid currentColor !important;
          }
          
          .sponsor-thumb:focus-within {
            outline: 4px solid currentColor;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .sponsor-thumb {
            transition: none;
          }
          
          .sponsor-thumb:focus-within {
            transform: none;
          }
          
          [data-aos] {
            animation: none !important;
          }
        }

        /* Windows high contrast mode */
        @media (-ms-high-contrast: active) {
          .sponsor-thumb {
            border: 2px solid;
          }
        }

        @media (max-width: 768px) {
          /* Smaller focus outline on mobile */
          .sponsor-thumb:focus-within {
            outline-width: 2px;
          }
        }

        /* Print accessibility */
        @media print {
          .sponsor-thumb {
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