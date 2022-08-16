import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    margin: 30,
    responsive: [
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const TestimonilContent = [
    {
      imageName: "ceo",
      desc: `  Creates impressive web pages using appropraite web web design techniques and programming paradigms`,
      reviewerName: "Nnamdi Ugwu (CEO Nupat Tech.)",
      rating: "5.0",
    },
    {
      imageName: "cto",
      desc: `  Meets most  deadlines when  designing  programs  and makes an effort to work under  pressure`,
      reviewerName: "Henry Ugwu (CTO Nupat Tech.)",
      rating: "5.0",
    },
    
    {
      imageName: "george",
      desc: ` Always thinks outside the box automates processes by developing programs that  improve efficiency`,
      reviewerName: "George Ebisike(Senior back-end developer)",
      rating: "4.8",
    },
  
    // {
    //   imageName: "wale",
    //   desc: `Takes pride in building and compiling programs that execute without any errors`,
    //   reviewerName: "Wale Oseni (software engineer@Andela)",
    //   rating: "5.0",
    // },
  ];

  return (
    <>
      <Slider {...settings}>
        {TestimonilContent.map((val, i) => (
          <div className="testmonial-box media" key={i}>
            <div className="avatar">
              <img
                src={`img/testimonial/${val.imageName}.jpg`}
                alt="review comments"
              ></img>
            </div>
            {/* End avatar */}
            <div className="testmonial-text media-body">
              <p>{val.desc}</p>
              <div className="testmonial-info">
                <h6>{val.reviewerName}</h6>
                <div className="rating-value">
                  <i className="ti-star"></i>
                  <span>{val.rating}</span>
                </div>
              </div>
            </div>
            {/* End testimonial-text */}
          </div>
        ))}
      </Slider>
    </>
  );
}
