import React, { useContext } from 'react';
import Map111 from './Map111';
import {
  Link
} from "react-router-dom";
import Datacontext from '../context/datacontext';
import Downnav from './Downnav';
import Maps from './Maps';
const Chargingstationpage = () => {
  var context = useContext(Datacontext);
  var { station } = context
  console.log(station)
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