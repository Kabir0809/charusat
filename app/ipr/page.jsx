"use client";
import { Fragment } from "react";
import Link from "next/link";
import Contact from "@/components/section/contact";
import InquiryForm from "@/components/files/InquiryForm.pdf";
import Iprlogo from "@/public/assets/images/ipr-cell.png";
import Iprqr from "@/public/assets/images/ipr-cell-qr.png";

const IPR = () => {
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
                            <h3>CHARUSAT IPR Facilitation Cell</h3>
                            <hr />

                            <div className="meta-post">
                              <p>
                                CHARUSAT IPR Facilitation provides services to
                                all the innovators to protect intellectual
                                property. It offers this facility to innovators,
                                researchers, faculties, students and grassroots
                                innovators within and outside CHARUSAT.
                              </p>
                              <p>
                                CHARUSAT with well laden IPR policy encourages
                                and empowers every stakeholder to constantly
                                strive through the innovation and creativity.{" "}
                              </p>
                              <p>
                                By employing the legal IP support through the
                                on-board Patent Agent and IPR Experts, CHARUSAT
                                has adopted a “ZERO-IPR Burden” strategy for the
                                inventors and faculties.{" "}
                              </p>
                              <p>
                                This, along with the generous financial support
                                has created a concrete foundation of innovation,
                                creativity and Intellectual property across the
                                university.{" "}
                              </p>
                              <div className="container">
                                <div className="row">
                                  <div className="col-lg-3">
                                    <img
                                      src="/assets/images/ipr-cell.png"
                                      height="300"
                                      width="300"
                                    />
                                  </div>
                                  <div className="col-lg-6">
                                    <p>
                                      <b>
                                        <u>Patent Practices in Research</u>
                                      </b>
                                      <br />
                                      is a unique initiative to impart basic
                                      acquaintance of IPR across the university.
                                      The course is offered for free and
                                      accessible throughout the year for
                                      CHARUSAT student, researchers, and
                                      faculties.{" "}
                                    </p>
                                  </div>
                                  <div className="col-lg-3">
                                    <img
                                      src="/assets/images/ipr-cell-qr.png"
                                      height="300"
                                      width="300"
                                    />
                                  </div>
                                </div>
                                <br />
                              </div>
                              <Link
                                className="lab-btn btn111"
                                target="_blank"
                                href="https://drive.google.com/file/d/1tup8KVU1ZBT7CPpxaPQmped46O0by3HL/view?usp=sharing"
                              >
                                <span>Brochure</span>
                              </Link>
                              &nbsp;&nbsp;
                              <Link
                                className="lab-btn btn111"
                                href={InquiryForm}
                                target="_blank"
                              >
                                <span>Inquiry Form</span>
                              </Link>
                            </div>
                            <br />
                            <h4>
                              Unique Features of CHARUSAT IPR Facilitation
                            </h4>
                            <hr />
                            <ul>
                              <li>
                                {/* {/* <i className="icofont-tick-mark"></i> */}{" "}
                                <strong>
                                  Onsite Pool of Technical experts
                                </strong>{" "}
                                - Being a university, we have the availability
                                of technical expertise in various fields like
                                pharmaceutical, electrical, electronics,
                                mechanical, civil, computer, etc. in one place.
                                You can get advice and guidance regarding your
                                idea.
                              </li>
                              <li>
                                {/* {/* <i className="icofont-tick-mark"></i> */}{" "}
                                <strong>
                                  Availability of Sophisticated Technology
                                </strong>{" "}
                                - CHARUSAT is equipped with state-of-art
                                infrastructure, machines, and sophisticated
                                equipment. You may avail of all of these
                                facilities in one place to update and upgrade
                                your innovations.
                              </li>
                              <li>
                                {/* {/* <i className="icofont-tick-mark"></i> */}{" "}
                                <strong>Onsite IPR Experts</strong> - CHARUSAT
                                IPR Facilitation is equipped with the experts
                                having rich experience in intellectual property
                                rights. We have the availability of registered
                                patent agents for any of your techno-legal
                                queries.
                              </li>
                              <li>
                                {/* {/* <i className="icofont-tick-mark"></i> */}{" "}
                                <strong>Cost-Effective</strong> - Minimal
                                overheads result in lesser charges than
                                professional firms. At CHARUSAT IPR Facilitation
                                you may avail IPR services at assured low
                                charges than other professional IP Firms.
                              </li>
                              <li>
                                {/* {/* <i className="icofont-tick-mark"></i> */}{" "}
                                <strong>Diligence and Expertise</strong> - An
                                “A+” grade university gives a satisfactory and
                                trustworthy output in work. The honesty,
                                integrity and transparency are fundamental
                                values of CHARUSAT. One can avail of the
                                dedicated and worthy IPR services with utmost
                                work ethics and client satisfaction.
                              </li>
                            </ul>
                            <br />
                            <h4>
                              Activities of CHARUSAT IPR Facilitation Cell
                            </h4>
                            <hr />
                            <ul>
                              <li>
                                {/* {/* <i className="icofont-tick-mark"></i> */}{" "}
                                <strong>
                                  Creating IPR Awareness among Students,
                                  Faculties and Researchers
                                </strong>{" "}
                              </li>
                              <li>
                                {/* {/* <i className="icofont-tick-mark"></i> */}{" "}
                                <strong>
                                  Provide IPR related support (Patent Drafting,
                                  Filing and other Prosecution Related Tasks)
                                </strong>{" "}
                              </li>
                              <li>
                                {/* {/* <i className="icofont-tick-mark"></i> */}{" "}
                                <strong>
                                  Technology Transfer and Commercialization of
                                  Intellectual Property of the University
                                </strong>{" "}
                              </li>
                            </ul>
                            <br />
                            <h4>Facilities @ CHARUSAT IPR Facilitation</h4>
                            <hr />
                            <ul>
                              <li>
                                {" "}
                                <strong
                                  style={{
                                    fontSize: "1.2rem",
                                  }}
                                >
                                  Patent
                                </strong>{" "}
                                <br />
                                <br />
                                <ul>
                                  {/* {/* <i className="icofont-tick-mark"></i> */}{" "}
                                  <li>
                                    <strong>Prior Art Search</strong> -
                                    Patentability search for the novelty of
                                    invention in various databases including
                                    patent and non-patent literature.
                                    <br />
                                    <br />
                                    {/* {/* <i className="icofont-tick-mark"></i> */}{" "}
                                  </li>
                                  <li>
                                    <strong>Patent Landscape Analysis</strong> -
                                    It is a comprehensive report of the
                                    state-of-art search for the relevant
                                    technology with client customization.
                                    <br />
                                    <br />
                                  </li>
                                  <li>
                                    {/* {/* <i className="icofont-tick-mark"></i> */}{" "}
                                    <strong>Freedom to Operate Search</strong> -
                                    A Freedom to Operate (FTO) analysis
                                    invariably begins by searching patent
                                    literature for issued or pending patents and
                                    obtaining a legal opinion as to whether a
                                    product, process or service may be
                                    considered to infringe any patent(s) owned
                                    by others. <br />
                                    <br />
                                    {/* {/* <i className="icofont-tick-mark"></i> */}{" "}
                                  </li>
                                  <li>
                                    <strong>Patent Drafting</strong> -
                                    Techno-legal drafting of complete
                                    specification with claims. <br />
                                    <br />
                                  </li>
                                  <li>
                                    {/* {/* <i className="icofont-tick-mark"></i> */}{" "}
                                    <strong>Patent Filing</strong> - Preparation
                                    and submission of Patent Application at
                                    Indian Patent Office. <br />
                                    <br />
                                  </li>
                                  <li>
                                    {/* {/* <i className="icofont-tick-mark"></i> */}{" "}
                                    <strong>PCT Application</strong> -
                                    Preparation and submission of PCT
                                    Application for foreign filing. <br />
                                    <br />
                                  </li>
                                  <li>
                                    {/* {/* <i className="icofont-tick-mark"></i> */}{" "}
                                    <strong>First Examination Report</strong> -
                                    (FER) To construe the FER for
                                    inventor/applicant and prepare the best
                                    response to FER
                                    <br />
                                    <br />
                                  </li>
                                  <li>
                                    {/* {/* <i className="icofont-tick-mark"></i> */}{" "}
                                    <strong>
                                      Communication and hearing with IPO/IPAB
                                    </strong>{" "}
                                    - To provide legal support for hearing at
                                    the Intellectual Property Appellate Board.
                                  </li>
                                </ul>
                              </li>

                              <br />
                              <li>
                                {" "}
                                <strong style={{ fontSize: "1.2rem" }}>
                                  Copyright
                                </strong>
                                <br />
                                <br />
                                <ul>
                                  <li>
                                    {/* {/* <i className="icofont-tick-mark"></i> */}{" "}
                                    <strong>Software </strong>
                                    Copyright filing at the Indian Copyright
                                    Office for software related innovation.
                                    <br />
                                    <br />
                                  </li>
                                  <li>
                                    {/* {/* <i className="icofont-tick-mark"></i> */}{" "}
                                    <strong>Literature and art </strong>
                                    Copyright filing at the Indian Copyright
                                    Office for literature and art-related
                                    innovation.
                                  </li>
                                </ul>
                              </li>
                              <br />

                              <li>
                                <strong
                                  style={{
                                    fontSize: "1.2rem",
                                  }}
                                >
                                  Trademark
                                </strong>{" "}
                                <br />
                                <br />
                                <ul>
                                  <li>
                                    {/* {/* <i className="icofont-tick-mark"></i> */}{" "}
                                    Registration of Trademark at the Trademark
                                    office
                                  </li>
                                </ul>
                              </li>
                              <br />
                              <li>
                                <strong
                                  style={{
                                    fontSize: "1.2rem",
                                  }}
                                >
                                  Industrial Design
                                </strong>
                                <br />
                                <br />
                                <ul>
                                  <li>
                                    {/* {/* <i className="icofont-tick-mark"></i> */}{" "}
                                    <strong>Design Search </strong>
                                    Search for anticipation/existence of similar
                                    design before application.
                                    <br />
                                    <br />
                                  </li>
                                  <li>
                                    {/* {/* <i className="icofont-tick-mark"></i> */}{" "}
                                    <strong>Design Registration </strong>
                                    Preparation of documents and application for
                                    the Indian Patent Office. idea.
                                  </li>
                                </ul>
                              </li>
                            </ul>
                            <h4>CHARUSAT IPR Portfolio</h4>
                            <hr />
                            <div style={{ overflowX: "auto" }}>
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>Title</th>
                                    <th>Total</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Patent</td>
                                    <td>40</td>
                                  </tr>
                                  <tr>
                                    <td>Industrial Design</td>
                                    <td>5</td>
                                  </tr>
                                  <tr>
                                    <td>Copyright</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>Trademark</td>
                                    <td>4</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <Contact
              name="Dr Swayamprakash Patel"
              email="swayamprakash.patel@charusat.ac.in"
              phone="+91-8780034097"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default IPR;
