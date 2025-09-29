import Link from "next/link";

export default function NotFound() {
  return (
    <div className="four-zero-section padding-tb section-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 col-sm-12 col-12">
            <div className="four-zero-content">
              <br />
              <h2 className="title">Page Not Found</h2>
              <p>Please check URL.</p>
              <Link href="/" className="lab-btn ">
                <span>
                  Go Back to Home Page <i className="icofont-external-link"></i>
                </span>
              </Link>
            </div>
          </div>
          {/* <div className="col-lg-8 col-sm-6 col-12">
            <div className="foue-zero-thumb">
              <img src="assets/images/coming_soon.jpeg" alt="CodexCoder" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
