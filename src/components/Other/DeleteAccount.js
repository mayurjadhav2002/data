import React from 'react'

function DeleteAccount() {
  return (
    <div>
    <div className="navbar bg-base-100 shadow-sm overflow-hidden">
    <svg xmlns="http://www.w3.org/2000/svg"  width="26" height="26" fill="currentColor" className="bi bi-exclamation-triangle-fill mr-2 text-yellow-400" viewBox="0 0 16 16">
    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
  </svg>  <b className='text-red-600 '>Delete Account Permanantly</b>
  </div>
  
  <div className="form-control w-screen p-2">

  <p>Are you sure you want to delete your account?</p>
  <br></br>
<p>This action cannot be undone and all of your data, including your profile information and activity, will be permanently deleted from our system. If you have any active subscriptions or pending transactions, they will also be canceled.</p>
  <br></br>
  <p>If you're sure you want to proceed, please enter your password to Delete Your Account: </p>
  <label className="label">
    <span className="label-text text-red-500">Enter Your Password to Delete the Password: </span>
  </label>
  <input type="password" placeholder="**********" className="input input-bordered w-screen p-2" />
  <br></br>
<button className='btn btn-error p-5' type='submit'>Delete My account</button>
</div>
  
  </div>
  )
}

export default DeleteAccount
