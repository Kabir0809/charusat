"use client"
const title = "President's Welcome";
import Image from "next/image";
import President from "@/public/assets/images/about/President_sir.png"
//const subTitle = "About CHARUSAT";

const PresidentDesk = () => {
  return (
    <div className="about-section style-3 padding-tb section-bg">
      <title>CHARUSAT President</title>
        <meta httpEquiv="Content-Type" content=" text/html; charset=utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="CHARUSAT President" />
        <meta name="robots" content="index" />
        <meta name="robots" content="follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="translate" />
        <meta name="google" content="nopagereadaloud" />
        <meta property="og:type" content="President Message" />
        <meta property="og:title" content="President of CHARUSAT" />
        <meta property="og:description" content="Message from president of CHARUSAT" />
        <meta name="author" content="CHARUSAT Web Team" />
      <div className="container post-item style-2">
        <div className="row">
          <div className="col-sm-3">
            <div className="about-left mt-1">
              <div
                className="about-thumb"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src={President}
                  alt="Presindent"
                  style={{ margin: "0 auto" }}
                  height={319.64}
                />
              </div>
              <div style={{ textAlign: "center", marginTop: "10px" }}>
                <h4>Shri Surendra Patel</h4>
                <h5>President, CHARUSAT</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-9">
            <div className="about-right">
              
                {/* <span className="subtitle">{subTitle}</span> */}
                <div className="post-inner" style={{fontSize: "1.13rem"}}>
                <div className="post-content"  style={{textAlign:"justify"}}>
                <h2 className="title">{title}</h2>
                <hr/>
                <span style={{  lineHeight: "1.8rem",  }}>
                  Intelligence with Character is the true goal of Education.{" "}
                  <strong>
                    Knowledge gives humility, from humility, one attains
                    Character.
                  </strong>{" "}
                  The Highest Education is that which makes our life in harmony
                  with all existence. In the context, CHARUSAT as a University has been quite
                  distinct from day one. It strives to make{" "}
                  <strong>Charotar – the Land of Sardar Patel</strong> the{" "}
                  <strong>Global Education Hub</strong> through knowledge
                  creation, augmentation, and dissemination. For the purpose,
                  CHARUSAT dedicates its efforts towards developing synergy
                  between industry and academia; and community upliftment
                  through education. Importantly, CHARUSAT continually strives
                  to focus on the future with an entrepreneurial spirit.
                </span>
                <span style={{  lineHeight: "1.8rem" }}>
                  As a University, CHARUSAT is emerging with a thrust on
                  socially relevant Research & Development. For the purpose, a{' '}
                  <strong>Research and Development Centre</strong> has been
                  established on the Campus. Uniquely,{" "}
                  <strong>Space Research and Technology Centre</strong> is also
                  established to initiate and foster research in Space
                  Technology.
                </span>
                <span style={{  lineHeight: "1.8rem" }}>
                  Efforts are also made for education amelioration in rural
                  schools through a{" "}
                  <strong>Rural Education Development Program.</strong>
                  On-Campus and Outreach Activities are organized for School –
                  Students, Teachers, and Management.{" "}
                  <strong>Human Resource Development Centre</strong> hones
                  competencies of Faculty and Staff on Campus.
                </span>
                <span style={{  lineHeight: "1.8rem" }}>
              Through these initiatives and practices, CHARUSAT focuses on
              converting eyes into sight and vision; information into knowledge
              and wisdom; and students / individuals into citizens and harmonious living.
              Further, programs at CHARUSAT enable the students not only to gain
              an understanding but also to develop insights in altered research
              areas. Teachers also dedicate their efforts to construct and
              facilitate opportunities where the{" "}
              <strong>students can practice and experience creativity.</strong>{" "}
              Moving a step ahead towards the purpose of education, CHARUSAT
              aims to make its students{" "}
              <strong>Job Creators and not Job Seekers.</strong>
            </span>
            <span style={{  lineHeight: "1.8rem" }}>
              In order to inculcate values in the students, CHARUSAT has been
              established as a University fostering{" "}
              <strong>High Moral Values.</strong> Honesty, Integrity, and
              Transparency have been the benchmarks of CHARUSAT in both – word
              and action.
            </span>
            <span style={{  lineHeight: "1.8rem" }}>
              In the journey, CHARUSAT fosters a niche for a world-class
              education at the rural base. It aspires to be a{" "}
              <strong>World Class University.</strong> Primarily, it strives to
              be among <strong>Top 20 Universities at National Level.</strong>
            </span>
            <span style={{  lineHeight: "1.8rem" }}>
              I, earnestly, request you all to join hands with CHARUSAT and work
              towards the realization of this aspiration. Many have already
              volunteered in this <strong>Seva Yagna</strong> through their
              magnanimity, knowledge, skills and resource sharing; and through
              their association with CHARUSAT either as a Faculty, Staff or
              Student.
            </span>
            <span style={{  lineHeight: "1.8rem" }}>
              On behalf of CHARUSAT Family, I extend a word of gratitude to all
              and also invite all to visit the Campus, witness the development
              and be a part of the Journey.
            </span>
            <span className="">
              <strong>- Mr. Surendra M. Patel</strong>
            </span>
            </div>
          

              </div>
            </div>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresidentDesk;