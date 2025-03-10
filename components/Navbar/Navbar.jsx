import React from 'react'
 import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../Navbar/logo.png'

const Navbar = () => {
  return (
    <>
    <nav className="bg-gray-800 w-full mt-0 fixed ">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        
        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
         
          <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
         
          <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
      <Link to='/' >
      <div className="flex flex-shrink-0 items-center">
          <img className="h-12 w-12 rounded-lg" src={logo} alt="Your Company" />
        </div>
      </Link>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
              <Link to="/create" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">+ Create</Link>
       </div>
        </div>
      </div>
      
      
    </div>
  </div>



</nav>
    </>
  )
}

export default Navbar