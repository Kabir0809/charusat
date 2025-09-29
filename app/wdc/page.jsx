"use client";
import { Fragment } from "react";
import EOCcontact from "@/components/section/EOCcontact";
import { Table, Container, Button } from "react-bootstrap";
import Link from "next/link";
// import { color } from "@mui/system";
import "@/css/EOC.css";

const events = [
  {
    year: "2023-24",
    link: "https://charusat.ac.in/files/wdc/Summary%20of%20WDC%20Event%20(2023-24).pdf",
  },
  {
    year: "2022-23",
    link: "https://charusat.ac.in/files/wdc/Summary%20of%20WDC%20Event%20(2022-23).pdf",
  },
  {
    year: "2021-22",
    link: "https://charusat.ac.in/files/wdc/Summary%20of%20WDC%20Event%20(2021-22).pdf",
  },
  {
    year: "2020-21",
    link: "https://charusat.ac.in/files/wdc/Summary%20of%20WDC%20Event%20(2020-21).pdf",
  },
  {
    year: "2019-20",
    link: "https://charusat.ac.in/files/wdc/summary%20of%20WDC%20Event%20(2019-20).pdf",
  },
  {
    year: "2018-19",
    link: "https://charusat.ac.in/files/wdc/summary%20of%20WDC%20Event%20(2018-19).pdf",
  },
  {
    year: "2017-18",
    link: "https://charusat.ac.in/files/wdc/summary%20of%20WDC%20Event%20(2017-18).pdf",
  },
  {
    year: "2016-17",
    link: "https://charusat.ac.in/files/wdc/summary%20of%20WDC%20Event%20(2016-17).pdf",
  },
];

