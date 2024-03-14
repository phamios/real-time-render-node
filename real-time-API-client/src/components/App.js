import React from "react";
// import Orders from './Orders'
import "../index.css";
import Leaflet from "./Leaflet";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <SideBar className={"sidebar"}></SideBar>
      <Leaflet className={"leaflet"} />
    </div>
  );
}
