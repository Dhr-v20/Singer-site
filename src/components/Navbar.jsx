import React from "react";
import { Link } from "react-router-dom";

const IconFacebook = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" {...props}>
    <path
      fill="currentColor"
      d="M22.675 0h-21.35C.595 0 0 .592 0 1.324v21.352C0 23.407.595 
      24 1.325 24h11.494v-9.294H9.691V11.08h3.128V8.414c0-3.1 
      1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 
      0-1.796.716-1.796 1.767v2.316h3.587l-.467 3.626h-3.12V24h6.116C23.406 
      24 24 23.407 24 22.676V1.324C24 .592 23.406 0 22.675 0z"
    />
  </svg>
);

const IconInstagram = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" {...props}>
    <rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="5"
      ry="5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
  </svg>
);

const IconYouTube = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" {...props}>
    <path
      fill="currentColor"
      d="M23.5 6.2s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.1-1C17.2 2.5 
      12 2.5 12 2.5h-.1s-5.2 0-8.6.4c-.5.1-1.3.1-2.1 1-.6.7-.8 2.3-.8 
      2.3S0 8.1 0 10v1.9c0 1.9.2 3.8.2 3.8s.2 1.6.8 
      2.3c.8.9 1.9.8 2.3.9 1.7.2 7.1.4 7.1.4s5.2 0 8.6-.4c.5-.1 
      1.3-.1 2.1-1 .6-.7.8-2.3.8-2.3s.2-1.9.2-3.8V10c0-1.9-.2-3.8-.2-3.8zM9.6 
      13.6V8.4l5.6 2.6-5.6 2.6z"
    />
  </svg>
);

export default function Navbar() {
  return (
    <>
    <nav className="navbar">
      <h1 className="logo">
        <span  > <img className="site-name" src="Drawing__1___1_-removebg-preview.png" alt="logo" /></span>
      </h1>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/biography">Biography</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/video">Video</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="social-icons">
        <a className="facebook" href="https://www.facebook.com/share/19pm5VNS1a/" target="_blank" rel="noopener noreferrer">
          <IconFacebook />
        </a>
        <a className="instagram" href="https://www.instagram.com/virenprajapati73?igsh=NW4wMGp2MzRrd2Jv" target="_blank" rel="noopener noreferrer">
          <IconInstagram />
        </a>
        <a className="youtube" href="https://youtube.com/@virenprajapati73?si=eZ4eyjvd2ubUx-40" target="_blank" rel="noopener noreferrer">
          <IconYouTube />
        </a>
      </div>
    </nav>

    {/* Neon running line */}
      <div className="neon-line"></div>

    </>
  );
}
