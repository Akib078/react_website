import React, { Component } from 'react';
import "./project.css"
import p1 from "../pic/p1.png"
import p2 from "../pic/p2.png"
import p3 from "../pic/p3.png"
import p4 from "../pic/p4.png"
import p5 from "../pic/p5.png"
import p6 from "../pic/p6.png"
import p7 from "../pic/p7.png"
import p8 from "../pic/p8.png"
import Aos from 'aos'
import 'aos/dist/aos.css'
Aos.init();
Aos.refresh();

class Project extends Component {
    render() {
        return (
            <section className="products">
            <h2>Software Projects</h2>
            <div className="all-products">
              <div className="product" data-aos="fade-up" data-aos-duration="1500">
              <img src={p1} />
                <div className="product-info">
                  <h4 className="product-title">Personal Portfolio</h4>
                  <a className="product-btn" href="https://Akib078.github.io/JS_Portfolio_Project/">
                    Visit Here
                  </a>
                </div>
              </div>
              <div className="product" data-aos="fade-up" data-aos-duration="1500">
                <img src={p2} />
                <div className="product-info">
                  <h4 className="product-title">Automation Testing</h4>
                  <a className="product-btn" href="https://github.com/Akib078/Selenium_Project">
                    Visit Here
                  </a>
                </div>
              </div>
              <div className="product" data-aos="fade-up" data-aos-duration="1500">
              <img src={p3} />
                <div className="product-info">
                  <h4 className="product-title">Resume Website</h4>
                  <a className="product-btn" href="https://Akib078.github.io/Resume_Project/">
                    Visit Here
                  </a>
                </div>
              </div>
              <div className="product" data-aos="fade-up" data-aos-duration="1500">
              <img src={p4} />
                <div className="product-info">
                  <h4 className="product-title">Restaurant Project</h4>
                  <a className="product-btn" href="https://Akib078.github.io/Restaurant_Project/">
                    Visit Here
                  </a>
                </div>
              </div>
              <div className="product" data-aos="fade-up" data-aos-duration="1500">
              <img src={p5} />
                <div className="product-info">
                  <h4 className="product-title">Manual Testing</h4>
                  <a className="product-btn" href="https://github.com/Akib078/Forkify_Site_Testing">
                    Visit Here
                  </a>
                </div>
              </div>
              <div className="product" data-aos="fade-up" data-aos-duration="1500">
              <img src={p6} />
                <div className="product-info">
                  <h4 className="product-title">Fullstack Project</h4>
                  <a className="product-btn" href="https://github.com/Akib078/cse370_php_project">
                    Visit Here
                  </a>
                </div>
              </div>
              <div className="product" data-aos="fade-up" data-aos-duration="1500">
              <img src={p7} />
                <div className="product-info">
                  <h4 className="product-title">API Testing</h4>
                  <a className="product-btn" href="https://github.com/Akib078/Booking_API_Testing">
                    Visit Here
                  </a>
                </div>
              </div>
              <div className="product" data-aos="fade-up" data-aos-duration="1500">
              <img src={p8} />
                <div className="product-info">
                  <h4 className="product-title">Desktop Assistant</h4>
                  <a className="product-btn" href="https://github.com/Akib078/Desktop_Assistant_Project">
                    Visit Here
                  </a>
                </div>
              </div>
            </div>
          </section>
          
        );
    }
}

export default Project;