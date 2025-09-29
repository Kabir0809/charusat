"use client";
import { useState } from "react";

import servicerules from "@/public/assets/files/CHARUSAT Service Rules.pdf";
import Contact from "@/components/section/contact";

const ContactUs = () => {
  const [openSection, setOpenSection] = useState("");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };

  return (
    <div className="course-single-section padding-tb section-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col">
            <div className="main-part">
              <div className="course-item">
                <div className="course-inner">
                  <div className="course-content">
                    <h3 style={{ textAlign: "center" }}>Contact Us</h3>
                    <hr />
                    <br />
                  </div>
                </div>
              </div>

              <div className="course-video">
                <div className="course-video-content">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <div className="accordion-header" id="accordion02">
                        <button
                          className="d-flex flex-wrap justify-content-between"
                          data-bs-toggle="collapse"
                          data-bs-target="#videolist2"
                          aria-expanded="true"
                          aria-controls="videolist2"
                          onClick={() => toggleSection("sports")}
                        >
                          {" "}
                          <span>Sports Section</span>{" "}
                          <i
                            className={`icofont-square-${
                              openSection === "sports" ? "up" : "down"
                            }`}
                          ></i>
                        </button>
                      </div>
                      <div
                        id="videolist2"
                        className={`accordion-collapse collapse${
                          openSection === "sports" ? " show" : ""
                        }`}
                        aria-labelledby="accordion02"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="row">
                          <div className="col-lg">
                            <Contact
                              name="Dr. Pritesh Patel"
                              email="sports.officer@charusat.ac.in"
                              phone="+91-2697-265036"
                            />
                          </div>
                        </div>
                        <br />
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header" id="accordion03">
                        <button
                          className="d-flex flex-wrap justify-content-between"
                          data-bs-toggle="collapse"
                          data-bs-target="#videolist3"
                          aria-expanded="true"
                          aria-controls="videolist3"
                          onClick={() => toggleSection("Examination")}
                        >
                          <span>Examination Section</span>{" "}
                          <i
                            className={`icofont-square-${
                              openSection === "Examination" ? "up" : "down"
                            }`}
                          ></i>
                        </button>
                      </div>
                      <div
                        id="videolist3"
                        className={`accordion-collapse collapse${
                          openSection === "Examination" ? " show" : ""
                        }`}
                        aria-labelledby="accordion03"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="row">
                          <div className="col-lg">
                            <Contact
                              name="Dr. Abhilash Shukla"
                              email="coe.exam@charusat.ac.in"
                              phone="+91-2697-265418"
                            />
                          </div>
                        </div>
                        <br />
                      </div>
                    </div>

                    <div className="accordion-item">
                      <div className="accordion-header" id="accordion04">
                        <button
                          className="d-flex flex-wrap justify-content-between"
                          data-bs-toggle="collapse"
                          data-bs-target="#videolist4"
                          aria-expanded="true"
                          aria-controls="videolist4"
                          onClick={() => toggleSection("HR")}
                        >
                          {" "}
                          <span>HR Section</span>{" "}
                          <i
                            className={`icofont-square-${
                              openSection === "HR" ? "up" : "down"
                            }`}
                          ></i>
                        </button>
                      </div>
                      <div
                        id="videolist4"
                        className={`accordion-collapse collapse${
                          openSection === "HR" ? " show" : ""
                        }`}
                        aria-labelledby="accordion04"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="row">
                          <div className="col-lg">
                            <Contact
                              name="Mr. Rajendra Solanki"
                              email="hr@charusat.ac.in"
                              phone="+91-2697-265006"
                            />
                          </div>
                        </div>

                        <br />
                      </div>
                    </div>

                    <div className="accordion-item">
                      <div className="accordion-header" id="accordion05">
                        <button
                          className="d-flex flex-wrap justify-content-between"
                          data-bs-toggle="collapse"
                          data-bs-target="#videolist5"
                          aria-expanded="true"
                          aria-controls="videolist5"
                          onClick={() => toggleSection("Accounts")}
                        >
                          {" "}
                          <span>Accounts Section</span>{" "}
                          <i
                            className={`icofont-square-${
                              openSection === "Accounts" ? "up" : "down"
                            }`}
                          ></i>
                        </button>
                      </div>
                      <div
                        id="videolist5"
                        className={`accordion-collapse collapse${
                          openSection === "Accounts" ? " show" : ""
                        }`}
                        aria-labelledby="accordion05"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="row">
                          <div className="col-lg">
                            <Contact
                              name="Ms. Manisha Patel"
                              email="cfo@charusat.ac.in"
                              phone="+91-2697-265007"
                            />
                          </div>
                        </div>

                        <br />
                      </div>
                    </div>
                    <div className="accordion-item">
                      <div className="accordion-header" id="accordion01">
                        <button
                          className="d-flex flex-wrap justify-content-between"
                          data-bs-toggle="collapse"
                          data-bs-target="#videolist1"
                          aria-expanded="true"
                          aria-controls="videolist1"
                          onClick={() => toggleSection("Lodge")}
                        >
                          <span>Lodge Complaint</span>{" "}
                          <i
                            className={`icofont-square-${
                              openSection === "Lodge" ? "up" : "down"
                            }`}
                          ></i>
                        </button>
                      </div>
                      <div
                        id="videolist1"
                        className={`accordion-collapse collapse${
                          openSection === "Lodge" ? " show" : ""
                        }`}
                        aria-labelledby="accordion01"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="row">
                          <div className="col-lg-8">
                            <br />
                            <p>
                              CHARUSAT believes in the principles of Honesty,
                              Integrity and Transparency. The University aims to
                              provide a harmonic environment to all the
                              students, employees, associates and stakeholders.
                              To facilitate these, various cells at University
                              are established like Grievance Redressal Cell,
                              Equal Opportunity Cell, Women Development Cell,
                              Cell for Prevention of Sexual Harassment and
                              Anti-Ragging Cell. Any stakeholder who finds any
                              discrepancy under the aegis of different cells can
                              use this E-box to register a complaint and
                              University will take further actions to resolve
                              the problem.
                            </p>
                            <a
                              className="lab-btn"
                              href="https://charusat.ac.in/cms/"
                            >
                              <span>Complaint Registration System</span>
                            </a>
                          </div>
                          <br />
                          <br />
                          <Contact
                            name="Dr. Vijay Panchal"
                            email="vijaypanchal.cv@charusat.ac.in"
                            phone="+91-2697-265081"
                          />
                        </div>
                        <br />
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
  );
};

export default ContactUs;
