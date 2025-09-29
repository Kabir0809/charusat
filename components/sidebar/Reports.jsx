import reportData from "./reportData";

const Reports = ({ id }) => {
  const titleMap = {
    NAAC_Cycle_1: "NAAC Accreditation (Cycle 1)",
    NAAC_Cycle_2: "NAAC Accreditation (Cycle 2)",
    GSIRF: "GSIRF",
    CoE_Cycle_1: "Center of Excellence (CoE) - Cycle 1",
    CoE_Cycle_2: "Center of Excellence (CoE) - Cycle 2",
    NIRF: "National Institutional Ranking Framework (NIRF)",
  };

  const data = reportData[id] || [];

  return (
    <div className="comments">
      <h4 className="title-border">
        {titleMap[id] || "Reports"}
        
        </h4>
      <ul className="comment-list">
        {data.map((val, i) => (
          <li className="comment" key={i}>
            <div className="com-content">
              <div className="com-title">
                <div className="com-title-meta lab-ul">
                  <a href={val.link} className="csdc-left" target="_blank" rel="noopener noreferrer">
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

export default Reports;
