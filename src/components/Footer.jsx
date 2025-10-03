import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo */}
        <div className="footer-logo">
          <img className="site-name-footer " src="Drawing__1___1_-removebg-preview.png" alt="logo" />
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h3>Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h3>Social Media</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/19pm5VNS1a/" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/virenprajapati73?igsh=NW4wMGp2MzRrd2Jv" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com/@virenprajapati73?si=eZ4eyjvd2ubUx-40" target="_blank" rel="noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Video */}
        <div className="footer-video">
          <h3>Video</h3>
          <a
            href="https://www.youtube.com/watch?v=k_vp3y_az1U"
            target="_blank"
            rel="noreferrer"
          >
            Watch on YouTube
          </a>
        </div>
      </div>
    </footer>
  );
}
