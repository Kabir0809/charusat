"use client";
import { Navbar, Container, Nav, NavDropdown, Dropdown } from "react-bootstrap";
import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "@/css/navigation.css";

import Link from "next/link";

import Image from "next/image";
import Logo from "@/public/assets/images/logo/CHARUSAT_NEW.png";

const Navigation_temp = () => {
  const [activeLink, setActiveLink] = useState("");

  return (
    <div className="bg-white">
      <header
        className="container"
        style={{
          shadow: "none",
        }}
        onClick={() => {
          document.getElementById("Academics").style.display = "none";
          document.getElementById("Admission").style.display = "none";
          document.getElementById("Research").style.display = "none";
          document.getElementById("KnowCHARUSAT").style.display = "none";
        }}
        role="banner"
        aria-label="Main navigation header"
      >
        <nav className="nav" role="navigation" aria-label="Primary navigation">
          <div className="logo">
            <Link href="/" className="charusat-main" aria-label="CHARUSAT University Homepage">
              <Image
                src={Logo}
                alt="CHARUSAT University Logo"
                style={{
                  width: "17rem",
                }}
              />
            </Link>
          </div>
          <div className="nav-links">
            <ul className={`links `} role="menubar" aria-label="Main navigation menu">
              <li className="link" role="none">
                <Link
                  id="Home-link"
                  href="/"
                  className={`${
                    activeLink === "Home" ? "green-text" : "green"
                  }`}
                  role="menuitem"
                  aria-current={activeLink === "Home" ? "page" : undefined}
                >
                  Home
                </Link>
              </li>

              <li
                className="link  "
                onMouseOver={() => {
                  document.getElementById("KnowCHARUSAT").style.display =
                    "grid";
                  setActiveLink("KnowCHARUSAT");
                }}
                onMouseOut={() => {
                  document.getElementById("KnowCHARUSAT").style.display =
                    "none";
                }}
                onFocus={() => {
                  document.getElementById("KnowCHARUSAT").style.display =
                    "grid";
                  setActiveLink("KnowCHARUSAT");
                }}
                onBlur={() => {
                  setTimeout(() => {
                    if (!document.getElementById("KnowCHARUSAT").matches(':hover')) {
                      document.getElementById("KnowCHARUSAT").style.display =
                        "none";
                    }
                  }, 100);
                }}
                role="none"
              >
                <Link
                  id="KnowCHARUSAT-link"
                  href=""
                  className={`${
                    activeLink === "KnowCHARUSAT" ? "green-text" : "green"
                  }`}
                  role="menuitem"
                  aria-haspopup="true"
                  aria-expanded={activeLink === "KnowCHARUSAT"}
                  aria-controls="KnowCHARUSAT"
                >
                  About Us
                </Link>
              </li>
              <li
                className={`link green-text  `}
                onMouseOver={() => {
                  document.getElementById("Academics").style.display = "grid";
                  setActiveLink("Academics");
                }}
                onMouseOut={() => {
                  document.getElementById("Academics").style.display = "none";
                }}
                onFocus={() => {
                  document.getElementById("Academics").style.display = "grid";
                  setActiveLink("Academics");
                }}
                onBlur={() => {
                  setTimeout(() => {
                    if (!document.getElementById("Academics").matches(':hover')) {
                      document.getElementById("Academics").style.display = "none";
                    }
                  }, 100);
                }}
                role="none"
              >
                <Link
                  href=""
                  className={`${
                    activeLink === "Academics" ? "green-text" : "green"
                  }`}
                  role="menuitem"
                  aria-haspopup="true"
                  aria-expanded={activeLink === "Academics"}
                  aria-controls="Academics"
                >
                  Programmes
                </Link>
              </li>

              <li
                className="link  "
                onMouseOver={() => {
                  document.getElementById("Research").style.display = "grid";
                  setActiveLink("Research");
                }}
                onMouseOut={() => {
                  document.getElementById("Research").style.display = "none";
                }}
                onFocus={() => {
                  document.getElementById("Research").style.display = "grid";
                  setActiveLink("Research");
                }}
                onBlur={() => {
                  setTimeout(() => {
                    if (!document.getElementById("Research").matches(':hover')) {
                      document.getElementById("Research").style.display = "none";
                    }
                  }, 100);
                }}
                role="none"
              >
                <Link
                  id="Research-link"
                  href=""
                  className={`${
                    activeLink === "Research" ? "green-text" : "green"
                  }`}
                  role="menuitem"
                  aria-haspopup="true"
                  aria-expanded={activeLink === "Research"}
                  aria-controls="Research"
                >
                  Research
                </Link>
              </li>

              {/* <li
                className="link  "
                onMouseOver={() => {
                  document.getElementById("centers-and-cells").style.display =
                    "grid";
                  setActiveLink("centers-and-cells");
                }}
                onMouseOut={() => {
                  document.getElementById("centers-and-cells").style.display =
                    "none";
                }}
              >
                <Link
                  id="centers-and-cells-link"
                  href="#"
                  className={`${
                    activeLink === "centers-and-cells" ? "green-text" : "green"
                  }`}
                >
                  Centers & Cells
                </Link>
              </li> */}

              <li className="link  " role="none">
                <Link
                  id="CampusLife-link"
                  href="/campus-life"
                  className={`${
                    activeLink === "CampusLife" ? "green-text" : "green"
                  }`}
                  role="menuitem"
                  aria-current={activeLink === "CampusLife" ? "page" : undefined}
                >
                  Campus Life
                </Link>
              </li>
              <li className="link" role="none">
                <Link
                  id="Admission-link"
                  href="http://admission.charusat.ac.in/"
                  className={`${
                    activeLink === "Admission" ? "green-text" : "green"
                  }`}
                  role="menuitem"
                  aria-label="Enquire Now for Admission 2025"
                >
                  <span className="support-btn" style={{ color: "white" }}>
                    Enquire Now - Admission 2025
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div
          className="menu-4"
          id="Academics"
          onMouseOver={() => {
            document.getElementById("Academics").style.display = "grid";
            setActiveLink("Academics");
          }}
          onMouseOut={() => {
            document.getElementById("Academics").style.display = "none";
            setActiveLink("");
          }}
          role="menu"
          aria-labelledby="Academics-link"
          aria-hidden={activeLink !== "Academics"}
        >
          <div className="menu-div">
            <div className="menu-d border-b">
              <h5 className="menu-head" role="presentation">Learn Online</h5>
              <div className="menu-items" role="group" aria-label="Learn Online options">
                <Link href="http://ILMS.CHARUSAT.ac.in" className="menu-link" role="menuitem" aria-label="iLMS portal - opens external site">
                  iLMS
                </Link>
              </div>
            </div>

            <div className="menu-d ">
              <h5 className="menu-head" role="presentation">Other Programmes</h5>
              <div className="menu-items" role="group" aria-label="Other programmes options">
                <Link href="/certification-courses" className="menu-link" role="menuitem" aria-label="Certification and Audit Courses - Professional certifications">
                  Certification & Audit Courses
                </Link>
                <Link href="/course-single#6402" className="menu-link" role="menuitem" aria-label="General Nursing and Midwifery GNM - Healthcare program">
                  General Nursing & Midwifery (GNM)
                </Link>
                <Link href="/course-single#6303" className="menu-link" role="menuitem" aria-label="PG Diploma in Clinical Hypnosis PGDCH - Medical specialization">
                  PG Diploma in Clinical Hypnosis (PGDCH)
                </Link>
                <Link href="/course-single#PGDEAMT" className="menu-link" role="menuitem" aria-label="PG Diploma in Environmental Auditing Monitoring and Technology PGDEAMT - Environmental studies">
                  PG Diploma in Environmental Auditing, Monitoring and
                  Technology(PGDEAMT)
                </Link>
                <Link href="/course-single#PGDMLT" className="menu-link" role="menuitem" aria-label="PG Diploma in Medical Laboratory Technology PGDMLT - Medical technology">
                  PG Diploma in Medical Laboratory Technology (PGDMLT)
                </Link>
                <Link href="/course-single#PBBSC" className="menu-link" role="menuitem" aria-label="Post Basic B.Sc. in Nursing P.B.B.Sc - Advanced nursing program">
                  Post Basic B.Sc. in Nursing (P.B.B.Sc)
                </Link>
                <Link href="/course-single#5506" className="menu-link" role="menuitem" aria-label="PG Diploma in Data Science PGDDS - Data science specialization">
                  PG Diploma in Data Science (PGDDS)
                </Link>
              </div>
            </div>
          </div>
          <div className="menu-div border-left">
            <h5 className="menu-head" role="presentation">Undergraduate Studies</h5>
            <div className="menu-items" role="group" aria-label="Undergraduate studies options">
              <Link href="/course-single#PBBSC" className="menu-link" role="menuitem" aria-label="B.Tech - Bachelor of Technology">
                B.Tech.
              </Link>
              <Link href="/course-single#2401" className="menu-link" role="menuitem" aria-label="BCA - Bachelor of Computer Applications">
                BCA
              </Link>
              <Link href="/course-single#2402" className="menu-link" role="menuitem" aria-label="B.Sc. Information Technology - Undergraduate IT program">
                B.Sc. (Information Technology)
              </Link>
              <Link href="/course-single#2502" className="menu-link" role="menuitem" aria-label="B.Pharm - Bachelor of Pharmacy">
                B.Pharm.
              </Link>
              <Link href="/course-single#BLIS" className="menu-link" role="menuitem" aria-label="BBA - Bachelor of Business Administration">
                BBA
              </Link>

              <Link href="/course-single#6401" className="menu-link" role="menuitem" aria-label="BPT Bachelor of Physiotherapy - Physical therapy degree">
                BPT (Bachelor of Physiotherapy)
              </Link>
              <Link href="/course-single#6402" className="menu-link" role="menuitem" aria-label="B.Sc. Nursing - Bachelor of Science in Nursing">
                B.Sc. (Nursing)
              </Link>
              <Link href="/course-single#6405" className="menu-link" role="menuitem" aria-label="B.Optom Bachelor of Optometry - Vision care program">
                B.Optom. (Bachelor of Optometry)
              </Link>
              <Link href="/course-single#6403" className="menu-link" role="menuitem" aria-label="B.Sc. Medical Imaging Technology - Medical imaging program">
                B.Sc. (Medical Imaging Technology)
              </Link>
              <Link href="/course-single#6406" className="menu-link" role="menuitem" aria-label="B.Sc. Medical Technology - Medical technology program">
                B.Sc. (Medical Technnology)
              </Link>
              <Link href="/course-single#6404" className="menu-link" role="menuitem" aria-label="B.Sc. Operation Theatre and Anesthesia Technology - Surgical support program">
                B.Sc. (Operation Theatre & Anesthesia Tech.)
              </Link>
              <Link href="/course-single#5401" className="menu-link" role="menuitem" aria-label="B.Sc. Chemistry - Bachelor of Science in Chemistry">
                B.Sc. (Chemistry)
              </Link>
              <Link href="/course-single#5401" className="menu-link" role="menuitem" aria-label="B.Sc. Microbiology Biotechnology Biochemistry - Life sciences program">
                B.Sc. (Microbio/Biotech/Biochem)
              </Link>
              <Link href="/course-single" className="menu-link" role="menuitem" aria-label="B.A. English - Bachelor of Arts in English">
                B.A. (English)
              </Link>
              <Link href="/course-single" className="menu-link" role="menuitem" aria-label="Bachelor of Library and Information Science - Library science degree">
                Bachelor of Library & Information Science
              </Link>
            </div>
          </div>
          <div className="menu-div border-left">
            <h5 className="menu-head" role="presentation">Postgraduate Studies</h5>
            <div className="menu-items" role="group" aria-label="Postgraduate studies options">
              <Link href="/course-single#6001" className="menu-link" role="menuitem" aria-label="M.Tech - Master of Technology">
                M.Tech.
              </Link>
              <Link href="/course-single#2501" className="menu-link" role="menuitem" aria-label="MCA - Master of Computer Applications">
                MCA
              </Link>
              <Link href="/course-single#2502" className="menu-link" role="menuitem" aria-label="M.Sc. Information Technology - Master's in IT">
                M.Sc. (Information Technology)
              </Link>
              <Link href="/course-single#3501" className="menu-link" role="menuitem" aria-label="M.Pharm - Master of Pharmacy">
                M.Pharm.
              </Link>
              <Link href="/course-single#4401" className="menu-link" role="menuitem" aria-label="MBA - Master of Business Administration">
                MBA
              </Link>
              <Link href="/course-single#5505" className="menu-link" role="menuitem" aria-label="M.Sc. Advanced Organic Chemistry - Specialized chemistry program">
                M.Sc. (Advanced Organic Chemistry)
              </Link>

              <Link href="/course-single#5501" className="menu-link" role="menuitem" aria-label="M.Sc. Biotechnology Biochemistry Microbiology - Life sciences master's">
                M.Sc. (Biotech/Biochem/Microbio)
              </Link>

              <Link href="/course-single#5506" className="menu-link" role="menuitem" aria-label="M.Sc. Physics and Mathematics - Science master's program">
                M.Sc. (Physics / Maths)
              </Link>
              <Link href="/course-single#6501" className="menu-link" role="menuitem" aria-label="MPT Master of Physiotherapy - Advanced physical therapy">
                MPT (Master of Physiotherapy)
              </Link>
              <Link href="/course-single#6510" className="menu-link" role="menuitem" aria-label="M.Sc. Nursing - Master of Science in Nursing">
                M.Sc. (Nursing)
              </Link>
              <Link href="/course-single#6514" className="menu-link" role="menuitem" aria-label="M.Sc. Medical Imaging Technology - Advanced medical imaging">
                M.Sc. (Medical Imaging Technology)
              </Link>
              <Link href="/course-single#6513" className="menu-link" role="menuitem" aria-label="M.Sc. Medical Laboratory Technology - Advanced lab technology">
                M.Sc. (Medical Laboratory Technology)
              </Link>
              <Link href="/course-single#MSOTAT" className="menu-link" role="menuitem" aria-label="M.Sc. Operation Theater and Anaesthesia Technology - Surgical technology master's">
                M.Sc. (Operation Theater & Anaesthesia Technology)
              </Link>
              <Link href="/course-single#4501" className="menu-link" role="menuitem" aria-label="M.Sc. Management - Master of Science in Management">
                M.Sc. (Management)
              </Link>
            </div>
          </div>
          <div className="menu-div border-left">
            <div className="menu-d">
              <h5 className="menu-head" role="presentation">Ph. D. Programmes</h5>
              <div className="menu-items" role="group" aria-label="PhD programmes options">
                {/* <Link href="#" target="_blank" className="menu-link">
                  General Information
                </Link> */}
                <Link
                  href="./assets/images/phd/Phd_2025_ad.webp"
                  target="_blank"
                  className="menu-link"
                  role="menuitem"
                  aria-label="PhD Advertisement August-Intake-2025 - opens in new tab"
                >
                  PhD Advertisement August-Intake-2025
                </Link>
                <Link
                  href="https://admission.charusat.ac.in/Registration.aspx"
                  target="_blank"
                  className="menu-link"
                  role="menuitem"
                  aria-label="PhD Admission Apply Now for August Intake-2025 - opens in new tab"
                >
                  PhD Admission Apply Now (August Intake-2025)
                </Link>
                <Link
                  href="assets\files\PHD\PhD_Regulations.pdf"
                  target="_blank"
                  className="menu-link"
                  role="menuitem"
                  aria-label="PhD Regulations 2024 PDF - opens in new tab"
                >
                  PhD Regulations 2024
                </Link>

                {/* <Link
                  href="assets/files/PHD/Selected-Candidates-PhD-January-2025-Intake.pdf"
                  target="_blank"
                  className="menu-link"
                >
                  Selected Candidates PhD January-2025 Intake
                </Link> */}
                <Link
                  href="assets\files\PHD\Guidelines for writing PhD Thesis 2024.pdf"
                  target="_blank"
                  className="menu-link"
                  role="menuitem"
                  aria-label="PhD Thesis Writing Guidelines PDF - opens in new tab"
                >
                  PhD Thesis Writing Guidelines
                </Link>
              </div>
            </div>
            <hr />
            <h5 className="menu-head" role="presentation">Information You May Need!!!</h5>
            <div className="menu-items" role="group" aria-label="Additional information options">
              <Link href="/admission-doc-undertaking" className="menu-link" role="menuitem" aria-label="Admission Documents and Undertaking - Required admission paperwork">
                Admission Documents & Undertaking
              </Link>
              <Link
                href="https://drive.google.com/drive/folders/1q_EzJ35jhwmP1HDptaPSJpbQk_9emNV0?usp=sharing"
                className="menu-link"
                target="_blank"
                role="menuitem"
                aria-label="Academic Calendar - opens in new tab"
              >
                Academic Calender
              </Link>
              {/* <Link href="/student-corner" className="menu-link">
                Student&apos;s Corner
              </Link> */}
              <Link href="/cdpc" className="menu-link" role="menuitem" aria-label="Career Development and Placements - Career services">
                Career Development and Placements
              </Link>

              <Link
                href="/student-development-initiatives"
                className="menu-link"
                role="menuitem"
                aria-label="Initiatives - Student development programs"
              >
                Initiatives
              </Link>
              <Link href="/library" className="menu-link" role="menuitem" aria-label="Knowledge Resource Center - University library">
                Knowledge Resource Center
              </Link>
              <Link href="/code-of-conduct" className="menu-link" role="menuitem" aria-label="Code of Conduct - University policies and guidelines">
                Code of Conduct
              </Link>
              <Link
                href="https://www.studyinindia.gov.in/admission/registrations"
                className="menu-link"
                role="menuitem"
                aria-label="Study In India - opens in new tab"
              >
                Study In India
              </Link>
            </div>
          </div>
        </div>

        <div
          className="menu"
          id="Admission"
          onMouseOver={() => {
            document.getElementById("Admission").style.display = "grid";
            setActiveLink("Admission");
          }}
          onMouseOut={() => {
            document.getElementById("Admission").style.display = "none";
            setActiveLink("");
          }}
          role="menu"
          aria-labelledby="Admission-link"
          aria-hidden={activeLink !== "Admission"}
        >
          <div className="menu-div">
            <h5 className="menu-head" role="presentation">National</h5>
            <div className="menu-items" role="group" aria-label="National admission options">
              <Link
                href="https://admission.charusat.ac.in/"
                className="menu-link"
                role="menuitem"
                aria-label="Apply Now for National Admission"
              >
                Apply Now
              </Link>

              <Link
                href="https://drive.google.com/file/d/1zzlAVorLJXqcde1JAKHlMyBc8sJuvUov/view"
                className="menu-link"
                role="menuitem"
                aria-label="View Fees for National Students"
              >
                Fees
              </Link>
              <Link href="#" className="menu-link" role="menuitem" aria-label="Contact WhatsApp for National Admission">
                <i
                  className="icofont-brand-whatsapp"
                  style={{ color: "#3db166" }}
                  aria-hidden="true"
                ></i>{" "}
                +91 9825961830
              </Link>
            </div>
          </div>
          <div className="menu-div border-left">
            <h5 className="menu-head" role="presentation">International</h5>
            <div className="menu-items" role="group" aria-label="International admission options">
              <Link
                href="https://admission.charusat.ac.in/"
                className="menu-link"
                role="menuitem"
                aria-label="Apply Now for International Admission"
              >
                Apply Now
              </Link>

              <Link href="#" target="_blank" className="menu-link" role="menuitem" aria-label="View Fees for International Students">
                Fees
              </Link>
              <Link href="#" className="menu-link" role="menuitem" aria-label="Contact WhatsApp for International Admission">
                <i
                  className="icofont-brand-whatsapp"
                  style={{ color: "#3db166" }}
                  aria-hidden="true"
                ></i>{" "}
                +91 9173701614
              </Link>
            </div>
          </div>
          <div className="menu-div border-left">
            <h5 className="menu-head" role="presentation">Other</h5>
            <div className="menu-items" role="group" aria-label="Other admission related options">
              <Link
                href="https://charusat.ac.in//assets/files/Research/2024/new/UGSF_Policy_CHARUSAT_2024.pdf"
                target="_blank"
                className="menu-link"
                role="menuitem"
                aria-label="Undergraduate Student Fellowship PDF - opens in new tab"
              >
                Undergraduate Student Fellowship
              </Link>
              <Link
                href="https://charusat.ac.in//assets/files/Research/2024/new/PGSF_Policy_CHARUSAT_2024.pdf"
                target="_blank"
                className="menu-link"
                role="menuitem"
                aria-label="Postgraduate Student Fellowship PDF - opens in new tab"
              >
                Postgraduate Student Fellowship
              </Link>
              <Link
                href="https://charusat.ac.in/documents/pdfs/research/PDF%20Policy%20CHARUSAT.pdf"
                target="_blank"
                className="menu-link"
                role="menuitem"
                aria-label="PhD Scholars Fellowship PDF - opens in new tab"
              >
                Ph. D. Scholars&apos; Fellowship
              </Link>
              <Link
                href="https://charusat.ac.in//assets/files/Research/2024/new/PDF_Policy_CHARUSAT_2024.pdf"
                target="_blank"
                className="menu-link"
                role="menuitem"
                aria-label="Post Doctoral Fellowship Programme PDF - opens in new tab"
              >
                Post Doctoral Fellowship Programme
              </Link>
              <Link href="/scholarship" className="menu-link" role="menuitem" aria-label="Scholarship - Financial aid and scholarships">
                Scholarship
              </Link>
              <Link href="/hostels" className="menu-link" role="menuitem" aria-label="Hostels - Student accommodation">
                Hostels
              </Link>
              <Link href="/transport" className="menu-link" role="menuitem" aria-label="Transportation - Campus transport services">
                Transportation
              </Link>
            </div>
          </div>
        </div>

        <div
          className="menu"
          id="Research"
          onMouseOver={() => {
            document.getElementById("Research").style.display = "grid";
            setActiveLink("Research");
          }}
          onMouseOut={() => {
            document.getElementById("Research").style.display = "none";
            setActiveLink("");
          }}
          role="menu"
          aria-labelledby="Research-link"
          aria-hidden={activeLink !== "Research"}
        >
          <div className="menu-div">
            <h5 className="menu-head" role="presentation">Initiatives</h5>
            <div className="menu-items" role="group" aria-label="Research initiatives options">
              <Link
                href="https://youtu.be/Og4NMqI3q5M"
                target="_blank"
                className="menu-link"
                role="menuitem"
                aria-label="Laboratories video - opens YouTube"
              >
                Laboratories
              </Link>
              <Link
                href="https://charusat.ac.in/charusatjournal/"
                className="menu-link"
                role="menuitem"
                aria-label="CHARUSAT Journal - opens external site"
              >
                CHARUSAT Journal
              </Link>

              <Link href="/csic" className="menu-link" role="menuitem" aria-label="Charusat Startup and Innovation Centre CSIC - Entrepreneurship support">
                Charusat Startup and Innovation Centre (CSIC)
              </Link>
              <Link href="http://kradle.charusat.ac.in/" className="menu-link" role="menuitem" aria-label="Dr. K. C. Patel Research and Development Centre - opens external site">
                Dr. K. C. Patel Research and Development Centre (KRADLE)
              </Link>

              <Link href="/ipr" className="menu-link" role="menuitem" aria-label="IPR Cell - Intellectual Property Rights">
                IPR Cell
              </Link>
              <Link href="/research" className="menu-link" role="menuitem" aria-label="Research Facilitation - Research support services">
                Research Facilitation
              </Link>
              <Link href="/csrtc" className="menu-link" role="menuitem" aria-label="Charusat Space Research and Technology Center CSRTC - Space research">
                Charusat Space Research and Technology Center (CSRTC)
              </Link>
              <Link href="/IEC" className="menu-link" role="menuitem" aria-label="Institutional Ethics Committee - Research ethics">
                Institutional Ethics Committee
              </Link>
              <Link
                href="/assets/files/Environment-Sustainable-Policy/Water_Conservation_Policy.pdf"
                target="_blank"
                className="menu-link"
                role="menuitem"
                aria-label="Water Conservation Policy PDF - opens in new tab"
              >
                Water Conservation Policy
              </Link>
              <Link
                href="/assets/files/Environment-Sustainable-Policy/Plastic_Ban_Policy.pdf"
                target="_blank"
                className="menu-link"
                role="menuitem"
                aria-label="Plastic Ban Policy PDF - opens in new tab"
              >
                Plastic Ban Policy
              </Link>
              <Link
                href="/assets/files/Environment-Sustainable-Policy/Environment_Conservation Policy.pdf"
                target="_blank"
                className="menu-link"
                role="menuitem"
                aria-label="Environmental Conservation Policy PDF - opens in new tab"
              >
                Environmental Conservation Policy
              </Link>

              <Link
                href="/assets/files/Environment-Sustainable-Policy/Sustainbility_Policy.pdf"
                target="_blank"
                className="menu-link"
                role="menuitem"
                aria-label="Sustainability Policy PDF - opens in new tab"
              >
                Sustainability Policy
              </Link>
              <Link
                href="/assets/files/Environment-Sustainable-Policy/Energy_Conservation_Policy.pdf"
                target="_blank"
                className="menu-link"
                role="menuitem"
                aria-label="Energy Conservation Policy PDF - opens in new tab"
              >
                Energy Conservation Policy
              </Link>
            </div>
          </div>

          <div className="menu-div border-left">
            <h5 className="menu-head" role="presentation">Policies</h5>
            <div className="menu-items" role="group" aria-label="Research policies options">
              <Link
                href="https://charusat.ac.in//assets/files/Research/2024/new/PDF_Policy_CHARUSAT_2024.pdf"
                target="_blank"
                className="menu-link"
                role="menuitem"
                aria-label="Post Doctoral Fellowship Programme PDF - opens in new tab"
              >
                Post Doctoral Fellowship Programme
              </Link>

              <Link
                href="https://charusat.ac.in//assets/files/Research/2024/new/CPSF_Policy_CHARUSAT_2024.pdf"
                target="_blank"
                className="menu-link"
                role="menuitem"
                aria-label="PhD Scholars Fellowship CPSF PDF - opens in new tab"
              >
                Ph. D. Scholars&apos; Fellowship (CPSF)
              </Link>

              <Link
                href="https://charusat.ac.in//assets/files/Research/2024/new/UGSF_Policy_CHARUSAT_2024.pdf"
                target="_blank"
                className="menu-link" //charusat.ac.in/documents/pdfs/research/PGSF.pdf
                role="menuitem"
                aria-label="Undergraduate Student Fellowship UGSF PDF - opens in new tab"
              >
                Undergraduate Student Fellowship(UGSF)
              </Link>

              <Link
                href="https://charusat.ac.in//assets/files/Research/2024/new/PGSF_Policy_CHARUSAT_2024.pdf"
                target="_blank"
                className="menu-link"
                role="menuitem"
                aria-label="Postgraduate Student Fellowship PGSF PDF - opens in new tab"
              >
                Postgraduate Student Fellowship(PGSF)
              </Link>

              <Link
                href="https://charusat.ac.in//assets/files/Research/2024/new/CSGR_Policy_CHARUSAT_2024.pdf"
                target="_blank"
                className="menu-link"
                role="menuitem"
                aria-label="CHARUSAT Research Grants CRG PDF - opens in new tab"
              >
                CHARUSAT Research Grants (CRG)
              </Link>
              <Link
                href="https://charusat.ac.in//assets/files/Research/2024/new/Research_Policy_CHARUSAT_2024.pdf"
                target="_blank"
                className="menu-link"
                role="menuitem"
                aria-label="Research Policy Summary PDF - opens in new tab"
              >
                Research Policy - Summary
              </Link>
              <Link
                href="https://charusat.ac.in//assets/files/Research/2024/new/RPA_Policy_CHARUSAT_2024.pdf"
                target="_blank"
                className="menu-link"
                role="menuitem"
                aria-label="Research Paper Award RPA PDF - opens in new tab"
              >
                Research Paper Award (RPA)
              </Link>
              <Link
                href="https://charusat.ac.in//assets/files/Research/2024/new/CSRI_Policy_CHARUSAT_2024.pdf"
                target="_blank"
                className="menu-link"
                role="menuitem"
                aria-label="Summer Research Internship CSRI PDF - opens in new tab"
              >
                Summer Research Internship(CSRI)
              </Link>

              <Link
                href="https://charusat.ac.in//assets/files/Research/2024/new/Plagiarism_Policy_CHARUSAT_2024.pdf"
                target="_blank"
                className="menu-link"
                role="menuitem"
                aria-label="Plagiarism Policy PDF - opens in new tab"
              >
                Plagiarism
              </Link>
              <Link
                href="https://charusat.ac.in//assets/files/Research/2024/new/IPR_Policy_CHARUSAT_2024.pdf"
                target="_blank"
                className="menu-link"
                role="menuitem"
                aria-label="IPR Policy PDF - opens in new tab"
              >
                IPR Policy
              </Link>
              <Link
                href="https://charusat.ac.in//assets/files/Research/2024/new/Consultancy_Policy_CHARUSAT_2024.pdf"
                className="menu-link"
                role="menuitem"
                aria-label="Consultancy Policy PDF"
              >
                Consultancy
              </Link>
              <Link
                href="https://charusat.ac.in/documents/pdfs/research/Guidelines_for_Financial_Assistance_to_full-time_UG_PG_&_Ph.D_Scholar.pdf"
                target="_blank"
                className="menu-link"
                role="menuitem"
                aria-label="Financial Support Guidelines for UG PG PhD Scholars PDF - opens in new tab"
              >
                Financial Support to full time UG, PG and Ph.D Scholar for
                Presenting Research Paper
              </Link>
              <Link
                href="https://charusat.ac.in/documents/pdfs/research/Employee Development and Event Support Policy.pdf"
                target="_blank"
                className="menu-link"
                role="menuitem"
                aria-label="Employee Development and Research Support Scheme PDF - opens in new tab"
              >
                Employee Development and Research Support Scheme
              </Link>

              <Link
                href="https://charusat.ac.in//assets/files/Research/2024/new/Endowment_Policy_CHARUSAT_2024.pdf"
                target="_blank"
                className="menu-link"
                role="menuitem"
                aria-label="Endowment Policy PDF - opens in new tab"
              >
                Endowment Policy
              </Link>
            </div>
          </div>
          <div className="menu-div border-left">
            <h5 className="menu-head" role="presentation">Outcomes</h5>
            <div className="menu-items" role="group" aria-label="Research outcomes options">
              <Link href="/publications" className="menu-link" role="menuitem" aria-label="Publications - Research publications and papers">
                Publications
              </Link>
              <Link href="/project-grants" className="menu-link" role="menuitem" aria-label="Project Research Grants - Funded research projects">
                Project/Research Grants
              </Link>
              <Link href="/intellectual-property" className="menu-link" role="menuitem" aria-label="Intellectual Property - Patents and IP">
                Intellectual Property
              </Link>
            </div>
          </div>
        </div>
        {/* centers and cells */}
        {/* <div
          className="menu"
          id="centers-and-cells"
          onMouseOver={() => {
            document.getElementById("centers-and-cells").style.display = "grid";
            setActiveLink("centers-and-cells");
          }}
          onMouseOut={() => {
            document.getElementById("centers-and-cells").style.display = "none";
            setActiveLink("");
          }}
        >
          <div className="menu-d ">&nbsp;</div>
          <div className="menu-div border-left">
            <h5 className="menu-head">Centers & Cells</h5>
            <div className="menu-items">
              <Link href="/anti-ragging" className="menu-link">
                Anti-Ragging Committee
              </Link>
              <Link href="/eoc" className="menu-link">
                Equal Opportunity Cell
              </Link>

              <Link href="/GRC" className="menu-link">
                Grievance Redressal Cell
              </Link>
              <Link href="/csic" className="menu-link">
                Charusat Startup and Innovation Centre
              </Link>
              <Link
                href="/university-industry-interaction-cell"
                className="menu-link"
              >
                University Industry Interaction Cell
              </Link>
              <Link href="/wdc" className="menu-link">
                Womens&apos; Development Cell
              </Link>
              <Link href="/hrdc" className="menu-link">
                Pri. B I Patel Human Resource Development Center
              </Link>
              <Link href="https://isc.charusat.ac.in/" className="menu-link">
                International Students&apos; Cell
              </Link>
              <Link href="/ICC" className="menu-link">
                Internal Complaint Committee (ICC)
              </Link>

              <Link href="/CREDP" className="menu-link">
                Charusat Rural Education Development Program
              </Link>

              <Link href="/wincell" className="menu-link">
                Data Center @ CHARUSAT - WINCELL
              </Link>
            </div>
          </div>
          <div className="menu-div border-left"></div>
        </div> */}

        {/* CAmpus life menu */}

        <div
          className="menu"
          id="KnowCHARUSAT"
          onMouseOver={() => {
            document.getElementById("KnowCHARUSAT").style.display = "grid";
            setActiveLink("KnowCHARUSAT");
          }}
          onMouseOut={() => {
            document.getElementById("KnowCHARUSAT").style.display = "none";
            setActiveLink("");
          }}
          role="menu"
          aria-labelledby="KnowCHARUSAT-link"
          aria-hidden={activeLink !== "KnowCHARUSAT"}
        >
          <div className="menu-div">
            <div className="menu-d ">
              <h5 className="menu-head" role="presentation">About University</h5>
              <div className="menu-items" role="group" aria-label="About University options">
                <Link
                  href="assets\files\Gazette-Notification-Private-University-Act.pdf"
                  target="_blank"
                  className="menu-link"
                  role="menuitem"
                  aria-label="Gazette & Notification PDF - opens in new tab"
                >
                  Gazette & Notification
                </Link>

                <Link
                  href="https://charusat.ac.in/files/CHARUSAT-STATUTES%20HANDBOOK.pdf"
                  target="_blank"
                  className="menu-link"
                  role="menuitem"
                  aria-label="The Act & Statutes PDF - opens in new tab"
                >
                  The Act & Statues
                </Link>

                <Link href="/torchbearers" className="menu-link" role="menuitem" aria-label="Torch-Bearers - Notable alumni and personalities">
                  Torch-Bearers
                </Link>

                <Link href="/about" className="menu-link" role="menuitem" aria-label="Journey - University history and milestones">
                  Journey
                </Link>
                <Link href="/accreditation-and-ranking" className="menu-link" role="menuitem" aria-label="Accreditation and Ranking - University achievements">
                  Accreditation & Ranking
                </Link>
                <Link href="/president-desk" className="menu-link" role="menuitem" aria-label="From President's Desk - Message from university president">
                  From President&apos;s Desk
                </Link>
                <Link href="/provost-desk" className="menu-link" role="menuitem" aria-label="From Provost's Desk - Message from university provost">
                  From Provost&apos;s Desk
                </Link>

                <Link href="/governing-body" className="menu-link" role="menuitem" aria-label="Governing Body - University governing structure">
                  Governing Body
                </Link>
                <Link href="/board-of-management" className="menu-link" role="menuitem" aria-label="Board of Management - University governance">
                  Board of Management
                </Link>

                <Link href="/academic-council" className="menu-link" role="menuitem" aria-label="Academic Council - Academic governance body">
                  Academic Council
                </Link>

                <Link href="/university-officers" className="menu-link" role="menuitem" aria-label="University Officers - Administrative leadership">
                  University Officers
                </Link>

                <Link href="/university-admin-officers" className="menu-link" role="menuitem" aria-label="University Administrative Officers - Administrative staff">
                  University Administrative Officers
                </Link>

                <Link href="/convocations" className="menu-link" role="menuitem" aria-label="Convocations - Graduation ceremonies">
                  Convocations
                </Link>
              </div>
            </div>
            <div className="menu-div border-left">&nbsp;</div>
            <div className="menu-d"></div>
          </div>
          <div className="menu-div border-left">
            <h5 className="menu-head" role="presentation">Centers & Cells</h5>
            <div className="menu-items" role="group" aria-label="Centers & Cells options">
              <Link href="/anti-ragging" className="menu-link" role="menuitem" aria-label="National Ragging Prevention Programme - Anti-Ragging Committee">
                National Ragging Prevention Programme <br />( Anti-Ragging
                Committee )
              </Link>
              <Link href="/eoc" className="menu-link" role="menuitem" aria-label="Equal Opportunity Cell - Equal opportunity initiatives">
                Equal Opportunity Cell
              </Link>

              <Link href="/GRC" className="menu-link" role="menuitem" aria-label="Student Grievance Redressal Cell - Student complaints">
                Student Grievance Redressal Cell
              </Link>
              <Link href="/csic" className="menu-link" role="menuitem" aria-label="Charusat Startup and Innovation Centre - Entrepreneurship support">
                Charusat Startup and Innovation Centre
              </Link>
              <Link
                href="/university-industry-interaction-cell"
                className="menu-link"
                role="menuitem"
                aria-label="University Industry Interaction Cell - Industry partnerships"
              >
                University Industry Interaction Cell
              </Link>
              <Link href="/wdc" className="menu-link" role="menuitem" aria-label="Women's Development Cell - Women empowerment initiatives">
                Womens&apos; Development Cell
              </Link>
              <Link href="/hrdc" className="menu-link" role="menuitem" aria-label="Pri. B I Patel Human Resource Development Center - Staff development">
                Pri. B I Patel Human Resource Development Center
              </Link>
              <Link href="https://isc.charusat.ac.in/" className="menu-link" role="menuitem" aria-label="International Students' Cell - opens external site">
                International Students&apos; Cell
              </Link>
              <Link href="/ICC" className="menu-link" role="menuitem" aria-label="Internal Complaint Committee ICC - Internal complaints">
                Internal Complaint Committee (ICC)
              </Link>

              <Link href="/CREDP" className="menu-link" role="menuitem" aria-label="Charusat Rural Education Development Program - Rural education initiatives">
                Charusat Rural Education Development Program
              </Link>

              <Link href="/wincell" className="menu-link" role="menuitem" aria-label="Data Center at CHARUSAT WINCELL - IT infrastructure">
                Data Center @ CHARUSAT - WINCELL
              </Link>
            </div>
          </div>

          {/*  */}
          <div className="menu-div border-left">
            <div className="menu-d">
              <h5 className="menu-head" role="presentation">Infrastructure & Resources</h5>
              <div className="menu-items border-b" role="group" aria-label="Infrastructure & Resources options">
                <Link href="https://youtu.be/Og4NMqI3q5M" className="menu-link" role="menuitem" aria-label="Laboratories video - opens YouTube">
                  Laboratories
                </Link>

                {/* <Link
                  href="/library"
                  className="menu-link"
                >
                  Knowledge Resource Center
                </Link> */}
              </div>
              <h5 className="menu-head" style={{ marginTop: "10px" }} role="presentation">
                Newsletter
              </h5>
              <div className="menu-items border-b" role="group" aria-label="Newsletter options">
                <Link href="/quill-newsletter" className="menu-link" role="menuitem" aria-label="CHARUSAT Chronicles The Quill - University newsletter">
                  CHARUSAT Chronicles : The Quill
                </Link>
              </div>

              <h5 className="menu-head" style={{ marginTop: "10px" }} role="presentation">
                Others
              </h5>
              <div className="menu-items" role="group" aria-label="Other options">
                <Link href="/donation" className="menu-link" role="menuitem" aria-label="Give and Support - Donations and contributions">
                  Give & Support
                </Link>
                <Link
                  href="https://www.charusat.edu.in/documents-access/"
                  target="_blank"
                  className="menu-link"
                  role="menuitem"
                  aria-label="Finance Reports - opens in new tab"
                >
                  Finance Reports
                </Link>
                <Link href="/annual-report" className="menu-link" role="menuitem" aria-label="Annual Report - University yearly reports">
                  Annual Report
                </Link>
                <Link
                  href="assets\files\CHARUSAT_Action_Plan.pdf"
                  target="_blank"
                  className="menu-link"
                  role="menuitem"
                  aria-label="Strategic Plan PDF - opens in new tab"
                >
                  Strategic Plan
                </Link>
                <Link
                  href="https://drive.google.com/drive/folders/1ev-SDSNFSUVHhTvk8EPH7DHh08DujoWz"
                  className="menu-link"
                  role="menuitem"
                  aria-label="Samaj Gosthi Google Drive - opens external site"
                >
                  Samaj Gosthi
                </Link>
              </div>
            </div>
          </div>

          <nav className="mobile-nav" aria-label="Mobile navigation"></nav>
        </div>
      </header>

      <Navbar bg="white" expand="lg" className="nav" role="navigation" aria-label="Secondary navigation">
        <Container>
          <Link href="/" className="charusat" aria-label="CHARUSAT University Homepage">
            <Image
              src={Logo}
              alt="CHARUSAT University Logo"
              height={100}
              style={{
                width: "15rem",
              }}
            />
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" aria-label="Toggle navigation menu" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" role="menubar" aria-label="Secondary navigation menu">
              <Link
                href="http://admission.charusat.ac.in/"
                className="nav-link"
                style={{
                  fontWeight: "bold",
                  marginTop: "0.5rem",
                }}
                role="menuitem"
                aria-label="Enquire Now for Admission 2025"
              >
                Enquire Now - Admission 2025
              </Link>
              <NavDropdown title="Quick Links" id="basic-nav-dropdown" role="menuitem" aria-haspopup="true">
                <Dropdown.Item href="https://alumni.charusat.ac.in/" role="menuitem" aria-label="Alumni portal - opens external site">
                  Alumni
                </Dropdown.Item>

                <Dropdown.Item href="/careers" role="menuitem" aria-label="Career - Job opportunities and career services">
                  <p>Career</p>
                </Dropdown.Item>

                <Dropdown.Item href="/accreditation-and-ranking" role="menuitem" aria-label="NIRF - National Institutional Ranking Framework">
                  NIRF
                </Dropdown.Item>

                <Dropdown.Item href="https://iqac.charusat.ac.in/" role="menuitem" aria-label="IQAC portal - opens external site">
                  IQAC
                </Dropdown.Item>
                <Dropdown.Item href="/placement" role="menuitem" aria-label="Placement - Career placement services">Placement</Dropdown.Item>
                <Dropdown.Item href="/scholarship" role="menuitem" aria-label="Scholarships - Financial aid and scholarships">Scholarships</Dropdown.Item>
                <Dropdown.Item href="/library" role="menuitem" aria-label="Library KRC - Knowledge Resource Center">
                  Library-KRC
                </Dropdown.Item>
                <Dropdown.Item href="/student-corner" role="menuitem" aria-label="Student Corner - Student resources and services">
                  Student Corner
                </Dropdown.Item>

                <Dropdown.Item href="/contact-us" role="menuitem" aria-label="Contact Us - University contact information">Contact Us</Dropdown.Item>
                <Dropdown.Item href="https://charusat.online/" role="menuitem" aria-label="Online Programmes - opens external site">
                  Online Programmes
                </Dropdown.Item>
              </NavDropdown>
              <Link
                href="/"
                onClick={() => {
                  document
                    .getElementById("basic-navbar-nav")
                    .classList.remove("show");
                }}
                role="menuitem"
                aria-current={activeLink === "Home" ? "page" : undefined}
              >
                Home
              </Link>
              <NavDropdown title="About Us" id="basic-nav-dropdown" role="menuitem" aria-haspopup="true">
                <Dropdown role="group" aria-label="About University submenu">
                  <Dropdown.Toggle variant="" id="dropdown" aria-haspopup="true" aria-expanded="false">
                    About University
                  </Dropdown.Toggle>
                  <Dropdown.Menu role="menu">
                    <Dropdown.Item
                      href="assets\files\Gazette-Notification-Private-University-Act.pdf"
                      target="_blank"
                      role="menuitem"
                      aria-label="Gazette & Notification PDF - opens in new tab"
                    >
                      Gazette & Notification
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://charusat.ac.in/files/CHARUSAT-STATUTES%20HANDBOOK.pdf"
                      target="_blank"
                      role="menuitem"
                      aria-label="The Act & Statutes PDF - opens in new tab"
                    >
                      The Act & Statues
                    </Dropdown.Item>
                    <Dropdown.Item href="/torchbearers" role="menuitem" aria-label="Torchbearers - Notable alumni and personalities">
                      Torchbearers
                    </Dropdown.Item>
                    <Dropdown.Item href="/about" role="menuitem" aria-label="Journey - University history and milestones">Journey</Dropdown.Item>
                    <Dropdown.Item href="/accreditation-and-ranking" role="menuitem" aria-label="Accreditation and Ranking - University achievements">
                      Accreditation & Ranking
                    </Dropdown.Item>
                    <Dropdown.Item href="/president-desk" role="menuitem" aria-label="From President's Desk - Message from university president">
                      From President&apos;s Desk
                    </Dropdown.Item>
                    <Dropdown.Item href="/provost-desk" role="menuitem" aria-label="From Provost's Desk - Message from university provost">
                      From Provost&apos;s Desk
                    </Dropdown.Item>

                    <Dropdown.Item href="/convocations" role="menuitem" aria-label="Convocations - Graduation ceremonies">
                      Convocations
                    </Dropdown.Item>
                    <Dropdown.Item href="/governing-body" role="menuitem" aria-label="Governing Body - University governing structure">
                      Governing Body
                    </Dropdown.Item>
                    <Dropdown.Item href="/board-of-management" role="menuitem" aria-label="Board of Management - University management board">
                      Board of Management
                    </Dropdown.Item>

                    <Dropdown.Item href="/academic-council" role="menuitem" aria-label="Academic Council - Academic governance body">
                      Academic Council
                    </Dropdown.Item>

                    <Dropdown.Item href="/university-officers" role="menuitem" aria-label="University Officers - Administrative leadership">
                      University Officers
                    </Dropdown.Item>
                    <Dropdown.Item href="/university-admin-officers" role="menuitem" aria-label="University Administrative Officers - Administrative staff">
                      University Administrative Officers
                    </Dropdown.Item>

                    <Dropdown.Item href="/convocations" role="menuitem" aria-label="Convocations - Graduation ceremonies">
                      Convocations
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown role="group" aria-label="Centers and Cells submenu">
                  <Dropdown.Toggle variant="" id="dropdown" aria-haspopup="true" aria-expanded="false">
                    Centers and Cells
                  </Dropdown.Toggle>
                  <Dropdown.Menu role="menu">
                    <Dropdown.Item href="/anti-ragging" role="menuitem" aria-label="National Ragging Prevention Programme - Anti-Ragging Committee">
                      National Ragging Prevention Programme <br />( Anti-Ragging
                      Committee )
                    </Dropdown.Item>
                    <Dropdown.Item href="/eoc" role="menuitem" aria-label="Equal Opportunity Cell - Equal opportunity initiatives">
                      Equal Opportunity Cell
                    </Dropdown.Item>

                    <Dropdown.Item href="/GRC" role="menuitem" aria-label="Student Grievance Redressal Cell - Student complaints">
                      Student Grievance Redressal Cell
                    </Dropdown.Item>
                    <Dropdown.Item href="/csic" role="menuitem" aria-label="Charusat Startup and Innovation Centre - Entrepreneurship support">
                      Charusat Startup and Innovation Centre
                    </Dropdown.Item>
                    <Dropdown.Item href="/university-industry-interaction-cell" role="menuitem" aria-label="University Industry Interaction Cell - Industry partnerships">
                      University Industry Interaction Cell
                    </Dropdown.Item>
                    <Dropdown.Item href="/wdc" role="menuitem" aria-label="Women's Development Cell - Women empowerment initiatives">
                      Womens&apos; Development Cell
                    </Dropdown.Item>
                    <Dropdown.Item href="/hrdc" role="menuitem" aria-label="Pri. B I Patel Human Resource Development Center - Staff development">
                      Pri. B I Patel Human Resource Development Center
                    </Dropdown.Item>
                    <Dropdown.Item href="https://isc.charusat.ac.in/" role="menuitem" aria-label="International Students' Cell - opens external site">
                      International Studnts&apos; Cell
                    </Dropdown.Item>
                    <Dropdown.Item href="/ICC" role="menuitem" aria-label="Internal Complaint Committee ICC - Internal complaints">
                      Internal Complaint Committee (ICC)
                    </Dropdown.Item>
                    <Dropdown.Item href="/CREDP." role="menuitem" aria-label="Charusat Rural Education Development Program - Rural education initiatives">
                      Charusat Rural Education Development Program
                    </Dropdown.Item>

                    <Dropdown.Item href="/wincell" role="menuitem" aria-label="Data Center at CHARUSAT WINCELL - IT infrastructure">
                      Data Center @ CHARUSAT - WINCELL
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown role="group" aria-label="Infrastructure & Resources submenu">
                  <Dropdown.Toggle variant="" id="dropdown" aria-haspopup="true" aria-expanded="false">
                    Infrastructure & Resources
                  </Dropdown.Toggle>
                  <Dropdown.Menu role="menu">
                    <Dropdown.Item href="https://youtu.be/Og4NMqI3q5M" role="menuitem" aria-label="Laboratories video - opens YouTube">
                      Laboratories
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown role="group" aria-label="Newsletter submenu">
                  <Dropdown.Toggle variant="" id="dropdown" aria-haspopup="true" aria-expanded="false">
                    Newsletter
                  </Dropdown.Toggle>
                  <Dropdown.Menu role="menu">
                    <Dropdown.Item href="/quill-newsletter" role="menuitem" aria-label="CHARUSAT Chronicles The Quill - University newsletter">
                      CHARUSAT Chronicles : The Quill
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown role="group" aria-label="Others submenu">
                  <Dropdown.Toggle variant="" id="dropdown" aria-haspopup="true" aria-expanded="false">
                    Others
                  </Dropdown.Toggle>
                  <Dropdown.Menu role="menu">
                    <Dropdown.Item href="/donation" role="menuitem" aria-label="Give and Support - Donations and contributions">
                      Give & Support
                    </Dropdown.Item>
                    <Dropdown.Item href="https://www.charusat.edu.in/documents-access/" role="menuitem" aria-label="Finance Reports - opens external site">
                      Finance Reports
                    </Dropdown.Item>
                    <Dropdown.Item role="menuitem">
                      <Link href="/annual-report" aria-label="Annual Reports - University yearly reports">Annual Reports</Link>
                    </Dropdown.Item>
                    <Dropdown.Item role="menuitem">
                      <Link
                        href="assets\files\CHARUSAT_Action_Plan.pdf"
                        target="_blank"
                        aria-label="Strategic Plan PDF - opens in new tab"
                      >
                        Strategic Plan
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item role="menuitem">
                      <Link href="https://drive.google.com/drive/folders/1ev-SDSNFSUVHhTvk8EPH7DHh08DujoWz" aria-label="Samaj Gosthi Google Drive - opens external site">
                        Samaj Gosthi
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </NavDropdown>
              <NavDropdown title="Programs" id="basic-nav-dropdown" role="menuitem" aria-haspopup="true">
                <Dropdown role="group" aria-label="Learn Online submenu">
                  <Dropdown.Toggle variant="" id="dropdown" aria-haspopup="true" aria-expanded="false">
                    Learn Online
                  </Dropdown.Toggle>
                  <Dropdown.Menu role="menu">
                    <Dropdown.Item href="http://ILMS.CHARUSAT.ac.in" role="menuitem" aria-label="iLMS portal - opens external site">
                      iLMS
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown role="group" aria-label="Other Programmes submenu">
                  <Dropdown.Toggle variant="" id="dropdown" aria-haspopup="true" aria-expanded="false">
                    Other Programmes
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    onClick={() => {
                      document
                        .getElementById("basic-navbar-nav")
                        .classList.remove("show");
                    }}
                    role="menu"
                  >
                    <Dropdown.Item href="/certification-courses" role="menuitem" aria-label="Certification and Audit Courses - Professional certifications">
                      Certification & Audit Courses
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#GNM" role="menuitem" aria-label="General Nursing and Midwifery GNM - Healthcare program">
                      General Nursing & Midwifery (GNM)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#6303" role="menuitem" aria-label="PG Diploma in Clinical Hypnosis PGDCH - Medical specialization">
                      PG Diploma in Clinical Hypnosis (PGDCH)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#6304" role="menuitem" aria-label="PG Diploma in Cyber Security PGDCS - Information security">
                      PG Diploma in Cyber Security (PGDCS)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#PGDMLT" role="menuitem" aria-label="PG Diploma in Medical Laboratory Technology PGDMLT - Medical technology">
                      PG Diploma in Medical Laboratory Technology (PGDMLT)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#PBBSC" role="menuitem" aria-label="Post Basic B.Sc. in Nursing P.B.B.Sc - Advanced nursing program">
                      Post Basic B.Sc. in Nursing (P.B.B.Sc)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#PGDDS" role="menuitem" aria-label="PG Diploma in Data Science PGDDS - Data science specialization">
                      PG Diploma in Data Science(PGDDS)
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown role="group" aria-label="Undergraduate Studies submenu">
                  <Dropdown.Toggle variant="" id="dropdown" aria-haspopup="true" aria-expanded="false">
                    Undergraduate Studies
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    onClick={() => {
                      document
                        .getElementById("basic-navbar-nav")
                        .classList.remove("show");
                    }}
                    role="menu"
                  >
                    <Dropdown.Item href="/course-single#1406" role="menuitem" aria-label="B.Tech - Bachelor of Technology">
                      B.Tech.
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#2401" role="menuitem" aria-label="BCA - Bachelor of Computer Applications">
                      BCA
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#2402" role="menuitem" aria-label="B.Sc. Information Technology - Undergraduate IT program">
                      B.Sc.(Information Technology)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#3401" role="menuitem" aria-label="B.Pharm - Bachelor of Pharmacy">
                      B.Pharm.
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#4401" role="menuitem" aria-label="BBA - Bachelor of Business Administration">
                      BBA
                    </Dropdown.Item>
                    {/* <Dropdown.Item href="/course-single#5401">
                      B.Sc(Biology)
                    </Dropdown.Item> */}
                    <Dropdown.Item href="/course-single#6401" role="menuitem" aria-label="BPT Bachelor of Physiotherapy - Physical therapy degree">
                      BPT(Bachelor of Physiotherapy)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#6402" role="menuitem" aria-label="B.Sc. Nursing - Bachelor of Science in Nursing">
                      B.Sc.(Nursing)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#6405" role="menuitem" aria-label="B.Optom Bachelor of Optometry - Vision care program">
                      B.Optom.(Bachelor of Optometry)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#6403" role="menuitem" aria-label="B.Sc. Medical Imaging Technology - Medical imaging program">
                      B.Sc. (Medical Imaging Technology)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#6406" role="menuitem" aria-label="B.Sc. Medical Technology - Medical technology program">
                      B.Sc. (Medical Technnology)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#6404" role="menuitem" aria-label="B.Sc. Operation Theatre and Anesthesia Technology - Surgical support program">
                      B.Sc. (Operation Theatre & Anesthesia Technology)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#6404" role="menuitem" aria-label="B.Sc. Chemistry - Bachelor of Science in Chemistry">
                      B.Sc. (Chemistry)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#6404" role="menuitem" aria-label="B.Sc. Microbiology Biotechnology Biochemistry - Life sciences program">
                      B.Sc. (Microbio/Biotech/Biochem)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single" role="menuitem" aria-label="B.A. English - Bachelor of Arts in English">
                      B. A. (English)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single" role="menuitem" aria-label="Bachelor of Library and Information Science - Library science degree">
                      Bachelor of Library & Information Science
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown role="group" aria-label="Postgraduate Studies submenu">
                  <Dropdown.Toggle variant="" id="dropdown" aria-haspopup="true" aria-expanded="false">
                    Postgraduate Studies
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    onClick={() => {
                      document
                        .getElementById("basic-navbar-nav")
                        .classList.remove("show");
                    }}
                    role="menu"
                  >
                    <Dropdown.Item href="/course-single#1406" role="menuitem" aria-label="M.Tech - Master of Technology">
                      M.Tech.
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#2501" role="menuitem" aria-label="MCA - Master of Computer Applications">
                      MCA
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#2502" role="menuitem" aria-label="M.Sc. Information Technology - Master's in IT">
                      M.Sc.(Information Technology)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#3501" role="menuitem" aria-label="M.Pharm - Master of Pharmacy">
                      M.Pharm.
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#4501" role="menuitem" aria-label="MBA - Master of Business Administration">
                      MBA
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#5505" role="menuitem" aria-label="M.Sc. Advanced Organic Chemistry - Specialized chemistry program">
                      M.Sc. (Advanced Organic Chemistry)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single5502" role="menuitem" aria-label="M.Sc. Microbiology Biochemistry Biotechnology - Life sciences master's">
                      M.Sc. (Microbio/Biochem/Biotech)
                    </Dropdown.Item>
                    {/* <Dropdown.Item href="/course-single#5501">
                      M.Sc. (Biotechnology)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#5503">
                      M.Sc. (Microbiology)
                    </Dropdown.Item> */}
                    <Dropdown.Item href="/course-single#5506" role="menuitem" aria-label="M.Sc. Physics and Mathematics - Science master's program">
                      M.Sc. (Physics / Maths)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#6501" role="menuitem" aria-label="MPT Master of Physiotherapy - Advanced physical therapy">
                      MPT (Master of Physiotherapy)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#6510" role="menuitem" aria-label="M.Sc. Nursing - Master of Science in Nursing">
                      M.Sc. (Nursing)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#6403" role="menuitem" aria-label="M.Sc. Medical Imaging Technology - Advanced medical imaging">
                      M.Sc. (Medical Imaging Technology)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#6511" role="menuitem" aria-label="M.Sc. Medical Laboratory Technology - Advanced lab technology">
                      M.Sc. (Medical Laboratory Technology)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#MSOTAT" role="menuitem" aria-label="M.Sc. Operation Theater and Anaesthesia Technology - Surgical technology master's">
                      M.Sc. (Operation Theater & Anaesthesia Tech.)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#4501" role="menuitem" aria-label="M.Sc. Management - Master of Science in Management">
                      M.Sc. (Management)
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown role="group" aria-label="Ph. D. Programmes submenu">
                  <Dropdown.Toggle variant="" id="dropdown" aria-haspopup="true" aria-expanded="false">
                    Ph. D. Programmes
                  </Dropdown.Toggle>
                  <Dropdown.Menu role="menu">
                    {/* <Dropdown.Item href="ph-d-programs">
                      General Information
                    </Dropdown.Item> */}
                    <Dropdown.Item
                      href="assets\files\PHD\PhD_Regulations.pdf"
                      target="_blank"
                      role="menuitem"
                      aria-label="PhD Regulations 2024 PDF - opens in new tab"
                    >
                      Ph. D. Regulations 2024
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://admission.charusat.ac.in/"
                      target="_blank"
                      role="menuitem"
                      aria-label="PhD Admission Apply Now for August Intake-2025 - opens in new tab"
                    >
                      PhD Admission Apply Now (August Intake-2025)
                    </Dropdown.Item>
                    {/* <Dropdown.Item
                      href="assets/files/PHD/Selected-Candidates-PhD-January-2025-Intake.pdf"
                      target="_blank"
                    >
                      Selected Candidates PhD January-2025 Intake
                    </Dropdown.Item> */}

                    <Dropdown.Item
                      href="assets\files\PHD\Guidelines for writing PhD Thesis 2024.pdf"
                      target="_blank"
                      role="menuitem"
                      aria-label="PhD Thesis Writing Guidelines PDF - opens in new tab"
                    >
                      PhD Thesis Writing Guidelines
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown role="group" aria-label="Information You May Need submenu">
                  <Dropdown.Toggle variant="" id="dropdown" aria-haspopup="true" aria-expanded="false">
                    Information You May Need
                  </Dropdown.Toggle>
                  <Dropdown.Menu role="menu">
                    <Dropdown.Item href="/admission-doc-undertaking" role="menuitem" aria-label="Admission Documents and Undertaking - Required admission paperwork">
                      Admission Documents & Undertaking
                    </Dropdown.Item>
                    <Dropdown.Item href="/Downloads/academic_calendar/" role="menuitem" aria-label="Academic Calendar - Academic year schedule">
                      Academic Calender
                    </Dropdown.Item>
                    {/* <Dropdown.Item href="/student-corner">
                      Student&apos;s Corner
                    </Dropdown.Item> */}
                    <Dropdown.Item href="/cdpc" role="menuitem" aria-label="Career Development and Placements - Career services">
                      Career Development and Placements
                    </Dropdown.Item>

                    <Dropdown.Item href="/student-development-initiatives" role="menuitem" aria-label="Initiatives - Student development programs">
                      Initiatives
                    </Dropdown.Item>
                    <Dropdown.Item href="/library" role="menuitem" aria-label="Knowledge Resource Center - University library">
                      Knowledge Resource Center
                    </Dropdown.Item>
                    {/* <Dropdown.Item href="/library">Library</Dropdown.Item> */}
                    <Dropdown.Item href="/code-of-conduct" role="menuitem" aria-label="Code of Conduct - University policies and guidelines">
                      Code of Conduct
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://www.studyinindia.gov.in/admission/registrations"
                      target="_blank"
                      role="menuitem"
                      aria-label="Study In India - opens in new tab"
                    >
                      Study In India
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </NavDropdown>

              <NavDropdown title="Research" id="basic-nav-dropdown" role="menuitem" aria-haspopup="true">
                <Dropdown role="group" aria-label="Research Initiatives submenu">
                  <Dropdown.Toggle variant="" id="dropdown" aria-haspopup="true" aria-expanded="false">
                    Initiatives
                  </Dropdown.Toggle>
                  <Dropdown.Menu role="menu">
                    <Dropdown.Item href="https://youtu.be/Og4NMqI3q5M" role="menuitem" aria-label="Laboratories video - opens YouTube">
                      Laboratories
                    </Dropdown.Item>
                    <Dropdown.Item href="https://charusat.ac.in/charusatjournal/" role="menuitem" aria-label="CHARUSAT Journal - opens external site">
                      CHARUSAT Journal
                    </Dropdown.Item>
                    <Dropdown.Item href="/csic" role="menuitem">
                      Charusat Startup and Innovation Centre (CSIC)
                    </Dropdown.Item>
                    <Dropdown.Item href="http://kradle.charusat.ac.in/" role="menuitem" aria-label="Dr. K. C. Patel Research and Development Centre - opens external site">
                      Dr. K. C. Patel Research and Development Centre (KRADLE)
                    </Dropdown.Item>

                    <Dropdown.Item href="/ipr" role="menuitem">IPR Cell</Dropdown.Item>
                    <Dropdown.Item href="/research" role="menuitem">
                      Research Facilitation
                    </Dropdown.Item>
                    <Dropdown.Item href="/csrtc" role="menuitem">
                      CHARUSAT Space Research Center
                    </Dropdown.Item>
                    <Dropdown.Item href="/IEC" role="menuitem">
                      Institutional Ethics Committee
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="/assets/files/Environment-Sustainable-Policy/Water_Conservation_Policy.pdf"
                      target="_blank"
                      role="menuitem"
                      aria-label="Water Conservation Policy PDF - opens in new tab"
                    >
                      Water Conservation Policy
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="/assets/files/Environment-Sustainable-Policy/Plastic_Ban_Policy.pdf"
                      target="_blank"
                      role="menuitem"
                      aria-label="Plastic Ban Policy PDF - opens in new tab"
                    >
                      Plastic Ban Policy
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="/assets/files/Environment-Sustainable-Policy/Environment_Conservation Policy.pdf"
                      target="_blank"
                      role="menuitem"
                      aria-label="Environmental Conservation Policy PDF - opens in new tab"
                    >
                      Environmental Conservation Policy
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="/assets/files/Environment-Sustainable-Policy/Sustainbility_Policy.pdf"
                      target="_blank"
                      role="menuitem"
                      aria-label="Sustainability Policy PDF - opens in new tab"
                    >
                      Sustainability Policy
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="/assets/files/Environment-Sustainable-Policy/Energy_Conservation_Policy.pdf"
                      target="_blank"
                      role="menuitem"
                      aria-label="Energy Conservation Policy PDF - opens in new tab"
                    >
                      Energy Conservation Policy
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown role="group" aria-label="Research Policies submenu">
                  <Dropdown.Toggle variant="" id="dropdown" aria-haspopup="true" aria-expanded="false">
                    Policies
                  </Dropdown.Toggle>
                  <Dropdown.Menu role="menu">
                    <Dropdown.Item
                      href="https://charusat.ac.in//assets/files/Research/2024/new/PDF_Policy_CHARUSAT_2024.pdf"
                      target="_blank"
                      role="menuitem"
                      aria-label="Post Doctoral Fellowship Programme PDF - opens in new tab"
                    >
                      Post Doctoral Fellowship Programme
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://charusat.ac.in//assets/files/Research/2024/new/CPSF_Policy_CHARUSAT_2024.pdf"
                      target="_blank"
                      role="menuitem"
                      aria-label="PhD Scholars Fellowship CPSF PDF - opens in new tab"
                    >
                      Ph. D. Scholars&apos; Fellowship (CPSF)
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://charusat.ac.in//assets/files/Research/2024/new/UGSF_Policy_CHARUSAT_2024.pdf"
                      target="_blank"
                      role="menuitem"
                      aria-label="Undergraduate Student Fellowship UGSF PDF - opens in new tab"
                    >
                      Undergraduate Student Fellowship (UGSF)
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://charusat.ac.in//assets/files/Research/2024/new/PGSF_Policy_CHARUSAT_2024.pdf"
                      target="_blank"
                      role="menuitem"
                      aria-label="Postgraduate Student Fellowship PGSF PDF - opens in new tab"
                    >
                      Postgraduate Student Fellowship (PGSF)
                    </Dropdown.Item>

                    <Dropdown.Item
                      href="https://charusat.ac.in//assets/files/Research/2024/new/CSGR_Policy_CHARUSAT_2024.pdf"
                      target="_blank"
                      role="menuitem"
                      aria-label="CHARUSAT Research Grants CRG PDF - opens in new tab"
                    >
                      CHARUSAT Research Grants (CRG)
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://charusat.ac.in//assets/files/Research/2024/new/Research_Policy_CHARUSAT_2024.pdf"
                      target="_blank"
                      role="menuitem"
                      aria-label="Research Policy Summary PDF - opens in new tab"
                    >
                      Research Policy - Summary
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://charusat.ac.in//assets/files/Research/2024/new/RPA_Policy_CHARUSAT_2024.pdf"
                      target="_blank"
                      role="menuitem"
                      aria-label="Research Paper Award RPA PDF - opens in new tab"
                    >
                      Research Paper Award (RPA)
                    </Dropdown.Item>

                    <Dropdown.Item href="https://charusat.ac.in//assets/files/Research/2024/new/CSRI_Policy_CHARUSAT_2024.pdf" role="menuitem" aria-label="Summer Research Internship CSRI PDF">
                      Summer Research Internship (CSRI)
                    </Dropdown.Item>

                    <Dropdown.Item
                      href="https://charusat.ac.in//assets/files/Research/2024/new/Plagiarism_Policy_CHARUSAT_2024.pdf"
                      target="_blank"
                      role="menuitem"
                      aria-label="Plagiarism Policy PDF - opens in new tab"
                    >
                      Plagiarism
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://charusat.ac.in//assets/files/Research/2024/new/IPR_Policy_CHARUSAT_2024.pdf"
                      target="_blank"
                      role="menuitem"
                      aria-label="IPR Policy PDF - opens in new tab"
                    >
                      IPR Policy
                    </Dropdown.Item>
                    <Dropdown.Item href="https://charusat.ac.in//assets/files/Research/2024/new/Consultancy_Policy_CHARUSAT_2024.pdf" role="menuitem" aria-label="Consultancy Policy PDF">
                      Consultancy
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://charusat.ac.in/documents/pdfs/research/Guidelines_for_Financial_Assistance_to_full-time_UG_PG_&_Ph.D_Scholar.pdf"
                      target="_blank"
                      role="menuitem"
                      aria-label="Financial Support Guidelines for UG PG PhD Scholars PDF - opens in new tab"
                    >
                      Financial Support to full time UG, PG and Ph.D Scholar for
                      Presenting Research Paper
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://charusat.ac.in/documents/pdfs/research/Employee Development and Event Support Policy.pdf"
                      target="_blank"
                      role="menuitem"
                      aria-label="Employee Development and Research Support Scheme PDF - opens in new tab"
                    >
                      Employee Development and Research Support Scheme
                    </Dropdown.Item>

                    <Dropdown.Item
                      href="https://charusat.ac.in//assets/files/Research/2024/new/Endowment_Policy_CHARUSAT_2024.pdf"
                      target="_blank"
                      role="menuitem"
                      aria-label="Endowment Policy PDF - opens in new tab"
                    >
                      Endowment Policy
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown role="group" aria-label="Research Outcomes submenu">
                  <Dropdown.Toggle variant="" id="dropdown" aria-haspopup="true" aria-expanded="false">
                    Outcomes
                  </Dropdown.Toggle>
                  <Dropdown.Menu role="menu">
                    <Dropdown.Item href="/publications" role="menuitem">
                      Publications
                    </Dropdown.Item>
                    <Dropdown.Item href="/project-grants" role="menuitem">
                      Project/Research Grants
                    </Dropdown.Item>
                    <Dropdown.Item href="/intellectual-property" role="menuitem">
                      Intellectual Property
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </NavDropdown>
              {/* <NavDropdown title="Centers & Cells" id="basic-nav-dropdown">
                <Dropdown>
                  <Dropdown.Item href="/anti-ragging">
                    Anti-Ragging Committee
                  </Dropdown.Item>
                  <Dropdown.Item href="/eoc">
                    Equal Opportunity Cell
                  </Dropdown.Item>

                  <Dropdown.Item href="/GRC">
                    Grievance Redressal Cell
                  </Dropdown.Item>
                  <Dropdown.Item href="/csic">
                    Charusat Startup and Innovation Centre
                  </Dropdown.Item>
                  <Dropdown.Item href="/university-industry-interaction-cell">
                    University Industry Interaction Cell
                  </Dropdown.Item>
                  <Dropdown.Item href="/wdc">
                    Womens&apos; Development Cell
                  </Dropdown.Item>
                  <Dropdown.Item href="/hrdc">
                    Pri. B I Patel Human Resource Development Center
                  </Dropdown.Item>
                  <Dropdown.Item href="https://isc.charusat.ac.in/">
                    International Studnts&apos; Cell
                  </Dropdown.Item>
                  <Dropdown.Item href="/ICC">
                    Internal Complaint Committee (ICC)
                  </Dropdown.Item>
                  <Dropdown.Item href="/CREDP.">
                    Charusat Rural Education Development Program
                  </Dropdown.Item>

                  <Dropdown.Item href="/wincell">
                    Data Center @ CHARUSAT - WINCELL
                  </Dropdown.Item>
                </Dropdown>
              </NavDropdown> */}
              <NavDropdown title="Campus Life" id="basic-nav-dropdown" role="menuitem" aria-haspopup="true">
                <Dropdown.Item href="/campus-life" role="menuitem" aria-label="Campus Life - Student life and activities">Campus Life</Dropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation_temp;
