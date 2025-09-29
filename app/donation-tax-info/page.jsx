"use client";
import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

const donation_tax_info = () => {
  return (
    <Fragment>
      <div className="blog-section p-4">
        <div className="container p-4" style={{ backgroundColor: "#fff" }}>
          <div className="row justify-content-center">
            <div className="col">
              <article>
                <div className="section-wrapper" style={{ color: "#0066b3" }}>
                  {/* <p className="text-center mb-4 h1 fw-bold">
                    CHARUSAT CAMPUS LIFE
                  </p> */}
                  <h1
                    className="text-center mb-4 h1 text-white fw-bold
                              "
                    style={{
                      backgroundColor: "#ff4d00",
                      padding: "10px", // Adding padding to make the gradient visible
                    }}
                  >
                    {" "}
                    CHARUSAT Donation Tax Exemption Information
                  </h1>

                  <div className="row justify-content-center">
                    <div className="col-md-6 mb-4">
                      <div className="card p-4 card-main">
                        <Link href="https://charusatuk.org.uk/en/">
                          <h6
                            className="text-center text-white h3 fw-bold"
                            style={{ fontSize: "1.2rem", padding: "15px" }}
                          >
                            Tax Exemption - UK
                          </h6>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="card p-4 card-main">
                        <Link href="/donation-tax-info/USA-donation-tax-info">
                          <h6
                            className="text-center text-white h3 fw-bold"
                            style={{ fontSize: "1.2rem", padding: "15px" }}
                          >
                            Tax Exemption - USA
                          </h6>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <br />
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

export default donation_tax_info;
