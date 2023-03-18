import * as React from 'react';
import Map, {NavigationControl,Marker} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import '../App.css';
import Datacontext from '../context/datacontext';

function Maps() {
  var context = React.useContext(Datacontext);
  var { agency } = context
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
        {agency && ((agency.map((note) => {

          return (
                      <Marker latitude={73.027257} longitude={19.027257} color='#61dbfb'></Marker>
                      );
                        }
                        )))}       
      </Map>
    </div>
  );
}

export default Maps;