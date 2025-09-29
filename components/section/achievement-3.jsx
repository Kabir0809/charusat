"use client";
import CountUp from "react-countup";

const achievementList = [
  {
    iconName: "icofont-papers",
    count: 600,
    desc: "Publications",
    ariaLabel: "600 plus academic publications"
  },
  {
    iconName: "icofont-molecule",
    count: 30,
    desc: "Research Labs",
    ariaLabel: "30 plus research laboratories"
  },
  {
    iconName: "icofont-businessman",
    count: 30,
    desc: "Entrepreneurs",
    ariaLabel: "30 plus successful entrepreneurs"
  },
  {
    iconName: "icofont-bill",
    count: 23,
    desc: "Highest Package (Lacs)",
    ariaLabel: "23 lacs highest placement package"
  },
];

const AchievementThree = () => {
  return (
    <section
      className="achievement-section style-2 p-4"
      style={{
        backgroundColor: "#0066b3 ",
      }}
      role="region"
      aria-labelledby="achievements-heading"
    >
      <div className="container ">
        <div className="section-wrapper ">
          <div className="counter-part ">
            <h2 id="achievements-heading" className="sr-only">University Achievements</h2>
            <div className="row g-4 row-cols-lg-4 row-cols-sm-2 row-cols-1 justify-content-center">
              {achievementList.map((val, i) => (
                <div className="col " key={i}>
                  <div className="count-item" role="group" aria-labelledby={`stat-${i}`}>
                    <div className=" count-inner">
                      <div className=" count-icon" aria-hidden="true">
                        <i className={val.iconName}></i>
                      </div>
                      <div className="count-content">
                        <h2 className="text-white fw-bold">
                          <span className=" count">
                            <CountUp end={val.count} duration={2} />
                          </span>
                          <span>+</span>
                        </h2>
                        <p className="text-white fw-bold" id={`stat-${i}`}>{val.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .sr-only {
          position: absolute !important;
          width: 1px !important;
          height: 1px !important;
          padding: 0 !important;
          margin: -1px !important;
          overflow: hidden !important;
          clip: rect(0, 0, 0, 0) !important;
          white-space: nowrap !important;
          border: 0 !important;
        }

        .text-white {
          color: #ffffff !important;
        }

        .count-item:hover .text-white {
          color: #ffffff !important;
        }
      `}</style>
    </section>
  );
};

export default AchievementThree;