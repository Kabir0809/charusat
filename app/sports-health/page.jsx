"use client";
import { Fragment } from "react";
import Link from "next/link";
import Iframe from "react-iframe";
import Image from "next/image";
import {Container, Row, Col} from "react-bootstrap";

const SportsHealth = () => {
  return (
    <Fragment>
      <div className="blog-section p-4">
        <div className="container p-4" style={{ backgroundColor: "#fff" }}>
          <div className="row justify-content-center">
            <div className="col">
              <article>
                <div className="section-wrapper" style={{ color: "#0066b3" }}>
                <h1
                              className="text-center mb-4 h1 text-white fw-bold
                              "
                              style={{
                                backgroundColor: "#ff4d00",
                                padding: "10px", // Adding padding to make the gradient visible
                              }}
                            >
                              {" "}
                              Sports & Healthcare Facilities
                            </h1>
                            {/* <div className="container"> */}
                              <Container>
                                <Row>
  
  {/* <div className="row"> */}
    <div className="col-lg-4 col-md-6 mb-4">
      <div>
        <Image
          src="/assets/images/sports-healthcare/s1.webp"
          className="card-img-top"
          alt="Photo 1"
          width={"500"}
          height={"500"}
        />
      </div>
    </div>
    <div className="col-lg-4 col-md-6 mb-4">
      <div>
        <Image
          src="/assets/images/sports-healthcare/s2.webp"
          className="card-img-top"
          alt="Photo 2"
          width={"500"}
          height={"500"}
        />
      </div>
    </div>
    <div className="col-lg-4 col-md-6 mb-4">
      <div>
        <Image
          src="/assets/images/sports-healthcare/s3.webp"
          className="card-img-top"
          alt="Photo 3"
          width={"500"}
          height={"500"}
        />
      </div>
    </div>
    <div className="col-lg-4 col-md-6 mb-4">
      <div>
        <Image
          src="/assets/images/sports-healthcare/s4.webp"
          className="card-img-top"
          alt="Photo 4"
          width={"500"}
          height={"500"}
        />
      </div>
    </div>
    <div className="col-lg-4 col-md-6 mb-4">
      <div>
        <Image
          src="/assets/images/sports-healthcare/s5.webp"
          className="card-img-top"
          alt="Photo 5"
          width={"500"}
          height={"500"}
        />
      </div>
    </div>
    <div className="col-lg-4 col-md-6 mb-4">
      <div>
        <Image
          src="/assets/images/sports-healthcare/s6.webp"
          className="card-img-top"
          alt="Photo 6"
          width={"500"}
          height={"500"}
        />
      </div>
    </div>
    <div className="col-lg-4 col-md-6 mb-4">
      <div>
        <Image
          src="/assets/images/sports-healthcare/h1.webp"
          className="card-img-top"
          alt="Photo 7"
          width={"500"}
          height={"500"}
        />
      </div>
    </div>
    <div className="col-lg-4 col-md-6 mb-4">
      <div>
        <Image
          src="/assets/images/sports-healthcare/h2.webp"
          className="card-img-top"
          alt="Photo 7"
          width={"500"}
          height={"500"}
        />
      </div>
    </div>
    <div className="col-lg-4 col-md-6 mb-4">
      <div>
        <Image
          src="/assets/images/sports-healthcare/h3.webp"
          className="card-img-top"
          alt="Photo 7"
          width={"500"}
          height={"500"}
        />
      </div>
    </div>
    <div className="col-lg-4 col-md-6 mb-4">
      <div>
        <Image
          src="/assets/images/sports-healthcare/h4.webp"
          className="card-img-top"
          alt="Photo 7"
          width={"500"}
          height={"500"}
        />
      </div>
    </div>
    <div className="col-lg-4 col-md-6 mb-4">
      <div>
        <Image
          src="/assets/images/sports-healthcare/h5.webp"
          className="card-img-top"
          alt="Photo 7"
          width={"500"}
          height={"500"}
        />
      </div>
    </div>
    
  {/* </div> */}
  </Row>
  </Container>
{/* </div> */}

                  
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <br/>

      <style jsx>{`
        .blog-section {
          background-color: #fff9f1;
        }

        .card-main h6 {
          background-color: #fff; /* White background */
          background-image: linear-gradient(
            45deg,
            #0066b3,
            #004080
          ); /* Updated blue gradient */
          color: #fff; /* Text color */
          padding: 10px;
          border-radius: 5px;
        }

        .image-placeholder {
          height: 200px;
          background-color: #fff; /* White background */
          background-size: cover;
          background-position: center;
          margin-bottom: 20px;
          transition: transform 0.3s ease-in-out;
          width: 94%;
          transform: scale(1.05);
          margin: auto;
          margin-bottom: 10px;
          border-radius: 5px;
          margin-top: 5px;
          margin-bottom: 15px;
        }

        .card {
          width: 90%;
          margin: auto;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Box shadow */
          transition: box-shadow 0.3s ease-in-out; /* Transition effect */
        }

        .card:hover {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Shadow on hover */
        }

        .card h6 {
          color: #0066b3; /* Updated blue text color */
          background-color: #fff; /* White background */
          padding: 10px;
          border-radius: 5px;
        }
      `}</style>
    </Fragment>
  );
};

export default SportsHealth;
