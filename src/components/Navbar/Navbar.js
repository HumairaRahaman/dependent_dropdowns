import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className=" bg-gradient-to-r from-indigo-100 via-cyan-50 to-blue-100  justify-center flex mb-10 pt-1  shadow-xl rounded-2xl shadow-cyan-200">
      <ul className="menu menu-horizontal p-0 flex justify-evenly w-full ">
        <li className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-indigo-600   mb-4 cursor-pointe font-bold">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-indigo-600   mb-4 cursor-pointe font-bold">
          <NavLink to="/choose">Choose Option</NavLink>
        </li>
        
      </ul>
    </div>
  );
};

export default Navbar;
