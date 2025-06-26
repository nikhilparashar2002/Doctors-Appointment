import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'


function Navbar() {
  const navigate = useNavigate()

  const [showMenu, setShowMenu] = useState(false)
  const [token, setToken] = useState(true)

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img onClick={()=>navigate('/')} className='w-44 cursor-pointer' src={assets.logo} />

      <ul className='hidden md:flex flex-start gap-5 font-medium'>
        <NavLink to='/'>
          <li className='py-1'>HOME</li>
          <hr className='border-none outline-none h-0.5 w-3/5 m-auto hidden ' />
        </NavLink>
        <NavLink to='/Doctor'>
          <li className='py-1'>All DOCTORS</li>
          <hr className='border-none outline-none h-0.5 w-3/5 m-auto hidden ' />
        </NavLink>
        <NavLink to='/About'>
          <li className='py-1'>ABOUT</li>
          <hr className='border-none outline-none h-0.5 w-3/5 m-auto hidden ' />
        </NavLink>
        <NavLink to='/Contact'>
          <li className='py-1'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 w-3/5 m-auto hidden ' />
        </NavLink>
      </ul>
      <div className="flex items-center gap-3">
        {/* Profile image and dropdown */}
        {
          token ?
            <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img
                className='w-8 rounded-full'
                src={assets.profile_pic} />
              <img
                className='w-2.5 '
                src={assets.dropdown_icon} />
              {/* Dropdown menu */}
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                  <p
                    className='hover:text-black cursor-pointer'
                    onClick={() => navigate('/My-Profile')}
                  >My Profile</p>
                  <p
                    className='hover:text-black cursor-pointer'
                    onClick={() => navigate('/My-Appointments')}
                  >My Appointments</p>
                  <p
                    className='hover:text-black cursor-pointer'
                    onClick={() => { setToken(false) }}
                  >Logout</p>
                </div>
              </div>

            </div> :
            <button
              onClick={() => navigate('/Login')}
              className='bg-primary text-white px-8 py-3 rounded-full font-light hidden  md:block'>
              Create Account
            </button>
        }
        {/* Hamburger menu icon */}
        <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} />
      </div>
      {/* Mobile menu */}
      <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
        <div className='flex items-center justify-between px-5 py-6'>
          <img className='w-36' src={assets.logo} alt=''/>
          <img className='w-7' src={assets.cross_icon} onClick={()=>setShowMenu(false)}/>
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'> 
          <NavLink onClick={()=>setShowMenu(false)} to='/' className=''><p>Home</p></NavLink>
          <NavLink onClick={()=>setShowMenu(false)} to='/Doctor' className=''><p>All DOCTORS</p></NavLink>
          <NavLink onClick={()=>setShowMenu(false)} to='/About' className=''><p>All DOCTORS</p></NavLink>
          <NavLink onClick={()=>setShowMenu(false)} to='/Contact' className=''><p>CONTACT</p></NavLink>
        </ul>
       </div>
    </div>
  )
}

export default Navbar
