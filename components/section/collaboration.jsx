import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import UOP from "@/public/assets/images/instructor/UNIVERSITY OF PRINCE.webp";
import AICTE from "@/public/assets/images/instructor/AICTE.webp";
import AIMST from "@/public/assets/images/instructor/AIMST University.webp";
import ATOMIC from "@/public/assets/images/instructor/BHABHA ATOMIC.webp";
import Envi from "@/public/assets/images/instructor/Centre of Envi Education.webp";
import DR from "@/public/assets/images/instructor/Defence Research Development.webp";
import DoB from "@/public/assets/images/instructor/Dept of BioTech.webp";
import GESIA from "@/public/assets/images/instructor/GESIA.webp";
import MGMT from "@/public/assets/images/instructor/GUJARAT INST OF DISASTER MGMT.webp";
import GUJCOST from "@/public/assets/images/instructor/GUJCOST.webp";
import HARRISBURG from "@/public/assets/images/instructor/HARRISBURG.webp";
import INESCTEC from "@/public/assets/images/instructor/INESCTEC.webp";
import IOP from "@/public/assets/images/instructor/INST OF PLASMA.webp";
import ISRO from "@/public/assets/images/instructor/ISRO.webp";
import KIU from "@/public/assets/images/instructor/KIU.webp";
import PTI from "@/public/assets/images/instructor/L&T PTI.webp";
import MSAT from "@/public/assets/images/instructor/MINISTRY OF SCIENCE AND TECH.webp";
import MOTOROLA from "@/public/assets/images/instructor/MOTOROLA SOLUTIONS.webp";
import NRS from "@/public/assets/images/instructor/NRS.webp";
import RAE from "@/public/assets/images/instructor/RAE.webp";
import TU from "@/public/assets/images/instructor/TECHNISCHE UNIVERSITY.webp";
import UGC_DAE from "@/public/assets/images/instructor/UGC_DAE.webp";
import UJC from "@/public/assets/images/instructor/UJC.webp";
import UOE from "@/public/assets/images/instructor/UNIVERSITY OF EXETER.webp";

const HoneycombGallery = () => {
  const [selectedHex, setSelectedHex] = useState(null);
  const [hexagons] = useState([
    // Row 0
    { id: 1, image: AICTE, title: 'AICTE', row: 0, col: 0 },
    { id: 2, image: AIMST, title: 'AIMST University', row: 0, col: 1 },
    { id: 3, image: ATOMIC, title: 'BHABHA ATOMIC', row: 0, col: 2 },
    { id: 4, image: Envi, title: 'Centre of Envi Education', row: 0, col: 3 },

    // Row 1 (offset)
    { id: 5, image: DR, title: 'Defence Research Development', row: 1, col: 0 },
    { id: 6, image: DoB, title: 'Dept of BioTech', row: 1, col: 1 },
    { id: 7, image: GESIA, title: 'GESIA', row: 1, col: 2 },

    // Row 2
    { id: 8, image: MGMT, title: 'GUJARAT INST OF DISASTER MGMT', row: 2, col: 0 },
    { id: 9, image: GUJCOST, title: 'GUJCOST', row: 2, col: 1 },
    { id: 10, image: HARRISBURG, title: 'HARRISBURG University', row: 2, col: 2 },
    { id: 11, image: INESCTEC, title: 'INESCTEC', row: 2, col: 3 },

    // Row 3 (offset)
    { id: 12, image: IOP, title: 'INST OF PLASMA', row: 3, col: 0 },
    { id: 13, image: ISRO, title: 'ISRO', row: 3, col: 1 },
    { id: 14, image: KIU, title: 'KIU', row: 3, col: 2 },

    // Row 4
    { id: 15, image: PTI, title: 'L&T PTI', row: 4, col: 0 },
    { id: 16, image: MSAT, title: 'MINISTRY OF SCIENCE AND TECH', row: 4, col: 1 },
    { id: 17, image: MOTOROLA, title: 'MOTOROLA SOLUTIONS', row: 4, col: 2 },
    { id: 18, image: NRS, title: 'NRS', row: 4, col: 3 },

    // Row 5 (offset)
    { id: 19, image: RAE, title: 'RAE', row: 5, col: 0 },
    { id: 20, image: TU, title: 'TECHNISCHE UNIVERSITY', row: 5, col: 1 },
    { id: 21, image: UGC_DAE, title: 'UGC_DAE', row: 5, col: 2 },

    // Row 6
    { id: 22, image: UJC, title: 'UJC', row: 6, col: 0 },
    { id: 23, image: UOE, title: 'UNIVERSITY OF EXETER', row: 6, col: 1 },
    { id: 24, image: UOP, title: 'UNIVERSITY OF PRINCE', row: 6, col: 2 },
]);


  const hexSize = 90; // side length
  const hexWidth = hexSize * 2;
  const hexHeight = Math.sqrt(3) * hexSize;
  const vertSpacing = hexHeight * 0.5;
  const horizSpacing = hexWidth * 1; // spacing so one side length gap remains

  const getHexPosition = (row, col) => {
    const offsetX = (row % 2 === 1) ? hexWidth * 0.75 : 0; // stagger odd rows
    const x = col * horizSpacing * 1.5 + offsetX;
    const y = row * vertSpacing;
    return { x, y };
  };

  const Hexagon = ({ hex }) => {
    const [isHovered, setIsHovered] = useState(false);
    const position = getHexPosition(hex.row, hex.col);

    return (
      <div
        onClick={() => setSelectedHex(hex)}
        style={{
          position: 'absolute',
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: `${hexWidth}px`,
          height: `${hexHeight}px`,
          transform: isHovered ? 'scale(1.08)' : 'scale(1)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          cursor: 'pointer',
          zIndex: isHovered ? 20 : 1,
          padding: '5px',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
            overflow: 'hidden',
            position: 'relative',
            boxSizing: 'border-box',
          }}
        >
          <Image
            src={hex.image}
            alt={hex.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) scale(${isHovered ? 1.15 : 1})`,
              transition: 'transform 0.6s ease',
              padding: '10px',
              backgroundColor: 'white',
            }}
          />
          {/* Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: isHovered
                ? 'linear-gradient(135deg, rgba(13,110,253,0.5) 0%, rgba(108,117,125,0.5) 100%)'
                : 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.4) 100%)',
              transition: 'background 0.4s ease',
            }}
          />
          {/* Text */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              color: 'white',
              opacity: isHovered ? 1 : 0,
              transition: 'opacity 0.4s ease',
              textAlign: 'center',
              padding: '20px',
            }}
          >
            <div style={{ fontSize: '20px', fontWeight: 700 }}>{hex.title}</div>
            
          </div>
        </div>
      </div>
    );
  };

  const gridWidth =
    Math.max(...hexagons.map((h) => getHexPosition(h.row, h.col).x)) +
    hexWidth +
    40;
  const gridHeight =
    Math.max(...hexagons.map((h) => getHexPosition(h.row, h.col).y)) +
    hexHeight +
    40;

  return (
    <div
      className="min-vh-100 d-flex flex-column"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
    >
      <div className="container text-center py-5">
        <p className="lead text-white fs-5 muted">
          Discover our Alliances
        </p>
        <h1 className="display-3 fw-bold text-white mb-0">Our Collaborations</h1>
      </div>

      <div className="flex-grow-1 d-flex align-items-center justify-content-center py-1">
        <div
          style={{
            position: 'relative',
            width: `${gridWidth}px`,
            height: `${gridHeight}px`,
          }}
        >
          {hexagons.map((hex) => (
            <Hexagon key={hex.id} hex={hex} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoneycombGallery;
