import Link from "next/link";
import Image from "next/image";

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
    ariaLabel: "Visit CHARUSAT Facebook page",
    color: "#1877f2"
  },
  {
    iconName: "icofont-twitter",
    siteLink: "https://twitter.com/thecharusat?lang=en",
    className: "twitter",
    ariaLabel: "Visit CHARUSAT Twitter page",
    color: "#1da1f2"
  },
  {
    iconName: "icofont-linkedin",
    siteLink:
      "https://www.linkedin.com/school/charotar-university-of-science-&-technology-charusat-",
    className: "linkedin",
    ariaLabel: "Visit CHARUSAT LinkedIn page",
    color: "#0077b5"
  },
  {
    iconName: "icofont-instagram",
    siteLink: "https://www.instagram.com/thecharusat/?hl=en",
    className: "instagram",
    ariaLabel: "Visit CHARUSAT Instagram page",
    color: "#e4405f"
  },
];

const quickList = [
  {
    text: "Exam Result",
    link: "https://charusat.edu.in:912/Uniexamresult/",
    target: "_blank",
    ariaLabel: "Check exam results (opens in new window)",
    icon: "icofont-graduate"
  },
  {
    text: "Pay Fees",
    link: "https://support.charusat.edu.in/FeesPaymentApp/frmpayment.aspx",
    target: "_blank",
    ariaLabel: "Pay fees online (opens in new window)",
    icon: "icofont-credit-card"
  },
  {
    text: "Downloads",
    link: "https://charusat.ac.in/Downloads/",
    target: "_blank",
    ariaLabel: "Download documents (opens in new window)",
    icon: "icofont-download"
  },
  {
    text: "Alumni Portal",
    link: "https://alumni.charusat.ac.in/",
    target: "_blank",
    ariaLabel: "Access alumni portal (opens in new window)",
    icon: "icofont-users-alt-2"
  },
  {
    text: "Donations",
    link: "/donation",
    target: "_self",
    ariaLabel: "Make a donation",
    icon: "icofont-hand-gripped"
  },
  {
    text: "Policies and Procedures",
    link: "/policies-terms",
    target: "_self",
    ariaLabel: "View policies and procedures",
    icon: "icofont-file-document"
  },
  {
    text: "UGC",
    link: "https://www.ugc.gov.in/",
    target: "_blank",
    ariaLabel: "Visit UGC website (opens in new window)",
    icon: "icofont-building"
  },
];

const miscList = [
  {
    text: "Academic Calendar",
    link: "/calendar",
    icon: "icofont-calendar"
  },
  {
    text: "Public Holidays",
    link: "assets/files/Holiday_List_2025.pdf",
    target: "_blank",
    icon: "icofont-holiday"
  },
  {
    text: "Campus Map",
    link: "/campus-map",
    icon: "icofont-map"
  },
  {
    text: "Code of Conduct",
    link: "/code-of-conduct",
    icon: "icofont-law-document"
  },
  {
    text: "Notifications",
    link: "/notifications",
    icon: "icofont-notification"
  }
];

