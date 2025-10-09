import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HoneycombGallery = () => {
  const [selectedHex, setSelectedHex] = useState(null);
  const [hexagons] = useState([
    // Row 0 - 3 hexagons
    { id: 1, image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400', title: 'Technology', desc: 'Innovation & Future', row: 0, col: 0 },
    { id: 2, image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400', title: 'Nature', desc: 'Wild & Free', row: 0, col: 1 },
    { id: 3, image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400', title: 'Business', desc: 'Growth & Success', row: 0, col: 2 },

    // Row 1 - 2 hexagons (offset)
    { id: 4, image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400', title: 'Design', desc: 'Creative Solutions', row: 1, col: 0 },
    { id: 5, image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400', title: 'Development', desc: 'Build & Deploy', row: 1, col: 1 },

    // Row 2 - repeat 3 hexagons
    { id: 6, image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400', title: 'Marketing', desc: 'Brand Strategy', row: 2, col: 0 },
    { id: 7, image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400', title: 'Team', desc: 'Collaboration', row: 2, col: 1 },
    { id: 8, image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400', title: 'Analytics', desc: 'Data Insights', row: 2, col: 2 },

    // Row 3 - 2 hexagons (offset again)
    { id: 9, image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400', title: 'Strategy', desc: 'Planning Ahead', row: 3, col: 0 },
    { id: 10, image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400', title: 'Innovation', desc: 'Think Different', row: 3, col: 1 },
    
  ]);

  const hexSize = 120; // side length
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
    const isSelected = selectedHex?.id === hex.id;

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
          zIndex: isHovered || isSelected ? 20 : 1,
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
            border: isSelected ? '4px solid #0d6efd' : 'none',
            boxSizing: 'border-box',
          }}
        >
          <img
            src={hex.image}
            alt={hex.title}
            style={{
              width: '120%',
              height: '120%',
              objectFit: 'cover',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) scale(${isHovered ? 1.15 : 1})`,
              transition: 'transform 0.6s ease',
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
              opacity: isHovered || isSelected ? 1 : 0,
              transition: 'opacity 0.4s ease',
              textAlign: 'center',
              padding: '20px',
            }}
          >
            <div style={{ fontSize: '20px', fontWeight: 700 }}>{hex.title}</div>
            <div style={{ fontSize: '14px', opacity: 0.9 }}>{hex.desc}</div>
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
        <h1 className="display-3 fw-bold text-white mb-3">Our Services</h1>
        <p className="lead text-white fs-5">
          Discover what we offer through our honeycomb gallery
        </p>
      </div>

      <div className="flex-grow-1 d-flex align-items-center justify-content-center py-5">
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
