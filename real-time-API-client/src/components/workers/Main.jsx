// import React from "react";
import React, { useState } from "react";
import "../../index.css";
import Leaflet from "../workers/map/Leaflet";
// import Navbar from "./Navbar";
import SideBar from "./sidebar/SideBar";
import "../css/App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Main = () => {
  const [lng, setLng] = useState(null);
  const [lat, setLat] = useState(null);

  function changeToLocation(new_lng, new_lat) {
    setLng(new_lng);
    setLat(new_lat);
  }
  return (
    <div className="app">
      <div className="main-content">
        <SideBar className="sidebar" changeToLocation={changeToLocation} />
        {lng !== null && lat !== null && (
          <Leaflet className={"leaflet"} new_lng={lng} new_lat={lat} />
        )}
        <Leaflet className={"leaflet"} />
      </div>
    </div>
  );
};

export default Main;
