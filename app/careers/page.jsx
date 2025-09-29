"use client";
import { Fragment } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import Link from "next/link";
// import img1 from "@/public/assets/images/advertisment_nov_2022.webp"
import Image from "next/image";
// import { Link } from "next/link";
//import PageHeader from "../component/layout/pageheader";
// import career1_img from "../assets/images/advertisment_nov_2022.webp";

const Career = () => {
  return (
    <Fragment>
      <title>Careers @ CHARUSAT</title>
      <meta httpEquiv="Content-Type" content=" text/html; charset=utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Career " />
      <meta name="keywords" content="" />
      <meta name="robots" content="index" />
      <meta name="robots" content="follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="google" content="translate" />
      <meta name="google" content="nopagereadaloud" />
      <meta property="og:type" content="homepage" />
      <meta property="og:title" content="CSPIT Homepage" />
      <meta
        property="og:description"
        content="CSPIT - best engineering college to study in Gujarat."
      />
      <meta name="author" content="CHARUSAT Web Team" />

      {/* <PageHeader title={'4 Results found for: Business'} curPage={'Search Result'} /> */}
      <div className="blog-section p-4 section-bg">
        <div className="container p-4">
          <div className="row justify-content-center">
            <div className="col">
              <article>
                <div className="section-wrapper" style={{ color: "#0066b3" }}>
                <h1
                              className="text-center mb-4 h1 text-white fw-bold
                              "
                              style={{
                                backgroundColor: "#ff4d00",
                                padding: "10px", // Adding padding to make the gradient visible
                              }}
                            >
                              {" "}
                              Careers
                            </h1>
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                            <h3>Careers at CHARUSAT</h3>
                            <hr />
                              <p style={{textAlign:"justify"}}>Join our dynamic and diverse academic community at Charotar University of Science and Technology (CHARUSAT) where we foster innovation, excellence, and lifelong learning. We are looking for passionate educators, researchers, and professionals who are committed to shaping the future of education.</p>
                              <h3>Why Join Us?</h3>
                              <hr />
                              <p style={{textAlign:"justify"}}>
                              <ul><li>A collaborative and inclusive work environment</li>
                              <li>Opportunities for professional growth and development</li>
                              <li>Competitive compensation and benefits</li>
                              <li>State-of-the-art facilities and resources</li></ul>
                              </p>
                              <h3>Current Openings</h3>
                              <hr />
                              <p style={{textAlign:"justify"}}>Charusat invites applications from competent personnel to fuel its growth as per the below-mentioned details. Those who are interested in joining our esteemed institution, please send updated CV and a cover letter to email id as mentioned below with the subject line <b>"Application for [Position Name] + Discipline"</b>.</p>
                              <Table striped bordered hover style={{width:"50%"}}>
                              <thead>
                                <tr>
                                 
                                  <th>For Discipline/Program</th>
                                  <th>Email ID</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Engineering & Technology</td>
                                  <td><a href="mailto:engineeringcareer@charusat.ac.in">engineeringcareer@charusat.ac.in</a></td>
                                </tr>
                                <tr>
                                  <td>Computer Applications</td>
                                  <td><a href="mailto:cicacareer@charusat.ac.in">cicacareer@charusat.ac.in</a></td>
                                </tr>
                                <tr>
                                  <td>Management</td>
                                  <td><a href="mailto:managementcareer@charusat.ac.in">managementcareer@charusat.ac.in</a></td>
                                </tr>
                                <tr>
                                  <td>Physiotherapy</td>
                                  <td><a href="mailto:	
physiocareer@charusat.ac.in">	
physiocareer@charusat.ac.in</a></td>
                                </tr>
                                <tr>
                                  <td>Nursing</td>
                                  <td><a href="mailto:nursingcareer@charusat.ac.in">nursingcareer@charusat.ac.in</a></td>
                                </tr>
                                <tr>
                                  <td><ul>
                                    <li>Medical Radiology & Imagine Technology</li>
                                    <li>Paramedical Sciences Optometry</li>
                                    <li>Operation Theatre and Anaesthesia Technology</li>
                                    <li>MLT</li>
                                    </ul>
                                  </td>
                                  <td style={{verticalAlign:"middle"}}><a href="mailto:cipscareer@charusat.ac.in">cipscareer@charusat.ac.in</a></td>
                                </tr>
                                <tr>
                                  <td>Pharmacy</td>
                                  <td><a href="mailto:pharmacycareer@charusat.ac.in">pharmacycareer@charusat.ac.in</a></td>
                                </tr>
                                <tr>
                                  <td>Sciences</td>
                                  <td><a href="mailto:appliedsciencescareer@charusat.ac.in">appliedsciencescareer@charusat.ac.in</a></td>
                                </tr>
                                <tr>
                                  <td>Administrative or any other relevant position/program</td>
                                  <td><a href="mailto:career@charusat.ac.in">career@charusat.ac.in</a></td>
                                </tr>

                              </tbody>
                              </Table>
                              <p>We look forward to welcoming talented individuals who share our vision and values!</p>
                              
                              {/* <Container>
                              <Row className="p-2">
                                <Col className="text-center w-80">
                                  <img
                                    src="/assets/images/career/recruitment1024.jpg"
                                    alt="recruitment"
                                    width="600px"
                                    className="shadow p-3 mb-5 bg-body rounded"
                                  />
                                  <br />
                                  <a
                                    className="lab-btn text-white mt-2"
                                    style={{
                                      backgroundColor: "#0066b3",
                                    }}
                                    href="./assets/files/career/recruitment1024-QC.pdf"
                                    target="_blank"
                                  >
                                    Qualifications & Experience Criteria
                                  </a>
                                  &nbsp;&nbsp;
                                  <a
                                    className="lab-btn text-white mt-2"
                                    style={{
                                      backgroundColor: "#0066b3",
                                    }}
                                    href="https://charusat.edu.in:912/OnlineJobPortal/"
                                    target="_blank"
                                  >
                                    Apply Now
                                  </a>
                                  <br />
                                </Col>
                              </Row> */}

                              {/* <Row className="p-2">
                              <h5 className="fw-bold">
                                    Recruitment - Various positions
                                  </h5>
                                <Col md={6}>
                                  <img src="./assets/files/Advertisement-careers/Recruitment-Apr-2024.png" alt="recruitment" height="500px" width="500px"/>
                                  <br/>
                                </Col>
                                <Col md={4}>  
                                  <a
                                    className="lab-btn text-white mt-2"
                                    style={{
                                      backgroundColor: "#0066b3",
                                    }}
                                    href="./assets/files/Advertisement-careers/Qualification_and_Experience_Criteria_(Non_Academic_Position).pdf"
                                  >
                                    Qualification Criteria
                                  </a> &nbsp;&nbsp;
                                  <a
                                    className="lab-btn text-white mt-2"
                                    style={{
                                      backgroundColor: "#0066b3",
                                    }}
                                    href="https://charusat.edu.in:912/OnlineJobPortal/"
                                  >
                                    Apply Now
                                  </a>
                                </Col>
                              </Row> */}

                              {/* <Row className="p-2">
                                
                                <h5 className="fw-bold">
                                    Recruitment - Teaching positions
                                </h5>
                                  
                              <Col md={6}>
                              <br/>
                                <img src="/assets/files/Advertisement-careers/Faculty_Recruitment_Adv_APR_2024.jpg" alt="recruitment" height="500px" width="500px"/>
                                <br/>
                                </Col>
                                <Col md={4}> 

                                  <a
                                    className="lab-btn text-white mt-2"
                                    style={{
                                      backgroundColor: "#0066b3",
                                    }}
                                    href="/assets/files/Advertisement-careers/Qualification_and_Experience_Criteria_(Teaching_Cadres).pdf"
                                  >
                                    Qualification Criteria
                                  </a> &nbsp;&nbsp;
                                  <a
                                    className="lab-btn text-white mt-2"
                                    style={{
                                      backgroundColor: "#0066b3",
                                    }}
                                    href="https://charusat.edu.in:912/OnlineJobPortal/"
                                  >
                                    Apply Now
                                  </a>
                                </Col>
                              </Row>
                              <hr/> */}
                              {/*Advertisement with side buttons starts*/}

                              {/* <Row className="p-2">
                                <h5 className="fw-bold">
                                  Recruitment - Administrative Personnel
                                </h5>

                                <Col md={6}>
                                  <br />
                                  <img
                                    src="assets/files/Advertisement-careers/Non_Teaching_Adv_Jun-2024.jpg"
                                    alt="recruitment"
                                    height="500px"
                                    width="500px"
                                  />
                                  <br />
                                </Col>
                                <Col md={4}>
                                  <a
                                    className="lab-btn text-white mt-2"
                                    style={{
                                      backgroundColor: "#0066b3",
                                    }}
                                    href="/assets/files/Advertisement-careers/Qualification_Experience_Criteria-NonTeaching_Jun-2024.pdf"
                                  >
                                    Qualification Criteria
                                  </a>{" "}
                                  &nbsp;&nbsp;
                                  <a
                                    className="lab-btn text-white mt-2"
                                    style={{
                                      backgroundColor: "#0066b3",
                                    }}
                                    href="https://charusat.edu.in:912/OnlineJobPortal/"
                                  >
                                    Apply Now
                                  </a>
                                </Col>
                              </Row> */}
                              {/*Advertisement with side buttons Ends*/}
                              {/* <hr /> */}
                              {/* <Row>
                              <h5 className="fw-bold">
                                    Recruitment - JRF in DST-SERB Funded Research Project
                                </h5>
                                <Col>
                                <a
                                    className="lab-btn text-white mt-2"
                                    style={{
                                      backgroundColor: "#0066b3",
                                    }}
                                    href="/assets/files/Advertisement-careers/Advertisement_JRF_DST_SERB.pdf"
                                    target="_blank"
                                  >
                                  Advertisement
                                  </a> */}
                              {/* <Link className="lab-btn btn111" target="_blank" href="/assets/files/Advertisement-careers/Advertisement_JRF_DST_SERB.pdf">
                          <h6 className="text-center text-white h3 fw-bold">
                            Advertisement
                          </h6>
                        </Link> */}

                              {/* <a
                                    className="lab-btn text-white mt-2"
                                    style={{
                                      backgroundColor: "#0066b3",
                                    }}
                                    href="/assets/files/Advertisement-careers/Application form_JRF_DST_SERB.docx"
                                    target="_blank"
                                  >
                                  Download Application Form
                                  </a>
                                                            
                                </Col>
                                
                              </Row>
                              <hr/> */}
                              {/*Advertisement without side buttons */}
                              {/* <Row>
                                <h5 className="fw-bold">
                                  Recruitment - Walk-in interview for Laboratory
                                  Positions
                                </h5>
                                <Col md={6}>
                                  <img
                                    src="assets/files/Advertisement-careers/Labtechnician_July-2024.webp"
                                    alt="recruitment"
                                    height="500px"
                                    width="500px"
                                  />
                                </Col>
                              </Row> */}
                            {/* </Container> */}
                            <br />
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

export default Career;
