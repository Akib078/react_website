import React from "react"
import "./home.css"
import hero from "../pic/hero.jpg"
import cv from "../pic/cv.jpg"
import back from "../pic/back.png"
import { Typewriter, useTypewriter } from "react-simple-typewriter"
import Aos from 'aos'
import 'aos/dist/aos.css'
Aos.init();
Aos.refresh();


const Home = () => {
  return (

  <main id="home" style={{ backgroundImage: `url(${back})` }}>
    <br></br>
    <br></br>
    <br></br>
  <div className="container">
    <img src={hero} alt="" />
    <div className="hero-text">
      <h1 style={{color:"#24262b"}} data-aos="fade-up" data-aos-duration="1500">Hello! I am Akib.</h1>
      <h1 style={{color:"#24262b"}} data-aos="fade-up" data-aos-duration="1500">A<span> <Typewriter words={["Software Tester.", "Web Developer.", "Graphics Designer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} /></span></h1>
      <p data-aos="fade-up" data-aos-duration="2000">
        Welcome to my personal portfolio. Hope you will like it!
      </p>
      <a href={cv} download className="button" data-aos="fade-up" data-aos-duration="2500">My Resume</a>
    </div>
  </div>
</main>
  );
}

export default Home