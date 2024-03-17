import { useEffect } from "react";
import * as L from "leaflet";
import { useLeaflet } from "react-leaflet";
import "leaflet.markercluster";
import "leaflet.markercluster/dist/leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";

const MarkerCluster = ({ markers, addMarkers }) => {
  const { map } = useLeaflet();

  useEffect(() => {
    const markerClusters = L.markerClusterGroup(); // Create marker cluster group inside useEffect
    map.addLayer(markerClusters); // Add marker cluster group to the map

    // Add markers to the marker cluster group
    markers.forEach(({ position }) =>
      L.marker(new L.LatLng(position.lat, position.lng)).addTo(markerClusters)
    );

    // Cleanup function to remove the marker cluster group when component unmounts
    return () => {
      map.removeLayer(markerClusters);
    };
  }, [markers, map]);

  useEffect(() => {
    const handleMoveEnd = () => {
      addMarkers();
    };

    map.on("moveend", handleMoveEnd);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      map.off("moveend", handleMoveEnd);
    };
  }, [map, addMarkers]);

  return null;
};

export default MarkerCluster;
