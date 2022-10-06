import React, { useState } from "react";
import "./rightnav.css";
import styled from "styled-components";

const Div = styled.div`
  @media screen and (max-width: 1080px) {
    .btn {
      border: none;
      background-color: white;
      color: #fff;
      padding: 6px 12px;
      text-decoration: none;
      font-size: 1.1rem;
      font-weight: 600;
      margin: 0 1rem;
      color: #15233b;
      transition: all 0.3s ease-in-out;
    }
    .btn:hover {
      /* height: 50px;
  width: 120px; */
      background-color: #b28760;
      color: #fff;
      transform: scale(1.1);
      transition: 0.5s;
    }
    .nav-links {
      flex-direction: column;
      align-items: center;
      padding-top: 6rem;
      background-color: #15233b;
      position: fixed;
      transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
      top: 0;
      right: 0;
      height: 100vh;
      width: 300px;
      transition: transform 0.3s ease-in-out;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Div open={open}>
      <div className="nav-links">
        <a href="https://chronoly.io/" className="link">
          Website
        </a>
        <button className="btn">Buy CRNO</button>
        <button className="btn">Connect wallet</button>
      </div>
    </Div>
  );
};

export default RightNav;
