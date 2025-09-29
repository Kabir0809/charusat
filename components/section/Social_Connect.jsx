import React, { useEffect } from 'react';

const GenuinEmbed = () => {
  useEffect(() => {
    window.genuin.init({
      config: {
        embed_id: '67f7bdc8dd2469d64ef2309d',
        api_key: '4a1f34a0cb8c1cc32d237e2f0d57d372907af96fc5dd8bc8',
      }
    })
  }, [])

  return (
    <div className="social-connect-section">
      <div className="container">
        <div className="section-header text-center">
          {/* <span className="subtitle">COMMUNITY ENGAGEMENT</span> */}
          <h2 className="title fw-bold">Vibrancy @CHARUSAT</h2>
        </div>
        
        <div className="embed-wrapper">
          <div
            id="gen-sdk"
            className="gen-sdk-class"
          ></div>
        </div>
      </div>

      <script src="https://media.begenuin.com/sdk/v1/gen_sdk.min.js"></script>

      <style jsx>{`
        .social-connect-section {
          padding: 3rem 0;
          background: #fff;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .section-header {
          margin-bottom: 2rem;
        }

        .subtitle {
          display: block;
          color: #f16126;
          font-size: 1rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .title {
          font-size: 2.25rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 1.5rem;
        }

        .embed-wrapper {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .embed-wrapper :global(#gen-sdk) {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        @media (max-width: 1024px) {
          .title {
            font-size: 2rem;
          }
        }

        @media (max-width: 768px) {
          .social-connect-section {
            padding: 2rem 0;
          }

          .title {
            font-size: 1.75rem;
          }

          .embed-wrapper {
            border-radius: 8px;
          }
        }

        @media (max-width: 640px) {
          .subtitle {
            font-size: 0.875rem;
          }

          .title {
            font-size: 1.5rem;
            margin-bottom: 1rem;
          }

          .embed-wrapper {
            padding-bottom: 75%; /* 4:3 Aspect Ratio for mobile */
          }
        }
      `}</style>
    </div>
  );
};

export default GenuinEmbed;
