import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className=" justify-center flex py-2">
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
