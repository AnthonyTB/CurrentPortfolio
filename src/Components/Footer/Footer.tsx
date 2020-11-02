import React from "react";
import "./Footer.css";
import AnthonySig from "../../Assets/Anthony.png";

const Footer: React.FC = () => {
  return (
    <footer>
      <img src={AnthonySig} alt="Signature" />
    </footer>
  );
};

export default Footer;
