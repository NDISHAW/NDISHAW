import React from "react";
import "./Footer.css";
import ScrollService from "../../utilities/ScrollService";
export default function Footer() {
    const switchScreen = () => {
      let Home = document.getElementById("Home");
      if (!Home) return;

      Home.scrollIntoView({ behavior: "smooth" });
    };
  return (
    <div className="scroll-container">
      <button
        className="btn-scroll"
        onClick={s}
      >
        <i className="fa fa-arrow-up"></i>
      </button>
    </div>
  );
}
