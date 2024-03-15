import React, { useState } from "react";
import "../index.css";
import Leaflet from "./Leaflet";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [lng, setLng] = useState(null);
  const [lat, setLat] = useState(null);

  function changeToLocation(new_lng, new_lat) {
    setLng(new_lng);
    setLat(new_lat);
  }

  // alert(lng);

  return (
    <React.StrictMode>
      <Router>
      <Navbar className={"navbar"} />
      
      <div className="app">
        <div className="main-content">
          <SideBar className="sidebar" changeToLocation={changeToLocation} />
          {lng !== null && lat !== null && (
            <Leaflet className={"leaflet"} new_lng={lng} new_lat={lat} />
            )}
          <Leaflet className={"leaflet"} />
        </div>
      </div>
      </Router>
    </React.StrictMode>
  );
}
