import React from 'react'
// import logo from './logo.png';

export default function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <img src={'/src/assets/menu.png'} className={"w-12 h-12"}  alt="logo" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li className="hover:text-orange-500 cursor-pointer"><a>Home</a></li>
              <li className="hover:text-orange-500 cursor-pointer"><a>About</a></li>
              <li className="hover:text-orange-500 cursor-pointer"><a>Blog</a></li>
              <li className="hover:text-orange-500 cursor-pointer"><a>FAQ</a></li>
            </ul>
          </div>
          <img src={'/src/assets/logo.png'} className= {"lg:ml-10 sm:ml-5 w-12 h-12 rounded-3xl" }  alt="logo" />

        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
          <li className="hover:text-orange-500 cursor-pointer"><a>Home</a></li>
              <li className="hover:text-orange-500 cursor-pointer"><a>About</a></li>
              <li className="hover:text-orange-500 cursor-pointer"><a>Blog</a></li>
              <li className="hover:text-orange-500 cursor-pointer"><a>FAQ</a>
              </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <a className="btn mx-5 hover:text-orange-500">Buy Now</a>
          <a className="btn mr-10 hover:text-orange-500">Sign In</a>

        </div>
      </div>      </div>
  )

}