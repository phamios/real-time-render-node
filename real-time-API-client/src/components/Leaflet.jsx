import L from "leaflet";
import React from "react";
import { Map, TileLayer, ZoomControl } from "react-leaflet";
import MarkerCluster from "./Cluster";

const position = [51.505, -0.09];
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

const Leaflet = () => {
  let markers;

  // Add random markers to map
  const addMarkers = () => {
    markers = [];
    for (let i = 0; i < 100; i++) {
      markers.push({
        position: {
          lng: -122.0 + Math.random() * 200.0,
          lat: 45.5 - 60 + Math.random() * 80.0,
        },
      });
    }
  };
  addMarkers();

  return (
    <div>
      <Map
        center={position}
        zoom={3}
        style={mapStyle}
        maxZoom={20}
        zoomControl={false}
      >
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
