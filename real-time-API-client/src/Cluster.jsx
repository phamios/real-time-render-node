import { useEffect } from "react";
import * as L from "leaflet";
import { useLeaflet } from "react-leaflet";
import 'leaflet.markercluster'

const markerClusters = L.markerClusterGroup();
const customIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
    iconSize: [25, 41]
});

const MarkerCluster = ({ markers, addMarkers }) => {
    const { map } = useLeaflet();
    useEffect(() => {
        markerClusters.clearLayers();
        markers.forEach(({ position }) =>
        L.marker(new L.LatLng(position.lat, position.lng), {
            icon: customIcon
        }).addTo(markerClusters)
        );

        map.addLayer(markerClusters);
    }, [markers, map]);

    map.on("moveend", () => {
        // const start = window.performance.now();

        addMarkers();
        const markersToAdd = [];
        markerClusters.clearLayers();
        markers.forEach(({ position }) => {
            const markerToAdd = L.marker(new L.LatLng(position.lat, position.lng), {
                icon: customIcon,
            });

            if (markerToAdd !== undefined) {
                markersToAdd.push(markerToAdd);
            }
        })

        markerClusters.addLayer(markersToAdd);
        // const end = window.performance.now();
    })

    return null;

}

export default MarkerCluster;