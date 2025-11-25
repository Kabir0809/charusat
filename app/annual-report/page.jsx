// import { Link } from "react-router-dom";
"use client";
import Link from "next/link";
import Annual14 from "@/public/assets/files/Annual-Reports/CHARUSAT_14thAnnualReport.pdf";
import Annual13 from "@/public/assets/files/Annual-Reports/CHARUSAT_13thAnnualReport.pdf";
import Annual12 from "@/public/assets/files/Annual-Reports/CHARUSAT_12thAnnualReport.pdf";
import Annual11 from "@/public/assets/files/Annual-Reports/CHARUSAT_11thAnnualReport.pdf";
import Annual10 from "@/public/assets/files/Annual-Reports/CHARUSAT_10thAnnualReport.pdf";
import Annual9 from "@/public/assets/files/Annual-Reports/CHARUSAT_9thAnnualReport.pdf";
import Annual8 from "@/public/assets/files/Annual-Reports/CHARUSAT_8thAnnualReport.pdf";

const searchList = [
  {
    title: "Annual Report 2022-23",
    btnText: "Download",
    link: Annual14,
    metaList: [
      {
        iconName: "icofont-calendar",
        text: "2022-23",
      },
    ],
  },
  {
    title: "Annual Report 2021-22",
    btnText: "Download",
    link: Annual13,
    metaList: [
      {
        iconName: "icofont-calendar",
        text: "2021-22",
      },
    ],
  },
  {
    title: "Annual Report 2020-21",
    btnText: "Download",
    link: Annual12,
    metaList: [
      {
        iconName: "icofont-calendar",
        text: "2020-21",
      },
    ],
  },
  {
    title: "Annual Report 2019-20",
    btnText: "Download",
    link: Annual11,
    metaList: [
      {
        iconName: "icofont-calendar",
        text: "2019-20",
      },
    ],
  },
  {
    title: "Annual Report 2018-19",
    btnText: "Download",
    link: Annual10,
    metaList: [
      {
        iconName: "icofont-calendar",
        text: "2018-19",
      },
    ],
  },
  {
    title: "Annual Report 2017-18",
    btnText: "Download",
    link: Annual9,
    metaList: [
      {
        iconName: "icofont-calendar",
        text: "2017-18",
      },
    ],
  },
  {
    title: "Annual Report 2016-17",
    btnText: "Download",
    link: Annual8,
    metaList: [
      {
        iconName: "icofont-calendar",
        text: "2016-17",
      },
    ],
  },
];

const AnnualReport = () => {
  return (
    <>
      <div className="blog-section padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="post-item style-2">
                      <div className="post-inner">
                        <div className="post-content">
                          <h3 style={{ textAlign: "center" }}>
                            Annual Reports of the CHARUSAT
                          </h3>
                          <hr />
                          <br />
                          <div className="meta-post">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th>Document</th>
                                  <th>PDF Link</th>
                                </tr>
                              </thead>
                              {searchList.map((val, i) => (
                                <tbody key={i}>
                                  <tr>
                                    <td>{val.title}</td>
                                    <td>
                                      <Link
                                        className="pdfLink"
                                        target="_blank"
                                        href={val.link}
                                      >
                                        <i
                                          className="icofont-file-pdf"
                                          style={{
                                            fontSize: "22px",
                                            color: "red",
                                          }}
                                        ></i>
                                      </Link>
                                    </td>
                                  </tr>
                                </tbody>
                              ))}
                            </table>
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
    </>
  );
};

export default AnnualReport;
