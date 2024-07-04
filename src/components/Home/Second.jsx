import React from 'react'
import { FaShippingFast } from 'react-icons/fa'
import { BiAward } from 'react-icons/bi'
import { BsHeadset } from 'react-icons/bs'
import { MdVerified } from 'react-icons/md'
import { MdPayment } from 'react-icons/md'
import SemiSecond from './SemiSecond'

function Second() {
  return (
<>
<div className=' px-16 bg-slate-100 pb-10'>

    <div className=' flex justify-between py-12 text-slate-700'>
        <div  className=' flex'>
            <FaShippingFast size={35}/>
            <div className=' px-3'>
                <h1 className=' font-bold'>Free shipping</h1>
                <h1 className=' text-slate-500'>from all orders over $100</h1>
            </div>
        </div>
        <div  className=' flex'>
            <BiAward size={35}/>
            <div className=' px-2'>
                <h1 className=' font-bold'>Daily suprise offers</h1>
                <h1 className=' text-slate-500'>save up to 25%</h1>
                </div>            
        </div>
        <div  className=' flex'>
            <BsHeadset size={35}/>
            <div className=' px-2'>
                <h1 className=' font-bold'>Support 24/7</h1>
                <h1 className=' text-slate-500'>shop with an expert</h1>
            </div>
        </div>
        <div className=' flex justify-between'>
            <MdVerified size={35}/>
            <div className=' px-2'>
            <h1 className=' font-bold'>Affordable Prices</h1>
            <h1 className=' text-slate-500'>get factory direct prices</h1>
            </div>
        </div>
        <div  className=' flex'>
            <MdPayment size={35}/>
            <div className=' px-2'>
                <h1 className=' font-bold'>Secure payments</h1>
                <h1 className=' text-slate-500'>100% protected payments</h1>
            </div>
            <div>

            </div>
        </div>
    </div>
        <SemiSecond />
</div>
        </>
  )
}

export default Second