import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import I1 from "@/public/assets/images/clients/01.jpg";
import I2 from "@/public/assets/images/clients/02.jpg";
import I3 from "@/public/assets/images/clients/03.jpg";
import I4 from "@/public/assets/images/clients/04.webp";
import I5 from "@/public/assets/images/clients/05_.png";

const subTitle = "Testimonials";
// const title = "What People Say";
// const absTitle = "Testimonials";
const title = "See What They're Saying";
const clientSliderList = [
  {
    imgUrl: I1,
    imgAlt: "Dr A P J Abdul Kalam testimonial",
    iconNane: "icofont-quote-left",
    desc: "I am happy to know that CHARUSAT has a goal set for mission of social uplifment with components of knowledge acquisition and imparting education.",
    name: "Dr A P J Abdul Klalam",
    degi: "Former President of India & Architect of Missile Programme of India",
  },
  {
    imgUrl: I2,
    imgAlt: "Dr Vijay Bhatkar testimonial",
    iconNane: "icofont-quote-left",
    desc: "I am extremely impressed with CHARUSAT as it is driven by Research and innovation.",
    name: "Dr. Vijay Bhatkar",
    degi: "Padmashri, Architech First Super Computer-PARAM",
  },
  {
    imgUrl: I3,
    imgAlt: "Dr R A Mashelkar testimonial",
    iconNane: "icofont-quote-left",
    desc: "I was proud to see that CHARUSAT has the dream of becoming world class in education and reserach. This dream can be converted into reality, if we match this great ambition with stimulating ambience. I have no doubt that this dream will become a reality.",
    name: "Dr. R A Mashelkar",
    degi: "Padma Vibhushan, National Research Professor, National Chemical Laboratory",
  },
  {
    imgUrl: I4,
    imgAlt: "Shri Narendra Modi testimonial",
    iconNane: "icofont-quote-left",
    desc: "CHARUSAT is indeed a Golden Truth of Gujarat.",
    name: "Shri Naredra Modi",
    degi: "Hon. Prime Minister of India",
  },
  {
    imgUrl: I5,
    imgAlt: "Dr S Jaishankar testimonial",
    iconNane: "icofont-quote-left",
    desc: "A nation cannot be considered significant without exceptional universities. CHARUSAT students, you are truly fortunate to have the privilege of being students at such an institution, which is part of contemporary education, the type of education that will define a Viksit Bharat.",
    name: "Dr. S. Jaishankar",
    degi: "External Affairs Minister,Government of India",
  },
];

const ClientsThree = () => {
  return (
    <section className="clients-section style-3 py-4" role="region" aria-labelledby="testimonials-heading">
      <div className="container">
        <div className="section-header text-center py-1">
          <span className="subtitle" aria-label="Section category">{subTitle}</span>
          <h2 id="testimonials-heading" className="title">{title}</h2>
          {/* <h2 className="abs-title">{absTitle}</h2> */}
        </div>
        <div className="section-wrapper">
          <div 
            className="clients-slider2 overflow-hidden"
            role="group"
            aria-labelledby="testimonials-heading"
            aria-live="polite"
            aria-atomic="false"
          >
            <Swiper
              loop={"true"}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".clients-slider2-prev",
                nextEl: ".clients-slider2-next",
              }}
              modules={[Autoplay, Navigation]}
              a11y={{
                enabled: true,
                prevSlideMessage: 'Previous testimonial',
                nextSlideMessage: 'Next testimonial',
                firstSlideMessage: 'This is the first testimonial',
                lastSlideMessage: 'This is the last testimonial',
              }}
              role="region"
              aria-label="Testimonials carousel"
            >
              {clientSliderList.map((val, i) => (
                <SwiperSlide 
                  key={i}
                  role="group"
                  aria-label={`Testimonial ${i + 1} of ${clientSliderList.length}`}
                  aria-describedby={`testimonial-${i}-content`}
                >
                  <div className="client-item">
                    <div className="client-inner">
                      <div className="_client-thumb">
                        <Image
                          style={{ height: "250px", borderRadius: "100%" }}
                          src={val.imgUrl}
                          alt={val.imgAlt}
                          width={300}
                          height={250}
                        />
                        <div className="quote" aria-hidden="true">
                          <i className={val.iconNane}></i>
                        </div>
                      </div>
                      <div className="client-content">
                        <div 
                          id={`testimonial-${i}-content`}
                          aria-labelledby={`testimonial-${i}-author`}
                        >
                          <p>{val.desc}</p>
                        </div>
                        <div className="client-info">
                          <h4 
                            id={`testimonial-${i}-author`}
                            className="client-name"
                          >
                            {val.name}
                          </h4>
                          <span className="client-degi">{val.degi}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div 
              className="clients-slider-nav clients-slider2-next"
              role="button"
              aria-label="Next testimonial"
              tabIndex="0"
            >
              <i className="icofont-double-left" aria-hidden="true"></i>
            </div>
            <div 
              className="clients-slider-nav clients-slider2-prev"
              role="button"
              aria-label="Previous testimonial"
              tabIndex="0"
            >
              <i className="icofont-double-right" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Enhanced focus styles for navigation buttons */
        .clients-slider-nav:focus {
          outline: 3px solid #0066cc;
          outline-offset: 2px;
        }

        .clients-slider-nav:focus:not(:focus-visible) {
          outline: none;
        }

        /* Ensure navigation elements are interactive */
        .clients-slider-nav {
          cursor: pointer;
        }

        .clients-slider-nav:hover {
          opacity: 0.8;
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .clients-slider-nav {
            border: 2px solid currentColor;
          }
          
          .clients-slider-nav:focus {
            outline: 4px solid currentColor;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .swiper {
            --swiper-autoplay-delay: 0;
          }
        }

        /* Print accessibility */
        @media print {
          .client-item {
            break-inside: avoid;
            page-break-inside: avoid;
          }
          
          .clients-slider-nav {
            display: none;
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

export default ClientsThree;