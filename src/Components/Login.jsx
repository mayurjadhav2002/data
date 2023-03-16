import React from 'react'

function Login() {
  return (
    <div className='bg-red-50'>
    
    <div className='h-screen w-screen align-middle items-center'>
    <div className="hero min-h-screen bg-base-200 ">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Login now...</h1>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text" placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="text" placeholder="password" className="input input-bordered" />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
  <marquee>The charging speed of electric vehicles varies depending on the type of charger used. Level 1 chargers (120V) typically provide a charging rate of 4-5 miles of range per hour, while Level 2 chargers (240V) can provide a charging rate of up to 25 miles of range per hour. DC fast chargers can provide up to 80% charge in 30 minutes.</marquee>

  </div>
  </div>
    </div>
  )
}

export default Login
