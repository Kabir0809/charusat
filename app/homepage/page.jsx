"use client";
import { Fragment } from "react";

import Banner from "@/components/section/banner-5";
import AwardsMarquee from "@/components/section/Recognition";
import About from "@/components/section/about";
import Event from "@/components/section/event";
import VisionMission from "@/components/section/MissionVission.jsx";
import Faculties from "@/components/section/Faculties";
import Intiatives from "@/components/section/initiatives";
import Collaboration from "@/components/section/collaboration";
import AchievementThree from "@/components/section/achievement-3";
import ClientsThree from "@/components/section/WPS";
import Testimonials from "@/components/section/testimonials";
import AboutUs from '@/components/section/aboutus.jsx';
import Scalers from "@/components/section/scalers.jsx";
import Recruitment from "@/components/section/recruiters.jsx";

export default function HomepagePreview() {
  return (
    <Fragment>
      <style jsx global>{`
        /* Grid Background - Only for Homepage */
        .homepage-wrapper {
          position: relative;
          min-height: 100vh;
        }

        .homepage-wrapper::before {
          content: "";
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #fafafa;
          background-image: 
            linear-gradient(rgba(0, 0, 0, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.07) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
          z-index: -1;
        }
      `}</style>

      <div className="homepage-wrapper">
        <Banner />
        <AwardsMarquee />
        <AboutUs />
        {/* <About /> */}
        {/* <Event /> */}
        <VisionMission />
        <Faculties />
        <Scalers />
        <Intiatives />
        <Collaboration />
        {/* <AchievementThree /> */}
        {/* <ClientsThree /> */}
        <Testimonials />
        <Recruitment />
      </div>
    </Fragment>
  );
}