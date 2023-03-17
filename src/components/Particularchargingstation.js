import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ImLocation } from 'react-icons/im';
const Particularchargingstation = () => {
  const { chargingpoint } = useParams();
  const [maxdate, setmaxdate] = useState()
  useEffect(() => {
    var days = 10
    var current = new Date(); //'Mar 11 2015' current.getTime() = 1426060964567
    var followingDay = new Date(current.getTime() + days * 24 * 60 * 60 * 1000); // + 1 day in ms
    setmaxdate(followingDay.toISOString().split('T')[0])
  }, [])

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 pt-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full md:h-[75vh] h-full overflow-auto md:overflow-y-scroll lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <div className='flex justify-between '>
              <h2 className="text-sm title-font text-gray-500 tracking-widest"><span className="title-font font-medium text-2xl text-gray-900">
                <div className='flex mt-2'>
                  <ImLocation className='text-gray-300 mr-3' />
                  <span className='text-sm mt-2'>hello</span>
                </div>
              </span></h2>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4 ">Animated Night Hill Illustrationsahdga fdafdfd jhagkfjad</h1>
            <div className="flex justify-between">
              <div>
              </div>
              <div className='flex'>
                <div >
                  reviews
                </div>

              </div>
            </div>
            <form className=''>
              <div>
                <label for="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of visit</label>
                <input type="date" name='date' max={maxdate} min={new Date().toISOString().split('T')[0]} onChange={onchange} id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
              </div>
              <div className='my-3 '>
                <label for="timing" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select time</label>
                <select id="timing" name='timing' onChange={onchange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option selected>Choose a time schedule</option>
                  <option value="11:00 - 11:30">00:00 - 1:00</option>
                  <option value="11:00 - 11:30">01:00 - 2:00</option>
                  <option value="11:00 - 11:30">02:00 - 3:00</option>
                  <option value="11:00 - 11:30">03:00 - 4:00</option>
                  <option value="11:00 - 11:30">04:00 - 5:00</option>
                  <option value="11:00 - 11:30">05:00 - 6:00</option>
                  <option value="11:00 - 11:30">06:00 - 7:00</option>
                  <option value="11:00 - 11:30">07:00 - 8:00</option>
                  <option value="11:00 - 11:30">08:00 - 9:00</option>
                  <option value="11:00 - 11:30">09:00 - 10:00</option>
                  <option value="11:00 - 11:30">10:00 - 11:00</option>
                  <option value="11:00 - 11:30">11:00 - 12:00</option>
                  <option value="11:00 - 11:30">12:00 - 13:00</option>
                  <option value="11:00 - 11:30">13:00 - 14:00</option>
                  <option value="11:00 - 11:30">14:00 - 15:00</option>
                  <option value="11:00 - 11:30">15:00 - 16:00</option>
                  <option value="11:00 - 11:30">16:00 - 17:00</option>
                  <option value="11:00 - 11:30">17:00 - 18:00</option>
                  <option value="11:00 - 11:30">18:00 - 19:00</option>
                  <option value="11:00 - 11:30">19:00 - 20:00</option>
                  <option value="11:00 - 11:30">20:00 - 21:00</option>
                  <option value="11:00 - 11:30">21:00 - 22:00</option>
                  <option value="11:00 - 11:30">22:00 - 23:00</option>
                  <option value="11:00 - 11:30">23:00 - 24:00</option>
                </select>
              </div>
              <div className='text-center mt-5'>
                <button type="button" className="focus:outline-none  text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Green</button>
              </div>
            </form>
            <div className="mb-4">
              <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
              <section className="text-gray-600 body-font">
                <div className="px-1 py-5 mx-auto">
                  <div className="flex items-center border-t p-3 w-full mx-auto border-b border-gray-200 sm:flex-row flex-col">
                    <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="sm:w-16 sm:h-16 w-10 h-10" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                      <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Shooting Stars</h2>
                      <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                      <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <img alt="ecommerce" className="lg:w-1/2 hidden md:block w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
        </div>

      </div>
    </section>
  )
}

export default Particularchargingstation