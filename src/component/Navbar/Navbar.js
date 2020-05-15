import React, { Component } from "react";
import "./Navbar.css";
import Logo from './logo.jpg'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const listes = [
  { name: "HOME", link: "/" },
  { name: "FAVORITES", link: "/favoris" },
  { name: "SIGN IN", link: "register" },
  { name: "SIGN UP", link: "login" },
];

function Navbar(props) {
  return (
    <div className="nav-bar">
      <div>
      <img className="rounded-circle logoo" src={Logo} alt="logo" />
      </div>
      

      <div >
        <ul className="liste">
          {listes.map((el) => (
            <Link to={el.link}>{el.name}</Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
