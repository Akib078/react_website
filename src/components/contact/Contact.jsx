import React, { useEffect } from "react"
import "./contact.css"
import Aos from 'aos'
import 'aos/dist/aos.css'
Aos.init();
Aos.refresh();
const Contact = () => {
  return (
    
<body>
<section className="contact" id="contact">
  <div className="header">
    <h2>Contact</h2>
  </div>
  <div className="containerc">
    <div className="info_container" data-aos="fade-right" data-aos-duration="2200">
      <div className="location info_item">
        <div className="icon">
          <i className="fa fa-map-marker" />
        </div>
        <div className="information">
          <h4>Location:</h4>
          <p>Mohakhali, Dhaka</p>
        </div>
      </div>
      <div className="email info_item">
        <div className="icon">
          <i className="fa fa-envelope" />
        </div>
        <div className="information">
          <h4>Email:</h4>
          <p>rahman.oion@gmail.com</p>
        </div>
      </div>
      <div className="call info_item">
        <div className="icon">
          <i className="fa fa-phone" />
        </div>
        <div className="information">
          <h4>Phone:</h4>
          <p>01786101114</p>
        </div>
      </div>
      <div className="call info_item">
        <div className="icon">
          <i className="fa fa-calendar-check-o" />
        </div>
        <div className="information">
          <h4>Open Hours:</h4>
          <p>Mon-Sun: 24/7</p>
        </div>
      </div>
    </div>
    <div className="input_container" data-aos="fade-left" data-aos-duration="2200">
      <form action="mailto:rahman.oion@gmail.com">
        <div className="row">
          <input
            type="text"
            name=""
            id=""
            className="form_control"
            placeholder="Your Name"
            required=""
          />
          <input
            type="email"
            name=""
            id=""
            className="form_control"
            placeholder="Email Address"
            required=""
          />
        </div>
        <input
          type="text"
          name=""
          id=""
          placeholder="Subject"
          className="form_control"
          required=""
        />
        <textarea
          name=""
          id=""
          cols={30}
          rows={7}
          className="form_control"
          placeholder="Message"
          required=""
          defaultValue={""}
        />
        <div className="btn">
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>
  </div>
</section>

</body>
    
  );
}

export default Contact