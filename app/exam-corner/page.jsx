'use client';
import { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import EventCalendar from "@/components/calendar/EventCalendar";
import { eventsData } from "@/data/calendarEvents";

const sliderImages = [
  { id: 1, url: "assets/images/exam/exam1.jpeg", title: "Multi Utility Building" },
  { id: 2, url: "assets/images/exam/exam2.webp", title: "Facility 1" },
  { id: 3, url: "assets/images/exam/exam1.jpeg", title: "Facility 2" },
  { id: 4, url: "assets/images/exam/exam2.webp", title: "Facility 3" },
];

const menuItems = [
  { key: "exam-calendar", label: "Exam Calendar", icon: "icofont-calendar" },
  { key: "coe-message", label: "COE Message", icon: "icofont-file-text" },
  { key: "exam-notifications", label: "Exam Notifications", icon: "icofont-bell" },
  { key: "exam-schedules", label: "Exam Schedules", icon: "icofont-clock-time" },
  { key: "rules-regulations", label: "Rules & Regulations", icon: "icofont-book-alt" },
  { key: "results", label: "Results", icon: "icofont-award" },
  { key: "transcripts", label: "Transcripts & Documents", icon: "icofont-file-document" },
];

const contentData = {
  "exam-calendar": {
    title: "Exam Calendar",
    content: "View the complete exam calendar for the current semester including exam dates, holidays, and important deadlines."
  },
  "coe-message": {
    title: "COE Message",
    content: "Message from the Controller of Examinations regarding examination procedures and guidelines."
  },
  "exam-notifications": {
    title: "Exam Notifications",
    content: "Latest notifications and updates regarding upcoming examinations and schedule changes."
  },
  "exam-schedules": {
    title: "Exam Schedules",
    content: "Detailed examination schedules for all programs and semesters."
  },
  "rules-regulations": {
    title: "Rules & Regulations",
    content: "Examination rules, regulations, and code of conduct for students."
  },
  "results": {
    title: "Results",
    content: "Access your examination results and grade reports."
  },
  "transcripts": {
    title: "Transcripts & Documents",
    content: "Download official transcripts, certificates, and other examination-related documents."
  }
};

export default function ExamSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeMenu, setActiveMenu] = useState("exam-calendar");

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  return (
    <div className="exam-section">
      {/* Image Slider */}
      <div className="slider-container">
        <div className="slider-header">
          <h2>Pioneer in Paperless Exams in the State</h2>
        </div>
        <div className="slider-wrapper">
          <button className="slider-btn prev" onClick={prevSlide}>
            <i className="icofont-curved-left"></i>
          </button>
          <div className="slider-content">
            {sliderImages.map((img, idx) => (
              <div
                key={img.id}
                className={`slide ${idx === activeSlide ? "active" : ""}`}
              >
                <img src={img.url} alt={img.title} />
              </div>
            ))}
          </div>
          <button className="slider-btn next" onClick={nextSlide}>
            <i className="icofont-curved-right"></i>
          </button>
        </div>
        <div className="slider-dots">
          {sliderImages.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${idx === activeSlide ? "active" : ""}`}
              onClick={() => setActiveSlide(idx)}
            />
          ))}
        </div>
      </div>

      <div className="exam-content-section py-4">
        <Container className="bg-white p-4 rounded-3 shadow-sm">
          {/* Title - same as media-center */}
          <h2 className="header-title mb-4">Examination Section</h2>
          
          <Row>
            {/* Sidebar - Col md={3} like media-center */}
            <Col md={3} className="mb-3">
              <div className="exam-menu-card">
                <nav className="exam-nav">
                  {menuItems.map((item, idx) => (
                    <div key={item.key}>
                      <button
                        className={`exam-nav-btn${activeMenu === item.key ? " active" : ""}`}
                        onClick={() => setActiveMenu(item.key)}
                        type="button"
                      >
                        <i className={`${item.icon} icon`}></i>
                        <span>{item.label}</span>
                      </button>
                      {idx < menuItems.length - 1 && <hr className="exam-nav-separator" />}
                    </div>
                  ))}
                </nav>
              </div>
            </Col>

            {/* Content Area - Col md={9} like media-center */}
            <Col md={9}>
              {activeMenu === "exam-calendar" ? (
                <div className="exam-content-area">
                  <h3 className="content-heading">{contentData[activeMenu].title}</h3>
                  <p className="content-description">{contentData[activeMenu].content}</p>
                  <div className="calendar-wrapper">
                    <EventCalendar
                      events={eventsData.filter(e => e.type?.toLowerCase() === "exam")}
                      title="Exam Calendar"
                      showTitle={false}
                      variant="embedded"
                      hideExamOnSundaysAndHolidays={false}
                    />
                  </div>
                </div>
              ) : activeMenu === "coe-message" ? (
                <div className="exam-content-area">
                  <h3 className="content-heading">{contentData[activeMenu].title}</h3>
                  <p className="content-description">{contentData[activeMenu].content}</p>
                  <div className="director-card">
                    <div className="director-header">
                      <div className="director-title">
                        <h4>Dr. Abhilash Shukal</h4>
                        <p className="designation">OSD Exam Section</p>
                      </div>
                    </div>
                    
                    <div className="message-content">
                      <p className="greeting">Dear Students,</p>
                      
                      <p className="message">
                        Welcome to the Examination Section of CHARUSAT. As the Controller of Examinations, 
                        it is my privilege to oversee the examination processes that uphold the academic 
                        standards and integrity of our esteemed institution.
                      </p>
                      
                      <p className="message">
                        Our examination system is designed to ensure fairness, transparency, and efficiency 
                        in evaluating your academic performance. We have embraced cutting-edge technology 
                        to implement paperless examinations, making CHARUSAT a pioneer in the state. This 
                        initiative not only promotes environmental sustainability but also enhances the 
                        examination experience through improved security and faster result processing.
                      </p>
                      
                      <p className="message">
                        I encourage all students to familiarize themselves with the examination rules, 
                        schedules, and procedures outlined in this section. Your academic success is our 
                        priority, and we are committed to providing you with a robust examination framework 
                        that supports your learning journey.
                      </p>

                      <p className="message">
                        Should you have any queries or require assistance, please do not hesitate to reach 
                        out to the examination office. We are here to support you throughout your academic 
                        endeavors.
                      </p>

                      <p className="message closing">
                        Best wishes for your examinations and academic success.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="exam-content-area">
                  <h3 className="content-heading">{contentData[activeMenu].title}</h3>
                  <p className="content-description">{contentData[activeMenu].content}</p>
                  <div className="content-placeholder">
                    <p>Content for {contentData[activeMenu].title} will be displayed here.</p>
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>

      <style jsx>{`
        .exam-section {
          background: #f8f9fa;
          min-height: 100vh;
          font-family: 'Segoe UI', Arial, sans-serif;
        }

        /* Slider Styles */
        .slider-container {
          background: linear-gradient(135deg, #004e92, #0066b3);
          padding: 2rem 0;
        }

        .slider-header {
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .slider-header h2 {
          color: white;
          font-size: 1.8rem;
          font-weight: 600;
          margin: 0;
          text-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .slider-wrapper {
          max-width: 1500px;
          margin: 0 auto;
          position: relative;
          height: 400px;
          padding: 0 3rem;
        }

        .slider-content {
          position: relative;
          height: 100%;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        }

        .slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
        }

        .slide.active {
          opacity: 1;
        }

        .slide img {
          width: 100%;
          height: 100%;
          object-fit: fill;
        }

        .slider-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.9);
          border: none;
          border-radius: 50%;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
          z-index: 10;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .slider-btn:hover {
          background: white;
          transform: translateY(-50%) scale(1.1);
        }

        .slider-btn.prev {
          left: 0.5rem;
        }

        .slider-btn.next {
          right: 0.5rem;
        }

        .slider-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1rem;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255,255,255,0.5);
          border: none;
          cursor: pointer;
          transition: all 0.3s;
        }

        .dot.active {
          background: white;
          width: 28px;
          border-radius: 5px;
        }

        /* Main Content Section - EXACTLY like media-center */
        .exam-content-section {
          background: #fff8e7;
          min-height: 80vh;
        }

        .header-title {
          color: white;
          background: #ff4d00;
          padding: 1rem;
          border-radius: 10px;
          text-align: center;
          font-weight: bold;
          font-size: 2rem;
          box-shadow: 0 4px 6px rgba(0,0,0,0.08);
        }

        .exam-menu-card {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0,78,146,0.06);
          border: 1.5px solid #e5eaf2;
          padding: 1.2rem 0.5rem;
          font-family: 'Segoe UI', Arial, sans-serif;
          margin-bottom: 1.5rem;
          position: sticky;
          top: 2rem;
        }

        .exam-nav {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .exam-nav-btn {
          width: 100%;
          background: none;
          border: none;
          outline: none;
          text-align: left;
          padding: 1rem 1.2rem;
          font-size: 1.05rem;
          font-weight: 600;
          color: #004e92;
          font-family: inherit;
          letter-spacing: 0.3px;
          border-left: 4px solid transparent;
          border-radius: 0;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .exam-nav-btn .icon {
          font-size: 22px;
          flex-shrink: 0;
          width: 24px;
          text-align: center;
          line-height: 1;
          transition: transform 0.2s ease;
        }

        .exam-nav-btn span {
          flex: 1;
          line-height: 1.4;
        }

        .exam-nav-btn.active,
        .exam-nav-btn:hover {
          background: #f5f8ff;
          color: #ff4d00;
          border-left: 4px solid #ff4d00;
        }

        .exam-nav-btn.active .icon,
        .exam-nav-btn:hover .icon {
          transform: scale(1.1);
        }

        .exam-nav-separator {
          border: none;
          border-top: 1.5px solid #e5eaf2;
          margin: 0 0 0 1.2rem;
          width: calc(100% - 1.2rem);
        }

        /* Content Area */
        .exam-content-area {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
        }

        .content-heading {
          color: #004e92;
          font-size: 1.8rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .content-description {
          color: #555;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .content-placeholder {
          background: #f8f9fa;
          border: 2px dashed #ddd;
          border-radius: 8px;
          padding: 3rem;
          text-align: center;
          color: #888;
        }

        /* COE Message Styles */
        .director-card {
          background: white;
          border-radius: 15px;
          padding: 2rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border-left: 5px solid #0066b3;
        }

        .director-header {
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #f0f0f0;
        }

        .director-title h4 {
          color: #0066b3;
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .designation {
          color: #666;
          font-style: italic;
          margin-bottom: 0;
        }

        .message-content {
          color: #333;
          line-height: 1.8;
        }

        .greeting {
          font-weight: 600;
          color: #0066b3;
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }

        .message {
          margin-bottom: 1.2rem;
          text-align: justify;
          font-size: 1rem;
        }

        .message.closing {
          margin-top: 2rem;
          font-weight: 500;
          color: #0066b3;
        }

        /* Calendar wrapper */
        .calendar-wrapper {
          margin-top: 1.5rem;
        }

        .calendar-wrapper :global(.calendar-outer) {
          background: transparent !important;
          padding: 0 !important;
          min-height: auto !important;
        }

        .calendar-wrapper :global(.calendar-flex) {
          gap: 2rem !important;
        }

        .calendar-wrapper :global(.container) {
          padding: 0 !important;
          max-width: 100% !important;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .header-title {
            font-size: 1.5rem;
            padding: 0.8rem;
          }
          .exam-menu-card {
            position: static;
            padding: 0.7rem 0.2rem;
          }
        }

        @media (max-width: 768px) {
          .slider-header h2 {
            font-size: 1.3rem;
          }

          .slider-wrapper {
            height: 200px;
            padding: 0 2rem;
          }

          .slider-btn {
            width: 36px;
            height: 36px;
          }

          .header-title {
            font-size: 1.3rem;
            padding: 0.7rem;
          }

          .exam-content-area {
            padding: 1.5rem;
          }

          .director-card {
            padding: 1.5rem;
          }

          .director-title h4 {
            font-size: 1.3rem;
          }

          .message {
            font-size: 0.95rem;
          }
        }

        @media (max-width: 700px) {
          .exam-menu-card {
            border-radius: 8px;
            padding: 0.5rem 0.1rem;
            margin-bottom: 1rem;
          }

          .exam-nav {
            flex-direction: row;
            overflow-x: auto;
            gap: 0.5rem;
            padding: 0.3rem;
          }

          .exam-nav-btn {
            min-width: 160px;
            text-align: center;
            padding: 0.8rem 0.6rem;
            border-left: none;
            border-bottom: 3px solid transparent;
            border-radius: 6px;
            justify-content: center;
            gap: 0.6rem;
          }

          .exam-nav-btn .icon {
            font-size: 20px;
            width: auto;
          }

          .exam-nav-btn span {
            font-size: 0.95rem;
          }

          .exam-nav-btn.active,
          .exam-nav-btn:hover {
            border-left: none;
            border-bottom: 3px solid #ff4d00;
            background: #f5f8ff;
          }

          .exam-nav-separator {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}