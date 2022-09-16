import React from "react";
import "./Footer.css";
import ScrollService from "../../utilities/ScrollService";
export default function Footer() {
  return (
    <div className="scroll-container">
      <button
        className="btn-scroll"
        onClick={() => ScrollService.scrollHandler.scrollToHome()}
      >
       
      </button>
    </div>
  );
}
