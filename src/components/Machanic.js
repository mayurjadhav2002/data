import React from 'react'
import {
  Link
} from "react-router-dom";
const Mechanic = () => {
  
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
  <h1 className='text-2xl font-bold text-slate-500 mb-5'>Vehicle repair near your current location :-</h1>
    
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
    <Link to="/mechanic/mechanic">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260"/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p className="mt-1">$16.00</p>
      </div>
      </Link>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
    <Link to="/mechanic/mechanic">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260"/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p className="mt-1">$16.00</p>
      </div></Link>
        </div>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
    <Link to="/mechanic/mechanic">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260"/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p className="mt-1">$16.00</p>
      </div></Link>
        </div> 
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
    <Link to="/mechanic/mechanic">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260"/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p className="mt-1">$16.00</p>
      </div></Link>
        </div>
         <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
    <Link to="/mechanic/mechanic">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260"/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p className="mt-1">$16.00</p>
      </div></Link>
        </div>
    </div>
  </div>
</section>
  )
}

export default Mechanic