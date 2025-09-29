import { Fragment } from "react";
import Contact from "@/components/section/contact";
// import { color } from "@mui/system";
import "@/css/EOC.css";

const EOC = () => {
  return (
    <Fragment>
      {/* <PageHeader title={'4 Results found for: Business'} curPage={'Search Result'} /> */}
      <div className="blog-section padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                            <h3>Equal Opportunity Cell (EOC)</h3>
                            <hr />
                            <br />

                            <div style={{ overflowX: "auto" }}>
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>Documents</th>
                                    <th>PDF Link</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Equal Opportunity Cell Policy</td>
                                    <td>
                                      <a
                                        className="pdfLink"
                                        target="_blank"
                                        href="https://charusat.ac.in/documents/pdfs/eoc/02.EQUAL-OPPORTUNITY-CELL.pdf"
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
                                  {/* <tr>
                                    <td>Equal Opportunity Cell Circular</td>
                                    <td>
                                      <a
                                        className="pdfLink"
                                        target="_blank"
                                        href="https://charusat.ac.in/documents/pdfs/eoc/EOC_Circular-2016.pdf"
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
                                  </tr> */}
                                  <tr>
                                    <td>Constitution of EOC at Charusat</td>
                                    <td>
                                      <a
                                        className="pdfLink"
                                        target="_blank"
                                        href="https://charusat.ac.in/documents/pdfs/eoc/Reconstitution-of-EOC-CHARUSAT.pdf"
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
                                  <tr>
                                    <td>
                                      Contact Details for any grievance related
                                      to Equal Opportunity matter
                                    </td>
                                    <td>
                                      <a
                                        className="pdfLink"
                                        target="_blank"
                                        href="https://charusat.ac.in/documents/pdfs/eoc/Contact%20Details%20of%20EOC%20members.pdf"
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
                                  <tr>
                                    <td>
                                      List of Activities under EOC -
                                      Conducted/Planned
                                    </td>
                                    <td>
                                      <a
                                        className="pdfLink"
                                        target="_blank"
                                        href="https://charusat.ac.in/documents/pdfs/eoc/List-of-Activities-under-EOC-Conducted-and-Planned.pdf"
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
                                </tbody>
                              </table>
                            </div>

                            {/* <Link to="/blog-single" className="lab-btn"><span>Operator's Detail <i className="icofont-external-link"></i></span></Link> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <Contact
              name=" Dr. Vijay Panchal"
              email=" vijaypanchal.cv@charusat.ac.in"
              phone=" 02697-265081"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EOC;
