import React from 'react'
import Left from '../components/store/Left'
import Center from '../components/store/Center'

function Store() {
  return (
    <>
    <div className="flex py-10 px-16 bg-slate-100">
        <Left />
        <Center />
    </div>
    </>
  )
}

export default Store