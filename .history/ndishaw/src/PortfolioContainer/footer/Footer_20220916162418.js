import React from "react";
import "./Footer.css";
import ScrollService from "../../utilities/ScrollService";
export default function Footer() {
    const switchScreen = (index, screen) => {
      let screenComponent = document.getElementById(screen.screen_name);
      if (!screenComponent) return;

      screenComponent.scrollIntoView({ behavior: "smooth" });

    };
  return (
    <div className="scroll-container">
      <button
        className="btn-scroll"
        onClick={() => ScrollService.scrollHandler.scrollToHome()}
      >
        <i className="fa fa-arrow-up"></i>
      </button>
    </div>
  );
}
