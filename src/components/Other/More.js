import React from 'react'
import { Link } from 'react-router-dom'

function More() {
  return (
    <div>
    <div className="navbar bg-base-100 shadow-sm overflow-hidden">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
  <b>More</b>



  
  </div>
  <ul className="menu bg-base-100 w-screen">
  <li><Link to='/battery'>    
     <svg xmlns="http://www.w3.org/2000/svg" height='16' width='16' fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
   Battery Swapping</Link></li>
  <li><Link to='/renting-car'>
  <svg xmlns="http://www.w3.org/2000/svg" height='16' width='16' fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>

  Vehicle Renting (from a Agencies)</Link></li>
  <li><Link to='/vehicle-lending'>
  <svg xmlns="http://www.w3.org/2000/svg" height='16' width='16' fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>

  Leading a Vehicle (from your neighborhood)</Link></li>

  <li><Link to='/mechnical-repairs'>
  <svg xmlns="http://www.w3.org/2000/svg" height='16' width='16' fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>

  Mechanical Repairs</Link></li>
  </ul>
  
    </div>
  )
}

export default More
