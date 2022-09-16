/* eslint-disable */
import React from "react";
import Typical from "react-typical";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
            
          <div className="colz">
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlited-text">Abraham</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiastic Developer 😍",
                    1000,
                    "Full Stack Dev 🖥️",
                    1000,
                    // "Cross Platform Dev 🌐",
                    // 1000,
                    "React/React Native Dev  ",
                    1000,
                    "Ruby Dev 💎",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className="profile-otpions">
            {" "}
            <button className="btn primary-btn">Hire Me </button>
            <a
              href="ABRAHAM MURIITHI CV.pdf"
              download="ABRAHAM MURIITHI CV.pdf"
            >
                <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
            <div className="profile-picture-background">

            </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;