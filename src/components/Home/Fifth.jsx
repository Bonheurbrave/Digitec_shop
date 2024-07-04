import React, { useState } from "react";
import camerafeatured from "../../images/featurecollection/camerafeature.png";
import featuredheadset from "../../images/featurecollection/featuredheadset.png";
import featuredphone from "../../images/featurecollection/featuredphone.png";
import featuredspeaker from "../../images/featurecollection/featuredspeaker.png";
import featuredsmartwatch from "../../images/featurecollection/featuredsmartwatch.png";
import {
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineLike,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiShuffle } from "react-icons/bi";

function Fifth() {
  const [secs, setsecs] = useState(0);
  const [mins, setmins] = useState(0);
  const [hours, sethours] = useState(0);
  const [days, setdays] = useState(0);
  const [weeks, setweeks] = useState(0);
  const [months, setmonths] = useState(0);
  const collections = [
    {
      id: 1,
      comp: "havells",
      title: "Kids headphone bulk 20 packs multi colored for ...",
      img: camerafeatured,
      rating: 5,
      price: 100,
      formerprice:100,
      expdate: new Date("July 02 , 2025"),
      number: 30,
      btncolor: "yellow",
    },
    {
      id: 2,
      comp: "sony",
      title: "Olympus pen with e-pl9 kit with 14-42 lenz , camera ...",
      img: featuredheadset,
      rating: 5,
      price: 10,
      expdate: new Date("July 02 , 2025"),
      number: 100,
      formerprice:10,
      btncolor: "black",
    },
    ,
    {
      id: 3,
      comp: "Havells",
      title: "Honor t1 7.0 1GB RAM 8GB ROM ...",
      img: featuredphone,
      rating: 5,
      price: 100,
      formerprice:100,
      expdate: new Date("July 02 , 2025"),
      number: 42,
      btncolor: "black",
    },
    ,
    {
      id: 4,
      comp: "bajaj",
      title: "Beoplay A1 portable bluetooth speaker with ...",
      img: featuredspeaker,
      rating: 5,
      price: 500,
      formerprice:500,
      formerprice: 760,
      expdate: new Date("July 02 , 2025"),
      number: 500,
      btncolor: "black",
    },
    ,
    {
      id: 5,
      comp: "sony",
      title: "Milanez loop watch for 42mm/44mm apple ...",
      img: featuredsmartwatch,
      rating: 5,
      price: 10,
      formerprice:10 ,
      expdate: new Date("July 02 , 2025"),
      number: 1000,
      btncolor: "black",
    },
    ,
    {
      id: 6,
      comp: "bajaj",
      title: "Sony extra bass portable splash-proof wireless ...",
      img: featuredspeaker,
      rating: 5,
      price: 220,
      formerprice:220,
      expdate: new Date("July 02 , 2025"),
      number: 53,
      btncolor: "black",
    },
  ];
  collections.map((elem)=>{
    const dif = elem.formerprice - elem.price ;
    console.log(dif);
  })
  return (
    <>
      <div className=" py-10 px-16 bg-slate-100">
        <h1 className=" font-bold text-xl">Special products</h1>
        <div className=" grid grid-cols-3">
          {collections.map((elem) => {
            setInterval(() => {
              const distance = elem.expdate.getTime() - new Date().getTime();

              setdays(Math.floor(distance / (1000 * 60 * 60 * 24)));
              sethours(
                Math.floor(
                  (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                )
              );
              setmins(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
              setsecs(Math.floor((distance % (1000 * 60)) / 1000));
            }, 1000);
            return (
              <div
                className=" flex justify-between bg-white rounded-lg pt-6 ml-2 px-4 mt-3 py-16"
                key={elem.id}
              >
                <div className="relative">
                    <h1 className=" rounded-lg px-2 bg-orange-300 w-12 ">-{Math.floor((elem.formerprice - elem.price) / elem.formerprice *100)}%</h1>
                  <div>
                    <img
                      src={elem.img}
                      alt="no internet connection"
                      width={100}
                    />
                    <div className=" pt-10 flex justify-between px-2 ">
                      <img
                        src={elem.img}
                        alt="no internet connection"
                        width={34}
                      />
                      <img
                        src={elem.img}
                        alt="no internet connection"
                        width={34}
                      />
                    </div>
                  </div>
                  <div className=" float-right absolute top-2 -right-5">
                    <AiOutlineHeart title="add to favorites" />
                    <AiOutlineEye title="full-screen view" />
                    <BiShuffle title="compare" />
                    <AiOutlineShoppingCart title="add to cart" />
                  </div>
                </div>
                {/* second part  */}
                <div className=" w-3/5 float-right">
                  <h1 className=" text-xs text-orange-800 font-semibold">
                    {elem.comp}
                  </h1>
                  <h1 className=" font-bold mb-4">{elem.title}</h1>
                  <h1 className=" flex justify-between">
                    ${elem.price} <span className=" text-orange-400"><strike>${elem.formerprice}</strike></span>
                  </h1>
                  <h1 className=" flex">
                    <span>{days}days</span>
                    <span className=" rounded-full w-10 h-7 text-center bg-red-500">
                      {hours}
                    </span>{" "}
                    <pre>:</pre>
                    <span className=" rounded-full w-10 h-7 text-center bg-red-500">
                      {mins}{" "}
                    </span>{" "}
                    <pre>:</pre>
                    <span className=" rounded-full w-10 h-7 text-center bg-red-500">
                      {secs}{" "}
                    </span>{" "}
                    <pre></pre>
                  </h1>
                  <h1 className=" py-3 text-xs text-slate-400 font-semibold">Products : {elem.number}</h1>
                  <div className=" pt-2 mb-10">
                    <p
                      className="w-full h-1 rounded-md bg-slate-100"
                      style={{
                        borderLeft: `${
                          (elem.number / 1000) * 200
                        }px solid green`,
                      }}
                    ></p>
                  </div>
                  <button className=" font-bold py-2 ease-in-out duration-500 text-white w-full bg-black rounded-md hover:bg-orange-600">
                    Option
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Fifth;
