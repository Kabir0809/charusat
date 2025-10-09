import Link from "next/link";
const subTitle = "Don't Miss the Day";
const title = "Announcements";
const desc = "";
//import Image from "next/image";
//import event1 from "@/public/assets/images/event/event1.png";

// const eventListOne = [
//   {
//     imgAlt:
//       "National Conference on "Empowering Comprehensive Midwifery:Role in Health Care Education,Practice and Research"",
//     Date: "6th & 7th",
//     MonthYear: "FEB 2024",
//     link: "",
//     openInNewTab: true,
//     title:
//       "National Conference on "Empowering Comprehensive Midwifery:Role in Health Care Education,Practice and Research"",
//     Time: "",
//     Place: "MTIN/CHARUSAT",
//   },
// ];

// const eventListTwo = [];

const Event = () => {
  return (
    <section className="event-section p-4" role="region" aria-labelledby="announcements-heading">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle" aria-label="Section category">{subTitle}</span>
          <h2 id="announcements-heading" className="title">{title}</h2>
          <p className="desc">{desc}</p>
          <br />
        </div>
        <div className="section-wrapper">
          <div className="row row-cols-lg-1 row-cols-1 g-4">
            {/* {eventListOne.map((val, i) => (
              <div className="col" key={i}>
                <div className="event-left">
                  <div className="event-item">
                    <div className="event-inner">
                      <div className="event-thumb">
                        <Link
                          href="https://charusat.ac.in/files/MTIN/OBG_MTIN_2024_Info.pdf"
                          target="_blank"
                        >
                          {" "}
                          <Image
                            src={event1}
                            alt={`${val.imgAlt}`}
                            data-aos="fade-right"
                            width={696.02} 
                            height={453.58}                         />
                        </Link>
                      </div>
                      <div
                        className="event-content"
                        data-aos="fade-right"
                        data-aos-duration="2800"
                      >
                        <div className="event-date-info">
                          <div className="edi-box">
                            <h4>{val.Date}</h4>
                            <p>{val.MonthYear}</p>
                          </div>
                        </div>
                        <div className="event-content-info">
                          <a target="_blank">
                            <h5>{val.title}</h5>
                          </a>
                          <ul className="lab-ul">
                            {val.Time ? (
                              <li>
                                <i className="icofont-clock-time"></i>
                                {val.Time}
                              </li>
                            ) : (
                              <span></span>
                            )}

                            {val.Place ? (
                              <li>
                                <i className="icofont-google-map"></i>
                                {val.Place}
                              </li>
                            ) : (
                              <span></span>
                            )}
                          </ul>
                          <div className="link-1">
                            <Link
                              target="_blank"
                              href="https://charusat.ac.in/files/MTIN/OBG_MTIN_2024_Info.pdf"
                              className="btn btn-danger text-white mx-2"
                            >
                              Information
                            </Link>
                            <Link
                              target="_blank"
                              href="https://charusat.ac.in/files/MTIN/OBG_MTIN_2024_Schedule.pdf"
                              className="btn btn-danger text-white"
                            >
                              Schedule
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))} */}
            <div className="col">
              <div className="event-center">
                {/* {eventListTwo.map((val, i) => (
                  <div className="event-item" key={i}>
                    <div className="event-inner">
                      <div className="event-content" data-aos="fade-left" >
                        <div className="event-date-info">
                          <div className="edi-box">
                            <h4>{val.Date}</h4>
                            <p>{val.MonthYear}</p>
                          </div>
                        </div>
                        <div className="event-content-info">
                          <a>
                            <h5>{val.title}</h5>
                          </a>
                          <ul className="lab-ul">
                            {val.Time ? (
                              <li>
                                <i className="icofont-clock-time"></i>
                                {val.Time}
                              </li>
                            ) : (
                              <span></span>
                            )}

                            {val.Place ? (
                              <li>
                                <i className="icofont-google-map"></i>
                                {val.Place}
                              </li>
                            ) : (
                              <span></span>
                            )}
                          </ul>
                          <div className="link-1">
                            <Link
                              target="_blank"
                              href="https://charusat.ac.in/files/MTIN/OBG_MTIN_2024_Info.pdf"
                              className="btn btn-danger text-white"
                            >
                              Information
                            </Link>
                            <Link
                              target="_blank"
                              href="https://charusat.ac.in/files/MTIN/OBG_MTIN_2024_Schedule.pdf"
                              className="btn btn-danger text-white"
                            >
                              Schedule
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))} */}
                {/* <div className="event-item">
                  <div className="event-inner">
                    <div className="event-content">
                      <div className="event-date-info">
                        <div className="edi-box">
                          <h4>1</h4>
                          <p>APR 2024</p>
                        </div>
                      </div>
                      <div className="event-content-info">
                        <a>
                          <h5>Admission 2024-25</h5>
                        </a>
                        <ul className="lab-ul">
                          <li>
                            <i className="icofont-google-map"></i>
                            CHARUSAT
                          </li>
                        </ul>
                        <br />
                        <div className="link-1">
                          <Link
                            target="_blank"
                            href="https://admission.charusat.ac.in/"
                            className="btn btn-danger text-white"
                          >
                            Apply Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* <div className="event-item ">
                  <div className="event-inner">
                    <div className="event-content">
                      <div className="event-date-info">
                        <div className="edi-box">
                          <h4>11</h4>
                          <p>Sept 2024</p>
                        </div>
                      </div>
                      <div className="event-content-info ">
                        <h5>Recruitment - Open Positions</h5>
                        <ul style={{ display: "block" }}>
                          <li>
                            Laboratory Technologist (Molecular Diagnostic)
                          </li>
                          <li>Laboratory Technician (Molecular Diagnostic)</li>
                        </ul>

                        <ul className="lab-ul">
                          <li>
                            <i className="icofont-google-map"></i>
                            CHARUSAT
                          </li>
                        </ul>
                        <br />
                        <div className="link-1">
                          <Link
                            target="_blank"
                            href="./careers"
                            className="btn btn-danger text-white m-1"
                          >
                            Get Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* <div className="event-item ">
                  <div className="event-inner">
                    <div className="event-content">
                      <div className="event-date-info">
                        <div className="edi-box">
                          <h4>04</h4>
                          <p>January 2025</p>
                        </div>
                      </div>
                      <div className="event-content-info ">
                        <h5>
                          14<sup>th</sup> Convocation{" "}
                        </h5>

                        <ul className="lab-ul">
                          <li>
                            <i className="icofont-google-map"></i>
                            CHARUSAT
                          </li>
                        </ul>
                        <br />
                        <div className="link-1">
                          <Link
                            target="_blank"
                            href="./assets/files/2024-convocation/Re-revised - Notice 14th Convocation.pdf"
                            className="btn btn-danger text-white m-1"
                          >
                            Registration Details
                          </Link>
                          <Link
                            target="_blank"
                            href="https://charusat.edu.in:912/studentapp/"
                            className="btn btn-danger text-white m-1"
                          >
                            Registration Link
                          </Link>

                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div className="event-item ">
                  <div className="event-inner">
                    <div className="event-content">
                      <div className="event-date-info">
                        <div className="edi-box">
                          <h4>01</h4>
                          <p>March &nbsp;2025</p>
                        </div>
                      </div>
                      <div className="event-content-info ">
                        <h5>MPT Admission Open for 2025-26</h5>

                        <ul className="lab-ul">
                          <li>
                            <i className="icofont-google-map"></i>
                            CHARUSAT
                          </li>
                        </ul>
                        <br />
                        <div className="link-1">
                          <Link
                            target="_blank"
                            href="assets/files/Advertisement-other-event/FAQ_MPT_2025_26.pdf"
                            className="btn btn-danger text-white m-1"
                          >
                            Get - Details
                          </Link>
                          &nbsp;
                          <Link
                            target="_blank"
                            href="https://admission.charusat.ac.in/"
                            className="btn btn-danger text-white m-1"
                          >
                            Apply Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* <div className="event-item">
                  <div className="event-inner">
                    <div className="event-content">
                      <div className="event-date-info">
                        <div className="edi-box">
                          <h4>03</h4>
                          <p>Sept 2024</p>
                        </div>
                      </div>
                      <div className="event-content-info">
                        <a>
                          <h5>Ph. D. Admission 2024-25</h5>
                        </a>
                        <ul className="lab-ul">
                          <li>
                            <i className="icofont-google-map"></i>
                            CHARUSAT
                          </li>
                        </ul>
                        <br />
                        <div className="link-1">
                         <Link
                            target="_blank"
                            href="https://admission.charusat.ac.in/"
                            className="btn btn-danger text-white"
                          >
                            Apply Now
                          </Link> 

                          <Link
                            target="_blank"
                            href="assets/files/cdet-2024/PhD-Final-Selected-Candidates-for-Website-2024.pdf"
                            className="btn btn-danger text-white m-2"
                          >
                            Qualified Candidates List for Phd Admission 2024
                          </Link> 
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* <div className="event-item">
                  <div className="event-inner">
                    <div className="event-content">
                      <div className="event-date-info">
                        <div className="edi-box">
                          <h4>27-29</h4>
                          <p>April 2024</p>
                        </div>
                      </div>
                      <div className="event-content-info">
                        <a href="#">
                          <h5>CHARUSAT Education Expo - Registration</h5>
                        </a>
                        <ul className="lab-ul">
                          <li>
                            <i className="icofont-google-map"></i>
                            CHARUSAT [ 27th-29th APR 2024 ]
                          </li>
                        </ul>
                        <br />
                        <div className="link-1 ">
                          <Link
                            target="_blank"
                            href="https://forms.gle/HsZNaS4Qxi4YPAau7"
                            className="btn btn-danger text-white"
                          >
                            Registration Link
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div className="event-item">
                  <div className="event-inner">
                    <div className="event-content">
                      <div className="event-date-info">
                        <div className="edi-box">
                          <h4>30</h4>
                          <p>May 2025</p>
                        </div>
                      </div>
                      <div className="event-content-info">
                        <h5>B.Tech. MQ/NRI Admission Schedule 2025-26</h5>
                        <div className="schedule-table">
                          <table>
                            <tbody>
                              <tr>
                                <td>Last date of Registration & Payment</td>
                                <td>&nbsp;&nbsp;&nbsp;&nbsp;30-05-2025*</td>
                              </tr>
                              <tr>
                                <td>Declaration of Provisional Merit List</td>
                                <td>&nbsp;&nbsp;&nbsp;&nbsp;07-06-2025*</td>
                              </tr>
                              <tr>
                                <td>Declaration of Final Merit List</td>
                                <td>&nbsp;&nbsp;&nbsp;&nbsp;10-06-2025*</td>
                              </tr>
                              <tr>
                                <td>MQ/NRI Admission Allotment Process</td>
                                <td>&nbsp;&nbsp;&nbsp;&nbsp;14-06-2025*</td>
                              </tr>
                            </tbody>
                          </table>
                          *dates are subject to change based on ACPC guidelines.
                        </div>
                        {/* <ul className="lab-ul">
                          <li>
                            <i className="icofont-google-map"></i>
                            CHARUSAT
                          </li>
                        </ul> */}
                        <br />
                        {/* <div className="link-1">
                          <Link
                            target="_blank"
                            href="http://admission.charusat.ac.in/"
                            className="btn btn-danger text-white"
                          >
                            Apply Now
                          </Link>
                        </div> 
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="event-item">
                  <div className="event-inner">
                    <div className="event-content">
                      <div className="event-date-info">
                        <div className="edi-box">
                          <h4>
                            <span className="sr-only">Date: </span>02
                          </h4>
                          <p>
                            <span className="sr-only">Month and Year: </span>June 2025
                          </p>
                        </div>
                      </div>
                      <div className="event-content-info">
                        <a
                          href="https://www.charusat.ac.in/cmpica/files/ADVERTISEMENT%20FOR%20FIELD%20INVESTIGATOR%20AND%20RESEARCH%20ASSISTANT.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View advertisement for field investigator and research assistant positions (PDF, opens in new window)"
                        >
                          <h5>
                            ADVERTISEMENT FOR FIELD INVESTIGATOR AND RESEARCH
                            ASSISTANT/ASSOCIATE
                          </h5>
                        </a>
                        <ul className="lab-ul" role="list">
                          <li role="listitem">
                            <i className="icofont-google-map" aria-hidden="true"></i>
                            <span className="sr-only">Location: </span>
                            CHARUSAT
                          </li>
                        </ul>
                        <br />
                        <div className="link-1">
                          <Link
                            target="_blank"
                            href="https://www.charusat.ac.in/cmpica/files/ADVERTISEMENT%20FOR%20FIELD%20INVESTIGATOR%20AND%20RESEARCH%20ASSISTANT.pdf"
                            className="btn btn-danger text-white"
                            rel="noopener noreferrer"
                            aria-label="Download advertisement details (PDF, opens in new window)"
                          >
                            Get Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="event-item">
                  <div className="event-inner">
                    <div className="event-content">
                      <div className="event-date-info">
                        <div className="edi-box">
                          <h4>
                            <span className="sr-only">Date: </span>02
                          </h4>
                          <p>
                            <span className="sr-only">Month and Year: </span>June 2025
                          </p>
                        </div>
                      </div>
                      <div className="event-content-info">
                        <a
                          href="https://admission.charusat.ac.in/Registration.aspx"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Apply for PhD admission 2025 August intake (opens in new window)"
                        >
                          <h5>PhD Admission 2025(August Intake)</h5>
                        </a>
                        <ul className="lab-ul" role="list">
                          <li role="listitem">
                            <i className="icofont-google-map" aria-hidden="true"></i>
                            <span className="sr-only">Location: </span>
                            CHARUSAT
                          </li>
                        </ul>
                        <br />
                        <div className="link-1">
                          <Link
                            target="_blank"
                            href="./assets/images/phd/Phd_2025_ad.webp"
                            className="btn btn-danger text-white"
                            rel="noopener noreferrer"
                            aria-label="View PhD advertisement 2025 (image, opens in new window)"
                          >
                            Phd Advertisement 2025
                          </Link>
                          &nbsp;&nbsp;
                          <Link
                            target="_blank"
                            href="https://admission.charusat.ac.in/Registration.aspx"
                            className="btn btn-danger text-white"
                            rel="noopener noreferrer"
                            aria-label="Apply now for PhD admission (opens in new window)"
                          >
                            Apply Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="event-item">
                  <div className="event-inner">
                    <div className="event-content">
                      <div className="event-date-info">
                        <div className="edi-box">
                          <h4>
                            <span className="sr-only">Date: </span>08
                          </h4>
                          <p>
                            <span className="sr-only">Month and Year: </span>July 2025
                          </p>
                        </div>
                      </div>
                      <div className="event-content-info">
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View details for national level hands-on training program on animal cell culture and cytotoxicity assay"
                        >
                          <h5>National-level hands-on training program on "Animal Cell Culture and Cytotoxicity Assay"</h5>
                        </a>
                        <ul className="lab-ul" role="list">
                          <li role="listitem">
                            <i className="icofont-google-map" aria-hidden="true"></i>
                            <span className="sr-only">Location: </span>
                            PDPIAS, CHARUSAT
                          </li>
                        </ul>
                        <br />
                        <div className="link-1">
                          <Link
                            target="_blank"
                            href="./assets/files/Advertisement-other-event/Hands-on-Cell-Culture-Training-01-06-SEP-2025.pdf"
                            className="btn btn-danger text-white"
                            rel="noopener noreferrer"
                            aria-label="Download training program details (PDF, opens in new window)"
                          >
                            Get Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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

        /* Enhanced focus styles for keyboard navigation */
        a:focus, .btn:focus {
          outline: 3px solid #0066cc;
          outline-offset: 2px;
        }

        a:focus:not(:focus-visible), .btn:focus:not(:focus-visible) {
          outline: none;
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          a {
            text-decoration: underline !important;
          }
          
          a:focus, .btn:focus {
            outline: 4px solid currentColor;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          [data-aos] {
            animation: none !important;
          }
        }

        /* Print accessibility */
        @media print {
          .sr-only {
            position: static !important;
            width: auto !important;
            height: auto !important;
            margin: 0 !important;
            overflow: visible !important;
            clip: auto !important;
            white-space: normal !important;
          }
          
          a::after {
            content: " (" attr(href) ")";
            font-size: 0.8em;
          }
        }

        .schedule-table {
          margin: 15px 0;
          background: #f8f9fa;
          border-radius: 8px;
          padding: 10px;
        }

        .schedule-table table {
          width: 100%;
          border-collapse: collapse;
          font-size: 14px;
        }

        .schedule-table td {
          padding: 8px;
          border-bottom: 1px solid #e9ecef;
        }

        .schedule-table tr:last-child td {
          border-bottom: none;
        }

        .schedule-table tr:hover {
          background-color: #fff;
        }

        @media (max-width: 768px) {
          .schedule-table {
            font-size: 13px;
          }

          .schedule-table td {
            padding: 6px;
          }
        }
      `}</style>
    </section>
  );
};

export default Event;

// ----------------------------------- Design

// "use client";
// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";

// const subTitle = "Don't Miss the Day";
// const title = "Announcements";

// // Sample event data with categories and icons
// const eventData = [
//   {
//     id: 1,
//     category: "recruitment",
//     date: "02",
//     monthYear: "June 2025",
//     title: "ADVERTISEMENT FOR FIELD INVESTIGATOR AND RESEARCH ASSISTANT/ASSOCIATE",
//     location: "CHARUSAT",
//     link: "https://www.charusat.ac.in/cmpica/files/ADVERTISEMENT%20FOR%20FIELD%20INVESTIGATOR%20AND%20RESEARCH%20ASSISTANT.pdf",
//     buttonText: "Get Details",
//     icon: "👥",
//     priority: "high"
//   },
//   {
//     id: 2,
//     category: "admission",
//     date: "02",
//     monthYear: "June 2025",
//     title: "PhD Admission 2025 (August Intake)",
//     location: "CHARUSAT",
//     link: "https://admission.charusat.ac.in/Registration.aspx",
//     secondaryLink: "./assets/images/phd/Phd_2025_ad.webp",
//     buttonText: "Apply Now",
//     secondaryButtonText: "PhD Advertisement 2025",
//     icon: "🎓",
//     priority: "high"
//   },
//   {
//     id: 3,
//     category: "training",
//     date: "08",
//     monthYear: "July 2025",
//     title: "National-level hands-on training program on Animal Cell Culture and Cytotoxicity Assay",
//     location: "PDPIAS, CHARUSAT",
//     link: "./assets/files/Advertisement-other-event/Hands-on-Cell-Culture-Training-01-06-SEP-2025.pdf",
//     buttonText: "Get Details",
//     icon: "🔬",
//     priority: "medium"
//   },
//   {
//     id: 4,
//     category: "admission",
//     date: "30",
//     monthYear: "May 2025",
//     title: "B.Tech. MQ/NRI Admission Schedule 2025-26",
//     location: "CHARUSAT",
//     link: "http://admission.charusat.ac.in/",
//     buttonText: "Apply Now",
//     icon: "🎓",
//     priority: "high",
//     hasSchedule: true,
//     schedule: [
//       { event: "Last date of Registration & Payment", date: "30-05-2025*" },
//       { event: "Declaration of Provisional Merit List", date: "07-06-2025*" },
//       { event: "Declaration of Final Merit List", date: "10-06-2025*" },
//       { event: "MQ/NRI Admission Allotment Process", date: "14-06-2025*" }
//     ]
//   },
//   {
//     id: 5,
//     category: "convocation",
//     date: "04",
//     monthYear: "January 2025",
//     title: "14th Convocation",
//     location: "CHARUSAT",
//     link: "./assets/files/2024-convocation/Re-revised - Notice 14th Convocation.pdf",
//     secondaryLink: "https://charusat.edu.in:912/studentapp/",
//     buttonText: "Registration Details",
//     secondaryButtonText: "Registration Link",
//     icon: "🎖️",
//     priority: "high"
//   },
//   {
//     id: 6,
//     category: "admission",
//     date: "01",
//     monthYear: "March 2025",
//     title: "MPT Admission Open for 2025-26",
//     location: "CHARUSAT",
//     link: "assets/files/Advertisement-other-event/FAQ_MPT_2025_26.pdf",
//     secondaryLink: "https://admission.charusat.ac.in/",
//     buttonText: "Get Details",
//     secondaryButtonText: "Apply Now",
//     icon: "🏥",
//     priority: "medium"
//   }
// ];

// const categories = [
//   { id: "all", label: "All Events", icon: "📅" },
//   { id: "admission", label: "Admissions", icon: "🎓" },
//   { id: "recruitment", label: "Recruitment", icon: "👥" },
//   { id: "training", label: "Training", icon: "🔬" },
//   { id: "convocation", label: "Convocation", icon: "🎖️" }
// ];

// const Event = () => {
//   const [activeFilter, setActiveFilter] = useState("all");
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [filteredEvents, setFilteredEvents] = useState(eventData);
//   const carouselRef = useRef(null);
//   const intervalRef = useRef(null);

//   // Filter events based on active filter
//   useEffect(() => {
//     if (activeFilter === "all") {
//       setFilteredEvents(eventData);
//     } else {
//       setFilteredEvents(eventData.filter(event => event.category === activeFilter));
//     }
//     setCurrentSlide(0);
//   }, [activeFilter]);

//   // Auto-scroll functionality
//   useEffect(() => {
//     if (isAutoPlaying && filteredEvents.length > 1) {
//       intervalRef.current = setInterval(() => {
//         setCurrentSlide(prev => (prev + 1) % Math.max(1, filteredEvents.length - 2));
//       }, 4000);
//     }

//     return () => {
//       if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//       }
//     };
//   }, [isAutoPlaying, filteredEvents.length]);

//   const handleFilterChange = (filterId) => {
//     setActiveFilter(filterId);
//     setIsAutoPlaying(false);
//     setTimeout(() => setIsAutoPlaying(true), 2000);
//   };

//   const handleSlideChange = (direction) => {
//     setIsAutoPlaying(false);
//     if (direction === 'next') {
//       setCurrentSlide(prev => (prev + 1) % Math.max(1, filteredEvents.length - 2));
//     } else {
//       setCurrentSlide(prev => prev === 0 ? Math.max(0, filteredEvents.length - 3) : prev - 1);
//     }
//     setTimeout(() => setIsAutoPlaying(true), 2000);
//   };

//   const getCategoryColor = (category) => {
//     const colors = {
//       admission: "primary",
//       recruitment: "success",
//       training: "info",
//       convocation: "warning",
//       default: "secondary"
//     };
//     return colors[category] || colors.default;
//   };

//   const getCategoryIcon = (category) => {
//     const icons = {
//       admission: "🎓",
//       recruitment: "👥",
//       training: "🔬",
//       convocation: "🎖️",
//       default: "📢"
//     };
//     return icons[category] || icons.default;
//   };

//   return (
//     <section 
//       className="py-5 bg-light" 
//       role="region" 
//       aria-labelledby="announcements-heading"
//       style={{
//         background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
//         minHeight: "100vh"
//       }}
//     >
//       <div className="container">
//         {/* Header Section */}
//         <div className="text-center mb-5">
//           <p className="text-muted fs-6 mb-2" role="text">
//             {subTitle}
//           </p>
//           <h2 
//             id="announcements-heading" 
//             className="display-4 fw-bold text-primary mb-4"
//           >
//             {title}
//           </h2>
          
//           {/* Filter Pills */}
//           <div 
//             className="d-flex flex-wrap justify-content-center gap-2 mb-4"
//             role="tablist"
//             aria-label="Event category filters"
//           >
//             {categories.map((category) => (
//               <button
//                 key={category.id}
//                 type="button"
//                 role="tab"
//                 aria-selected={activeFilter === category.id}
//                 aria-controls="events-carousel"
//                 className={`btn btn-sm rounded-pill px-4 py-2 fw-semibold transition-all ${
//                   activeFilter === category.id
//                     ? 'btn-primary shadow-sm'
//                     : 'btn-outline-primary'
//                 }`}
//                 onClick={() => handleFilterChange(category.id)}
//                 style={{
//                   backdropFilter: "blur(10px)",
//                   border: activeFilter === category.id ? "2px solid #0d6efd" : "1px solid #0d6efd",
//                   transform: activeFilter === category.id ? "translateY(-2px)" : "none",
//                   transition: "all 0.3s ease"
//                 }}
//               >
//                 <span role="img" aria-hidden="true" className="me-2">
//                   {category.icon}
//                 </span>
//                 {category.label}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Carousel Container */}
//         <div className="position-relative" id="events-carousel">
//           {/* Navigation Arrows */}
//           <button
//             type="button"
//             className="btn btn-primary rounded-circle position-absolute start-0 top-50 translate-middle-y shadow-lg z-3"
//             style={{ width: "50px", height: "50px", marginLeft: "-25px" }}
//             onClick={() => handleSlideChange('prev')}
//             disabled={currentSlide === 0}
//             aria-label="Previous events"
//           >
//             <i className="bi bi-chevron-left fs-5"></i>
//           </button>

//           <button
//             type="button"
//             className="btn btn-primary rounded-circle position-absolute end-0 top-50 translate-middle-y shadow-lg z-3"
//             style={{ width: "50px", height: "50px", marginRight: "-25px" }}
//             onClick={() => handleSlideChange('next')}
//             disabled={currentSlide >= Math.max(0, filteredEvents.length - 3)}
//             aria-label="Next events"
//           >
//             <i className="bi bi-chevron-right fs-5"></i>
//           </button>

//           {/* Cards Container */}
//           <div 
//             className="overflow-hidden"
//             style={{ height: "600px" }}
//             ref={carouselRef}
//           >
//             <div
//               className="d-flex transition-transform"
//               style={{
//                 transform: `translateX(-${currentSlide * 33.333}%)`,
//                 transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
//                 width: `${(filteredEvents.length * 100) / 3}%`
//               }}
//               role="group"
//               aria-live="polite"
//               aria-atomic="false"
//             >
//               {filteredEvents.map((event, index) => (
//                 <div
//                   key={event.id}
//                   className="flex-shrink-0 px-3"
//                   style={{ width: `${300 / filteredEvents.length}%` }}
//                 >
//                   <div
//                     className={`card h-100 border-0 shadow-lg position-relative overflow-hidden ${
//                       Math.abs(index - currentSlide - 1) > 1 ? 'opacity-50' : ''
//                     }`}
//                     style={{
//                       background: "rgba(255, 255, 255, 0.25)",
//                       backdropFilter: "blur(20px)",
//                       WebkitBackdropFilter: "blur(20px)",
//                       border: "1px solid rgba(255, 255, 255, 0.2)",
//                       borderRadius: "20px",
//                       transition: "all 0.3s ease",
//                       transform: Math.abs(index - currentSlide - 1) <= 1 ? "scale(1)" : "scale(0.9)"
//                     }}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
//                       e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.transform = Math.abs(index - currentSlide - 1) <= 1 ? "scale(1)" : "scale(0.9)";
//                       e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
//                     }}
//                     role="article"
//                     aria-labelledby={`event-title-${event.id}`}
//                   >
//                     {/* Category Badge */}
//                     <div className="position-absolute top-0 start-0 m-3 z-2">
//                       <span 
//                         className={`badge bg-${getCategoryColor(event.category)} bg-opacity-90 px-3 py-2 rounded-pill fw-semibold`}
//                         style={{ backdropFilter: "blur(10px)" }}
//                       >
//                         <span role="img" aria-hidden="true" className="me-2">
//                           {getCategoryIcon(event.category)}
//                         </span>
//                         {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
//                       </span>
//                     </div>

//                     {/* Date Badge */}
//                     <div className="position-absolute top-0 end-0 m-3 z-2">
//                       <div
//                         className="bg-primary text-white rounded-circle d-flex flex-column align-items-center justify-content-center shadow-sm"
//                         style={{ width: "80px", height: "80px", backdropFilter: "blur(10px)" }}
//                       >
//                         <div className="fw-bold fs-4" aria-label={`Date: ${event.date}`}>
//                           {event.date}
//                         </div>
//                         <div className="small" style={{ fontSize: "0.7rem" }} aria-label={`Month and year: ${event.monthYear}`}>
//                           {event.monthYear}
//                         </div>
//                       </div>
//                     </div>

//                     <div className="card-body p-4 d-flex flex-column" style={{ marginTop: "60px" }}>
//                       {/* Event Icon */}
//                       <div className="text-center mb-3">
//                         <div
//                           className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center"
//                           style={{ width: "60px", height: "60px" }}
//                         >
//                           <span 
//                             role="img" 
//                             aria-hidden="true" 
//                             className="fs-2"
//                           >
//                             {event.icon}
//                           </span>
//                         </div>
//                       </div>

//                       {/* Event Title */}
//                       <h5 
//                         id={`event-title-${event.id}`}
//                         className="card-title fw-bold text-dark mb-3 flex-grow-1"
//                         style={{ 
//                           fontSize: "1.1rem", 
//                           lineHeight: "1.4",
//                           minHeight: "3.5rem",
//                           display: "-webkit-box",
//                           WebkitLineClamp: "3",
//                           WebkitBoxOrient: "vertical",
//                           overflow: "hidden"
//                         }}
//                       >
//                         {event.title}
//                       </h5>

//                       {/* Location */}
//                       <div className="d-flex align-items-center text-muted mb-3">
//                         <i className="bi bi-geo-alt-fill me-2 text-primary"></i>
//                         <small>{event.location}</small>
//                       </div>

//                       {/* Schedule Table (if applicable) */}
//                       {event.hasSchedule && (
//                         <div className="mb-3">
//                           <div 
//                             className="bg-light bg-opacity-50 rounded p-3"
//                             style={{ backdropFilter: "blur(5px)" }}
//                           >
//                             <table className="table table-sm table-borderless mb-0">
//                               <tbody>
//                                 {event.schedule.map((item, idx) => (
//                                   <tr key={idx}>
//                                     <td className="text-dark fw-medium" style={{ fontSize: "0.85rem" }}>
//                                       {item.event}
//                                     </td>
//                                     <td className="text-primary fw-bold text-end" style={{ fontSize: "0.85rem" }}>
//                                       {item.date}
//                                     </td>
//                                   </tr>
//                                 ))}
//                               </tbody>
//                             </table>
//                             <small className="text-muted fst-italic">
//                               *dates are subject to change based on ACPC guidelines.
//                             </small>
//                           </div>
//                         </div>
//                       )}

//                       {/* Action Buttons */}
//                       <div className="mt-auto">
//                         <div className="d-flex flex-wrap gap-2">
//                           <Link
//                             href={event.link}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="btn btn-primary px-4 py-2 rounded-pill fw-semibold flex-fill"
//                             style={{
//                               backdropFilter: "blur(10px)",
//                               transition: "all 0.3s ease"
//                             }}
//                             onMouseEnter={(e) => {
//                               e.target.style.transform = "translateY(-2px)";
//                               e.target.style.boxShadow = "0 8px 20px rgba(13, 110, 253, 0.3)";
//                             }}
//                             onMouseLeave={(e) => {
//                               e.target.style.transform = "none";
//                               e.target.style.boxShadow = "none";
//                             }}
//                             aria-label={`${event.buttonText} for ${event.title} (opens in new window)`}
//                           >
//                             {event.buttonText}
//                           </Link>
                          
//                           {event.secondaryLink && (
//                             <Link
//                               href={event.secondaryLink}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="btn btn-outline-primary px-4 py-2 rounded-pill fw-semibold flex-fill"
//                               style={{
//                                 backdropFilter: "blur(10px)",
//                                 transition: "all 0.3s ease"
//                               }}
//                               onMouseEnter={(e) => {
//                                 e.target.style.transform = "translateY(-2px)";
//                                 e.target.style.backgroundColor = "#0d6efd";
//                                 e.target.style.color = "white";
//                               }}
//                               onMouseLeave={(e) => {
//                                 e.target.style.transform = "none";
//                                 e.target.style.backgroundColor = "transparent";
//                                 e.target.style.color = "#0d6efd";
//                               }}
//                               aria-label={`${event.secondaryButtonText} for ${event.title} (opens in new window)`}
//                             >
//                               {event.secondaryButtonText}
//                             </Link>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Progress Indicators */}
//           <div className="d-flex justify-content-center mt-4 gap-2">
//             {Array.from({ length: Math.max(1, filteredEvents.length - 2) }, (_, index) => (
//               <button
//                 key={index}
//                 type="button"
//                 className={`btn btn-sm rounded-pill ${
//                   currentSlide === index ? 'btn-primary' : 'btn-outline-primary'
//                 }`}
//                 style={{
//                   width: currentSlide === index ? "40px" : "12px",
//                   height: "12px",
//                   transition: "all 0.3s ease",
//                   opacity: currentSlide === index ? 1 : 0.5
//                 }}
//                 onClick={() => {
//                   setCurrentSlide(index);
//                   setIsAutoPlaying(false);
//                   setTimeout(() => setIsAutoPlaying(true), 2000);
//                 }}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>

//           {/* Auto-play indicator */}
//           <div className="text-center mt-3">
//             <button
//               type="button"
//               className="btn btn-link text-muted p-0"
//               onClick={() => setIsAutoPlaying(!isAutoPlaying)}
//               aria-label={isAutoPlaying ? "Pause auto-scroll" : "Resume auto-scroll"}
//               title={isAutoPlaying ? "Pause auto-scroll" : "Resume auto-scroll"}
//             >
//               <i className={`bi ${isAutoPlaying ? 'bi-pause-fill' : 'bi-play-fill'} me-1`}></i>
//               <small>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</small>
//             </button>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         /* Screen reader only content */
//         .sr-only {
//           position: absolute !important;
//           width: 1px !important;
//           height: 1px !important;
//           padding: 0 !important;
//           margin: -1px !important;
//           overflow: hidden !important;
//           clip: rect(0, 0, 0, 0) !important;
//           white-space: nowrap !important;
//           border: 0 !important;
//         }

//         /* Enhanced focus styles for keyboard navigation */
//         button:focus, a:focus {
//           outline: 3px solid #0066cc !important;
//           outline-offset: 2px !important;
//           z-index: 10 !important;
//         }

//         button:focus:not(:focus-visible), a:focus:not(:focus-visible) {
//           outline: none !important;
//         }

//         /* High contrast mode support */
//         @media (prefers-contrast: high) {
//           .card {
//             border: 2px solid currentColor !important;
//             background: white !important;
//           }
          
//           button:focus, a:focus {
//             outline: 4px solid currentColor !important;
//           }
//         }

//         /* Reduced motion support */
//         @media (prefers-reduced-motion: reduce) {
//           .transition-transform, .transition-all {
//             transition: none !important;
//           }
          
//           .card {
//             transform: none !important;
//           }
//         }

//         /* Touch-friendly improvements for mobile */
//         @media (max-width: 768px) {
//           .card {
//             margin-bottom: 1rem;
//           }
          
//           .btn {
//             min-height: 44px;
//             min-width: 44px;
//           }
          
//           .rounded-pill {
//             touch-action: manipulation;
//           }
//         }

//         /* Print accessibility */
//         @media print {
//           .sr-only {
//             position: static !important;
//             width: auto !important;
//             height: auto !important;
//             margin: 0 !important;
//             overflow: visible !important;
//             clip: auto !important;
//             white-space: normal !important;
//           }
          
//           .card {
//             break-inside: avoid;
//             box-shadow: none !important;
//             border: 1px solid #000 !important;
//             background: white !important;
//           }
          
//           button {
//             display: none !important;
//           }
          
//           a::after {
//             content: " (" attr(href) ")";
//             font-size: 0.8em;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Event;