import React, { Component } from 'react';
import "./project.css"
import p1 from "../pic/p1.png"
import p2 from "../pic/p2.png"
import p3 from "../pic/p3.png"
import p4 from "../pic/p4.png"
import Aos from 'aos'
import 'aos/dist/aos.css'
Aos.init();
Aos.refresh();

class Project extends Component {
    render() {
        return (
            <section className="products">
            <h2>My Projects</h2>
            <div className="all-products">
              <div className="product" data-aos="fade-up" data-aos-duration="2500">
              <img src={p1} />
                <div className="product-info">
                  <h4 className="product-title">Personal Portfolio1</h4>
                  <a className="product-btn" href="https://akib0078.github.io/Portfolio1/">
                    Visit Here
                  </a>
                </div>
              </div>
              <div className="product" data-aos="fade-up" data-aos-duration="2500">
                <img src={p2} />
                <div className="product-info">
                  <h4 className="product-title">Personal Portfolio2</h4>
                  <a className="product-btn" href="https://akib0078.github.io/Portfolio2/">
                    Visit Here
                  </a>
                </div>
              </div>
              <div className="product" data-aos="fade-up" data-aos-duration="2500">
              <img src={p3} />
                <div className="product-info">
                  <h4 className="product-title">Resume Website</h4>
                  <a className="product-btn" href="https://akib0078.github.io/Resume_Project/">
                    Visit Here
                  </a>
                </div>
              </div>
              <div className="product" data-aos="fade-up" data-aos-duration="2500">
              <img src={p4} />
                <div className="product-info">
                  <h4 className="product-title">Restaurant Project</h4>
                  <a className="product-btn" href="https://akib0078.github.io/Restaurant_Project/">
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