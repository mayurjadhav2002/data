import React, { useContext,useState } from 'react'
import {
    Link
} from "react-router-dom";
import { useNavigate } from 'react-router'
const Login = () => {
    var history = useNavigate();
    const [logindetail, setlogindetail] = useState({ email: "", password: "" })
    const handleclick = (e) => {
        e.preventDefault();
        logincustomer(logindetail.email, logindetail.password)
    }
    const onchange = (e) => {
        setlogindetail({ ...logindetail, [e.target.name]: e.target.value })
    }
    const logincustomer = async (email,password) => {
        const response = await fetch('http://localhost:3001/app/logincustomer', {
            method: "POST",
            headers: {
                "Content-type": "application/json;charset=UTF-8",
            },
            // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify({email,password}) // body data type must match "Content-Type" header
        });
        const  json5 = await response.json()
        console.log(json5.jwttoken)
        if (json5.jwttoken) {
            localStorage.setItem("eflux",json5.jwttoken);
            history("/chargingpoint")
          } else {
            alert("invalid")
          }
    }
    return (
        <section className="bg-gray-50 h-screen dark:bg-gray-900 overflow-hidden lg:overflow-auto">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="/">
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" name="email" id="email" onChange={onchange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" onChange={onchange} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
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
                            <button type="button" onClick={handleclick} 
                            className="btn btn-active w-full">Login</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet? <Link to="/signin" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                            </p>
                        </form>
                    </div>

                </div>
                <marquee className='bottom-0 absolute'>The charging speed of electric vehicles varies depending on the type of charger used. Level 1 chargers (120V) typically provide a charging rate of 4-5 miles of range per hour, while Level 2 chargers (240V) can provide a charging rate of up to 25 miles of range per hour. DC fast chargers can provide up to 80% charge in 30 minutes.</marquee>
            </div>
        </section>
    )
}

export default Login