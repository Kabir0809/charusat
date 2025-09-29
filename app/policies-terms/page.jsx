"use client";
import { Fragment } from "react";
import Link from "next/link";
import IDMS from "@/public/assets/files/Policy/IDMS_POLICY.pdf";
import flowA from "@/public/assets/files/Policy/Flow_A_PHYSICAL_INFRASTRUCTURE.pdf";
import flowB from "@/public/assets/files/Policy/Flow_B_FURNITURE_AND_INTERIORS.pdf";
import flowC from "@/public/assets/files/Policy/Flow_C_Electrification_and_Maintenance.pdf";
import flowD from "@/public/assets/files/Policy/Flow_D_CIVIL_MAINTENANCE.pdf";
import flowE from "@/public/assets/files/Policy/Flow_E_FURNITURE_and_ITERIORS_MAINTENANCE.pdf";
// import staff_quarter from "@/public/assets/files/Policy/QUARTER_ALLOTMENT_POLICY_AND_APPLICATION_FORM.pdf";
// import Contact from "@/components/section/contact";
// import { color } from "@mui/system";
import "@/css/EOC.css";

const Policies = () => {
  const PolicyList = [
    {
      title: "Flow A PHYSICAL_INFRASTRUCTURE",
      link: flowA,
    },
    {
      title: "Flow B FURNITURE AND INTERIOR",
      link: flowB,
    },
    {
      title: "Flow C Electrification & Maintenance",
      link: flowC,
    },
    {
      title: "Flow_D CIVIL MAINTENANCE",
      link: flowD,
    },
    {
      title: "Flow_E FURNITURE & ITERIORS MAINTENANCE",
      link: flowE,
    },
  ];

  return (
    <Fragment>
      {/* <PageHeader title={'4 Results found for: Business'} curPage={'Search Result'} /> */}
      <div className="blog-section padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                            <h3>
                              Policies and Procedures - Support Facilities
                            </h3>
                            <hr />
                            <br />

                            <div style={{ overflowX: "auto" }}>
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>Documents</th>
                                    <th>PDF Link</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      Privacy Policy for Online Payment and
                                      Terms & Conditions
                                    </td>
                                    <td>
                                      <Link
                                        className="pdfLink"
                                        target="_blank"
                                        href="https://drive.google.com/file/d/1Mkj5x2FpWOLk9tM1LaWpLFvnTCcVQgCJ/view"
                                      >
                                        <i
                                          className="icofont-file-pdf"
                                          style={{
                                            fontSize: "22px",
                                            color: "red",
                                          }}
                                        ></i>
                                      </Link>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>IT Policy</td>
                                    <td>
                                      <Link
                                        className="pdfLink"
                                        target="_blank"
                                        href="https://drive.google.com/file/d/1vjxzDP0aP1-K83dQWZGMV7oJGM37Zyah/view"
                                      >
                                        <i
                                          className="icofont-file-pdf"
                                          style={{
                                            fontSize: "22px",
                                            color: "red",
                                          }}
                                        ></i>
                                      </Link>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>CCTV Policy</td>
                                    <td>
                                      <Link
                                        className="pdfLink"
                                        target="_blank"
                                        href="https://drive.google.com/file/d/1Chfc1l-XRq5DWRxGVw_bYT9SPDxLS6in/view"
                                      >
                                        <i
                                          className="icofont-file-pdf"
                                          style={{
                                            fontSize: "22px",
                                            color: "red",
                                          }}
                                        ></i>
                                      </Link>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Staff Quarter Allotment Policy</td>
                                    <td>
                                      <Link
                                        className="pdfLink"
                                        target="_blank"
                                        href="https://drive.google.com/file/d/1bDHxj0RiJ9TnH3GIHg7IBhOzr_SPhMNj/view?usp=sharing"
                                      >
                                        <i
                                          className="icofont-file-pdf"
                                          style={{
                                            fontSize: "22px",
                                            color: "red",
                                          }}
                                        ></i>
                                      </Link>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Library Manual</td>
                                    <td>
                                      <Link
                                        className="pdfLink"
                                        target="_blank"
                                        href="https://drive.google.com/file/d/1v2gdj3YeQooPDvPu9UUmo8X83-rD7XMv/view"
                                      >
                                        <i
                                          className="icofont-file-pdf"
                                          style={{
                                            fontSize: "22px",
                                            color: "red",
                                          }}
                                        ></i>
                                      </Link>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Laboratory Code of Conduct</td>
                                    <td>
                                      <Link
                                        className="pdfLink"
                                        target="_blank"
                                        href="https://drive.google.com/file/d/18JHuS6YbXGxMwytI1MgKOAkwGbJnXcDP/view"
                                      >
                                        <i
                                          className="icofont-file-pdf"
                                          style={{
                                            fontSize: "22px",
                                            color: "red",
                                          }}
                                        ></i>
                                      </Link>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Sports Facility Booking Form</td>
                                    <td>
                                      <Link
                                        className="pdfLink"
                                        target="_blank"
                                        href="https://drive.google.com/file/d/1D7NlBL1jObf-YFpdJA5-uHWV2c6U2ADf/view"
                                      >
                                        <i
                                          className="icofont-file-pdf"
                                          style={{
                                            fontSize: "22px",
                                            color: "red",
                                          }}
                                        ></i>
                                      </Link>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      IDMS Policy (Infrastructure Development
                                      and Maintainance section)
                                    </td>
                                    <td>
                                      <Link
                                        className="pdfLink"
                                        target="_blank"
                                        href={IDMS}
                                      >
                                        <i
                                          className="icofont-file-pdf"
                                          style={{
                                            fontSize: "22px",
                                            color: "red",
                                          }}
                                        ></i>
                                      </Link>
                                    </td>
                                  </tr>
                                  {PolicyList.map((elem, i) => (
                                    <tr key={i}>
                                      <td>
                                        <i className="icofont-long-arrow-right"></i>{" "}
                                        {elem.title}
                                      </td>

                                      <td>
                                        <Link
                                          className="pdfLink"
                                          target="_blank"
                                          href={elem.link}
                                        >
                                          <i
                                            className="icofont-file-pdf"
                                            style={{
                                              fontSize: "22px",
                                              color: "red",
                                            }}
                                          ></i>
                                        </Link>
                                      </td>
                                    </tr>
                                  ))}

                                  <tr>
                                    <td>Catering Service Requirement Form</td>
                                    <td>
                                      <Link
                                        className="pdfLink"
                                        target="_blank"
                                        href="https://drive.google.com/file/d/1Bh-3yUBDlhCcun_kiEAVhBVoW5Ngh0BK/view"
                                      >
                                        <i
                                          className="icofont-file-pdf"
                                          style={{
                                            fontSize: "22px",
                                            color: "red",
                                          }}
                                        ></i>
                                      </Link>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      Terms and Conditions for providing
                                      Catering Service
                                    </td>
                                    <td>
                                      <Link
                                        className="pdfLink"
                                        target="_blank"
                                        href="https://drive.google.com/file/d/1IzleaBISY-5LhZ1NUvjhmaGr1cyZIqEo/view"
                                      >
                                        <i
                                          className="icofont-file-pdf"
                                          style={{
                                            fontSize: "22px",
                                            color: "red",
                                          }}
                                        ></i>
                                      </Link>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      Guest/Visitor Lunch/Dinner Requisition
                                      Slip
                                    </td>
                                    <td>
                                      <Link
                                        className="pdfLink"
                                        target="_blank"
                                        href="https://drive.google.com/file/d/1zLESTfddIZFmoGlUmpnPU4DgG3QYMoPi/view"
                                      >
                                        <i
                                          className="icofont-file-pdf"
                                          style={{
                                            fontSize: "22px",
                                            color: "red",
                                          }}
                                        ></i>
                                      </Link>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      Terms and Conditions for providing Mandap
                                      Decoration Services
                                    </td>
                                    <td>
                                      <Link
                                        className="pdfLink"
                                        target="_blank"
                                        href="https://drive.google.com/file/d/1vBK9jxDHwLMhKZ6I5OXrItR1P_2e4rJv/view"
                                      >
                                        <i
                                          className="icofont-file-pdf"
                                          style={{
                                            fontSize: "22px",
                                            color: "red",
                                          }}
                                        ></i>
                                      </Link>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      Terms and Conditions for providing
                                      Gardening Services
                                    </td>
                                    <td>
                                      <Link
                                        className="pdfLink"
                                        target="_blank"
                                        href="https://drive.google.com/file/d/1W4PSsjJBvykZu3YiS6dtRYKyZRuXYwNR/view"
                                      >
                                        <i
                                          className="icofont-file-pdf"
                                          style={{
                                            fontSize: "22px",
                                            color: "red",
                                          }}
                                        ></i>
                                      </Link>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      Terms and Conditions for providing
                                      Furnishing, Coloring, and Carpentry
                                      Services
                                    </td>
                                    <td>
                                      <Link
                                        className="pdfLink"
                                        target="_blank"
                                        href="https://drive.google.com/file/d/13miZZdM2Xfvs7PSwcDQA866cUEUCgT9J/view"
                                      >
                                        <i
                                          className="icofont-file-pdf"
                                          style={{
                                            fontSize: "22px",
                                            color: "red",
                                          }}
                                        ></i>
                                      </Link>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      Terms and Conditions for providing Plywood
                                      and Hardware Items
                                    </td>
                                    <td>
                                      <Link
                                        className="pdfLink"
                                        target="_blank"
                                        href="https://drive.google.com/file/d/1dEU-_FOdWcl-53OQr_SkNxjAUt-quJq7/view"
                                      >
                                        <i
                                          className="icofont-file-pdf"
                                          style={{
                                            fontSize: "22px",
                                            color: "red",
                                          }}
                                        ></i>
                                      </Link>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>

                            {/* <Link to="/blog-single" className="lab-btn"><span>Operator's Detail <i className="icofont-external-link"></i></span></Link> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Policies;
