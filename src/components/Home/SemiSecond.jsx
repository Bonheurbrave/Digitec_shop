import React from "react";
import smartwatch from "../../images/smartwatch.png";
import camera from "../../images/camera.png";
import earbuds from "../../images/earbuds.png";
import headphone2 from "../../images/headphone2.png";
import homeappliance from "../../images/homeappliance.png";
import laptop1 from "../../images/laptop1.png";
import phone from "../../images/phone.png";
import smarttv from "../../images/smarttv.png";
import manet from "../../images/manet.png";
import speaker from "../../images/speaker.png";
function SemiSecond() {
  const divs = [
    {
      id: 1,
      title: "Computers & laptops",
      items: "6 items",
      img: laptop1,
    },
    {
      id: 2,
      title: "Cameras & videos",
      items: "10 items",
      img: camera,
    },
    ,
    {
      id: 3,
      title: "Smart Television",
      items: "12 items",
      img: smarttv,
    },
    ,
    {
      id: 4,
      title: "Smart watches",
      items: "13 items",
      img: smartwatch,
    },
    ,
    {
      id: 5,
      title: "Musics & Gaming",
      items: "4 items",
      img: manet,
    },
    ,
    {
      id: 6,
      title: "Mobiles & Tablets",
      items: "5 items",
      img: phone,
    },
    ,
    {
      id: 7,
      title: "Headphones",
      items: "6 items",
      img: headphone2,
    },
    ,
    {
      id: 8,
      title: "Accessories",
      items: "10 items",
      img: earbuds,
    },
    ,
    {
      id: 9,
      title: "Portable Speakers",
      items: "6 items",
      img: speaker,
    },
    ,
    {
      id: 10,
      title: "Home applicances",
      items: "15 items",
      img: homeappliance,
    },
  ];
  return (
    <>
      <div className=" py-0 pb-6 bg-white rounded-lg px-7 shadow-md shadow-slate-400">
        <div className=" grid grid-cols-5">
          {divs.map((elem) => {
            return (
              <div className=" flex border-r-2 border-r-slate-50 justify-between px-3 mt-16 border-b-2 border-b-slate-50  pb-6">
                <h1 className=" text-sm font-bold">
                  {elem.title}{" "}
                  <p className=" text-xs font-normal text-slate-400 mt-2">
                    {elem.items}
                  </p>
                </h1>
                <img src={elem.img} alt="no internet connection" width={60} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SemiSecond;
