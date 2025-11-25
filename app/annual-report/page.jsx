// import { Link } from "react-router-dom";
"use client";

const searchList = [
  {
    title: "Annual Report 2022-23",
    btnText: "Download",
    link: "/files/Annual-Reports/CHARUSAT_14thAnnualReport.pdf",
    metaList: [{ iconName: "icofont-calendar", text: "2022-23" }],
  },
  {
    title: "Annual Report 2021-22",
    btnText: "Download",
    link: "/files/Annual-Reports/CHARUSAT_13thAnnualReport.pdf",
    metaList: [{ iconName: "icofont-calendar", text: "2021-22" }],
  },
  {
    title: "Annual Report 2020-21",
    btnText: "Download",
    link: "/files/Annual-Reports/CHARUSAT_12thAnnualReport.pdf",
    metaList: [{ iconName: "icofont-calendar", text: "2020-21" }],
  },
  {
    title: "Annual Report 2019-20",
    btnText: "Download",
    link: "/files/Annual-Reports/CHARUSAT_11thAnnualReport.pdf",
    metaList: [{ iconName: "icofont-calendar", text: "2019-20" }],
  },
  {
    title: "Annual Report 2018-19",
    btnText: "Download",
    link: "/files/Annual-Reports/CHARUSAT_10thAnnualReport.pdf",
    metaList: [{ iconName: "icofont-calendar", text: "2018-19" }],
  },
  {
    title: "Annual Report 2017-18",
    btnText: "Download",
    link: "/files/Annual-Reports/CHARUSAT_9thAnnualReport.pdf",
    metaList: [{ iconName: "icofont-calendar", text: "2017-18" }],
  },
  {
    title: "Annual Report 2016-17",
    btnText: "Download",
    link: "/files/Annual-Reports/CHARUSAT_8thAnnualReport.pdf",
    metaList: [{ iconName: "icofont-calendar", text: "2016-17" }],
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
                              <tbody>
                                {searchList.map((val, i) => (
                                  <tr key={i}>
                                    <td>{val.title}</td>
                                    <td>
                                      <a
                                        className="pdfLink"
                                        href={val.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <i
                                          className="icofont-file-pdf"
                                          style={{
                                            fontSize: "22px",
                                            color: "red",
                                          }}
                                        ></i>
                                      </a>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
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
