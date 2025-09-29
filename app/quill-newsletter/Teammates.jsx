import React from "react";
import { Row, Col } from "react-bootstrap";

const teammates = [
  {
    name: "Marissa Clark",
    role: "Making energy visible with her practical and friendly outlook. Quick-witted and passionate team builder.",
    img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=400&facepad=2",
    color: "#ff4d00"
  },
  {
    name: "Marissa Clark",
    role: "Firm & goal-driven. A soccer enthusiast, always ready for a soccer game or a brainstorming session.",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=400&h=400&facepad=2",
    color: "#ff4d00"
  },
  {
    name: "Michael Phillips",
    role: "Likes hiking, reading & history books, and engaging in funny outdoor activities.",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=400&h=400&facepad=2",
    color: "#ff4d00"
  },
  {
    name: "Nellie Hart",
    role: "Flexible, always ready to help. Loves music, arts & crafts, and is a keen observer of details.",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&h=400&facepad=2",
    color: "#ff4d00"
  }
];

const Teammates = () => (
  <div className="new-teammates-section">
    <div className="teammates-header">
      <div className="teammates-title">OUR TEAMMATES</div>
    </div>
    <div className="teammates-intro">
      <span>
        Let’s give a warm welcome to our new employees and find out a couple of things about them:
      </span>
    </div>
    <Row className="gx-5 gy-4 teammates-grid">
      <Col md={4} xs={12} className="d-flex flex-column justify-content-center">
        <div className="teammate-card left-card mb-4">
          <div className="teammate-name" style={{ color: teammates[0].color }}>{teammates[0].name}</div>
          <div className="teammate-role">{teammates[0].role}</div>
        </div>
        <div className="teammate-card left-card">
          <div className="teammate-name" style={{ color: teammates[2].color }}>{teammates[2].name}</div>
          <div className="teammate-role">{teammates[2].role}</div>
        </div>
      </Col>
      <Col md={2} xs={6} className="d-flex flex-column align-items-center justify-content-center">
        <div className="teammate-img-block">
          <img src={teammates[0].img} alt={teammates[0].name} className="teammate-img mb-2" />
          <div className="teammate-img-name mobile-show" style={{ color: teammates[0].color }}>{teammates[0].name}</div>
        </div>
        <div className="teammate-img-block">
          <img src={teammates[2].img} alt={teammates[2].name} className="teammate-img" />
          <div className="teammate-img-name mobile-show" style={{ color: teammates[2].color }}>{teammates[2].name}</div>
        </div>
      </Col>
      <Col md={2} xs={6} className="d-flex flex-column align-items-center justify-content-center">
        <div className="teammate-img-block">
          <img src={teammates[1].img} alt={teammates[1].name} className="teammate-img mb-2" />
          <div className="teammate-img-name mobile-show" style={{ color: teammates[1].color }}>{teammates[1].name}</div>
        </div>
        <div className="teammate-img-block">
          <img src={teammates[3].img} alt={teammates[3].name} className="teammate-img" />
          <div className="teammate-img-name mobile-show" style={{ color: teammates[3].color }}>{teammates[3].name}</div>
        </div>
      </Col>
      <Col md={4} xs={12} className="d-flex flex-column justify-content-center align-items-end">
        <div className="teammate-card right-card mb-4">
          <div className="teammate-name" style={{ color: teammates[1].color }}>{teammates[1].name}</div>
          <div className="teammate-role">{teammates[1].role}</div>
        </div>
        <div className="teammate-card right-card">
          <div className="teammate-name" style={{ color: teammates[3].color }}>{teammates[3].name}</div>
          <div className="teammate-role">{teammates[3].role}</div>
        </div>
      </Col>
    </Row>
    <style jsx>{`
      .new-teammates-section {
        background: #232323;
        color: #fff;
        border-radius: 16px;
        padding: 2.5rem 2rem 2rem 2rem;
        margin: 3rem 0 0 0;
        box-shadow: 0 4px 24px rgba(0,0,0,0.12);
        position: relative;
      }
      .teammates-header {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 1.5rem;
      }
      .teammates-title {
        background: #ff4d00;
        color: #fff;
        font-weight: 600;
        font-size: 1.1rem;
        padding: 0.5rem 1.5rem;
        border-radius: 4px 4px 0 0;
        letter-spacing: 1px;
      }
      .teammates-intro {
        margin-bottom: 2rem;
        font-size: 1.1rem;
        color: #fff;
        font-weight: 400;
      }
      .teammates-grid {
        margin-top: 0.5rem;
      }
      .teammate-card {
        background: transparent;
        padding: 0.5rem 0;
        max-width: 260px;
      }
      .teammate-name {
        font-weight: 700;
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
        letter-spacing: 0.5px;
        word-break: break-word;
      }
      .teammate-role {
        font-size: 0.98rem;
        color: #ccc;
        line-height: 1.5;
        word-break: break-word;
      }
      .teammate-img-block {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 1rem;
      }
      .teammate-img {
        width: 140px;
        height: 140px;
        object-fit: cover;
        border-radius: 8px;
        box-shadow: 0 2px 12px rgba(0,0,0,0.18);
        background: #333;
      }
      .teammate-img-name {
        font-weight: 700;
        font-size: 1rem;
        margin-top: 0.5rem;
        letter-spacing: 0.5px;
        text-align: center;
      }
      .left-card {
        text-align: left;
      }
      .right-card {
        text-align: right;
      }
      .mobile-show {
        display: none;
      }
      @media (max-width: 1200px) {
        .teammates-grid > .col-md-4,
        .teammates-grid > .col-md-2 {
          flex: 0 0 50%;
          max-width: 50%;
        }
      }
      @media (max-width: 992px) {
        .new-teammates-section {
          padding: 2rem 1rem;
        }
        .teammates-grid > .col-md-4,
        .teammates-grid > .col-md-2 {
          flex: 0 0 100%;
          max-width: 100%;
        }
        .teammates-grid {
          flex-direction: column !important;
        }
        .teammate-img {
          width: 120px;
          height: 120px;
        }
        .teammate-card {
          max-width: 100%;
        }
        .d-flex.align-items-end {
          align-items: flex-start !important;
        }
      }
      @media (max-width: 768px) {
        .new-teammates-section {
          padding: 1.2rem 0.5rem;
        }
        .teammates-header {
          flex-direction: column;
          gap: 0.5rem;
        }
        .teammates-grid {
          flex-direction: column !important;
        }
        .teammates-grid > .col-md-4,
        .teammates-grid > .col-md-2 {
          flex: 0 0 100%;
          max-width: 100%;
        }
        .teammate-img {
          width: 90px;
          height: 90px;
        }
        .teammate-card {
          max-width: 100%;
        }
        .d-flex.align-items-end {
          align-items: flex-start !important;
        }
        .teammate-img-block {
          margin-bottom: 1.5rem;
        }
        .mobile-show {
          display: block;
        }
      }
    `}</style>
  </div>
);

export default Teammates;