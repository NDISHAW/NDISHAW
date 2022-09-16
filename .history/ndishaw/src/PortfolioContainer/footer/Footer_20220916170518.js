import React from "react";
import "./Footer.css";
import ScrollService from "../../utilities/ScrollService"
import scrollToHome from "../../utilities/ScrollService"
export default function Footer() {
    scrollToHome = () => {
      let homeScreen = document.getElementById("Home");
      if (!homeScreen) return;

      homeScreen.scrollIntoView({ behavior: "smooth" });
    };
  return (
    <div className="scroll-container">
      <button className="btn-scroll" onClick={ScrollService.scrollToHome}>
        {" "}
        <i className="fa fa-arrow-up"></i>{" "}
      </button>
    </div>
  );
}
