import * as React from "react";
import { withRouter } from "react-router-dom";
import "../styles/Header.css";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";

const Header = () => {
  const images = [img1, img2, img3];
  const index = Math.floor(Math.random() * 3);

  const img = images[index];

  return <img src={img} alt="Boat" />;
};

export default withRouter(Header);
