import Link from "next/link";

const title = "Contact";
const quickTitle = "Quick Links";
const googleMapTitle = "Map";
const year = new Date().getFullYear();
const addressList1 = {
  iconName: "icofont-google-map",
  text1: "Charotar University of Science and Technology, ",
  text2: "Off. Nadiad-Petlad Highway, Changa-388421",
};

const addressList = [
  {
    iconName: "icofont-phone",
    text: "+91 2697 265011/21",
    ariaLabel: "Phone number"
  },
  {
    iconName: "icofont-envelope",
    text: "info@charusat.ac.in",
    ariaLabel: "Email address"
  },
  {
    iconName: "icofont-clock-time",
    text: `Mon - Sat: 09:00 AM - 4:30 PM `,
    ariaLabel: "Office hours"
  },
];

const socialList = [
  {
    iconName: "icofont-facebook",
    siteLink: "https://www.facebook.com/thecharusat/",
    className: "facebook",
    ariaLabel: "Visit CHARUSAT Facebook page"
  },
  {
    iconName: "icofont-twitter",
    siteLink: "https://twitter.com/thecharusat?lang=en",
    className: "twitter",
    ariaLabel: "Visit CHARUSAT Twitter page"
  },
  {
    iconName: "icofont-linkedin",
    siteLink:
      "https://www.linkedin.com/school/charotar-university-of-science-&-technology-charusat-",
    className: "linkedin",
    ariaLabel: "Visit CHARUSAT LinkedIn page"
  },
  {
    iconName: "icofont-instagram",
    siteLink: "https://www.instagram.com/thecharusat/?hl=en",
    className: "instagram",
    ariaLabel: "Visit CHARUSAT Instagram page"
  },
];

const quickList = [
  {
    text: "Exam Result",
    link: "https://charusat.edu.in:912/Uniexamresult/",
    target: "_blank",
    ariaLabel: "Check exam results (opens in new window)"
  },
  {
    text: "Pay Fees",
    link: "https://support.charusat.edu.in/FeesPaymentApp/frmpayment.aspx",
    target: "_blank",
    ariaLabel: "Pay fees online (opens in new window)"
  },
  {
    text: "Downloads",
    link: "https://charusat.ac.in/Downloads/",
    target: "_blank",
    ariaLabel: "Download documents (opens in new window)"
  },
  {
    text: "Alumni Portal",
    link: "https://alumni.charusat.ac.in/",
    target: "_blank",
    ariaLabel: "Access alumni portal (opens in new window)"
  },
  {
    text: "Donations",
    link: "/donation",
    target: "_self",
    ariaLabel: "Make a donation"
  },
  {
    text: "Policies and Procedures - Support Facilities",
    link: "/policies-terms",
    target: "_self",
    ariaLabel: "View policies and procedures"
  },
  {
    text: "UGC",
    link: "https://www.ugc.gov.in/",
    target: "_blank",
    ariaLabel: "Visit UGC website (opens in new window)"
  },
];

