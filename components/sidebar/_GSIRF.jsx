import Link from "next/link";
import { Fragment } from "react";
import GSIRF2020 from "@/components/files/Accreditation/updated/GSIRF-2020.pdf";
import GSIRF2021 from "@/components/files/Accreditation/updated/GSIRF-2021.pdf";
import GSIRF2022 from "@/components/files/Accreditation/updated/GSIRF-2022-23.pdf";
import GSIRF2023 from "@/components/files/Accreditation/updated/GSIRF-2023.pdf";

const title = "Gujarat State Institutional Ranking Framework (GSIRF)";

const commentList = [
  {
    desc: "GSIRF 2023",
    link: GSIRF2023,
  },
  
  {
    desc: "GSIRF 2022",
    link: GSIRF2022,
  },
  {
    desc: "GSIRF 2021",
    link: GSIRF2021,
  },
  {
    desc: "GSIRF 2020",
    link: GSIRF2020,
  },
];

const GSIRF = () => {
  return (
    <Fragment>
      <div className="comments">
        <h4 className="title-border">{title}</h4>
        <ul className="comment-list">
          {commentList.map((val, i) => (
            <li className="comment" key={i}>
              {/* <div className="com-thumb">
                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />          
                    </div> */}
              <div className="com-content">
                <div className="com-title">
                  <div className="com-title-meta lab-ul">
                    {/* <h6>{val.name}</h6>
                                <span> {val.date} </span> */}
                    <Link href={val.link} className="csdc-left" target="_blank">
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

export default GSIRF;
