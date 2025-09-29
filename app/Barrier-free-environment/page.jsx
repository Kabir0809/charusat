"use client";
import { Fragment, useState } from "react";
import Iframe from "react-iframe";

// const videos = [
//   {
//     id: "oKmQQZQRyIw",
//     title:"Student Speaks - National",
//     caption: "Student Speaks - National",
//     thumbnail: "https://img.youtube.com/vi/oKmQQZQRyIw/hqdefault.jpg",
//   },
//   {
//     id: "OuWqAmaeqbY",
//     title: "Student Speaks - International",
//     caption: "Student Speaks - International",
//     thumbnail: "https://img.youtube.com/vi/OuWqAmaeqbY/hqdefault.jpg",
//   },
//   {
//     id: "CHsBpcYgXqM",
//     title: "Concerts",
//     caption: "Concerts",
//     thumbnail: "https://img.youtube.com/vi/CHsBpcYgXqM/hqdefault.jpg",
//   },
//   {
//     id: "BQNRw2KjEvo",
//     title: "Technical Events",
//     caption: "Technical Events",
//     thumbnail: "https://img.youtube.com/vi/BQNRw2KjEvo/hqdefault.jpg",
//   },
//   {
//     id: "b2HHjC62NuM",
//     title: "Spoural - A Sports and Cultural Event",
//     caption: "Spoural - A Sports and Cultural Event",
//     thumbnail: "https://img.youtube.com/vi/b2HHjC62NuM/hqdefault.jpg",
//   },
// ];

// const Campus = () => {
//   const [activeVideoId, setActiveVideoId] = useState(null);

//   const handlePlay = (id) => {
//     setActiveVideoId(id === activeVideoId ? null : id); // Toggle video playback
//   };

//   return (
//     <Fragment>
//       <div className="blog-section p-4">
//         <div className="container">
//           <h1 className="text-center mb-4 h1 text-white fw-bold page-title">
//             CHARUSAT Campus Glimpse
//           </h1>
          
//           {/* Responsive Video Grid */}
//           {videos.map((video) => (
//           <div className="video-gallery">
//           <h3 className="video-title">{video.title}</h3><br/>  
//               <br/>
//               <div key={video.id} className="video-content">
              
//                 {/* <h6 className="video-title">hi</h6> */}
//                 {activeVideoId === video.id ? (
//                   // Inline Video Player
//                   <div className="video-container">
//                     <iframe
//                       src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
//                       title="YouTube video player"
//                       frameBorder="0"
//                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                       allowFullScreen
//                       className="video-frame"
//                     ></iframe>
//                     <button
//                       className="btn btn-secondary mt-2"
//                       onClick={() => handlePlay(null)}
//                     >
//                       Close
//                     </button>
//                   </div>
//                 ) : (
                  
//                   // Video Thumbnail
//                   <div
//                     className="thumbnail-wrapper"
//                     onClick={() => handlePlay(video.id)}
//                   >
//                     <img
//                       src={video.thumbnail}
//                       alt={video.caption}
//                       className="video-thumbnail"
//                     />
//                     <div className="overlay">
//                       <span className="play-icon">▶</span>
//                     </div>
//                   </div>
//                 )}
//                 {/* <h6 className="video-title">{video.caption}</h6> */}
//               </div>
            
//           </div>))}
//         </div>
//       </div>

//       {/* Inline CSS */}
//       <style jsx>{`
//         .blog-section {
//           background-color: #f9f9f9;
//         }

//         .page-title {
//           background: linear-gradient(45deg, #ff4d00, #ff8000);
//           padding: 15px;
//           border-radius: 10px;
//           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//         }

//         .video-gallery {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//           gap: 20px;
//           margin-top: 20px;
//         }

//         .video-content {
//           display:block;
//           text-align:left;
//         }

//         .thumbnail-wrapper {
//           position: relative;
//           cursor: pointer;
//           overflow: hidden;
//           border-radius: 10px;
//           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//           transition: transform 0.3s ease-in-out;
//           width: 100%;
//           aspect-ratio: 16 / 9; /* Maintain 16:9 aspect ratio */
//         }

