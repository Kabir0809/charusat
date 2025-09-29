import { Fragment } from "react";
import Contact from "@/components/section/contact";
// import { color } from "@mui/system";
import "@/css/EOC.css";

const Circulars = () => {
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
                            <h3>Circulars</h3>
                            <hr />
                            <br />

                            <div style={{ overflowX: "auto" }}>
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      Public Notice regarding Precautions to be
                                      taken by the students before enrolling in
                                      Programmes offered under Open & Distance
                                      Learning (ODL) and/or Online Learning mode
                                    </td>
                                    <td>March 19, 2024</td>
                                    <td>
                                      <a
                                        className="pdfLink"
                                        target="_blank"
                                        href="https://charusat.ac.in/documents/pdfs/circulars/2024/UGC_20240319165222_1.pdf"
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
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Circulars;
