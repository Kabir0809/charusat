"use client";

import { Tab, Tabs } from "react-bootstrap";
import Link from "next/link";
function Notifications() {
  return (
    <div className="blog-section padding-tb section-bg">
      <style>
        {`
          .tab-content {
            clear: both;
            padding: 20px;
            background-color: #f8f9fa;
            border-top: none;
            
          }
        `}
      </style>

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
                          <h3>Notifications</h3>
                          <hr />
                          <br />
                          <div className="meta-post">
                            <div className="professional-tabs">
                              <Tabs
                                defaultActiveKey="charusat"
                                id="professional-tabs"
                                style={{ float: "left" }}
                              >
                                <Tab eventKey="charusat" title="CHARUSAT">
                                  <div className="tab-content">
                                    <h3>CHARUSAT Notifications</h3>
                                    <div style={{ overflowX: "auto" }}>
      <table className="table">
        <tbody>
          <tr>
            <td>
              <Link href="/quill-newsletter" className="notification-link">
                <span className="notification-title">
                  CHARUSAT Chronicles: The Quill - Latest Issue (March-April 2025)
                  <span className="new-badge">New</span>
                </span>
                <i className="icofont-newspaper" style={{ fontSize: "22px", color: "#ff4d00" }}></i>
              </Link>
            </td>
            <td>Publication Date: April 05, 2025</td>
          </tr>
        </tbody>
      </table>
    </div>
                                  </div>
                                </Tab>
                                <Tab eventKey="ugc" title="UGC">
                                  <div className="tab-content">
                                    <h3>UGC Notifications</h3>

                                    <div style={{ overflowX: "auto" }}>
                                      <table className="table">
                                        <tbody>
                                          <tr>
                                            <td>
                                              {" "}
                                              <Link href="./assets/files/UGC_20240319151157_1.pdf">
                                                Precaution to be taken by the
                                                students before enrolling in
                                                Programmes offered under Open &
                                                Distance Learning (ODL) and/or
                                                Online Learning (OL) mode -{" "}
                                                <i
                                                  className="icofont-file-pdf"
                                                  style={{
                                                    fontSize: "22px",
                                                    color: "red",
                                                  }}
                                                ></i>
                                                <br />
                                                
                                                <p>
                                                 
                                                </p>
                                              </Link>
                                            </td>
                                            <td>
                                               Publication Date: 19 March
                                                  2024
                                            </td>
                                          </tr>
                                          <tr>
                                            <td>
                                            <Link href="./assets/files/notifications/UGC-Approval.pdf">
                                               CHARUSAT UGC Approval{" "}
                                                <i
                                                  className="icofont-file-pdf"
                                                  style={{
                                                    fontSize: "22px",
                                                    color: "red",
                                                  }}
                                                ></i>
                                                <br />

                                               
                                              </Link>
                                              </td>
                                              <td></td>
                                              </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>
                                </Tab>
                                <Tab eventKey="aicte" title="AICTE">
                                  <div className="tab-content">
                                    <h3>AICTE Notifications</h3>
                                  </div>
                                </Tab>
                              </Tabs>
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
        </div>
      </div>
      <style>
{`
  .notification-link {
    display: block;
    text-decoration: none;
    color: #333;
    padding: 10px;
    transition: all 0.3s ease;
  }

  .notification-link:hover {
    background: #f8f9fa;
    transform: translateX(5px);
  }

  .notification-title {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .new-badge {
    background: #ff4d00;
    color: white;
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 600;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% { opacity: 1; }
    50% { opacity: 0.6; }
    100% { opacity: 1; }
  }

  .icofont-newspaper {
    margin-left: 10px;
  }

  @media (max-width: 768px) {
    .notification-title {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`}
</style>
    </div>
    
  );
}

export default Notifications;
