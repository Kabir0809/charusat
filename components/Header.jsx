"use client";
import Link from "next/link";
import Navigation from "./section/Navigation";
import Navigation_temp from "./section/Navigation-temp";
// import { TypeAnimation } from "react-type-animation";
import React, { useState, useRef, useEffect } from "react";
import "@/css/header.css";
import SearchBar from "./section/SearchBar";

const Header = () => {
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const inputRef = useRef(null);
  const searchRef = useRef(null);

  const sections = [
    // Main Navigation
    { id: "#home", label: "Home", path: "/" },
    { id: "#about", label: "About Us", path: "/about" },
    { id: "#programmes", label: "Programmes", path: "/#programmes" },
    { id: "#campuslife", label: "Campus Life", path: "/campus-life" },
    {
      id: "#admission",
      label: "Enquire Now - Admission 2025",
      path: "http://admission.charusat.ac.in/",
    },

    // Quick Links
    { id: "#alumni", label: "Alumni", path: "https://alumni.charusat.ac.in/" },
    { id: "#careers", label: "Careers", path: "/careers" },
    { id: "#nirf", label: "NIRF", path: "/accreditation-and-ranking" },
    { id: "#iqac", label: "IQAC", path: "https://iqac.charusat.ac.in/" },
    { id: "#placement", label: "Placement", path: "/placement" },
    { id: "#scholarship", label: "Scholarship", path: "/scholarship" },
    { id: "#studentcorner", label: "Student Corner", path: "/student-corner" },
    { id: "#contact", label: "Contact Us", path: "/contact-us" },
    {
      id: "#online",
      label: "Online Programmes",
      path: "https://charusat.online/",
    },

    // About University
    {
      id: "#gazette",
      label: "Gazette & Notification",
      path: "/assets/files/Gazette-Notification-Private-University-Act.pdf",
    },
    {
      id: "#statutes",
      label: "The Act & Statutes",
      path: "https://charusat.ac.in/files/CHARUSAT-STATUTES%20HANDBOOK.pdf",
    },
    { id: "#torchbearers", label: "Torchbearers", path: "/torchbearers" },
    { id: "#journey", label: "Journey", path: "/about" },
    {
      id: "#accreditation",
      label: "Accreditation & Ranking",
      path: "/accreditation-and-ranking",
    },
    {
      id: "#presidentdesk",
      label: "From President's Desk",
      path: "/president-desk",
    },
    { id: "#provostdesk", label: "From Provost's Desk", path: "/provost-desk" },
    { id: "#convocations", label: "Convocations", path: "/convocations" },
    { id: "#governingbody", label: "Governing Body", path: "/governing-body" },
    {
      id: "#boardofmanagement",
      label: "Board of Management",
      path: "/board-of-management",
    },
    {
      id: "#universityofficers",
      label: "University Officers",
      path: "/university-officers",
    },
    {
      id: "#universityadminofficers",
      label: "University Administrative Officers",
      path: "/university-admin-officers",
    },
    { id: "#annualreport", label: "Annual Reports", path: "/annual-report" },
    {
      id: "#strategicplan",
      label: "Strategic Plan",
      path: "/assets/files/CHARUSAT_Action_Plan.pdf",
    },
    {
      id: "#samajgosthi",
      label: "Samaj Gosthi",
      path: "https://drive.google.com/drive/folders/1ev-SDSNFSUVHhTvk8EPH7DHh08DujoWz",
    },
    { id: "#donation", label: "Give & Support", path: "/donation" },
    {
      id: "#financereports",
      label: "Finance Reports",
      path: "https://www.charusat.edu.in/documents-access/",
    },

    // Centers & Cells
    {
      id: "#antiragging",
      label: "National Ragging Prevention Programme (Anti-Ragging Committee)",
      path: "/anti-ragging",
    },
    { id: "#eoc", label: "Equal Opportunity Cell", path: "/eoc" },
    { id: "#grc", label: "Student Grievance Redressal Cell", path: "/GRC" },
    {
      id: "#csic",
      label: "Charusat Startup and Innovation Centre",
      path: "/csic",
    },
    {
      id: "#uiic",
      label: "University Industry Interaction Cell",
      path: "/university-industry-interaction-cell",
    },
    { id: "#wdc", label: "Womens' Development Cell", path: "/wdc" },
    {
      id: "#hrdc",
      label: "Pri. B I Patel Human Resource Development Center",
      path: "/hrdc",
    },
    {
      id: "#isc",
      label: "International Students' Cell",
      path: "https://isc.charusat.ac.in/",
    },
    { id: "#icc", label: "Internal Complaint Committee (ICC)", path: "/ICC" },
    {
      id: "#credp",
      label: "Charusat Rural Education Development Program",
      path: "/CREDP",
    },
    {
      id: "#wincell",
      label: "Data Center @ CHARUSAT - WINCELL",
      path: "/wincell",
    },

    // Infrastructure & Resources
    {
      id: "#laboratories",
      label: "Laboratories",
      path: "https://youtu.be/Og4NMqI3q5M",
    },
    { id: "#library", label: "Knowledge Resource Center", path: "/library" },

    // Newsletter
    {
      id: "#quill",
      label: "CHARUSAT Chronicles : The Quill",
      path: "/quill-newsletter",
    },

    // Others
    { id: "#cdpc", label: "Career Development and Placements", path: "/cdpc" },
    {
      id: "#initiatives",
      label: "Initiatives",
      path: "/student-development-initiatives",
    },
    {
      id: "#codeofconduct",
      label: "Code of Conduct",
      path: "/code-of-conduct",
    },
    {
      id: "#studyinindia",
      label: "Study In India",
      path: "https://www.studyinindia.gov.in/admission/registrations",
    },
    { id: "#hostel", label: "Hostel", path: "/hostels" },

    // Programs - Learn Online
    { id: "#ilms", label: "iLMS", path: "http://ILMS.CHARUSAT.ac.in" },

    // Programs - Other Programmes
    {
      id: "#certification",
      label: "Certification & Audit Courses",
      path: "/certification-courses",
    },
    {
      id: "#gnm",
      label: "General Nursing & Midwifery (GNM)",
      path: "/course-single#GNM",
    },
    {
      id: "#pgdch",
      label: "PG Diploma in Clinical Hypnosis (PGDCH)",
      path: "/course-single#6303",
    },
    {
      id: "#pgdcs",
      label: "PG Diploma in Cyber Security (PGDCS)",
      path: "/course-single#6304",
    },
    {
      id: "#pgdmlt",
      label: "PG Diploma in Medical Laboratory Technology (PGDMLT)",
      path: "/course-single#PGDMLT",
    },
    {
      id: "#pbbsc",
      label: "Post Basic B.Sc. in Nursing (P.B.B.Sc)",
      path: "/course-single#PBBSC",
    },
    {
      id: "#pgdds",
      label: "PG Diploma in Data Science (PGDDS)",
      path: "/course-single#PGDDS",
    },

    // Undergraduate Studies
    { id: "#btech", label: "B.Tech.", path: "/course-single#1406" },
    { id: "#bca", label: "BCA", path: "/course-single#2401" },
    {
      id: "#bscit",
      label: "B.Sc.(Information Technology)",
      path: "/course-single#2402",
    },
    { id: "#bpharm", label: "B.Pharm.", path: "/course-single#3401" },
    { id: "#bba", label: "BBA", path: "/course-single#4401" },
    {
      id: "#bpt",
      label: "BPT (Bachelor of Physiotherapy)",
      path: "/course-single#6401",
    },
    { id: "#bscnursing", label: "B.Sc.(Nursing)", path: "/course-single#6402" },
    {
      id: "#boptom",
      label: "B.Optom.(Bachelor of Optometry)",
      path: "/course-single#6405",
    },
    {
      id: "#bscmit",
      label: "B.Sc. (Medical Imaging Technology)",
      path: "/course-single#6403",
    },
    {
      id: "#bsctech",
      label: "B.Sc. (Medical Technology)",
      path: "/course-single#6406",
    },
    {
      id: "#bscotat",
      label: "B.Sc. (Operation Theatre & Anesthesia Technology)",
      path: "/course-single#6404",
    },
    { id: "#bscchem", label: "B.Sc. (Chemistry)", path: "/course-single#6404" },
    {
      id: "#bscmicro",
      label: "B.Sc. (Microbio/Biotech/Biochem)",
      path: "/course-single#6404",
    },
    { id: "#baeng", label: "B. A. (English)", path: "/course-single" },
    {
      id: "#blis",
      label: "Bachelor of Library & Information Science",
      path: "/course-single",
    },

    // Postgraduate Studies
    { id: "#mtech", label: "M.Tech.", path: "/course-single#1406" },
    { id: "#mca", label: "MCA", path: "/course-single#2501" },
    {
      id: "#mscit",
      label: "M.Sc.(Information Technology)",
      path: "/course-single#2502",
    },
    { id: "#mpharm", label: "M.Pharm.", path: "/course-single#3501" },
    { id: "#mba", label: "MBA", path: "/course-single#4501" },
    {
      id: "#mscaoc",
      label: "M.Sc. (Advanced Organic Chemistry)",
      path: "/course-single#5505",
    },
    {
      id: "#mscmicro",
      label: "M.Sc. (Microbio/Biochem/Biotech)",
      path: "/course-single5502",
    },
    {
      id: "#mscphy",
      label: "M.Sc. (Physics / Maths)",
      path: "/course-single#5506",
    },
    {
      id: "#mpt",
      label: "MPT (Master of Physiotherapy)",
      path: "/course-single#6501",
    },
    {
      id: "#mscnursing",
      label: "M.Sc. (Nursing)",
      path: "/course-single#6510",
    },
    {
      id: "#mscmit",
      label: "M.Sc. (Medical Imaging Technology)",
      path: "/course-single#6403",
    },
    {
      id: "#msclab",
      label: "M.Sc. (Medical Laboratory Technology)",
      path: "/course-single#6511",
    },
    {
      id: "#mscotat",
      label: "M.Sc. (Operation Theater & Anaesthesia Tech.)",
      path: "/course-single#MSOTAT",
    },
    {
      id: "#mscmanagement",
      label: "M.Sc. (Management)",
      path: "/course-single#4501",
    },

    // PhD Programmes
    {
      id: "#phdreg",
      label: "Ph. D. Regulations 2024",
      path: "/assets/files/PHD/PhD_Regulations.pdf",
    },
    // { id: '#phdselected', label: 'Selected Candidates PhD January-2025 Intake', path: '/assets/files/PHD/Selected-Candidates-PhD-January-2025-Intake.pdf' },
    {
      id: "#phdadmission",
      label: "Ph. D. Admission Apply  (August  Intake-2025)",
      path: "https://admission.charusat.ac.in/",
    },
    {
      id: "#phdthesis",
      label: "PhD Thesis Writing Guidelines",
      path: "/assets/files/PHD/Guidelines for writing PhD Thesis 2024.pdf",
    },

    // Information You May Need
    {
      id: "#admissiondocs",
      label: "Admission Documents & Undertaking",
      path: "/admission-doc-undertaking",
    },
    {
      id: "#academiccalendar",
      label: "Academic Calender",
      path: "/Downloads/academic_calendar/",
    },

    // Research
    {
      id: "#charusatjournal",
      label: "CHARUSAT Journal",
      path: "https://charusat.ac.in/charusatjournal/",
    },
    {
      id: "#kradle",
      label: "Dr. K. C. Patel Research and Development Centre (KRADLE)",
      path: "http://kradle.charusat.ac.in/",
    },
    { id: "#ipr", label: "IPR Cell", path: "/ipr" },
    {
      id: "#researchfacilitation",
      label: "Research Facilitation",
      path: "/research",
    },
    { id: "#csrtc", label: "CHARUSAT Space Research Center", path: "/csrtc" },
    { id: "#iec", label: "Institutional Ethics Committee", path: "/IEC" },
    {
      id: "#waterpolicy",
      label: "Water Conservation Policy",
      path: "/assets/files/Environment-Sustainable-Policy/Water_Conservation_Policy.pdf",
    },
    {
      id: "#plasticban",
      label: "Plastic Ban Policy",
      path: "/assets/files/Environment-Sustainable-Policy/Plastic_Ban_Policy.pdf",
    },
    {
      id: "#envpolicy",
      label: "Environmental Conservation Policy",
      path: "/assets/files/Environment-Sustainable-Policy/Environment_Conservation Policy.pdf",
    },
    {
      id: "#sustainability",
      label: "Sustainability Policy",
      path: "/assets/files/Environment-Sustainable-Policy/Sustainbility_Policy.pdf",
    },
    {
      id: "#energypolicy",
      label: "Energy Conservation Policy",
      path: "/assets/files/Environment-Sustainable-Policy/Energy_Conservation_Policy.pdf",
    },

    // Research Policies
    {
      id: "#pdfpolicy",
      label: "Post Doctoral Fellowship Programme",
      path: "https://charusat.ac.in/assets/files/Research/2024/new/PDF_Policy_CHARUSAT_2024.pdf",
    },
    {
      id: "#cpsf",
      label: "Ph. D. Scholars' Fellowship (CPSF)",
      path: "https://charusat.ac.in/assets/files/Research/2024/new/CPSF_Policy_CHARUSAT_2024.pdf",
    },
    {
      id: "#ugsf",
      label: "Undergraduate Student Fellowship (UGSF)",
      path: "https://charusat.ac.in/assets/files/Research/2024/new/UGSF_Policy_CHARUSAT_2024.pdf",
    },
    {
      id: "#pgsf",
      label: "Postgraduate Student Fellowship (PGSF)",
      path: "https://charusat.ac.in/assets/files/Research/2024/new/PGSF_Policy_CHARUSAT_2024.pdf",
    },
    {
      id: "#crg",
      label: "CHARUSAT Research Grants (CRG)",
      path: "https://charusat.ac.in/assets/files/Research/2024/new/CSGR_Policy_CHARUSAT_2024.pdf",
    },
    {
      id: "#researchpolicy",
      label: "Research Policy - Summary",
      path: "https://charusat.ac.in/assets/files/Research/2024/new/Research_Policy_CHARUSAT_2024.pdf",
    },
    {
      id: "#rpa",
      label: "Research Paper Award (RPA)",
      path: "https://charusat.ac.in/assets/files/Research/2024/new/RPA_Policy_CHARUSAT_2024.pdf",
    },
    {
      id: "#csri",
      label: "Summer Research Internship (CSRI)",
      path: "https://charusat.ac.in/assets/files/Research/2024/new/CSRI_Policy_CHARUSAT_2024.pdf",
    },
    {
      id: "#plagiarism",
      label: "Plagiarism",
      path: "https://charusat.ac.in/assets/files/Research/2024/new/Plagiarism_Policy_CHARUSAT_2024.pdf",
    },
    {
      id: "#iprpolicy",
      label: "IPR Policy",
      path: "https://charusat.ac.in/assets/files/Research/2024/new/IPR_Policy_CHARUSAT_2024.pdf",
    },
    {
      id: "#consultancy",
      label: "Consultancy",
      path: "https://charusat.ac.in/assets/files/Research/2024/new/Consultancy_Policy_CHARUSAT_2024.pdf",
    },
    {
      id: "#financialsupport",
      label:
        "Financial Support to full time UG, PG and Ph.D Scholar for Presenting Research Paper",
      path: "https://charusat.ac.in/documents/pdfs/research/Guidelines_for_Financial_Assistance_to_full-time_UG_PG_&_Ph.D_Scholar.pdf",
    },
    {
      id: "#employeedev",
      label: "Employee Development and Research Support Scheme",
      path: "https://charusat.ac.in/documents/pdfs/research/Employee Development and Event Support Policy.pdf",
    },
    {
      id: "#endowment",
      label: "Endowment Policy",
      path: "https://charusat.ac.in/assets/files/Research/2024/new/Endowment_Policy_CHARUSAT_2024.pdf",
    },

    // Research Outcomes
    { id: "#publications", label: "Publications", path: "/publications" },
    {
      id: "#projectgrants",
      label: "Project/Research Grants",
      path: "/project-grants",
    },
    {
      id: "#intellectualproperty",
      label: "Intellectual Property",
      path: "/intellectual-property",
    },

    // Footer links
    {
      id: "#examresult",
      label: "Exam Result",
      path: "https://charusat.edu.in:912/Uniexamresult/",
    },
    {
      id: "#payfees",
      label: "Pay Fees",
      path: "https://support.charusat.edu.in/FeesPaymentApp/frmpayment.aspx",
    },
    {
      id: "#downloads",
      label: "Downloads",
      path: "https://charusat.ac.in/Downloads/",
    },
    {
      id: "#alumniportal",
      label: "Alumni Portal",
      path: "https://alumni.charusat.ac.in/",
    },
    { id: "#donations", label: "Donations", path: "/donation" },
    {
      id: "#policies",
      label: "Policies and Procedures - Support Facilities",
      path: "/policies-terms",
    },
    { id: "#ugc", label: "UGC", path: "https://www.ugc.gov.in/" },

    // Footer Miscellaneous
    {
      id: "#holidays",
      label: "Public Holidays",
      path: "assets/files/Holiday_List_2025.pdf",
    },
    { id: "#campusmap", label: "Campus Map", path: "/campus-map" },
    { id: "#howtoreach", label: "How to Reach us", path: "/how-to-reach" },
    { id: "#notifications", label: "Notifications", path: "/notifications" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setHeaderFixed(true);
      } else {
        setHeaderFixed(false);
      }
    });
  }, []);

  // Add this useEffect to filter sections based on searchQuery
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }
    const results = Object.values(sections)
      .filter((section) =>
        section.label.toLowerCase().includes(searchQuery.trim().toLowerCase())
      )
      .map((section) => ({
        key: section.id,
        label: section.label,
        path: section.path,
        id: section.id,
      }));
    setSearchResults(results);
  }, [searchQuery]);

  // Dummy handleNavigation function (replace with your actual navigation logic)
  const handleNavigation = (path, id) => {
    window.location.href = path;
  };

  // Dummy handleSearch function (replace with your actual search logic)
  const handleSearch = (e, path, id) => {
    if (e) e.preventDefault();
    if (path && id) {
      handleNavigation(path, id);
    } else if (searchResults.length > 0) {
      const firstResult = searchResults[0];
      handleNavigation(firstResult.path, firstResult.id);
    } else if (searchQuery.trim() !== "") {
      alert(`No matching section found for: ${searchQuery}`);
    }
  };

  return (
    <header className="header_all" role="banner">
      <div
        className={`header-section style-3 ${
          headerFixed ? "header-fixed fadeInUp" : ""
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div
          className={`header-top ${socialToggle ? "open" : ""}`}
          style={{
            backgroundColor: "#0066b3",
            color: "white",
            fontSize: "0.9rem",
          }}
          role="region"
          aria-label="Top navigation links"
        >
          <div className="container c111">
            <div
              className="header-top-area"
              style={{ position: "relative", letterSpacing: "1.5px" }}
            >
              <nav className="header-top-reglog" role="navigation" aria-label="Quick links">
                <Link
                  href="https://alumni.charusat.ac.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none login"
                  aria-label="Alumni portal - opens in new tab"
                >
                  Alumni
                </Link>
                <Link 
                  href="/careers" 
                  className="login text-decoration-none"
                  aria-label="Career opportunities"
                >
                  Careers
                </Link>
                <Link
                  className="text-decoration-none login"
                  href="/accreditation-and-ranking"
                  aria-label="NIRF ranking and accreditation information"
                >
                  NIRF
                </Link>
                <Link
                  className="text-decoration-none login"
                  id="IQAC-link"
                  target="_blank"
                  href="https://iqac.charusat.ac.in/"
                  aria-label="Internal Quality Assurance Cell - opens in new tab"
                  rel="noreferrer"
                >
                  IQAC
                </Link>
                <Link 
                  className="text-decoration-none login" 
                  href="/placement"
                  aria-label="Placement information and statistics"
                >
                  Placement
                </Link>
                <Link
                  className="text-decoration-none login"
                  href="/scholarship"
                  aria-label="Scholarship programs and opportunities"
                >
                  Scholarship
                </Link>
                <Link
                  className="text-decoration-none login"
                  href="/library"
                  aria-label="Knowledge Resource Center and library services"
                >
                  Library-KRC
                </Link>
                <Link
                  className="text-decoration-none login"
                  href="/student-corner"
                  aria-label="Student resources and information"
                >
                  Student Corner
                </Link>                
                <Link
                  href="/contact-us"
                  className="signup text-decoration-none"
                  aria-label="Contact university information"
                >
                  Contact Us
                </Link>
                <Link
                  target="_blank"
                  href="https://charusat.online/"
                  className="text-decoration-none"
                  aria-label="Online learning programs - opens in new tab"
                  rel="noreferrer"
                >
                  <span className="support-btn" role="button" tabIndex="0">
                    Online Programmes
                  </span>
                </Link>
                &nbsp;
                <SearchBar
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  searchResults={searchResults}
                  showSearchResults={showSearchResults}
                  setShowSearchResults={setShowSearchResults}
                  handleSearch={handleSearch}
                  clearSearch={() => {
                    setSearchQuery("");
                    inputRef.current?.focus();
                  }}
                  inputRef={inputRef}
                  searchRef={searchRef}
                />
              </nav>
            </div>
          </div>
        </div>
        <Navigation_temp />
      </div>
    </header>
  );
};

export default Header;
