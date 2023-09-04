import React from "react";
import logo from "../assets/shop.png";
import { Link } from "react-router-dom";

function Navbarcomponent() {

  return (
    <div className="flex bg-blue-500/100 w-auto h-[50px] space-x-8  justify-between">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-[90px] h-[30px] " />
      </div>
      <ul className="flex space-x-6 items-center justify-center text-white text-xl">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/contactus">Contact Us</Link>
        </li>
      </ul>
      <div className="flex text-lg items-center justify-center ">
        <Link to={"/login"}>
          <button className=" mx-7 w-[10vh] h-[5vh] bg-white rounded-full">
            Login
          </button>
        </Link>
        <Link to={"/signup"}>
          <button className=" mx-7 w-[10vh] h-[5vh] bg-white hover:bg-green-400/100 rounded-full">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbarcomponent;
