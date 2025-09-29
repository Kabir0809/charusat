"use client";
import { Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";
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

const WorkshopList = [
  {
    title: "Design Your Robot",
    desc: "Robotics is an interdisciplinary research area at the interface of engineering. Robotics involves the design, construction, operation, and use of robots. Robotics aims to design intelligent machines that can help and assist humans in their day-to-day lives and keep everyone safe. Robotics draws on the achievement of Electronics Engineering, information engineering, and computer engineering. The workshop aims to cover the challenging and exciting field of Robotics. The workshop's objective is to develop application-specific robots whose basic technologies can be adapted with minimal effort to support human beings in a wide array of applications that require the ability to interact with the environment.",
    venue:
      "Electronics & Communication Engineering – Chandubhai S.Patel Institute of Technology",
  reg_link:"https://forms.gle/HsZNaS4Qxi4YPAau7",
    },
  {
    title: "3D printing and Industrial Automation",
    desc: "Recent trends in mechanical industries are additive manufacturing mainly 3D printing and automation. This workshop will try to cover the brief overview about the 3D printing technology, starting from the modelling to final product including the limitation of 3D printing. Different 3D printing methods will be explained during the workshop.  Also, workshop covers the industrial automation (Hydraulic and Pneumatics) which are used by the different mechanical industries. A demonstration of modular production system for understanding the working and use of automation in mechanical industries will be covered during the workshop.",
    venue:
      "Mechanical Engineering – Chandubhai S.Patel Institute of Technology",
      reg_link:"https://forms.gle/HsZNaS4Qxi4YPAau7",
  },
  {
    title: "Smart Cities",
    desc: "Robotics is an interdisciplinary research area at the interface of engineering. Robotics involves the design, construction, operation, and use of robots. Robotics aims to design intelligent machines that can help and assist humans in their day-to-day lives and keep everyone safe. Robotics draws on the achievement of Electronics Engineering, information engineering, and computer engineering. The workshop aims to cover the challenging and exciting field of Robotics. The workshop's objective is to develop application-specific robots whose basic technologies can be adapted with minimal effort to support human beings in a wide array of applications that require the ability to interact with the environment.",
    venue: "Civil Engineering – Chandubhai S.Patel Institute of Technology",
    reg_link:"https://forms.gle/HsZNaS4Qxi4YPAau7",
  },
  {
    title: "Power-up Your Skills: Electrical Project Workshop",
    desc: "a) Making of Tesla coil b) Making of Motion sensor circuit Building a Tesla coil and Motion sensor can be a fantastic fun with learning experience, offering insights into various topics of standard 12th Physics such as electricity, electromagnetism, circuitry etc.",
    venue:
      "Electrical Engineering – Chandubhai S.Patel Institute of Technology",
      reg_link:"https://forms.gle/HsZNaS4Qxi4YPAau7",
  },
  {
    title: "Gateway to Tech: Discovering career in Computing",
    desc: "The theme 'Gateway to Tech: Discovering a Career in Computing' is chosen to inspire curiosity and excitement about the field of computer allied branches among 12th-grade science students. It emphasizes the idea of embarking on a journey into a rapidly evolving and dynamic field that has the potential to shape the future. By covering foundational topics along with emerging technologies, the workshop aims to provide students with a comprehensive understanding of computer engineering and its relevance in today's digital world. Moreover, the hands-on approach and practical projects included in the workshop theme encourage active learning and engagement, allowing students to explore their interests and develop essential skills for success in the field.",
    venue:
      "Computer Science Engineering, Computer Engineering, Information Technology, Artificial Intelligence & Machine Learning – Chandubhai S.Patel Institute of Technology",
      reg_link:"https://forms.gle/HsZNaS4Qxi4YPAau7",
    },
  {
    title: "Digital Frontier Forum: Uniting AR/VR, AI-ML and Cyber Security.",
    desc: "Virtual Reality (VR) and Augmented Reality (AR) Experience: Current applications and future possibilities will be discussed. Demonstration of AR VR projects will be shown to the students. Students will be given a piece of code to execute and experience AR-VR technology. CyberSafe Session: CyberSafe Session shall empower participants with essential knowledge and skills in cybersecurity. Through engaging presentations/videos and interactive discussions, attendees will learn about the latest cyber threats, best practices for safeguarding personal and professional digital assets, and strategies for maintaining cyber hygiene. Machine Learning Unveiled: Machine Learning Unveiled' will help students dive into the world of artificial intelligence and machine learning. Interactive sessions along with real-world examples will be discussed with the participants. The live demonstration aims to inspire the next generation of innovators by showcasing the potential of machine learning in solving tomorrow's challenges in a brief manner.",
    venue:
      "Computer Science Engineering, Computer Engineering, Information Technology - Devang Patel Institute of Advance Technology and Research",
      reg_link:"https://forms.gle/HsZNaS4Qxi4YPAau7",
    },
  {
    title: "Fun of Preparing Cosmetics",
    desc: "Pharmacy is briefly characterized with a skill of preparing formulations. Cosmetics, specifically, the creams- of various types are the classical formulations, with are used extensively in therapeutics as well as cosmetics. Creams are not difficult to prepare, and preparing the creams will make an overview of one of the typical pharmaceutical manufacturing process. The workshop will include a very brief introduction of the formulation types, and typically of the cream. The students will be demonstrated the technique of cream making, and further they will be assigned an exercise of preparing the cream, and making the attractive label for the container. The chemicals to be used are routine laboratory supply chemicals, and may not require specific procurement. There is no need to use instrument as well. These will be mixing and triturating experiments, but by incorporating color and perfume in the product, the learners will get a feel of commercial preparation, which will be a very satisfying experience.",
    venue: "Ramanbhai Patel College of Pharmacy",
    reg_link:"https://forms.gle/HsZNaS4Qxi4YPAau7",
  },
  {
    title: "Into the World of Science",
    desc: "The workshop is designed to inculcate the scientific temperaments amongst the students/visitors through experiencing the wonders of science. During this event, visitors will have the opportunity to view our live experiments, scientific demos, engage in interactive discussions, learn about the latest advancements in science and technology, and visit to some state-of-the-art science laboratories.",
    venue: "P D Patel Institute of Applied Sciences",
    reg_link:"https://forms.gle/HsZNaS4Qxi4YPAau7",
  },
  {
    title: "Emotional Intelligence",
    desc: "This one-day workshop is designed for adolescent’s / school students. It intends to deliver a clear overview of importance and managing emotions in a day-to-day life. This workshop will engage the participants with various activities / management games to help them understand the concept of emotional intelligence and significance of developing the same.",
    venue: "Indukaka Ipcowala Institute of Management",reg_link:"https://forms.gle/HsZNaS4Qxi4YPAau7",
  },
  {
    title: "First-aid-Life saving skills",
    desc: "This workshop will demonstrate with following emergency or first-aid care with an objective to save the victim’s life before reaching to hospital: • Road-traffic accident-30 min • Bleeding including nose-bleeding- 30 min. • Burns-20 min. • Electric shock- 20 min • Fracture- 20 min",
    venue: "Manikaka Topawala Institute of Nursing",reg_link:"https://forms.gle/HsZNaS4Qxi4YPAau7",
  },
  {
    title: "Paramedics-The frontline task force",
    desc: "Medical Imaging Technology: Awareness Session on Breast Cancer & Screening Techniques for Early Detection. (Discussion) Operation Theatre and Anesthesia Technology: The workshop comprises of basic patient’s vital monitoring like pulse rate, Oxygen saturation, blood pressure and monitoring. It will be a hands-on training to measure pulse rate and blood pressure manually. We will be giving hands free observer experience to students by demonstrating the use of electrocardiogram & how to secure a patient’s airway by airway devices performed by anaesthesia and critical care technologist. The program will be followed by interaction with the students and feedback will be collected. Optometry: Provide importance of eye and eyecare and how optometrist play major role in prevention of blindness. It will also focus on various scope of optometry at national and international level. We will also conduct small skit which portrait Optometrist as hero for sight saver. Medical Laboratory Technology: For a live demonstration of genetic material isolation from everyday fruits, you can choose a fruit like strawberries (or other fruits like bananas or kiwis), which contain a significant amount of DNA and are visually appealing for demonstrations.",
    venue: "Bapubhai Desaibhai Patel Institute of Paramedical Sciences",reg_link:"https://forms.gle/HsZNaS4Qxi4YPAau7",
  },
  {
    title: "Health & Wellness",
    desc: "The primary goal of this workshop is to educate participants about health and its various components, emphasizing the importance of physical fitness and emergency response skills. Activities Included: • Compression Only Life Support Demonstration • Physical Fitness Games At the end of the workshop, the learner will be able to: • Respond to emergency situations as a lay person. • Demonstrate Compression Only Life Support (COLS) as an effective emergency technique • Engage in enjoyable physical fitness games to promote physical activity and well-being.",
    venue: "Ashok & Rita Patel Institute of Physiotherapy",reg_link:"https://forms.gle/HsZNaS4Qxi4YPAau7",
  },
  {
    title: "WebWise: Web Design Crash Course",
    desc: "It is a dynamic two-hour workshop tailored for high school seniors eager to explore in the field of web designing. Through an engaging blend of theory and hands-on practice, participants will explore fundamental concepts such as HTML, CSS, design principles, and responsive design. Guided by experienced mentors, students will craft their own webpage, gaining practical skills and insights into the exciting world of web development. By the end of the workshop, students will be able to: • Explain the basic concepts of web design. • Apply design principles to create mockups of webpages. Navigate a web design tool and build a simple website.",
    venue: "Smt. Chandaben Mohanbhai Patel Institute of Computer Applications",reg_link:"https://forms.gle/HsZNaS4Qxi4YPAau7",
  },
  {
    title: "Communication for Career Building",
    desc: "88% of Indian professionals agree that robust communication skills can take an individual’s career to the next level (Times of India 2023). In the same line, this Workshop on Communication for Career Building aims at equipping the students with required techniques to enhance their communication abilities and maximize their career potential. Join the workshop and be a part of the interactive activities to explore the strategies for effective conversations, discussion, presentations, interviews, negotiation, etc. Overall, the workshop offers a comprehensive approach to developing communication skills essential for success in university education as well as contemporary dynamic workplace.",
    venue: "Indukaka Ipcowala Institute of Management",reg_link:"https://forms.gle/HsZNaS4Qxi4YPAau7",
  },
  {
    title: "Paint your Passion",
    desc: "The painting workshop Paint Your Passion is designed for developing imagination and confidence, encouraging freedom of expression, strengthening visualisation techniques, fostering problem-solving skills, building emotional intelligence, and motivating a growth oriented mind-set. By the completion of the workshop, the participants will be able to visualise their future goals and express them in a creative and confident way.",
    venue: "Indukaka Ipcowala Institute of Management",reg_link:"https://forms.gle/HsZNaS4Qxi4YPAau7",
  },
  {
    title: "Eloquent English Expressions",
    desc: "Do you struggle to express yourself with clarity and impact? Want to overcome speaking jitters? This 2-hour workshop is for you! Join the interactive workshop and master the art of eloquent English expressions. We shall equip you with practical techniques to refine your pronunciation, conquer stage fright, and choose words that resonate. Learn to craft captivating sentences and deliver them with confidence. Impress others and take your communication to the next level.",
    venue: "Indukaka Ipcowala Institute of Management",reg_link:"https://forms.gle/HsZNaS4Qxi4YPAau7",
  },
];

const Cee_workshop = () => {
  return (
    <Fragment>
      {/* <PageHeader title={'4 Results found for: Business'} curPage={'Search Result'} /> */}
      <div className="blog-section padding-tb section-bg">
        <div className="cee-register-link">
          {/* <div>
            <p
              className="subTitle-slider text_2 blinking-text d-flex"
              style={{
                color: "white",
                backgroundColor: "#FF4500",
                position: "fixed ",
                bottom: "20%",
                right: "1%",
                zIndex: "999",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <Link
                href="https://forms.gle/HsZNaS4Qxi4YPAau7"
                target="_blank"
                style={{ color: "white", textDecoration: "none" }}
              >
                Register Now
              </Link>
            </p>
          </div> */}
        </div>
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
                            <h1
                              className="text-center mb-4 h1 text-white fw-bold
                              "
                              style={{
                                backgroundColor: "#ff4d00",
                                padding: "10px", // Adding padding to make the gradient visible
                              }}
                            >
                              {" "}
                              CHARUSAT Education Expo 2024 - Workshops
                            </h1>

                            <Container fluid>
                              <Row className="p-2">
                                <Col>
                                  {WorkshopList.map((workshop, index) => {
                                    return (
                                      <div key={index} className="">
                                        <h5
                                          key={index}
                                          style={{
                                            backgroundColor: "#0066b3",
                                            padding: "5px", // Adding padding to make the gradient visible
                                          }}
                                          className="text-white fw-bold p-2"
                                        >
                                          Workshop - {index + 1} ||{" "}
                                          {workshop.title}
                                        </h5>
                                        <p style={{ textAlign: "justify" }}>
                                          {workshop.desc}
                                        </p>
                                        <p>
                                        <Link href={workshop.reg_link} target="_blank" className="btn btn-info text-white"
                                          style={{"backgroundColor":"#FF4500"}}
                                          > Register Here </Link><br/><br/>
                                          <strong>Location:</strong>{" "}
                                          {workshop.venue}
                                          
                                        </p>
                                        <hr />
                                        
                                      </div>
                                    );
                                  })}
                                </Col>
                              </Row>
                            </Container>
                            <br />

                            <br />
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
    </Fragment>
  );
};

export default Cee_workshop;
