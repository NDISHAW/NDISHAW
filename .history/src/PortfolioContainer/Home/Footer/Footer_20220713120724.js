import React from 'react';
import './Footer.css';
import { shapebg } from '..';


export default function Footer() {
    // let ftimage = require("./bg/shapebg.png");
  return (
    <div className="footer-container">
      <div className="footer-parent">
        <img src={shapebg} alt="no internet connection" />
      </div>
    </div>
  );
}
// ./ assets / Home / shape - bg.png;