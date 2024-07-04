import React from 'react'
import { CiWarning } from 'react-icons/ci'
import { Link } from 'react-router-dom'
function ErrorPage() {
  return (
    <>
    <div className='mx-auto w-1/5 text-center pt-32'>
      <h1 className=' font-bold text-xl'>Oops ! </h1>
      <h1>Page not found</h1>
      <CiWarning className=' mx-auto mb-5'/>
      <Link to={`/`}>
      <button className=' bg-blue-500 rounded-md px-5 py-1 text-white'>return home</button>
      </Link>
    </div>
    </>
  )
}

export default ErrorPage