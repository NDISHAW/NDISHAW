import React from "react";
import "./Footer.css";
import ScrollService from "../../utilities/ScrollService"
// import scrollToHome from "../../utilities/ScrollService"
export default function Footer() {
  return (
    <div className="scroll-container">
      <button
        className="primary-btn btn-scroll"
        onClick={() => ScrollService.scrollHandler.scrollToHome()}
      >
        {" "}
        <i className="fa fa-arrow-up"></i>{" "}
      </button>
    </div>
  );
}
