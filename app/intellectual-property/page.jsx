"use client"
import { Fragment } from "react";
import Link from "next/link";
import Contact from "@/components/section/contact";


const IPR = () => {
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
                            <h3><center>CHARUSAT Intellectual Property</center></h3>
                            <hr />
                            
                            <div className="meta-post">
                            <div className="row justify-content-center">
                    <div className="col-md-6 mb-4">
                      <div className="card p-4 card-main">
                        <Link className="lab-btn btn111" target="_blank" href="/assets/files/ipr/CHARUSAT-Patents.pdf">
                          <h6 className="text-center text-white h3 fw-bold">
                            Patents
                          </h6>
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="card p-4 card-main">
                        <Link className="lab-btn btn111" target="_blank" href="/assets/files/ipr/CHARUSAT-Industrial-design.pdf">
                          <h6 className="text-center text-white h3 fw-bold">
                            Industrial Designs
                          </h6>
                        </Link>
                      </div>
                    </div>
                  </div>  

                              
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <Contact
              name="Dr Swayamprakash Patel"
              email="swayamprakash.patel@charusat.ac.in"
              phone="+91-8780034097"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default IPR;
