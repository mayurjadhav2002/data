import React from 'react'

function SignUp() {
  return (
    <div>
    <div class="col columns-3xs lg:grid lg:grid-cols-2 gap-4">
    <div className='p-12 px-4 bg-stone-400 '></div>
    <div> The Journey of Charge Start With Sign Up
    
    <br></br>
    <div class="h-screen bg-slate-50 flex justify-center w-full">
  <form>
    <div class="bg-white px-10 py-8 rounded-xl w-screen max-w-sm">
      <div class="space-y-4">
        <h1 class="text-center text-2xl font-semibold text-gray-600">Register</h1>
        <div>
          <label for="email" class="block mb-1 text-gray-600 font-semibold">Username</label>
          <input type="text" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label for="email" class="block mb-1 text-gray-600 font-semibold">Email</label>
          <input type="text" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label for="email" class="block mb-1 text-gray-600 font-semibold">Password</label>
          <input type="text" class="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
        </div>
      </div>
      <button class="mt-4 w-full bg-yellow-500 font-semibold py-2 rounded-md  tracking-wide">Register</button>
    </div>
  </form>
</div>
    </div>
  </div>
  
    </div>
  )
}

export default SignUp
