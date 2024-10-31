import React from 'react'
import Fooditems from './fooditems'
import './font.css'
function menu() {
  return (
    <div>
      <div className='mt-20 flex justify-center bg-yellow-100 bg-opacity-20 h-52'>
        <h1 className='fontt text-7xl flex items-center '> Menu</h1> </div>

      <div className='mt-28 flex  flex-col items-center justify-center '>
  <button className='border border-gray-800 rounded-xl p-0.5 px-3 bg-yellow-100 bg-opacity-30 mb-5 play'> OUR MENU</button>
        <h1 className='fonty font-bold text-4xl  ' >Most Popular Food in the World</h1>
       
       <div className=' mt-14'> <Fooditems/></div>
       </div>
    </div>
  )
}

export default menu
