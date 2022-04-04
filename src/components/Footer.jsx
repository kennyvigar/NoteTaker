import React from "react";
import "../styles/Footer.css";

const year = new Date().getFullYear();

function Footer() {
  return <div className="Footer">{year}</div>;
}

export default Footer;
