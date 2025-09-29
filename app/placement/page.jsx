"use client";
import { Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import Head from "next/head";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import harsh from "@/public/assets/images/students_placement_testimonial/harsh_shah_n.png";
import jeel from "@/public/assets/images/students_placement_testimonial/jeel_soni_n.png";
import maharshi from "@/public/assets/images/students_placement_testimonial/maharshi_bodani_n.png";
import AdiPawar from "@/public/assets/images/students_placement_testimonial/aditya_pawar_n.png";
import Karuna from "@/public/assets/images/students_placement_testimonial/karunya_parmanik_n.png";
import parth from "@/public/assets/images/students_placement_testimonial/parth_shah_n.png";
// import PageHeader from "../component/layout/pageheader";
// import career1_img from "../assets/images/advertisment_nov_2022.webp";
import PlacementRecord from "@/app/placement/placementRecord";
import samsung from "@/public/assets/images/recruiters/samsung.png";
import tcs from "@/public/assets/images/recruiters/tcs.png";
import gsfc from "@/public/assets/images/recruiters/gsfc.png";
import Ain from "@/public/assets/images/recruiters/in.png";
import byju from "@/public/assets/images/recruiters/byju.png";
import jeavio from "@/public/assets/images/recruiters/jeavio.png";
import evosys from "@/public/assets/images/recruiters/evosys.png";
import mg from "@/public/assets/images/recruiters/mg.png";
import berger from "@/public/assets/images/recruiters/berger.png";
import ops from "@/public/assets/images/recruiters/ops.png";
import jaro from "@/public/assets/images/recruiters/jaro.png";
import crest from "@/public/assets/images/recruiters/crest.png";

const topRecruiters = [
  {
    imgUrl: jaro,
    imgAlt: "jaro",
    name: "12 Lacs",
  },
  {
    imgUrl: byju,
    imgAlt: "byju",
    name: "10 Lacs",
  },
  {
    imgUrl: Ain,
    imgAlt: "navy",
    name: "9 Lacs",
  },
  {
    imgUrl: gsfc,
    imgAlt: "gsfc",
    name: "8 Lacs",
  },
  {
    imgUrl: tcs,
    imgAlt: "tcs",
    name: "7 Lacs",
  },
  {
    imgUrl: samsung,
    imgAlt: "samsung",
    name: "7 Lacs",
  },
  {
    imgUrl: ops,
    imgAlt: "opsHUB",
    name: "6.5 Lacs",
  },
  {
    imgUrl: berger,
    imgAlt: "berger",
    name: "6 Lacs",
  },
  {
    imgUrl: mg,
    imgAlt: "mg",
    name: "6 Lacs",
  },
  {
    imgUrl: evosys,
    imgAlt: "evosys",
    name: "5.5 Lacs",
  },
  {
    imgUrl: jeavio,
    imgAlt: "jeavio",
    name: "5.3 Lacs",
  },
  {
    imgUrl: crest,
    imgAlt: "crestData",
    name: "5 Lacs",
  },
];

const Placement = () => {
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
        content="CHARUSAT Placement - best university to study in Gujarat"
      />
      <title>CHARUSAT Placement</title>

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
                            <h3>CAREER DEVELOPMENT AND PLACEMENT CELL</h3>
                            <hr />

                            <Container fluid>
                              <Row className="p-2">
                                <Col>
                                  <h4>CDPC ACTIVITIES </h4>
                                  <hr
                                    style={{
                                      border:
                                        "2px solid rgb(0, 102, 179); !important;",
                                    }}
                                  />
                                  <ul>
                                    <li>
                                      {/* <i className="icofont-tick-mark"></i> */}
                                      One to one guidance to each student to
                                      help them achieve their desired career.
                                    </li>
                                    <li>
                                      {/* <i className="icofont-tick-mark"></i> */}
                                      Free training to improve soft skills,
                                      technical skills, and personality as per
                                      the industry requirement through expert
                                      workshops.
                                    </li>
                                    <li>
                                      {/* <i className="icofont-tick-mark"></i> */}{" "}
                                      Feedback to each student by mock campus
                                      placement test which includes online test,
                                      Group discussion, and personal interview.
                                    </li>
                                    <li>
                                      {/* <i className="icofont-tick-mark"></i> */}{" "}
                                      Conducting seminar series on career
                                      prospects in the industry, public sector,
                                      government (including defense), and
                                      self-employment.
                                    </li>
                                    <li>
                                      {/* <i className="icofont-tick-mark"></i> */}{" "}
                                      Execute campus placements and job fairs by
                                      inviting all industrial sectors for
                                      students.
                                    </li>
                                    <li>
                                      {/* <i className="icofont-tick-mark"></i> */}{" "}
                                      Guidance regarding the requirements and
                                      procedures for higher studies in India and
                                      Abroad via Higher studies help desk.
                                    </li>
                                    <li>
                                      {/* <i className="icofont-tick-mark"></i> */}{" "}
                                      Encourage students by providing resources
                                      to participate and clear various national
                                      and international projects and technical
                                      competition.
                                    </li>
                                    <li>
                                      {/* <i className="icofont-tick-mark"></i> */}{" "}
                                      Guidance to each student to prepare for
                                      national and international competitive
                                      exams.
                                    </li>
                                    <li>
                                      {/* <i className="icofont-tick-mark"></i> */}{" "}
                                      Support for student start-up by
                                      Entrepreneurship and development cell.
                                    </li>
                                  </ul>
                                  <img src="./assets/images/placement/CDPC_Activity.webp"></img>
                                </Col>
                              </Row>
                              <br />
                              <Row>
                                <Col></Col>
                              </Row>

                              {/* <Row>
                                <Col>
                                  <h4>STUDENTS&apos; TESTIMONIAL</h4>
                                </Col>
                              </Row>
                              <Row>
                                <Col
                                  style={{
                                    border: "1px solid #ccc",
                                    margin: "10px",
                                    padding: "10px",
                                  }}
                                >
                                  <Image src={AdiPawar}  />
                                  <p className="mt-3">
                                    <i>
                                      &quot; CHARUSAT helped me set a benchmark
                                      and gave me a head start towards my
                                      professional career. Faculties here have a
                                      student-centric approach while teaching.
                                      Industrial visits at regular intervals
                                      make the students well aware of recent
                                      trends and guide them accordingly to
                                      improve their learning graph.&quot;
                                    </i>
                                  </p>
                                </Col>
                                <Col
                                  style={{
                                    border: "1px solid #ccc",
                                    margin: "10px",
                                    padding: "10px",
                                  }}
                                >
                                  <Image src={Karuna} />
                                  <p className="mt-3">
                                    <i>
                                      &quot; Charusat by providing various
                                      facilities to the students has proved that
                                      it is not only being study oriented
                                      university. The counselling batches
                                      assigned to the respective faculties has
                                      been an initiative that has helped the
                                      students at various points in their
                                      college life. Along with the platforms
                                      that it provides to enhance the
                                      co-curricular skills is pretty good.
                                    </i>
                                    &quot;
                                  </p>
                                </Col>
                                <Col
                                  style={{
                                    border: "1px solid #ccc",
                                    margin: "10px",
                                    padding: "10px",
                                  }}
                                >
                                  <Image src={maharshi} />
                                  <p className="mt-3">
                                    <i>
                                      &quot; I am thankful to CSPIT, IT
                                      placement team & Training and Placement
                                      Cell for inviting the renowned
                                      organizations and molding us as per the
                                      industrial requirements. Also they helped
                                      us in getting best profile and package of
                                      industry. I’m very much proud to be an
                                      alumni of such a beautiful college and be
                                      a part of the CHARUSAT family.
                                    </i>
                                    &quot;
                                  </p>
                                </Col>
                              </Row> */}
                              {/* <Row>
                                <Col
                                  style={{
                                    border: "1px solid #ccc",
                                    margin: "10px",
                                    padding: "10px",
                                  }}
                                >
                                  <Image src={parth} />
                                  <p className="mt-3">
                                    <i>
                                      &quot; Truly saying, Department of
                                      Information technology started aptitude
                                      classes which were very helpful for
                                      someone like me who had less knowledge of
                                      general aptitude. Also, motivational, Dos
                                      & Don’ts lectures were organized to make
                                      sure each student had enough confidence
                                      for appearing in placement & clearing It.
                                    </i>
                                    &quot;
                                  </p>
                                </Col>
                                <Col
                                  style={{
                                    border: "1px solid #ccc",
                                    margin: "10px",
                                    padding: "10px",
                                  }}
                                >
                                  <Image src={jeel}  />
                                  <p className="mt-3">
                                    <i>
                                      &quot; Highly qualified faculty and
                                      flexible curriculum which offers a unique
                                      amalgam of technical and humanities
                                      courses along with the vibrant campus life
                                      helped us to become socially aware
                                      technologists prepared both for industrial
                                      and research domain and It&apos;s not only what
                                      you learn, it&apos;s how you learn.
                                    </i>
                                    &quot;
                                  </p>
                                </Col>
                                <Col
                                  style={{
                                    border: "1px solid #ccc",
                                    margin: "10px",
                                    padding: "10px",
                                  }}
                                >
                                  <Image src={harsh} />
                                  <p className="mt-3">
                                    <i>
                                      &quot; CHARUSAT has not only impacted me
                                      the best technical knowledge of my field
                                      but has also given me many opportunities
                                      to bring the best out of me as a
                                      developer. However, I never had
                                      self-doubt, as CHARUSAT had implanted a
                                      strong foundation of technical, managerial
                                      and leadership skillsets within me.
                                    </i>
                                    &quot;
                                  </p>
                                </Col>
                              </Row> */}
                              <Row className="p-2">
                                <Col>
                                  <h4>PLACEMENT STATISTICS</h4>
                                  <hr
                                    style={{
                                      border:
                                        "2px solid rgb(0, 102, 179); !important;",
                                    }}
                                  />
                                  {/* <PlacementRecord /> */}
                                  <img src="./assets/images/placement/CDPC_Statistics.webp"></img>
                                  <br />
                                  <br />
                                  <img src="./assets/images/placement/CDPC_Placement.webp"></img>

                                  <br />
                                </Col>
                              </Row>
                            </Container>

                            <br />
                            <div className="container">
                              <div className="section-header">
                                <h2 className="title"></h2>
                                <h3>MAJOR RECRUITERS</h3>
                                <hr
                                  style={{
                                    border: "2px solid #003964; !important;",
                                  }}
                                />
                              </div>
                              <div className="section-wrapper">
                                <div className="instructor-bottom">
                                  <div className="instructor-slider overflow-hidden">
                                    {/* <div className="instructor-navi instructor-slider-next">
                                      <i className="icofont-rounded-double-right"></i>
                                    </div>
                                    <div className="instructor-navi instructor-slider-prev">
                                      <i className="icofont-rounded-double-left"></i>
                                    </div> */}
                                    {/* <Swiper
                                      spaceBetween={0}
                                      slidesPerView={2}
                                      loop={"true"}
                                      autoplay={{
                                        delay: 2000,
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
                                                <Image
                                                  src={val.imgUrl}
                                                  alt={`${val.imgAlt}`}
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </SwiperSlide>
                                      ))}
                                    </Swiper> */}
                                    <img
                                      src="./assets/images/placement/CDPC_Recruiters.webp"
                                      style={{
                                        "clip-path": "inset(4px 0 0 0);",
                                      }}
                                    ></img>
                                  </div>
                                </div>
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
                                  style={{
                                    marginBottom: "10px",
                                  }}
                                >
                                  {" "}
                                  <br />
                                  <i className="icofont-ui-user"></i>
                                  Dr. Ashwin Makwana, Head, CDPC
                                  <br />
                                </li>
                                <li
                                  style={{
                                    marginBottom: "10px",
                                  }}
                                >
                                  <i className="icofont-email"></i>
                                  ashwinmakwana.ce@charusat.ac.in <br />
                                </li>
                                <li>
                                  <i className="icofont-phone"></i>
                                  +91-2697-265214
                                </li>
                              </ul>
                              <hr
                                style={{
                                  marginBottom: "10px",
                                }}
                              />
                              <ul className="lab-ul">
                                <li
                                  style={{
                                    marginBottom: "10px",
                                    marginTop: "10px",
                                  }}
                                >
                                  <i className="icofont-ui-user"></i>
                                  Mr. Sujal Dadhaniya, TPO, CDPC
                                  <br />
                                </li>
                                <li
                                  style={{
                                    marginBottom: "10px",
                                  }}
                                >
                                  <i className="icofont-email"></i>
                                  tnp@charusat.ac.in
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </li>
                                <li
                                  style={{
                                    marginBottom: "10px",
                                  }}
                                >
                                  <i className="icofont-phone"></i>
                                  +91 2697 265213
                                </li>
                                <li
                                  style={{
                                    marginBottom: "10px",
                                  }}
                                >
                                  <i className="icofont-phone"></i>
                                  +91-9662255116
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

export default Placement;
