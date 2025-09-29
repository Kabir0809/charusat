import React from "react";

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
  },
  {
    category: "Designing Team",
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
    category: "Section Editors",
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
];

const TeamPage = () => (
  <div className="team-page-section">
    <h2 className="team-title">Meet the Quill Magazine Team</h2>
    {teamData.map((group, idx) => (
      <div className="team-category-block" key={group.category}>
        <h3 className="team-category">{group.category}</h3>
        <div className="team-members-grid">
          {group.members.map((member, i) => (
            <div className="team-member-card" key={member.name + i}>
              <div className="team-member-img-wrap">
                <img src={member.img} alt={member.name} className="team-member-img" />
              </div>
              <div className="team-member-info">
                <div className="team-member-name">{member.name}</div>
                <div className="team-member-role">{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
    <style jsx>{`
      .team-page-section {
        background: #232323;
        color: #fff;
        border-radius: 16px;
        padding: 2.5rem 1rem 2rem 1rem;
        margin: 2rem 0;
        box-shadow: 0 4px 24px rgba(0,0,0,0.12);
        max-width: 1100px;
        margin-left: auto;
        margin-right: auto;
      }
      .team-title {
        color: #ff4d00;
        text-align: center;
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 2.5rem;
        letter-spacing: 1px;
      }
      .team-category-block {
        margin-bottom: 2.5rem;
      }
      .team-category {
        color: #ff4d00;
        font-size: 1.35rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
        letter-spacing: 0.5px;
        border-left: 4px solid #ff4d00;
        padding-left: 1rem;
      }
      .team-members-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
        gap: 2rem;
      }
      .team-member-card {
        background: #181818;
        border-radius: 12px;
        box-shadow: 0 2px 12px rgba(0,0,0,0.10);
        padding: 1.5rem 1rem 1rem 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: transform 0.2s;
      }
      .team-member-card:hover {
        transform: translateY(-4px) scale(1.03);
        box-shadow: 0 6px 24px rgba(255,77,0,0.10);
      }
      .team-member-img-wrap {
        width: 110px;
        height: 110px;
        border-radius: 50%;
        overflow: hidden;
        margin-bottom: 1rem;
        border: 3px solid #ff4d00;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .team-member-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      .team-member-info {
        text-align: center;
      }
      .team-member-name {
        font-weight: 700;
        font-size: 1.08rem;
        color: #fff;
        margin-bottom: 0.3rem;
        letter-spacing: 0.5px;
      }
      .team-member-role {
        font-size: 0.98rem;
        color: #ccc;
        font-weight: 400;
      }
      @media (max-width: 768px) {
        .team-page-section {
          padding: 1.2rem 0.2rem;
        }
        .team-title {
          font-size: 1.3rem;
        }
        .team-category {
          font-size: 1.1rem;
          padding-left: 0.7rem;
        }
        .team-members-grid {
          grid-template-columns: 1fr;
          gap: 1.2rem;
        }
        .team-member-card {
          padding: 1rem 0.5rem 0.8rem 0.5rem;
        }
        .team-member-img-wrap {
          width: 80px;
          height: 80px;
        }
        .team-member-name {
          font-size: 1rem;
        }
        .team-member-role {
          font-size: 0.92rem;
        }
      }
    `}</style>
  </div>
);

export default TeamPage;