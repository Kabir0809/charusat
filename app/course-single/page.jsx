"use client";
import { Fragment, useState } from "react";

// import Link from "next/link";
// import PageHeader from "../component/layout/pageheader";
// import Contact from "../component/section/contact";
// import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

const CourseList = [
  {
    courseName: "Bachelor of Arts (BA) in English/English with honors",
    faculty: "Faculty of Humanities",
    Institute:"",
    CourseDuration: "03/04 Years",
    Intake: "40",
    Fees: "₹ 40,000/-",
    Eligibility:"12th Pass",
    // syllabusBtn: "View Syllabus",
    // syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMS%20I2IM/",
    // brochureBtn: "Download Brochure",
    // brochureLink: "http://charusat.ac.in/Downloads/Brochure/IIIM/",
    websiteBtn: "Visit Website",
    websiteLink: "https://foh.charusat.ac.in/",
    programCode: "ENGLISH",
  },
  {
    courseName: "Bachelor of Library and Information Science (BLIS)",
    faculty: "Faculty of Humanities",
    Institute:"",
    CourseDuration: "01 Year",
    Intake: "15",
    Fees: "₹ 30,000/-",
    Eligibility:"Graduate of any discipline",
    // syllabusBtn: "View Syllabus",
    // syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMS%20I2IM/",
    // brochureBtn: "Download Brochure",
    // brochureLink: "http://charusat.ac.in/Downloads/Brochure/IIIM/",
    websiteBtn: "Visit Website",
    websiteLink: "https://foh.charusat.ac.in/",
    programCode: "BLIS",
  },
  {
    courseName: "Bachelor of Business Administration (BBA)/BBA-Honors",
    faculty: "Faculty of Management Studies",
    Institute: "Indukaka Ipcowala Institute of Management(IIIM)",
    CourseDuration: "03/04 Years",
    Intake: "",
    Fees: "₹ 1,00,000/-",
    Eligibility:
      "CBSE/ISCE/GSEB Minimum 60% required in Commerce Stream / Art Stream (with English as a subject)Student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMS%20I2IM/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/IIIM/",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/i2im/",
    programCode: "4401",
  },
  // {
  //   courseName:
  //     "Bachelor of Business Administration (BBA) - ENVM (Entrepreneurship and New Venture Management)",
  //   faculty: "Faculty of Management Studies",
  //   Institute: "Indukaka Ipcowala Institute of Management(I2IM)",
  //   CourseDuration: "03 Years",
  //   Intake: "60",
  //   Fees: "₹ 75,000/-",
  //   Eligibility:
  //     "CBSE/ISCE/State Board Minimum 50% required in Commerce Stream / Art Stream (with English as a subject)Student within/outside Gujarat",
  //   syllabusBtn: "View Syllabus",
  //   syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMS%20I2IM/",
  //   brochureBtn: "Download Brochure",
  //   brochureLink: "http://charusat.ac.in/Downloads/Brochure/IIIM/",
  //   websiteBtn: "Visit Website",
  //   websiteLink: "https://charusat.ac.in/i2im/",
  //   programCode: "#",
  // },
  // {
  //   courseName:
  //     "Bachelor of Business Administration (BBA) - BA (Business Analytics)",
  //   faculty: "Faculty of Management Studies",
  //   Institute: "Indukaka Ipcowala Institute of Management(I2IM)",
  //   CourseDuration: "03 Years",
  //   Intake: "60",
  //   Fees: "₹ 85,000/-",
  //   Eligibility:
  //     "CBSE/ISCE/State Board Minimum 50% required in Commerce Stream / Art Stream (with English as a subject)Student within/outside Gujarat",
  //   syllabusBtn: "View Syllabus",
  //   syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMS%20I2IM/",
  //   brochureBtn: "Download Brochure",
  //   brochureLink: "http://charusat.ac.in/Downloads/Brochure/IIIM/",
  //   websiteBtn: "Visit Website",
  //   websiteLink: "https://charusat.ac.in/i2im/",
  //   programCode: "#",
  // },
  // {
  //   courseName: "Master of Technology (Thermal Engineering)",
  //   faculty: "Faculty of Technology and Engineering",
  //   Institute: "Institute: Chandubhai S. Patel Insitute of Technology(CSPIT)",
  //   CourseDuration: "02 Years",
  //   Intake: "09",
  //   Fees: "₹ 1,59,000/-",
  //   Eligibility:
  //     "BE/B.Tech in relevant discipline with minimum 50 % and should have applied/appeared in GATE/Non-GATE Entrance Exam Any student within/outside Gujarat",
  //   syllabusBtn: "View Syllabus",
  //   syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMS%20I2IM/",
  //   brochureBtn: "Download Brochure",
  //   brochureLink: "http://charusat.ac.in/Downloads/Brochure/IIIM/",
  //   websiteBtn: "Visit Website",
  //   websiteLink: "https://charusat.ac.in/i2im/",
  //   programCode: "4401",
  // },
  {
    courseName: "Master of Business Administration (MBA)",
    faculty: "Faculty of Management Studies",
    Institute: "Indukaka Ipcowala Institute of Management(IIIM)",
    CourseDuration: "02 Years",
    Intake: "",
    Fees: "₹ 1,45,000/-",
    Eligibility:
      "Any Graduate with 50% marks in BBA, B.Tech, B.Com, B.Pharm, BE,Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMS%20I2IM/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/IIIM/",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/i2im/",
    programCode: "4501",
  },
  {
    courseName: "Master of Science (Management)",
    faculty: "Faculty of Management Studies",
    Institute: "Indukaka Ipcowala Institute of Management(IIIM)",
    CourseDuration: "02 Years",
    Intake: "",
    Fees: "₹ 1,45,000/-",
    Eligibility:"",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMS%20I2IM/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/IIIM/",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/i2im/",
    programCode: "MGMT",
  },
  {
    courseName: "Bachelor of Computer Application (BCA) / BCA - Honors",
    faculty: "Faculty of Computer Science and Applications",
    Institute:
      "Smt.Chandaben Mohanbhai Patel Institute of Computer Application(CMPICA)",
    CourseDuration: "03 / 04  Years",
    Intake: "240",
    Fees: "₹ 75,000/-",
    Eligibility:
      "CBSE/ISCE/State Board or any other valid board with Commerce or Science Stream(A, B or AB Group) with minimum 50%",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FCA%20CMPICA/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/CMPICA/CMPICA_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/cmpica/",
    programCode: "2401",
  },

  {
    courseName:
      "Bachelor of Science (Information Technology) / B.Sc (IT) - Honors",
    faculty: "Faculty of Computer Sceince and Applications",
    Institute:
      "Smt.Chandaben Mohanbhai Patel Institute of Computer Application (CMPICA)",
    CourseDuration: "03 / 04 Years",
    Intake: "120",
    Fees: "₹ 70,000/-",
    Eligibility:
      "CBSE/ISCE/State Board/ or any other valid board with Science Stream(A, B or AB Group) with minimum 50% required",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FCA%20CMPICA/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/CMPICA/CMPICA_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/cmpica/",
    programCode: "2402",
  },

  {
    courseName: "Master of Computer Application (MCA)",
    faculty: "Faculty of Computer Science and Applications",
    Institute:
      "Smt.Chandaben Mohanbhai Patel Institute of Computer Application(CMPICA)",
    CourseDuration: "02 Years",
    Intake: "120",
    Fees: "₹ 1,20,000/-",
    Eligibility:
      "Any Graduate with 50% marks in BCA, B.Sc (IT), B.Tech Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FCA%20CMPICA/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/CMPICA/CMPICA_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/cmpica/",
    programCode: "2501",
  },
  {
    courseName: "Master of Science (Information Technology) ",
    faculty: "Faculty of Computer Sceince and Applications",
    Institute:
      "Smt.Chandaben Mohanbhai Patel Institute of Computer Application (CMPICA)",
    CourseDuration: "02 Years",
    Intake: "60",
    Fees: "₹ 90,000/-",
    Eligibility:
      "Any Graduate with 50% marks in BCA, B.Sc (IT), B.Tech Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FCA%20CMPICA/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/CMPICA/CMPICA_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/cmpica/",
    programCode: "2502",
  },
  {
    courseName: "Bachelor of Pharmacy(B.Pharm.)",
    faculty: "Faculty of Pharmacy",
    Institute: "Ramanbhai Patel College of Pharmacy",
    CourseDuration: "04 Years",
    Intake: "100",
    Fees: "₹ 1,55,000/-",
    ManagementQuotaFees: "₹ 1,55,000/-",
    NRIQuotaFees: "$3000",
    Eligibility:
      "CBSE/ISCE/State board, Minimum 45% required in PCB/PCM subjects (as per PCI), Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "http://charusat.ac.in/Downloads/Syllabus/FPH%20RPCP",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/RPCP/RPCP_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/rpcp/",
    programCode: "3401",
  },
  {
    courseName: "Master of Pharmacy (Pharmaceutical Technology)",
    faculty: "Faculty of Pharmacy",
    Institute: "Ramanbhai Patel College of Pharmacy",
    CourseDuration: "02 Years",
    Intake: "15",
    Fees: "₹ 2,00,000/-",
    Eligibility:
      "B.Pharm from PCI approved institute with minimum 50% Should have applied for GPAT/Non GPAT entrance exam Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "http://charusat.ac.in/Downloads/Syllabus/FPH%20RPCP",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/RPCP/RPCP_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/rpcp/",
    programCode: "3501",
  },
  {
    courseName: "Master of Pharmacy (Pharmaceutical Quality Assurance)",
    faculty: "Faculty of Pharmacy",
    Institute: "Ramanbhai Patel College of Pharmacy",
    CourseDuration: "02 Years",
    Intake: "15",
    Fees: "₹ 2,00,000/-",
    Eligibility:
      "B.Pharm from PCI approved institute with minimum 50% Should have applied for GPAT/Non GPAT entrance exam Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "http://charusat.ac.in/Downloads/Syllabus/FPH%20RPCP",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/RPCP/RPCP_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/rpcp/",
    programCode: "3502",
  },
  {
    courseName: "Master of Pharmacy (Pharmacology)",
    faculty: "Faculty of Pharmacy",
    Institute: "Ramanbhai Patel College of Pharmacy",
    CourseDuration: "02 Years",
    Intake: "15",
    Fees: "₹ 2,00,000/-",
    Eligibility:
      "B.Pharm from PCI approved institute with minimum 50% Should have applied for GPAT/Non GPAT entrance exam Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "http://charusat.ac.in/Downloads/Syllabus/FPH%20RPCP",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/RPCP/RPCP_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/rpcp/",
    programCode: "3505",
  },
  {
    courseName: "Master of Pharmacy (Pharmacy Practice)",
    faculty: "Faculty of Pharmacy",
    Institute: "Ramanbhai Patel College of Pharmacy",
    CourseDuration: "02 Years",
    Intake: "15",
    Fees: "₹ 2,00,000/-",
    Eligibility:
      "B.Pharm from PCI approved institute with minimum 50% Should have applied for GPAT/Non GPAT entrance exam Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "http://charusat.ac.in/Downloads/Syllabus/FPH%20RPCP",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/RPCP/RPCP_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/rpcp/",
    programCode: "3503",
  },
  {
    courseName: "Master of Pharmacy (Pharmaceutical Chemistry)",
    faculty: "Faculty of Pharmacy",
    Institute: "Ramanbhai Patel College of Pharmacy",
    CourseDuration: "02 Years",
    Intake: "15",
    Fees: "₹ 2,00,000/-",
    Eligibility:
      "B.Pharm from PCI approved institute with minimum 50% Should have applied for GPAT/Non GPAT entrance exam Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "http://charusat.ac.in/Downloads/Syllabus/FPH%20RPCP",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/RPCP/RPCP_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/rpcp/",
    programCode: "3506",
  },
  {
    courseName: "Master of Pharmacy (Regulatory Affairs)",
    faculty: "Faculty of Pharmacy",
    Institute: "Ramanbhai Patel College of Pharmacy",
    CourseDuration: "02 Years",
    Intake: "15",
    Fees: "₹ 2,00,000/-",
    Eligibility:
      "B.Pharm from PCI approved institute with minimum 50% Should have applied for GPAT/Non GPAT entrance exam Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "http://charusat.ac.in/Downloads/Syllabus/FPH%20RPCP",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/RPCP/RPCP_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/rpcp/",
    programCode: "3504",
  },
  {
    courseName: "Bachelor of Physiotherapy (BPT)",
    faculty: "Faculty of Medical Sciences",
    Institute: "Ashok and Rita Patel Institute of Physiotherapy",
    CourseDuration: "4 Years",
    Intake: "100",
    Fees: "₹ 1,62,000/-",
    Eligibility:
      "CBSE/ISCE/State board Minimum 35% in PCB subjects Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMD%20ARIP/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/ARIP/ARIP_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/arip/",
    programCode: "6401",
  },
  {
    courseName: "Master of Physiotherapy (Musculoskeletal Science)",
    faculty: "Faculty of Medical Sciences",
    Institute: "Ashok and Rita Patel Institute of Physiotherapy",
    CourseDuration: "02 Years",
    Intake: "06",
    Fees: "₹ 2,00,000/-",
    Eligibility:
      "A degree in BPT minimum 50 % or equivalent grade pointand compulsory rotatory internship of 6 months with, Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMD%20ARIP/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/ARIP/ARIP_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/arip/",
    programCode: "6501",
  },
  {
    courseName: "Master of Physiotherapy (Neurological Science)",
    faculty: "Faculty of Medical Sciences",
    Institute: "Ashok and Rita Patel Institute of Physiotherapy",
    CourseDuration: "02 Years",
    Intake: "06",
    Fees: "₹ 2,00,000/-",
    Eligibility:
      "A degree in BPT minimum 50 % or equivalent grade pointand compulsory rotatory internship of 6 months with, Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMD%20ARIP/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/ARIP/ARIP_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/arip/",
    programCode: "6502",
  },
  {
    courseName: "Master of Physiotherapy (Cardiopulmonary Science)",
    faculty: "Faculty of Medical Sciences",
    Institute: "Ashok and Rita Patel Institute of Physiotherapy",
    CourseDuration: "02 Years",
    Intake: "03",
    Fees: "₹ 2,00,000/-",
    Eligibility:
      "A degree in BPT minimum 50 % or equivalent grade pointand compulsory rotatory internship of 6 months with, Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMD%20ARIP/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/ARIP/ARIP_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/arip/",
    programCode: "6503",
  },
  {
    courseName: "Master of Physiotherapy (Paediatric)",
    faculty: "Faculty of Medical Sciences",
    Institute: "Ashok and Rita Patel Institute of Physiotherapy",
    CourseDuration: "02 Years",
    Intake: "03",
    Fees: "₹ 2,00,000/-",
    Eligibility:
      "A degree in BPT minimum 50 % or equivalent grade pointand compulsory rotatory internship of 6 months with, Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMD%20ARIP/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/ARIP/ARIP_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/arip/",
    programCode: "6504",
  },
  {
    courseName: "Master of Physiotherapy (Rehabilitation)",
    faculty: "Faculty of Medical Sciences",
    Institute: "Ashok and Rita Patel Institute of Physiotherapy",
    CourseDuration: "02 Years",
    Intake: "03",
    Fees: "₹ 2,00,000/-",
    Eligibility:
      "A degree in BPT minimum 50 % or equivalent grade pointand compulsory rotatory internship of 6 months with, Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMD%20ARIP/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/ARIP/ARIP_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/arip/",
    programCode: "6505",
  },
  // {
  //   courseName: "Bachelor of Science (Physics)",
  //   faculty: "Faculty of Sciences",
  //   Institute: "P D Patel Institute of Applied Science (PDPIAS)",
  //   CourseDuration: "03 Years",
  //   Intake: "30",
  //   Fees: "₹ 49,000/-",
  //   Eligibility:
  //     "CBSE/ISCE/State board Minimum 55% in PCM/B subject, Any student within/outside Gujarat",
  //   syllabusBtn: "View Syllabus",
  //   syllabusLink:
  //     "https://charusat.ac.in/Downloads/Syllabus/FOS%20PDPIAS/Physics/",
  //   brochureBtn: "Download Brochure",
  //   brochureLink: "http://charusat.ac.in/Downloads/Brochure/PDPIAS/",
  //   websiteBtn: "Visit Website",
  //   websiteLink: "https://charusat.ac.in/pdpias/",
  //   programCode: "5402a",
  // },
  // {
  //   courseName:
  //     "Bachelor of Science (Microbiology/Biochemistry/Biotechnology) - Honors/Honors with Research",
  //   faculty: "Faculty of Sciences",
  //   Institute: "P D Patel Institute of Applied Science (PDPIAS)",
  //   CourseDuration: "03 Years",
  //   Intake: "150",
  //   Fees: "₹ 80,000/-",
  //   Eligibility:
  //     "CBSE/ISCE/State board Minimum 55% in PCM/B subject, Any student within/outside Gujarat",
  //   syllabusBtn: "View Syllabus",
  //   syllabusLink:
  //     "https://charusat.ac.in/Downloads/Syllabus/FOS%20PDPIAS/Biology/",
  //   brochureBtn: "Download Brochure",
  //   brochureLink: "http://charusat.ac.in/Downloads/Brochure/PDPIAS/",
  //   websiteBtn: "Visit Website",
  //   websiteLink: "https://charusat.ac.in/pdpias/",
  //   programCode: "5401",
  // },
  {
    courseName:
      "Bachelor of Science (Microbiology/Biochemistry/Biotechnology)-Honors/Honors with Research",
    faculty: "Faculty of Sciences",
    Institute: "P D Patel Institute of Applied Science (PDPIAS)",
    CourseDuration: "03 Years + 01 Year",
    Intake: "150",
    Fees: "₹ 80,000/-(Fees of honors 4th year is equivalent to M.Sc.)",
    Eligibility:
      "CBSE/ISCE/State board Minimum 55% in PCM/B subject, Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink:
      "https://charusat.ac.in/Downloads/Syllabus/FOS%20PDPIAS/Biology/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/PDPIAS/",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/pdpias/",
    programCode: "5401",
  },
  {
    courseName:
      "Bachelor of Science (Chemistry)-Honors",
    faculty: "Faculty of Sciences",
    Institute: "P D Patel Institute of Applied Science (PDPIAS)",
    CourseDuration: "04 Years",
    Intake: "40",
    Fees: "₹ 50,000/- (Fees of honors 4th year is equivalent to M.Sc.)",
    Eligibility:
      "CBSE/ISCE/State board Minimum 55% in PCM/B subject, Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink:
      "https://charusat.ac.in/Downloads/Syllabus/FOS%20PDPIAS/Biology/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/PDPIAS/",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/pdpias/",
    programCode: "5401",
  },
  {
    courseName: "Master of Science (Microbiology)",
    faculty: "Faculty of Sciences",
    Institute: "P D Patel Institute of Applied Science (PDPIAS)",
    CourseDuration: "02 Years",
    Intake: "50",
    Fees: "₹ 1,00,000/-",
    Eligibility:
      "B.Sc (Micro/Bio Chemistry/ Biotechnology) minimum 50% required, Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink:
      "https://charusat.ac.in/Downloads/Syllabus/FOS%20PDPIAS/Biology/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/PDPIAS/",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/pdpias/",
    programCode: "5503",
  },
  {
    courseName: "Master of Science (Biochemistry)",
    faculty: "Faculty of Sciences",
    Institute: "P D Patel Institute of Applied Science (PDPIAS)",
    CourseDuration: "02 Years",
    Intake: "20",
    Fees: "₹ 1,00,000/-",
    Eligibility:
      "B.Sc (Micro/Bio Chemistry/ Biotechnology) minimum 50% required, Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink:
      "https://charusat.ac.in/Downloads/Syllabus/FOS%20PDPIAS/Biology/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/PDPIAS/",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/pdpias/",
    programCode: "5502",
  },
  {
    courseName: "Master of Science (Biotechnology)",
    faculty: "Faculty of Sciences",
    Institute: "P D Patel Institute of Applied Science (PDPIAS)",
    CourseDuration: "02 Years",
    Intake: "50",
    Fees: "₹ 1,00,000/-",
    Eligibility:
      "B.Sc (Micro/Bio Chemistry/ Biotechnology) minimum 50% required, Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink:
      "https://charusat.ac.in/Downloads/Syllabus/FOS%20PDPIAS/Biology/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/PDPIAS/",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/pdpias/",
    programCode: "5501",
  },
  {
    courseName: "Master of Science (Advance Organic Chemistry)",
    faculty: "Faculty of Sciences",
    Institute: "P D Patel Institute of Applied Science (PDPIAS)",
    CourseDuration: "02 Years",
    Intake: "40",
    Fees: "₹ 85,000/-",
    Eligibility:
      "B.Sc(Chemistry) minimum 50% required, Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink:
      "https://charusat.ac.in/Downloads/Syllabus/FOS%20PDPIAS/Chemistry/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/PDPIAS/",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/pdpias/",
    programCode: "5505",
  },
  {
    courseName: "Master of Science (Physics)",
    faculty: "Faculty of Sciences",
    Institute: "P D Patel Institute of Applied Science (PDPIAS)",
    CourseDuration: "02 Years",
    Intake: "15",
    Fees: "₹ 50,000/-",
    Eligibility:
      "B.Sc(Physics) minimum 50% required,Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink:
      "https://charusat.ac.in/Downloads/Syllabus/FOS%20PDPIAS/Physics/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/PDPIAS/",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/pdpias/",
    programCode: "5506",
  },
  {
    courseName: "Master of Science (Mathematics)",
    faculty: "Faculty of Sciences",
    Institute: "P D Patel Institute of Applied Science (PDPIAS)",
    CourseDuration: "02 Years",
    Intake: "15",
    Fees: "₹ 45,000/-",
    Eligibility:
      "B.Sc(Maths) minimum 50% required,Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink:
      "https://charusat.ac.in/Downloads/Syllabus/FOS%20PDPIAS/Physics/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/PDPIAS/",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/pdpias/",
    programCode: "5506",
  },
  {
    courseName: "Post Graduate Diploma in Data Science",
    faculty: "Faculty of Sciences",
    Institute: "P D Patel Institute of Applied Science (PDPIAS)",
    CourseDuration: "01 Year",
    Intake: "20",
    Fees: "₹ 40,000/-",
    Eligibility:
      " Bachelor's degree in Science, Engineering, Commerce, or related fields with a minimum of 50% marks",  
    syllabusBtn: "View Syllabus",
    syllabusLink:
      "https://charusat.ac.in/Downloads/Syllabus/FOS%20PDPIAS/Physics/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/PDPIAS/",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/pdpias/",
    programCode: "PGDDS",
  },

  {
    courseName: "Bachelor of Science (Nursing)",
    faculty: "Faculty of Medical Sciences",
    Institute: "Manikaka Topawala Institute of Nursing (MTIN)",
    CourseDuration: "04 Years",
    Intake: "80",
    Fees: "₹ 1,58,000/-",
    Eligibility:
      "CBSE/ISCE/State board Minimum 45% in PCB subjects (as per INC)",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMD%20MTIN/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/MTIN/MTIN_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/mtin/",
    programCode: "6402",
  },
  {
    courseName: "General Nursing Midwifery (GNM)",
    faculty: "Faculty of Medical Sciences",
    Institute: "Manikaka Topawala Institute of Nursing (MTIN)",
    CourseDuration: "03 Years",
    Intake: "40",
    Fees: "₹ 1,20,000/-",
    Eligibility:
      "HSC or Equivalent examination with Science Stream, General Stream,Vyavsaylakshi stream,Uchchatar Uttar Buniyadi Pravah Stream with English subject Minimum 40% required",
    syllabusBtn: "View Syllabus",
    syllabusLink: "http://charusat.ac.in/Downloads/Syllabus/FMD%20MTIN/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/MTIN/MTIN_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/mtin",
    programCode: "GNM",
  },
  {
    courseName: "Master of Science Nursing (Community Health)",
    faculty: "Faculty of Medical Sciences",
    Institute: "Manikaka Topawala Institute of Nursing (MTIN)",
    CourseDuration: "02 Years",
    Intake: "04",
    Fees: "₹ 1,70,000/-",
    Eligibility:
      "A degree in B.Sc. (Nursing) andminimum 1 year of work experience post B.Sc. Nursing and Minimum 1 year experience,Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMD%20MTIN/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/MTIN/MTIN_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/mtin/",
    programCode: "6510",
  },
  {
    courseName: "Master of Science Nursing (Mental Health)",
    faculty: "Faculty of Medical Sciences",
    Institute: "Manikaka Topawala Institute of Nursing (MTIN)",
    CourseDuration: "02 Years",
    Intake: "04",
    Fees: "₹ 1,70,000/-",
    Eligibility:
      "A degree in B.Sc. (Nursing) andminimum 1 year of work experience post B.Sc. Nursing and Minimum 1 year experience,Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMD%20MTIN/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/MTIN/MTIN_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/mtin/",
    programCode: "6511",
  },
  {
    courseName: "Master of Science Nursing (Obstetrics and Gynaecology)",
    faculty: "Faculty of Medical Sciences",
    Institute: "Manikaka Topawala Institute of Nursing (MTIN)",
    CourseDuration: "02 Years",
    Intake: "04",
    Fees: "₹ 1,70,000/-",
    Eligibility:
      "A degree in B.Sc. (Nursing) andminimum 1 year of work experience post B.Sc. Nursing and Minimum 1 year experience,Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMD%20MTIN/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/MTIN/MTIN_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/mtin/",
    programCode: "6508",
  },
  {
    courseName: "Master of Science Nursing (Pediatrics)",
    faculty: "Faculty of Medical Sciences",
    Institute: "Manikaka Topawala Institute of Nursing (MTIN)",
    CourseDuration: "02 Years",
    Intake: "04",
    Fees: "Rs 1,70,000/-",
    Eligibility:
      "A degree in B.Sc. (Nursing) andminimum 1 year of work experience post B.Sc. Nursing and Minimum 1 year experience,Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMD%20MTIN/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/MTIN/MTIN_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/mtin/",
    programCode: "",
  },
  {
    courseName: "Master of Science Nursing (Medical Surgical)",
    faculty: "Faculty of Medical Sciences",
    Institute: "Manikaka Topawala Institute of Nursing (MTIN)",
    CourseDuration: "02 Years",
    Intake: "04",
    Fees: "₹ 1,70,000/-",
    Eligibility:
      "A degree in B.Sc. (Nursing) andminimum 1 year of work experience post B.Sc. Nursing and Minimum 1 year experience,Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMD%20MTIN/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "https://charusat.ac.in/Downloads/Brochure/MTIN/MTIN_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/mtin/",
    programCode: "6507",
  },
  {
    courseName: "Bachelor of Science (Medical Imaging Technology)",
    faculty: "Faculty of Medical Sciences",
    Institute:
      "Bapubhai Desaibhai Patel Institute of Paramedical Science(BDPIPS)",
    CourseDuration: "04 Years",
    Intake: "30",
    Fees: "₹ 60,000/-",
    Eligibility:
      "CBSE/ISCE/State board Minimum 50% in PCB subjects, Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMD%20bdips/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/bdips/",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/bdips/",
    programCode: "6403",
  },
  {
    courseName: "Bachelor of Science (Medical Technology)",
    faculty: "Faculty of Medical Sciences",
    Institute:
      "Bapubhai Desaibhai Patel Institute of Paramedical Science(BDPIPS)",
    CourseDuration: "04 Years",
    Intake: "30",
    Fees: "₹ 50,000/-",
    Eligibility:
      "CBSE/ISCE/State board Minimum 50% in PCB subjects, Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMD%20bdips/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/bdips/",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/bdips/",
    programCode: "6406",
  },
  {
    courseName:
      "Bachelor of Science (Operation Theater and Anaesthesia Technology)",
    faculty: "Faculty of Medical Sciences",
    Institute:
      "Bapubhai Desaibhai Patel Institute of Paramedical Science(BDPIPS)",
    CourseDuration: "04 Years",
    Intake: "30",
    Fees: "₹ 60,000/-",
    Eligibility:
      "CBSE/ISCE/State board Minimum 50% in PCB subjects, Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMD%20bdips/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/bdips/",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/bdips/",
    programCode: "6404",
  },

  {
    courseName: "Master of Science (Medical Laboratory Technology)",
    faculty: "Faculty of Medical Sciences",
    Institute:
      "Bapubhai Desaibhai Patel Institute of Paramedical Science(BDPIPS)",
    CourseDuration: "02 Years",
    Intake: "30",
    Fees: "₹ 80,000/-",
    Eligibility:
      "B.Sc (Micro/Bio Technology/Chemistry and DMLT) minimum 50% required, Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMD%20bdips/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/bdips/",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/bdips/",
    programCode: "6513",
  },
  {
    courseName: "Master of Science (Medical Imaging Technology)",
    faculty: "Faculty of Medical Sciences",
    Institute:
      "Bapubhai Desaibhai Patel Institute of Paramedical Science(BDPIPS)",
    CourseDuration: "02 Years",
    Intake: "10",
    Fees: "₹ 1,00,000/-",
    Eligibility:
      "B.Sc (Medical Imaging Technology) minimum 50% required, Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMD%20bdips/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/bdips/",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/bdips/",
    programCode: "6514",
  },
  {
    courseName:
      "Master of Science (Operation Theater and Anaesthesia Technology)",
    faculty: "Faculty of Medical Sciences",
    Institute:
      "Bapubhai Desaibhai Patel Institute of Paramedical Science(BDPIPS)",
    CourseDuration: "02 Years",
    Intake: "10",
    Fees: "₹ 85,000/-",
    Eligibility:
      "B.Sc. Operation Theatre & Anaesthesia Technology, B.Sc. Perfusion Technology, B.Sc. Emergency care technology, B.Sc. Critical Care Technology, B.Sc. Respiratory Therapy",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMD%20bdips/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/bdips/",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/bdips/",
    programCode: "MSOTAT",
  },
  {
    courseName: "Bachelor of Optometry",
    faculty: "Faculty of Medical Sciences",
    Institute:
      "Bapubhai Desaibhai Patel Institute of Paramedical Science(BDPIPS)",
    CourseDuration: "04 Years",
    Intake: "20",
    Fees: "₹ 1,06,000/-",
    Eligibility:
      "CBSE/ISCE/State board Minimum 50% in PCB subjects, Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMD%20bdips/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/bdips/",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/bdips/",
    programCode: "6405",
  },
  {
    courseName: "Post Graduate Diploma in Clinical Hypnosis (PGDCH)",
    faculty: "Faculty of Medical Sciences",
    Institute:
      "Bapubhai Desaibhai Patel Institute of Paramedical Sciences(BDPIPS)",
    CourseDuration: "01 Years",
    Intake: "30",
    Fees: "₹ 60,000/-",
    Eligibility:
      "B.Sc (Micro/Bio Technology/Chemistry DMLT)minimum 50% required,Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FMD%20bdips/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/bdips/",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/bdips/",
    programCode: "6303",
  },
  {
    courseName:
      "Post Graduate Diploma in Medical Laboratory Technology (PGDMLT)",
    faculty: "Faculty of Medical Sciences",
    Institute:
      "Bapubhai Desaibhai Patel Institute of Paramedical Sciences(BDPIPS)",
    CourseDuration: "01 Years",
    Intake: "30",
    Fees: "₹ 34,500/-",
    Eligibility:
      "B.Sc (Micro/Bio Technology/Chemistry DMLT)minimum 50% required,Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "http://charusat.ac.in/Downloads/Syllabus/FMD%20bdips/",
    brochureBtn: "Download Brochure",
    brochureLink: "http://charusat.ac.in/Downloads/Brochure/bdips/",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/bdips/",
    programCode: "PGDMLT",
  },
  {
    courseName:
      "Post Basic Bachelor of Science in Nursing",
    faculty: "Faculty of Medical Sciences",
    Institute:
      "Manikaka Topawala Institute of Nursing (MTIN)",
    CourseDuration: "02 Years",
    Intake: "20",
    Fees: "₹ 86,000/-",
    Eligibility:
      "Obtained a certificate in General Nursing and Midwifery(GNM) and registered as R.N.R.M. with state nurses registration council",
    syllabusBtn: "View Syllabus",
    syllabusLink: "",
    brochureBtn: "Download Brochure",
    brochureLink: "",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/mtin/",
    programCode: "PBBSC",
  },
  {
    courseName: "Bachelor of Technology (Civil Engineering)",
    faculty: "Faculty of Technology and Engineering",
    Institute: "Chandubhai S. Patel Insitute of Technology(CSPIT)",
    CourseDuration: "04 Years",
    Intake: "30",
    Fees: "₹ 1,00,000/-",
    ManagementQuotaFees: "₹ 1,00,000/-",
    NRIQuotaFees: "N.A.",
    Eligibility:
      "CBSE/ISCE/GSEB, Minimum 45% required in PCM subjects (as per ACPC), Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/CL/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "http://charusat.ac.in/Downloads/Brochure/CSPIT/IT/B.TECH_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://cspitcivil.com/",
    programCode: "1406",
  },
  {
    courseName: "Bachelor of Technology (Computer Engineering)",
    faculty: "Faculty of Technology and Engineering",
    Institute:
      "Chandubhai S. Patel Insitute of Technology(CSPIT) | Devang Patel Institute of Advance Technology and Research (DEPSTAR)",
    CourseDuration: "04 Years",
    Intake: "CSPIT-120 | DEPSTAR-120",
    Fees: "₹ 1,48,000/-",
    ManagementQuotaFees: "₹ 1,48,000/-",
    NRIQuotaFees: "₹ 3,82,500/-($4500)",
    Eligibility:
      "CBSE/ISCE/GSEB, Minimum 45% required in PCM subjects (as per ACPC), Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/CE/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "http://charusat.ac.in/Downloads/Brochure/CSPIT/IT/B.TECH_Brochure.pdf",
    websiteBtn: "Visit CSPIT",
    websiteLink: "https://charusat.ac.in/cspit/ce/",
    txtBtn4: "Visit DEPSTAR",
    linkbtn4: "https://charusat.ac.in/depstar/ce/",
    showLinkBtn4: true,
    programCode: "1401",
  },
  {
    courseName: "Bachelor of Technology (Computer Science and Engineering)",
    faculty: "Faculty of Technology and Engineering",
    Institute:
      "Chandubhai S. Patel Insitute of Technology(CSPIT) | Devang Patel Institute of Advance Technology and Research (DEPSTAR)",
    CourseDuration: "04 Years",
    Intake: "CSPIT-90 | DEPSTAR-120",
    Fees: "₹ 1,48,000/-",
    ManagementQuotaFees: "₹ 1,48,000/-",
    NRIQuotaFees: "₹ 4,67,500/-($5500)",
    Eligibility:
      "CBSE/ISCE/GSEB, Minimum 45% required in PCM subjects (as per ACPC), Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/CSE/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "http://charusat.ac.in/Downloads/Brochure/CSPIT/IT/B.TECH_Brochure.pdf",
    websiteBtn: "Visit CSPIT",
    websiteLink: "https://charusat.ac.in/cspit/cse/",
    txtBtn4: "Visit DEPSTAR",
    linkbtn4: "https://charusat.ac.in/depstar/cse/",
    showLinkBtn4: true,
    programCode: "1407",
  },
  {
    courseName:
      "Bachelor of Technology (Artificial Intelligence and Machine Learning)",
    faculty: "Faculty of Technology and Engineering",
    Institute: "Chandubhai S. Patel Insitute of Technology(CSPIT)",
    CourseDuration: "04 Years",
    Intake: "CSPIT-60",
    Fees: "₹ 1,48,000/-",
    ManagementQuotaFees: "₹ 1,48,000/-",
    NRIQuotaFees: "₹ 2,97,500/-($3500)",
    Eligibility:
      "CBSE/ISCE/GSEB, Minimum 45% required in PCM subjects (as per ACPC), Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/CSE/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "http://charusat.ac.in/Downloads/Brochure/CSPIT/IT/B.TECH_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/cspit/",
    txtBtn4: "",
    linkbtn4: "",
    showLinkBtn4: false,
    programCode: "14075",
  },
  {
    courseName: "Bachelor of Technology (Electrical Engineering)",
    faculty: "Faculty of Technology and Engineering",
    Institute: "Chandubhai S. Patel Insitute of Technology(CSPIT)",
    CourseDuration: "04 Years",
    Intake: "30",
    Fees: "₹ 1,00,000/-",
    ManagementQuotaFees: "₹ 1,00,000/-",
    NRIQuotaFees: "N.A.",
    Eligibility:
      "CBSE/ISCE/GSEB, Minimum 45% required in PCM subjects (as per ACPC), Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/EE/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "http://charusat.ac.in/Downloads/Brochure/CSPIT/IT/B.TECH_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/cspit/ee/",
    programCode: "1403",
  },
  {
    courseName:
      "Bachelor of Technology (Electronics and Communication Engineering)",
    faculty: "Faculty of Technology and Engineering",
    Institute: "Chandubhai S. Patel Insitute of Technology(CSPIT)",
    CourseDuration: "04 Years",
    Intake: "120",
    Fees: "₹ 1,25,000/-",
    ManagementQuotaFees: "₹ 1,25,000/-",
    NRIQuotaFees: "₹ 2,97,500/-($3500)",
    Eligibility:
      "CBSE/ISCE/GSEB, Minimum 45% required in PCM subjects (as per ACPC), Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/EC/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "http://charusat.ac.in/Downloads/Brochure/CSPIT/IT/B.TECH_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/cspit/ec/",
    programCode: "1402",
  },
  {
    courseName: "Bachelor of Technology (Information Technology)",
    faculty: "Faculty of Technology and Engineering",
    Institute:
      "Chandubhai S. Patel Insitute of Technology(CSPIT) | Devang Patel Institute of Advance Technology and Research (DEPSTAR)",
    CourseDuration: "04 Years",
    Intake: "CSPIT-90 | DEPSTAR-60",
    Fees: "₹ 1,48,000/-",
    ManagementQuotaFees: "₹ 1,48,000/-",
    NRIQuotaFees: "₹ 2,97,500/-($3500)",
    Eligibility:
      "CBSE/ISCE/GSEB, Minimum 45% required in PCM subjects (as per ACPC), Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/IT/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "http://charusat.ac.in/Downloads/Brochure/CSPIT/IT/B.TECH_Brochure.pdf",
    websiteBtn: "Visit CSPIT",
    websiteLink: "https://charusat.ac.in/cspit/it/",
    txtBtn4: "Visit DEPSTAR",
    linkbtn4: "https://charusat.ac.in/depstar/it/",
    showLinkBtn4: true,
    programCode: "1404",
  },
  {
    courseName: "Bachelor of Technology (Mechanical Engineering)",
    faculty: "Faculty of Technology and Engineering",
    Institute: "Chandubhai S. Patel Insitute of Technology(CSPIT)",
    CourseDuration: "04 Years",
    Intake: "60",
    Fees: "₹ 1,00,000/-",
    ManagementQuotaFees: "₹ 1,00,000/-",
    NRIQuotaFees: "N.A.",
    Eligibility:
      "CBSE/ISCE/GSEB, Minimum 45% required in PCM subjects (as per ACPC), Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/ME",
    brochureBtn: "Download Brochure",
    brochureLink:
      "http://charusat.ac.in/Downloads/Brochure/CSPIT/IT/B.TECH_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/cspit/me/",
    programCode: "1405",
  },
  // {
  //   courseName:"Master of Technology (Embedded System and VLSI Design)",
  //   faculty:"Faculty of Technology and Engineering",
  //   Institute:"Chandubhai S. Patel Insitute of Technology(CSPIT)",
  //   CourseDuration: "02 Years",
  //   Intake:"18",
  //   Fees:"Rs 1,59,000/-",
  //   Eligibility:"BE/B.Tech in relevant discipline with minimum 50 % and should have applied/appeared in GATE/Non-GATE Entrance Exam Any student within/outside Gujarat",
  //   syllabusBtn:"View Syllabus",
  //   syllabusLink:"https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/EC/",
  //   brochureBtn:"Download Brochure",
  //   brochureLink:"",
  //   websiteBtn:"Visit Website",
  //   websiteLink:"https://charusat.ac.in/cspit/ec/",
  //   programCode:"",
  // },
  {
    courseName: "Master of Technology (Structural Engineering)",
    faculty: "Faculty of Technology and Engineering",
    Institute: "Chandubhai S. Patel Insitute of Technology(CSPIT)",
    CourseDuration: "02 Years",
    Intake: "18",
    Fees: "₹ 1,00,000/-",
    Eligibility:
      "BE/B.Tech in relevant discipline with minimum 50 % and should have applied/appeared in GATE/Non-GATE Entrance Exam Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/CL/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "http://charusat.ac.in/Downloads/Brochure/CSPIT/IT/B.TECH_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://cspitcivil.com",
    programCode: "6001",
  },
  {
    courseName: "Master of Technology (Computer Engineering)",
    faculty: "Faculty of Technology and Engineering",
    Institute: "Chandubhai S. Patel Insitute of Technology(CSPIT)",
    CourseDuration: "02 Years",
    Intake: "18",
    Fees: "₹ 1,00,000/-",
    Eligibility:
      "BE/B.Tech in relevant discipline with minimum 50 % and should have applied/appeared in GATE/Non-GATE Entrance Exam Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/CE/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "http://charusat.ac.in/Downloads/Brochure/CSPIT/IT/B.TECH_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/cspit/ce/",
    programCode: "1503",
  },
  // {
  //   courseName: "Master of Technology (Electrical Power System)",
  //   faculty: "Faculty of Technology and Engineering",
  //   Institute: "Chandubhai S. Patel Insitute of Technology(CSPIT)",
  //   CourseDuration: "02 Years",
  //   Intake: "18",
  //   Fees: "₹ 1,59,000/-",
  //   Eligibility:
  //     "BE/B.Tech in relevant discipline with minimum 50 % and should have applied/appeared in GATE/Non-GATE Entrance Exam Any student within/outside Gujarat",
  //   syllabusBtn: "View Syllabus",
  //   syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/EE/",
  //   brochureBtn: "Download Brochure",
  //   brochureLink:
  //     "http://charusat.ac.in/Downloads/Brochure/CSPIT/IT/B.TECH_Brochure.pdf",
  //   websiteBtn: "Visit Website",
  //   websiteLink: "https://charusat.ac.in/cspit/ee/",
  //   programCode: "1504",
  // },
  {
    courseName: "Master of Technology (Advanced Manufacturing Technology)",
    faculty: "Faculty of Technology and Engineering",
    Institute: "Chandubhai S. Patel Insitute of Technology(CSPIT)",
    CourseDuration: "02 Years",
    Intake: "18",
    Fees: "₹ 1,00,000/-",
    Eligibility:
      "BE/B.Tech in relevant discipline with minimum 50 % and should have applied/appeared in GATE/Non-GATE Entrance Exam Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/ME/",
    brochureBtn: "Download Brochure",
    brochureLink:
      "http://charusat.ac.in/Downloads/Brochure/CSPIT/IT/B.TECH_Brochure.pdf",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/cspit/me/",
    programCode: "1507",
  },
  {
    courseName: "Master of Technology (Thermal Engineering)",
    faculty: "Faculty of Technology and Engineering",
    Institute: "Chandubhai S. Patel Insitute of Technology(CSPIT)",
    CourseDuration: "02 Years",
    Intake: "09",
    Fees: "₹ 1,00,000/-",
    Eligibility:
      "BE/B.Tech in relevant discipline with minimum 50 % and should have applied/appeared in GATE/Non-GATE Entrance Exam Any student within/outside Gujarat",
    syllabusBtn: "View Syllabus",
    syllabusLink: "https://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/ME/",
    brochureBtn: "Download Brochure",
    brochureLink: "#",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/cspit/me/",
    programCode: "",
  },
  {
    courseName:
      "Post Graduate Diploma in Environmental Auditing, Monitoring and Technology(PGDEAMT)",
    faculty: "Faculty of Technology and Engineering",
    Institute: "Chandubhai S. Patel Insitute of Technology(CSPIT)",
    CourseDuration: "01 Year",
    Intake: "25",
    Fees: "₹ 25,000/-",
    Eligibility:
      "Bachelor's in Environmental or Chemical or Civil Engineering graduation or Post graduation in Environmental Science or Microbiology or Chemistry",
    syllabusBtn: "View Syllabus",
    syllabusLink: "#",
    brochureBtn: "Download Brochure",
    brochureLink: "#",
    websiteBtn: "Visit Website",
    websiteLink: "https://charusat.ac.in/cspit",
    programCode: "PGDEAMT",
  },

  // {
  //   courseName: "Post Graduate Diploma in Cyber Security (PGDCS)",
  //   faculty: "Faculty of Technology and Engineering",
  //   Institute: "Chandubhai S. Patel Institute of Technology (CSPIT)",
  //   CourseDuration: "01 Years",
  //   Intake: "15",
  //   Fees: "₹ 1,50,000/-",
  //   Eligibility: "Graduate in any discipline",
  //   syllabusBtn: "View Syllabus",
  //   syllabusLink: "http://charusat.ac.in/Downloads/Syllabus/FTE%20CSPIT/",
  //   brochureBtn: "Download Brochure",
  //   brochureLink:
  //     "http://charusat.ac.in/Downloads/Brochure/CSPIT/IT/B.TECH_Brochure.pdf",
  //   websiteBtn: "Visit Website",
  //   websiteLink: "https://pgdcs.charusat.ac.in/",
  //   programCode: "1301",
  // },
];

