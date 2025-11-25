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

export default function HomepagePreview() {
  return (
    <Fragment>
      <Banner />
      <AwardsMarquee />
      <About />
      <Event />
      <VisionMission />
      <Faculties />
      <Intiatives />
      <Collaboration />
      <AchievementThree />
      <ClientsThree />
    </Fragment>
  );
}