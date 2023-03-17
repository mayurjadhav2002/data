import React from 'react'

function App() {
  return (
    <div>
    <div className="navbar bg-base-100 shadow-sm overflow-hidden">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
  <b>Account</b>
  </div>

  <div className=" w-full max-w-xs p-3">
  <label className='p-1'>User's Details</label>
  <div class="text-center p-3">
  <img
    src="https://tecdn.b-cdn.net/img/new/avatars/5.webp"
    class="mx-auto avatar w-32 rounded shadow"
    alt="Avatar" />
</div>
  <label className="label">
    <span className="label-text">Name : </span>
    <br></br>
    <span className="label-text font-semibold">Viliamma Sheikhsphere</span>
  </label>
  <label className="label">
  <span className="label-text">Email : </span>
  <br></br>
  <span className="label-text font-semibold">emailmekyahai@tusoch.haha</span>
</label>


<label className="label">
<span className="label-text">Car Number : </span>
<br></br>
<span className="label-text font-semibold">MH CB106</span>
</label>


<label className="label">
<span className="label-text">Charger Type: </span>
<br></br>
<span className="label-text font-semibold">Chhota pin ka charger</span>
</label>
</div>



<div class="text-end p-3">
<button className='btn btn-outline btn-primary' type='button'>Edit</button>
</div>

    </div>

    
  )
}

export default App