const FooterThree = () => {
  return (
    <div
      className="position-relative overflow-hidden"
      style={{
        minHeight: "600px"
      }}
    >
      {/* Background Image */}
      <div
        className="position-absolute w-100 h-100"
        style={{
          top: 0,
          left: 0,
          zIndex: 0,
          backgroundImage: "url('/assets/images/charusat-uni.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed"
        }}
      />

      {/* Gradient Overlay */}
      <div
        className="position-absolute w-100 h-100"
        style={{
          top: 0,
          left: 0,
          zIndex: 1,
          background: "linear-gradient(135deg, rgba(30, 41, 59, 0.93) 0%, rgba(51, 65, 85, 0.88) 30%, rgba(71, 85, 105, 0.85) 70%, rgba(30, 41, 59, 0.95) 100%)"
          // background: "linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(31, 41, 55, 0.90) 50%, rgba(55, 65, 81, 0.85) 100%)"

        }}
      />


      <footer className="position-relative" style={{ zIndex: 4 }} role="contentinfo" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">Footer Information</h2>
        
        <div className="container py-5">
          <div className="row g-5 justify-content-center">
            
            {/* Contact Section */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-section">
                <div
                  className="d-flex align-items-center mb-4"
                  style={{
                    background: "rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(20px)",
                    padding: "12px 20px",
                    borderRadius: "25px",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    width: "fit-content",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <i 
                    className="icofont-phone me-2" 
                    style={{ color: "#4fc3f7", fontSize: "1.2rem" }}
                    aria-hidden="true"
                  />
                  <h4 className="text-white mb-0 fw-bold">{title}</h4>
                </div>

                <div className="contact-info">
                  <div 
                    className="mb-4 p-3 rounded-3"
                    style={{
                      background: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(15px)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)"
                    }}
                  >
                    <div className="d-flex align-items-start mb-3">
                      <i
                        className="icofont-google-map me-3 mt-1"
                        style={{ color: "#4fc3f7", fontSize: "1.1rem" }}
                        aria-hidden="true"
                      />
                      <address className="text-white-50 mb-0" style={{ lineHeight: "1.6" }}>
                        <span className="sr-only">Address: </span>
                        <strong className="text-white d-block mb-1">CHARUSAT Campus</strong>
                        {addressList1.text1}<br />
                        {addressList1.text2}
                      </address>
                    </div>
                  </div>

                  <div className="contact-details">
                    {addressList.map((val, i) => (
                      <div 
                        key={i} 
                        className="d-flex align-items-center mb-3 contact-item"
                        style={{
                          padding: "10px 15px",
                          borderRadius: "10px",
                          transition: "all 0.3s ease",
                          cursor: "pointer"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
                          e.currentTarget.style.transform = "translateX(10px)";
                          e.currentTarget.style.backdropFilter = "blur(20px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                          e.currentTarget.style.transform = "translateX(0)";
                          e.currentTarget.style.backdropFilter = "none";
                        }}
                      >
                        <i
                          className={`${val.iconName} me-3`}
                          style={{ color: "#4fc3f7", fontSize: "1.1rem" }}
                          aria-hidden="true"
                        />
                        <span className="text-white-50">
                          <span className="sr-only">{val.ariaLabel}: </span>
                          {val.text}
                        </span>
                      </div>
                    ))}
                    
                    <div 
                      className="text-white-50 small mb-3"
                      style={{ paddingLeft: "45px", fontSize: "0.85rem" }}
                    >
                      (Except Public Holidays and 2<sup>nd</sup> & 4<sup>th</sup> Saturdays)
                    </div>

                    <Link
                      href="/how-to-reach"
                      className="d-flex align-items-center text-decoration-none directions-link"
                      style={{
                        color: "#4fc3f7",
                        padding: "10px 15px",
                        borderRadius: "10px",
                        transition: "all 0.3s ease",
                        border: "1px solid rgba(79, 195, 247, 0.4)",
                        background: "rgba(79, 195, 247, 0.1)"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(79, 195, 247, 0.2)";
                        e.currentTarget.style.transform = "translateX(10px)";
                        e.currentTarget.style.borderColor = "#4fc3f7";
                        e.currentTarget.style.backdropFilter = "blur(20px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(79, 195, 247, 0.1)";
                        e.currentTarget.style.transform = "translateX(0)";
                        e.currentTarget.style.borderColor = "rgba(79, 195, 247, 0.4)";
                        e.currentTarget.style.backdropFilter = "none";
                      }}
                      aria-label="Get directions to CHARUSAT campus"
                    >
                      <i className="icofont-map-pins me-2" aria-hidden="true" />
                      How to Reach us?
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="col-lg-4 col-md-6 ">
              <div className="footer-section">
                <div
                  className="d-flex align-items-center mb-4"
                  style={{
                    background: "rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(20px)",
                    padding: "12px 20px",
                    borderRadius: "25px",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    width: "fit-content",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <i 
                    className="icofont-link me-2" 
                    style={{ color: "#4fc3f7", fontSize: "1.2rem" }}
                    aria-hidden="true"
                  />
                  <h4 className="text-white mb-0 fw-bold">{quickTitle}</h4>
                </div>

                <nav aria-label="Quick links navigation p-4">
                  <ul className="list-unstyled" role="list">
                    {quickList.map((val, i) => (
                      <li key={i} role="listitem" className="mb-2">
                        <Link
                          href={val.link}
                          target={val.target}
                          className="d-flex align-items-center text-decoration-none quick-link"
                          style={{
                            color: "#ffffff",
                            padding: "10px 15px",
                            borderRadius: "8px",
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                            position: "relative",
                            overflow: "hidden"
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
                            e.currentTarget.style.transform = "translateX(15px)";
                            e.currentTarget.style.color = "#4fc3f7";
                            e.currentTarget.style.backdropFilter = "blur(20px)";
                            e.currentTarget.querySelector('i').style.transform = "scale(1.2)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.transform = "translateX(0)";
                            e.currentTarget.style.color = "#ffffff";
                            e.currentTarget.style.backdropFilter = "none";
                            e.currentTarget.querySelector('i').style.transform = "scale(1)";
                          }}
                          aria-label={val.ariaLabel}
                        >
                          <i
                            className={`${val.icon} me-3`}
                            style={{
                              fontSize: "1.1rem",
                              transition: "transform 0.3s ease",
                              color: "#4fc3f7"
                            }}
                            aria-hidden="true"
                          />
                          <span className="fw-medium">{val.text}</span>
                          {val.target === "_blank" && (
                            <i 
                              className="icofont-external-link ms-auto" 
                              style={{ fontSize: "0.8rem", opacity: 0.7 }}
                              aria-hidden="true"
                            />
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>

            {/* Miscellaneous Section */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-section">
                <div
                  className="d-flex align-items-center mb-4"
                  style={{
                    background: "rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(20px)",
                    padding: "12px 20px",
                    borderRadius: "25px",
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    width: "fit-content",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <i 
                    className="icofont-more me-2" 
                    style={{ color: "#4fc3f7", fontSize: "1.2rem" }}
                    aria-hidden="true"
                  />
                  <h4 className="text-white mb-0 fw-bold">Resources</h4>
                </div>

                <nav aria-label="Miscellaneous links navigation">
                  <ul className="list-unstyled" role="list">
                    {miscList.map((val, i) => (
                      <li key={i} role="listitem" className="mb-2">
                        <Link
                          href={val.link}
                          target={val.target}
                          className="d-flex align-items-center text-decoration-none misc-link"
                          style={{
                            color: "#ffffff",
                            padding: "10px 15px",
                            borderRadius: "8px",
                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
                            e.currentTarget.style.transform = "translateX(15px)";
                            e.currentTarget.style.color = "#4fc3f7";
                            e.currentTarget.style.backdropFilter = "blur(20px)";
                            e.currentTarget.querySelector('i').style.transform = "scale(1.2)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.transform = "translateX(0)";
                            e.currentTarget.style.color = "#ffffff";
                            e.currentTarget.style.backdropFilter = "none";
                            e.currentTarget.querySelector('i').style.transform = "scale(1)";
                          }}
                        >
                          <i
                            className={`${val.icon} me-3`}
                            style={{
                              fontSize: "1.1rem",
                              transition: "transform 0.3s ease",
                              color: "#4fc3f7"
                            }}
                            aria-hidden="true"
                          />
                          <span className="fw-medium">{val.text}</span>
                          {val.target === "_blank" && (
                            <i 
                              className="icofont-external-link ms-auto" 
                              style={{ fontSize: "0.8rem", opacity: 0.7 }}
                              aria-hidden="true"
                            />
                          )}
                        </Link>
                      </li>
                    ))}
                    
                    {/* NAD/ABC Videos */}
                    <li role="listitem" className="mb-2">
                      <div
                        className="d-flex align-items-center"
                        style={{
                          color: "#ffffff",
                          padding: "10px 15px",
                          borderRadius: "8px"
                        }}
                      >
                        <i
                          className="icofont-video me-3"
                          style={{ fontSize: "1.1rem", color: "#4fc3f7" }}
                          aria-hidden="true"
                        />
                        <div>
                          <span className="fw-medium d-block mb-2">NAD/ABC Videos</span>
                          <div className="d-flex gap-2">
                            {[1, 2, 3, 4].map((num) => (
                              <Link
                                key={num}
                                href={`https://charusat-aqar.s3.ap-south-1.amazonaws.com/charusat/nad/${num}.mp4`}
                                target="_blank"
                                className="btn btn-sm text-decoration-none"
                                style={{
                                  background: "rgba(79, 195, 247, 0.25)",
                                  color: "#4fc3f7",
                                  border: "1px solid rgba(79, 195, 247, 0.4)",
                                  borderRadius: "15px",
                                  minWidth: "35px",
                                  height: "30px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  transition: "all 0.3s ease",
                                  backdropFilter: "blur(10px)"
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.background = "#4fc3f7";
                                  e.currentTarget.style.color = "#ffffff";
                                  e.currentTarget.style.transform = "scale(1.15)";
                                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(79, 195, 247, 0.4)";
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.background = "rgba(79, 195, 247, 0.25)";
                                  e.currentTarget.style.color = "#4fc3f7";
                                  e.currentTarget.style.transform = "scale(1)";
                                  e.currentTarget.style.boxShadow = "none";
                                }}
                                aria-label={`Watch NAD/ABC video ${num} (opens in new window)`}
                              >
                                {num}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* Additional Links */}
                    <li role="listitem" className="mb-2">
                      <Link
                        href="https://drive.google.com/file/d/1sMpHHguvXa9kOxeKrEXGnCeNLnam9tYj/view"
                        target="_blank"
                        className="d-flex align-items-center text-decoration-none"
                        style={{
                          color: "#ffffff",
                          padding: "10px 15px",
                          borderRadius: "8px",
                          transition: "all 0.3s ease"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
                          e.currentTarget.style.transform = "translateX(15px)";
                          e.currentTarget.style.color = "#4fc3f7";
                          e.currentTarget.style.backdropFilter = "blur(20px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                          e.currentTarget.style.transform = "translateX(0)";
                          e.currentTarget.style.color = "#ffffff";
                          e.currentTarget.style.backdropFilter = "none";
                        }}
                      >
                        <i
                          className="icofont-file-pdf me-3"
                          style={{ fontSize: "1.1rem", color: "#4fc3f7" }}
                          aria-hidden="true"
                        />
                        <span className="fw-medium">UGC OL Application (BBA/BCA)</span>
                      </Link>
                    </li>

                    <li role="listitem" className="mb-2">
                      <Link
                        href="https://drive.google.com/file/d/1UwC4hpVzoxFHu6FjfXZCBp-9zlQ50aNh/view"
                        target="_blank"
                        className="d-flex align-items-center text-decoration-none"
                        style={{
                          color: "#ffffff",
                          padding: "10px 15px",
                          borderRadius: "8px",
                          transition: "all 0.3s ease"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
                          e.currentTarget.style.transform = "translateX(15px)";
                          e.currentTarget.style.color = "#4fc3f7";
                          e.currentTarget.style.backdropFilter = "blur(20px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                          e.currentTarget.style.transform = "translateX(0)";
                          e.currentTarget.style.color = "#ffffff";
                          e.currentTarget.style.backdropFilter = "none";
                        }}
                      >
                        <i
                          className="icofont-file-pdf me-3"
                          style={{ fontSize: "1.1rem", color: "#4fc3f7" }}
                          aria-hidden="true"
                        />
                        <span className="fw-medium">UGC OL Application (MBA/MCA)</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="row justify-content-center mt-5 pt-4">
            <div className="col-auto">
              <div
                className="p-4 rounded-4 text-center"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(25px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
                }}
              >
                <h5 className="text-white mb-3 fw-bold">Connect With Us</h5>
                <nav aria-label="Social media links">
                  <div className="d-flex justify-content-center gap-3" role="list">
                    {socialList.map((val, i) => (
                      <Link
                        key={i}
                        href={val.siteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-flex align-items-center justify-content-center social-link"
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                          background: "rgba(255, 255, 255, 0.15)",
                          color: "#ffffff",
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          border: "2px solid rgba(255, 255, 255, 0.25)",
                          backdropFilter: "blur(15px)"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = val.color;
                          e.currentTarget.style.transform = "translateY(-8px) scale(1.15)";
                          e.currentTarget.style.boxShadow = `0 15px 40px ${val.color}60`;
                          e.currentTarget.style.borderColor = val.color;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
                          e.currentTarget.style.transform = "translateY(0) scale(1)";
                          e.currentTarget.style.boxShadow = "none";
                          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.25)";
                        }}
                        aria-label={val.ariaLabel}
                        role="listitem"
                      >
                        <i 
                          className={val.iconName} 
                          style={{ fontSize: "1.3rem" }}
                          aria-hidden="true"
                        />
                      </Link>
                    ))}
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div 
          className="py-4"
          style={{
            background: "rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(255, 255, 255, 0.15)"
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                <p className="mb-0 text-white-50">
                  <span className="sr-only">Copyright </span>
                  &copy; {year}{" "}
                  <Link 
                    href="/"
                    className="text-white text-decoration-none fw-bold"
                    style={{ transition: "color 0.3s ease" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = "#4fc3f7"}
                    onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}
                    aria-label="Go to CHARUSAT homepage"
                  >
                    CHARUSAT
                  </Link>
                </p>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <nav aria-label="Legal and policy links" className="d-flex flex-wrap justify-content-center justify-content-md-end gap-3">
                  {[
                    { text: "Mandatory Disclosure", link: "/mandatory-disclosures" },
                    { text: "Privacy Policy", link: "/policies-terms" },
                    { text: "Disclaimer", link: "./" },
                    { text: "Terms of Use", link: "/terms-of-use" }
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      className="text-white-50 text-decoration-none small"
                      style={{ transition: "color 0.3s ease" }}
                      onMouseEnter={(e) => e.currentTarget.style.color = "#4fc3f7"}
                      onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255, 255, 255, 0.5)"}
                    >
                      {item.text}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        /* Floating Animation */
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px);
          }
          50% { 
            transform: translateY(-20px);
          }
        }

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
        a:focus, button:focus {
          outline: 3px solid #4fc3f7 !important;
          outline-offset: 3px !important;
          box-shadow: 0 0 0 6px rgba(79, 195, 247, 0.3) !important;
        }

        a:focus:not(:focus-visible), button:focus:not(:focus-visible) {
          outline: none !important;
          box-shadow: none !important;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          a {
            text-decoration: underline !important;
          }
          
          a:focus {
            outline: 4px solid #ffffff !important;
            background: #000000 !important;
            color: #ffffff !important;
          }

          .footer-section {
            border: 2px solid #ffffff !important;
          }
        }

        /* Reduced motion accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }

          .social-link:hover {
            transform: none !important;
          }

          .quick-link:hover, .misc-link:hover, .contact-item:hover {
            transform: none !important;
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

          .footer-section {
            page-break-inside: avoid;
          }
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .quick-link:hover, .misc-link:hover {
            transform: translateX(5px) !important;
          }

          .social-link {
            width: 45px !important;
            height: 45px !important;
          }

          .contact-item:hover {
            transform: translateX(5px) !important;
          }

          /* Mobile background adjustments */
          div[style*="backgroundAttachment: fixed"] {
            background-attachment: scroll !important;
          }
        }

        /* Parallax effect for desktop */
        @media (min-width: 769px) {
          div[style*="backgroundAttachment: fixed"] {
            background-attachment: fixed;
          }
        }
      `}</style>
    </div>
  );
};

export default FooterThree;