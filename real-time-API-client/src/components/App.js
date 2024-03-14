import React from "react";
// import Orders from './Orders'
import "../index.css";
import Leaflet from "./Leaflet";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="app">
      <Navbar className={"navbar"} />
      <div className="main-content">
        <SideBar className="sidebar" />
        <Leaflet className={"leaflet"} />
      </div>
    </div>
  );
}
