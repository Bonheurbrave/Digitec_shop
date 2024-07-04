import React from 'react'
import './index.css'
import Navigation from './pages/Navigation'
import Footer from './pages/Footer'
import { Outlet, useLocation } from 'react-router-dom'
function App() {
  return (
    <>
    <Navigation />
    <Outlet />
    <Footer />
    </>
  )
}

export default App