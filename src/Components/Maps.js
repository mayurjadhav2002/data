import { useState, useEffect } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function MyMap() {
  const [viewport, setViewport] = useState({});
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setViewport({
        ...viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
        zoom: 3.5,
      });
    });
  }, []);
  return (
    <div>
      {viewport.latitude && viewport.longitude && (
        <div>
          <h1>Your Location:</h1>
          <Map
            mapboxAccessToken="pk.eyJ1IjoidGhlZGlzY291bnRjb3Vwb24iLCJhIjoiY2xmOHI1NDRxMDE3ZDN4cWtlejY3ZGxuMiJ9.4YSA8wKeiyoPuNvSHNH1FA"
            initialViewState={viewport}
            mapStyle="mapbox://styles/mapbox/streets-v11"
          >
            <Marker
              longitude={viewport.longitude}
              latitude={viewport.latitude}
            />
          </Map>
        </div>
      )}
    </div>
  );
}
export default MyMap;