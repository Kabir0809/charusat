"use client";
import { Fragment, useState } from "react";
import { Container, Accordion, Card } from "react-bootstrap";
import Link from "next/link";

const Scholarship = () => {
  const [activeKey, setActiveKey] = useState("0");

  const innerData1 = [
    {
      id: "1",
      title: "CHARUSAT Merit Scholarship 2025-26",
      data: "Supporting excellence in academics for Undergraduate & Post-Graduate Students.",
      link: "./assets/files/Scholarship/CHARUSAT_Merit_Scholarship_2025.pdf",
    },
    // {
    //   id: "1",
    //   title: "Government Scholarship (MYSY & Others)",
    //   data: "Benificiaries: All students of SC, ST and SEBC category, Free ship card for SC students, Chief Minister Scholarship Scheme, Mukhyamantri Yuva Swavalamban Yojna (MYSY).",
    // },
    {
      id: "2",
      title: "Late Maniben Shankarbhai Patel Scholarship",
      data: "Benificiaries: Ranked 1st among B.Sc. students in 2nd, 3rd, and 4th year of Nursing Program under MTIN",
    },
    {
      id: "3",
      title: "Late Shankarbhai Chhaganbhai Patel Scholarship",
      data: "Benificiaries: Ranked 1st among B.Pharm. students in 2nd, 3rd, and 4th year of Pharmacy program under RPCP.",
    },
    {
      id: "4",
      title:
        "Late Kamlaben Ambalalbhai Becharbhai, Bakrol and Mrs. Pushpaben Dinesh Patel Merit Cum Means Scholarship",
      data: "Benificiaries: Meritorious & Economically Constrained Students of DEPSTAR (Maximum 1 student)",
    },
    {
      id: "5",
      title:
        "Late Dahiben Ravjibhai Patel & Dineshbhai Ravjibhai Patel Merit Cum Means Scholarship",
      data: "Benificiaries: Meritorious & Economically Constrained Students of IT branch of CSPIT (Maximum 2 Students)",
    },
    {
      id: "6",
      title: "Umedbhai Dharamdas Patel (Nar) Charitable Trust Scholarship",
      data: "Benificiaries: Meritorious & Economically Constrained Students of Selected Course, Only one student from each program can participate (Only for Girls)",
    },
    {
      id: "7",
      title: "Prof. S G Shah Scholarship",
      data: "Benificiaries: Meritorious & Economically Constrained Students of CSPIT (Other than First Year and Maximum 1 Student)",
    },
    {
      id: "8",
      title: "Urmil & Mayuri Desai Family Trust Scholarship",
      data: "Benificiaries: Meritorious & Economically Constrained Students of CSPIT (Twice in a Year: 50% Odd sem, 50% Even Sem - Maximum 4 Students)",
    }, 
    {
      id: "9",
      title: "CSPIT - Alumni Association Scholarship",
      data: "Benificiaries: Meritorious & Economically Constrained Students of CSPIT",
    },
    {
      id: "10",
      title: "Shri R.V. & Jayaben Patel Merit-cum-Means Scholarship Scheme",
      data: "Benificiaries: Students of Undergraduate program who are meritorious and economically constrained.",
    },
    {
      id: "11",
      title: "Late Shri Chunibhai Hathibhai Patel, Changa Scholarship",
      data: "Benificiaries: Students of BPT program who are meritorious and economically constrained.",
    },
    {
      id: "12",
      title: "Kanubhai and Kamlakshi Patel Scholarship",
      data: "Benificiaries: Meritorious & Economically Constrained Students of CSPIT and Meritorious & Economically Constrained Students of RPCP from Charotar Moti Sattavis patidar samaj only.",
    },
    {
      id: "13",
      title: "Kamlaben and Ambalal Patel (Mahelav) Merit-cum-Means Scholarship",
      data: "Benificiaries: Students of DEPSTAR and MTIN programs who are meritorious and economically constrained.",
    },
    {
      id: "14",
      title: "Arvindaben and Bhagubhai Mistry of Changa Merit-cum-Means Scholarship Scheme",
      data: "Benificiaries: Students of MTIN Institute who are meritorious and economically constrained.",
    },
    {
      id: "15",
      title: "Madhubala and Arvindbhai Patel of Hadeva Limbasi Merit-cum-Means Scholarship Scheme",
      data: "Benificiaries: Students of DEPSTART or MTIN Institute who are meritorious and economically constrained.",
    },
    {
      id: "16",
      title: "Bhupendrabhai Narshibhai Patel & Kokilaben Bhupendrabhai Patel Merit-cum-Means Scholarship",
      data: "Benificiaries: Students of DEPSTART Institute who are meritorious and economically constrained.",
    },
    // {
    //   id: "17",
    //   title: "CHARUSAT Sports Category Scholarship",
    //   data: "Beneficiaries: The students who have excelled in sporting activities at National level & State level will be eligible for Sports Scholarship. For updated & detailed information on the nature of sports and the eligibility criteria you may personally visit CHARUSAT.",
    // },
    
    
  ];

  return (
    <Fragment>
      <div className="scholarship-section p-4">
        <Container className="bg-white p-4 rounded-3 shadow">
          <h1 className="header-title">Scholarships @ CHARUSAT</h1>

          <div className="intro-box mb-4">
            <p style={{ color: "white", textAlign: "justify" }}>
              At CHARUSAT, we believe that education should be a right, not a
              privilege. Our commitment to inclusivity and diversity drives us to
              create an environment where every student can thrive. We are proud
              to offer a variety of scholarships that cater to different
              backgrounds, achievements, and aspirations.
              CHARUSAT is committed to empowering students from all walks of  life.
              We understand that financial constraints can be a barrier to
              pursuing higher education. To address this, we offer a range of
              scholarships designed to support students in their academic
              journey. Whether you are a high-achieving student, an athlete, or
              someone facing financial challenges, we have a scholarship program.    
              CHARUSAT believes in making quality education accessible to all
              deserving students. Our comprehensive scholarship programs
              support academic excellence, recognize sports achievements, and
              provide financial assistance to those in need.
            </p>
          </div>

          <Accordion activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <span className="section-icon">🎓</span>
                <span className="section-title">
                  Domestic Students Scholarships
                </span>
              </Accordion.Header>
              <Accordion.Body>
                {/* <Card className="featured-scholarship mb-4">
                  <Card.Body>
                    <h3>CHARUSAT Merit Scholarship 2025-26</h3>
                    <p>
                      Supporting excellence in academics for Undergraduate &
                      Post-Graduate Students
                    </p><br/>
                    <Link href="./assets/files/Scholarship/CHARUSAT_Merit_Scholarship_2025.pdf" className="btn btn-danger text-white" target="_blank">  
                      View Details <i className="icofont-arrow-right"></i>
                    </Link>
                  </Card.Body>
                </Card> */}

                <div className="scholarship-grid">
                  {innerData1.map((item, index) => (
                    <Card key={index} className="scholarship-card">
                      <Card.Body>
                        <h4>{item.title}</h4>
                        <p>{item.data}</p>
                        {item.link && (
                          <Link
                            href={item.link}
                            target="_blank"
                            // className="view-link"
                            className="btn btn-danger text-white"
                          >
                            View Details <i className="icofont-arrow-right"></i>
                          </Link>
                        )}
                      </Card.Body>
                    </Card>
                  ))}
                </div>
                <div className="scholarship-note">
  <h4 className="note-title">Important Note:</h4>
  <ol className="note-list">
    <li>Scholarship Amount will be decided as per Donors' directive</li>
    <li>
      An announcement will be displayed on the notice board of the institute. 
      Students who meet the requirements should submit their application form 
      and required documents without delay. Donors choose the beneficiaries 
      based on their academic merit and financial situation.
    </li>
  </ol>
</div>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <span className="section-icon">🌏</span>
                <span className="section-title">International Students</span>
              </Accordion.Header>
              <Accordion.Body>
                <p>TBD</p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <span className="section-icon">🏛️</span>
                <span className="section-title">
                  Government Scholarships (KCG, GoG)
                </span>
              </Accordion.Header>
              <Accordion.Body>
                <Card className="featured-scholarship">
                  <Card.Body>
                    <h3>Education Department Scholarships</h3>
                    <p>
                      Scholarship details from Education Department, Government
                      of Gujarat under KCG like MYSY, MKKN, SHODH,CMSS, ISEL etc.
                    </p>
                    <br/>
                    <Link
                      href="../assets/files/KCG-scheme-letter.pdf"
                      target="_blank"
                      className="action-button"
                    >
                      View Notification <i className="icofont-file-pdf"></i>
                    </Link>
                    &nbsp;&nbsp;
                    <Link
                      href="../assets/files/Scholarship/Government-Scholarship-2025-26.pdf"
                      target="_blank"
                      className="action-button"
                    >
                      View PDF <i className="icofont-file-pdf"></i>
                    </Link>
                  </Card.Body>
                </Card>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </div>
      <br/>

      <style jsx>{`
        .scholarship-section {
          background-color: #fff9f1;
          min-height: 100vh;
        }

        .header-title {
          color: white;
          font-size: 2.5rem;
          background-color: #ff4d00;
          padding: 5px;
          border-radius: 8px;
          margin-bottom: 2rem;
          text-align: center;
          font-weight: bold;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .intro-box {
          background: #0066b3;
          color: white;
          padding: 2rem;
          border-radius: 10px;
          font-size: 1.5rem;
          line-height: 1.6;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        :global(.section-icon) {
          font-size: 1.5rem;
          margin-right: 1rem;
        }

        :global(.section-title) {
          font-size: 1.2rem;
          font-weight: 600;
        }

        :global(.accordion-button) {
          background-color: white !important;
          color: #333 !important;
          box-shadow: none !important;
          padding: 1.5rem;
        }

        :global(.accordion-button:not(.collapsed)) {
          background-color: #f8f9fa !important;
          border-bottom: 3px solid #ff4d00;
        }

        :global(.featured-scholarship) {
          border: none;
          border-left: 5px solid #ff4d00;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
        }

        .scholarship-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }

        :global(.scholarship-card) {
          border: 1px solid #eee;
          border-radius: 10px;
          transition: transform 0.3s ease;
          height: 100%;
        }

        :global(.scholarship-card:hover) {
          transform: translateY(-5px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        :global(.action-button) {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #ff4d00;
          color: white;
          padding: 0.5rem 1.5rem;
          border-radius: 25px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        :global(.action-button:hover) {
          background: #0066b3;
          color: white;
        }

        :global(.view-link) {
          color: #0066b3;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        :global(.view-link:hover) {
          color: #ff4d00;
        }

        @media (max-width: 768px) {
          .scholarship-grid {
            grid-template-columns: 1fr;
          }

          .intro-box {
            padding: 1.5rem;
            font-size: 1rem;
          }

          :global(.section-title) {
            font-size: 1.1rem;
          }
      }
        .scholarship-note {
  margin-top: 2rem;
  padding: 1.5rem;
  background: #fff8f6;
  border-left: 4px solid #ff4d00;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.note-title {
  color: #ff4d00;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
}

.note-list {
  margin: 0;
  padding-left: 1.5rem;
}

.note-list li {
  color: #444;
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .scholarship-note {
    padding: 1rem;
  }
  
  .note-list li {
    font-size: 0.95rem;
  }
}
      `}</style>
    </Fragment>
  );
};

export default Scholarship;
