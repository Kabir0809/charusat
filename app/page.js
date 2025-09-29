"use client";
import { Fragment } from "react";
import Faculties from "@/components/section/Faculties";
import About from "@/components/section/about";
import AchievementThree from "@/components/section/achievement-3";
import Banner from "@/components/section/banner-5";
import ClientsThree from "@/components/section/WPS";
import Collaboration from "@/components/section/collaboration";
import Event from "@/components/section/event";
import Intiatives from "@/components/section/initiatives";
// import NewsFrontPage from "@/components/section/newsFrontPage";
import Sponsor from "@/components/section/sponsor";
import VisionMission from "@/components/section/MissionVission.jsx";
import GenuinEmbed from "@/components/section/Social_Connect";
// import Loader from "./Loader";
// import "bootstrap/dist/css/bootstrap.min.css";
//import { useRouter, usePathname } from "next/navigation";
//import Link from "next/link";

const Home = () => {
  // const pathname = usePathname();
  // const router = useRouter();

  // useEffect(() => {
  //   if (pathname !== "/" || pathname !== "/not-found") {
  //     router.push(pathname);
  //     console.log("redirecting tom ", pathname);
  //   }
  // }, [pathname]);
const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "CHARUSAT University",
  "alternateName": "Charotar University of Science and Technology",
  "url": "https://charusat.ac.in",
  "logo": "https://charusat.ac.in/images/logo.png",
  "sameAs": [
    "https://www.facebook.com/thecharusat",
    "https://twitter.com/charusat",
    "https://www.linkedin.com/school/charusat"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Charotar University of Science and Technology",
    "addressLocality": "Changa",
    "addressRegion": "Gujarat",
    "postalCode": "388421",
    "addressCountry": "IN"
  }
};
  return (
    <Fragment>
      <title>CHARUSAT | NAAC A+ Grade | UGC Approved | Top University in Gujarat | Best Private University in Gujarat </title>
      <head>
        <script type="application/ld+json">
  {JSON.stringify(structuredData)}
</script>
      </head>
      <meta httpEquiv="Content-Type" content=" text/html; charset=utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="Charusat University is one of the Best University in Gujarat located in Changa- Anand. Charusat University provides best education in various domains like Engineering, Pharmacy, Business management, Applied Science, Nursing, Physiotherapy, Computer application, Paramedical Courses and many more."
      />
      <meta name="keywords" content="
      NAAC A+ Grade University,
      NAAC A+ University in Gujarat,
    best university in India,
    best university in gujarat,
    top university in gujarat,
    top 10 university in gujarat,
    Best University in Gujarat,
    best university in gujarat for engineering,
    best university in gujarat for pharmacy,
    best university in gujarat for management,
    best university in gujarat for nursing,
    best university in gujarat for physiotherapy,
    best university in gujarat for computer application,
    best university in gujarat for applied science,
    best university in gujarat for paramedical courses,
    best engineering college in gujarat,
    top private university in gujarat,
    CHARUSAT university ranking,
    engineering admission gujarat,
    top placement university gujarat,
    best pharmacy college gujarat,
    CHARUSAT Changa,
  " />
      <meta name="robots" content="index" />
      <meta name="robots" content="follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="google" content="translate" />
      <meta name="google" content="nopagereadaloud" />
      <meta
        name="google-site-verification"
        content="iHUSfPMMFQRCIgicrAlVofHWVhWwQsDgTzGNUC7WzMk"
      />
      {/* Open Graph Tags */}
  <meta property="og:type" content="website" />
  <meta property="og:title" content="CHARUSAT - NAAC A+ Grade Leading University in Gujarat | Engineering, Medical & Management" />
  <meta property="og:description" content="Join Gujarat's top-ranked university for Engineering, Medical, Pharmacy & Management studies. World-class campus, industry collaborations & assured placements." />
  <meta property="og:image" content="/images/charusat-campus.jpg" />
  <meta property="og:url" content="https://charusat.ac.in" />
      {/* Additional SEO Tags */}
  <link rel="canonical" href="https://charusat.ac.in" />
  <meta name="robots" content="index, follow, max-image-preview:large" />

      <meta name="author" content="CHARUSAT Web Team" />

      {/* <Header /> */}

      <Banner />
      <About />
      <Event />
      <VisionMission />
      {/* <NewsFrontPage /> */}
      {/* <Messages /> */}
      <Faculties />
      <Intiatives />
      {/* <Goals /> */}
      {/* <Instructor /> */}
      <Collaboration />
      <AchievementThree />
      {/* <Achievement2/> */}
      {/* <Event /> */}
      {/* <Publication/> */}
      {/* <Blog />            
            <Clients /> */}
      <ClientsThree />
      {/* <Feature />
            <Category />
            <Course />
            <CourseFour />
            <Instructor />
            <ClientsThree />
            <Student />
            <Achievement />
            <AboutTwo /> */}
      {/* <Placement/> */}
      <Sponsor />
      {/* <GenuinEmbed />    */}
      {/* <NoSSR /> */}
      {/* <Contact/> */}
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Home;
