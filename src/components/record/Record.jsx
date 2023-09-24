import React, { useEffect } from "react"
import "./record.css"
import Aos from 'aos'
import 'aos/dist/aos.css'

Aos.init();
Aos.refresh();
const Record = () => {

  return (

    
<body id="about">
  <div><h1 style={{textAlign:"center",color:"#f5c104",fontSize:"28px"}}>About</h1></div>
<section className="timeline-section">
  <div className="timeline-items">
    <div className="timeline-item" data-aos="fade-up" data-aos-duration="2200">
      <div className="timeline-dot" />
      <div className="timeline-date">Education</div>
      <div className="timeline-content">
        <h3>Bachelors Science in CSE</h3>
        <h4>2019 - 2023</h4>
        <p>
          Brac University, Dhaka
        </p>
      </div>
    </div>
    <div className="timeline-item" data-aos="fade-up" data-aos-duration="2200">
      <div className="timeline-dot" />
      <div className="timeline-date">Education</div>
      <div className="timeline-content">
        <h3>Higher School Certificate</h3>
        <h4>2016 - 2018</h4>
        <p>
          Cantonment College, Jessore
        </p>
      </div>
    </div>
    <div className="timeline-item" data-aos="fade-up" data-aos-duration="2200">
      <div className="timeline-dot" />
      <div className="timeline-date">Education</div>
      <div className="timeline-content">
      <h3>Secondary School Certificate</h3>
        <h4>2008 - 2016</h4>
        <p>
          Jessore Zilla School, Jessore
        </p>
      </div>
    </div>
    <div className="timeline-item" data-aos="fade-up" data-aos-duration="2200">
      <div className="timeline-dot" />
      <div className="timeline-date">Experience</div>
      <div className="timeline-content">
      <h3>Assistant Director (IT)</h3>
        <h4>2021 - 2023</h4>
        <p>
          Bracu Business Club, BizBee
        </p>
      </div>
    </div>
    <div className="timeline-item" data-aos="fade-up" data-aos-duration="2200">
      <div className="timeline-dot" />
      <div className="timeline-date">Experience</div>
      <div className="timeline-content">
      <h3>Graphics Designer</h3>
        <h4>2022 - 2023</h4>
        <p>
          Shopnokuri and Chococharms
        </p>
      </div>
    </div>
    <div className="timeline-item" data-aos="fade-up" data-aos-duration="2200">
      <div className="timeline-dot" />
      <div className="timeline-date">Experience</div>
      <div className="timeline-content">
      <h3>General Member</h3>
        <h4>2020 - 2020</h4>
        <p>
          Bracu Computer Club, BuCC
        </p>
      </div>
    </div>
    
  </div>
</section>

</body>
  );
}

export default Record