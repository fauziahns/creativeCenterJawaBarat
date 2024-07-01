import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='shadow-md'>
        <div className="bg-black text-white text-[14px] p-2 items-end">
            <span>disparbud@jabarprov.go.id</span>
            <span className='mx-2'>|</span>
            <span>+62 22 7273209</span>
        </div>
      <div className="navbar bg-white px-8">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <NavLink to="/jadwal">
                    <li><a>Jadwal</a></li>
                </NavLink>
                <NavLink to="/peminjaman">
                    <li><a>Peminjaman Ruangan</a></li>
                </NavLink>
            </ul>
            </div>
            <NavLink to="/">
                <img src="src\assets\logoNav.png" alt="" className='w-20'/>
            </NavLink>
            <NavLink to="/">
                 <img src="src\assets\logoNav2.png" alt="" className='w-25'/>    
            </NavLink>
        </div>

        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-black">
            <NavLink to="/jadwal">
                    <li><a>Jadwal</a></li>
            </NavLink>
            <NavLink to="/peminjaman">
                    <li><a>Peminjaman Ruangan</a></li>
            </NavLink>
            <li><a>Pedoman Ruangan</a></li>
            </ul>
        </div>
        
        <div className="navbar-end">
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-8 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src="src\assets\account.png"/>
                    </div>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
                    <NavLink to="/Profile">
                        <li><a className="justify-between">Profile</a></li>
                    </NavLink>
                    <NavLink to="/login">
                        <li><a>Login</a></li>
                    </NavLink>
                </ul>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Navbar
