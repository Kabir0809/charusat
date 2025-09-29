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