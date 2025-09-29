"use client";
import { Fragment } from "react";

const AcademicCouncil = () => {
    const councilMembers = [
  {
    category: "i",
    title: "The Provost (Ex-officio)",
    members: [
      {
        name: "",
        designation: "CHARUSAT",
        role: "Chairperson"
      }
    ]
  },
  {
    category: "ii",
    title: "All Deans of the Faculties of the University (Ex-officio)",
    members: [
      {
        name: "Dr. Vijay Chaudhary",
        designation: "Dean, Faculty of Technology and Engineering",
        role: "Member"
      },
      {
        name: "Dr. Samir Patel",
        designation: "Dean, Faculty of Pharmacy",
        role: "Member"
      },
      {
        name: "Dr. Sanskruti Patel",
        designation: "Dean, Faculty of Computer Science and Application",
        role: "Member"
      },
      {
        name: "Dr. Sanskruti Patel",
        designation: "Dean, Faculty of Computer Science and Application",
        role: "Member"
      },
      {
        name: "Dr. Reshma Sable",
        designation: "Dean, Faculty of Management Studies",
        role: "Member"
      },
      {
        name: "Dr. Gayatri Dave",
        designation: "Dean, Faculty of Science",
        role: "Member"
      },
      {
        name: "Dr. Dhara Patel",
        designation: "Dean, Faculty of Medical Science",
        role: "Member"
      },
      {
        name: "Dr. Bhaskar Pandya",
        designation: "Dean, Faculty of Humanities",
        role: "Member"
      },
      {
        name: "Dr. Shailesh Khant",
        designation: "Dean, Research",
        role: "Member"
      }
      // Add other deans here...
    ]
  },
  {
    category: "iii",
    title: "All Head of the Institutes / Center involved in Academic & Research activities (Ex-officio)",
    members: [
      {
        name: "Dr. Trushit Upadhyaya",
        designation: "Principal, Chandubhai S Patel Institute of Technology (CSPIT)",
        role: "Member"
      },
      {
        name: "Dr. Bankim Patel",
        designation: "Principal, Devang Patel Institute of Advanced Technology and Research (DEPSTAR)",
        role: "Member"
      },
      {
        name: "Dr. Manan Raval",
        designation: "Principal, Ramanbhai Patel College of Pharmacy (RPCP)",
        role: "Member"
      },
      {
        name: "Dr. Dharmendra Patel",
        designation: "Principal, Smt. Chandaben M Patel Institute of Computer Applications (CMPICA)",
        role: "Member"
      },
      {
        name: "Dr. Binit Patel",
        designation: "Principal, Indukaka Ipcowala Institute of Management (I2IM)",
        role: "Member"
      },
      {
        name: "Dr. Abhishek Dadhania",
        designation: "Principal, P.D. Patel Institute of Applied Sciences (PDPIAS)",
        role: "Member"
      },
      {
        name: "Dr. Anil Sharma",
        designation: "Principal, Manikaka Topawala Institute of Nursing (MTIN)",
        role: "Member"
      },
      {
        name: "Dr. Dhruv Dave",
        designation: "Principal, Ashok and Rita Patel Institute of Physiotherapy (ARIP)",
        role: "Member"
      },
      {
        name: "Dr. Dhara Patel",
        designation: "Principal, Bapubhai Desaibhai Patel Institute of Paramedical Science (BDIPS)",
        role: "Member"
      },
      {
        name: "Dr. J.P. Chaudhary",
        designation: "Coordinator, Charusat Space Research & Technology Centre (CSRTC)",
        role: "Member"
      },
      {
        name: "Dr. Mayur Sutaria",
        designation: "Coordinator of Internal Quality Assurance Cell (IQAC)",
        role: "Member"
      },
      {
        name: "Dr. Kinnari Parekh",
        designation: "Head, Dr. K.C. Patel Research & Development Centre (KRADLE)",
        role: "Member"
      },
      {
        name: "Dr. Ashwin Makwana",
        designation: "Head, Human Resource Development Centre (HRDC)",
        role: "Member"
      },
      {
        name: "Dr. Dilip Gosai",
        designation: "Head, Charusat Rural Education Development Program (CREDP)",
        role: "Member"
      }
    ]
  },
  {
    category: "iv",
    title: "One teacher from amongst all the Faculties of the University to be nominated by the Provost",
    members: [
      {
        name: "Dr. Nirav Bhatt",
        designation: "Associate Professor, Faculty of Technology & Engineering",
        role: "Member"
      },
      {
        name: "Dr. Mrunali Patel",
        designation: "Associate Professor, Faculty of Pharmacy",
        role: "Member"
      },
      {
        name: "Dr. Mittal Desai",
        designation: "Assistant Professor, Faculty of Computer Applications & Science",
        role: "Member"
      },
      {
        name: "Dr. Rajesh Sadhwani",
        designation: "Assistant Professor, Faculty of Management Studies",
        role: "Member"
      },
      {
        name: "Dr. Aditi Buch",
        designation: "Associate Professor, Faculty of Science",
        role: "Member"
      },
      {
        name: "Dr. Heta Patel",
        designation: "Assistant Professor, Faculty of Medical Science",
        role: "Member"
      },
      {
        name: "Dr. Vijay Makwana",
        designation: "Assistant Professor, Faculty of Humanities",
        role: "Member"
      }
    ]
  },
  {
    category: "v",
    title: "Two eminent (external) academicians to be nominated by the Governing Body",
    members: [
      {
        name: "Dr. Yagna Unmesh Shukla",
        designation: "Principal, Govt. Physiotherapy College Ahmedabad and President, Gujarat State Council for Physiotherapy",
        role: "Member"
      },
      {
        name: "Dr. Shirish Prabhakar Kashikar",
        designation: "Director, National Institute of Mass Communication & Journalism, Ahmedabad",
        role: "Member"
      },
      {
        name: "Prof. Rushikesh K. Joshi",
        designation: "Computer Science & Engineering Dept. IIT – Mumbai",
        role: "Member"
      }
    ]
  },
  {
    category: "vi",
    title: "Two eminent (external) professionals to be nominated by the Governing Body",
    members: [
      {
        name: "Dr. Manish Patel",
        designation: "Vice-President, Analytical Development Zydus Cadila, Ahmedabad",
        role: "Member"
      },
      {
        name: "Dr. Vijay Kanchanlal Shah",
        designation: "ABB India Ltd, Distribution Automation Bldg., Maneja, Vadodara - 390 013",
        role: "Member"
      },
      {
        name: "Dr. Atul Kumar",
        designation: "IBM Research, Indian Research Laboratory, New Delhi",
        role: "Member"
      }
    ]
  },
  {
    category: "vii",
    title: "One member from the Governing Body to be nominated by the President",
    members: [
      {
        name: "Shri Hemal Patel",
        designation: "CEO of Cyberoam, a Sophos Company",
        role: "Member"
      }
    ]
  },
  {
    category: "viii",
    title: "One member from the Board of Management to be nominated by the President",
    members: [
      {
        name: "Shri Harmanbhai T Patel",
        designation: "Former President, API Business, Zydus Cadila Healthcare Ltd",
        role: "Member"
      }
    ]
  },
  {
    category: "ix",
    title: "Provost shall have the right to invite two eminent persons from outside the University to the Academic Council as per the requirements of University",
    members: [
      {
        name: "Dr. Mukesh Patel",
        designation: "Proprietor of Lineworks Consultancy, Non-Executive Director of Dexter Consultancy Services and IT consultant",
        role: "Member"
      },
      {
        name: "Dr. Bipin Mehta",
        designation: "Former Associate Dean, School of Computer Studies, Ahmedabad University",
        role: "Member"
      }
    ]
  },
  {
    category: "x",
    title: "The Registrar (Ex-officio)",
    members: [
      {
        name: "Dr. Atul Patel",
        designation: "CHARUSAT",
        role: "Member Secretary"
      }
    ]
  },
  // Add other categories...
];
  return (
    <Fragment>
      <div className="academic-section p-4">
        <div className="container p-4 content-container">
          <div className="row justify-content-center">
            <div className="col">
              <article>
                <div className="section-wrapper">
                  <h1 className="text-center mb-4 h1 text-white fw-bold page-title">
                    Academic Council
                  </h1>

                  <div className="council-info mb-4">
                    <p className="text-justify">
                      The re-constitution of the Academic Council including ex-officio member of the
                      CHARUSAT university is as given below for the duration of three years i.e from
                      01.06.2025 to 31.05.2028.
                    </p>
                  </div>

                  <div className="table-container">
                    <div className="table-responsive">
                      <table className="table table-bordered">
                        <thead className="table-header">
                          <tr>
                            <th>SR. NO.</th>
                            <th>CATEGORY OF NOMINATION</th>
                            <th>NAME & DESIGNATION</th>
                            <th>ROLE</th>
                          </tr>
                        </thead>
                        <tbody>
                           {councilMembers.map((category) => (
        category.members.map((member, memberIndex) => (
          <tr key={`${category.category}-${memberIndex}`} 
              className={memberIndex === 0 ? 'category-header' : ''}>
            {memberIndex === 0 && (
              <>
                <td rowSpan={category.members.length} className="text-center">{category.category}</td>
                <td rowSpan={category.members.length}>{category.title}</td>
              </>
            )}
            <td>
              {member.name}<br/>
              {member.designation}
            </td>
            <td>{member.role}</td>
          </tr>
        ))
      ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>

<div className="additional-info">
  <div className="info-section">
    <h3 className="section-subtitle">Term of Nomination</h3>
    <div className="info-content">
      <p>
        The term of the nominated members other than ex-officio shall be for a period of three
        years i.e from 01.06.2025 to 31.05.2028. However, where nomination is made by
        virtue of the position, then as soon as he / she ceases to hold such position, the
        nomination will be treated automatically as cancelled. A member may resign his/her
        office by writing under his/her hand, addressed to the Chairperson, but (s)he shall
        continue in office until his/her resignation has been accepted by the Chairperson.
      </p>
      <p>
        The Registrar, CHARUSAT shall be the Member Secretary of the Academic Council
        and (s)he shall be responsible for circulation of the agenda, minutes and keeping all
        records of the meetings. The decisions in the Academic Council meeting shall be
        taken by the majority of the votes of the members present. In case of equality of votes,
        the Chairperson shall have a second or casting vote.
      </p>
    </div>
  </div>

  <div className="info-section">
    <h3 className="section-subtitle">Powers and Functions</h3>
    <ol className="powers-list">
      <li>To exercise control and general regulation over the academic policies of the
        University and be responsible for the maintaining and improvement of the
        standards of instruction, education, and evaluation in the University</li>
      <li>To considers matter of general academic interest either on its own initiative or
        on a reference from the Faculty of the University or the Board of
        Management/Governing Body and take appropriate action on the same</li>
      <li>To make Ordinances other than the first Ordinance and submit the same to
        Board of Management for further approval</li>
      <li>To recommend to the Board of Management such regulations as are consistent
        with the Act, Statute/Ordinances related to the academic functioning of the
        University including discipline of the students</li>
      <li>To make recommendations to the Board of Management regarding institution
        of new academic programmes</li>
      <li>To exercise such other powers and perform such other duties as may be
        conferred upon/assigned to it by the Statute, Ordinances & Regulations</li>
    </ol>
  </div>

  <div className="bottom-cards">
    <div className="info-card">
      <h4 className="card-title">Quorum</h4>
      <p>Half of the members of the Academic Council shall constitute the quorum
      for a meeting. When a meeting is adjourned for not meeting the quorum, the
      subsequent meeting shall have a minimum of four members present.</p>
    </div>
    <div className="info-card">
      <h4 className="card-title">Meetings</h4>
      <p>The Academic Council shall meet as may be necessary but at least twice in
      a year and at other times when convened by the Provost or in his absence by the
      person holding the charge of the office of the Provost.</p>
    </div>
  </div>
</div>

        </div>
      </div>
      
      <br/>

      

      <style jsx>{`
        .academic-section {
          background-color: #FFF8E7;
          min-height: 100vh;
          padding: 2rem 0;
        }

        .content-container {
          background-color: rgba(255, 255, 255, 0.9);
          border-radius: 15px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }

        .page-title {
          background: linear-gradient(135deg, #ff4d00, #ff6b00);
          padding: 1rem;
          border-radius: 10px;
          margin-bottom: 2rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .council-info {
          //background: linear-gradient(to right, #fff, #fff8e7);
          background-color: #FFF8E7;
          padding: 20px;
          border-radius: 10px;
          border-left: 5px solid #ff4d00;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .council-info p {
          margin-bottom: 0;
          line-height: 1.6;
          color: #444;
        }

        .table-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .table-responsive {
          margin-top: 1.5rem;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.08);
          border-radius: 10px;
          overflow: hidden;
          background: white;
          font-size: 0.9rem;
        }

        .table {
          margin-bottom: 0;
          background-color: white;
          width: 100%;
        }

        .table-header th {
          background: linear-gradient(135deg, #0066b3, #0077cc);
          color: white;
          font-weight: 600;
          padding: 10px;
          text-align: center;
          vertical-align: middle;
          font-size: 0.95rem;
        }

        th:first-child {
          width: 8%;
        }

        th:nth-child(2) {
          width: 25%;
        }

        th:last-child {
          width: 12%;
        }

        .category-header {
          background-color: #fff8e7;
        }

        tbody tr:hover {
          background-color: #fff8e7;
          transition: background-color 0.3s ease;
        }

        td {
          padding: 12px;
          vertical-align: middle;
        }

        .additional-info {
          padding: 2rem 0;
          max-width: 1200px;
          margin: 0 auto;
        }

        .info-section {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.06);
          margin-bottom: 2rem;
        }

        .section-subtitle {
          color: #0066b3;
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #ff4d00;
        }

        .info-content p {
          color: #444;
          line-height: 1.8;
          margin-bottom: 1.2rem;
          text-align: justify;
        }

        .powers-list {
          list-style-position: outside;
          padding-left: 1.5rem;
        }

        .powers-list li {
          color: #444;
          line-height: 1.6;
          margin-bottom: 1rem;
          padding-left: 0.5rem;
        }

        .bottom-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .info-card {
          background: #fff8e7;
          padding: 1.8rem;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          border-left: 4px solid #ff4d00;
        }

        .card-title {
          color: #0066b3;
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid rgba(0, 102, 179, 0.2);
        }

        .info-card p {
          color: #444;
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 768px) {
          .academic-section {
            padding: 1rem;
          }

          .table-container {
            padding: 0 15px;
          }
          
          .table-responsive {
            font-size: 0.85rem;
          }

          td, th {
            padding: 8px;
          }

          .council-info {
            padding: 15px;
          }

          .page-title {
            font-size: 1.75rem;
            padding: 0.75rem;
          }

          .info-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default AcademicCouncil;