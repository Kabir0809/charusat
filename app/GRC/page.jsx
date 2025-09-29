import { Fragment } from "react";
import Link from "next/link";

const GRC = () => {
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
                            <h3>Student Grievance Redressal Cell (SGRC)</h3>
                            <hr />
                            <br />
                            <p style={{ fontSize: "1rem" }}>
                              {/* Vide the letter issued by the University Grant
                              Commission – New Delhi, dated June 18, 2013 – D.O.
                              No. 14-4/2012(CPP-II) regarding the establishment
                              of a Grievance Redressal Cell in the University
                              under the University Grants Commission (Grievance
                              Redressal Regulation, 2012), Provost, CHARUSAT has
                              constituted the Committee as under: */}
                              In line of the guidelines issued by the University
                              Grant Commissions (Redressal of Grievances of
                              Students) Regulations, 2023, the university has
                              outlined mechanism for redressal of grievances of
                              students.
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
                            &nbsp;&nbsp;
                            <Link
                              href="/cms"
                              target="_blank"
                              className="btn btn-lg btn-danger text-white"
                            >
                              Register Your Complaint
                            </Link>
                            <hr />
                            <ol>
                              <li>
                                Guidelines for Student Grievance Redressal Cell
                                &nbsp;&nbsp;{" "}
                                <Link
                                  href="assets/files/GRC/Guidelines for Student Grievance Redressal Cell.pdf"
                                  target="_blank"
                                  className="btn btn-sm btn-primary text-white mt-2"
                                >
                                  Notification
                                </Link>
                              </li>
                              <li>
                                Institute level Student Grievance Cell
                                <ul>
                                  <li>
                                    Chandubhai S Patel Institute of Technology
                                    (CSPIT)&nbsp;&nbsp;{" "}
                                    <Link
                                      href="assets/files/GRC/CSPIT.pdf"
                                      target="_blank"
                                      className="btn btn-sm btn-primary text-white mt-2"
                                    >
                                      Notification
                                    </Link>
                                  </li>
                                  <li>
                                    Devang Patel Institute of Advance Technology
                                    and Research (DEPSTAR)&nbsp;&nbsp;{" "}
                                    <Link
                                      href="assets/files/GRC/DEPSTAR.pdf"
                                      target="_blank"
                                      className="btn btn-sm btn-primary text-white mt-2"
                                    >
                                      Notification
                                    </Link>
                                  </li>

                                  <li>
                                    P D Patel Institute of Applied Sciences
                                    (PDPIAS)&nbsp;&nbsp;{" "}
                                    <Link
                                      href="assets/files/GRC/PDPIAS.pdf"
                                      target="_blank"
                                      className="btn btn-sm btn-primary text-white mt-2"
                                    >
                                      Notification
                                    </Link>
                                  </li>

                                  <li>
                                    Ramanbhai Patel College of Pharmacy
                                    (RPCP)&nbsp;&nbsp;{" "}
                                    <Link
                                      href="assets/files/GRC/RPCP.pdf"
                                      target="_blank"
                                      className="btn btn-sm btn-primary text-white mt-2"
                                    >
                                      Notification
                                    </Link>
                                  </li>

                                  <li>
                                    Smt. Chandaben Mohanbhai Patel Institute of
                                    Computer Applications (CMPICA)&nbsp;&nbsp;{" "}
                                    <Link
                                      href="assets/files/GRC/CMPICA.pdf"
                                      target="_blank"
                                      className="btn btn-sm btn-primary text-white mt-2"
                                    >
                                      Notification
                                    </Link>
                                  </li>

                                  <li>
                                    Indukaka Ipcowala Institute of Management
                                    (IIIM)&nbsp;&nbsp;{" "}
                                    <Link
                                      href="assets/files/GRC/IIIM.pdf"
                                      target="_blank"
                                      className="btn btn-sm btn-primary text-white mt-2"
                                    >
                                      Notification
                                    </Link>
                                  </li>
                                  <li>
                                    Ashok & Rita Patel Institute of
                                    Physiotherapy (ARIP)&nbsp;&nbsp;{" "}
                                    <Link
                                      href="assets/files/GRC/ARIP.pdf"
                                      target="_blank"
                                      className="btn btn-sm btn-primary text-white mt-2"
                                    >
                                      Notification
                                    </Link>
                                  </li>
                                  <li>
                                    Manikaka Topawala Institute of Nursing
                                    (MTIN)&nbsp;&nbsp;{" "}
                                    <Link
                                      href="assets/files/GRC/MTIN.pdf"
                                      target="_blank"
                                      className="btn btn-sm btn-primary text-white mt-2"
                                    >
                                      Notification
                                    </Link>
                                  </li>
                                  <li>
                                    Bapubhai Desaibhai Patel Institute of
                                    Paramedical Sciences (BDPIPS)&nbsp;&nbsp;{" "}
                                    <Link
                                      href="assets/files/GRC/BDPIPS.pdf"
                                      target="_blank"
                                      className="btn btn-sm btn-primary text-white mt-2"
                                    >
                                      Notification
                                    </Link>
                                  </li>
                                </ul>
                              </li>
                              {/* <li>
                                Any person aggrieved by the decision of the
                                Grievance Redressal Committee may within a
                                period of six days prefer an appeal to the
                                Provost.
                              </li>
                              <a
                                style={{ color: "#007bff" }}
                                href="./assets/files/GRC/Grievance-Redressal-Cell.pdf"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Read More
                              </a> */}
                              <li>
                                Appointment of Ombudsperson &nbsp;&nbsp;
                                <Link
                                  href="assets/files/GRC/Appt. of Ombudsperson.pdf"
                                  target="_blank"
                                  className="btn btn-sm btn-primary text-white mt-2"
                                >
                                  Notification
                                </Link>{" "}
                              </li>
                            </ol>
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
                                  Mr. Mukesh Yadav <br />
                                  <i className="icofont-ui-office"></i>Nodal
                                  Officer, SGRC
                                </li>
                                <li
                                  style={{
                                    marginBottom: "10px",
                                  }}
                                >
                                  <i className="icofont-email"></i>
                                  Nodalofficergrc@charusat.ac.in
                                  <br />
                                  <i className="icofont-phone"></i>
                                  (o) 02697 - 265029
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

export default GRC;
