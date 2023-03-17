import React, { useContext } from 'react';
import Map from './Map';
import {
  Link
} from "react-router-dom";
import Datacontext from '../context/datacontext';
import Downnav from './Downnav';
import Login from './Login';
const Chargingstationpage = () => {
  var context = useContext(Datacontext);
  var { station } = context
  console.log(station)
  return (
    <>
    
      <div className='md:flex flex-wrap hidden'>
        <div className='w-1/4 h-screen border-stone-900 border '>
          <section className="text-gray-600 h-[99vh] overflow-y-scroll body-font">
            <div className="container px-2 mb-7 py-20 mx-auto">
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" class="
        
        block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
              </div>
              {station && ((station.map((note) => {

                return (
                  <div className='mt-6'>
                    <Link to={`/chargingpoint/${note._id}`}>
                      <div className="w-full">
                        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 px-8 py-3 sm:flex-row flex-col">
                          <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center  bg-indigo-100 text-indigo-500 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8" viewBox="0 0 24 24">
                              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                          </div>
                          <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">{note.name}</h2>
                            <Link to={`/chargingpoint/${note._id}`} className="mt-1 text-indigo-500 inline-flex items-center">Learn More
                              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>);
              }
              )))}
            </div>
          </section>
        </div>
        <div className='w-3/4 h-screen border '>
        </div>
      </div>


<Downnav/>
<Login/>          </>
  )
}

export default Chargingstationpage