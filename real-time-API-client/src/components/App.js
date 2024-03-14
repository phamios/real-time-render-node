import React from "react";
// import Orders from './Orders'
import "../index.css";
// import "./App.css";
import Leaflet from "./Leaflet";
import SideBar from "./SideBar";

export default function App() {
  return (
    <div className="app">
      {/* <h1 className="title">Store</h1> */}
      {/* <Orders /> */}
      <SideBar className={"sidebar"}></SideBar>
      <Leaflet className={"leaflet"} />
    </div>
  );
}
