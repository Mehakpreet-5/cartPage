import React from 'react'
import { Link } from 'react-router-dom';
import Login from '../pages/login';
import Signup from '../pages/signup';
import AdminNav from './admin/adminNav';
// import { useAuth0 } from "@auth0/auth0-react";

function navbar() {

    const openModal = ()=>{
  const modal = document.getElementById('my_modal_3')
  if(modal){
    modal.showModal();
  }

  
    }

    

  // const { loginWithRedirect } = useAuth0();


  return (
   <> <div className='fixed top-0 w-full ml-3 mr-3 flex 
   items-center justify-center play'>
   <div className="navbar  bg-yellow-50 bg-opacity-30 border ">
  <div className="flex-1 ml-20 ">
    <a className=" text-5xl font-bold text-orange-500  fontt">Tomato</a>
  </div>
  <div className="flex-none mr-52 items-center">
    <ul className="menu menu-horizontal px-1 text-lg ">
    <li><Link to="/" >Home</Link></li>
          <li><Link to="/about" >About</Link></li>
          <li> <Link to="/menu">Menu</Link></li>
          <li> <Link to="/cart"> Cart</Link></li>
          {/* <button onClick={() => loginWithRedirect()}>Log In</button>; */}
          <li> <Link to="/admin"> Admin</Link></li>
          <Link to="/login">  <div className='ml-5 btn
           bg-black text-white' onClick={openModal}> Login </div> </Link>

    </ul>
  </div> 

  {/* Search btn and profile */}
  
  <div className="flex-none gap-2 mr-32 space-x-4">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div>
    <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>



</div></>
  )
}

export default navbar
