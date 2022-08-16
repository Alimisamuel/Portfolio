import React from "react";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/SliderFiveVideoDark";
import About from "../../components/about/AboutSix";
import Service from "../../components/service/Service";
import Skills from "../../components/skills/Skills";
import Portfolio from "../../components/portfolio/Portfolio";
import Testimonial from "../../components/testimonial/Testimonial";
import Blog from "../../components/blog/Blog";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
// import { Link } from "react-router-dom";
import useDocumentTitle from "../../components/useDocumentTitle";

const HomeSix = () => {
  useDocumentTitle("Portfolio || Alimi samuel");
  return (
    <div className="home-dark">
      <Header />
      {/* End Header Section */}
      <Slider />
      {/* End Banner Section */}

      {/* About Me */}
      <section id="about" className="section about-section after-left-section">
        <div className="container">
          <About />
        </div>
      </section>
      {/* End About Me */}

      {/* Services */}
      <section id="services" className="section services-section gray-bg">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">My Services</h3>
              <p>
              I am a Graphic, Web designer & Mobile Developer creating experiences that thoroughly surprise, delight, & provoke.
              </p>
            </div>
          </div>
          {/* End .row */}
          <Service />
        </div>
      </section>
      {/* End Services */}

      {/*  Skills */}
      <section className="section skill-section">
        <div className="container">
          <Skills />
        </div>
      </section>
      {/* End Skills */}

      <section id="work" className="section gray-bg">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">My Portfolio</h3>
              <p>
              Originally from Nigeria, Samuel Alimi is a Graphic, Web designer & software developer with a passion for technology and interactive experiences. Along with completing his National Diploma in <span className="color-theme">Yabatech</span>, his past experiences range from Graphics design,  software developer at <span className="color-theme">Nupat Technology</span> Brand Identity and packaging at <span className="color-theme"> Eleven 27 Creatives </span> and finally, video editor.

       
              His work is bold and confident, often featuring typography at the forefront of his colorful designs and functional ideation. Coupled with his skills in graphics, his interactive experiences are playful yet effective in bringing design concepts to life and enhancing the user experience.<br></br>
              He’s often inspired by music, food plating techniques, nature and biomimicry and watches documentaries on NatGeo to spark his imagination. Samuel enjoys creating brands, websites, and interactive experiences that thoroughly surprise, delight, and provoke.
              </p>
            </div>
            <div className="container" style={{marginTop: '50px'}}>
            <Blog />
            </div>
          </div>
          {/* End .row */}
          <Portfolio />
        </div>
      </section>
      {/* End Portfolio */}


        {/* Blog */}
        {/* <section id="blog" className="section gray-bg">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">Recent articles</h3>
              <p>
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores.
              </p>
            </div>
          </div> */}
          {/* End .row */}
          {/* <Blog />
        </div>
      </section> */}
      {/*  End Blog */}

      <div className="section testimonial">
        <div className="container">
          <Testimonial />
        </div>
      </div>
      {/* End testimonial */}

    

      {/* Contact */}
      <section id="contact" className="section after-left-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 my-3">
              <div className="contct-form">
                <div className="sm-title">
                  <h4 className="font-alt">Contact us</h4>
                </div>
                {/* End .sm-title */}
                <Contact />
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-4 ml-auto my-3">
              <div className="contact-info">
                <div className="sm-title">
                  <h4 className="font-alt">Get in touch</h4>
                  <p>
                    Always available for freelancing if the right project comes
                    along, Feel free to contact me.
                  </p>
                </div>
                <div className="media">
                  <div className="icon">
                    <i className="ti-map"></i>
                  </div>
                  <span className="media-body">
                  
                    Ojo, Lagos, <br />
                   Nigeria
                  </span>
                </div>
                {/* End media */}

                <div className="media">
                  <div className="icon">
                    <i className="ti-email"></i>
                  </div>
                  <span className="media-body">
                  
         
                    alimisamuel121@gmail.com
                  </span>
                </div>
                {/* End media */}

                <div className="media">
                  <div className="icon">
                    <i className="ti-mobile"></i>
                  </div>
                  <span className="media-body">
                   +234 902 881 8847
                    <br />
                    +234 916 329 3947
                  </span>
                </div>
                {/* End media */}
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
      {/* End Contact */}

      {/* Footer */}
      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
      {/*  End Footer */}
    </div>
  );
};

export default HomeSix;
