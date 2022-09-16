import React from "react";
import "./Footer.css";
// import ScrollService from "../../utilities/ScrollService"
import scrollToHome from "../../utilities/ScrollService"
export default function Footer() {
  return (
    <div className="scroll-container">
      <button
        className="btn-scroll"
        onClick={scrollToHome}
      >
        {" "}
        <i className="fa fa-arrow-up"></i>{" "}
      </button>
    </div>
  );
}
