import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  // FaGithub,

} from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://web.facebook.com/alimi.samuel.98" },
  { Social: <FaTwitter />, link: "https://twitter.com/AlimiSamuelAyo2" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/a.a_sammy/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/samuel-alimi-46abb822a/" },
  // { Social: <FaGithub />, link: "https://www.linkedin.com/in/samuel-alimi-46abb822a/" },
  
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center text-sm-center justify-content-md-end">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;