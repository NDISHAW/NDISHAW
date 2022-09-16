import React from 'react';
import './Footer.css';
// import shapebg from './shapebg.png';

export default function Footer() {
    let ftimage = require("./bg/shape");
  return (
    <div className='footer-container'>
        <div className='footer-parent'>
            <img src={ftimage.default} alt="no internet connection" />
        </div>
    </div>
  )
}
// ./ assets / Home / shape - bg.png;