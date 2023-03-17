import React, { useContext,useState } from 'react'
import {
    Link
} from "react-router-dom";
import { useNavigate } from 'react-router'
const Signin = () => {
    var history = useNavigate();
    const [signindetail, setsignindetail] = useState({ name: "", email: "", password: "", carnumber: "", porttype: ""})
    const handleclick = (e) => {
      e.preventDefault();
      signincustomer(signindetail.name, signindetail.email, signindetail.password, signindetail.carnumber, signindetail.porttype)}
    const onchange = (e) => {
      setsignindetail({ ...signindetail, [e.target.name]: e.target.value })
    }
    const signincustomer = async (name,email,password,carnumber,porttype) => {
        const response = await fetch('http://localhost:3001/app/addcustomer', {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
            },
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({name,email,password,carnumber,porttype}) // body data type must match "Content-Type" header
        });
        const  json5 = await response.json()
        console.log(json5)
        if (json5.Customer) {
            history("/login")
          } else {
            alert("invalid")
          }
    }
    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen  lg:py-0">
                    <div className="w-full mt-10 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className=" space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="/">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 ">
                                        <label for="first-name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                                        <input type="text" name="name" id="first-name" autocomplete="given-name" onChange={onchange} className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                    <div className="col-span-6 ">
                                        <label for="email-address" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                        <input type="text" name="email" id="email-address" autocomplete="email" onChange={onchange} className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>



                                    <div className="col-span-6">
                                        <label for="street-address" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                        <input type="password" name="password" id="street-address" onChange={onchange} autocomplete="street-address" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>

                                    <div className="col-span-6 sm:col-span-6 lg:col-span-3">
                                        <label for="city" className="block text-sm font-medium leading-6 text-gray-900">Car Number</label>
                                        <input type="text" name="carnumber" id="city" onChange={onchange} autocomplete="address-level2" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>

                                    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                                        <label for="region" className="block text-sm font-medium leading-6 text-gray-900">Charging Port type</label>
                                        <input type="text" name="porttype" id="region" onChange={onchange} autocomplete="address-level1" className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="/" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                </div>
                                <button type="button" onClick={handleclick} className="focus:outline-none text-white w-full bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Signin</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                     Have an account  <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">: Login</Link>
                                </p>
                            </form>
                        </div>

                    </div>
                    <marquee>The charging speed of electric vehicles varies depending on the type of charger used. Level 1 chargers (120V) typically provide a charging rate of 4-5 miles of range per hour, while Level 2 chargers (240V) can provide a charging rate of up to 25 miles of range per hour. DC fast chargers can provide up to 80% charge in 30 minutes.</marquee>
                </div>
            </section>
        </>
    )
}

export default Signin