import React from "react";
// import { TabList, TabPanel } from "react-tabs";
// import SimpleReactLightbox from "simple-react-lightbox";
// import { SRLWrapper } from "simple-react-lightbox";

const tabList = ["All", "Branding", "Photography", "Fashion", "Product"];
const AllPortfolioContent = [
  {
    img: "1",
    title: "Motion Graphy",
    subTitle: "Android App",
    alterText: "Motion Graphy",
    portfolioLink:
      "https://play.google.com/store/apps/details?id=com.alightcreative.motion&hl=en&gl=US",
  },
  {
    img: "3",
    title: "E-Learning App",
    subTitle: "Nuna ios App",
    alterText: "Elearning App",
    portfolioLink:
      "https://dribbble.com/shots/16529350-Nairo-Personal-Portfolio-React-Template",
  },
  {
    img: "2",
    title: "Visual Design",
    subTitle: "Themeforest Marke",
    alterText: "Business Mockup",
    portfolioLink:
      "https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template",
  },
  {
    img: "4",
    title: "Business Card",
    subTitle: "Graphicriver Market",
    alterText: "E-Cosmetics",
    portfolioLink:
      "https://dribbble.com/shots/16545341-Imroz-Vue-JS-Creative-Agency-Portfolio-Template",
  },
  {
    img: "7",
    title: "Code Editing",
    subTitle: "Codecanyon Market",
    alterText: "Bottle Illustration",
    portfolioLink:
      "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
  },
  {
    img: "6",
    title: "Web Application",
    subTitle: "Behance Shot",
    alterText: "Web Application",
    portfolioLink:
      "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
  },
];
const BrandingPortfolioContent = [
  {
    img: "1",
    title: "Web Application",
    subTitle: "Behance Shot",
    alterText: "Web Application",
    portfolioLink:
      "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
  },

  {
    img: "7",
    title: "Code Editing",
    subTitle: "Codecanyon Market",
    alterText: "Bottle Illustration",
    portfolioLink:
      "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
  },
  {
    img: "3",
    title: "Visual Design",
    subTitle: "Themeforest Marke",
    alterText: "Business Mockup",
    portfolioLink:
      "https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template",
  },
];

const PhotographyPortfolioContent = [
  {
    img: "4",
    title: "Code Editing",
    subTitle: "Codecanyon Market",
    alterText: "Bottle Illustration",
    portfolioLink:
      "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
  },
  {
    img: "6",
    title: "Web Application",
    subTitle: "Behance Shot",
    alterText: "Web Application",
    portfolioLink:
      "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
  },
];
const FashionPortfolioContent = [
  {
    img: "4",
    title: "Code Editing",
    subTitle: "Figma Shoot",
    alterText: "Bottle Illustration",
    portfolioLink:
      "https://dribbble.com/shots/16529339-Beny-Personal-Portfolio-React-Template",
  },
];

const ProductPortfolioContent = [
  {
    img: "3",
    title: "E-Learning App",
    subTitle: "Nuna ios App",
    alterText: "Illustration",
    portfolioLink:
      "https://dribbble.com/shots/16529350-Nairo-Personal-Portfolio-React-Template",
  },
  {
    img: "5",
    title: "Visual Design",
    subTitle: "Themeforest Marke",
    alterText: "Business Mockup",
    portfolioLink:
      "https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template",
  },

  {
    img: "6",
    title: "Chatting Application",
    subTitle: "Codecanyon Market",
    alterText: "Bottle Illustration",
    portfolioLink:
      "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
  },
];

