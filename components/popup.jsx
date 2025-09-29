"use client";
import React, { useState, useEffect, useCallback } from "react";

export default function PopupImage() {
  const [show, setShow] = useState(false);

  const handleClose = useCallback(() => setShow(false), []);

  // Handle escape key and other keyboard events
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (show) {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [show, handleClose]);

  // Show popup on mount
  useEffect(() => {
    setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        padding: "20px",
      }}
      onClick={handleClose}
    >
      <div
        style={{
          position: "relative",
          maxWidth: "100vw",
          maxHeight: "100vh",
          margin: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          <img
            src="/assets/images/banner/MQ-NRI-Schedule-2025.png"
            alt="University Working"
            style={{
              display: "block",
              width: "auto",
              height: "auto",
              maxWidth: "100%",
              maxHeight: "90vh",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              objectFit: "contain",
            }}
          />
        </a>

        {/* Optional close button */}
        <button
          onClick={handleClose}
          style={{
            position: "absolute",
            top: "-40px",
            right: "-40px",
            background: "none",
            border: "none",
            color: "white",
            fontSize: "24px",
            cursor: "pointer",
            padding: "10px",
          }}
          aria-label="Close popup"
        >
          ×
        </button>
      </div>
    </div>
  );
}

//old working code with Modal
// "use client";
// import React, { useState, useEffect } from "react";
// import { Modal, Button } from "react-bootstrap";

// export default function PopupModal() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);

//   // Automatically open the modal on page load
//   useEffect(() => {
//     setShow(true);
//   }, []);

//   return (
//     <div>
//       {/* React-Bootstrap Modal */}
//       <Modal
//         show={show}
//         onHide={handleClose} // Close modal when clicking outside or pressing Escape
//         centered
//         backdrop={true} // Allows clicking outside to close the modal
//         keyboard={true} // Allows Escape key to close the modal
//         style={{ // Add this style
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >

//         {/* <Modal.Header closeButton>
//           <Modal.Title>Welcome!</Modal.Title>
//         </Modal.Header> */}
//         <Modal.Body className="p-0">
//           {/* <p>This is the content of the modal that opens on page load.</p> */}
//           {/* Image with Link */}
//           <a href="https://forms.gle/DBNE5ww7kJp9xwvE8" target="_blank" rel="noopener noreferrer">
//             <img
//               src="/assets/images/banner/CEE_Flyer.png"
//               alt="Admission Open Now"
//               style={{
//                 width: "100%",
//                 maxWidth: "100%",
//                 height: "auto",
//                 display: "block",
//                 borderRadius: "10px",
//               }}
//             />
//           </a>
//         </Modal.Body>
//         {/* <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={() => alert("Action performed!")}>
//             Save Changes
//           </Button>
//         </Modal.Footer> */}
//       </Modal>
//     </div>
//   );
// }