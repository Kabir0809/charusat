"use client";
import React from "react";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { GoogleTagManager } from "@next/third-parties/google";

import Header from "../components/Header";
// import "swiper/css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/css/icofont.min.css";
import "@/css/animate.css";
import "@/css/style.css";
import "@/css/megaMenu.css";
import "@/App.css";
import PopupModal from "@/components/popup";
import Announcement from "@/components/Announcements";
import Script from "next/script";
import Footer from "@/components/Footer";

import Link from "next/link";

const metadata = {
  title: "CHARUSAT | NAAC A+ Grade | UGC Approved | Best Private University in Gujarat",
  description:
    "Charusat University in Changa-Anand, Gujarat, offers top programs in Engineering, Pharmacy, Management, Applied Science, Nursing, Physiotherapy, Computer Applications, Paramedical & more. Explore cutting-edge curriculum, dedicated faculty, and vibrant campus life at one of Gujarat’s top universities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>{metadata.title}</title>
      <link rel="shortcut icon" href="./Logo.png"></link>
      <head>
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '534415879250688');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=534415879250688&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body>
        <noscript>
          <iframe
            title="Google Tag Manager (noscript)"
            src="https://www.googletagmanager.com/ns.html?id=G-MTLWLWPDGC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <GoogleTagManager gtmId="G-MTLWLWPDGC" />

        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11303583178"
        ></script>
        <script>
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11303583178');
            `}
        </script>

        <div>
          <Header />
          {children}
          {/* <PopupModal /> */}
          {/* <div style={{ position: "relative" }}>
            <p
              className="subTitle-slider text_2 blinking-text"
              style={{
                color: "white",
                backgroundColor: "#FF4500",
                position: "fixed",
                bottom: "20%",
                right: "1%",
                zIndex: "1000",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              <Link
                href="assets/files/PHD/phd_charusat_2024_info.pdf"
                style={{ color: "white", textDecoration: "none" }}
                target="_blank"
              >
                Ph. D. Admission 2024-25 Info
              </Link>
            </p>

            <br />
            <p
              className="subTitle-slider text_2 blinking-text"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #FF8C00, #FF5733, #FF4500)", // Gradient background with shades of blue
                position: "fixed",
                bottom: "65%",
                right: "1%",
                zIndex: "1000",
                padding: "10px",
                borderRadius: "5px",
                color: "white", // Text color
              }}
            >
              <Link
                href="https://admission.charusat.ac.in/"
                style={{ color: "white", textDecoration: "none" }}
                target="_blank"
              >
                Admissions 2024-25
              </Link>
            </p>
            
          </div> */}

          <div className="fixed-div">
            {/* <a className="fixed-btn  " href="./careers ">
              Recruitment Advertisement - Open Positions
            </a> */}
            {/* <a
              className="fixed-btn  "
              href="https://admission.charusat.ac.in"
              target="_blank"
            >
              PhD Admission - January Intake-2025 - Apply Now &nbsp;&nbsp;
            </a>

            <br /> */}

            {/* <a
              className="fixed-btn  "
              href="https://www.youtube.com/live/4_VnwzRr220"
              target="_blank"
            >
              14<sup>th</sup> Convocation Live Streaming
            </a>
            <br />

            <a
              className="fixed-btn  "
              href="https://convocation.charusat.ac.in/"
              target="_blank"
            >
              14<sup>th</sup> Convocation Seating Arrangement
            </a>
            <br /> */}
            {/* <a
              className="fixed-btn  "
              href="https://www.youtube.com/live/hcmXS999Fzs"
              target="_blank"
            >
              SPOURAL-2025 Live Link{" "}
            </a>
            <br /> */}
            {/* <a
              className="fixed-btn  "
              href="https://icacs.charusat.ac.in/"
              target="_blank"
            >
              ICACS - Conference @CHARUSAT - Details
            </a>
            <br /> */}
            {/* <a
              className="fixed-btn  "
              href="https://forms.gle/DBNE5ww7kJp9xwvE8"
              target="_blank"
            >
              CHARUSAT Education Expo 2025 - Registration Form
            </a>
            <br /> */}
            <a
              className="fixed-btn  "
              href="http://admission.charusat.ac.in/"
              target="_blank"
            >
              Enquire Now - UG/PG/Phd Admission 2025
            </a>
            {/* <br/>
            <a
              className="fixed-btn  "
              href="https://livestatus.charusat.in"
              target="_blank"
            >
              MQ/NRI Quota Live Admission Status
            </a> */}
            {/* <br />
            <a
              className="fixed-btn  "
              href="/assets/files/Advertisement-other-event/Tender_for_providing_Housekeeping_and_Sanitation_services_at_CHARUSAT.pdf"
              target="_blank"
            >
              Tender for providing housekeeping & sanitation services at
              CHARUSAT
            </a> */}

            <br />
            {/* <a className="fixed-btn  "
              href="#"
              target="_blank">
            University is working between 9.00 am to 2.00 pm on Saturday, 24th May 2025 and remains closed on Sunday, 25th May 2025.
            </a>
            <br /> */}
            {/* <a className="fixed-btn  " href="#" target="_blank">
              {" "}
              last date for submitting the Management Quota (MQ) and NRI Quota
              Admission Inquiry Form at CHARUSAT is 30th May 2025.
            </a> */}
            {/* <a
              className="fixed-btn  "
              href="../assets/files/Advertisement-other-event/FAQ_MPT_2025_26.pdf"
              target="_blank"
            >
              MPT Admission Open for 2025 - Details
            </a>
            <br />
            <a
              className="fixed-btn  "
              href="http://admission.charusat.ac.in/"
              target="_blank"
            >
              MPT Admission Open for 2025 - Apply Here
            </a> */}
            {/* <p className="text-white fw-bold h5 animate-charcter">
              Admission 2024
            </p> */}
            {/*
            <a
              className="fixed-btn blinking-text"
              href="http://136.233.130.146/"
              target="_blank"
            >
              B. Tech. MQ/NRI Quota Admission Status
            </a>
            <a
              className="fixed-btn "
              href="assets/files/Call-Letter-2024-25.pdf"
              target="_blank"
            >
              Call Letter for B. Tech. Admission 2024
            </a>
            &nbsp; */}
            {/* <a
              className="fixed-btn"
              href="assets/files/PHD/phd_charusat_2024_info.pdf"
              target="_blank"
            >
              Ph. D. Admission Info
            </a> */}
          </div>

          {/* Announcement marquee starts here */}
          <Announcement />
          {/*           
          <div className="announcements-wrapper">
          <div className="announcement-container">
    <div className="announcement-label">
      <span className="announcement-icon">📢</span>
      Announcements
    </div>
    <div className="marquee-wrapper">
            <marquee
              behavior="scroll"
              direction="left"
              className="marquee-text"
              scrollamount="6"
            > 
              
              ||&nbsp;&nbsp;
              
              <a
                href="/assets/files/Advertisement-other-event/Tender_for_providing_Housekeeping_and_Sanitation_services_at_CHARUSAT.pdf"
                target="_blank"
                className="text-white"
                onMouseOver={(e) => e.target.parentElement.stop()}
                onMouseOut={(e) => e.target.parentElement.start()}
              >
              Tender for providing housekeeping & sanitation services at CHARUSAT
              </a>
              &nbsp;&nbsp; 
               
              ||&nbsp;&nbsp;<a
                href="assets/files/Advertisement-other-event/JRF-BDIPS-Advertisement.pdf"
                target="_blank"
                className="text-white"
                onMouseOver={(e) => e.target.parentElement.stop()}
                onMouseOut={(e) => e.target.parentElement.start()}
              > 
                Advertisement for the Post of Junior Research Fellow (JRF) under GSBTM funded project
                </a>&nbsp;&nbsp; || &nbsp;&nbsp;
                <a
                href="assets/files/Advertisement-other-event/MPT_FAQ_2025.pdf"
                target="_blank"
                className="text-white"
                onMouseOver={(e) => e.target.parentElement.stop()}
                onMouseOut={(e) => e.target.parentElement.start()}
              >
                FAQ for MPT Admission 2025
                </a>&nbsp;&nbsp; || &nbsp;&nbsp;
                <a
                href="assets/files/Advertisement-other-event/MTIN_admission.pdf"
                target="_blank"
                className="text-white"
                onMouseOver={(e) => e.target.parentElement.stop()}
                onMouseOut={(e) => e.target.parentElement.start()}
              >
                M.sc Nursing and PBBN Admission Open for 2025
                </a>&nbsp;&nbsp; || &nbsp;&nbsp;

              
            </marquee>
          </div>
          </div>
          </div> */}
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