const Portfolio = () => {
  return (
    <p></p>
    // <SimpleReactLightbox>
    //   <div className="positon-relative">
    //     <div className="portfolio-filter-01">
    //       <Tabs>
    //         <TabList className="filter d-flex justify-content-center">
    //           {tabList.map((val, i) => (
    //             <Tab key={i}>{val}</Tab>
    //           ))}
    //         </TabList>
    //         {/* End tablist */}

    //         <SRLWrapper>
    //           <TabPanel>
    //             <div className="portfolio-content row lightbox-gallery">
    //               {AllPortfolioContent.map((val, i) => (
    //                 <div
    //                   className="col-sm-6 col-lg-4 grid-item product"
    //                   key={i}
    //                 >
    //                   <div className="portfolio-box-01">
    //                     <div className="portfolio-img">
    //                       <div className="portfolio-info">
    //                         <h5>
    //                           <a href={val.portfolioLink} target="_blank">
    //                             {val.title}
    //                           </a>
    //                         </h5>
    //                         <span>{val.subTitle}</span>
    //                       </div>
    //                       {/* End .portfolio-info */}
    //                       <a
    //                         href={`img/portfolio/${val.img}.jpg`}
    //                         className="gallery-link"
    //                       >
    //                         <img
    //                           src={`img/portfolio/${val.img}.jpg`}
    //                           alt={val.alterText}
    //                         />
    //                       </a>
    //                       {/* End gallery link */}
    //                       <a
    //                         href={val.portfolioLink}
    //                         className="portfolio-icon"
    //                         target="_blank"
    //                         rel="noopener noreferrer"
    //                       >
    //                         <span className="ti-link"></span>
    //                       </a>
    //                       {/* End .portfolio-icon */}
    //                     </div>
    //                   </div>
    //                 </div>
    //               ))}
    //             </div>
    //             {/* End list wrapper */}
    //           </TabPanel>

    //           <TabPanel>
    //             <div className="portfolio-content row lightbox-gallery">
    //               {BrandingPortfolioContent.map((val, i) => (
    //                 <div
    //                   className="col-sm-6 col-lg-4 grid-item product"
    //                   key={i}
    //                 >
    //                   <div className="portfolio-box-01">
    //                     <div className="portfolio-img">
    //                       <div className="portfolio-info">
    //                         <h5>
    //                           <a href={val.portfolioLink} target="_blank">
    //                             {val.title}
    //                           </a>
    //                         </h5>
    //                         <span>{val.subTitle}</span>
    //                       </div>
    //                       {/* End .portfolio-info */}
    //                       <a
    //                         href={`img/portfolio/${val.img}.jpg`}
    //                         className="gallery-link"
    //                       >
    //                         <img
    //                           src={`img/portfolio/${val.img}.jpg`}
    //                           alt={val.alterText}
    //                         />
    //                       </a>
    //                       {/* End gallery link */}
    //                       <a
    //                         href={val.portfolioLink}
    //                         className="portfolio-icon"
    //                         target="_blank"
    //                         rel="noopener noreferrer"
    //                       >
    //                         <span className="ti-link"></span>
    //                       </a>
    //                       {/* End .portfolio-icon */}
    //                     </div>
    //                   </div>
    //                 </div>
    //               ))}
    //             </div>
    //             {/* End list wrapper */}
    //           </TabPanel>

    //           <TabPanel>
    //             <div className="portfolio-content row lightbox-gallery">
    //               {PhotographyPortfolioContent.map((val, i) => (
    //                 <div
    //                   className="col-sm-6 col-lg-4 grid-item product"
    //                   key={i}
    //                 >
    //                   <div className="portfolio-box-01">
    //                     <div className="portfolio-img">
    //                       <div className="portfolio-info">
    //                         <h5>
    //                           <a href={val.portfolioLink} target="_blank">
    //                             {val.title}
    //                           </a>
    //                         </h5>
    //                         <span>{val.subTitle}</span>
    //                       </div>
    //                       {/* End .portfolio-info */}
    //                       <a
    //                         href={`img/portfolio/${val.img}.jpg`}
    //                         className="gallery-link"
    //                       >
    //                         <img
    //                           src={`img/portfolio/${val.img}.jpg`}
    //                           alt={val.alterText}
    //                         />
    //                       </a>
    //                       {/* End gallery link */}
    //                       <a
    //                         href={val.portfolioLink}
    //                         className="portfolio-icon"
    //                         target="_blank"
    //                         rel="noopener noreferrer"
    //                       >
    //                         <span className="ti-link"></span>
    //                       </a>
    //                       {/* End .portfolio-icon */}
    //                     </div>
    //                   </div>
    //                 </div>
    //               ))}
    //             </div>
    //             {/* End list wrapper */}
    //           </TabPanel>

    //           <TabPanel>
    //             <div className="portfolio-content row lightbox-gallery">
    //               {FashionPortfolioContent.map((val, i) => (
    //                 <div
    //                   className="col-sm-6 col-lg-4 grid-item product"
    //                   key={i}
    //                 >
    //                   <div className="portfolio-box-01">
    //                     <div className="portfolio-img">
    //                       <div className="portfolio-info">
    //                         <h5>
    //                           <a href={val.portfolioLink} target="_blank">
    //                             {val.title}
    //                           </a>
    //                         </h5>
    //                         <span>{val.subTitle}</span>
    //                       </div>
    //                       {/* End .portfolio-info */}
    //                       <a
    //                         href={`img/portfolio/${val.img}.jpg`}
    //                         className="gallery-link"
    //                       >
    //                         <img
    //                           src={`img/portfolio/${val.img}.jpg`}
    //                           alt={val.alterText}
    //                         />
    //                       </a>
    //                       {/* End gallery link */}
    //                       <a
    //                         href={val.portfolioLink}
    //                         className="portfolio-icon"
    //                         target="_blank"
    //                         rel="noopener noreferrer"
    //                       >
    //                         <span className="ti-link"></span>
    //                       </a>
    //                       {/* End .portfolio-icon */}
    //                     </div>
    //                   </div>
    //                 </div>
    //               ))}
    //               {/* grid item  */}
    //             </div>
    //             {/* End list wrapper */}
    //           </TabPanel>

    //           <TabPanel>
    //             <div className="portfolio-content row lightbox-gallery">
    //               {ProductPortfolioContent.map((val, i) => (
    //                 <div
    //                   className="col-sm-6 col-lg-4 grid-item product"
    //                   key={i}
    //                 >
    //                   <div className="portfolio-box-01">
    //                     <div className="portfolio-img">
    //                       <div className="portfolio-info">
    //                         <h5>
    //                           <a href={val.portfolioLink} target="_blank">
    //                             {val.title}
    //                           </a>
    //                         </h5>
    //                         <span>{val.subTitle}</span>
    //                       </div>
    //                       {/* End .portfolio-info */}
    //                       <a
    //                         href={`img/portfolio/${val.img}.jpg`}
    //                         className="gallery-link"
    //                       >
    //                         <img
    //                           src={`img/portfolio/${val.img}.jpg`}
    //                           alt={val.alterText}
    //                         />
    //                       </a>
    //                       {/* End gallery link */}
    //                       <a
    //                         href={val.portfolioLink}
    //                         className="portfolio-icon"
    //                         target="_blank"
    //                         rel="noopener noreferrer"
    //                       >
    //                         <span className="ti-link"></span>
    //                       </a>
    //                       {/* End .portfolio-icon */}
    //                     </div>
    //                   </div>
    //                 </div>
    //               ))}
    //               {/* grid item  */}
    //             </div>
    //             {/* End list wrapper */}
    //           </TabPanel>
    //         </SRLWrapper>
    //         {/* End tabpanel */}
    //       </Tabs>
    //     </div>
    //   </div>
    // </SimpleReactLightbox>
  );
};

export default Portfolio;
