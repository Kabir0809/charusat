"use client";
import { useState } from "react";
import Link from "next/link";
import "@/css/people.css";
import email_Logo from "@/public/assets/images/icon/Email_Icon.png";
import Image from "next/image";

import surendra from "@/public/assets/images/People/SurendraSir.png";
import RVU_Sir from "@/public/assets/images/People/RVU_sir.png";
import ShriHTPatel from "@/public/assets/images/People/HTPatel.png";
// import ShriARPatel from "@/public/assets/images/People/AshokSir.png";
import ShriARPatel from "@/public/assets/images/People/AshokSir.png";
import ShriVVPatel from "@/public/assets/images/People/vipulbhai3.png";
import ShriNMPatel from "@/public/assets/images/People/user.png";
import DrBhaskarPandya from "@/public/assets/images/People/Bhaskar_Sir.webp";
import DrTrushitUpadhyaya from "@/public/assets/images/People/Trushit_Sir.webp";
import DrBankimPatel from "@/public/assets/images/People/Bankim_Sir.webp";
import DrMayurSutaria from "@/public/assets/images/People/MayurSir.webp";

import AtulPatel from "@/public/assets/images/People/Atul_sir_registar.webp";

const title = "";

const CourseData = [
  {
    imgUrl: "assets/images/People/SurendraSir.png",
    imgAlt: "Shri Surendra M. Patel",
    cate: ["Governing Body"],
    title: "Shri Surendra Patel",

    authorName: [
      <strong key="rg-br-001">Chairperson</strong>,
      <br key="chr" />,
      <strong key="rg-br-001">President: </strong>,
      "Shri Charotar Moti Sattavis Patidar Kelavani Mandal",
      <br key="rg-br-001" />,
      <strong key="rg-br-001">Former Chairman: </strong>,
      "Ahmedabad Urban Development Authority",
      <br key="rg-br-001" />,
      <strong key="rg-br-001">Former Member of Parliament: </strong>,
      "Rajya Sabha",
      <br key="rg-br-001" />,
    ],
    id: 1,
  },
  {
    imgUrl:ShriNMPatel,
    imgAlt: "Sir",
    cate: ["Governing Body"],
    title: "",
    author: "assets/images/course/author/01.jpg",
    authorName: [
      <strong key="rg-br-001">Member</strong>,
      <br key="rg-br-001" />,
      <strong key="rg-br-001">Provost: </strong>,

      "Charotar University of Science and Technology (CHARUSAT)",
    ],
    id: 2,
  },
  {
    imgUrl: ShriHTPatel,
    imgAlt: "Shri Harmanbhai T. Patel",
    cate: ["BOM"],
    title: "Shri Harmanbhai T. Patel",

    authorName: [
      <strong key="rg-br-001">Member</strong>,
      <br key="rg-br-001" />,
      "Former President, API Business, Zydus Cadila Healthcare Ltd.",
    ],
    id: 117,
  },
  {
    imgUrl: ShriARPatel,
    imgAlt: "Shri Ashokbhai R. Patel",
    cate: ["BOM"],
    title: "Shri Ashokbhai R. Patel",

    authorName: [
      <strong key="member">Member</strong>,
      <br key="br1" />,
      "Advisor, CHARUSAT",
    ],
    id: 116,
  },
  {
    imgUrl: ShriVVPatel,
    imgAlt: "Shri Vipulbhai V Patel",
    cate: ["BOM"],
    title: "Shri Vipulbhai V Patel",

    authorName: [
      <strong key="member">Member</strong>,
      <br key="br1" />,
      "Jt. Secretary, Kelavani Mandal",
    ],
    id: 116,
  },
  {
    imgUrl: ShriNMPatel,
    imgAlt: "Shri Narendra M. Patel",
    cate: ["BOM"],
    title: "Shri Narendra M. Patel",

    authorName: [
      <strong key="member">Member</strong>,
      <br key="br1" />,
      "Chairman, Purchase Committee of Furniture, CHARUSAT",
    ],
    id: 115,
  },
  {
    imgUrl: DrBhaskarPandya,
    imgAlt: "Dr. Bhaskar Pandya",
    cate: ["BOM"],
    title: "Dr. Bhaskar Pandya",

    authorName: [
      <strong key="member">Member</strong>,
      <br key="br1" />,
      "Dean, Faculty of Humanities, CHARUSAT",
    ],
    id: 4,
  },
  {
    imgUrl: DrTrushitUpadhyaya,
    imgAlt: "Dr. Trushit Upadhyaya",
    cate: ["BOM"],
    title: "Dr. Trushit Upadhyaya",

    authorName: [
      <strong key="member">Member</strong>,
      <br key="br1" />,
      "Principal, CSPIT, CHARUSAT",
    ],
    id: 4,
  },
  {
    imgUrl: DrBankimPatel,
    imgAlt: "Dr. Bankim Patel",
    cate: ["BOM"],
    title: "Dr. Bankim Patel",

    authorName: [
      <strong key="member">Member</strong>,
      <br key="br1" />,
      "Principal, DEPSTAR, CHARUSAT",
    ],
    id: 5,
  },
  {
    imgUrl: DrMayurSutaria,
    imgAlt: "Dr. Mayur ",
    cate: ["BOM"],
    title: "Dr. Mayur Sutaria",

    authorName: [
      <strong key="member">Member</strong>,
      <br key="br1" />,
      " IQAC Coordinator, CHARUSAT",
    ],
    id: 6,
  },

  {
    imgUrl: AtulPatel,
    imgAlt: "Dr. Atul Patel",
    cate: ["BOM"],
    title: "Dr. Atul Patel",

    authorName: [
      <strong key="rg-br-001">Member Secretary,</strong>,
      <br key="rg-br-002" />,
      <strong key="rg-br-003">Registrar,</strong>,
      "CHARUSAT",
      <br key="br2" />,
      <strong key="rg-br-004">Controller of Examination,</strong>,
      "CHARUSAT", 
      <br key="rg-br-001" />,
    ],
    id: 7,
  },
];

