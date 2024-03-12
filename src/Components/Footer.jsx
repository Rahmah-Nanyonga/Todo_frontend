import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="footer">
      <p>NANYONGA RAHMAH</p>
      <span>
        <Link to="/about">About</Link>
      </span>
      <span>&copy;Copyright {year}</span>
    </div>
  );
}
export default Footer;
