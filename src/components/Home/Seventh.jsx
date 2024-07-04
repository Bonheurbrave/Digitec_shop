import React from 'react'
import bose from '../../images/company/bose.png'
import dell from '../../images/company/dell.png';
import samsung from '../../images/company/samsung.png'
import sandisk from '../../images/company/sandisk.png'
import sony from '../../images/company/sony.png'
import lg from '../../images/company/lg.png'
import intel from '../../images/company/intel.png'
function Seventh() {
    const ads = [
        {
            id:1 , 
            img:intel
        },
        {
            id:2 , 
            img:sony,
        },
        {
            id:3 , 
            img:sandisk,
        },
        {
            id:4 , 
            img:dell
        },
        {
            id:5 , 
            img:lg
        },
        {
            id:6 , 
            img:bose
        },
        {
            id:7 , 
            img:samsung
        }
    ]
  return (
    <>
    <div className=' py-6 bg-slate-100 px-6'>
        <div className=' flex justify-between bg-white  pt-7'>

        {
            ads.map((elem)=>{
                return (
                    <div>
                        <img className=' hover:rotate-180 duration-500' src={elem.img} alt="no internet connection" width={90}/>
                    </div>
                )
            })
        }
        </div>
    </div>
    </>
  )
}

export default Seventh