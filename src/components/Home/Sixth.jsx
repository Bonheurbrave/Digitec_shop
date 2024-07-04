import React from 'react'
import camerafeatured from "../../images/featurecollection/camerafeature.png";
import featuredheadset from "../../images/featurecollection/featuredheadset.png";
import featuredphone from "../../images/featurecollection/featuredphone.png";
import featuredspeaker from "../../images/featurecollection/featuredspeaker.png";
import laptop from '../../images/laptop.png'
import featuredsmartwatch from "../../images/featurecollection/featuredsmartwatch.png";
import {
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineLike,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiShuffle } from "react-icons/bi";

function Sixth() {
    const categories = [

        {
            id:1 ,
            cat:"Smart Watch",
            img:featuredsmartwatch

        },
        {
            id:2 , 
            cat:"Speaker",
            img:featuredspeaker,
        },
        {
            id:3,
            cat:"Laptops",
            img:laptop,
            
        }
    ]

    const collections = [
        {
          id: 1,
          comp: "havells",
          title: "Kids headphone bulk 20 packs multi colored for ...",
          img:camerafeatured,
          rating:5,
          price:100,
          
          
        },
        {
          id: 2,
          comp: "sony",
          title: "Olympus pen with e-pl9 kit with 14-42 lenz , camera ...",
          img:featuredheadset,
          rating:5,
          price:10
        },
        ,
        {
          id: 3,
          comp: "Havells",
          title: "Honor t1 7.0 1GB RAM 8GB ROM ...",
          img:featuredphone,
          rating:5,
          price:100
        },
        ,
        {
          id: 4,
          comp: "bajaj",
          title: "Beoplay A1 portable bluetooth speaker with ...",
          img:featuredspeaker,
          rating:5,
          price:500,
          formerprice:760 
        },
        ,
        {
          id: 5,
          comp: "sony",
          title: "Milanez loop watch for 42mm/44mm apple ...",
          img:featuredsmartwatch,
          rating:5,
          price:10
        },
      ];
    
  return (
    <>
    <div className=' px-16 bg-slate-100 py-10'>
        <h1 className=' font-bold text-slate-900  text-2xl mb-4'>Our popular Products</h1>
        <div className=' flex justify-between'>

        <div className=' w-1/5 rounded-md bg-white mr-3 py-5 px-4 font-semibold text-sm'>
            {/* categories */}
            {categories.map((elem)=>{
                return (
                    <div>
                        <div className=' flex justify-start pt-4 hover:text-slate-950 text-slate-600 hover:cursor-pointer'>
                            <img width={20} src={elem.img} alt="no internet connection" />
                            <h1 className=' px-6'>{elem.cat}</h1>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className=" flex justify-between w-4/5">
            { collections.map((elem)=>{
                return (
                    <div className=" mr-3 rounded-md bg-white px-6 relative w-1/3" key={elem.id} >
                        <div className=" float-right absolute top-2 right-2">
                          <AiOutlineHeart title="add to favorites"/>
                          <AiOutlineEye title="full-screen view"/>
                          <BiShuffle title="compare"/>
                          <AiOutlineShoppingCart title="add to cart"/>
                        </div>
                        <img src={elem.img} alt="no internet connection" className=" mx-auto h-1/2 hover:saturate-50 hover:scale-105 ease-in-out duration-300"/>
                        <h1 className=" text-xs text-orange-800 font-semibold">{elem.comp}</h1>
                        <h1 className=" text-sm font-bold w-full">{elem.title.substring(0,22)}...</h1>
                        <h1></h1>
                        <h1 className=" flex justify-between text-sm pt-4 font-semibold">${elem.price}.00 <strike className=" text-red-400 text-xs font-normal">${elem.formerprice}.00</strike></h1>
                    </div>
                )
            })}
        </div>
        
            </div>
    </div>
    </>
  )
}

export default Sixth