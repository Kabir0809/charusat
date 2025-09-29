"use client";
import { Fragment } from "react";
import Link from "next/link";
import { color } from "chart.js/helpers";


const admission_doc_undertaking = () => {
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
                              Admission Documents & Undertaking
                            </h1>
                  <div>
                  <p>CHARUSAT University requires the following documents for admission, and a checklist has been provided for reference:</p>
                  <br/>
                  <div className="document-section">
  <div className="checklist-container">
                  <h4>Document Checklist:</h4>

                  <ul style={{color: "#000000",paddingLeft: "40px"}}>
    <li>10th Mark Sheet</li>
    <li>10th Passing Certificate</li>
    <li>12th Mark Sheet</li>
    <li>12th Passing Certificate</li>
    <li>Migration Certificate/Transfer Certificate</li>
    <li>2 Passport size photos</li>
    <li>Diploma/ITI Mark Sheet (For Lateral Entry Students)</li>
    <li>Graduation Mark Sheet & Degree (If Applicable)</li>
    <li>Post-Graduation Mark Sheet & Degree (If Applicable)</li>
    <li>Entrance Exam Score/Rank Card (If Applicable)</li>
    <li>Aadhaar Card (Mandatory)</li>
    <li>Caste Certificate (For SC/ST/OBC Candidates)</li>
    <li>AIU Equivalence Certificate (For students holding a foreign Certificate/Diploma/Degree for the last qualification)</li>
</ul>
</div>

<div className="booklet-container">
    <Link 
      href="/assets/files/Admission-doc-undertaking/Admission-Booklet-2025-26.pdf" 
      target="_blank"
      className="admission-booklet-link"
    >
      <div className="booklet-content">
        <span className="pulse-icon">📚</span>
        <h3>Admission Booklet</h3>
        <p>2025-26</p>  
      </div>
    </Link>
  </div>
</div>
<br/>
<p><strong>Note:</strong> Students are required to bring both <b>photocopies and original documents</b> for verification.</p>
<h4>Undertaking (Mandatory): </h4>
<ul style={{color: "#000000",paddingLeft: "40px"}}>
    <li>Declaration cum Undertaking for Admission -<Link className="pdfLink" href="/assets/files/Admission-doc-undertaking/Undertaking_for_Admission.pdf" target="_blank"> <i
                                        className="icofont-file-pdf"
                                        style={{
                                          fontSize: "22px",
                                          color: "red",
                                        }}
                                      ></i></Link>
                                      </li>
    <li>Declaration cum Undertaking for Provisional Admission - <Link className="pdfLink" href="/assets/files/Admission-doc-undertaking/Undertaking_for_Provisional_Admission.pdf" target="_blank"> <i
                                        className="icofont-file-pdf"
                                        style={{
                                          fontSize: "22px",
                                          color: "red",
                                        }}
                                      ></i></Link></li>
    <li>Student Code of Conduct and Disciplinary Rules Undertaking - <Link className="pdfLink" href="/assets/files/Admission-doc-undertaking/Student_Code_of_Conduct_and_Disciplinary_Rules_Undertaking.pdf" target="_blank"> <i
                                        className="icofont-file-pdf"
                                        style={{
                                          fontSize: "22px",
                                          color: "red",
                                        }}
                                      ></i></Link></li>
    <li>UGC Anti-Ragging Form - <Link href="https://antiragging.in/affidavit_registration_disclaimer.html" target="_blank"> <i class="icofont-link" style={{
                                          fontSize: "22px",
                                          color: "red",
                                        }}>click here</i></Link></li>
</ul>
<p><strong>Note:</strong> Undertakings must be completed and submitted at the time of admission.</p>
                  </div>
               
                  

                  
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
          .document-section {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    margin: 2rem 0;
  }

  .booklet-container {
    position: relative;
    animation: float 3s ease-in-out infinite;
  }

  .admission-booklet-link {
    display: block;
    background: linear-gradient(135deg, #ff4d00 0%, #ff6a00 100%);
    padding: 2rem;
    border-radius: 12px;
    text-decoration: none;
    color: white;
    text-align: center;
    transition: transform 0.3s ease;
    box-shadow: 0 4px 15px rgba(255, 77, 0, 0.2);
  }

  .admission-booklet-link:hover {
    transform: translateY(-5px);
  }

  .booklet-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .pulse-icon {
    font-size: 2.5rem;
    animation: pulse 2s infinite;
  }

  .booklet-content h3 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
  }

  .booklet-content p {
    margin: 0;
    font-size: 1.2rem;
    opacity: 0.9;
  }

  .view-text {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    font-size: 0.9rem;
    animation: blink 1.5s infinite;
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }

  @keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
  }

  @media (max-width: 768px) {
    .document-section {
      grid-template-columns: 1fr;
    }

    .booklet-container {
      margin: 1rem 0;
    }

    .admission-booklet-link {
      padding: 1.5rem;
    }

    .pulse-icon {
      font-size: 2rem;
    }

    .booklet-content h3 {
      font-size: 1.2rem;
    }

    .booklet-content p {
      font-size: 1rem;
    }
  }
      `}</style>
    </Fragment>
  );
};

export default admission_doc_undertaking;
