import React from "react";

// Team data organized by category and sub-teams
const teamData = [
  {
    category: "Patrons",
    members: [
      {
        name: "Dr. Harshad Patel",
        role: "President, CHARUSAT",
        img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=400&facepad=2"
      },
      {
        name: "Dr. Pankaj Joshi",
        role: "Provost, CHARUSAT",
        img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=400&h=400&facepad=2"
      }
    ]
  },
  {
    category: "Advisors",
    members: [
      {
        name: "Dr. A. B. Patel",
        role: "Registrar, CHARUSAT",
        img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=400&h=400&facepad=2"
      },
      {
        name: "Dr. S. G. Patel",
        role: "Dean, Faculty of Technology & Engineering",
        img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&h=400&facepad=2"
      }
    ]
  },
  {
    category: "Editor in Chief",
    members: [
      {
        name: "Dr. R. K. Patel",
        role: "Editor in Chief",
        img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=400&facepad=2"
      }
    ]
  },
  {
    category: "Chief Operating Officer",
    members: [
      {
        name: "Dr. N. S. Patel",
        role: "Chief Operating Officer",
        img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=facearea&w=400&h=400&facepad=2"
      }
    ]
  },
  {
    category: "Executive Team",
    subTeams: [
      {
        subCategory: "Designing Team",
        members: [
          {
            name: "Nellie Hart",
            role: "Lead Designer",
            img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&w=400&h=400&facepad=2"
          },
          {
            name: "Ava Smith",
            role: "Designer",
            img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=facearea&w=400&h=400&facepad=2"
          }
        ]
      },
      {
        subCategory: "Section Editors",
        members: [
          {
            name: "John Doe",
            role: "Research Section Editor",
            img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=facearea&w=400&h=400&facepad=2"
          },
          {
            name: "Jane Williams",
            role: "Campus Life Section Editor",
            img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=facearea&w=400&h=400&facepad=2"
          }
        ]
      }
    ],
    members: [
      {
        name: "Marissa Clark",
        role: "Executive Editor",
        img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&h=400&facepad=2"
      },
      {
        name: "Michael Phillips",
        role: "Executive Editor",
        img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=400&h=400&facepad=2"
      }
    ]
  }
];

