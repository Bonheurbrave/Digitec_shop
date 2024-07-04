import React from 'react'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlinePinterest, AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai'
import { IoSend } from 'react-icons/io5'
import playstore from '../images/news/googleplay.png'
import appstore from '../images/news/appstore.png'
function Footer() {
  return (
    <>
    <div className=' px-16 bg-black text-slate-300 py-16'>
      <div className=' flex justify-between px-20'>
        <h1 className=' font-bold text-2xl flex text-white'><IoSend className=' -rotate-45'/> <span className=' capitalize px-3 font-thin'>Sign up for newsletter</span></h1>
        <div className=' flex border-2 border-slate-50 w-1/2 rounded-md'>
          <input type="text" className=' py-1 w-5/6 px-5 text-xs text-black outline-none' placeholder='Enter your email'/>
          <button className=' py-1 px-5 rounded-md uppercase text-slate-200'>subscribe</button>
        </div>
      </div>

      {/* subsection */}
      <div className=' pt-16 flex justify-between'>
        {/* contact us */}
        <div className=' w-1/5'>
          <h1 className=' font-semibold text-white pb-3'>Contact us </h1>
          <h1>demo store</h1>
          <h1>Makuza tower , KN67 , Kigali</h1>
          <h1>Rwanda</h1>
          <small><address>digitechinfo@gmail.com</address></small>

          <div className=' flex justify-between pt-10'>
            <AiOutlineTwitter size={20} className=' hover:text-red-400 ease-in-out duration-300'/>
            <AiOutlineFacebook size={20} className=' hover:text-red-400 ease-in-out duration-300'/>
            <AiOutlinePinterest size={20} className=' hover:text-red-400 ease-in-out duration-300'/>
            <AiOutlineInstagram size={20} className=' hover:text-red-400 ease-in-out duration-300'/>
            <AiOutlineYoutube size={20} className=' hover:text-red-400 ease-in-out duration-300'/>
          </div>
        </div>

        {/* information */}
        <div className=' w-1/5'>
          <h1 className=' text-white pb-3 font-semibold'>Information</h1>
          <h1 className=' cursor-pointer hover:text-green-500'>Privacy Policy</h1>
          <h1 className=' cursor-pointer hover:text-green-500'>Refund Policy</h1>
          <h1 className=' cursor-pointer hover:text-green-500'>Shipping policy</h1>
          <h1 className=' cursor-pointer hover:text-green-500'>Terms of services</h1>
          <h1 className=' cursor-pointer hover:text-green-500'>Blogs</h1>
        </div>
        {/* Account */}
        <div className=' w-1/5'>
          <h1 className=' text-white pb-3 font-semibold'>Account</h1>
          <h1 className=' cursor-pointer hover:text-green-500'>Search</h1>
          <h1 className=' cursor-pointer hover:text-green-500'>About us</h1>
          <h1 className=' cursor-pointer hover:text-green-500'>FAQ</h1>
          <h1 className=' cursor-pointer hover:text-green-500'>Contact</h1>
          <h1 className=' cursor-pointer hover:text-green-500'>Size chart </h1>
        </div>
        {/* quick links */}
        <div className=' w-1/5'>
          <h1 className=' text-white pb-3 font-semibold'>Quick Links</h1>
          <h1 className=' cursor-pointer hover:text-green-500'>Accessories</h1>
          <h1 className=' cursor-pointer hover:text-green-500'>Laptops</h1>
          <h1 className=' cursor-pointer hover:text-green-500'>Headphones</h1>
          <h1 className=' cursor-pointer hover:text-green-500'>Smart Watches</h1>
          <h1 className=' cursor-pointer hover:text-green-500'>Tablets</h1>

        </div>
        {/* Our Apps */}
        <div className=' w-1/5 bg-white pb-3 px-10 text-slate-700'>
          <h1 className=' text-black font-semibold'>Our App</h1>
          <h1>Download our app and get extra 15% discount on your first order ...</h1>

          <div>
            <img src={playstore} alt="no internet connection" />
            <img src={appstore} alt="no internet connection" />
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}
export default Footer