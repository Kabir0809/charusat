"use client";
import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import Contact from "@/components/section/contact";
import dst from "@/public/assets/images/grants/dst.png";
import icssr from "@/public/assets/images/grants/icssr.png";
import gujcost from "@/public/assets/images/grants/gujcost.jpg";
import gsbtm from "@/public/assets/images/grants/gsbtm.png";
import ssip from "@/public/assets/images/grants/ssip.png";
import icmr from "@/public/assets/images/grants/icmr.jpg";
import csir from "@/public/assets/images/grants/csir.jpg";
import serb from "@/public/assets/images/grants/serb-india.png";
import isro from "@/public/assets/images/grants/isro.png";
import tnai from "@/public/assets/images/grants/tnai.jpg";
import grantslist from "@/public/assets/files/Research/grants.pdf";

const grants = () => {
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
                              <center>Project/Research Grants</center>
                            </h3>
                            <hr />

                            <div className="meta-post">
                              <p>CHARUSAT is DST PURSE Supported University.</p>
                              <p>
                                Support of 8.51 Crores has been sanctioned in
                                August 2023
                              </p>
                              {/* <p>CHARUSAT IPR Facilitation provides services to
                                all the innovators to protect intellectual
                                property. It offers this facility to innovators,
                                researchers, faculties, students and grassroots
                                innovators within and outside CHARUSAT.</p>
                                <p>CHARUSAT with well laden IPR policy encourages and empowers every stakeholder to constantly strive through the innovation and creativity. </p>
                                <p>By employing the legal IP support through the on-board Patent Agent and IPR Experts, CHARUSAT has adopted a “ZERO-IPR Burden” strategy for the inventors and faculties. </p>
                                <p>This, along with the generous financial support has created a concrete foundation of innovation, creativity and Intellectual property across the university. </p> */}
                              <div className="row justify-content-center">
                                <div className="col-md-4 mb-4">
                                  <div className="card p-4 card-main">
                                    <div
                                      style={{
                                        textAlign: "center",
                                        background: "#0066b247",
                                        borderRadius: "10px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                      }}
                                    >
                                      <h4>Total Projects</h4>
                                      <h4>200+</h4>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                  <div className="card p-4 card-main">
                                    <Image src={dst} />
                                  </div>
                                </div>
                                <div className="col-md-4 mb-4">
                                  <div className="card p-4 card-main">
                                    <div
                                      style={{
                                        textAlign: "center",
                                        background: "#0066b247",
                                        borderRadius: "10px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                      }}
                                    >
                                      <h4>
                                        Grants Received
                                        <br />
                                        (in Cr.)
                                      </h4>
                                      <h4>40+</h4>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <br />
                              <h4>Salient Funding Agencies</h4>
                              <hr />
                              <div className="row justify-content-center">
                                <div className="col-lg-3">
                                  <Image src={icssr} height={150} width={150} />
                                </div>
                                <div className="col-lg-3">
                                  <Image
                                    src={gujcost}
                                    height={150}
                                    width={150}
                                  />
                                </div>
                                <div className="col-lg-3">
                                  <Image src={gsbtm} height={150} width={150} />
                                </div>
                                <div className="col-lg-3">
                                  <Image src={ssip} height={150} width={150} />
                                </div>
                              </div>
                              <br />
                              <div className="row justify-content-center">
                                <div className="col-lg-1"></div>
                                <div className="col-lg-2">
                                  <Image src={icmr} height={150} width={150} />
                                </div>
                                <div className="col-lg-2">
                                  <Image src={csir} height={150} width={150} />
                                </div>
                                <div className="col-lg-2">
                                  <Image src={serb} height={150} width={150} />
                                </div>
                                <div className="col-lg-2">
                                  <Image src={isro} height={150} width={150} />
                                </div>
                                <div className="col-lg-2">
                                  <Image src={tnai} height={150} width={150} />
                                </div>
                                <div className="col-lg-1"></div>
                              </div>
                              <hr />
                              <div className="row justify-content-center">
                                <div className="col-md-3 mb-4"></div>
                                <div className="col-md-6 mb-4">
                                  <div className="card p-4 card-main">
                                    <Link
                                      className="lab-btn btn111"
                                      target="_blank"
                                      href={grantslist}
                                    >
                                      <h6 className="text-center text-white h3 fw-bold">
                                        Approved Grants
                                      </h6>
                                    </Link>
                                  </div>
                                </div>
                                <div className="col-md-3 mb-4"></div>
                              </div>
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
              name="Dr Mayur Sutaria"
              email="coordinator.iqac@charusat.ac.in"
              phone="+91 2697 265037"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default grants;
