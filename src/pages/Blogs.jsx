import React from 'react'
import pro1 from '../images/news/pro1.png'
import pro2 from '../images/news/pro2.png'
import pro3 from '../images/news/pro3.png'
import pro4 from '../images/news/pro4.png'

function Blogs() {
    const collections = [
        {
          id: 1,
          date: "11 , June 2020",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere unde rerum modi libero sunt beatae culpa ipsam ex maxime consequuntur perspiciatis saepe placeat, explicabo provident possimus praesentium cumque, dolorum accusamus!",
          title: "Beautiful sunday renaissance",
          img: pro1,
        },
    
        {
          id: 2,
          date: "11 , June 2020",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere unde rerum modi libero sunt beatae culpa ipsam ex maxime consequuntur perspiciatis saepe placeat, explicabo provident possimus praesentium cumque, dolorum accusamus!",
          title: "set ut persiconsiti unde omnis",
          img: pro2,
        },
        {
          id: 3,
          date: "11 , June 2020",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere unde rerum modi libero sunt beatae culpa ipsam ex maxime consequuntur perspiciatis saepe placeat, explicabo provident possimus praesentium cumque, dolorum accusamus!",
          title: "Vitaa est pas d Contin cord understanding",
          img: pro3,
        },
        {
          id: 4,
          date: "11 , June 2020",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere unde rerum modi libero sunt beatae culpa ipsam ex maxime consequuntur perspiciatis saepe placeat, explicabo provident possimus praesentium cumque, dolorum accusamus!",
          title: "Urna pretium ellit Mauris Cursus curabitu",
          img: pro4,
        },
      ];
  return (
    <>
    <div>
    <div className=" px-16 py-10 bg-slate-100">
        <div className="flex justify-between">
          {collections.map((elem) => {
            return (
              <div className=" ml-5 rounded-md bg-white">
                <img src={elem.img} alt={elem.title} className=" w-full h-2/3"/>
                <p className=" text-slate-600 px-2 text-xs py-2">{elem.date}</p>
                <h3 className=" px-2 font-semibold">{(elem.title).substring(0,27)} ...</h3>
                <p className=" px-2 text-sm">{(elem.desc).substring(0, 50)}...</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </>
  )
}

export default Blogs