import React from "react";

function First() {
  return (
    <>
      <div className=" bg-black flex justify-between py-1 px-16 text-white text-xs border-b-2 border-slate-800">
        <h1 className=" capitalize">free shipping over $100 & free returns</h1>
        <div className=" flex justify-between w-1/3">
          <h1>hotline:+25079482154 </h1>
          <select name="language" className=" text-white bg-black outline-none">
            <option value="English">English</option>
          </select>
          <select name="Currency" className=" bg-black text-white outline-none">
            <option value="USD">USD $</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default First;