const FooterThree = () => {
  return (
    <div
      className="news-footer-wrap grdnt-bg-custom"
      style={{
        backgroundColor: "#0066b3",
      }}
    >
      <footer className="style-2" role="contentinfo" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">Footer Information</h2>
        <div className="footer-top pb-4">
          <div className="container">
            <div className="row g-4 row-cols-xl-3 row-cols-sm-2 row-cols-1 justify-content-center">
              <div className="col">
                <div className="footer-item our-address w-75">
                  <div className="footer-inner">
                    <div className="footer-content">
                      <div className="title">
                        <h4 style={{ color: "#fff" }}>{title}</h4>
                      </div>
                      <div className="content">
                        <address className="lab-ul office-address">
                          <ul className="lab-ul office-address" role="list">
                            <li style={{ color: "#fff" }} role="listitem">
                              <i
                                className={addressList1.iconName}
                                style={{ color: "#fff" }}
                                aria-hidden="true"
                              ></i>
                              <span className="sr-only">Address: </span>
                              {addressList1.text1} <br />
                              CHARUSAT Campus, <br />
                              {addressList1.text2}
                            </li>
                            <br />
                            {addressList.map((val, i) => (
                              <li key={i} style={{ color: "#fff" }} role="listitem">
                                <i
                                  className={val.iconName}
                                  style={{ color: "#fff" }}
                                  aria-hidden="true"
                                ></i>
                                <span className="sr-only">{val.ariaLabel}: </span>
                                {val.text}
                              </li>
                            ))}
                            <li
                              key="ad1"
                              style={{
                                color: "#fff",
                                fontSize: "0.8rem",
                              }}
                              role="listitem"
                            >
                              <span className="sr-only">Note: </span>
                              (Except Public Holidays and 2<sup>nd</sup> & 4
                              <sup>th</sup> Saturdays)
                            </li>
                            <li role="listitem">
                              <i
                                className="icofont-map-pins"
                                style={{ color: "#fff" }}
                                aria-hidden="true"
                              ></i>
                              <Link
                                href="/how-to-reach"
                                style={{ color: "#fff" }}
                                aria-label="Get directions to CHARUSAT campus"
                              >
                                &nbsp;&nbsp;How to Reach us ?
                              </Link>
                            </li>
                          </ul>
                        </address>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="footer-item">
                  <div className="footer-inner">
                    <div className="footer-content">
                      <div className="title">
                        <h4 style={{ color: "#fff" }}>{quickTitle}</h4>
                      </div>
                      <nav className="content" aria-label="Quick links navigation">
                        <ul className="lab-ul" role="list">
                          {quickList.map((val, i) => (
                            <li key={i} role="listitem">
                              <Link
                                className="text-decoration-none"
                                href={val.link}
                                style={{ color: "#fff" }}
                                target={val.target}
                                aria-label={val.ariaLabel}
                              >
                                {val.text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="footer-item twitter-post">
                  <div className="footer-inner">
                    <div className="footer-content">
                      <div className="title">
                        <h4 style={{ color: "#fff" }}>Miscellaneous</h4>
                      </div>
                      <nav
                        className="content"
                        style={{ width: "20rem !important" }}
                        aria-label="Miscellaneous links navigation"
                      >
                        <ul className="lab-ul" role="list">
                          <li role="listitem">
                            <Link
                              className="text-decoration-none"
                              href="/calendar"
                              style={{ color: "#fff" }}
                              aria-label="View academic calendar"
                            >
                              Academic Calendar
                            </Link>
                          </li>
                          <li role="listitem">
                            <Link
                              className="text-decoration-none"
                              href="assets/files/Holiday_List_2025.pdf"
                              target="_blank"
                              style={{ color: "#fff" }}
                              aria-label="Download public holidays list (PDF, opens in new window)"
                            >
                              Public Holidays
                            </Link>
                          </li>
                          <li role="listitem">
                            <Link
                              className="text-decoration-none"
                              href="/campus-map"
                              style={{ color: "#fff" }}
                              aria-label="View campus map"
                            >
                              Campus Map
                            </Link>
                          </li>
                          <li role="listitem">
                            <Link
                              className="text-decoration-none"
                              href="/code-of-conduct"
                              style={{ color: "#fff" }}
                              aria-label="Read code of conduct"
                            >
                              Code of Conduct
                            </Link>
                          </li>
                          <li style={{ color: "#fff" }} role="listitem">
                            <span className="sr-only">NAD/ABC Videos: </span>
                            NAD/ABC Videos --
                            <Link
                              className="text-decoration-none"
                              href="https://charusat-aqar.s3.ap-south-1.amazonaws.com/charusat/nad/1.mp4"
                              target="_blank"
                              style={{ color: "#fff" }}
                              aria-label="Watch NAD/ABC video 1 (opens in new window)"
                            >
                              &nbsp;1&nbsp;
                            </Link>{" "}
                            <Link
                              className="text-decoration-none"
                              href="https://charusat-aqar.s3.ap-south-1.amazonaws.com/charusat/nad/2.mp4"
                              target="_blank"
                              style={{ color: "#fff" }}
                              aria-label="Watch NAD/ABC video 2 (opens in new window)"
                            >
                              &nbsp;2&nbsp;
                            </Link>{" "}
                            <Link
                              className="text-decoration-none"
                              href="https://charusat-aqar.s3.ap-south-1.amazonaws.com/charusat/nad/3.mp4"
                              target="_blank"
                              style={{ color: "#fff" }}
                              aria-label="Watch NAD/ABC video 3 (opens in new window)"
                            >
                              &nbsp;3&nbsp;
                            </Link>{" "}
                            <Link
                              className="text-decoration-none"
                              href="https://charusat-aqar.s3.ap-south-1.amazonaws.com/charusat/nad/4.mp4"
                              target="_blank"
                              style={{ color: "#fff" }}
                              aria-label="Watch NAD/ABC video 4 (opens in new window)"
                            >
                              &nbsp;4&nbsp;
                            </Link>{" "}
                          </li>
                          <li role="listitem">
                            <Link
                              className="text-decoration-none"
                              href="/notifications"
                              style={{ color: "#fff" }}
                              aria-label="View notifications"
                            >
                              Notifications
                            </Link>
                          </li>
                          <li role="listitem">
                            <Link
                              className="text-decoration-none"
                              href="https://drive.google.com/file/d/1sMpHHguvXa9kOxeKrEXGnCeNLnam9tYj/view"
                              style={{ color: "#fff" }}
                              target="_blank"
                              aria-label="Download UGC OL Application for BBA/BCA (opens in new window)"
                            >
                              UGC OL Application (BBA/BCA)
                            </Link>
                          </li>
                          <li role="listitem">
                            <Link
                              className="text-decoration-none"
                              href="https://drive.google.com/file/d/1UwC4hpVzoxFHu6FjfXZCBp-9zlQ50aNh/view"
                              style={{ color: "#fff" }}
                              target="_blank"
                              aria-label="Download UGC OL Application for MBA/MCA (opens in new window)"
                            >
                              UGC OL Application (MBA/MCA)
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-end mb-0 pb-0">
              <div className="col-auto">
                <nav aria-label="Social media links">
                  <ul className="lab-ul social-icons" role="list">
                    {socialList.map((val, i) => (
                      <li key={i} role="listitem">
                        <Link 
                          href={val.siteLink} 
                          className={val.className}
                          aria-label={val.ariaLabel}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className={val.iconName} aria-hidden="true"></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom" style={{ paddingTop: "0.5rem " }}>
          <div className="container">
            <div className="section-wrapper">
              <p>
                <span className="sr-only">Copyright </span>
                &copy; {year}{" "}
                <Link 
                  className="text-decoration-none" 
                  href="/"
                  aria-label="Go to CHARUSAT homepage"
                >
                  C H A R U S A T
                </Link>{" "}
              </p>
              <nav aria-label="Legal and policy links">
                <Link 
                  href="/mandatory-disclosures"
                  aria-label="View mandatory disclosures and compliance"
                >
                  Mandatory Disclosure & Compliance
                </Link>
                <span aria-hidden="true">&nbsp;&nbsp; || </span>
                <Link 
                  href="/policies-terms"
                  aria-label="Read privacy policy"
                >
                  Privacy Policy
                </Link>
                <span aria-hidden="true"> ||&nbsp;&nbsp;</span>
                <Link 
                  href="./"
                  aria-label="Read disclaimer"
                >
                  Disclaimer
                </Link>
                <span aria-hidden="true"> ||&nbsp;&nbsp;</span>
                <Link 
                  href="/terms-of-use"
                  aria-label="Read terms of use"
                >
                  Terms of Use
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        /* Screen reader only content */
        .sr-only {
          position: absolute !important;
          width: 1px !important;
          height: 1px !important;
          padding: 0 !important;
          margin: -1px !important;
          overflow: hidden !important;
          clip: rect(0, 0, 0, 0) !important;
          white-space: nowrap !important;
          border: 0 !important;
        }

        /* Enhanced focus styles for keyboard navigation */
        a:focus {
          outline: 3px solid #ffffff;
          outline-offset: 2px;
        }

        a:focus:not(:focus-visible) {
          outline: none;
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          a {
            text-decoration: underline !important;
          }
          
          a:focus {
            outline: 4px solid #ffffff;
          }
        }

        /* Print accessibility */
        @media print {
          .sr-only {
            position: static !important;
            width: auto !important;
            height: auto !important;
            margin: 0 !important;
            overflow: visible !important;
            clip: auto !important;
            white-space: normal !important;
          }
          
          a::after {
            content: " (" attr(href) ")";
            font-size: 0.8em;
          }
        }
      `}</style>
    </div>
  );
};

export default FooterThree;