"use client";

import { Fragment } from "react";
import Image from "next/image";
import Contact from "@/components/section/contact";

const NCC = () => {
  return (
    <Fragment>
      <div className="blog-section p-4">
        <div className="container p-4" style={{ backgroundColor: "#fff" }}>
          <h1
            className="text-center mb-4 h1 text-white fw-bold"
            style={{
              backgroundColor: "#ff4d00",
              padding: "10px",
            }}
          >
            National Cadet Corps (NCC) @ CHARUSAT
          </h1>
          <p className="text-center mb-4">
            The National Cadet Corps at CHARUSAT aims to develop character, comradeship, discipline, leadership, secular outlook, spirit of adventure, and ideals of selfless service amongst the youth of our nation.
          </p>

          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          <div className="post-content">
                            
                            {/* Introduction Section */}
                            <h3>Introduction</h3>
                            <hr/>
                            <div className="meta-post">
                              <ul className="lab-ul" style={{textAlign: "justify"}}>
                              <li>The <b>National Cadet Corps (NCC)</b> is a prestigious youth organization in India, dedicated to instilling discipline, leadership, and patriotism among the youth. Functioning as an integral part of the Indian military, it operates under the <b>Ministry of Defence.</b></li>
<li>Established on <b>15th July 1948</b>, the NCC upholds the motto <b>"Unity and Discipline."</b> It is a dynamic, responsive, and continuously evolving organization, guided by core values that it strives to instill and promote across all ranks.</li>
<li>CHARUSAT University has a very well build and energetic NCC unit raised under Fully Self Finance Scheme (FSFS) that has allotted a total of 80 Senior Division distributed over the period of 3 years (i.e.1st Year – 27 seats, 2nd Year – 27 seats, 3rd Year – 26 seats) vacancies for cadets to be enrolled in 2 Guj Compo Tech Coy. (2 CTC) NCC (Army Division) V.V.Nagar as Mixed NCC Unit concept with 33% for girls. </li>
<li>Our university has been supporting cadets in all possible ways including Academic benefits, financial support and transportation. As of the current academic year, <b>CHARUSAT University is proud to have a total of 80 dedicated cadets</b> actively participating in the National Cadet Corps (NCC). Among these making a commendable contribution to the NCC program. This collective commitment and engagement reflect the university's strong focus on character development, discipline, and fostering a spirit of patriotism among the youth through the NCC platform.</li>
                              </ul>
                            </div>

                            {/* Activities Section */}
                            <h3>Key Objectives of NCC</h3>
                            <hr/>
                            <div className="objectives-image-container">
  <Image 
    src="/assets/images/ncc/key-objectives-ncc.png"
    alt="Key Objectives of NCC"
    width={800}
    height={400}
    className="img-fluid rounded shadow-sm"
    priority
  />
</div>
                            {/* Special Events */}
                            <h3>Structure of NCC</h3>
                            <hr/>
                            <ul className="lab-ul" style={{textAlign: "justify"}}>
                              <li>The NCC is organized into different directorates covering all states and union territories of India. The structure includes Senior Division (for college and university students) and Junior Division (for school students). The cadets are grouped into Army, Navy, and Air Wing based on their interests and career goals.</li>
                            </ul>

                            {/* Achievements Section */}
                            
<h3>Benefits of NCC</h3>
<hr/>
<div className="benefits-container">
  <div className="benefit-card defense">
    <h4>🎖️ Defense Services Commission</h4>
    <div className="benefit-details">
      <div className="service-branch">
        <h5>Army</h5>
        <ul>
          <li>IMA Dehradun: 64 vacancies yearly via UPSC & SSB</li>
          <li>OTA Chennai: 100 vacancies yearly (SSB only)</li>
        </ul>
      </div>
      <div className="service-branch">
        <h5>Navy</h5>
        <ul>
          <li>6 Vacancies (SSB Interview only)</li>
          <li>2 years age relaxation for 'C' Certificate holders</li>
        </ul>
      </div>
      <div className="service-branch">
        <h5>Indian Air Force</h5>
        <ul>
          <li>10% vacancies in all courses including flying training</li>
          <li>SSB Interview only (No UPSC)</li>
        </ul>
      </div>
    </div>
  </div>
  
  <div className="benefit-card paramilitary">
    <h4>🛡️ Paramilitary Services</h4>
    <p>Special benefits for joining:</p>
    <ul>
      <li>CRPF (Central Reserve Police Force)</li>
      <li>CISF (Central Industrial Security Force)</li>
      <li>BSF (Border Security Force)</li>
      <li>Other Paramilitary Services</li>
    </ul>
  </div>
</div>

<h3>Our Pride - Defence Academy Selections</h3>
<hr/>
<div className="cadets-grid">
  <div className="cadet-card">
    <div className="cadet-image">
      <Image
        src="/assets/images/ncc/ravi-yadav.jpg"
        alt="SUO Ravi Yadav"
        width={200}
        height={200}
        className="rounded-circle"
      />
    </div>
    <div className="cadet-info">
      <h4>SUO Ravi Yadav</h4>
      <p className="academy">TGC Entry, IMA(Dehradun)</p>
      <p className="branch">Indian Army</p>
      <p className="achievement">Recommended for IMA Permanent Commission(PC) with AIR 6 in The Order of Merit</p>
      <p className="pop">Passing Out Parade: 2024</p>
    </div>
  </div>

  <div className="cadet-card">
    <div className="cadet-image">
      <Image
        src="/assets/images/ncc/radha-barad.jpg"
        alt="CDT Radha Barad"
        width={200}
        height={200}
        className="rounded-circle"
      />
    </div>
    <div className="cadet-info">
      <h4>CDT Radha Barad</h4>
      <p className="academy">NDA Entry, NDA (Khadakwasla)</p>
      <p className="branch">Indian Air Force</p>
      <p className="achievement">Selected for NDA-IAF (PC) with AIR 124 (Mixed Rank) and top 19 in Girls</p>
      <p className="highlight">1 of 3 girls from Gujarat to reach NDA</p>
      <p className="pop">Pre-Commissioning: 2026</p>
    </div>
  </div>
</div>
<p style={{textAlign: "justify"}}>Industrial Firm’s like Reliance GCS are offering jobs to NCC ‘C’ Certificate holders as Security Executive (Officer Grade) with minimum 7.5 LPA CTC after 6 months training.
Vedanta group is also offering jobs as Security Officer to NCC ‘C’ Certificate holders.
Several other companies are also prioritising NCC ‘C’ Certificate holders for their job openings.
</p>

<h3>Achievements (2023)</h3>
<hr/>
<div className="achievements-section">
  <div className="table-responsive">
    <table className="achievement-table">
      <thead>
        <tr>
          <th>Sr No</th>
          <th>Name of Cadets</th>
          <th>Id</th>
          <th>Achievements (National Camp/International Camp)</th>
          <th>Level</th>
        </tr>
      </thead>
      <tbody>
  <tr>
    <td>1</td>
    <td>SUO Ravi Yadav</td>
    <td>19EC076</td>
    <td>All India 2nd Best Cadet in Republic day Camp 2022<br/>YOUTH EXCHANGE PROGRAM at Kathmandu,Nepal</td>
    <td>National<br/>International</td>
  </tr>
  <tr>
    <td>2</td>
    <td>SUO. Disha Patel</td>
    <td>20BPH040</td>
    <td>Participated in Army Attachment Camp 2023 at Gandhinagar</td>
    <td>State</td>
  </tr>
  <tr>
    <td>3</td>
    <td>CDT.Madhvi Rana</td>
    <td>22BSC104</td>
    <td>Participated in Army Attachment Camp 2023 at Gandhinagar</td>
    <td>State</td>
  </tr>
  <tr>
    <td>4</td>
    <td>CDT.Dhruv Patel</td>
    <td>21BBA124</td>
    <td>Participated in Army Attachment Camp 2023 at Gandhinagar</td>
    <td>State</td>
  </tr>
  <tr>
    <td>5</td>
    <td>CDT.Ayush Kariya</td>
    <td>22DCS020</td>
    <td>Participated in Army Attachment Camp 2023 at Gandhinagar</td>
    <td>State</td>
  </tr>
  <tr>
    <td>6</td>
    <td>SGT.Vishwa Bharakda</td>
    <td>20EC005</td>
    <td>Participated in Rock Climbing Training Camp 2023 at Pithoragrh (UK)</td>
    <td>National</td>
  </tr>
  <tr>
    <td>7</td>
    <td>CDT.Anand Raj</td>
    <td>21CL001</td>
    <td>Participated in Rock Climbing Training Camp 2023 at Pithoragrh (UK)</td>
    <td>National</td>
  </tr>
  <tr>
    <td>8</td>
    <td>CDT Dev Soni</td>
    <td>22IT144</td>
    <td>Participated in All India Thal Sainik Camp 2023 at Delhi</td>
    <td>National</td>
  </tr>
  <tr>
    <td>9</td>
    <td>Aghara Savan</td>
    <td>21DCS001</td>
    <td>Participated in SNIC-Rashtriya Ekta Diwas at Rajpipla</td>
    <td>National</td>
  </tr>
  <tr>
    <td>10</td>
    <td>Harshil Rohela</td>
    <td>22DCE101</td>
    <td>Participated in IGC-Republic Day Camp, A&apos;bad</td>
    <td>State</td>
  </tr>
  <tr>
    <td>11</td>
    <td>Manthan Patel</td>
    <td>22EC037</td>
    <td>Participated in All India Trekking Camp at Rajpipla</td>
    <td>National</td>
  </tr>
  <tr>
    <td>12</td>
    <td>Satyam Charola</td>
    <td>22CE016</td>
    <td>Participated in All India Trekking Camp at Rajpipla</td>
    <td>National</td>
  </tr>
  <tr>
    <td>13</td>
    <td>CDT.Ayush Kariya</td>
    <td>22DCS020</td>
    <td>Has been selected in Republic day camp at Delhi and also Participated in PM Raily-2024 held on 28-Jan</td>
    <td>National</td>
  </tr>
  <tr>
    <td>14</td>
    <td>SUO. Disha Patel</td>
    <td>20BPH040</td>
    <td>Participated in EK BHARAT SHRESHTH BHARAT CAMP held in Kera, Bhuj.</td>
    <td>National</td>
  </tr>
  <tr>
    <td>15</td>
    <td>CDT.Madhvi Rana</td>
    <td>22BSC104</td>
    <td>Participated in EK BHARAT SHRESHTH BHARAT CAMP held in Law Garden, AHEMDABAD</td>
    <td>National</td>
  </tr>
  <tr>
    <td>16</td>
    <td>CDT.Dhruv Patel</td>
    <td>21BBA124</td>
    <td>Participated in EK BHARAT SHRESHTH BHARAT CAMP held in KERALA</td>
    <td>National</td>
  </tr>
</tbody>
    </table>
  </div>

  <div className="camps-info">
    <h4>NCC Camp Participation</h4>
    <p className="intro-text">
      Our university actively runs and dedicates itself to NCC programs, always encouraging students to be a part of NCC. 
      We provide an ideal environment for students to develop discipline, leadership, and responsibility.
    </p>
    
    <div className="camps-grid">
      <div className="camp-card">
        <h5>🌏 International Camps</h5>
        <ul>
          <li>YEP (Youth Exchange Program)</li>
        </ul>
      </div>
      <div className="camp-card">
        <h5>🇮🇳 National Camps</h5>
        <ul>
          <li>RDC (Republic Day Camp)</li>
          <li>TSC (Thal Sainik Camp)</li>
          <li>SNIC (Special National Integration Camp)</li>
          <li>AITC (All India Trekking Camp)</li>
        </ul>
      </div>
      <div className="camp-card">
        <h5>🏛️ Other Camps</h5>
        <ul>
          <li>EBSB (Ek Bharat Shreshtha Bharat Camp)</li>
          <li>Army Attachment Camp</li>
          <li>Inter Group Camp</li>
        </ul>
      </div>
    </div>
    
    <p className="conclusion-text">
      Through these programs, cadets gain valuable experiences that contribute to their personal and professional growth.
    </p>
  </div>
</div>

<h3>NCC Activities at Unit, Group, Directorate & National Level</h3>
<hr/>
<div className="objectives-image-container">
  <Image 
    src="/assets/images/ncc/ncc-cadet-development-activities.png"
    alt="NCC Cadet Development Activities"
    width={800}
    height={400}
    className="img-fluid rounded shadow-sm"
    priority
  />
</div>

<div className="activities-section">
  <h3>NCC Activities Overview</h3>
  <hr/>
  <div className="activities-grid">
    <div className="activity-card">
      <h4>🎯 Training and Camps</h4>
      <p>NCC conducts regular training and camps to impart military training, discipline, and leadership skills to the cadets.</p>
    </div>
    
    <div className="activity-card">
      <h4>🤝 Social and Community Service</h4>
      <p>Cadets participate in various community service activities like blood donation drives, Swachh Bharat Abhiyan, and literacy campaigns.</p>
    </div>
    
    <div className="activity-card">
      <h4>🏔️ Adventure Activities</h4>
      <p>NCC offers opportunities for adventure activities such as trekking, mountaineering, parasailing, and more to promote courage and physical fitness.</p>
    </div>
    
    <div className="activity-card">
      <h4>🇮🇳 National Events</h4>
      <p>NCC cadets participate in Republic Day Parade, Prime Minister's Rally, and other national and state-level events, showcasing their skills and discipline.</p>
    </div>
    
    <div className="activity-card">
      <h4>🌏 International Events</h4>
      <p>NCC cadets participate in Youth Exchange Program (YEP)</p>
    </div>
  </div>
  
  <div className="university-activities-section">
  <h3>NCC Activities at University Level</h3>
  <hr/>
  <div className="university-activities-grid">
    <div className="activity-card">
      <h4>🎖️ Regular Parade</h4>
      <p>Through regular parade cadets inculcate physical stamina and learn one of the attributes of the Armed Forces i.e. parade and discipline.</p>
    </div>

    <div className="activity-card">
      <h4>💭 Group Discussion & Lecturette</h4>
      <p>Our Cadets are trained to lead and be the example, hence Group Discussion & Lecturette type activities are hosted regularly.</p>
    </div>

    <div className="activity-card">
      <h4>⭐ OLQ Based Quality Improvement</h4>
      <p>OLQ (Officer Like Qualities) are a set of qualities listed by the Armed Forces which covers all attributes of an Officer. If one can master these qualities there can be no setback in the professional life of a cadet.</p>
    </div>

    <div className="activity-card">
      <h4>🏛️ Special Visits</h4>
      <p>NCC Charusat believes in exploring and learning, hence regular visits to institutes, government organisations and local heritage places are conducted with integration to University or several government orgs.</p>
    </div>

    <div className="activity-card">
      <h4>🎯 Vijay Diwas Celebration</h4>
      <p>Fostering patriotism within all students of university by organising Vijay Diwas Celebration, our cadets full heartedly participate in it and make a grand success in the event.</p>
    </div>
  </div>

  <div className="university-info-card">
    <p className="text-white">NCC is an integral part of the university who are available for all activities hosted in the university. Our cadets not only participate in NCC level activities but also excel in academics, research fields, placements, sports, technical clubs and non-technical clubs.</p>
    <p className="text-white">With increasing experience, NCC Charusat will create more opportunities to even include other students of University in NCC activities.</p>
  </div>
</div>

  <div className="conclusion-card">
    <p className="text-white">The NCC plays a vital role in shaping the youth of India into responsible citizens who are committed to the service of the nation. It acts as a platform for holistic development, fostering a sense of patriotism and unity among the youth.</p>
  </div>
</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <Contact
              name="Dr. Pritesh Patel, CTO-NCC Unit, CHARUSAT"
              email="ncc@charusat.ac.in"
              phone="02697-265XXX"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .blog-section {
          background-color: #fff9f1;
        }

        .lab-ul {
         
          list-style-type: disc;
        }

        .lab-ul li {
          margin-bottom: 10px;
          color: #333;
        }

        .achievements-container {
          padding: 10px 0;
        }

        .achievement-card {
          background: white;
          border-radius: 10px;
          padding: 10px;
          margin-bottom: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s ease;
        }

        .achievement-card:hover {
          transform: translateY(-5px);
        }

        .achievement-card h4 {
          color: #0066b3;
          margin-bottom: 10px;
          font-weight: bold;
        }

        .achievement-card ul {
          list-style: none;
          padding-left: 0;
        }

        .achievement-card ul li {
          margin-bottom: 10px;
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .achievement-grid {
            grid-template-columns: 1fr;
          }
        }
            // ...existing styles...

  .objectives-image-container {
    margin: 2rem 0;
    text-align: center;
  }

  .objectives-image-container :global(img) {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
    //benefits of ncc
    .benefits-container {
    display: grid;
    gap: 2rem;
    margin: 2rem 0;
  }

  .benefit-card {
    background: white;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .benefit-card h4 {
    color: #0066b3;
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }

  .benefit-details {
    display: grid;
    gap: 1.5rem;
  }

  .service-branch h5 {
    color: #ff4d00;
    margin-bottom: 0.5rem;
  }

  .cadets-grid {
    display: grid;
    gap: 2rem;
    margin: 2rem 0;
  }

  .cadet-card {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    display: grid;
    gap: 1.5rem;
    text-align: center;
  }

  .cadet-info h4 {
    color: #0066b3;
    margin-bottom: 0.5rem;
  }

  .academy {
    color: #ff4d00;
    font-weight: bold;
  }

  .branch {
    color: #666;
    font-style: italic;
  }

  .achievement {
    margin: 1rem 0;
    font-weight: 500;
  }

  .highlight {
    color: #ff4d00;
    font-weight: bold;
    margin: 0.5rem 0;
  }

  .pop {
    color: #0066b3;
    font-weight: 500;
  }

  @media (min-width: 768px) {
    .benefits-container {
      grid-template-columns: 2fr 1fr;
    }
    
    .cadets-grid {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }
    //NCC activities
    .activities-section {
    margin: 2rem 0;
  }

  .activities-grid {
    display: grid;
    gap: 1.5rem;
    margin: 2rem 0;
  }

  .activity-card {
    background: white;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .activity-card:hover {
    transform: translateY(-5px);
  }

  .activity-card h4 {
    color: #0066b3;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .activity-card p {
    color: #333;
    line-height: 1.6;
    margin: 0;
  }

  .conclusion-card {
    background: linear-gradient(45deg, #0066b3, #004080);
    
    border-radius: 14px;
    padding: 2rem;
    margin-top: 2rem;
    text-align: center;
    font-size: 1.1rem;
    line-height: 1.6;
  }

  @media (min-width: 768px) {
    .activities-grid {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }
  //university activities
  .university-activities-section {
    margin: 3rem 0;
  }

  .university-activities-grid {
    display: grid;
    gap: 1.5rem;
    margin: 2rem 0;
  }

  .university-info-card {
    background: linear-gradient(to right, #ff4d00, #ff6a00);
    color: white;
    border-radius: 12px;
    padding: 2rem;
    margin-top: 2rem;
    text-align: justify;
    line-height: 1.8;
  }

  .university-info-card p {
    margin-bottom: 1rem;
  }

  .university-info-card p:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    .university-activities-grid {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }
    //achievements section
    .achievements-section {
    margin: 2rem 0;
  }

  .achievement-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 2rem;
    background: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .achievement-table th,
  .achievement-table td {
    padding: 1rem;
    border: 1px solid #e0e0e0;
    text-align: left;
  }

  .achievement-table th {
    background: #0066b3;
    color: white;
    font-weight: 600;
  }

  .achievement-table tr:nth-child(even) {
    background: #f8f9fa;
  }

  .achievement-table tr:hover {
    background: #f0f7ff;
  }

  .camps-info {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .intro-text {
    text-align: justify;
    line-height: 1.8;
    color: #333;
    margin-bottom: 2rem;
  }

  .camps-grid {
    display: grid;
    gap: 1.5rem;
    margin: 2rem 0;
  }

  .camp-card {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
    border-left: 4px solid #0066b3;
  }

  .camp-card h5 {
    color: #0066b3;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .camp-card ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  .camp-card li {
    margin-bottom: 0.5rem;
    color: #333;
  }

  .conclusion-text {
    text-align: center;
    color: #0066b3;
    font-weight: 500;
    margin-top: 2rem;
  }

  @media (min-width: 768px) {
    .camps-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 768px) {
    .achievement-table {
      display: block;
      overflow-x: auto;
    }
  }
      `}</style>
    </Fragment>
  );
};

export default NCC;