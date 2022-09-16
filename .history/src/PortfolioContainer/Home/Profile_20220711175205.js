import React from 'react';
import Typical from 

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="https://www.facebook.com/ibrahn1">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://twitter.com/Abraham06434241">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="www.linkedin.com/in/ndishawmuriithi">
              <i className="fa fa-facebook-square"></i>
            </a>
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
                    "Full Stack Developer 📱,🖥️",
                    1000,
                    "Cross Platform Developer 🌐",
                    1000,
                    "React Developer  ",
                    1000,
                    "Ruby Developer",
                    1000,
                  ]}
                />
              </h1>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
