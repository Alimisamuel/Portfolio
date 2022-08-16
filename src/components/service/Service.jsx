import React from "react";

const ServiceContent = [
  {
    icon: "ti-ruler-pencil",
    title: "Development",
    descriptions: `Your website is the center of your digital eco-system, like a brick and mortar location, the experience matters once a customer enters, just as much as the perception they have of you before they walk through the door.`,
  },
  {
    icon: "ti-image",
    title: "Graphic",
    descriptions: `I value simple  content structure, clean design patterns, aand thoughtful  interactions, also love working with designs and putting  ideas togerther. Softwares: Corel Draw, Canva, Photoshop, Illustrator, Paint`,
  },
  {
    icon: "ti-layout",
    title: "Web Design",
    descriptions: `I like to code things from scratch, and enjoy  bringing ideas to life in the browser, also love working with designs and putting  ideas togerther
    Dev. Languages: HTML, CSS, JavaScript, Sass, React`,
  },
  {
    icon: "ti-mobile",
    title: "Mobile Developer",
    descriptions: `I like to code things from scratch, and enjoy  bringing ideas to life on the mobile, also love working with designs and putting  ideas togerther
    Dev. Languages: React Native, Ionic, Java`,
  },
  {
    icon: "ti-music-alt",
    title: "Music",
    descriptions: `I found  passion in music, i find it  very useful and crafty  when  trying  to solve  problems or purchase great ideas from my big brain. Instrument: Clarinet and Piano.`,
  },
  {
    icon: "ti-video-clapper",
    title: "Video Editting",
    descriptions: `I value simple  content creating structure, clean transitions, and thoughtful  interactions. Softwares: Adobe  Premiere pro, Filmora, Adobe Illustrator  and Corel videostudio`,
  },
];

export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div className="col-md-6 col-lg-4 my-3" key={i}>
            <div className="feature-box-01">
              <div className="icon">
                <i className={val.icon}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
