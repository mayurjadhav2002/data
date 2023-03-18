import * as React from 'react';
import Map, {NavigationControl,Marker} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import '../App.css';
import Datacontext from '../context/datacontext';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
function Maps() {
  var context = React.useContext(Datacontext);
  var { station } = context
  return (
    <div className='-z-10'>
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
        {station && ((station.map((note) => {
          console.log(note.latitude)
          return (
                      
                      <Marker latitude={note.latitude} longitude={note.longitude} color='red'></Marker>
                      );
                        }
                        )))}       
      </Map>
      <div className='p-5 top-0 fixed bg-white opacity-80'>
      <Swiper
      
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    </Swiper>
      </div>
    </div>
  );
}

export default Maps;