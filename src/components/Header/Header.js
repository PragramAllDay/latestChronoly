import React from "react";
import "./header.css";
import Burger from "../burger/Burger";

const Header = () => {
  return (
    <div>
      <div className="navbar">
        <img src="../images/logo.png" alt="" className="logo" />
        <Burger open />
      </div>
    </div>
  );
};

export default Header;
