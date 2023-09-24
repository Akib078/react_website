import React from "react"
import "./home.css"
import hero from "../pic/hero.jpg"
import cv from "../pic/cv.jpg"
import back from "../pic/back.png"
import { Typewriter, useTypewriter } from "react-simple-typewriter"


const Home = () => {
  return (

  <main id="home" style={{ backgroundImage: `url(${back})` }}>
    <br></br>
    <br></br>
    <br></br>
  <div className="container">
    <img src={hero} alt="" />
    <div className="hero-text">
      <h1 style={{color:"#24262b"}}>Hello! I am Akib.</h1>
      <h1 style={{color:"#24262b"}}>A<span> <Typewriter words={["Graphics Designer.", "Web Developer.", "Digital Marketer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} /></span></h1>
      <p>
        Welcome to my personal portfolio. Hope you will like it!
      </p>
      <a href={cv} download className="button">My Resume</a>
    </div>
  </div>
</main>
  );
}

export default Home