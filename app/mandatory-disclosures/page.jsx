"use client";
import { useState, Fragment } from "react";

const Mandatory = () => {
  const meetingsData = [
    {
      title: "Minutes of Governing Body meetings",
      files: [
        {
          title: "43rd meeting of Governing Body",
          link: "assets/files/Mandatory_disclosure/Minutes_of_43rd_Meeting_of_GB.pdf",
        },
        {
          title: "42nd meeting of Governing Body",
          link: "assets/files/Mandatory_disclosure/Minutes_of_42nd_Meeting_of_GB.pdf",
        },
        {
          title: "41st meeting of Governing Body",
          link: "assets/files/Mandatory_disclosure/Minutes_of_41st_Meeting_of_GB.pdf",
        },
        {
          title: "40th meeting of Governing Body",
          link: "assets/files/Mandatory_disclosure/Minutes_of_40th_Meeting_of_GB.pdf",
        },
        {
          title: "39th meeting of Governing Body",
          link: "assets/files/Mandatory_disclosure/Minutes_of_39th_Meeting_of_GB.pdf",
        },
        {
          title: "38th meeting of Governing Body",
          link: "assets/files/Mandatory_disclosure/Minutes_of_38th_Meeting_of_GB.pdf",
        },
        {
          title: "37th meeting of Governing Body",
          link: "assets/files/Mandatory_disclosure/Minutes_of_37th_Meeting_of_GB.pdf",
        },
        {
          title: "36th meeting of Governing Body",
          link: "assets/files/Mandatory_disclosure/Minutes_of_36th_Meeting_of_GB.pdf",
        },
        {
          title: "35th meeting of Governing Body",
          link: "assets/files/Mandatory_disclosure/Minutes_of_35th_Meeting_of_GB.pdf",
        },
        {
          title: "34th meeting of Governing Body",
          link: "assets/files/Mandatory_disclosure/Minutes_of_34th_Meeting_of_GB.pdf",
        },
        {
          title: "33th meeting of Governing Body",
          link: "assets/files/Mandatory_disclosure/Minutes_of_33rd_Meeting_of_GB.pdf",
        },
      ],
    },
    {
      title: "Minutes of Board of Management meeting",
      files: [
        {
          title: "60th meeting of Board of Management",
          link: "assets/files/Mandatory_disclosure/Minutes_of_60th_Meeting_of_BoM.pdf",
        },
        {
          title: "59th meeting of Board of Management",
          link: "assets/files/Mandatory_disclosure/Minutes_of_59th_Meeting_of_BoM.pdf",
        },
        {
          title: "58th meeting of Board of Management",
          link: "assets/files/Mandatory_disclosure/Minutes_of_58th_Meeting_of_BoM.pdf",
        },
        {
          title: "57th meeting of Board of Management",
          link: "assets/files/Mandatory_disclosure/Minutes_of_57th_Meeting_of_BoM.pdf",
        },
        {
          title: "56th meeting of Board of Management",
          link: "assets/files/Mandatory_disclosure/Minutes_of_56th_Meeting_of_BoM.pdf",
        },
        {
          title: "55th meeting of Board of Management",
          link: "assets/files/Mandatory_disclosure/Minutes_of_55th_Meeting_of_BoM.pdf",
        },
        {
          title: "54th meeting of Board of Management",
          link: "assets/files/Mandatory_disclosure/Minutes_of_54th_Meeting_of_BoM.pdf",
        },
        {
          title: "53rd meeting of Board of Management",
          link: "assets/files/Mandatory_disclosure/Minutes_of_53rd_Meeting_of_BoM.pdf",
        },
        {
          title: "52nd meeting of Board of Management",
          link: "assets/files/Mandatory_disclosure/Minutes_of_52nd_Meeting_of_BoM.pdf",
        },
        {
          title: "51st meeting of Board of Management",
          link: "assets/files/Mandatory_disclosure/Minutes_of_51st_Meeting_of_BoM.pdf",
        },
        {
          title: "50th meeting of Board of Management",
          link: "assets/files/Mandatory_disclosure/Minutes_of_50th_Meeting_of_BoM.pdf",
        },
        {
          title: "49th meeting of Board of Management",
          link: "assets/files/Mandatory_disclosure/Minutes_of_49th_Meeting_of_BoM.pdf",
        },
        {
          title: "48th meeting of Board of Management",
          link: "assets/files/Mandatory_disclosure/Minutes_of_48th_Meeting_of_BoM.pdf",
        },
      ],
    },
    {
      title: "Minutes of Academic Council meeting",
      files: [
        {
          title: "29th meeting of Academic Council",
          link: "assets/files/Mandatory_disclosure/Minutes_of_29th_Meeting_of_AC.pdf",
        },
        {
          title: "28th meeting of Academic Council",
          link: "assets/files/Mandatory_disclosure/Minutes_of_28th_Meeting_of_AC.pdf",
        },
        {
          title: "27th meeting of Academic Council",
          link: "assets/files/Mandatory_disclosure/Minutes_of_27th_Meeting_of_AC.pdf",
        },
        {
          title: "26th meeting of Academic Council",
          link: "assets/files/Mandatory_disclosure/Minutes_of_26th_Meeting_of_AC.pdf",
        },
        {
          title: "25th meeting of Academic Council",
          link: "assets/files/Mandatory_disclosure/Minutes_of_25th_Meeting_of_AC.pdf",
        },
        {
          title: "24th meeting of Academic Council",
          link: "assets/files/Mandatory_disclosure/Minutes_of_24th_Meeting_of_AC.pdf",
        },
        {
          title: "23rd meeting of Academic Council",
          link: "assets/files/Mandatory_disclosure/Minutes_of_23rd_Meeting_of_AC.pdf",
        },
        {
          title: "22nd meeting of Academic Council",
          link: "assets/files/Mandatory_disclosure/Minutes_of_22nd_Meeting_of_AC.pdf",
        },
      ],
    },
  ];

  const otherData = [
    {
      title: "Minutes of Advisory Board meeting",
      link: "assets/files/Mandatory_disclosure/Advisory_Board_Const_Functions_Minutes_of_Meeting.pdf",
    },
    {
      title: "CHARUSAT University Act & First Statutes",
      link: "assets/files/Mandatory_disclosure/CHARUSAT Act & First Statutes.pdf",
    },
    { title: "Anti-Ragging Policy", link: "./anti-ragging" },
    { title: "Internal Complaint Committee", link: "./ICC" },
    {
      title:
        "Mechanism for Prevention / Prohibition of use of Anti-Drug and Alcohol",
      link: "assets/files/Mandatory_disclosure/Anti_Drug_Alcohol_Circular.pdf",
    },
    {
      title: "Mechanism of Grievance Redressal for CHARUSAT employee",
      link: "assets/files/Mandatory_disclosure/Mechanism_of_Grievance_Redressal_for_CHARUSAT_Employee.pdf",
    },
    {
      title: "Guidelines for Student Grievance Redressal Cell",
      link: "./GRC",
    },
    {
      title: "Whistle Blower Policy",
      link: "assets/files/Mandatory_disclosure/Whistle_Blower_Policy.pdf",
    },
    {
      title: "Quarterly Audited Financial Reports",
      link: "https://www.charusat.edu.in/documents-access/",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Fragment>
      <div className="blog-section p-4">
        <div className="container p-4" style={{ backgroundColor: "#fff" }}>
          <div className="row justify-content-center">
            <div className="col">
              <article>
                <div className="section-wrapper" style={{ color: "#0066b3" }}>
                  <h1
                    className="text-center mb-4 h1 text-white fw-bold"
                    style={{
                      backgroundColor: "#ff4d00",
                      padding: "10px",
                      borderRadius: "10px",
                    }}
                  >
                    Mandatory Disclosures & Compliance
                  </h1>

                  {meetingsData.map((meeting, index) => (
                    <div className="accordion-item" key={index}>
                      <div
                        className="accordion-header"
                        onClick={() => toggleAccordion(index)}
                        style={{
                          cursor: "pointer",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          backgroundColor: "#0066b3",
                          color: "white",
                          padding: "10px",
                          borderRadius: "5px",
                          marginBottom: "5px",
                        }}
                      >
                        <h6 className="m-0">{meeting.title}</h6>
                        <span>{activeIndex === index ? "▲" : "▼"}</span>
                      </div>
                      {activeIndex === index && (
                        <div className="accordion-content">
                          <table className="table mt-2">
                            <tbody>
                              {meeting.files.map((file, idx) => (
                                <tr key={idx}>
                                  <td>{file.title}</td>
                                  <td>
                                    <a
                                      className="pdfLink"
                                      target="_blank"
                                      href={file.link}
                                      rel="noopener noreferrer"
                                    >
                                      <i
                                        className="icofont-file-pdf"
                                        style={{
                                          fontSize: "22px",
                                          color: "red",
                                        }}
                                      ></i>
                                    </a>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  ))}

                  {/* <div className="section-divider mt-4 mb-4" style={{ borderTop: "2px solid #0066b3" }}></div> */}

                  <div className="other-section">
                    {otherData.map((item, idx) => (
                      <div
                        className="other-item"
                        key={idx}
                        style={{
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          backgroundColor: "#0066b3",
                          color: "white",
                          padding: "10px",
                          borderRadius: "5px",
                          marginBottom: "5px",
                        }}
                      >
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "white",
                            textDecoration: "none",
                            width: "100%",
                          }}
                        >
                          {item.title}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <br />

      <style jsx>{`
        .blog-section {
          background-color: #fff9f1;
        }

        .card-main h6 {
          background-color: #fff;
          background-image: linear-gradient(45deg, #0066b3, #004080);
          color: #fff;
          padding: 10px;
          border-radius: 5px;
        }

        .image-placeholder {
          height: 200px;
          background-color: #fff;
          background-size: cover;
          background-position: center;
          margin-bottom: 20px;
          transition: transform 0.3s ease-in-out;
          width: 94%;
          transform: scale(1.05);
          margin: auto;
          margin-bottom: 10px;
          border-radius: 5px;
          margin-top: 5px;
          margin-bottom: 15px;
        }

        .card {
          width: 90%;
          margin: auto;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          transition: box-shadow 0.3s ease-in-out;
        }

        .card:hover {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .card h6 {
          color: #0066b3;
          background-color: #fff;
          padding: 10px;
          border-radius: 5px;
        }
      `}</style>
    </Fragment>
  );
};

export default Mandatory;

// import { Fragment } from "react";
// // import { color } from "@mui/system";

// const Mandatory = () => {
//   return (
//     <Fragment>
//       {/* <PageHeader title={'4 Results found for: Business'} curPage={'Search Result'} /> */}
//       <div className="blog-section padding-tb section-bg">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-8 col-12">
//               <article>
//                 <div className="section-wrapper">
//                   <div className="row row-cols-1 justify-content-center g-4">
//                     <div className="col">
//                       <div className="post-item style-2">
//                         <div className="post-inner">
//                           <div className="post-content">
//                             <h3>Mandatory Disclosures & Compliance</h3>
//                             <hr />
//                             <br />

//                             <div style={{ overflowX: "auto" }}>
//                               <table className="table">
//                                 <tbody>
//                                   <tr>
//                                     <td>CHARUSAT Univesity Act</td>
//                                     <td>
//                                       <a
//                                         className="pdfLink"
//                                         target="_blank"
//                                         href="#"
//                                       >
//                                         <i
//                                           className="icofont-file-pdf"
//                                           style={{
//                                             fontSize: "22px",
//                                             color: "red",
//                                           }}
//                                         ></i>
//                                       </a>
//                                     </td>
//                                   </tr>
//                                   <tr>
//                                     <td>Anti-Ragging Policy</td>
//                                     <td>
//                                       <a
//                                         className="pdfLink"
//                                         target="_blank"
//                                         href="#"
//                                       >
//                                         <i
//                                           className="icofont-file-pdf"
//                                           style={{
//                                             fontSize: "22px",
//                                             color: "red",
//                                           }}
//                                         ></i>
//                                       </a>
//                                     </td>
//                                   </tr>
//                                   <tr>
//                                     <td>Internal Complaint Committee</td>
//                                     <td>
//                                       <a
//                                         className="Link"
//                                         target="_blank"
//                                         href="./ICC"
//                                       >
//                                         <i
//                                           className="icofont-link"
//                                           style={{
//                                             fontSize: "22px",
//                                             color: "red",
//                                           }}
//                                         ></i>
//                                       </a>
//                                     </td>
//                                   </tr>
//                                   <tr>
//                                     <td>Mechanism for Prevention / Prohibition of use of Anti-Drug and Alcohol</td>
//                                     <td>
//                                       <a
//                                         className="pdfLink"
//                                         target="_blank"
//                                         href="./assets/files/Anti_Drug_Alcohol_Circular.pdf"
//                                       >
//                                         <i
//                                           className="icofont-file-pdf"
//                                           style={{
//                                             fontSize: "22px",
//                                             color: "red",
//                                           }}
//                                         ></i>
//                                       </a>
//                                     </td>
//                                   </tr>

//                                 </tbody>
//                               </table>
//                             </div>

//                             {/* <Link to="/blog-single" className="lab-btn"><span>Operator's Detail <i className="icofont-external-link"></i></span></Link> */}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </article>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default Mandatory;