const Transport = (props) => {
  const [search, setSearch] = useState("");

  return (
    <Fragment>
      {/* <PageHeader title={'4 Results found for: Business'} curPage={'Search Result'} /> */}

      <div className="blog-section p-4 section-bg">
        <div className="container p-4">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
            <h1
                              className="text-center mb-4 h1 text-white fw-bold
                              "
                              style={{
                                backgroundColor: "#ff4d00",
                                padding: "10px", // Adding padding to make the gradient visible
                              }}
                            >
                              {" "}
                              Programmes offered
                            </h1>
              <span
                className="search_handle"
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <input
                  placeholder="Search"
                  onChange={(e) => setSearch(e.target.value.toLowerCase())}
                  type="text"
                  id="Search"
                  className="my-2 rounded-3 w-80 search1"
                  autoFocus
                />

                {/* <button className="bg-black my-2 text-white rounded-3" style={{
                  textAlign: "center",
                }}>Search</button> */}
              </span>
              <br />
              <br />
              {CourseList.filter((val) => {
                return search.toLowerCase() === ""
                  ? val
                  : val.courseName.toLowerCase().includes(search);
              }).map((val, i) => (
                <article key={i}>
                  <div className="section-wrapper" id={val.programCode}>
                    <div className="row row-cols-1 justify-content-center g-4">
                      <div className="col">
                        <div className="post-item style-2">
                          <div className="post-inner">
                            <div className="post-content">
                              <h4>{val.courseName}</h4>
                              <div className="meta-post">
                                {/* <h2>{val.courseName}</h2> */}
                                {/* <p>
                                  <b>Faculty:</b> {val.faculty}
                                </p>
                                <p>
                                  <b>Institute:</b> {val.Institute}
                                </p>
                                <p>
                                  <b>Course Duration:</b> {val.CourseDuration}
                                </p>
                                <p>
                                  <b>Intake:</b> {val.Intake}
                                </p>
                                <p>
                                  <b>Fees:</b> {val.Fees}
                                </p>
                                <p>
                                  <b>Eligibility:</b> {val.Eligibility}
                                </p> */}
                                <table
                                  style={{
                                    width: "100%",
                                    borderCollapse: "collapse",
                                    textAlign: "left",
                                  }}
                                >
                                  <tbody>
                                    <tr>
                                      <td style={{
                                    width: "15%",
                                    
                                  }}
                                >
                                        <b>Faculty: </b>
                                      </td>
                                      <td>{val.faculty}</td>
                                    </tr>
                                    {val.Institute && (
    <tr>
      <td>
        <b>Institute: </b>
      </td>
      <td>{val.Institute}</td>
    </tr>
  )}
                                    <tr>
                                      <td>
                                        <b>Duration: </b>
                                      </td>
                                      <td>{val.CourseDuration}</td>
                                    </tr>
                                    {val.Intake && (
                                    <tr>
                                      <td>
                                        <b>Intake: </b>
                                      </td>
                                      <td>{val.Intake}</td>
                                    </tr>
                                    )}
                                    <tr>
                    <td>
                      <b>Fees: </b>
                    </td>
                    <td>
                      {val.ManagementQuotaFees && val.NRIQuotaFees ? (
                        <table
                          style={{
                            width: "100%",
                            borderCollapse: "collapse",
                            textAlign: "left",
                            marginTop: "8px",
                          }}
                        >
                          <thead>
                            <tr>
                              <th style={{ border: "1px solid #ddd", padding: "8px" }}>State Quota</th>
                              <th style={{ border: "1px solid #ddd", padding: "8px" }}>Management Quota</th>
                              <th style={{ border: "1px solid #ddd", padding: "8px" }}>NRI Quota</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                                {val.Fees}
                              </td>
                              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                                {val.ManagementQuotaFees}
                              </td>
                              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                                {val.NRIQuotaFees}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      ) : (
                        <span>{val.Fees}</span>
                      )}
                    </td>
                  </tr>    
                                    {val.Eligibility && (
                                    <tr>
                                      <td>
                                        <b>Eligibility :&nbsp; </b>
                                      </td>
                                      <td>{val.Eligibility}</td>
                                    </tr>
                                    )}
                                  </tbody>
                                </table>
                                <br />
                                {/* {val.syllabusLink !== "#" ? (
                                  <a
                                    className="lab-btn"
                                    href={val.syllabusLink}
                                  >
                                    <span>{val.syllabusBtn}</span>
                                  </a>
                                ) : (
                                  <span></span>
                                )}{" "}
                                {val.brochureLink !== "#" ? (
                                  <a
                                    className="lab-btn my-2"
                                    href={val.brochureLink}
                                  >
                                    <span>{val.brochureBtn}</span>
                                  </a>
                                ) : (
                                  <span></span>
                                )}{" "} */}
                                {val.websiteLink !== "#" ? (
                                  <a
                                    className="lab-btn my-2"
                                    href={val.websiteLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <span>{val.websiteBtn}</span>
                                  </a>
                                ) : (
                                  <span></span>
                                )}{" "}
                                {val.showLinkBtn4 ? (
                                  <a
                                    className="lab-btn my-2"
                                    href={val.linkbtn4}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <span>{val.txtBtn4}</span>
                                  </a>
                                ) : (
                                  <span></span>
                                )}
                              </div>

                              {/* <Link to="/blog-single" className="lab-btn"><span>Operator's Detail <i className="icofont-external-link"></i></span></Link> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                </article>
              ))}
            </div>
            </div>
        </div>
      </div>

      {/* <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cat-product">Sr No.</th>
                    <th className="cat-product">Route</th>
                    <th className="cat-price">Transporters' Name</th>
                    <th className="cat-toprice">Contact Person</th>
                    <th className="cat-edit">Contact No.</th>
                  </tr>
                </thead>
                <tbody>
                  {transporterList.map((val, i) => (
                    <tr key={i}>
                      <td className="product-item cat-product">
                        {val.srNo}
                      </td>
                      <td className="cat-product">{val.route}</td>
                      <td className="cat-price">{val.transporterName}</td>
                      <td className="cat-toprice">{val.contactPerson}</td>
                      <td className="cat-edit">{val.contactNo}</td>
                      
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> */}
    </Fragment>
  );
};

export default Transport;
