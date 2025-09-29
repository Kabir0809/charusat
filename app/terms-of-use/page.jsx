"use client"
import { Fragment } from "react";
// import EOCcontact from "@/components/section/EOCcontact";
// import { color } from "@mui/system";
// import "@/css/EOC.css";

const terms_of_use = () => {
  return (
    <Fragment>
      {/* <PageHeader title={'4 Results found for: Business'} curPage={'Search Result'} /> */}
      <div className="blog-section padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                            <h3>Terms of Use</h3>
                            <hr />
                            <br />
                            <div className="meta-post">
                                <p>
                                All the contents of this site are only for general information or use. By browsing through this website, you acknowledge and exclude CHARUSAT from any warranty, express or implied, as to the quality, accuracy and completeness of the site. CHARUSAT will not be liable for any damages arising from the use of this site.
                                <br />
                                </p>                             
                            </div>
                            
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

export default terms_of_use;
