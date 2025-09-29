"use client"
import { Fragment } from "react";
import "@/css/EOC.css";


const adminOfficers = () => {

    // const universityOfficer = [
    //     { Name: 'Shri Surendra Patel', Designation: 'The President',email:'',Roomno:"118"},
    //     { Name: 'Dr. R V Upadhyay', Designation: 'The Provost',email:'provost@charusat.ac.in',Roomno:"113"},
    //     { Name: 'Dr. Atul Patel', Designation: 'The Registrar, Dean(Academics)',email:'registrar@charusat.ac.in',Roomno:"115"},
    //     { Name: 'Mr. Bhavdip Patel', Designation: 'The Chief Accounts Officer',email:'head.account@charusat.ac.in',Roomno:"116"},
    //     { Name: 'Mr. Pritesh Patel', Designation: 'Accounts Officer',email:'dy.account@charusat.ac.in', Roomno:"118"},
    //     { Name: 'Dr. Vijay Chaudhary', Designation: 'Dean (FTE)',email:'dean.fte@charusat.ac.in',Roomno:"122"},
    //     { Name: 'Dr. Bhaskar Pandya', Designation: 'Dean (FoH)',email:'dean.foh@charusat.ac.in',Roomno:"125"},
    //     { Name: 'Dr. Gayatri Dave', Designation: 'Dean (FAS)',email:'dean.fas@charusat.ac.in',Roomno:"126"},
    //     { Name: 'Dr. Dhruv Dave', Designation: 'Dean (FMD)',email:'dean.fmd@charusat.ac.in',Roomno:"126"},
    //     { Name: 'Dr. Samir Patel', Designation: 'Dean (FPH)',email:'dean.fph@charusat.ac.in',Roomno:"126"},
    //     { Name: 'Dr. Sanskruti Patel', Designation: 'Dean (FCA)',email:'dean.fca@charusat.ac.in',Roomno:"126"},
    //     { Name: 'Dr. Reshma Sable', Designation: 'Dean (FMS)',email:'dean.fms@charusat.ac.in',Roomno:"126"},
    //     { Name: 'Dr. Darshan Patel', Designation: 'Dean (Research)',email:'dean.research@charusat.ac.in',Roomno:"126"},
    //     { Name: 'Dr. Manan Raval', Designation: 'Principal (RPCP)',email:'principal.rpcp@charusat.ac.in',Roomno:"126"},
    //     { Name: 'Dr. Trushit Upadhayay', Designation: 'Principal (CSPIT)',email:'principal.cspit@charusat.ac.in',Roomno:"126"},
    //     { Name: 'Dr. Bankim Patel', Designation: 'Principal (DEPSTAR)',email:'principal.depstar@charusat.ac.in',Roomno:"126"},
    //     { Name: 'Dr. Darshan Patel', Designation: 'Principal (PDPIAS)',email:'principal.pdpias@charusat.ac.in',Roomno:"126"},
    //     { Name: 'Dr. M Balaganapathy', Designation: 'Principal (ARIP)',email:'principal.arip@charusat.ac.in',Roomno:"126"},
    //     { Name: 'Dr. Dharmendra Patel', Designation: 'Principal (CMPICA)',email:'principal.cmpica@charusat.ac.in',Roomno:"126"},
    //     { Name: 'Dr. Binit Patel', Designation: 'Principal (I2IM)',email:'principal.iiim@charusat.ac.in',Roomno:"126"},
    //     { Name: 'Dr. Hemant Kumar', Designation: 'Principal (BDPIPS)',email:'principal.bdips@charusat.ac.in',Roomno:"126"},
    //     { Name: 'Dr. Anil Sharma', Designation: 'Principal (MTIN)',email:'principal.mtin@charusat.ac.in',Roomno:"126"},
    //   ];
    
    const adminOfficer = [
      {Name: 'Dr. Y P Kosta', Designation:'Director (URC) - CSRTC, KRADLE, ICC, ADPICoE (AI)', email:'director.urc@charusat.ac.in'},
      {Name: 'Mr. Mukeshkumar Yadav', Designation: 'Dy. Registrar(Acedemics)',Roomno:"116"},
      {Name: 'Mr. Mitesh Patel', Designation: 'Assistant Registrar (Students Section)',Roomno:"126"},
      {Name: 'Dr. Abhilash Shukla', Designation: 'OSD (Examination Section)',Roomno:"126"},
      {Name: 'Mr. Kruten Patel', Designation: 'Corporate Communication Officer',Roomno:"126"},
      {Name: 'Mr. Pramod Patel', Designation: 'Librarian & Event Managements',Roomno:"126"},
      {Name: 'Mr. Rajendra Solanki', Designation: 'Dy. Registrar (HR)',Roomno:"126"},
      {Name: 'Mr. Sujal Dadhaniya', Designation: 'Corporate Development & Placement Cell',Roomno:"126"}, 
      {Name: 'Mr. Jaymin Desai', Designation: 'University Engineer Infrastructure Development & Maintenance Section',Roomno:"126"}, 

    ]
     

  return (
    <Fragment>
      {/* <PageHeader title={'4 Results found for: Business'} curPage={'Search Result'} /> */}

      <div className="blog-section padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  {/* <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content"> */}
                            {/* <h3 className="fw-bold" style={{textAlign:"center"}}> OFFICERS OF THE UNIVERSITY</h3>
                            <br /> */}

                            {/* <div className="meta-post" >
                            
                              <a className="pdfLink" target="_blank" href="assets\files\samajgosthi\December_2022.pdf">December 2022<i class="icofont-file-pdf" style={{ fontSize: "22px" }}></i></a>
                              <br />
                              <a className="pdfLink" target="_blank" href="assets\files\samajgosthi\November_2022.pdf">November 2022<i class="icofont-file-pdf" style={{ fontSize: "22px" }}></i></a>
                              <br />
                              <a className="pdfLink" target="_blank" href="assets\files\samajgosthi\October_2022.pdf">October 2022<i class="icofont-file-pdf" style={{ fontSize: "22px" }}></i></a>
                              <br />
                              <a className="pdfLink" target="_blank" href="assets\files\samajgosthi\September_2022.pdf">September 2022<i class="icofont-file-pdf" style={{ fontSize: "22px" }}></i></a>
                              <br />                           
                              <a className="pdfLink" target="_blank" href="assets\files\samajgosthi\July_2022.pdf">July 2022 <i class="icofont-file-pdf" style={{ fontSize: "22px" }}></i></a>
                              <br />                           
                              <a className="pdfLink" target="_blank" href="assets\files\samajgosthi\June_2022.pdf">June 2022 <i class="icofont-file-pdf" style={{ fontSize: "22px" }}></i></a>
                              <br />                           
                              <a className="pdfLink" target="_blank" href="assets\files\samajgosthi\April_2022.pdf">April 2022 <i class="icofont-file-pdf" style={{ fontSize: "22px" }}></i></a>
                              <br />                           
                          </div> */}


<div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">

                          <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">

                            <h3 className="fw-bold" style={{textAlign:"center"}}> ADMINISTRATIVE OFFICERS OF THE UNIVERSITY</h3>
                            <br />

                            <div>
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>Name</th>
                                    <th>Designation</th>
                                    {/* <th>Room No.</th> */}
                                  </tr>
                                </thead>
                                <tbody>
                                  {adminOfficer.map((item, index) => (
                                    <tr key={index}>
                                      <td>{item.Name}</td>
                                      <td>
                                        {item.Designation}
                                      </td>
                                      {/* <td>{item.Roomno}</td> */}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>


                            {/* <Link to="/blog-single" className="lab-btn"><span>Operator's Detail <i className="icofont-external-link"></i></span></Link> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                            {/* <div>
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>Name</th>
                                    <th>Designation</th>
                                    <th>Email</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {universityOfficer.map((item, index) => (
                                    <tr key={index}>
                                      <td>{item.Name}</td>
                                      <td>
                                        {item.Designation}
                                      </td>
                                      <td>{item.email}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div> */}
                          
                          {/* </div></div></div></div></div> */}
                                    <br/><br/>
                          
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default adminOfficers;