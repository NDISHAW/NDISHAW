import React from 'react';
import './Footer.css';
// import shapebg from './shapebg.png';

export default function Footer() {
    let ftimage = require("./../../assets/shape-bg.png");
  return (
    <div className='footer-container'>
        <div className='footer-parent'>
            <img src={ftimage} alt="no internet connection" />
        </div>
    </div>
  )
}
// ./ assets / Home / shape - bg.png;