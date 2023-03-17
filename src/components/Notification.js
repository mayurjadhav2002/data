import React from 'react'

const Notification = () => {
  return (
    <div>
    <div className="navbar bg-base-100 shadow-sm overflow-hidden lg:hidden block text-center">
<b>Notification</b>


  </div>



  <div className='p-2'>
  <div class="bg-white-100 clickable border-l-4 border-gray-200 text-gray-700 p-4" role="alert">
  <p class="font-bold">lorem ipsum email oject</p>
  <p className='text-sm'>12.00 PM</p>
</div>



<div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
  <p class="font-bold">Be Warned</p>
  <p>Something not ideal might be happening.</p>
</div>

<div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
  <p class="font-bold">Be Warned</p>
  <p>Something not ideal might be happening.</p>
</div>

  </div>

  
    </div>
  )
}

export default Notification