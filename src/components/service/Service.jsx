import React, { useEffect } from "react"
import "./service.css"
import Aos from 'aos'
import 'aos/dist/aos.css'
Aos.init();
Aos.refresh();
const Service = () => {
  return (
    
<body className="s" id="skills">
<section className="servicess">
  <div className="containers">
    <h2 className="title">Skills</h2>
    <div className="cards">
      
      <div className="card" data-aos="fade-down" data-aos-duration="2200">
        <i className="fa fa-laptop" />
        <h3>Web Development</h3>
        <p>i)ReactJs ii)Html iii)CSS iv)Bootstrap v)Javascript
          vi)Python vii)PHP
        </p>
      </div>
      <div className="card" data-aos="zoom-in" data-aos-duration="2200">
        <i className="fa fa-pencil-square-o" />
        <h3>Graphics Design</h3>
        <p>i)Adobe Photoshop <br /> ii)Adobe Illustrator</p>
      </div>
      <div className="card" data-aos="fade-up" data-aos-duration="2200">
        <i className="fa fa-file-text-o" />
        <h3>Microsoft Office</h3>
        <p>i)Microsoft Word ii)Microsoft Exel iii)Microsoft Powerpoint</p>
      </div>
    </div>
  </div>
</section>



</body>
    
  );
}

export default Service