"use client"
import {  Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import Head from "next/head";
import Image from "next/image";
import "swiper/css"
import 'swiper/css/navigation'
import "swiper/css/pagination"

const publications = () => {
  return (
    <Fragment>
      
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="CHARUSAT-Placement" />
        <meta name="copyright" content="All rights reserved by CHARUSAT" />
        <meta
          name="keywords"
          content="CHARUSAT Placement,CHARUSAT University, changa university,best university in gujarat, changa, charotar university, courses, engineering courses, best engineering college in gujarat, engineering college in gujarat, placement statistics, packages offered"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="homepage" />
        <meta property="og:title" content="CHARUSAT Placement" />
        <meta
          property="og:description"
          content="CHARUSAT publications - best university to study in Gujarat"
        />
        <title>CHARUSAT Publications</title>
      
      {/* <PageHeader title={'4 Results found for: Business'} curPage={'Search Result'} /> */}
      <div className="blog-section padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                            <h3 style={{textAlign:"Center"}}>Publications</h3>
                            <hr />

                            <Container fluid>
                              <Row className="p-2">
                                <Col>
                                <center>
                                  <h4>Statistics</h4>
                                  
                                  {/* <img src="./assets/images/publications/Publication1.png" width={"600"} height={"600"} /> */}
                                  <Image src={"./assets/images/publications/Publication1.png"} width={"600"} height={"600"}/></center>
                                  <br/>
                                  <center>
                                  <Image src={"./assets/images/publications/Publication2.png"} width={"600"} height={"600"}/></center>
                                </Col>
                              </Row>
                              <br/>
                              <Row>
                                <Col></Col>
                              </Row>
                              <Row className="p-2">
                              <Col>
                              <center>
                              <h4>Quality</h4>
                              
                              <Image src={"./assets/images/publications/Publication3.png"} width={"800"} height={"800"}/></center>
                            <br />
                            </Col>
                              </Row>
                              
                              <Row className="p-2">
                              
                                <Col>
                                <center>
                                <h4>Publications Impact</h4>
                              
                              <Image src={"./assets/images/publications/Publication4.png"} width={"1000"} height={"900"}/>
                              
                              </center>
                                </Col>
                              </Row>
                            </Container>
                            
                            <br />
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
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

export default publications;
