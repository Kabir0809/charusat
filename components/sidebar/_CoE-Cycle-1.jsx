//import { Link } from "react-router-dom";

const title = "CoE Cycle-1";

const commentList = [
  {
    desc: "Application Data",
    link:"https://charusat.ac.in/files/iqac/coe/CoEApplicationData.pdf"
  },
  {
    desc: "COE Certificate",
    link: "https://www.charusat.ac.in/_next/static/files/COE-Notification.pdf",
  },
  
];

const CoE1 = () => {
  return (
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
                  <a href={val.link} className="csdc-left">
                    <span>{val.desc}</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoE1;
