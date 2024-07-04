import React from "react";
import headset from "../../images/headset.png";
import headphone1 from "../../images/headphone1.png";
import headphone from "../../images/headphone.png";
import ipad from "../../images/ipad.png";
import laptop from "../../images/laptop.png";
import smartwatch from "../../images/smartwatch.png";
function First() {
  return (
    <>
      <div className="flex justify-between pt-14 px-16 py-16">
        <div className="w-1/2 rounded-lg bg-pink-400 flex py-14">
          <div className=" px-6">
            <h1 className=" px-3  font-bold uppercase text-white mb-5">
              supercharged for pros
            </h1>
            <h1 className=" capitalize font-bold text-slate-800 text-5xl mb-7">
              special sale
            </h1>
            <h1 className=" font-semibold capitalize text-slate-900">
              from $999.00 or $41.62/mo
            </h1>
            <h1 className=" font-semibold text-slate-900 mb-6">
              for 24/mo Footnotes*
            </h1>
            <button className=" uppercase px-5 bg-black text-white py-2 mb-12 rounded-lg">
              Buy now
            </button>
          </div>
          <div className=" pt-4 w-1/3 px-6">
            <img
              src={headset}
              alt="no internet connection"
              className=" w-full float-right"
            />
          </div>
        </div>
        <div className="w-1/2 grid grid-cols-2">
          <div className=" bg-slate-400 flex justify-between ml-3 mt-2 rounded-md ">
            <div className="pt-10">
              <h1 className=" text-orange-700 mb-4 uppercase px-4 font-bold">
                Best sale
              </h1>
              <h1 className=" text-black font-bold text-xl">Headphone max</h1>
              <h1 className=" px-2">from $169.00 or </h1>
              <h1 className=" px-2">$144.00</h1>
            </div>
            <div className="w-2/5">
              <img
                src={headphone}
                alt="no internet connection"
                className=" h-full"
              />
            </div>
          </div>

          <div className=" bg-black text-white flex justify-between ml-3 mt-2 rounded-md ">
            <div className="pt-10">
              <h1 className=" text-orange-700 mb-4 uppercase px-4 font-bold">
                Best sale
              </h1>
              <h1 className=" font-bold text-xl">Headphone max</h1>
              <h1 className=" px-2">from $169.00 or </h1>
              <h1 className=" px-2">$144.00</h1>
            </div>
            <div className="w-2/5">
              <img
                src={ipad}
                alt="no internet connection"
                className=" h-full"
              />
            </div>
          </div>

          <div className=" flex justify-between ml-3 mt-2 rounded-md ">
            <div className=" pt-10">
              <h1 className=" text-orange-700 mb-4 uppercase px-4 font-bold">
                Best sale
              </h1>
              <h1 className=" text-black font-bold text-xl">Headphone max</h1>
              <h1 className=" px-2">from $169.00 or </h1>
              <h1 className=" px-2">$144.00</h1>
            </div>
            <div className="w-2/5">
              <img
                src={laptop}
                alt="no internet connection"
                className=" h-full"
              />
            </div>
          </div>

          <div className=" flex justify-between ml-3 mt-2 rounded-md ">
            <div className="pt-10">
              <h1 className=" text-orange-700 mb-4 uppercase px-4 font-bold">
                Best sale
              </h1>
              <h1 className=" text-black font-bold text-xl">Headphone max</h1>
              <h1 className=" px-2">from $169.00 or </h1>
              <h1 className=" px-2">$144.00</h1>
            </div>
            <div className="w-2/5">
              <img
                src={smartwatch}
                alt="no internet connection"
                className=" h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default First;
