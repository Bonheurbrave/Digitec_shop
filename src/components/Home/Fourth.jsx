import React from 'react'
import smartwatch from '../../images/smartwatch.png'
import laptop from '../../images/laptop.png'
import phone from '../../images/phone.png'
import speaker from '../../images/speaker.png'

function Fourth() {
    const collections = [
        {
            id:1,
            img:smartwatch,
            title:"Big Screen",
            desc:"Smart Watch Series 7",
            int :"From $399 or $16/mo for 24/mo",
            background:"black"
        }
        ,
        {
            id:2 ,
            img:laptop,
            title:"Studio Display",
            desc:"600 nits of Brightness",
            int :"27k-inches 5k retina display"
        },
        ,
        {
            id:3 , 
            img:phone,
            title:"SmartPhone",
            desc:"SmartPhone 13 pro",
            int :"Now in green from $999 or $41/mo for 24/mo *Footnotes"
        },
        ,
        {
            id:4 , 
            img:speaker,
            title:"Home speaker",
            desc:"Room-filling Sounds",
            int :"From $999 or $116/mo for 24/mo"
            
        }
    ]
  return (
    <>
     <div className=' flex justify-between bg-slate-100 py-10 px-16'>
        {
            collections.map((elem)=>{
                return (
                    <div className=' rounded-lg ml-3 bg-white px-10 pt-10' key={elem.id}>
                        <h1 className=' uppercase text-xs mb-4 font-semibold text-slate-500'>{elem.title}</h1>
                        <h1 className=' font-bold text-xl mb-4'>{elem.desc}</h1>
                        <h1 className=' capitalize text-sm mb-10'>{elem.int}</h1>
                        <img src={elem.img} alt="no internet connection" />
                    </div>
                )
            })
        }
     </div>
    </>
  )
}

export default Fourth