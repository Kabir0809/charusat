import { Fragment } from "react";
import Link from "next/link";
import Contact from "@/components/section/contact";
import "@/css/EOC.css";

const ICC = () => {
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
                            <h3>Internal Complaint Committee (ICC)</h3>
                            <hr />
                            <br />
                            <div className="meta-post">
                              <h5>Objective</h5>
                              The objectives of the Cell and its policy are:
                              <ul>
                                <li>
                                  {/* <i className="icofont-tick-mark"></i> */}
                                  To create healthy &amp; safe working
                                  environment for all, specifically for women
                                  employees and students.
                                </li>
                                <li>
                                  {/* <i className="icofont-tick-mark"></i> */}
                                  To prevent discrimination and sexual
                                  harassment against the women, by providing
                                  gender amity among students and employees.
                                </li>
                                <li>
                                  {/* <i className="icofont-tick-mark"></i> */}
                                  To lay down procedures for the prohibition,
                                  resolution, settlement and prosecution of acts
                                  of discrimination and sexual harassment
                                  against the women, by the students and
                                  employees.
                                </li>
                                <li>
                                  Deal with the cases of discrimination and
                                  sexual harassment against the women, in a time
                                  bound manner aiming at ensuring support
                                  services to the victimised and termination of
                                  the harassment.
                                </li>
                                <li>
                                  Recommend appropriate punitive action against
                                  the guilty party to the Chair / Provost of the
                                  university.
                                </li>
                              </ul>
                            </div>
                            <div className="meta-post">
                              <h5>Definition</h5>
                              <b>Sexual Harassment</b> includes such unwelcome
                              sexually determined behaviour by any person
                              individually or in association with other person
                              or by any person in authority, either directly or
                              by implications such as ;
                              <ol>
                                <li>
                                  Any unwanted conduct with sexual undertones if
                                  it occurs or which is persistent and which
                                  demands, humiliates or creates a hostile and
                                  intimidating environment or is calculated to
                                  induce submission by actual or threatened
                                  adverse consequences and includes any one or
                                  more or all of the following unwelcome acts or
                                  behaviour (whether directly or by
                                  implication), namely;
                                  <br />
                                  - any unwelcome physical, verbal or non-verbal
                                  conduct of sexual nature
                                  <br />
                                  - demand or request for sexual favours
                                  <br />
                                  - making sexually coloured remarks
                                  <br />
                                  - trying to have physical contact and advances
                                  <br />
                                  - eve teasing, jokes causing or likely to
                                  cause awkwardness or embarrassment
                                  <br />
                                  - showing ponography
                                  <br />
                                  - Innuendos and taunts
                                  <br />
                                  - Gender based insults or sexiest remarks
                                  <br />
                                </li>
                                <li>
                                  Any one (or more than one or all) of the
                                  following circumstances, if it occurs or is
                                  present in relation or connected with any
                                  behaviour that has explicit or implicit sexual
                                  undertones:
                                  <br />
                                  - promise of preferential treatments as quid
                                  pro quo for sexual favours
                                  <br />
                                  - threat of detrimental treatment in the
                                  conduct of work
                                  <br />
                                  - threat about the present or future status of
                                  the person concerned
                                  <br />
                                  - creating an intimidating offensive or
                                  hostile learning environment
                                  <br />
                                  - humiliating treatment which is likely to
                                  affect the health, safety and dignity or
                                  physical integrity of the person concerned
                                  <br />
                                </li>
                                <li>
                                  Physical confinement against one’s will and
                                  any other act likely to violate one’s privacy.
                                </li>
                                <li>
                                  Any act of gender discrimination such as
                                  denial of employment to women due to women’s
                                  reproductive role or rigidity in attitude,
                                  which hinders the reproductive role to women
                                  (for example, non-flexible working hours and
                                  timings, non- availability of day care
                                  services, lack of maternity leave etc.)
                                </li>
                              </ol>
                              <b>Aggrieved Women</b> means in relation to work
                              place, a woman of any age whether employed or not,
                              who alleges to have been subjected by any act of
                              sexual harassment by the respondent.
                              <br />
                              <br />
                              <b>Campus</b> means any location or the land on
                              which CHARUSAT university and its constituent
                              institutional facilities like libraries,
                              laboratories, lecture halls, residences, halls,
                              auditoriums, toilets, students centres, hostels,
                              dining halls, parking areas, other amenities like
                              health centre, canteen, bank counters etc. are
                              situated and also includes extended campus and
                              covers within its scope places visited as a
                              student of the institute including transportations
                              provided for the purpose of commuting to and from
                              the institutions, the locations outside the
                              institution on field trips, internships, study
                              tours, short-term placements, places used for
                              camps, cultural festivals, sports meets and such
                              other activities where a person is participating
                              in the capacity of an employee or a student of
                              concern institute or university.
                              <br />
                              <br />
                              <b>Employee</b> means a person employed by the
                              CHARUSAT university or its institutes
                              (regular/term/contract basis) and also includes
                              for this regulations trainee, apprentice (or
                              called by any other name), interns, volunteers,
                              teacher assistants, research assistant whether
                              employed or not including those involved in field
                              studies, projects, short-visits, camps etc.
                              <br />
                              <br />
                              <b>Student</b> means a person duly admitted and
                              pursuing a programme study including short-term
                              training programmes in the university. Provided
                              that a student who is in the process of taking
                              admission in any of the institutes under the
                              university, although not yet admitted, shall be
                              treated, for the purposes of these regulations as
                              a student. Provided that a student who is a
                              participant in any of the activities in Higher
                              Education Institutions other than the HEI where
                              such student is enrolled shall be treated for the
                              purpose of these regulations as a student of that
                              HEI where any incident of sexual harassment takes
                              place against such student.
                              <br />
                              <br />
                              <b>Third party harassment</b> refers to a
                              situation where sexual harassment occurs as a
                              result of an act or omission by any third party or
                              outsider, who is not an employee or a student of
                              the university but a visitor to the university in
                              some other capacity or for some other purpose or
                              reason.
                              <br />
                              <br />
                              For more details, read following document.
                              {/* <ul
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "flex-start",
                                  justifyContent: "flex-start",
                                }}
                              >
                                <li>
                                 
 Eve
                                  teasing
                                </li>
                                <li>
                                  
 Jokes
                                  causing or likely to cause awkwardness or
                                  embarrassment
                                </li>
                                <li>
                                 
 Unsavory
                                  remarks{" "}
                                </li>
                                <li>
                                 
 Gender
                                  Based insults or sexiest remarks
                                </li>
                                <li>
                                 
{" "}
                                  Innuendos and taunts{" "}
                                </li>
                                <li>
                                  
{" "}
                                  Unwelcome sexual overtone in any manner such
                                  as over telephone (Obnoxious telephone calls)
                                  and the like
                                </li>
                                <li>
                                  
 Touching
                                  or brushing against any part of the body and
                                  the like
                                </li>
                                <li>
                                  
 Display
                                  of pornographic or other offensive or
                                  derogatory pictures, cartoons pamphlets or
                                  sayings
                                </li>
                                <li>
                                  
 Forcible
                                  physical touch or molestation{" "}
                                </li>
                                <li>
                                  
 Physical
                                  confinement against one’s will and any other
                                  act likely to violate one’s privacy
                                </li>
                                <li>
                                  
{" "}
                                  Unwelcomed physical contacts and advances
                                </li>
                                <li>
                                  
 A
                                  communication for sexual favors{" "}
                                </li>
                                <li>
                                  
 Any
                                  other unwelcome, physical, verbal or
                                  non-verbal conduct of sexual nature directly,
                                  indirectly, or through electronic media like
                                  SMS, MMS, Social Networking sites etc.
                                </li>
                                <li>
                                  
 Any act
                                  of Gender Discrimination such as denial of
                                  employment to women due to women’s
                                  reproductive role, or rigidity in attitude,
                                  which hinders the reproductive role of women
                                  (for example, non-flexible work hours and
                                  timings, non-availability of day care
                                  services, lack of maternity leave, etc).
                                </li>
                              </ul> */}
                            </div>

                            <table className="table">
                              <thead>
                                <tr>
                                  <th>Document</th>
                                  <th>Link</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>Internal Complaint Committee</td>
                                  <td>
                                    <Link
                                      className="pdfLink"
                                      href="/assets/files/ICC/Updated_ICC_constitution.pdf"
                                      target="_blank"
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
                                <tr>
                                  <td>Detail of Activities (2024-25)</td>
                                  <td>
                                    <Link
                                      className="pdfLink"
                                      href="/assets/files/ICC/Detail of Activities conducted (2024-25).pdf"
                                      target="_blank"
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
                                <tr>
                                  <td>Photographs</td>
                                  <td>
                                    <Link
                                      className="pdfLink"
                                      href="/assets/files/ICC/icc_images.pdf"
                                      target="_blank"
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
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <Contact
              name="Dr. Mrunali R. Patel"
              email="chairperson.icc@charusat.ac.in"
              phone="+91-9824916565"
              intercom="02697-265163"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ICC;
