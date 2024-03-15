import React from "react";
import {
  Outlet,
  NavLink,
} from "react-router-dom";

export default function Navbar() {
  const myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };

  return (
    <div className="topnav" id="myTopnav">
      <a href="javascript:void(0)" class="icon" onClick={myFunction}>
        <i class="fa fa-bars"></i>
      </a>
      <nav>
        <NavLink to="/" class="active">InferixExplorer</NavLink>
        <NavLink to="/workers">MAP</NavLink>
        <NavLink to="/jobs">JOBS</NavLink>
        <NavLink to="/last-rendered">LAST RENDERED</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