const TeamQuill = () => (
  <section className="teamquill-section">
    <div className="teamquill-header">
      <h2 className="teamquill-title">Meet the Quill Magazine Team</h2>
      <p className="teamquill-desc">
        Our team brings together passionate leaders, advisors, editors, and creative minds to deliver the best of Quill Magazine.
      </p>
    </div>
    <div className="teamquill-categories">
      {teamData.map((group, idx) => (
        <div className="teamquill-category-block" key={group.category}>
          <h3 className="teamquill-category">{group.category}</h3>
          <div className="teamquill-members-grid">
            {group.members &&
              group.members.map((member, i) => (
                <div className="teamquill-member-card" key={member.name + i}>
                  <div className="teamquill-member-img-wrap">
                    <img src={member.img} alt={member.name} className="teamquill-member-img" />
                  </div>
                  <div className="teamquill-member-info">
                    <div className="teamquill-member-name">{member.name}</div>
                    <div className="teamquill-member-role">{member.role}</div>
                  </div>
                </div>
              ))}
          </div>
          {/* Render subTeams if present */}
          {group.subTeams &&
            group.subTeams.map((sub, subIdx) => (
              <div className="teamquill-subteam-block" key={sub.subCategory}>
                <h4 className="teamquill-subcategory">{sub.subCategory}</h4>
                <div className="teamquill-members-grid">
                  {sub.members.map((member, i) => (
                    <div className="teamquill-member-card" key={member.name + i}>
                      <div className="teamquill-member-img-wrap">
                        <img src={member.img} alt={member.name} className="teamquill-member-img" />
                      </div>
                      <div className="teamquill-member-info">
                        <div className="teamquill-member-name">{member.name}</div>
                        <div className="teamquill-member-role">{member.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      ))}
    </div>
    <style jsx>{`
      .teamquill-section {
        background: #fff;
        color: #222;
        border-radius: 18px;
        padding: 3rem 1.5rem 2.5rem 1.5rem;
        margin: 2rem 0;
        box-shadow: 0 4px 32px rgba(0,0,0,0.08);
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
      }
      .teamquill-header {
        text-align: center;
        margin-bottom: 2.5rem;
      }
      .teamquill-title {
        color: #ff4d00;
        font-size: 2.3rem;
        font-weight: 800;
        margin-bottom: 0.5rem;
        letter-spacing: 1px;
      }
      .teamquill-desc {
        color: #444;
        font-size: 1.15rem;
        margin-bottom: 0;
        font-weight: 400;
      }
      .teamquill-category-block {
        margin-bottom: 2.5rem;
      }
      .teamquill-category {
        color: #ff4d00;
        font-size: 1.35rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        letter-spacing: 0.5px;
        background: #fff8e7;
        border-radius: 8px;
        padding: 0.5rem 1.5rem;
        display: inline-block;
        box-shadow: 0 2px 8px rgba(255,77,0,0.04);
      }
      .teamquill-subteam-block {
        margin-top: 2rem;
      }
      .teamquill-subcategory {
        color: #0066b3;
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 1.1rem;
        letter-spacing: 0.5px;
        background: #f6f6f6;
        border-radius: 6px;
        padding: 0.3rem 1rem;
        display: inline-block;
      }
      .teamquill-members-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 2rem;
        margin-bottom: 0.5rem;
      }
      .teamquill-member-card {
        background: #fff8e7;
        border-radius: 14px;
        box-shadow: 0 2px 12px rgba(0,0,0,0.06);
        padding: 1.5rem 1rem 1rem 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: box-shadow 0.2s, transform 0.2s;
        border: 1px solid #ffe0c2;
        min-height: 270px;
      }
      .teamquill-member-card:hover {
        transform: translateY(-4px) scale(1.03);
        box-shadow: 0 6px 24px rgba(255,77,0,0.10);
      }
      .teamquill-member-img-wrap {
        width: 96px;
        height: 96px;
        border-radius: 12px;
        overflow: hidden;
        margin-bottom: 1rem;
        border: 2px solid #ff4d00;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .teamquill-member-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      .teamquill-member-info {
        text-align: center;
      }
      .teamquill-member-name {
        font-weight: 700;
        font-size: 1.08rem;
        color: #222;
        margin-bottom: 0.3rem;
        letter-spacing: 0.5px;
      }
      .teamquill-member-role {
        font-size: 0.98rem;
        color: #ff4d00;
        font-weight: 500;
      }
      @media (max-width: 900px) {
        .teamquill-section {
          padding: 1.5rem 0.5rem;
        }
        .teamquill-title {
          font-size: 1.5rem;
        }
        .teamquill-category {
          font-size: 1.1rem;
          padding: 0.4rem 1rem;
        }
        .teamquill-members-grid {
          grid-template-columns: 1fr 1fr;
          gap: 1.2rem;
        }
      }
      @media (max-width: 600px) {
        .teamquill-section {
          padding: 1rem 0.1rem;
        }
        .teamquill-title {
          font-size: 1.1rem;
        }
        .teamquill-category {
          font-size: 1rem;
          padding: 0.3rem 0.7rem;
        }
        .teamquill-members-grid {
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        .teamquill-member-card {
          padding: 1rem 0.5rem 0.8rem 0.5rem;
          min-height: 0;
        }
        .teamquill-member-img-wrap {
          width: 70px;
          height: 70px;
        }
        .teamquill-member-name {
          font-size: 0.98rem;
        }
        .teamquill-member-role {
          font-size: 0.92rem;
        }
      }
    `}</style>
  </section>
);

export default TeamQuill;