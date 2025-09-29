import React from 'react';
import Image from 'next/image';
import samsung from "@/public/assets/images/recruiters/samsung.png"
import tcs from "@/public/assets/images/recruiters/tcs.png"
import gsfc from "@/public/assets/images/recruiters/gsfc.png"
import Ain from "@/public/assets/images/recruiters/in.png"
//import byju from "@/public/assets/images/recruiters/byju.png"
import jeavio from "@/public/assets/images/recruiters/jeavio.png"
import evosys from "@/public/assets/images/recruiters/evosys.png"
import mg from "@/public/assets/images/recruiters/mg.png"
import berger from "@/public/assets/images/recruiters/berger.png"
import ops from "@/public/assets/images/recruiters/ops.png"
import jaro from "@/public/assets/images/recruiters/jaro.png"
import crest from "@/public/assets/images/recruiters/crest.png"
import adani from "@/public/assets/images/recruiters/adani.png"
import motorola from "@/public/assets/images/recruiters/motorola.png"
import icici from "@/public/assets/images/recruiters/icici.jpeg"
import tbea from "@/public/assets/images/recruiters/tbea.png"
import tr from "@/public/assets/images/recruiters/tr.png"
import meditab from "@/public/assets/images/recruiters/meditab.png"
import odoo from "@/public/assets/images/recruiters/odoo.png"

const title = "Recruiters";

const sponsorList = [
  {
    imgUrl: jaro,
    imgAlt: "Jaro Education recruiting partner",
  },
  {
    imgUrl: Ain,
    imgAlt: "Indian Navy recruiting partner",
  },
  {
    imgUrl: gsfc,
    imgAlt: "GSFC recruiting partner",
  },
  {
    imgUrl: ops,
    imgAlt: "OPS recruiting partner",
  },
  {
    imgUrl: mg,
    imgAlt: "MG recruiting partner",
  },
  {
    imgUrl: evosys,
    imgAlt: "Evosys recruiting partner",
  },
  {
    imgUrl: tbea,
    imgAlt: "TBEA recruiting partner",
  },
  {
    imgUrl: meditab,
    imgAlt: "Meditab recruiting partner",
  },
  {
    imgUrl: tr,
    imgAlt: "TR recruiting partner",
  },
  {
    imgUrl: adani,
    imgAlt: "Adani Group recruiting partner",
  },
  {
    imgUrl: berger,
    imgAlt: "Berger Paints recruiting partner",
  },
  {
    imgUrl: odoo,
    imgAlt: "Odoo recruiting partner",
  },
  {
    imgUrl: crest,
    imgAlt: "Crest recruiting partner",
  },
  {
    imgUrl: jeavio,
    imgAlt: "Jeavio recruiting partner",
  },
  {
    imgUrl: samsung,
    imgAlt: "Samsung recruiting partner",
  },
  {
    imgUrl: tcs,
    imgAlt: "TCS recruiting partner",
  },
  {
    imgUrl: motorola,
    imgAlt: "Motorola recruiting partner",
  },
  {
    imgUrl: icici,
    imgAlt: "ICICI Bank recruiting partner",
  },
];

const Sponsor = () => {
  return (
    <section className="sponsor-section" role="region" aria-labelledby="recruiters-heading">
      <div className="container">
        <div className="section-header text-center">
          <span className="subtitle" aria-label="Section category">Major</span>
          <h2 id="recruiters-heading" className="title">{title}</h2>
        </div>

        <div className="section-wrapper">
          <div 
            className="sponsor-slider row sponsor-main"
            role="list"
            aria-label="List of major recruiters and companies"
          >
            {sponsorList.map((val, i) => (
              <div key={i} className="col-md-2" data-aos="flip-right" role="listitem">
                <div className="sponsor-iten">
                  <div 
                    className="sponsor-thumb bg-white border p-3 m-2 rounded"
                    role="img"
                    aria-label={val.imgAlt}
                    tabIndex="0"
                  >
                    <Image  
                      src={val.imgUrl} 
                      alt={val.imgAlt} 
                      width={200} 
                      height={200}
                      style={{
                        objectFit: "contain",
                        width: "100%",
                        height: "auto"
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Enhanced focus styles for keyboard navigation */
        .sponsor-thumb:focus {
          outline: 3px solid #0066cc;
          outline-offset: 2px;
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .sponsor-thumb:focus:not(:focus-visible) {
          outline: none;
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .sponsor-thumb {
            border: 2px solid currentColor !important;
          }
          
          .sponsor-thumb:focus {
            outline: 4px solid currentColor;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .sponsor-thumb {
            transition: none;
          }
          
          .sponsor-thumb:focus {
            transform: none;
          }
          
          [data-aos] {
            animation: none !important;
          }
        }

        /* Windows high contrast mode */
        @media (-ms-high-contrast: active) {
          .sponsor-thumb {
            border: 2px solid;
          }
        }

        @media (max-width: 768px) {
          .sponsor-thumb:focus {
            outline-width: 2px;
          }
        }

        /* Print accessibility */
        @media print {
          .sponsor-thumb {
            border: 1px solid #000;
            box-shadow: none;
            break-inside: avoid;
          }
        }

        /* Screen reader only content */
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
      `}</style>
    </section>
  );
};

export default Sponsor;