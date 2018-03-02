import React from 'react';
import './Login.css';
// import logo from '../../assets/music.png';
// import ladyIMG from '../../assets/lady.jpg';

export default function Login() {
  return (
    <div className="login">
      {/* <img className="lady" src={ladyIMG} /> */}
      <div className="login-panel">
        {/* <img className="logo" src={logo} /> */}
        <h1 className="company-name"><span id="company-name-bold">Song</span>ster</h1>
        <input />
        <input />
        <button>LOG IN</button>
      </div>
    </div>
  );
}