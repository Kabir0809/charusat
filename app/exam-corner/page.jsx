'use client';
import { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar, FileText, Bell, Clock, BookOpen, Award, FileCheck } from "lucide-react";
import {Container } from 'react-bootstrap';
import EventCalendar from "@/components/calendar/EventCalendar";
import { eventsData } from "@/data/calendarEvents";

const sliderImages = [
  { id: 1, url: "assets/images/exam/exam1.jpeg", title: "Multi Utility Building" },
  { id: 2, url: "assets/images/exam/exam2.webp", title: "Facility 1" },
  { id: 3, url: "assets/images/exam/exam1.jpeg", title: "Facility 2" },
  { id: 4, url: "assets/images/exam/exam2.webp", title: "Facility 3" },
];

const menuItems = [
  { key: "academic-calendar", label: "Academic Calendar", icon: Calendar },
  { key: "coe-message", label: "COE Message", icon: FileText },
  { key: "exam-notifications", label: "Exam Notifications", icon: Bell },
  { key: "exam-schedules", label: "Exam Schedules", icon: Clock },
  { key: "rules-regulations", label: "Rules & Regulations", icon: BookOpen },
  { key: "results", label: "Results", icon: Award },
  { key: "transcripts", label: "Transcripts & Documents", icon: FileCheck },
];

const contentData = {
  "academic-calendar": {
    title: "Academic Calendar",
    content: "View the complete academic calendar for the current semester including exam dates, holidays, and important deadlines."
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
  const [activeMenu, setActiveMenu] = useState("academic-calendar");

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
            <ChevronLeft size={28} />
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
            <ChevronRight size={28} />
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

      {/* Main Content Area */}
      <Container className="bg-white p-4 rounded-3 shadow-sm">
      <div className="">
        <div className="">
          <div className="layout">
            {/* Sidebar */}
            <aside className="sidebar">
              <div className="sidebar-card">
                <nav className="sidebar-nav">
                  {menuItems.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.key}>
                        <button
                          className={`sidebar-btn ${activeMenu === item.key ? "active" : ""}`}
                          onClick={() => setActiveMenu(item.key)}
                        >
                          <Icon size={20} className="icon" />
                          <span>{item.label}</span>
                        </button>
                        {idx < menuItems.length - 1 && <hr className="separator" />}
                      </div>
                    );
                  })}
                </nav>
              </div>
            </aside>

            {/* Content Area */}
            <main className="main-content">
                <div className="content-card">
                    {activeMenu === "academic-calendar" ? (
                    <EventCalendar
                        events={eventsData.filter(e => e.type?.toLowerCase() === "exam")}
                        title="Exam Calendar"
                        hideExamOnSundaysAndHolidays={false} // set true if you want to hide exams on Sundays/holidays
                    />
                    ) : (
                    <>
                        <h3>{contentData[activeMenu].title}</h3>
                        <p>{contentData[activeMenu].content}</p>
                        <div className="content-placeholder">
                        <p>Content for {contentData[activeMenu].title} will be displayed here.</p>
                        </div>
                    </>
                    )}
                </div>
            </main>

          </div>
        </div>
      </div>
        </Container>
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Contact Us</h4>
              <p>Email: examcell@charusat.ac.in</p>
              <p>Phone: +91 2697 265011</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <a href="#">University Website</a>
              <a href="#">Student Portal</a>
              <a href="#">Faculty Portal</a>
            </div>
            <div className="footer-section">
              <h4>Resources</h4>
              <a href="#">FAQ</a>
              <a href="#">Help Desk</a>
              <a href="#">Downloads</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 CHARUSAT. All rights reserved.</p>
          </div>
        </div>
      </footer>

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

        /* Content Area */
        .content-wrapper {
          padding: 3rem 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 2rem;
        }

        /* Sidebar Styles */
        .sidebar-card {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0,78,146,0.08);
          border: 1.5px solid #e5eaf2;
          padding: 1.2rem 0.5rem;
          position: sticky;
          top: 2rem;
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
        }

        .sidebar-btn {
          width: 100%;
          background: none;
          border: none;
          text-align: left;
          padding: 0.9rem 1.2rem;
          font-size: 1rem;
          font-weight: 600;
          color: #004e92;
          border-left: 4px solid transparent;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }

        .sidebar-btn .icon {
          flex-shrink: 0;
        }

        .sidebar-btn.active,
        .sidebar-btn:hover {
          background: #f5f8ff;
          color: #ff4d00;
          border-left: 4px solid #ff4d00;
        }

        .separator {
          border: none;
          border-top: 1.5px solid #e5eaf2;
          margin: 0 0 0 1.2rem;
          width: calc(100% - 1.2rem);
        }

        /* Main Content */
        .content-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          padding: 2rem;
        }

        .content-card h3 {
          color: #004e92;
          font-size: 1.8rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .content-card > p {
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

        /* Footer */
        .footer {
          background: linear-gradient(135deg, #004e92, #0066b3);
          color: white;
          padding: 3rem 0 1.5rem;
          margin-top: 3rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-section h4 {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .footer-section p,
        .footer-section a {
          color: rgba(255,255,255,0.9);
          text-decoration: none;
          display: block;
          margin-bottom: 0.5rem;
          transition: color 0.2s;
        }

        .footer-section a:hover {
          color: #fff;
          text-decoration: underline;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.2);
          padding-top: 1.5rem;
          text-align: center;
          color: rgba(255,255,255,0.8);
        }

        /* Responsive */
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

          .layout {
            grid-template-columns: 1fr;
          }

          .sidebar-card {
            position: static;
            padding: 0.7rem 0.2rem;
          }

          .sidebar-nav {
            flex-direction: row;
            overflow-x: auto;
            gap: 0.5rem;
          }

          .sidebar-btn {
            min-width: 180px;
            border-left: none;
            border-bottom: 3px solid transparent;
            justify-content: center;
          }

          .sidebar-btn.active,
          .sidebar-btn:hover {
            border-left: none;
            border-bottom: 3px solid #ff4d00;
          }

          .separator {
            display: none;
          }

          .content-card {
            padding: 1.5rem;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}