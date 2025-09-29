"use client";

import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import pawandeep from "@/public/assets/images/People/eminent-speaker/pawandeep.webp";
import arunita from "@/public/assets/images/People/eminent-speaker/arunita.webp";
import jayVasavada from "@/public/assets/images/People/eminent-speaker/jay_vasavada.webp";
import anandKumar from "@/public/assets/images/People/eminent-speaker/anand_kumar.webp";
import inaguration from "@/public/assets/images/People/eminent-speaker/inauguration.webp";
import rjAakash from "@/public/assets/images/People/eminent-speaker/rj_aakash.webp";
import acharyaGnannayanSwami from "@/public/assets/images/People/eminent-speaker/acharya_gnannayan_swami.webp";

const EminentSpeakerPage = () => {
  return (
    <div className="blog-section padding-tb section-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="post-item style-2">
              <div className="post-inner">
                <div className="post-content">
                  <Container fluid>
                    <Row>
                      <Col md={12} className="mb-0">
                        <h1
                          className="text-center mb-4 h1 text-white fw-bold
                              "
                          style={{
                            backgroundColor: "#ff4d00",
                            padding: "10px", // Adding padding to make the gradient visible
                          }}
                        >
                          {" "}
                          Eminent Speaker Series
                        </h1>
                      </Col>
                    </Row>

                    <Row>
                      <center>
                        <h4 className="mb-3">28 - 29 April 2024</h4>
                        <Link
                          href="https://forms.gle/HsZNaS4Qxi4YPAau7"
                          target="_blank"
                          className="btn btn-info text-white"
                          style={{
                            backgroundColor: "#FF4500",
                            fontSize: "1rem",
                          }}
                        >
                          {" "}
                          Register Here{" "}
                        </Link>
                        <br />
                        <br />
                      </center>

                      <div className="container">
                        <div className="row">
                          <div className="col-xl-12">
                            <div className="card mb-4 p-2">
                              <div className="card-body">
                                <div className="event-content">
                                  <div className="timeline-date text-center rounded float-end p-3 mb-2 bg-primary text-white">
                                    <h4 className="mb-0 h3 fs-17 text-white">
                                      28
                                    </h4>
                                    <p className="mb-0 text-white">April</p>
                                  </div>
                                  <div className="timeline-text">
                                    <Container>
                                      <Row className="d-flex justify-content-center">
                                        <Col>
                                          <b className="text-danger">
                                            11:00 AM{" "}
                                          </b>
                                          <h3 className="fs-17">
                                            Jay Vasavada
                                          </h3>
                                          <Image
                                            className="img-thumbnail"
                                            src={jayVasavada}
                                            alt="Arunita"
                                            width={200}
                                            height={200}
                                          />
                                        </Col>
                                        <Col>
                                          <b className="text-danger">
                                            06:00 PM
                                          </b>
                                          <h3 className="fs-17">Anand Kumar</h3>

                                          <Image
                                            className="img-thumbnail"
                                            src={anandKumar}
                                            alt="Arunita"
                                            width={200}
                                            height={200}
                                          />
                                        </Col>
                                      </Row>
                                    </Container>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="card mb-4 p-2">
                              <div className="card-body">
                                <div className="event-content">
                                  <div className="timeline-date text-center rounded float-end p-3 mb-2 bg-primary text-white">
                                    <h4 className="mb-0 text-danger h3 fs-17 text-white">
                                      29
                                    </h4>
                                    <p className="mb-0 text-white">April</p>
                                  </div>
                                  <div className="timeline-text">
                                    <Container>
                                      <Row className="d-flex justify-content-center">
                                        <Col>
                                          <b className="text-danger">
                                            04:00 PM{" "}
                                          </b>
                                          <h3 className="fs-17">RJ Akash</h3>
                                          <Image
                                            className="img-thumbnail"
                                            src={rjAakash}
                                            alt="Arunita"
                                            width={200}
                                            height={200}
                                          />
                                        </Col>
                                        <Col>
                                          <b className="text-danger">
                                            05:00 PM
                                          </b>
                                          <h3 className="fs-17">
                                            Acharya Gnannayan Swami
                                          </h3>

                                          <Image
                                            className="img-thumbnail"
                                            src={acharyaGnannayanSwami}
                                            alt="Arunita"
                                            width={200}
                                            height={200}
                                          />
                                        </Col>
                                      </Row>
                                    </Container>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EminentSpeakerPage;
