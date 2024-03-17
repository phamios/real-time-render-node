import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const toggleMenu = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };

  return (
    <div className="topnav" id="myTopnav">
      <a href="javascript:void(0)" className="icon" onClick={toggleMenu}>
        <i className="fa fa-bars"></i>
      </a>
      <nav>
        <NavLink exact to="/" activeClassName="active">
          InferixExplorer
        </NavLink>
        <NavLink to="/workers" activeClassName="active">
          MAP
        </NavLink>
        <NavLink to="/jobs" activeClassName="active">
          JOBS
        </NavLink>
        <NavLink to="/last-rendered" activeClassName="active">
          LAST RENDERED
        </NavLink>
      </nav>
    </div>
  );
}
