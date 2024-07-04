import React from 'react'
import { BiCategory } from 'react-icons/bi'
import { Link } from 'react-router-dom'
function Third() {
  return (
    <>
    <div className=' flex bg-slate-800 text-white px-16 py-2'>
        <div className='flex'>
            <div>
            <BiCategory size={24}/>
            </div>
            <select name="category" className=' focus-within:duration-1000 ease-in-out  bg-slate-800 px-10 outline-none border-r-2 border-r-slate-700'>
                <option>SHOP CATEGORY</option>
            </select>
        </div>
        <div>
            <Link to={`/`} className=' px-5 text-sm'>HOME</Link>
            <Link to={`/collection/our-store`} className=' px-5 text-sm'>OUR STORE</Link>
            <Link to={`/blogs`} className=' px-5 text-sm'>BLOG</Link>
            <Link to={`/contact`} className=' px-5 text-sm'>CONTACT</Link>
        </div>
    </div>
    </>
  )
}

export default Third