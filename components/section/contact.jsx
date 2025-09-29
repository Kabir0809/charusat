import React from "react";



export default function contact(props) {
  return (
    <div className="col-lg-4 col-12">
      <aside>
        <div className="section-wrapper">
          <div className="row row-cols-1 justify-content-center g-4">
            <div className="col">
              <div className="post-item style-2 ">
                <div className="post-inner">
                  <div className="post-content">
                    {/* <Link to="/blog-single"> */}
                    <h3>{props.title}</h3>
                    {/* </Link> */}
                    <div className="meta-post">
                      <div>
                        <br />
                        <i
                          className="icofont-ui-user"
                          style={{
                            color: "#0066b3",
                          }}
                        ></i>
                        &nbsp;{props.name}
                        <br />
                        <br />
                        <i
                          style={{
                            color: "#0066b3",
                          }}
                          className="icofont-email"
                        ></i>
                        &nbsp;{props.email} <br />
                        <br />
                        <i
                          style={{
                            color: "#0066b3",
                          }}
                          className="icofont-phone"
                        ></i>
                        {props.phone}
                        {props.intercom && (
                          <span>
                            <br />
                            <i
                              style={{
                                color: "#0066b3",
                              }}
                              className="icofont-phone"
                            ></i>{" "}
                            {props.intercom}
                          </span>
                        )}
                      </div>
                     
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
