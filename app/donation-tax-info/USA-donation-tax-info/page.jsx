"use client";
import { Fragment } from "react";

import { Container, Row, Col, Button,Table } from "react-bootstrap";

import Image from "next/image";

const usa_tax_info = () => {
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
                              CHARUSAT Donation Tax Exemption Information -USA
                            </h1>
                            <p className="text-center mb-4 h1 fw-bold">All the US Donors who want to avail the benefits of tax exemption are requested to route their donations through</p>
                              <hr />
                            <h4>Entity</h4>
                            <p>CHARUSAT EDUCATION AND HEALTHCARE FOUNDATION INC.</p>
                            <br/>
                            <h4>Address</h4>
                            <p>22 Mariner Dr<br/>
                            Randolph NJ 07869</p>
                            <br/>
                            <h4>Contact Details</h4>
                            <p>Sharad Patel<br/>
                            phone:+1 (862)332-1607<br/>
                            email: charusattrustusa@gmail.com
                            </p>
                            <br/>
                            <h4>Bank Details</h4>
                            <p>Wells Fargo Bank N.A.<br/>
                            106 Route 10,<br/>
                            succasunna, NJ 07876
                            </p>
                            
                            <br/>
                                                       <div>
                                <Table bordered hover>
                                  <thead>
                                    <tr>
                                        <td colSpan={2}><h3>Wells Fargo Bank N.A.</h3></td>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td><b>Account Number</b></td>
                                      <td>7999101400</td>
                                    </tr>
                                    <tr>
                                      <td colSpan={2}><b>Routing Numbers</b></td>
                                      
                                    </tr>
                                    <tr>
                                      <td>Direct Deposits & Electronic Payments</td>
                                      <td>021200025</td>
                                    </tr>
                                    <tr>
                                      <td>Domestic Wire Transfers</td>
                                      <td>121000248</td>
                                    </tr>
                                    <tr>
                                      <td>International Wire Transfers</td>
                                      <td>WFBIUS6S</td>
                                    </tr>
                                  </tbody>
                                </Table>
                                <br/>
                              <h4>Official Letters</h4>
                              <br/>
                              <ul>
                                <li><p>Employer Identification Number Letter : <a href="/assets/files/donation/Employer_ID_Number_USA.pdf" className="text-danger" target="_blank" >Click here</a></p></li>
                                <li><p>Internal Revenue Service Tax Exemption Letter : <a href="/assets/files/donation/IRS_Letter_USA.pdf" className="text-danger" target="_blank" >Click here</a></p></li>
                              </ul>
                                
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

            <div className="col-lg-4 col-12">
              <aside>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                            <div className="meta-post">
                              <ul className="lab-ul">
                                <li
                                  
                                >
                                  {" "}
                                  <br />
                                  <i className="icofont-ui-user"></i>
                                  Virendrabhai Patel  +91 9409402250
                                  <br />
                                </li>
                                <li
                                  
                                >
                                  {" "}
                                  <br />
                                  <i className="icofont-ui-user"></i>
                                  Hasmukhbhai Patel  +91 9426500630
                                  <br />
                                </li>
                                <li
                                  
                                >
                                  {" "}
                                  <br />
                                  <i className="icofont-ui-user"></i>
                                  Vishnubhai Patel  +1 718 208 3199 
                                  <br />
                                </li>
                                
                                
                                
                              </ul>
                              <hr
                                style={{
                                  marginBottom: "10px",
                                }}
                              />
                              <ul className="lab-ul">
                                <li
                                  
                                >
                                  <i className="icofont-ui-user"></i>
                                  Sharad Patel<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;22 Mariner Dr<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Randolph NJ 07869
                                  <br />
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bank : Wells Fargo Bank
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

      {/* <div>
        <div className="instructor-section style-3 padding-tb section-bg-ash">
          <div className="container">
            <div className="section-header text-center">
              <h2 className="title">
                <h3>MAJOR RECRUITERS</h3>
              </h2>
            </div>
            <div className="section-wrapper">
              <div className="instructor-bottom">
                <div className="instructor-slider overflow-hidden">
                  <div className="instructor-navi instructor-slider-next">
                    <i className="icofont-rounded-double-right"></i>
                  </div>
                  <div className="instructor-navi instructor-slider-prev">
                    <i className="icofont-rounded-double-left"></i>
                  </div>
                  <Swiper
                    spaceBetween={0}
                    slidesPerView={2}
                    loop={"true"}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                    navigation={{
                      prevEl: ".instructor-slider-prev",
                      nextEl: ".instructor-slider-next",
                    }}
                    modules={[Autoplay, Navigation]}
                    breakpoints={{
                      0: {
                        width: 0,
                        slidesPerView: 1,
                      },
                      768: {
                        width: 768,
                        slidesPerView: 3,
                      },
                      1200: {
                        width: 1200,
                        slidesPerView: 5.7,
                      },
                    }}
                  >
                    {topRecruiters.map((val, i) => (
                      <SwiperSlide key={i}>
                        <div className="instructor-item">
                          <div className="instructor-inner">
                            <div className="instructor-thumb">
                              <img
                                src={`${val.imgUrl}`}
                                alt={`${val.imgAlt}`}
                              />
                            </div>
                            <div className="instructor-content">
                              <Link to="/team-single">
                                <h5>{val.name}</h5>
                              </Link>
                              <span className="d-block">{val.degi}</span>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </Fragment>
  );
};

export default usa_tax_info;
