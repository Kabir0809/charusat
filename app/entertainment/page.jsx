import { Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import Concert from "@/public/assets/images/Live_Concert_Pawandeep.jpg";

const Cee_workshop = () => {
  return (
    <Fragment>
      <div className="blog-section padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="post-item style-2">
                <div className="post-inner">
                  <div className="post-content">
                    <Container fluid>
                      <Row>
                        <Col md={12} className="mb-4">
                          <h1
                            className="text-center mb-4 h1 text-white fw-bold
                              "
                            style={{
                              backgroundColor: "#ff4d00",
                              padding: "10px", // Adding padding to make the gradient visible
                            }}
                          >
                            {" "}
                            Entertainment Program
                          </h1>
                        </Col>
                      </Row>

                      <Row className="justify-content-center">
                        <Col md={6} className="mb-4">
                          <div className="text-center">
                            <Image
                              src={Concert}
                              alt="Live_concert"
                              className="img-fluid rounded mb-3"
                            />
                            <Link
                              href="https://forms.gle/HsZNaS4Qxi4YPAau7"
                              target="_blank"
                              className="btn btn-info text-white"
                              style={{
                                backgroundColor: "#FF4500",
                                fontSize: "2rem",
                              }}
                            >
                              {" "}
                              Register Here{" "}
                            </Link>
                            <br />
                          </div>
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
    </Fragment>
  );
};

export default Cee_workshop;
