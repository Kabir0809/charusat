//import { Link } from "react-router-dom";

const title = "CoE Cycle-2";

const commentList = [
  {
    desc: "Application Data",
    link:"assets/files/CoE/CHARUSAT_ 20240017_Application FIle.pdf"
  },
  
];

const CoE2 = () => {
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

export default CoE2;
