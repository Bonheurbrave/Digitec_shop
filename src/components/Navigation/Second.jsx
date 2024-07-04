import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BiRefresh, BiSearch } from "react-icons/bi";
import { CgShoppingCart } from "react-icons/cg";
import {Link} from 'react-router-dom'
function Second() {
  return (
    <>
      <div className=" flex justify-between bg-black text-white text-xs py-2 px-16 cursor-pointer">
        <h1 className=" text-3xl text-white">Digitic.</h1>
        <div className=" flex w-1/2 h-9 pt-2">
          <input
            type="text"
            className="w-5/6 outline-none rounded-l-sm px-3 text-sm font-semibold text-black"
            placeholder="Search your products"
          />
          <div className=" w-1/6 px-7 py-1 bg-orange-400 rounded-r-sm">
            <BiSearch size={20} />
          </div>
        </div>
        <div className="flex">
          <BiRefresh
            size={40}
            className=" hover:text-red-200 hover:rotate-90 duration-1000 ease-in-out"
          />
          <div className=" capitalize py-1">
            <h1>favorite</h1>
            <h1>Wishlist</h1>
          </div>
        </div>
        <Link to="/login">
        <div className="flex">
          <AiOutlineUser size={40} className=" text-slate-300" />
          <div className=" py-1">
            <h1>Login</h1>
            <h1>My account</h1>
          </div>
        </div>
        </Link>
        <div className="flex">
          <CgShoppingCart size={40} className=" text-slate-300" />
          <div className="px-2 py-1">
            <h1>0</h1>
            <h1>$0.00</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Second;
