import Link from "next/link";

const title = "Contact";
const quickTitle = "Quick Links";
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
    bgColor: "#1877f2"
  },
  {
    iconName: "icofont-twitter",
    siteLink: "https://twitter.com/thecharusat?lang=en",
    className: "twitter",
    ariaLabel: "Visit CHARUSAT Twitter page",
    bgColor: "#1da1f2"
  },
  {
    iconName: "icofont-linkedin",
    siteLink: "https://www.linkedin.com/school/charotar-university-of-science-&-technology-charusat-",
    className: "linkedin",
    ariaLabel: "Visit CHARUSAT LinkedIn page",
    bgColor: "#0077b5"
  },
  {
    iconName: "icofont-instagram",
    siteLink: "https://www.instagram.com/thecharusat/?hl=en",
    className: "instagram",
    ariaLabel: "Visit CHARUSAT Instagram page",
    bgColor: "#e4405f"
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
    text: "Policies and Procedures",
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

const miscList = [
  {
    text: "Academic Calendar",
    link: "/calendar",
    target: "_self",
    ariaLabel: "View academic calendar"
  },
  {
    text: "Public Holidays",
    link: "assets/files/Holiday_List_2025.pdf",
    target: "_blank",
    ariaLabel: "Download public holidays list (PDF, opens in new window)"
  },
  {
    text: "Campus Map",
    link: "/campus-map",
    target: "_self",
    ariaLabel: "View campus map"
  },
  {
    text: "Code of Conduct",
    link: "/code-of-conduct",
    target: "_self",
    ariaLabel: "Read code of conduct"
  },
  {
    text: "Notifications",
    link: "/notifications",
    target: "_self",
    ariaLabel: "View notifications"
  },
  {
    text: "UGC OL Application (BBA/BCA)",
    link: "https://drive.google.com/file/d/1sMpHHguvXa9kOxeKrEXGnCeNLnam9tYj/view",
    target: "_blank",
    ariaLabel: "Download UGC OL Application for BBA/BCA (opens in new window)"
  },
  {
    text: "UGC OL Application (MBA/MCA)",
    link: "https://drive.google.com/file/d/1UwC4hpVzoxFHu6FjfXZCBp-9zlQ50aNh/view",
    target: "_blank",
    ariaLabel: "Download UGC OL Application for MBA/MCA (opens in new window)"
  },
];

const nadVideos = [
  {
    text: "1",
    link: "https://charusat-aqar.s3.ap-south-1.amazonaws.com/charusat/nad/1.mp4",
    ariaLabel: "Watch NAD/ABC video 1 (opens in new window)"
  },
  {
    text: "2",
    link: "https://charusat-aqar.s3.ap-south-1.amazonaws.com/charusat/nad/2.mp4",
    ariaLabel: "Watch NAD/ABC video 2 (opens in new window)"
  },
  {
    text: "3",
    link: "https://charusat-aqar.s3.ap-south-1.amazonaws.com/charusat/nad/3.mp4",
    ariaLabel: "Watch NAD/ABC video 3 (opens in new window)"
  },
  {
    text: "4",
    link: "https://charusat-aqar.s3.ap-south-1.amazonaws.com/charusat/nad/4.mp4",
    ariaLabel: "Watch NAD/ABC video 4 (opens in new window)"
  },
];

const FooterThree = () => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #0a4d7d 0%, #0066b3 50%, #004a8f 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Image */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url(/assets/images/charusat-uni.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.15,
        pointerEvents: 'none'
      }}></div>

      {/* Background Pattern Overlay */}


      {/* Wave Divider */}
      <div style={{
        position: 'absolute',
        top: -1,
        left: 0,
        width: '100%',
        overflow: 'hidden',
        lineHeight: 0,
        zIndex: 1
      }}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ width: '100%', height: '60px' }}>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>

      <footer role="contentinfo" aria-labelledby="footer-heading" style={{ position: 'relative', zIndex: 2 }}>
        <h2 id="footer-heading" className="visually-hidden">Footer Information</h2>
        
        <div className="container" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
          {/* Main Grid */}
          <div className="row g-4 mb-5">
            {/* Contact Section */}
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 h-100 shadow-lg" style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease'
              }}>
                <div className="card-body p-4">
                  <h4 className="card-title text-white fw-bold mb-4 d-flex align-items-center">
                    <i className="icofont-location-pin me-2 fs-3"></i>
                    {title}
                  </h4>
                  
                  {/* Main Address */}
                  <div className="d-flex mb-3 pb-3 border-bottom border-white border-opacity-25">
                    <i className={`${addressList1.iconName} text-white me-3 fs-5`}></i>
                    <div className="text-white">
                      <p className="mb-1">{addressList1.text1}</p>
                      <p className="mb-1">CHARUSAT Campus,</p>
                      <p className="mb-0">{addressList1.text2}</p>
                    </div>
                  </div>
                  
                  {/* Contact Details */}
                  {addressList.map((val, i) => (
                    <div key={i} className="d-flex mb-3">
                      <i className={`${val.iconName} text-white me-3 fs-5`}></i>
                      <p className="text-white mb-0">{val.text}</p>
                    </div>
                  ))}
                  
                  <p className="text-white small fst-italic opacity-75 mb-3">
                    (Except Public Holidays and 2<sup>nd</sup> & 4<sup>th</sup> Saturdays)
                  </p>
                  
                  <Link href="/how-to-reach" className="btn btn-light btn-sm rounded-pill d-inline-flex align-items-center mt-2" style={{ transition: 'all 0.3s ease' }}>
                    <i className="icofont-map-pins me-2"></i>
                    <span>How to Reach us?</span>
                    <i className="icofont-rounded-right ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 h-100 shadow-lg" style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease'
              }}>
                <div className="card-body p-4">
                  <h4 className="card-title text-white fw-bold mb-4 d-flex align-items-center">
                    <i className="icofont-link me-2 fs-3"></i>
                    {quickTitle}
                  </h4>
                  
                  <ul className="list-unstyled">
                    {quickList.map((val, i) => (
                      <li key={i} className="mb-2">
                        <Link href={val.link} target={val.target} className="text-white text-decoration-none d-flex align-items-center" style={{ transition: 'all 0.3s ease' }}>
                          <i className="icofont-thin-right me-2"></i>
                          <span>{val.text}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Miscellaneous Section */}
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 h-100 shadow-lg" style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease'
              }}>
                <div className="card-body p-4">
                  <h4 className="card-title text-white fw-bold mb-4 d-flex align-items-center">
                    <i className="icofont-ui-folder me-2 fs-3"></i>
                    Miscellaneous
                  </h4>
                  
                  <ul className="list-unstyled">
                    {miscList.map((val, i) => (
                      <li key={i} className="mb-2">
                        <Link href={val.link} target={val.target} className="text-white text-decoration-none d-flex align-items-center" style={{ transition: 'all 0.3s ease' }}>
                          <i className="icofont-thin-right me-2"></i>
                          <span>{val.text}</span>
                        </Link>
                      </li>
                    ))}
                    
                    {/* NAD/ABC Videos */}
                    <li className="mt-4 pt-3 border-top border-white border-opacity-25">
                      <div>
                        <p className="text-white fw-semibold mb-2">NAD/ABC Videos:</p>
                        <div className="d-flex gap-2 flex-wrap">
                          {nadVideos.map((video, i) => (
                            <Link
                              key={i}
                              href={video.link}
                              target="_blank"
                              className="btn btn-outline-light btn-sm rounded"
                              style={{ 
                                width: '40px', 
                                height: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.3s ease'
                              }}
                            >
                              {video.text}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="text-center py-4 border-top border-white border-opacity-25">
            <h4 className="text-white fw-bold mb-4">Connect With Us</h4>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              {socialList.map((val, i) => (
                <Link
                  key={i}
                  href={val.siteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: '50px',
                    height: '50px',
                    background: 'rgba(255, 255, 255, 0.15)',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    color: '#fff',
                    fontSize: '1.5rem',
                    transition: 'all 0.4s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = val.bgColor;
                    e.currentTarget.style.borderColor = val.bgColor;
                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  aria-label={val.ariaLabel}
                >
                  <i className={val.iconName}></i>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          background: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(10px)',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '20px 0'
        }}>
          <div className="container">
            <div className="row align-items-center gy-3">
              <div className="col-md-6 text-center text-md-start">
                <p className="text-white mb-0">
                  &copy; {year}{" "}
                  <Link href="/" className="text-white text-decoration-none fw-bold" style={{ letterSpacing: '2px' }}>
                    CHARUSAT
                  </Link>
                </p>
              </div>
              <div className="col-md-6">
                <div className="d-flex justify-content-center justify-content-md-end gap-2 gap-md-3 flex-wrap align-items-center small">
                  <Link href="/mandatory-disclosures" className="text-white text-decoration-none">
                    Mandatory Disclosure
                  </Link>
                  <span className="text-white opacity-50">|</span>
                  <Link href="/policies-terms" className="text-white text-decoration-none">
                    Privacy Policy
                  </Link>
                  <span className="text-white opacity-50">|</span>
                  <Link href="./" className="text-white text-decoration-none">
                    Disclaimer
                  </Link>
                  <span className="text-white opacity-50">|</span>
                  <Link href="/terms-of-use" className="text-white text-decoration-none">
                    Terms of Use
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .card:hover {
          background: rgba(255, 255, 255, 0.15) !important;
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2) !important;
        }
        
        .list-unstyled a:hover {
          padding-left: 10px;
          opacity: 1 !important;
        }
        
        .list-unstyled a:hover i {
          transform: translateX(5px);
        }
        
        a:focus {
          outline: 3px solid #ffffff;
          outline-offset: 2px;
        }

        @media (max-width: 768px) {
          svg {
            height: 40px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default FooterThree;