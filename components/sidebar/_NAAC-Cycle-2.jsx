import { Fragment } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Undertaking from "@/public/assets/files/Accreditation/Undertaking.pdf";
import RTI from "@/public/assets/files/Accreditation/RTI_Declaration.pdf";
import IIQA from "@/public/assets/files/Accreditation/CHAROTAR_UNIVERSITY_OF_SCIENCE_AND_TECHNOLOGY_iiqa.pdf";
import SSR2 from "@/public/assets/files/Accreditation/SSR-C2.pdf";
import NAACCertificate from "@/public/assets/files/Accreditation/NAAC_A+_Certificate-Cycle-2.pdf";

const title = "NAAC Cycle-2";

const Cycle2 = () => {
  const commentList = [
    {
      desc: "Undertaking",
      link: Undertaking,
    },
    {
      desc: "RTI Declaration",
      link: RTI,
    },
    {
      desc: "IIQA",
      link: IIQA,
    },
    // {
    //     desc: 'DVV Clarifications',
    //     link: 'http://charusat.ac.in/dvv_clarifications.php',
    // },
    {
      desc: "SSR Cycle2",
      link: SSR2,
    },
    {
      desc: "NAAC Certificate",
      link: NAACCertificate,
    },
    {
      desc: "NAAC AQAR 2020-2021",
      link: "https://heyzine.com/flip-book/0e2d6e399a.html",
    },
    {
      desc: "NAAC AQAR 2021-2022",
      link: "https://heyzine.com/flip-book/1f3c6b09b6.html",
    },
    {
      desc: "NAAC AQAR 2022-2023",
      link: "https://heyzine.com/flip-book/06e055ab10.html",
    },
    
  ];

  return (
    <Fragment>
      <div className="comments">
        <h4 className="title-border">{title}</h4>
        <ul className="comment-list">
          {commentList.map((val, i) => (
            <li className="comment" key={i}>
              <div className="com-content">
                <div className="com-title">
                  <div className="com-title-meta lab-ul">
                    {/* Use Link component for internal links, and <a> for external links */}

                    <Link href={val.link}>
                      <span>{val.desc}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default dynamic(() => Promise.resolve(Cycle2), { ssr: false });
