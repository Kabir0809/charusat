// import RepublicDayCamp from "../../files/news/Achievement_RDC-2022.pdf";

const subTitle = "University";
const title = "News";

export default function newsFrontPage() {
  const imageStyle = {
    height: "200px",
    objectFit: "scale-down",
    width: "100%",
  };

  return (
    <div className="style-2 pb-3  ">
      <div className="container ">
        <div className="section-header text-center">
          <span className="subtitle ">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>
        <div className="row">
          <div className="col">
            <div className="course-item style-4">
              <div className="course-inner" data-aos="flip-left">
                <div className="course-thumb">
                  <img
                    src="./assets/images/uni-news/cadets.webp"
                    alt="cadets"
                    style={imageStyle}
                  />
                </div>
                <div className="course-content">
                  <a href={"assets/files/news/Achievement_RDC-2022.pdf"}>
                    <p>Two cadets selected for the &quot;Republic Day Camp&quot;  </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="course-item style-4">
              <div className="course-inner" data-aos="flip-left">
                <div className="course-thumb">
                  <img
                    src="./assets/images/uni-news/ev3_tn.jpg"
                    alt="unai"
                    style={imageStyle}
                  />
                </div>
                <div className="course-content">
                  <a href="#">
                    <p>Charusat Students build Electric Car</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="course-item style-4">
              <div className="course-inner" data-aos="flip-left">
                <div className="course-thumb">
                  <img
                    style={imageStyle}
                    src="./assets/images/uni-news/mou.png"
                    alt="Charusat University inks MoU with FRIGE HOUSE"
                  />
                </div>
                <div className="course-content">
                  <a href="#">
                    <p>Charusat University inks MoU with FRIGE HOUSE</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
