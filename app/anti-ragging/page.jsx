import { Fragment } from "react";
// import Iframe from "react-iframe";
import Link from "next/link";
const AntiRagging = () => {
  const data = [
    {
      img: "./assets/images/Anti-Ragging/1-Student-undertaking.jpg",
      title: "Student undertaking regarding non-involvement in ragging act",
    },
    {
      img: "./assets/images/Anti-Ragging/Anti-Ragging-Poster.jpg",
      title: "Anti-Ragging Campaign/Awareness Across the Campus",
    },
    {
      img: "./assets/images/Anti-Ragging/3-Surveillance-through-CCTV.jpg",
      title: "Surveillance through CCTV in the entire campus",
    },
    {
      img: "./assets/images/Anti-Ragging/4-Anti-ragging-workshop.jpg",
      title: "Anti-ragging workshops, seminars, & other activities",
    },
    {
      img: "./assets/images/Anti-Ragging/5-meetings-by-ARC.JPG",
      title:
        "Regular meetings by Anti-Ragging Committee to appraise the situation",
    },
    {
      img: "./assets/images/Anti-Ragging/6-Commencement-Celebration.JPG",
      title:
        "Commencement Celebration to make a bond between freshers and seniors",
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
                            <h3>NATIONAL RAGGING PREVENTION PROGRAMME</h3>
                            <hr />
                            <br />

                            <img
                              src="./assets/images/Anti-Ragging/ragging_img.jpg"
                              alt="Anti Ragging Committee"
                              className="img-fluid text-center"
                            />
                            <br />
                            <br />
                            <br />

                            <h5>Ragging is a CRIME</h5>
                            <p style={{ fontSize: "1rem" }}>
                              Ragging can lead to Suspension, Rustication or
                              Police arrest
                            </p>
                            <p style={{ fontSize: "1rem" }}>
                              In pursuance to the UGC guidelines, CHARUSAT has
                              constituted an Anti-Ragging Committee. The
                              Committee is committed to eliminating ragging in
                              all its forms.
                            </p>
                            <hr />
                            <h5>Mechanism</h5>
                            <p style={{ fontSize: "1rem" }}>
                              CHARUSAT has zero-tolerance towards ragging in any
                              form. Any individual who is subjected to ragging
                              by any student or any other person can report the
                              incident to the member/Convener/Chairman of
                              Anti-ragging Committee or Head of the
                              Institute/Department. The Anti-ragging Committee
                              will take prompt and appropriate action on receipt
                              of the complaint in line with the guidelines
                              issued by UGC.
                            </p>
                            <hr />
                            <h5 className="my-4">
                              Our Measures / Activities to Curb Ragging
                            </h5>
                            {/*  */}
                            <div className="row g-4 justify-content-center row-cols-xl-2 row-cols-lg-2 row-cols-md-1 row-cols-1 course-filter">
                              {/*  */}
                              {data.map((item, id) => {
                                return (
                                  <div className="col" key={id}>
                                    <div className="post-item style-2">
                                      <div className="post-inner">
                                        <div className="post-thumb">
                                          {item.img.includes(
                                            "Anti-Ragging-Poster"
                                          ) ? (
                                            <div>
                                              <br />
                                              <p>&nbsp;</p>
                                            </div>
                                          ) : null}
                                          <img
                                            src={item.img}
                                            alt="Anti Ragging Committee"
                                            className="img-fluid"
                                          />
                                          {item.img.includes(
                                            "Anti-Ragging-Poster"
                                          ) ? (
                                            <div className="mt-2">
                                              <br />
                                              <br />
                                            </div>
                                          ) : null}
                                        </div>
                                        <div className="post-content">
                                          <p style={{ fontSize: "1rem" }}>
                                            {item.title}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                            <br />
                            <hr />
                            <br />
                            <h5>
                              CHARUSAT AIMS TO OFFER A SAFE LEARNING ENVIRONMENT
                              FOR ALL STUDENTS
                            </h5>
                            <ul className="lab-ul">
                              {/* <li>
                                <i className="icofont-tick-mark"></i>{" "}
                                <a
                                  style={{
                                    color: "#0066b3",
                                  }}
                                  href="./documents/pdfs/anti-ragging/anti-ragging-committee-2024.pdf"
                                  target="_blank"
                                >
                                  Anti-Ragging Committee (ARC)
                                </a>
                              </li> */}
                              <i className="icofont-tick-mark"></i> Familiarize
                              yourself with the most up-to-date information on
                              {[
                                {
                                  name: "UGC Anti-Ragging Policy",
                                  link: "https://www.ugc.ac.in/oldpdf/ragging/gazzetaug2010.pdf",
                                },
                                {
                                  name: "UGC Ragging Related Circulars",
                                  link: "https://www.ugc.ac.in/page/Ragging-Related-Circulars.aspx",
                                },
                              ].map((item, id) => (
                                <li key={id} style={{ paddingLeft: "20px" }}>
                                  <a
                                    style={{
                                      color: "#0066b3",
                                    }}
                                    href={item.link}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    -&nbsp; {item.name}
                                  </a>
                                </li>
                              ))}
                              <li>
                                <i className="icofont-tick-mark"></i> Understand
                                the student -{" "}
                                <a
                                  style={{
                                    color: "#0066b3",
                                  }}
                                  href="./assets/files/Anti-Ragging/student_guidelines_ARC_2024.pdf"
                                  target="_blank"
                                >
                                  Guidelines
                                </a>
                              </li>
                              <li>
                                <i className="icofont-tick-mark"></i>
                                Contact for Help -{" "}
                                <a
                                  style={{
                                    color: "#0066b3",
                                  }}
                                  href="https://www.ugc.gov.in/Bureaus/bureaus_details?EwV4Rtmy2xJ7nuhP3MYqbpwm5MTBRSa5u2ipRdltuUxMTUu1gSiipessUFP0rnrG"
                                  target="_blank"
                                >
                                  Helpline
                                </a>
                              </li>
                              <li>
                                <i className="icofont-tick-mark"></i>
                                <Link
                                  href="./anti-ragging-week-events"
                                  style={{
                                    color: "#0066b3",
                                  }}
                                >
                                  Anti-Ragging Week Activities
                                </Link>
                              </li>
                            </ul>
                            <br />
                            <img
                              style={{
                                margin: "auto",
                              }}
                              src="./assets/images/Anti-Ragging/tollfree-ARC.JPG"
                              alt="Anti Ragging Committee"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <div className="col-lg-4 col-12">
              <aside>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                            <h5>National Anti-Ragging Helpline</h5>
                            <br />
                            <div className="meta-post">
                              <ul className="lab-ul">
                                <li
                                  style={{
                                    marginBottom: "10px",
                                  }}
                                >
                                  24X7 Toll-Free
                                </li>
                                <li
                                  style={{
                                    marginBottom: "10px",
                                  }}
                                >
                                  <i className="icofont-phone"></i>
                                  1800-180-5522
                                </li>
                                <li
                                  style={{
                                    marginBottom: "10px",
                                  }}
                                >
                                  <i className="icofont-email"></i>
                                  helpline@antiragging.in
                                  <br />
                                  <i className="icofont-globe"></i>
                                  <Link
                                    href="https://www.antiragging.in"
                                    target="_blank"
                                  >
                                    www.antiragging.in
                                  </Link>
                                  <br />
                                </li>
                                <li
                                  style={{
                                    marginBottom: "10px",
                                  }}
                                >
                                  <br />
                                  <br />
                                  <h5>UGC Monitoring Agency</h5>
                                  <h6>Centre for Youth (C4Y)</h6>
                                  <br />
                                  <i className="icofont-email"></i>
                                  antiragging@c4yindia.org
                                  <br />
                                  <i className="icofont-globe"></i>
                                  <Link
                                    href="https://www.c4yindia.org"
                                    target="_blank"
                                  >
                                    www.c4yindia.org
                                  </Link>
                                  <br />
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
              <br />
              <aside>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                            <h5>
                              Contact Details of the Anti-Ragging Committee and
                              Squad
                            </h5>
                            <br />

                            <div className="meta-post">
                              <ul className="lab-ul">
                                <li
                                  style={{
                                    marginBottom: "10px",
                                  }}
                                >
                                  <i className="icofont-tick-mark"></i>
                                  <Link
                                    href="./documents/pdfs/anti-ragging/anti-ragging-committee-2024.pdf
                                    "
                                    style={{
                                      color: "#0066b3",
                                    }}
                                    className="text-decoration-underline"
                                  >
                                    Anti-Ragging Committee (ARC)
                                  </Link>
                                </li>
                                <li>
                                  <i className="icofont-tick-mark"></i>
                                  <Link
                                    href="./assets/files/Anti-Ragging/Anti-Ragging-Squad.pdf"
                                    style={{
                                      color: "#0066b3",
                                    }}
                                    target="_blank"
                                    className="text-decoration-underline"
                                  >
                                    Anti-Ragging Squad
                                  </Link>
                                  <br />
                                </li>

                                <li>
                                  <br />
                                  <h6>
                                    RAGGING IS A CRIMINAL OFFENCE AND THE
                                    CULPRITS WILL ATTRACT PUNITIVE ACTION AS
                                    MENTIONED IN THE UGC REGULATIONS
                                  </h6>
                                  <h6>
                                    <br />
                                    <i className="icofont-tick-mark"></i>
                                    <Link
                                      href="https://www.antiragging.in/assets/pdf/annexure/Annexure-I.pdf"
                                      target="_blank"
                                      className="text-decoration-underline"
                                      style={{
                                        color: "#0066b3",
                                      }}
                                    >
                                      Anti Ragging Annexure
                                    </Link>
                                    <br /> <br />
                                    <i className="icofont-globe"></i>
                                    <Link
                                      href="https://www.ugc.ac.in"
                                      target="_blank"
                                    >
                                      www.ugc.ac.in
                                    </Link>
                                  </h6>
                                  <br />
                                </li>
                                <li
                                  style={{
                                    marginBottom: "10px",
                                  }}
                                >
                                  <br /> <i className="icofont-ui-user"></i>
                                  Dr. Vijaykumar Chaudhary
                                </li>
                                <li
                                  style={{
                                    marginBottom: "10px",
                                  }}
                                >
                                  <i className="icofont-email"></i>
                                  vijaychaudhary.me@charusat.ac.in
                                </li>
                                <li
                                  style={{
                                    marginBottom: "10px",
                                  }}
                                >
                                  <i className="icofont-phone"></i>
                                  +91 2697265221
                                </li>
                                <li
                                  style={{
                                    marginBottom: "10px",
                                  }}
                                >
                                  <i className="icofont-phone"></i>
                                  +91 9925830781
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
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AntiRagging;
