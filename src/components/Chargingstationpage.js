import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import {
  Link
} from "react-router-dom";
import Downnav from './Downnav';
import Maps from './Maps';
const Chargingstationpage = () => {

  return (
    <>

      <div className='lg:block hidden h-screen overflow-hidden'>
        <Maps />
      </div>
      <div className='block lg:hidden'>
            
      
      <Maps />


      


      </div>

      <Downnav />

    </>
  )
}

export default Chargingstationpage