"use client";
import { Navbar, Container, Nav, NavDropdown, Dropdown } from "react-bootstrap";
import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "@/css/navigation.css";

import Link from "next/link";

import Image from "next/image";
import Logo from "@/public/assets/images/logo/CHARUSAT_NEW.png";

const Navigation = () => {
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
      >
        <nav className="nav">
          <div className="logo">
            <Link href="/" className="charusat-main">
              <Image
                src={Logo}
                alt="CHARUSAT"
                style={{
                  width: "17rem",
                }}
              />
            </Link>
          </div>
          <div className="nav-links">
            <ul className={`links `}>
              <li className="link">
                <Link
                  id="Home-link"
                  href="/"
                  className={`${
                    activeLink === "Home" ? "green-text" : "green"
                  }`}
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
              >
                <Link
                  id="KnowCHARUSAT-link"
                  href=""
                  className={`${
                    activeLink === "KnowCHARUSAT" ? "green-text" : "green"
                  }`}
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
              >
                <Link
                  href=""
                  className={`${
                    activeLink === "Academics" ? "green-text" : "green"
                  }`}
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
              >
                <Link
                  id="Research-link"
                  href=""
                  className={`${
                    activeLink === "Research" ? "green-text" : "green"
                  }`}
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

              <li className="link  ">
                <Link
                  id="CampusLife-link"
                  href="/campus-life"
                  className={`${
                    activeLink === "CampusLife" ? "green-text" : "green"
                  }`}
                >
                  Campus Life
                </Link>
              </li>
              <li className="link">
                <Link
                  id="Admission-link"
                  href="http://admission.charusat.ac.in/"
                  className={`${
                    activeLink === "Admission" ? "green-text" : "green"
                  }`}
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
        >
          <div className="menu-div">
            <div className="menu-d border-b">
              <h5 className="menu-head">Learn Online</h5>
              <div className="menu-items">
                <Link href="http://ILMS.CHARUSAT.ac.in" className="menu-link">
                  iLMS
                </Link>
              </div>
            </div>

            <div className="menu-d ">
              <h5 className="menu-head">Other Programmes</h5>
              <div className="menu-items">
                <Link href="/certification-courses" className="menu-link">
                  Certification & Audit Courses
                </Link>
                <Link href="/course-single#6402" className="menu-link">
                  General Nursing & Midwifery (GNM)
                </Link>
                <Link href="/course-single#6303" className="menu-link">
                  PG Diploma in Clinical Hypnosis (PGDCH)
                </Link>
                <Link href="/course-single#PGDEAMT" className="menu-link">
                  PG Diploma in Environmental Auditing, Monitoring and
                  Technology(PGDEAMT)
                </Link>
                <Link href="/course-single#PGDMLT" className="menu-link">
                  PG Diploma in Medical Laboratory Technology (PGDMLT)
                </Link>
                <Link href="/course-single#PBBSC" className="menu-link">
                  Post Basic B.Sc. in Nursing (P.B.B.Sc)
                </Link>
                <Link href="/course-single#5506" className="menu-link">
                  PG Diploma in Data Science (PGDDS)
                </Link>
              </div>
            </div>
          </div>
          <div className="menu-div border-left">
            <h5 className="menu-head">Undergraduate Studies</h5>
            <div className="menu-items">
              <Link href="/course-single#PBBSC" className="menu-link">
                B.Tech.
              </Link>
              <Link href="/course-single#2401" className="menu-link">
                BCA
              </Link>
              <Link href="/course-single#2402" className="menu-link">
                B.Sc. (Information Technology)
              </Link>
              <Link href="/course-single#2502" className="menu-link">
                B.Pharm.
              </Link>
              <Link href="/course-single#BLIS" className="menu-link">
                BBA
              </Link>

              <Link href="/course-single#6401" className="menu-link">
                BPT (Bachelor of Physiotherapy)
              </Link>
              <Link href="/course-single#6402" className="menu-link">
                B.Sc. (Nursing)
              </Link>
              <Link href="/course-single#6405" className="menu-link">
                B.Optom. (Bachelor of Optometry)
              </Link>
              <Link href="/course-single#6403" className="menu-link">
                B.Sc. (Medical Imaging Technology)
              </Link>
              <Link href="/course-single#6406" className="menu-link">
                B.Sc. (Medical Technnology)
              </Link>
              <Link href="/course-single#6404" className="menu-link">
                B.Sc. (Operation Theatre & Anesthesia Technology)
              </Link>

              <Link href="/course-single#5401" className="menu-link">
                B.Sc. (Microbio/Biotech/Biochem)
              </Link>
              <Link href="/course-single" className="menu-link">
                B.A. (English)
              </Link>
              <Link href="/course-single" className="menu-link">
                Bachelor of Library & Information Science
              </Link>
            </div>
          </div>
          <div className="menu-div border-left">
            <h5 className="menu-head">Postgraduate Studies</h5>
            <div className="menu-items">
              <Link href="/course-single#6001" className="menu-link">
                M.Tech.
              </Link>
              <Link href="/course-single#2501" className="menu-link">
                MCA
              </Link>
              <Link href="/course-single#2502" className="menu-link">
                M.Sc. (Information Technology)
              </Link>
              <Link href="/course-single#3501" className="menu-link">
                M.Pharm.
              </Link>
              <Link href="/course-single#4401" className="menu-link">
                MBA
              </Link>
              <Link href="/course-single#5505" className="menu-link">
                M.Sc. (Advanced Organic Chemistry)
              </Link>

              <Link href="/course-single#5501" className="menu-link">
                M.Sc. (Biotech/Biochem/Microbio)
              </Link>

              <Link href="/course-single#5506" className="menu-link">
                M.Sc. (Physics / Maths)
              </Link>
              <Link href="/course-single#6501" className="menu-link">
                MPT (Master of Physiotherapy)
              </Link>
              <Link href="/course-single#6510" className="menu-link">
                M.Sc. (Nursing)
              </Link>
              <Link href="/course-single#6514" className="menu-link">
                M.Sc. (Medical Imaging Technology)
              </Link>
              <Link href="/course-single#6513" className="menu-link">
                M.Sc. (Medical Laboratory Technology)
              </Link>
              <Link href="/course-single#MSOTAT" className="menu-link">
                M.Sc. (Operation Theater & Anaesthesia Technology)
              </Link>
              <Link href="/course-single#4501" className="menu-link">
                M.Sc. (Management)
              </Link>
            </div>
          </div>
          <div className="menu-div border-left">
            <div className="menu-d">
              <h5 className="menu-head">Ph. D. Programmes</h5>
              <div className="menu-items">
                {/* <Link href="#" target="_blank" className="menu-link">
                  General Information
                </Link> */}

                <Link
                  href="https://admission.charusat.ac.in/"
                  target="_blank"
                  className="menu-link"
                >
                  PhD Admission Apply Now (August Intake-2025)
                </Link>
                <Link
                  href="assets\files\PHD\PhD_Regulations.pdf"
                  target="_blank"
                  className="menu-link"
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
                >
                  PhD Thesis Writing Guidelines
                </Link>
              </div>
            </div>
            <hr />
            <h5 className="menu-head">Information You May Need!!!</h5>
            <div className="menu-items">
              <Link href="/admission-doc-undertaking" className="menu-link">
                Admission Documents & Undertaking
              </Link>
              <Link
                href="https://drive.google.com/drive/folders/1q_EzJ35jhwmP1HDptaPSJpbQk_9emNV0?usp=sharing"
                className="menu-link"
                target="_blank"
              >
                Academic Calender
              </Link>
              {/* <Link href="/student-corner" className="menu-link">
                Student&apos;s Corner
              </Link> */}
              <Link href="/cdpc" className="menu-link">
                Career Development and Placements
              </Link>

              <Link
                href="/student-development-initiatives"
                className="menu-link"
              >
                Initiatives
              </Link>
              <Link href="/library" className="menu-link">
                Knowledge Resource Center
              </Link>
              <Link href="/code-of-conduct" className="menu-link">
                Code of Conduct
              </Link>
              <Link
                href="https://www.studyinindia.gov.in/admission/registrations"
                className="menu-link"
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
        >
          <div className="menu-div">
            <h5 className="menu-head">National</h5>
            <div className="menu-items">
              <Link
                href="https://admission.charusat.ac.in/"
                className="menu-link"
              >
                Apply Now
              </Link>

              <Link
                href="https://drive.google.com/file/d/1zzlAVorLJXqcde1JAKHlMyBc8sJuvUov/view"
                className="menu-link"
              >
                Fees
              </Link>
              <Link href="#" className="menu-link">
                <i
                  className="icofont-brand-whatsapp"
                  style={{ color: "#3db166" }}
                ></i>{" "}
                +91 9825961830
              </Link>
            </div>
          </div>
          <div className="menu-div border-left">
            <h5 className="menu-head">International</h5>
            <div className="menu-items">
              <Link
                href="https://admission.charusat.ac.in/"
                className="menu-link"
              >
                Apply Now
              </Link>

              <Link href="#" target="_blank" className="menu-link">
                Fees
              </Link>
              <Link href="#" className="menu-link">
                <i
                  className="icofont-brand-whatsapp"
                  style={{ color: "#3db166" }}
                ></i>{" "}
                +91 9173701614
              </Link>
            </div>
          </div>
          <div className="menu-div border-left">
            <h5 className="menu-head">Other</h5>
            <div className="menu-items">
              <Link
                href="https://charusat.ac.in//assets/files/Research/2024/new/UGSF_Policy_CHARUSAT_2024.pdf"
                target="_blank"
                className="menu-link"
              >
                Undergraduate Student Fellowship
              </Link>
              <Link
                href="https://charusat.ac.in//assets/files/Research/2024/new/PGSF_Policy_CHARUSAT_2024.pdf"
                target="_blank"
                className="menu-link"
              >
                Postgraduate Student Fellowship
              </Link>
              <Link
                href="https://charusat.ac.in/documents/pdfs/research/PDF%20Policy%20CHARUSAT.pdf"
                target="_blank"
                className="menu-link"
              >
                Ph. D. Scholars&apos; Fellowship
              </Link>
              <Link
                href="https://charusat.ac.in//assets/files/Research/2024/new/PDF_Policy_CHARUSAT_2024.pdf"
                target="_blank"
                className="menu-link"
              >
                Post Doctoral Fellowship Programme
              </Link>
              <Link href="/scholarship" className="menu-link">
                Scholarship
              </Link>
              <Link href="/hostels" className="menu-link">
                Hostels
              </Link>
              <Link href="/transport" className="menu-link">
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
        >
          <div className="menu-div">
            <h5 className="menu-head">Initiatives</h5>
            <div className="menu-items">
              <Link
                href="https://youtu.be/Og4NMqI3q5M"
                target="_blank"
                className="menu-link"
              >
                Laboratories
              </Link>
              <Link
                href="https://charusat.ac.in/charusatjournal/"
                className="menu-link"
              >
                CHARUSAT Journal
              </Link>

              <Link href="/csic" className="menu-link">
                Charusat Startup and Innovation Centre (CSIC)
              </Link>
              <Link href="http://kradle.charusat.ac.in/" className="menu-link">
                Dr. K. C. Patel Research and Development Centre (KRADLE)
              </Link>

              <Link href="/ipr" className="menu-link">
                IPR Cell
              </Link>
              <Link href="/research" className="menu-link">
                Research Facilitation
              </Link>
              <Link href="/csrtc" className="menu-link">
                Charusat Space Research and Technology Center (CSRTC)
              </Link>
              <Link href="/IEC" className="menu-link">
                Institutional Ethics Committee
              </Link>
              <Link
                href="/assets/files/Environment-Sustainable-Policy/Water_Conservation_Policy.pdf"
                target="_blank"
                className="menu-link"
              >
                Water Conservation Policy
              </Link>
              <Link
                href="/assets/files/Environment-Sustainable-Policy/Plastic_Ban_Policy.pdf"
                target="_blank"
                className="menu-link"
              >
                Plastic Ban Policy
              </Link>
              <Link
                href="/assets/files/Environment-Sustainable-Policy/Environment_Conservation Policy.pdf"
                target="_blank"
                className="menu-link"
              >
                Environmental Conservation Policy
              </Link>

              <Link
                href="/assets/files/Environment-Sustainable-Policy/Sustainbility_Policy.pdf"
                target="_blank"
                className="menu-link"
              >
                Sustainability Policy
              </Link>
              <Link
                href="/assets/files/Environment-Sustainable-Policy/Energy_Conservation_Policy.pdf"
                target="_blank"
                className="menu-link"
              >
                Energy Conservation Policy
              </Link>
            </div>
          </div>

          <div className="menu-div border-left">
            <h5 className="menu-head">Policies</h5>
            <div className="menu-items">
              <Link
                href="https://charusat.ac.in//assets/files/Research/2024/new/PDF_Policy_CHARUSAT_2024.pdf"
                target="_blank"
                className="menu-link"
              >
                Post Doctoral Fellowship Programme
              </Link>

              <Link
                href="https://charusat.ac.in//assets/files/Research/2024/new/CPSF_Policy_CHARUSAT_2024.pdf"
                target="_blank"
                className="menu-link"
              >
                Ph. D. Scholars&apos; Fellowship (CPSF)
              </Link>

              <Link
                href="https://charusat.ac.in//assets/files/Research/2024/new/UGSF_Policy_CHARUSAT_2024.pdf"
                target="_blank"
                className="menu-link" //charusat.ac.in/documents/pdfs/research/PGSF.pdf
              >
                Undergraduate Student Fellowship(UGSF)
              </Link>

              <Link
                href="https://charusat.ac.in//assets/files/Research/2024/new/PGSF_Policy_CHARUSAT_2024.pdf"
                target="_blank"
                className="menu-link"
              >
                Postgraduate Student Fellowship(PGSF)
              </Link>

              <Link
                href="https://charusat.ac.in//assets/files/Research/2024/new/CSGR_Policy_CHARUSAT_2024.pdf"
                target="_blank"
                className="menu-link"
              >
                CHARUSAT Research Grants (CRG)
              </Link>
              <Link
                href="https://charusat.ac.in//assets/files/Research/2024/new/Research_Policy_CHARUSAT_2024.pdf"
                target="_blank"
                className="menu-link"
              >
                Research Policy - Summary
              </Link>
              <Link
                href="https://charusat.ac.in//assets/files/Research/2024/new/RPA_Policy_CHARUSAT_2024.pdf"
                target="_blank"
                className="menu-link"
              >
                Research Paper Award (RPA)
              </Link>
              <Link
                href="https://charusat.ac.in//assets/files/Research/2024/new/CSRI_Policy_CHARUSAT_2024.pdf"
                target="_blank"
                className="menu-link"
              >
                Summer Research Internship(CSRI)
              </Link>

              <Link
                href="https://charusat.ac.in//assets/files/Research/2024/new/Plagiarism_Policy_CHARUSAT_2024.pdf"
                target="_blank"
                className="menu-link"
              >
                Plagiarism
              </Link>
              <Link
                href="https://charusat.ac.in//assets/files/Research/2024/new/IPR_Policy_CHARUSAT_2024.pdf"
                target="_blank"
                className="menu-link"
              >
                IPR Policy
              </Link>
              <Link
                href="https://charusat.ac.in//assets/files/Research/2024/new/Consultancy_Policy_CHARUSAT_2024.pdf"
                className="menu-link"
              >
                Consultancy
              </Link>
              <Link
                href="https://charusat.ac.in/documents/pdfs/research/Guidelines_for_Financial_Assistance_to_full-time_UG_PG_&_Ph.D_Scholar.pdf"
                target="_blank"
                className="menu-link"
              >
                Financial Support to full time UG, PG and Ph.D Scholar for
                Presenting Research Paper
              </Link>
              <Link
                href="https://charusat.ac.in/documents/pdfs/research/Employee Development and Event Support Policy.pdf"
                target="_blank"
                className="menu-link"
              >
                Employee Development and Research Support Scheme
              </Link>

              <Link
                href="https://charusat.ac.in//assets/files/Research/2024/new/Endowment_Policy_CHARUSAT_2024.pdf"
                target="_blank"
                className="menu-link"
              >
                Endowment Policy
              </Link>
            </div>
          </div>
          <div className="menu-div border-left">
            <h5 className="menu-head">Outcomes</h5>
            <div className="menu-items">
              <Link href="/publications" className="menu-link">
                Publications
              </Link>
              <Link href="/project-grants" className="menu-link">
                Project/Research Grants
              </Link>
              <Link href="/intellectual-property" className="menu-link">
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
        >
          <div className="menu-div">
            <div className="menu-d ">
              <h5 className="menu-head">About University</h5>
              <div className="menu-items">
                <Link
                  href="assets\files\Gazette-Notification-Private-University-Act.pdf"
                  target="_blank"
                  className="menu-link"
                >
                  Gazette & Notification
                </Link>

                <Link
                  href="https://charusat.ac.in/files/CHARUSAT-STATUTES%20HANDBOOK.pdf"
                  target="_blank"
                  className="menu-link"
                >
                  The Act & Statues
                </Link>

                <Link href="/torchbearers" className="menu-link">
                  Torch-Bearers
                </Link>

                <Link href="/about" className="menu-link">
                  Journey
                </Link>
                <Link href="/accreditation-and-ranking" className="menu-link">
                  Accreditation & Ranking
                </Link>
                <Link href="/president-desk" className="menu-link">
                  From President&apos;s Desk
                </Link>
                <Link href="/provost-desk" className="menu-link">
                  From Provost&apos;s Desk
                </Link>

                <Link href="/governing-body" className="menu-link">
                  Governing Body
                </Link>
                <Link href="/board-of-management" className="menu-link">
                  Board of Management
                </Link>

                <Link href="/university-officers" className="menu-link">
                  University Officers
                </Link>

                <Link href="/university-admin-officers" className="menu-link">
                  University Administrative Officers
                </Link>

                <Link href="/convocations" className="menu-link">
                  Convocations
                </Link>
              </div>
            </div>
            <div className="menu-div border-left">&nbsp;</div>
            <div className="menu-d"></div>
          </div>
          <div className="menu-div border-left">
            <h5 className="menu-head">Centers & Cells</h5>
            <div className="menu-items">
              <Link href="/anti-ragging" className="menu-link">
                National Ragging Prevention Programme <br />( Anti-Ragging
                Committee )
              </Link>
              <Link href="/eoc" className="menu-link">
                Equal Opportunity Cell
              </Link>

              <Link href="/GRC" className="menu-link">
                Student Grievance Redressal Cell
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

          {/*  */}
          <div className="menu-div border-left">
            <div className="menu-d">
              <h5 className="menu-head">Infrastructure & Resources</h5>
              <div className="menu-items border-b">
                <Link href="https://youtu.be/Og4NMqI3q5M" className="menu-link">
                  Laboratories
                </Link>

                {/* <Link
                  href="/library"
                  className="menu-link"
                >
                  Knowledge Resource Center
                </Link> */}
              </div>
              <h5 className="menu-head" style={{ marginTop: "10px" }}>
                Others
              </h5>
              <div className="menu-items">
                <Link href="/donation" className="menu-link">
                  Give & Support
                </Link>
                <Link
                  href="https://www.charusat.edu.in/documents-access/"
                  target="_blank"
                  className="menu-link"
                >
                  Finance Reports
                </Link>
                <Link href="/annual-report" className="menu-link">
                  Annual Report
                </Link>
                <Link
                  href="assets\files\CHARUSAT_Action_Plan.pdf"
                  target="_blank"
                  className="menu-link"
                >
                  Strategic Plan
                </Link>
                <Link
                  href="https://drive.google.com/drive/folders/1ev-SDSNFSUVHhTvk8EPH7DHh08DujoWz"
                  className="menu-link"
                >
                  Samaj Gosthi
                </Link>
              </div>
            </div>
          </div>

          <nav className="mobile-nav"></nav>
        </div>
      </header>

      <Navbar bg="white" expand="lg" className="nav">
        <Container>
          <Link href="/" className="charusat">
            <Image
              src={Logo}
              alt="CHARUSAT"
              height={100}
              style={{
                width: "15rem",
              }}
            />
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link
                href="http://admission.charusat.ac.in/"
                className="nav-link"
                style={{
                  fontWeight: "bold",
                  marginTop: "0.5rem",
                }}
              >
                Enquire Now - Admission 2025
              </Link>
              <NavDropdown title="Quick Links" id="basic-nav-dropdown">
                <Dropdown.Item href="https://alumni.charusat.ac.in/">
                  Alumni
                </Dropdown.Item>

                <Dropdown.Item href="/careers">
                  {" "}
                  <p>Career</p>{" "}
                </Dropdown.Item>

                <Dropdown.Item href="/accreditation-and-ranking">
                  NIRF
                </Dropdown.Item>

                <Dropdown.Item href="https://iqac.charusat.ac.in/">
                  IQAC
                </Dropdown.Item>
                <Dropdown.Item href="/placement">Placement</Dropdown.Item>
                <Dropdown.Item href="/scholarship">Scholarships</Dropdown.Item>

                <Dropdown.Item href="/student-corner">
                  Student Corner
                </Dropdown.Item>

                <Dropdown.Item href="/contact-us">Contact Us</Dropdown.Item>
                <Dropdown.Item href="https://charusat.online/">
                  {" "}
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
              >
                Home
              </Link>
              <NavDropdown title="About Us" id="basic-nav-dropdown">
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown">
                    About University
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="assets\files\Gazette-Notification-Private-University-Act.pdf"
                      target="_blank"
                    >
                      Gazette & Notification
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://charusat.ac.in/files/CHARUSAT-STATUTES%20HANDBOOK.pdf"
                      target="_blank"
                    >
                      The Act & Statues
                    </Dropdown.Item>
                    <Dropdown.Item href="/torchbearers">
                      Torchbearers
                    </Dropdown.Item>
                    <Dropdown.Item href="/about">Journey</Dropdown.Item>
                    <Dropdown.Item href="/accreditation-and-ranking">
                      Accreditation & Ranking
                    </Dropdown.Item>
                    <Dropdown.Item href="/president-desk">
                      From President&apos;s Desk
                    </Dropdown.Item>
                    <Dropdown.Item href="/provost-desk">
                      From Provost&apos;s Desk
                    </Dropdown.Item>

                    <Dropdown.Item href="/convocations">
                      Convocations
                    </Dropdown.Item>
                    <Dropdown.Item href="/governing-body">
                      Governing Body
                    </Dropdown.Item>
                    <Dropdown.Item href="/board-of-management">
                      Board of Management
                    </Dropdown.Item>

                    <Dropdown.Item href="/university-officers">
                      University Officers
                    </Dropdown.Item>
                    <Dropdown.Item href="/university-admin-officers">
                      University Administrative Officers
                    </Dropdown.Item>

                    <Dropdown.Item href="/convocations">
                      Convocations
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown">
                    Centers and Cells
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/anti-ragging">
                      National Ragging Prevention Programme <br />( Anti-Ragging
                      Committee )
                    </Dropdown.Item>
                    <Dropdown.Item href="/eoc">
                      Equal Opportunity Cell
                    </Dropdown.Item>

                    <Dropdown.Item href="/GRC">
                      Student Grievance Redressal Cell
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
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown">
                    Infrastructure & Resources
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="https://youtu.be/Og4NMqI3q5M">
                      Laboratories
                    </Dropdown.Item>
                    {/* <Dropdown.Item href="/library">
                      Knowledge Resource Center
                    </Dropdown.Item> */}
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown">
                    Others
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/donation">
                      Give & Support
                    </Dropdown.Item>
                    <Dropdown.Item href="https://www.charusat.edu.in/documents-access/">
                      Finance Reports
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link href="/annual-report">Annual Reports</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link
                        href="assets\files\CHARUSAT_Action_Plan.pdf"
                        target="_blank"
                      >
                        Strategic Plan
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link href="https://drive.google.com/drive/folders/1ev-SDSNFSUVHhTvk8EPH7DHh08DujoWz">
                        {" "}
                        Samaj Gosthi
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </NavDropdown>
              <NavDropdown title="Programs" id="basic-nav-dropdown">
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown">
                    Learn Online
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="http://ILMS.CHARUSAT.ac.in">
                      iLMS
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown">
                    Other Programmes
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    onClick={() => {
                      document
                        .getElementById("basic-navbar-nav")
                        .classList.remove("show");
                    }}
                  >
                    <Dropdown.Item href="/certification-courses">
                      Certification & Audit Courses
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#GNM">
                      General Nursing & Midwifery (GNM)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#6303">
                      PG Diploma in Clinical Hypnosis (PGDCH)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#6304">
                      PG Diploma in Cyber Security (PGDCS)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#PGDMLT">
                      PG Diploma in Medical Laboratory Technology (PGDMLT)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#PBBSC">
                      Post Basic B.Sc. in Nursing (P.B.B.Sc)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#PGDDS">
                      PG Diploma in Data Science(PGDDS)
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown">
                    Undergraduate Studies
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    onClick={() => {
                      document
                        .getElementById("basic-navbar-nav")
                        .classList.remove("show");
                    }}
                  >
                    <Dropdown.Item href="/course-single#1406">
                      B.Tech.
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#2401">
                      BCA
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#2402">
                      B.Sc.(Information Technology)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#3401">
                      B.Pharm.
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#4401">
                      BBA
                    </Dropdown.Item>
                    {/* <Dropdown.Item href="/course-single#5401">
                      B.Sc(Biology)
                    </Dropdown.Item> */}
                    <Dropdown.Item href="/course-single#6401">
                      BPT(Bachelor of Physiotherapy)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#6402">
                      B.Sc.(Nursing)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#6405">
                      B.Optom.(Bachelor of Optometry)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#6403">
                      B.Sc. (Medical Imaging Technology)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#6406">
                      B.Sc. (Medical Technnology)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#6404">
                      B.Sc. (Operation Theatre & Anesthesia Technology)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#6404">
                      B.Sc. (Microbio/Biotech/Biochem)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single">
                      B. A. (English)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single">
                      Bachelor of Library & Information Science
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown">
                    Postgraduate Studies
                  </Dropdown.Toggle>
                  <Dropdown.Menu
                    onClick={() => {
                      document
                        .getElementById("basic-navbar-nav")
                        .classList.remove("show");
                    }}
                  >
                    <Dropdown.Item href="/course-single#1406">
                      M.Tech.
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#2501">
                      MCA
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#2502">
                      M.Sc.(Information Technology)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#3501">
                      M.Pharm.
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#4501">
                      MBA
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#5505">
                      M.Sc. (Advanced Organic Chemistry)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single5502">
                      M.Sc. (Microbio/Biochem/Biotech)
                    </Dropdown.Item>
                    {/* <Dropdown.Item href="/course-single#5501">
                      M.Sc. (Biotechnology)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#5503">
                      M.Sc. (Microbiology)
                    </Dropdown.Item> */}
                    <Dropdown.Item href="/course-single#5506">
                      M.Sc. (Physics / Maths)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#6501">
                      MPT (Master of Physiotherapy)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#6510">
                      M.Sc. (Nursing)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#6403">
                      M.Sc. (Medical Imaging Technology)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#6511">
                      M.Sc. (Medical Laboratory Technology)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#MSOTAT">
                      M.Sc. (Operation Theater & Anaesthesia Technology)
                    </Dropdown.Item>
                    <Dropdown.Item href="/course-single#4501">
                      M.Sc. (Management)
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown">
                    Ph. D. Programmes
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {/* <Dropdown.Item href="ph-d-programs">
                      General Information
                    </Dropdown.Item> */}
                    <Dropdown.Item
                      href="/ph-d-programs"
                      target="_blank"
                    >
                      
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="assets\files\PHD\PhD_Regulations.pdf"
                      target="_blank"
                    >
                      Ph. D. Regulations 2024
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://admission.charusat.ac.in/"
                      target="_blank"
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
                    >
                      PhD Thesis Writing Guidelines
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown">
                    Information You May Need
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/admission-doc-undertaking">
                      Admission Documents & Undertaking
                    </Dropdown.Item>
                    <Dropdown.Item href="/Downloads/academic_calendar/">
                      Academic Calender
                    </Dropdown.Item>
                    {/* <Dropdown.Item href="/student-corner">
                      Student&apos;s Corner
                    </Dropdown.Item> */}
                    <Dropdown.Item href="/cdpc">
                      Career Development and Placements
                    </Dropdown.Item>

                    <Dropdown.Item href="/student-development-initiatives">
                      Initiatives
                    </Dropdown.Item>
                    <Dropdown.Item href="/library">
                      Knowledge Resource Center
                    </Dropdown.Item>
                    {/* <Dropdown.Item href="/library">Library</Dropdown.Item> */}
                    <Dropdown.Item href="/code-of-conduct">
                      Code of Conduct
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://www.studyinindia.gov.in/admission/registrations"
                      target="_blank"
                    >
                      Study In India
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </NavDropdown>

              <NavDropdown title="Research" id="basic-nav-dropdown">
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown">
                    Initiatives
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="https://youtu.be/Og4NMqI3q5M">
                      Laboratories
                    </Dropdown.Item>
                    <Dropdown.Item href="https://charusat.ac.in/charusatjournal/">
                      CHARUSAT Journal
                    </Dropdown.Item>
                    <Dropdown.Item href="/csic">
                      Charusat Startup and Innovation Centre (CSIC)
                    </Dropdown.Item>
                    <Dropdown.Item href="http://kradle.charusat.ac.in/">
                      Dr. K. C. Patel Research and Development Centre (KRADLE)
                    </Dropdown.Item>

                    <Dropdown.Item href="/ipr">IPR Cell</Dropdown.Item>
                    <Dropdown.Item href="/research">
                      Research Facilitation
                    </Dropdown.Item>
                    <Dropdown.Item href="/csrtc">
                      CHARUSAT Space Research Center
                    </Dropdown.Item>
                    <Dropdown.Item href="/IEC">
                      Institutional Ethics Committee
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="/assets/files/Environment-Sustainable-Policy/Water_Conservation_Policy.pdf"
                      target="_blank"
                    >
                      Water Conservation Policy
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="/assets/files/Environment-Sustainable-Policy/Plastic_Ban_Policy.pdf"
                      target="_blank"
                    >
                      Plastic Ban Policy
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="/assets/files/Environment-Sustainable-Policy/Environment_Conservation Policy.pdf"
                      target="_blank"
                    >
                      Environmental Conservation Policy
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="/assets/files/Environment-Sustainable-Policy/Sustainbility_Policy.pdf"
                      target="_blank"
                    >
                      Sustainability Policy
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="/assets/files/Environment-Sustainable-Policy/Energy_Conservation_Policy.pdf"
                      target="_blank"
                    >
                      Energy Conservation Policy
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown">
                    Policies
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="https://charusat.ac.in//assets/files/Research/2024/new/PDF_Policy_CHARUSAT_2024.pdf"
                      target="_blank"
                    >
                      Post Doctoral Fellowship Programme
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://charusat.ac.in//assets/files/Research/2024/new/CPSF_Policy_CHARUSAT_2024.pdf"
                      target="_blank"
                    >
                      Ph. D. Scholars&apos; Fellowship (CPSF)
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://charusat.ac.in//assets/files/Research/2024/new/UGSF_Policy_CHARUSAT_2024.pdf"
                      target="_blank"
                    >
                      Undergraduate Student Fellowship (UGSF)
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://charusat.ac.in//assets/files/Research/2024/new/PGSF_Policy_CHARUSAT_2024.pdf"
                      target="_blank"
                    >
                      Postgraduate Student Fellowship (PGSF)
                    </Dropdown.Item>

                    <Dropdown.Item
                      href="https://charusat.ac.in//assets/files/Research/2024/new/CSGR_Policy_CHARUSAT_2024.pdf"
                      target="_blank"
                    >
                      CHARUSAT Research Grants (CRG)
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://charusat.ac.in//assets/files/Research/2024/new/Research_Policy_CHARUSAT_2024.pdf"
                      target="_blank"
                    >
                      Research Policy - Summary
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://charusat.ac.in//assets/files/Research/2024/new/RPA_Policy_CHARUSAT_2024.pdf"
                      target="_blank"
                    >
                      Research Paper Award (RPA)
                    </Dropdown.Item>

                    <Dropdown.Item href="https://charusat.ac.in//assets/files/Research/2024/new/CSRI_Policy_CHARUSAT_2024.pdf">
                      Summer Research Internship (CSRI)
                    </Dropdown.Item>

                    <Dropdown.Item
                      href="https://charusat.ac.in//assets/files/Research/2024/new/Plagiarism_Policy_CHARUSAT_2024.pdf"
                      target="_blank"
                    >
                      Plagiarism
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://charusat.ac.in//assets/files/Research/2024/new/IPR_Policy_CHARUSAT_2024.pdf"
                      target="_blank"
                    >
                      IPR Policy
                    </Dropdown.Item>
                    <Dropdown.Item href="https://charusat.ac.in//assets/files/Research/2024/new/Consultancy_Policy_CHARUSAT_2024.pdf">
                      Consultancy
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://charusat.ac.in/documents/pdfs/research/Guidelines_for_Financial_Assistance_to_full-time_UG_PG_&_Ph.D_Scholar.pdf"
                      target="_blank"
                    >
                      Financial Support to full time UG, PG and Ph.D Scholar for
                      Presenting Research Paper
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="https://charusat.ac.in/documents/pdfs/research/Employee Development and Event Support Policy.pdf"
                      target="_blank"
                    >
                      Employee Development and Research Support Scheme
                    </Dropdown.Item>

                    <Dropdown.Item
                      href="https://charusat.ac.in//assets/files/Research/2024/new/Endowment_Policy_CHARUSAT_2024.pdf"
                      target="_blank"
                    >
                      Endowment Policy
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown">
                    Outcomes
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/publications">
                      Publications
                    </Dropdown.Item>
                    <Dropdown.Item href="/project-grants">
                      Project/Research Grants
                    </Dropdown.Item>
                    <Dropdown.Item href="/intellectual-property">
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
              <NavDropdown title="Campus Life" id="basic-nav-dropdown">
                <Dropdown.Item href="/campus-life">Campus Life</Dropdown.Item>
              </NavDropdown>

              {/*  */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
