import React, { useContext } from 'react'
import {
  Link
} from "react-router-dom";
import { useNavigate } from 'react-router'
import Datacontext from '../context/datacontext';
const Navbar2 = () => {
  var history = useNavigate();
  const handleclick = (e) => {
    e.preventDefault();
    localStorage.removeItem("eflux");
    history("/")
  }
  var context = useContext(Datacontext);
  var { zip } = context
  return (

    <nav className="bg-transparent justify-center px-2 sm:px-4 py-2 hidden md:block dark:bg-gray-900 fixed w-full z-20 top-0 left-0 
     dark:border-gray-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto right-0">
       
     
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col px-4 py-5 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {!localStorage.getItem("eflux") && (<li>
              <Link to="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</Link>
            </li>)}
            <li>
              <Link to="/chargingpoint" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">chargingpoint</Link>
            </li>
            <li>
              <Link to="/agencies" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Agencies</Link>
            </li>
            <li>
              <Link to="/cafe" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Cafe</Link>
            </li>
            <li>
              <Link to="/mechanic" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Mechanic</Link>
            </li>
          </ul>
        </div>
      </div>

<aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
<div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
 
   <ul class="space-y-2">
      <li>
         <a href="#" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
           <input className='input p-4' placeholder='Search___'/>
         </a>
      </li>
      <li>
         <a href="#" class="flex items-center p-2 text-base font-
         bg-gray-200
         text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700">

<img src='https://flowbite.com/docs/images/logo.svg' className='flex-shrink-0'/> 
    
    <span class="flex-1 ml-3 ">Rahul Thatar Hello  my Name is Masyur <br></br><sm className='text-sm text-gray-500'>Panvel Navi Mumbai</sm></span>
         </a>
      </li>
      
   </ul>
</div>
</aside>
    </nav>

  )
}

export default Navbar2