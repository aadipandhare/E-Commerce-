import React from 'react'
import { assets } from '../assets/assets.js';


export const Navbar = ({setToken}) => {
  return (
    <div className='flex item-centre justify-between py-2 px-[4%]'>
      <img className='w-[max(10%,80px)] 'src={assets.logo} alt="" />
      <button onClick={()=>setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:px-7 rounded-full text-xs my-3 sm:text-sm cursor-pointer'>Logout</button>
    </div>
  )
}
