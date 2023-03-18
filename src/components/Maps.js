import * as React from 'react';
import Map, {NavigationControl,Marker} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import '../App.css';

function Maps() {
  return (
    <div className="App">
      <Map mapLib={maplibregl} 
        initialViewState={{
          longitude: 73.027257,
          latitude: 19.024405,
          zoom: 14
        }}
        style={{width: "100%", height: " calc(100vh)"}}
        
        mapStyle="https://api.maptiler.com/maps/streets-v2/style.json?key=cVWyrsbwYYISvHVDxDcq"
      >
        <NavigationControl position="top-left" />
        <Marker latitude={19.024405} longitude={73.027257} color='#61dbfb'></Marker>
        <Marker latitude={29.024405} longitude={73.027257} color='#61dbfb'></Marker>
      </Map>
    </div>
  );
}

export default Maps;