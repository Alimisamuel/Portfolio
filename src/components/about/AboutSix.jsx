import React from "react";

const About = () => {
  return (
    <>
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-6 my-3">
          <div className="img-box dark-img-box">
            <img src="img/about/sammy.jpg" alt="smiling a girl" />
          </div>
        </div>

        <div className="col-lg-6 my-3">
          <div className="typo-box about-me">
            <h3>Alimi Samuel</h3>
            <h5>
              A Lead <span className="color-theme"> Web designer</span> designer
              based in <span className="color-theme">Nigeria</span>
            </h5>
            <p>
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services
              and online stores. My passion is to design digital user
              experiences through the bold interface and meaningful
              interactions. Check out my Portfolio
            </p>
            <div className="row about-list">
              <div className="col-md-6">
                <div className="media">
                  <label>Birthday</label>
                  <p>27th november </p>
                </div>
                <div className="media">
                  <label>Age</label>
                  <p>22 Yr</p>
                </div>
                <div className="media">
                  <label>Residence</label>
                  <p>Nigeria</p>
                </div>
                <div className="media">
                  <label>Address</label>
                  <p>Ojo, Lagos</p>
                </div>
              </div>
              {/* End .col */}

              <div className="col-md-6">
                <div className="media">
                  <label>E-mail</label>
                  <p>alimisamuel121@gmail.com</p>
                </div>
                <div className="media">
                  <label>Phone</label>
                  <p>+243 902 881 8847</p>
                </div>
                <div className="media">
                  <label>Whatsapp</label>
                  <p>09028818847</p>
                </div>
                <div className="media">
                  <label>Freelance</label>
                  <p>Available</p>
                </div>
              </div>
              {/* End .col */}
            </div>
            {/* End .row */}
            <div className="btn-bar">
              <a className="px-btn px-btn-theme" href="img/resume.pdf" download>
                Download CV
              </a>
            </div>
          </div>
          {/* End .about me */}
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default About;
