"use client";
import { Fragment } from "react";
import { Container, Row, Col, Image, Table } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import PageHeader from "../component/layout/pageheader";
import Contact from "@/components/section/contact";
// import InquiryForm from "../files/InquiryForm.pdf";
// import IPRBroucher from "../files/iprBrochuer.jpg";
// import { Helmet } from "react-helmet";
// import Head from "next/head";
const Hostels = () => {
  return (
    <Fragment>
      <title>Hostels</title>
      <meta httpEquiv="Content-Type" content=" text/html; charset=utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Career " />
      <meta name="keywords" content="" />
      <meta name="robots" content="index" />
      <meta name="robots" content="follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="google" content="translate" />
      <meta name="google" content="nopagereadaloud" />
      <meta property="og:type" content="homepage" />
      <meta property="og:title" content="CSPIT Homepage" />
      <meta
        property="og:description"
        content="CSPIT - best engineering college to study in Gujarat."
      />
      <meta name="author" content="CHARUSAT Web Team" />

      {/* <PageHeader title={'4 Results found for: Business'} curPage={'Search Result'} /> */}
      <div className="blog-section padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                            <h3>Girls&apos; Hostels</h3>
                            <hr />
                            <br />
                            <div>
                              <h5>Life @ Girls Hostel - CHARUSAT</h5>
                              <Container>
                              <Row>
                              <div className="col-lg-6 col-md-6 mb-6">
                                <div>
                                <Image
                                  src="./assets/images/girls_hostel_life/h1.webp"
                                  thumbnail
          alt="Photo 7"
          width={"500"}
          height={"500"}
          className="gallery-image"
                                /></div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-6">
                                <div>
                                <Image
                                  src="./assets/images/girls_hostel_life/h2.webp"
                                  thumbnail
          alt="Photo 7"
          width={"500"}
          height={"500"}
            className="gallery-image"
                                /></div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-6">
                                <div>
                                <Image
                                  src="./assets/images/girls_hostel_life/h3.webp"
                                  thumbnail
          alt="Photo 7"
          width={"500"}
          height={"500"}  className="gallery-image"
                                /></div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-6">
                                <div>
                                <Image
                                  src="./assets/images/girls_hostel_life/h4.webp"
                                  thumbnail
          alt="Photo 7"
          width={"500"}
          height={"500"}
            className="gallery-image"
                                /></div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-6">
                                <div>
                                <Image
                                  src="./assets/images/girls_hostel_life/h5.webp"
                                  thumbnail
          alt="Photo 7"
          width={"500"}
          height={"500"}
            className="gallery-image"
                                /></div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-6">
                                <div>
                                <Image
                                  src="./assets/images/girls_hostel_life/h6.webp"
                                  thumbnail
          alt="Photo 7"
          width={"500"}
          height={"500"}
            className="gallery-image"
                                /></div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-6">
                                <div>
                                <Image
                                  src="./assets/images/girls_hostel_life/h7.webp"
                                  thumbnail
          alt="Photo 7"
          width={"500"}
          height={"500"}
            className="gallery-image"
                                /></div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-6">
                                <div>
                                <Image
                                  src="./assets/images/girls_hostel_life/h8.webp"
                                  thumbnail
          alt="Photo 7"
          width={"500"}
          height={"500"}
            className="gallery-image"
                                /></div>
                                </div>

                              </Row>
                              </Container>
                              <br />
                              <h5>Other Details</h5>
                              <Image
                              src="/assets/images/hostel-details/Girls_hostel-details.webp"
                              height={"auto"}
                              width={"auto"}
                            />
                              {/* <h5>Capacity</h5>
                              <p>
                                At CHARUSAT, we understand the importance of
                                providing safe and comfortable living
                                accommodations for our female students.
                                That&apos;s why we have four well-equipped
                                girls&apos; hostels on campus, with a total
                                housing capacity of 1100 students. Our hostels
                                offer both AC and non-AC rooms, with AC
                                accommodations available upon request. We strive
                                to provide our students with a supportive and
                                secure environment where they can focus on their
                                studies and personal growth.
                                <br />
                              </p>
                              <h5>Fee Structure</h5> */}
                              {/* <div>
                                <Table striped bordered hover>
                                  <thead>
                                    <tr>
                                      <th>Room Type</th>
                                      <th>Fees Per Year</th>
                                      <th>Fees Per Month</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>AC</td>
                                      <td> &#8377;. 40,000/-</td>
                                      <td> &#8377;. 4,500/-</td>
                                    </tr>
                                    <tr>
                                      <td>Non-AC</td>
                                      <td> &#8377;. 30,000/-</td>
                                      <td> &#8377;. 3,500/-</td>
                                    </tr>
                                    <tr>
                                      <td colSpan={3}>
                                        Above fees includes Accommodation
                                        Charges & Electricity Bills.
                                      </td>
                                    </tr>
                                  </tbody>
                                </Table>
                              </div> */}
                            </div>

                            {/* <h4>Facilities</h4>
                            <hr />
                            <p>
                              <strong>Recreational facilities:</strong>{" "}
                              Gymnasium, Badminton and Volleyball Courts, Indoor
                              sport like Table Tennis, Chess and Carom, separate
                              facilities for viewing TV and reading newspapers
                              and magazines and facilitation for celebration of
                              various days/festivals by the hostel residents.
                            </p>
                            <p>
                              <strong>Other facilities:</strong> Safe drinking
                              RO purified water, store for provisional items and
                              food, hot (through Gas Geysers and Solar water
                              heaters) and cold water, dining hall, mess, food
                              plazas, pantry, Internet and Wi-Fi facility with
                              computers, Housekeeping service and Security.
                            </p>
                            <p>
                              <strong>Students’ Care:</strong>Facilities for
                              medical emergencies. Resident rector and warden
                              look after the girl students staying in the
                              hostels.
                            </p>
                            <p>
                              <strong>Food Facility:</strong>Wholesome,
                              nutritious food is available in the mess.
                              Additionally, there are number of Food points to
                              serve the taste of young students.
                            </p> */}

                            {/* <h4>Boys' Hostel</h4>
                            <hr />
                            <p>
                              Boys’ hostels are outsourced at 8 different
                              locations within a radius of 1 km. These hostels
                              have a housing capacity for about 1200 boys. AC as
                              well Non AC accommodation is available at these
                              Hostels. Facilities available at these hostels
                              include Dining hall, Sports, reading room, TV
                              room, Wi-Fi connectivity and transport facilities
                              to the campus and back. Guest rooms are also
                              available.For further information contact Jignesh
                              Patel – 98794 38045.
                            </p> */}
                            {/* <h4> Mess Facility</h4>
                            <hr />
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Culpa quibusdam doloribus soluta, porro iure
                              deleniti hic eligendi. Obcaecati aliquid repellat
                              error explicabo minus sed doloremque quam mollitia
                              quibusdam? Architecto, molestiae.
                            </p> */}

                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* <Contact
              title="Girls Hostel Contact"
              name="Ms. Rasilaben Vala, Warden"
              email="hostel@charusat.ac.in"
              phone="+91-2697-265130 / 78638 10278"
            /> */}
          </div>
        </div>
      </div>
      {/* Boys Hostel */}
      <div
        className="blog-section section-bg"
        
      ><br/>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                            <h3>Boys&apos; Hostels</h3>
                            <hr />
                            <br />
                            <div>
                              <p>
                                Boys’ hostels are outsourced at 9 different
                                locations within a radius of 1 km. These hostels
                                have a housing capacity for about 1500 boys. AC
                                as well Non AC accommodation is available at
                                these Hostels.
                              </p>
                              <p style={{ marginBottom: "20px" }}>
                                Facilities available at these hostels include
                                Dining hall, Sports, reading room, TV room,
                                Wi-Fi connectivity and transport facilities to
                                the campus and back. Guest rooms are also
                                available.
                              </p>
                            </div>
                            <Image
                              src="/assets/images/hostel-details/Boys-hostel-details.webp"
                              height={"auto"}
                              width={"auto"}
                            />
                            {/* <h4>Boys' Hostel</h4>
                            <hr />
                            <p>
                              Boys’ hostels are outsourced at 8 different
                              locations within a radius of 1 km. These hostels
                              have a housing capacity for about 1200 boys. AC as
                              well Non AC accommodation is available at these
                              Hostels. Facilities available at these hostels
                              include Dining hall, Sports, reading room, TV
                              room, Wi-Fi connectivity and transport facilities
                              to the campus and back. Guest rooms are also
                              available.For further information contact Jignesh
                              Patel – 98794 38045.
                            </p> */}
                            {/* <h4> Mess Facility</h4>
                            <hr />
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Culpa quibusdam doloribus soluta, porro iure
                              deleniti hic eligendi. Obcaecati aliquid repellat
                              error explicabo minus sed doloremque quam mollitia
                              quibusdam? Architecto, molestiae.
                            </p> */}

                            <br />
                          </div>
                        </div><br/><br/>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            
            
            {/* <Contact
              title="Boys' Hostel Contact"
              name="Jignesh Patel"
              email="info@charusat.ac.in"
              phone="+91-98794 38045"
            /> */}
            
          </div>
        </div>
      </div>

      <style jsx>
        {
          `
          {
          :global(.gallery-image) {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius:2rem;
          padding:0.5rem;
          margin:0.5rem;
          transition: transform 0.3s ease;
        }

        .gallery-image:hover {
          transform: scale(1.2);
        }
          }
          `
        }
      </style>
    </Fragment>
  );
};

export default Hostels;
