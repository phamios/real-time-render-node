import L from "leaflet";
import React, { useState, useEffect } from "react";
import { Map, TileLayer, ZoomControl } from "react-leaflet";
import MarkerCluster from "./Cluster";
import WorkerList from "../data/WorkerList.json";
import "./map.css";

var position = [51.505, -0.09];
const mapStyle = { height: "90vh" };
// var Map = L.map('map');
// var map = L.map("map", {
//   maxZoom: 20,
//   minZoom: 6,
//   zoomControl: false,
// });

// L.control
//   .zoom({
//     position: "bottomright",
//   })
//   .addTo(map);

const Leaflet = ({ new_lng = null, new_lat = null }) => {
  const [workerList, setWorkerList] = useState([]);
  useEffect(() => {
    // Function to load data from JSON
    const loadData = () => JSON.parse(JSON.stringify(WorkerList));

    // Load data and set worker list
    const Data = loadData();
    setWorkerList(Data);
    console.log(Data);
  }, []);

  let markers;

  const addMarkers = () => {
    markers = [];
    workerList.forEach((worker) =>
      markers.push({
        position: {
          lng: worker.longitude,
          lat: worker.latitude,
        },
      })
    );
  };
  addMarkers();
  var zoom = 3;

  if (new_lng !== null && new_lat !== null) {
    position = [new_lat, new_lng];
    zoom = 9;
    // alert(`lng: ${new_lng}, lat: ${new_lat}`);
  }

  // alert(new_lat);

  return (
    <div id="map">
      <Map
        center={position}
        zoom={zoom}
        style={mapStyle}
        maxZoom={20}
        zoomControl={false}
      >
        {/* {alert(`${position}`)} */}
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <MarkerCluster markers={markers} addMarkers={addMarkers} />
        <ZoomControl position="bottomright" />
      </Map>
    </div>
  );
};

export default Leaflet;
