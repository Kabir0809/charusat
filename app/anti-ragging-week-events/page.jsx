import Link from "next/link";
const Page = () => {
  return (
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
                          <h5>Anti Ragging Week Celebration</h5>
                          <hr />
                          <br />
                          <br />
                          <Link
                            href="https://drive.google.com/file/d/1Y7o3anN66iOxjEvME6pHp37hXLU-9sC3/view?usp=sharing"
                            className="btn btn-danger text-white"
                            target="_blank"
                          >
                            Academic Year 2023-24 - Anti Ragging Week
                            Celebration Video
                          </Link>
                          <br />
                          <br />
                          <Link
                            href="https://drive.google.com/file/d/1KFcOygIjZ3IysCXIw0YAnUVlDOA4J3Vn/view?usp=sharing"
                            className="btn btn-danger text-white"
                            target="_blank"
                          >
                            Academic Year 2024-25 - Anti Ragging Week
                            Celebration Video
                          </Link>

                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div className="col-lg-4 col-12">
            <aside>
              <div className="section-wrapper">
                <div className="row row-cols-1 justify-content-center g-4">
                  <div className="col">
                    <div className="post-item style-2">
                      <div className="post-inner">
                        <div className="post-content">
                          {/* <h3>Contact Person</h3> */}
                          <br />
                          <div className="meta-post">
                            <ul className="lab-ul">
                              <li
                                style={{
                                  marginBottom: "10px",
                                }}
                              >
                                <i className="icofont-ui-user"></i>
                                Dr. Vijaykumar Chaudhary
                              </li>
                              <li
                                style={{
                                  marginBottom: "10px",
                                }}
                              >
                                <i className="icofont-email"></i>
                                vijaychaudhary.me@charusat.ac.in
                              </li>
                              <li
                                style={{
                                  marginBottom: "10px",
                                }}
                              >
                                <i className="icofont-phone"></i>
                                +91 2697265221
                              </li>
                              <li
                                style={{
                                  marginBottom: "10px",
                                }}
                              >
                                <i className="icofont-phone"></i>
                                +91 9925830781
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
