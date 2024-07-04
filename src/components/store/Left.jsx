import React from 'react'

function Left() {
  return (
    <>
    <div className="1/5">
        <div className=" bg-white mr-6 rounded-md px-4">
            <h1 className="capitalize font-bold mb-4">shop by categories</h1>
            <h1 className="mb-2 capitalize">home</h1>
            <h1 className="mb-2 capitalize">our store</h1>
            <h1 className="mb-2 capitalize">blog</h1>
            <h1 className="mb-2 capitalize pb-5">contact</h1>
        </div>
        <div className="bg-white  mr-6 rounded-md px-4">
            <h1 className=" mb-3 font-bold capitalize">filter by </h1>
            <h1 className=" mb-2 text-sm font-bold">availability</h1>
        <div className="flex">
            <input type="checkbox" /> <p className=" px-3 capitalize">In stock (21)</p>
        </div>
        
        <div className="flex mb-5">
            <input type="checkbox" /> <p className=" px-3 capitalize">out of stock (21)</p>
        </div>

        <h1 className="font-bold capitalize text-sm">Price </h1>
        <div className="flex">
            $<input type="number" placeholder='From' className="w-3/5 outline-none px-3 bg-slate-10"/> $ <input type="number" placeholder='To' className="w-3/5 bg-slate-100 outline-none px-3"/>
        </div>
        <div className=" py-12">
            <h1 className="font-bold">Size</h1>
            
        <div className="flex">
            <input type="checkbox" /> <p className="px-4">S (10)</p>
        </div>
        <div className="flex">
            <input type="checkbox" /> <p className="px-4">M (13)</p>
        </div>
        <div className="flex">
            <input type="checkbox" /> <p className="px-4">L (12)</p>
        </div>
        <div className="flex">
            <input type="checkbox" /> <p className="px-4">XL (5)</p>
        </div>
        
        <div className="flex">
            <input type="checkbox" /> <p className="px-4">XML (5)</p>
        </div>
        
        </div>

        </div>
        <div className="rounded-md bg-white mr-6 py-5 mt-5 px-4">
            <h1 className="font-bold capitalize">Product tag</h1>
            <div className="grid grid-cols-3 py-5">
                <h1 className=" rounded-md bg-slate-200 mb-3 ml-3 text-center">Headset</h1>
                <h1 className=" rounded-md bg-slate-200 mb-3 ml-3 text-center">laptop</h1>
                <h1 className=" rounded-md bg-slate-200 mb-3 ml-3 text-center">mobile</h1>
                <h1 className=" rounded-md bg-slate-200 mb-3 ml-3 text-center">oppo</h1>
                <h1 className=" rounded-md bg-slate-200 mb-3 ml-3 text-center">speaker</h1>
                <h1 className=" rounded-md bg-slate-200 mb-3 ml-3 text-center">tablet</h1>
                <h1 className=" rounded-md bg-slate-200 mb-3 ml-3 text-center">vivo</h1>
                <h1 className=" rounded-md bg-slate-200 mb-3 ml-3 text-center">wire</h1>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Left