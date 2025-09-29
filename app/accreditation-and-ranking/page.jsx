"use client";
import { useState } from "react";
import Reports from "@/components/sidebar/Reports";
import Contact from "@/components/section/contact";

const Accreditation = () => {
  const [openSection, setOpenSection] = useState("Ranking");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };

  return (
    <>
      <title>Accreditation</title>
      <meta httpEquiv="Content-Type" content=" text/html; charset=utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Accreditation earned by CHARUSAT" />
      <meta
        name="keywords"
        content="NAAC Accreditation, NBA Accreditated, Accreditation, CHARUSAT Accreditated A grade by NAAC, CHARUSAT Accreditated A grade by GSIRF and KCG"
      />
      <meta name="robots" content="index" />
      <meta name="robots" content="follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="google" content="translate" />
      <meta name="google" content="nopagereadaloud" />
      <meta property="og:type" content="homepage" />
      <meta property="og:title" content="Accreditatiron Homepage" />
      <meta
        property="og:description"
        content="Accreditation - CHARUSAT accreditated with A grade by NAAC"
      />
      <meta name="author" content="CHARUSAT Web Team" />

      <div className="course-single-section padding-tb section-bg">
        <div className="container post-item style-2">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="post-inner">
                <div className="post-content">
                  <div className="main-part">
                    <div className="course-item">
                      <div className="course-inner">
                        <div className="course-content">
                          <h3>Accreditation &amp; Ranking </h3>
                          <hr />
                          <div className="accreditation-logos">
  <div className="logo-container">
    <img 
      src="/assets/images/logo/NAAC-A+.png" 
      alt="NAAC A+ Accreditation" 
      className="accreditation-logo" 
    />
  </div>
  <div className="logo-container">
    <img 
      src="/assets/images/logo/Nirf-main-logo.png" 
      alt="NIRF Ranking" 
      className="accreditation-logo" 
    />
  </div>
  <div className="logo-container">
    <img 
      src="/assets/images/logo/Center-of-excellence.png" 
      alt="Center of Excellence" 
      className="accreditation-logo" 
    />
  </div>
</div>
                          
                        </div>
                      </div>
                    </div>
                    <div className="course-video">
                      <div className="course-video-content">
                        <div className="accordion" id="accordionExample">
                          {/* Accreditation Section */}
                          <div className="accordion-item">
                            <div className="accordion-header" id="accordion01">
                              <button
                                className="d-flex flex-wrap justify-content-between"
                                data-bs-toggle="collapse"
                                data-bs-target="#videolist1"
                                aria-expanded="true"
                                aria-controls="videolist1"
                                onClick={() => toggleSection("Accreditation")}
                              >
                                <span style={{ color: "white" }}>
                                  Accreditation
                                </span>{" "}
                                <span style={{ color: "white" }}>
                                  <i
                                    className={`icofont-square-${
                                      openSection === "Accreditation"
                                        ? "up"
                                        : "down"
                                    }`}
                                  ></i>
                                </span>{" "}
                              </button>
                            </div>
                            <div
                              id="videolist1"
                              className={`accordion-collapse collapse${
                                openSection === "Accreditation" ? " show" : ""
                              }`}
                              aria-labelledby="accordion01"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="row">
                                <div className="col-lg-6">
                                <Reports id="NAAC_Cycle_2" />
                                </div>
                                <div className="col-lg-6">
                                <Reports id="NAAC_Cycle_1" />
                                </div>
                              </div>
                              <br />
                            </div>
                          </div>

                          {/* Ranking Section */}
                          <div className="accordion-item">
                            <div className="accordion-header" id="accordion02">
                              <button
                                className="d-flex flex-wrap justify-content-between"
                                onClick={() => toggleSection("Ranking")}
                              >
                                <span style={{ color: "white" }}>Ranking</span>{" "}
                                <span style={{ color: "white" }}>
                                  <i
                                    className={`icofont-square-${
                                      openSection === "Ranking" ? "up" : "down"
                                    }`}
                                  ></i>
                                </span>{" "}
                              </button>
                            </div>
                            <div
                              id="videolist2"
                              className={`accordion-collapse collapse${
                                openSection === "Ranking" ? " show" : ""
                              }`}
                              aria-labelledby="accordion02"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="row">
                                <div className="col-lg-6">
                                <Reports id="NIRF" />
                                </div>
                                <div className="col-lg-6">
                                <Reports id="GSIRF" />
                                </div>
                              </div>
                              <br />
                            </div>
                          </div>

                          {/* CoE Section */}
                          <div className="accordion-item">
                            <div className="accordion-header" id="accordion03">
                              <button
                                className="d-flex flex-wrap justify-content-between"
                                onClick={() => toggleSection("CoE")}
                              >
                                <span style={{ color: "white" }}>
                                  CoE, Government of Gujarat
                                </span>{" "}
                                <span style={{ color: "white" }}>
                                  <i
                                    className={`icofont-square-${
                                      openSection === "CoE" ? "up" : "down"
                                    }`}
                                  ></i>
                                </span>{" "}
                              </button>
                            </div>
                            <div
                              id="videolist3"
                              className={`accordion-collapse collapse${
                                openSection === "CoE" ? " show" : ""
                              }`}
                              aria-labelledby="accordion03"
                              data-bs-parent="#accordionExample"
                            >
                              <p>
                                The Government of Gujarat has granted CHARUSAT
                                the status of a Center of Excellence.
                              </p>
                              <div className="row">
                                <div className="col-lg-6">
                                <Reports id="CoE_Cycle_2" />
                                </div>
                                <div className="col-lg-6">
                                <Reports id="CoE_Cycle_1" />
                                </div>
                              </div>
                              {/* <Link
                                href="https://charusat.ac.in/files/iqac/coe/CoEApplicationData.pdf"
                                className="lab-btn"
                              >
                                <span>Application Data</span>
                              </Link>
                              
                              <Link
                                className="lab-btn btn111"
                                href={CoeCertificate}
                                target="_blank"
                              >
                                <span>COE Certificate</span>
                              </Link> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Contact
              name="Dr Mayur Sutaria"
              email="coordinator.iqac@charusat.ac.in"
              phone="+91 2697 265292"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
  .accreditation-logos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    align-items: center;
    justify-items: center;
    margin: 2rem 0;
  }

  .logo-container {
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .logo-container:hover {
    transform: translateY(-5px);
  }

  .accreditation-logo {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    .accreditation-logos {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .logo-container {
      height: 150px;
    }
  }
`}</style>
    </>
  );
};

export default Accreditation;
