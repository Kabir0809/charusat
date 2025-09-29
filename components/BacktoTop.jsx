"use client"
import React from "react";
import { useState, useEffect } from "react";


const BacktoTop = () => {
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.screenY > 400) {
                setVisible(true)
            } else {
                setVisible(false)
            }
        })
    }, [])
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
  return (
      <div>
        {console.log(`I am in back to top`)}
      <span
        title="Back to top"
        onClick={scrollToTop}
        style={{
        //   display: visible ? "inline" : "none",
          cursor: "pointer",
          backgroundColor: "black"
        }}
      >
        {
            visible &&
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className="bi bi-arrow-up-circle"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"
          />
        </svg>}
      </span>
    </div>
  );
};

export default BacktoTop;
