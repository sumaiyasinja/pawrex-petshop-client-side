import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AiFillCaretDown } from 'react-icons/ai';
import { AuthContext } from "../provider/AuthProvider";
import { Toaster, toast } from 'react-hot-toast';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user,logOut } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleLogOut =()=>{
    console.log('Logout btn clicked');
    logOut()
    .then(() => {
      // 
      console.log('Sign-out successful.');
      toast.success('Sign out successfully')
      navigate('/')
    }).catch((error) => {
      toast.error("Failed loggin out")
    });
  }

  const NavLinks = (
    <>
      <li>
        <NavLink to='/' className="bg-slate-200 flex gap-5 py-2 pl-3 pr-4 hover-bg-blue-400 md-bg-transparent md-text-blue-700 md-p-0 md-dark-text-blue-500" aria-current="page">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/services' className="bg-slate-200 hover-bg-blue-400 block py-2 pl-3 pr-4 text-gray-900 hover-bg-gray-100 md-hover-bg-transparent md-hover-text-blue-700 md-p-0 dark-text-white md-dark-hover-text-blue-500 dark-hover-bg-gray-700 dark-hover-text-white md-dark-hover-bg-transparent dark-border-gray-700">
          Services
        </NavLink>
      </li>
      <li>
        {user ? (
          <li>
            <button onClick={handleLogOut}
            className="bg-slate-200 hover-bg-blue-400 block py-2 pl-3 pr-4 text-gray-900 hover-bg-gray-100 md-hover-bg-transparent md-hover-text-blue-700 md-p-0 dark-text-white md-dark-hover-text-blue-500 dark-hover-bg-gray-700 dark-hover-text-white md-dark-hover-bg-transparent dark-border-gray-700">
              Logout
            </button>
          </li>
        ) : (
          <li>
            <NavLink to='/login' className="bg-slate-200 hover-bg-blue-400 block py-2 pl-3 pr-4 text-gray-900 hover-bg-gray-100 md-hover-bg-transparent md-hover-text-blue-700 md-p-0 dark-text-white md-dark-hover-text-blue-500 dark-hover-bg-gray-700 dark-hover-text-white md-dark-hover-bg-transparent dark-border-gray-700">
              Login
            </NavLink>
          </li>
        )}
      </li>
      <li>
        <button onClick={() => setOpen(!open)} className="bg-blue-400 block py-2 pl-3 pr-4 text-gray-900 hover-bg-gray-100 md-hover-bg-transparent md-hover-text-blue-700 md-p-0 dark-text-white md-dark-hover-text-blue-500 dark-hover-bg-gray-700 dark-hover-text-white md-dark-hover-bg-transparent dark-border-gray-700">
          <div className="flex items-center justify-center">
            Dashboard <AiFillCaretDown />
          </div>
        </button>
        {/* Dropdown menu of dashboard 3 items */}
        <ul className={`${open ? "block" : "hidden"} absolute`}>
          <li>
            <NavLink to='/my-services' className="bg-slate-200 block py-2 pl-3 pr-4 text-gray-900 hover-bg-gray-100 md-hover-bg-transparent md-hover-text-blue-700 md-p-0 dark-text-white md-dark-hover-text-blue-500 dark-hover-bg-gray-700 dark-hover-text-white md-dark-hover-bg-transparent dark-border-gray-700">
              My Services
            </NavLink>
          </li>
          <li>
            <NavLink to='/add-services' className="bg-slate-200 block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 md-hover-bg-transparent md-hover-text-blue-700 md-p-0 dark-text-white md-dark-hover-text-blue-500 dark-hover-bg-gray-700 dark-hover-text-white md-dark-hover-bg-transparent dark-border-gray-700">
              Add Services
            </NavLink>
          </li>
          <li>
            <NavLink to='/my-schedules' className="bg-slate-200 block py-2 pl-3 pr-4 text-gray-900 rounded hover-bg-gray-100 md-hover-bg-transparent md-hover-text-blue-700 md-p-0 dark-text-white md-dark-hover-text-blue-500 dark-hover-bg-gray-700 dark-hover-text-white md-dark-hover-bg-transparent dark-border-gray-700">
              My Schedules
            </NavLink>
          </li>
        </ul>
      </li>
    </>
  );

  return (
    <div>
      <Toaster></Toaster>
      {/* bg-[#000000AA] */}
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <img src="https://i.ibb.co/23rnS49/Pngtree-pet-shop-logo-puppy-simple-5755006.png" className="h-20 mr-2" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PawRex</span>
          </a>


          <div className="items-center justify-between hidden w-full md:flex md:w-auto" id="navbar-user">
            <ul className="flex font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md-flex-row md-space-x-8 md-mt-0 md-border-0 md-bg-white dark-bg-gray-800 md-dark-bg-gray-900 dark-border-gray-700">
              {/* Navbar */}
              {NavLinks}
            </ul>
          </div>
          {
            user?         <>
                      <div className="flex items-center gap-2 md:order-2">
                      <p>{user?.displayName}</p>
            <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
              <img className="w-8 h-8 rounded-full" src={user?.photoURL} alt="user photo" />
            </button>
          </div>
            </>  
            : 
            <div className="flex items-center md:order-2">
                        <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                          <img className="w-8 h-8 rounded-full" src="https://i.ibb.co/XFJxrG4/pngegg.png" />
                        </button>
                      </div>
          }
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