const WDC = () => {
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
                            <h3>WOMEN DEVELOPMENT CELL (WDC)</h3>
                            <hr />
                            <br />
                            <div className="meta-post">
                              <p>
                                In pursuance to the directions issued by the UGC
                                and Ministry of Human Resource Development,
                                Government of India, CHARUSAT set up the Women
                                Development Cell (WDC) in the year 2016.
                                <br />
                                <br />
                              </p>

                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>Document</th>
                                    <th>PDF Link</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>WOMEN DEVELOPMENT CELL Policy</td>
                                    <td>
                                      <a
                                        className="pdfLink"
                                        href="https://charusat.ac.in/documents/pdfs/wdc/01.Womens-Development-Cell-Policy-1.pdf"
                                        target="_blank"
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
                                  <tr>
                                    <td>
                                      WOMEN DEVELOPMENT CELL Structure
                                      (2024-2027)
                                    </td>
                                    <td>
                                      <a
                                        className="pdfLink"
                                        href="/assets/files/wdc/Reconstitution_WDC_Notification.pdf"
                                        target="_blank"
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
                                  {/* <tr>
          <td>Woman&apos;s Development Cell Circular</td>
          <td>
            <a className="pdfLink" href="https://charusat.ac.in/files/wdc/Women%20Development%20Cell%20Ciruclar.pdf">
              <i className="icofont-file-pdf" style={{ fontSize: '22px',color:"red"  }}></i>
            </a>
          </td>
        </tr>*/}
                                  <tr>
                                    <td>WDC Structure 2021-2024</td>
                                    <td>
                                      <a
                                        className="pdfLink"
                                        href="https://charusat.ac.in/files/wdc/WOMEN%20DEVELOPMENT%20CELL%20Structure_2021-2024.pdf"
                                        target="_blank"
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
                                </tbody>
                              </table>

                              <br />
                            </div>
                            <br />
                            <div className="meta-post">
                              <h4>WDC AT CHARUSAT IS COMMITTED</h4>
                              <ul>
                                <li>
                                  {/* <i className="icofont-tick-mark"></i> */}
                                  To build a gender-sensitive campus
                                </li>
                                <li>
                                  {/* <i className="icofont-tick-mark"></i> */}
                                  To nurture the strength of girl students as
                                  well as to create a sensitized environment
                                  leading to gender equality
                                </li>
                                <li>
                                  {/* <i className="icofont-tick-mark"></i> */}
                                  To conduct audit on regular basis to review
                                  safety and security measures for female
                                  employees and girl students on the University
                                  campus
                                </li>
                                <li>
                                  {/* <i className="icofont-tick-mark"></i> */}
                                  To organize awareness programmes on gender
                                  sensitization, women rights, and women
                                  empowerment
                                </li>
                                <li>
                                  {/* <i className="icofont-tick-mark"></i> */}
                                  To organize the regular counselling sessions
                                  for girl students mainly in three major areas
                                  i.e. academics, career and behavioural
                                  patterns
                                </li>
                                <li>
                                  {/* <i className="icofont-tick-mark"></i> */}
                                  To work for a congenial working environment
                                  for women employees and students
                                </li>
                                <li>
                                  {/* <i className="icofont-tick-mark"></i> */}
                                  To make women aware of their social and legal
                                  rights and thus empower them to stand against
                                  any discrimination
                                </li>
                                <li>
                                  {/* <i className="icofont-tick-mark"></i> */}
                                  To develop personality and incubate leadership
                                  quality in women leading to a fulfilling life
                                </li>
                                <li>
                                  {/* <i className="icofont-tick-mark"></i> */}
                                  To recommend measures and policies for gender
                                  parity at the university
                                </li>
                              </ul>
                            </div>
                            <br />
                            <div className="meta-post">
                              <h4>WDC EVENTS</h4>

                              <div
                                className="table-responsive"
                                style={{
                                  maxHeight: "500px",
                                  overflowY: "auto",
                                }}
                              >
                                <Table striped hover className="table-blue">
                                  <thead className="table-primary">
                                    <tr>
                                      <th>Year</th>
                                      <th>Summary</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {events.map((event, index) => (
                                      <tr key={index}>
                                        <td>{event.year}</td>
                                        <td>
                                          <Link
                                            href={event.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            variant="primary"
                                            size="sm"
                                            className="btn btn-sm"
                                          >
                                            View PDF &nbsp;
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
                                  </tbody>
                                </Table>
                              </div>

                              {/* <div>
                                <a
                                  className="pdfLink"
                                  href="https://charusat.ac.in/files/wdc/Summary%20of%20WDC%20Event%20(2020-21).pdf"
                                >
                                  {" "}
                                  summary of WDC Event ( 2020-21)
                                  <i
                                    className="icofont-file-pdf"
                                    style={{ fontSize: "22px" }}
                                  ></i>{" "}
                                </a>
                                <br />

                                <a
                                  className="pdfLink"
                                  href="https://charusat.ac.in/files/wdc/summary%20of%20WDC%20Event%20(2019-20).pdf"
                                >
                                  {" "}
                                  summary of WDC Event ( 2019-20)
                                  <i
                                    className="icofont-file-pdf"
                                    style={{ fontSize: "22px" }}
                                  ></i>{" "}
                                </a>
                                <br />
                                <a
                                  className="pdfLink"
                                  href="https://charusat.ac.in/files/wdc/summary%20of%20WDC%20Event%20(2018-19).pdf"
                                >
                                  {" "}
                                  summary of WDC Event ( 2018-19)
                                  <i
                                    className="icofont-file-pdf"
                                    style={{ fontSize: "22px" }}
                                  ></i>{" "}
                                </a>
                                <br />
                                <a
                                  className="pdfLink"
                                  href="https://charusat.ac.in/files/wdc/summary%20of%20WDC%20Event%20(2017-18).pdf"
                                >
                                  {" "}
                                  summary of WDC Event ( 2017-18)
                                  <i
                                    className="icofont-file-pdf"
                                    style={{ fontSize: "22px" }}
                                  ></i>{" "}
                                </a>
                                <br />
                                <a
                                  className="pdfLink"
                                  href="https://charusat.ac.in/files/wdc/summary%20of%20WDC%20Event%20(2016-17).pdf"
                                >
                                  {" "}
                                  summary of WDC Event ( 2016-17)
                                  <i
                                    className="icofont-file-pdf"
                                    style={{ fontSize: "22px" }}
                                  ></i>{" "}
                                </a>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            {/* <EOCcontact
              name="Dr. Gayatri Dave"
              email="gayatridave.bt@charusat.ac.in"
            />
            <br />
            <i className="icofont-phone"></i>
            (O) 02697-265197 */}

            <div className="col-lg-4 col-12">
              <aside>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2 ">
                        <div className="post-inner">
                          <div className="post-content">
                            {/* <h3>Dr. Gayatri Dave</h3> */}
                            <div className="meta-post">
                              <div>
                                <br />
                                <i className="icofont-ui-user"></i>
                                &nbsp;Dr. Gayatri Dave
                                <br />
                                <br />
                                <i className="icofont-email"></i>
                                &nbsp;gayatridave.bt@charusat.ac.in <br />
                                <br />
                                <i className="icofont-phone"></i>
                                &nbsp;(O) 02697-265197
                              </div>
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

export default WDC;
