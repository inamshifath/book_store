import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/Listed_books'>Listed Books</NavLink></li>
        <li><NavLink to='/Pages_to_Road'>Pages to Road</NavLink></li>
    </>
  return (
    <div className="navbar bg-base-100 container mx-auto mt-5 p-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul> 
        </div>
        <a className="btn btn-ghost text-4xl font-extrabold hover:text-green-700">Book Vive</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-2xl space-x-3">
          {links}
        </ul>
      </div>
      <div className="navbar-end  space-x-5">
        <a className="bg-green-400 p-5 rounded-xl text-white text-2xl font-bold hover:bg-slate-50 hover:text-green-700 hover:border-green-700 hover:border-2">Sign in</a>
        <a className="bg-blue-400 p-5 rounded-xl text-white text-2xl font-bold hover:bg-slate-50 hover:text-blue-700 hover:border-blue-700 hover:border-2">Sign UP</a>
      </div>
    </div>
  );
};

export default Header;
