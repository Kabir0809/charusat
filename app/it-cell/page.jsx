import { Fragment } from "react";

const itcell = () => {
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
                            <h3>Information Technology Cell (IT Cell)</h3>
                            <hr />
                            <br />
                            <p style={{ fontSize: "1rem" }}>
                              The E-Governance Cell is primarily responsible for
                              computerization of all academic, financial, and
                              administrative activities.
                            </p>
                            {/* <iframe
                              src="https://charusat.ac.in/files/Grievance%20Redressal%20Committee%E2%80%8B%20%E2%80%8B(GRC)%202022-24.pdf"
                              width="100%"
                              height="600"
                            ></iframe> */}
                            {/* <Iframe
                              styles={{
                                border: "1px solid #CCC",
                              }}
                              url=""
                              width="100%"
                              height="620px"
                              id=""
                              className=""
                              display="block"
                              position="relative"
                            /> */}
                            {/* <Link
                              href="/assets/files/CHARUSATRedressalCommittee-2022-24.pdf"
                              target="_blank"
                              className="btn btn-danger text-white"
                            >
                              Grievance Redressal Committee​ (GRC) - List
                            </Link> */}
                            <hr />
                            <h5>E-governance Function</h5>
                            <ul>
                              <li>General Administration</li>
                              <li>Pay Roll and Financial Accounting</li>
                              <li>Administration of Student Data</li>
                              <li>Inventory Management</li>
                              <li>Personnel Records Maintenance</li>
                              <li>E-mail Communication to staff</li>
                              <li>Student Admissions</li>
                              <li>Staff Event Participation Record</li>
                              <li>
                                All day-to-day activities of the institution
                                (General Administration)
                              </li>
                              <li>Staff administration</li>
                              <li>Single Window System for students</li>
                              <li>Course | Faculty Feedback</li>
                              <li>Student Attendance Record</li>
                              <li>Exam Administration</li>
                              {/* <a
                                style={{ color: "#007bff" }}
                                href="https://www.charusat.ac.in/documents/pdfs/grc/Grievance-Redressal-Cell.pdf"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Read More
                              </a> */}
                            </ul>
                            <hr />
                            <h5>Why E-governance?</h5>
                            <ul>
                              <li>
                                Centralized information access from anywhere
                              </li>
                              <li>Increased Transparency</li>
                              <li>Less paperwork</li>
                              <li>Quality e-services, e-participation</li>
                              <li>Improved decision making</li>
                            </ul>
                            <hr />
                            <h5>How do students benefit?</h5>
                            <ul>
                              <li>Personalized login for each Student</li>
                              <li>Access to virtual lectures and seminars</li>
                              <li>Keeping track of attendance</li>
                              <li>Information & transaction services</li>
                              <li>
                                Easy access to information: attendance, classes,
                                examination, result etc
                              </li>
                              <li>
                                Extensive saving in time, cost and efforts
                              </li>
                              <li>Course Feedback submission</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/*  */}
            <div className="col-lg-4 col-12">
              <aside>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                            {/* <Link to="/blog-single"> */}
                            {/* <h3>Contact Person</h3> */}
                            {/* </Link> */}
                            <br />
                            <div className="meta-post">
                              <ul className="lab-ul">
                                <li
                                  style={{
                                    marginBottom: "10px",
                                  }}
                                >
                                  <i className="icofont-ui-user"></i>
                                  Dr. Ritesh Patel
                                </li>
                                <li
                                  style={{
                                    marginBottom: "10px",
                                  }}
                                >
                                  <i className="icofont-email"></i>
                                  convener.itcell@charusat.ac.in
                                </li>
                                <li
                                  style={{
                                    marginBottom: "10px",
                                  }}
                                >
                                  <i className="icofont-phone"></i>
                                  +91-02697-265251
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default itcell;
