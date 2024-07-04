import React from 'react'
import {Link} from 'react-router-dom'

function Login() {
  return (
    <>
      <div className=" bg-slate-100 py-20">
        <div className="flex justify-center align-center">
            <div className="block w-1/3 bg-white px-6 py-10">

            <h1 className="text-center font-bold mb-4">Login</h1>
            <input type="email" placeholder="Email" className=" mb-6 block py-1 w-full bg-slate-100 text-sm outline-none" />
            <input type="password" placeholder="Password" className=" mb-6 block py-1 w-full bg-slate-100 text-sm outline-none" />
            <h1 className="text-xs font-bold capitalize">forgot password ?</h1>

            <div className="flex justify-center pt-6">
                <Link><button className="bg-black py-1 text-white px-8 rounded-sm">login</button></Link>
                <Link to="/register"><button className="ml-8 bg-orange-600 py-1 text-black rounded-sm px-8">sign up</button></Link>
            </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Login