export default function People() {
  // const params = useParams()
  const [items, setItems] = useState(CourseData);
  const [active, setActive] = useState("");

  // console.log(params)

  const filterItem = async (categItem) => {
    // const updateItems = CourseData.filter((curElem) => {
    //   console.log(curElem.cate.includes(categItem));
    //     return curElem.cate.includes(categItem);

    // });
    console.log("items:" + categItem);

    setActive(categItem);
    const updateItems = [];
    CourseData.forEach(async (element) => {
      console.log(element.cate.includes(categItem));
      if (element.cate.includes(categItem)) {
        // console.log(updateItems.length);
        updateItems.push(element);
      }
    });
    console.log(updateItems.length);
    await setItems(updateItems);
  };
  return (
    <div className="course-section style-3 padding-b people_top">
      <title>CHARUSAT People</title>
      <meta httpEquiv="Content-Type" content=" text/html; charset=utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="CHARUSAT Governing Body" />
      <meta
        name="keywords"
        content="Charusat governing body, member, afilliation of governing body members"
      />
      <meta name="robots" content="index" />
      <meta name="robots" content="follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="google" content="translate" />
      <meta name="google" content="nopagereadaloud" />
      <meta property="og:type" content="homepage" />
      <meta property="og:title" content="CHARUSAT Governing Body" />
      <meta
        property="og:description"
        content="List of governing body members of CHARUSAT"
      />
      <meta name="author" content="CHARUSAT Web Team" />

      <div className="course-shape one">
        <img src="assets/images/shape-img/icon/01.png" alt="education" />
      </div>
      <div className="course-shape two">
        <img src="assets/images/shape-img/icon/02.png" alt="education" />
      </div>
      <div className="container">
        <div className="section-header">
          <h3 className="title" style={{ margin: "auto" }}>
            Board of Management
          </h3>
        </div>
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter">
            {items.map((elem) => {
              const {
                id,
                imgUrl,
                imgAlt,
                cate,
                title,
                author,
                authorName,
                price,
              } = elem;
              return (
                <div className="col" style={{ height: "" }} key={id}>
                  <div className="course-item style-4">
                    <div className="course-inner" style={{ height: "450px" }}>
                      <div
                        className="course-thumb"
                        style={{
                          height: "15rem",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      >
                        <Image
                          src={imgUrl}
                          alt={imgAlt}
                          height={100}
                          width={100}
                          style={{
                            height: "125%",
                            width: "125%",
                            objectFit: "cover",
                          }}
                        />
                        <div className="course-category">
                          {/* <div className="course-cate">
                            <a href="#">{cate}</a>
                            </div> */}
                          {/* <div className="course-reiew">
                                                        <Rating />
                                                    </div> */}
                        </div>
                      </div>
                      <div
                        className="course-content"
                        style={{ background: "", height: "100%" }}
                      >
                        {/* <Link to="/course-single"> */}
                        <h5 style={{ wordWrap: "break-word" }}>{title}</h5>
                        <h6
                          style={{
                            wordWrap: "break-word",
                            fontSize: "0.9rem",
                            fontWeight: "400",
                          }}
                        >
                          {authorName}
                        </h6>
                        {/* </Link> */}
                        {/* <div className="course-footer">
                                                    <div className="course-author">
                                                        <img src={author} alt={imgAlt} />
                                                        <Link to="/team-single" className="ca-name">{authorName}</Link>
                                                    </div>
                                                    <div className="course-price">{price}</div>
                                                </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <br />
        </div>
      </div>
      <br />
    </div>
  );
}
