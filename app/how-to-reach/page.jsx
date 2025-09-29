"use client";
import { Fragment } from "react";
// import EOCcontact from "@/components/section/EOCcontact";
// import { color } from "@mui/system";
// import "@/css/EOC.css";

const how_to_reach = () => {
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
                            <h3>How to reach CHARUSAT</h3>
                            <hr />
                            <br />
                            <div className="meta-post">
                              <p>
                                Changa is well connected by road, rail and air.
                                There are three main cities close to Changa that
                                serve as entry points, Ahmedabad, Anand, and
                                Vadodara. Changa is 65 kms away from Ahmedabad,
                                22 kms away from Anand, and 45 kms from
                                Vadodara.
                                <br />
                              </p>
                            </div>
                            <br />
                            <div className="meta-post">
                              <h4>By Air</h4>
                              <ul>
                                <li>
                                  {/* <i className="icofont-tick-mark"></i> */}
                                  The nearest international airport is Ahmedabad
                                  which is two hours drive by road. There are
                                  daily domestic flights from Mumbai and Delhi.
                                  Indian Airlines, Jet Airways and Spice Jet fly
                                  to Ahmedabad. There are direct international
                                  flights to Ahmedabad from Dubai, Abu Dhabi,
                                  Muscat, Doha Qatar, Bahrain, Kuwait, and USA.
                                  Prepaid taxis are available at the Ahmedabad
                                  airport.
                                </li>
                              </ul>
                            </div>
                            <div className="meta-post">
                              <h4>By Road</h4>
                              <ul>
                                <li>
                                  {/* <i className="icofont-tick-mark"></i> */}
                                  Changa is well connected with the major cities
                                  in Gujarat, Maharastra, Rajasthan, etc. Buses
                                  runs between Ahmedabad-Changa, Vadodara-Changa
                                  and Nadiad/Anand-Changa frequently.
                                </li>
                              </ul>
                            </div>
                            <div className="meta-post">
                              <h4>By Train</h4>
                              <ul>
                                <li>
                                  {/* <i className="icofont-tick-mark"></i> */}
                                  The closest railway stations are at Nadiad (12
                                  kms from Changa) and Anand (22 kms from
                                  Changa). Delhi (to the north) and Mambai (to
                                  the south) are linked to Nadiad/Anand
                                  stations. Anand station is connected to
                                  Bangalore, Chennai, Delhi, Goa, Calicut,
                                  Cochin, Trivandrum, Mumbai and other major
                                  cities. For more information check:
                                  <a href="https://www.indianrail.gov.in">
                                    {" "}
                                    www.indianrail.gov.in
                                  </a>
                                </li>
                              </ul>
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

export default how_to_reach;
