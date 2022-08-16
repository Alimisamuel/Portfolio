import React from "react";

const Skills = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-4 my-3">
          <div className="sm-title">
            <h4 className="font-alt">Education</h4>
          </div>
          <ul className="aducation-box theme-bg">
            <li>
              <span className="dark-bg">2022-Till Date</span>
              <h6>Front-end Engineer</h6>
              <p>Nupat technologies</p>
            </li>
            <li>
              <span className="dark-bg">May 2021-August 2021</span>
              <h6>Graphic Designer</h6>
              <p>Eleven27 Creatives</p>
            </li>
            <li>
              <span className="dark-bg">2017-2019</span>
              <h6>Computer Science</h6>
              <p>Yabatech</p>
            </li>
          </ul>
          {/* End  .aducation-box */}
        </div>
        {/* End .col */}

        <div className="col-lg-4 my-3">
          <div className="sm-title">
            <h4 className="font-alt">Experience</h4>
          </div>
          <ul className="aducation-box dark-bg">
            <li>
              <span className="theme-bg">2022</span>
              <h6>Software Engineer</h6>
              <p>Nupat Technologies</p>
            </li>
            <li>
              <span className="theme-bg">2022</span>
              <h6>Software Engineer</h6>
              <p>Ulego</p>
            </li>
            <li>
              <span className="theme-bg">2019-2021</span>
              <h6>Video Editor</h6>
              <p>Aristos Band</p>
            </li>
          </ul>
          {/* End  .aducation-box */}
        </div>
        {/* End .col */}

        <div className="col-lg-4 ml-auto my-3">
          <div className="sm-title">
            <h4 className="font-alt">My Skills</h4>
          </div>
          <div className="gray-bg skill-box">
            <div className="skill-lt">
              <h6>React js</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 64 + "%" }}
                >
                  <span>64%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>Html</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 90 + "%" }}
                >
                  <span>90%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>javaScript</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 70 + "%" }}
                >
                  <span>70%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>Corel Draw</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 88 + "%" }}
                >
                  <span>88%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>CSS3/Tailwind</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 92 + "%" }}
                >
                  <span>92%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}
          </div>
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default Skills;
