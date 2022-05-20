import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="hero min-h-screen bg-indigo-50 shadow-lg shadow-indigo-300 ">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold pb-7 text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-indigo-600   mb-4 cursor-pointe">
            Welcome to Dependent Dropdown World!
          </h1>

          <Link to='/choose' className="btn btn-primary bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 border-0 hover:from-cyan-400 hover:via-indigo-400 hover:to-blue-500">Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
