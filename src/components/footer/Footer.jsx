import React, { useEffect } from "react"
import Record from "../record/Record";
import "./footer.css"
const Footer = () => {
  return (
    
<body>
<footer className="footer">
  <div className="containerf">
    <div className="rowf">
      <div className="footer-col">
        <h4>Web Page</h4>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>get help</h4>
        <ul>
          <li>
            <a href="https://web.whatsapp.com/">FAQ</a>
          </li>
          <li>
            <a href="mailto:rahman.oion@gmail.com">Order</a>
          </li>
          <li>
            <a href="mailto:rahman.oion@gmail.com">Complain</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Other Websites</h4>
        <ul>
          <li>
            <a href="https://Akib078.github.io/JS_Portfolio_Project/">Portfolio</a>
          </li>
          <li>
            <a href="https://github.com/Akib078/Selenium_Project">Automation</a>
          </li>
          <li>
            <a href="https://Akib078.github.io/Resume_Project/">Resume</a>
          </li>
          <li>
            <a href="https://Akib078.github.io/Restaurant_Project/">Restaurant</a>
          </li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>follow Me</h4>
        <div className="social-links">
          <a href="https://www.facebook.com/akibrahman.oion">
            <i className="fa fa-facebook-f" />
          </a>
          <a href="https://web.whatsapp.com/">
            <i className="fa fa-whatsapp" />
          </a>
          <a href="https://www.instagram.com/akkiibbb/">
            <i className="fa fa-instagram" />
          </a>
          <a href="www.linkedin.com/in/akib-rahman-6748b4220">
            <i className="fa fa-linkedin" />
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>


</body>
    
  );
}

export default Footer