import React, { useEffect, useState } from "react";
import {Link,NavLink} from "react-router-dom";
import "./header.css";
import logo from "../pic/logo.png"



function Header() {
  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      const nav = document.querySelector(".nav");

      if (nav) {
        if (window.scrollY > 0) {
          // Add the "nav__scroll" class when scrolling down
          nav.classList.add("nav__scroll");
        } else {
          // Remove the "nav__scroll" class when scrolling to the top
          nav.classList.remove("nav__scroll");
        }
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // The empty dependency array ensures this effect runs only once

  
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
    
  };
  return (
    <nav className="nav">
      <img className="logo" src={logo} alt="" />
      <ul className={active}>
        <li className="nav__item">
          <a href="#home" className="nav__link" onClick={() => handleScrollToSection('home')}>
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#about" className="nav__link" onClick={() => handleScrollToSection('about')}>
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="#skills" className="nav__link" onClick={() => handleScrollToSection('skills')}>
            Skills
          </a>
        </li>
        <li className="nav__item">
          <a href="#portfolio" className="nav__link" onClick={() => handleScrollToSection('portfolio')}>
            Portfolio
          </a>
        </li>
        <li className="nav__item">
          <a href="#contact" className="nav__link" onClick={() => handleScrollToSection('contact')}>
            Contact
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Header;