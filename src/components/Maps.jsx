import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoidGhlZGlzY291bnRjb3Vwb24iLCJhIjoiY2xmOHI1NDRxMDE3ZDN4cWtlejY3ZGxuMiJ9.4YSA8wKeiyoPuNvSHNH1FA';
export default function Maps() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(73.152397);
    const [lat, setLat] = useState(18.8982);
    const [zoom, setZoom] = useState(15);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });
    });


    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));

        });
    });

    return (
        <div>

            <div ref={mapContainer} className="map-container h-screen" />
        </div>
    );
}