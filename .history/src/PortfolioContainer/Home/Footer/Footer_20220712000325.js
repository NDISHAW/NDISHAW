import React from 'react';
import './Footer.css';
// import shapebg from './shapebg.png';

export default function Footer() {
    let ftimage = require("/home/ndishaw/Desktop/personal-portfolio/NDISHAW/ndishaw/src/assets/Home/shapebg.png");
  return (
    <div className='footer-container'>
        <div className='footer-parent'>
            <img src={ftimage.default} alt="no internet connection" />
        </div>
    </div>
  )
}
// ./ assets / Home / shape - bg.png;