"use client";
import { Fragment, useState } from "react";
//import Contact from "@/components/section/contact";
import { Table } from "react-bootstrap";
import Link from "next/link";

const Scholarship = () => {
  const [openSection, setOpenSection] = useState("");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };
  const innerData1 = [
    {
      id: "1",
      title: "Academic Year: 2023-24 Government Scholarship (MYSY & Others)",
      data: "Benificiaries: All students of SC, ST and SEBC category, Free ship card for SC students, Chief Minister Scholarship Scheme, Mukhyamantri Yuva Swavalamban Yojna (MYSY).",
    },
    {
      id: "1",
      title: "Late Maniben Shankarbhai Patel Scholarship",
      data: "Benificiaries: 1st Rank of 2nd, 3rd & 4th year student of B.Sc Nursing Program.",
    },
    {
      id: "1",
      title: "Late Shankarbhai Chhaganbhai Patel Scholarship",
      data: "Benificiaries: 1st Rank of 2nd, 3rd & 4th year student of B.Pharm Program.",
    },
    {
      id: "1",
      title:
        "Late Dahiben Ravjibhai Patel & Dineshbhai Ravjibhai Patel Merit Cum Means Scholarship",
      data: "Benificiaries: Meritorious & Economically Constrained Students of IT branch of CSPIT (Maximum 2 Students)",
    },
    {
      id: "1",
      title: "Prof. S G Shah Scholarship",
      data: "Benificiaries: Meritorious & Economically Constrained Students of CSPIT (Other than First Year and Maximum 1 Student)",
    },
    {
      id: "1",
      title: "Urmil & Mayuri Desai Family Trust Scholarship",
      data: "Benificiaries: Meritorious & Economically Constrained Students of Engineering of CSPIT (Twice in a Year: 50% Odd sem, 50% Even Sem - Maximum 4 Students)",
    },
    {
      id: "1",
      title: "Umedbhai Dharamdas Patel (Nar) Charitable Trust Scholarship",
      data: "Benificiaries: Meritorious & Economically Constrained Students of Selected Course (Only for Girls)",
    },
    {
      id: "1",
      title:
        "Late Kamlaben Ambalal bin Becharbhai, Bakrol and Mrs. Pushpaben Dinesh Patel Merit Cum Means Scholarship",
      data: "Benificiaries: Meritorious & Economically Constrained Students of DEPSTAR (Maximum 1 student)",
    },
    {
      id: "1",
      title: "CSPIT - Alumni Association Scholarship",
      data: "Benificiaries: Meritorious & Economically Constrained Students of CSPIT (Maximum 2 students)",
    },
    {
      id: "1",
      title: "Late Shri Chunibhai Hathibhai Patel, Changa Scholarship",
      data: "Benificiaries: Meritorious & Economically Constrained Students of ARIP (Maximum 6 students)",
    },
    {
      id: "1",
      title: "CHARUSAT Merit Scholarships",
      data: `CHARUSAT University believes that money should not be a road block for a student with innovative ideas and passion.The merit scholarships help meritorious students to pursue their career goals. Link:https://drive.google.com/file/d/1zzlAVorLJXqcde1JAKHlMyBc8sJuvUov/view`,
    },
    {
      id: "1",
      title: "CHARUSAT Sports Category Scholarships",
      data: "The students who have excelled in sporting activities at National level & State level will be eligible for Sports Scholarship. For updated & detailed information on the nature of sports and the eligibility criteria you may personally visit CHARUSAT.",
    },
    {
      id: "1",
      title: "Kanubhai and Kamlakshi Patel Scholarship",
      data: "Meritorious & Economically Constrained Students of CSPIT(For Each Year 3 Students) and Meritorious & Economically Constrained Students of RPCP(For Each Year 1 Student) from Charotar Moti Sattavis patidar samaj only.",
    },
    {
      id: "1",
      title: "Shri R.V. & Jayaben Patel Merit-cum-Means Scholarship Scheme",
      data: "Benificiaries: One Meritorious & Economically Constrained Student of B.Tech.(DEPSTAR), B.Pharm(RPCP), BBA(IIIM), BCA(CMPICA), BPT(ARIP), B.Sc.(PDPIAS), B.Sc.(MTIN) & B.Sc.(CIPS). AND Two Meritorious & Economically Constrained Students of B.Tech.(CSPIT)",
    },
  ];

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
                            <h3>Scholarships</h3>
                            <div className="meta-post">
                              {/*  */}
                              <div className="course-video">
                                <div className="course-video-content">
                                  <div
                                    className="accordion"
                                    id="accordionExample"
                                  >
                                    <div className="accordion-item">
                                      <div
                                        className="accordion-header"
                                        id="accordion01"
                                      >
                                        <button
                                          className="d-flex flex-wrap justify-content-between text-white"
                                          style={{
                                            width: "100%",
                                            fontSize: "1.2rem",
                                            fontWeight: "bold",
                                          }}
                                          data-bs-toggle="collapse"
                                          data-bs-target="#videolist1"
                                          aria-expanded="true"
                                          aria-controls="videolist1"
                                          onClick={() =>
                                            toggleSection("Domestic")
                                          }
                                        >
                                          Domestic Students
                                          <span>
                                            <i
                                              className={`icofont-square-${
                                                openSection === "Domestic"
                                                  ? "up"
                                                  : "down"
                                              }`}
                                            ></i>
                                          </span>
                                        </button>
                                      </div>
                                      <div
                                        id="videolist1"
                                        className={`accordion-collapse collapse${
                                          openSection === "Domestic"
                                            ? " show"
                                            : ""
                                        }`}
                                        aria-labelledby="accordion01"
                                        data-bs-parent="#accordionExample"
                                      >
                                        {/*  */}
                                        <ul className="my-5 mx-4 lab-ul">
                                          <li key="m1">
                                            <h5>
                                              CHARUSAT Merit Scholarship 2024-25
                                            </h5>
                                            <p>
                                              Benificiaries: Undergraduate &
                                              Post-Graduate Students &nbsp;
                                              <Link
                                                href="#"
                                                target="_blank"
                                                className="btn btn-sm btn-danger text-white"
                                              >
                                                Get Details
                                              </Link>
                                            </p>
                                            {/* <p>
                                              Benificiaries: M. Tech. & M.
                                              Pharm. Students &nbsp;
                                              <Link
                                                href="https://charusat.ac.in/files/scholarship/charusat-scholarship-2024-25-masters-FTE.pdf"
                                                target="_blank"
                                                className="btn btn-sm btn-danger text-white"
                                              >
                                                Get Details
                                              </Link>
                                            </p> */}
                                          </li>
                                          {innerData1.map((item, index) => (
                                            <li key={item.id}>
                                              <h5>
                                                {/* <i className="icofont-tick-mark"></i> */}{" "}
                                                {item.title}
                                              </h5>
                                              <p>{item.data}</p>
                                            </li>
                                          ))}
                                        </ul>

                                        {/*  */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/*  */}

                              {/*  */}
                              <div className="course-video">
                                <div className="course-video-content">
                                  <div
                                    className="accordion"
                                    id="accordionExample"
                                  >
                                    <div className="accordion-item">
                                      <div
                                        className="accordion-header"
                                        id="accordion01"
                                      >
                                        <button
                                          className="d-flex flex-wrap justify-content-between text-white"
                                          style={{
                                            width: "100%",
                                            fontSize: "1.2rem",
                                            fontWeight: "bold",
                                          }}
                                          data-bs-toggle="collapse"
                                          data-bs-target="#videolist2"
                                          aria-expanded="true"
                                          aria-controls="videolist2"
                                          onClick={() =>
                                            toggleSection(
                                              "International_students"
                                            )
                                          }
                                        >
                                          International Students
                                          <span>
                                            <i
                                              className={`icofont-square-${
                                                openSection ===
                                                "International_students"
                                                  ? "up"
                                                  : "down"
                                              }`}
                                            ></i>

                                            {/* <i
                                              class="icofont-square-down"
                                              style={{ color: "white" }}
                                            ></i> */}
                                          </span>
                                        </button>
                                      </div>
                                      <div
                                        id="videolist2"
                                        className={`accordion-collapse collapse${
                                          openSection ===
                                          "International_students"
                                            ? " show"
                                            : ""
                                        }`}
                                        aria-labelledby="accordion01"
                                        data-bs-parent="#accordionExample"
                                      >
                                        TBD
                                        {/* <ul className="lab-ul video-item-list p-3">
                                          <li className=" d-flex flex-wrap justify-content-between">
                                            <h5>
                                              Financial assistance available for
                                              foregin studnets to be admitted in
                                            </h5>
                                            <h6
                                              style={{
                                                width: "100%",
                                                textAlign: "center",
                                              }}
                                            >
                                              Academic Year: 2021-22
                                            </h6>
                                            <Table striped bordered hover>
                                              <thead>
                                                <tr>
                                                  <th rowSpan="2">Sr No</th>
                                                  <th rowSpan="2">
                                                    Percentage of qualifying
                                                    examination as per
                                                    Transcript
                                                  </th>
                                                  <th rowSpan="2">
                                                    First Year Scholarship
                                                  </th>
                                                  <th colSpan="3">
                                                    Scholarship conditions for
                                                    second year onwards as per
                                                    CGPA of preceding year
                                                  </th>
                                                </tr>
                                                <tr>
                                                  <th>CGPA &gt;= 8.00</th>
                                                  <th>CGPA 7.00 to 7.99</th>
                                                  <th>CGPA 6.50 to 6.99</th>
                                                </tr>
                                              </thead>
                                              <tbody>
                                                <tr>
                                                  <td>1</td>
                                                  <td>90% and above</td>
                                                  <td>50%</td>
                                                  <td>50%</td>
                                                  <td>35%</td>
                                                  <td>25%</td>
                                                </tr>
                                                <tr>
                                                  <td>2</td>
                                                  <td>70% to 89.99%</td>
                                                  <td>35%</td>
                                                  <td>50%</td>
                                                  <td>35%</td>
                                                  <td>25%</td>
                                                </tr>
                                                <tr>
                                                  <td>3</td>
                                                  <td>55% to 69.99</td>
                                                  <td>25%</td>
                                                  <td>50%</td>
                                                  <td>35%</td>
                                                  <td>25%</td>
                                                </tr>
                                              </tbody>
                                            </Table>

                                            <p>Note:</p>
                                            <p>
                                              (i) Financial Assistance is
                                              available only on applicable
                                              University Tution fees.
                                            </p>
                                            <p>
                                              (ii) Management will take decision
                                              of additional scholarship on case
                                              to case basis
                                            </p>
                                          </li>
                                        </ul> */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="course-video">
                                <div className="course-video-content">
                                  <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                      <div className="accordion-header" id="accordion03">
                                        <button
                                          className="d-flex flex-wrap justify-content-between text-white"
                                          style={{
                                            width: "100%",
                                            fontSize: "1.2rem",
                                            fontWeight: "bold",
                                          }}
                                          data-bs-toggle="collapse"
                                          data-bs-target="#videolist3"
                                          aria-expanded="true"
                                          aria-controls="videolist3"
                                          onClick={() => toggleSection("KCG_GoG")}
                                        >
                                          Scholarship details from KCG, GoG
                                          <span>
                                            <i
                                              className={`icofont-square-${
                                                openSection === "KCG_GoG" ? "up" : "down"
                                              }`}
                                            ></i>
                                          </span>
                                        </button>
                                      </div>
                                      <div
                                        id="videolist3"
                                        className={`accordion-collapse collapse${
                                          openSection === "KCG_GoG" ? " show" : ""
                                        }`}
                                        aria-labelledby="accordion03"
                                        data-bs-parent="#accordionExample"
                                      >
                                        <ul className="my-5 mx-4 lab-ul">
                                          <li key="kcg1">
                                            <h5>Scholarship details from Eduction Department, Government of Gujarat under KCG</h5>
                                            <p>
                                              For detailed information, please refer to the PDF document. &nbsp;
                                              <Link
                                                href="../assets/files/KCG-scheme-letter.pdf"
                                                target="_blank"
                                                className="btn btn-sm btn-danger text-white"
                                              >
                                                View PDF
                                              </Link>
                                            </p>
                                          </li>
                                        </ul>
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
                  </div>
                </div>
              </article>
            </div>

            {/* <Contact
              name="Dr. Mayur Sutaria Head, IQAC "
              email="iqac@charusat.ac.in"
              phone="+91-2697-265213"
            /> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Scholarship;