//         .thumbnail-wrapper:hover {
//           transform: scale(1.05);
//         }

//         .video-thumbnail {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           border-radius: 10px;
//         }

//         .overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background: rgba(0, 0, 0, 0.5);
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           opacity: 0;
//           transition: opacity 0.3s ease-in-out;
//         }

//         .thumbnail-wrapper:hover .overlay {
//           opacity: 1;
//         }

//         .play-icon {
//           font-size: 2rem;
//           color: white;
//         }

//         .video-title {
//           margin-top: 10px;
//           font-size: 1rem;
//           font-weight: bold;
//           color: #333;
//         }

//         .video-container {
//           position: relative;
//           width: 100%;
//           aspect-ratio: 16 / 9; /* Maintain 16:9 aspect ratio */
//           border-radius: 10px;
//           overflow: hidden;
//         }

//         .video-container iframe {
//           width: 100%;
//           height: 100%;
//           border-radius: 10px;
//         }

//         @media (max-width: 768px) {
//           .video-gallery {
//             grid-template-columns: 1fr;
//           }
//         }
//       `}</style>
//     </Fragment>
//   );
// };

// export default Campus;

const BarrierFreeEnvironment = () => {
  return (
    <Fragment>
      <div className="blog-section p-4">
        <div className="container p-4" style={{ backgroundColor: "#fff" }}>
          <div className="row justify-content-center">
            <div className="col">
              <article>
                <div className="section-wrapper" style={{ color: "#0066b3" }}>
                  {/* <p className="text-center mb-4 h1 fw-bold">
                    CHARUSAT CAMPUS Glimpse
                  </p> */}
                  <h1 
                    className="text-center mb-4 h1 text-white fw-bold"
                    style={{
                      backgroundColor: "#ff4d00",
                      padding: "10px", // Adding padding to make the gradient visible
                    }}
                  >
                    {" "}
                   Barrier Free Environment
                  </h1>
                  
                  {/* <h2 className="text-center mb-4">Coming Soon</h2> */}
                  
                  {/* Video Container */}
                  <div className="video-container">
                    <div className="video-wrapper">
                      <iframe
                        src="https://www.youtube-nocookie.com/embed/0yzIzT20_L0"
                        title="Barrier Free Environment at CHARUSAT"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                        className="video-frame"
                      />
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <br/>

      <style jsx>{`
        .blog-section {
          background-color: #fff9f1;
        }

        .card-main h6 {
          background-color: #fff; /* White background */
          background-image: linear-gradient(
            45deg,
            #0066b3,
            #004080
          ); /* Updated blue gradient */
          color: #fff; /* Text color */
          padding: 10px;
          border-radius: 5px;
        }

        .image-placeholder {
          height: 200px;
          background-color: #fff; /* White background */
          background-size: cover;
          background-position: center;
          margin-bottom: 20px;
          transition: transform 0.3s ease-in-out;
          width: 94%;
          transform: scale(1.05);
          margin: auto;
          margin-bottom: 10px;
          border-radius: 5px;
          margin-top: 5px;
          margin-bottom: 15px;
        }

        .card {
          width: 90%;
          margin: auto;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Box shadow */
          transition: box-shadow 0.3s ease-in-out; /* Transition effect */
        }

        .card:hover {
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Shadow on hover */
        }

        .card h6 {
          color: #0066b3; /* Updated blue text color */
          background-color: #fff; /* White background */
          padding: 10px;
          border-radius: 5px;
        }

        .video-container {
          max-width: 800px;
          margin: 2rem auto;
          padding: 0 1rem;
        }

        .video-wrapper {
          position: relative;
          padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
          height: 0;
          overflow: hidden;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          background: #fff;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .video-wrapper:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }

        .video-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        @media (max-width: 768px) {
          .video-container {
            margin: 1.5rem auto;
          }
          
          .video-wrapper {
            border-radius: 8px;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default BarrierFreeEnvironment;
