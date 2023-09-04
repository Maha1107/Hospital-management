import React, { useState } from "react";
import login from "../assets/login.jpg";
import Navbarcomponent from "../components/Navbar.component";
import {Link,Outlet} from 'react-router-dom'
// Function for Patient Login
const Patientlogin = () =>{
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  function changehandle(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  function submitHandle() {
    console.log(data);
  }

  return (
    <>

      <div className="flex flex-col h-screen  items-center justify-center w-full space-x-20 space-y-20 border-[20vh]  ">

        <div className="flex flex-col  justify-center space-y-4 item-justify  ">
          <label htmlFor="UserName">User Name</label>
          <input
            type="text"
            onChange={changehandle}
            className="w-[25vh] h-[5vh] rounded-3xl border-2"
            name="username"
          />
          <label htmlFor="Password">Password</label>
          <input
            type="Password"
            onChange={changehandle}
            className="w-[25vh] h-[5vh] rounded-3xl border-2"
            name="password"
          />
          <div className="flex items-center justify-center">
          <button
            onClick={submitHandle}
            className="w-[15vh] h-[5vh] bg-[#5F74DD] rounded-3xl text-white">
            Submit
          </button>
          </div>
        </div>
      </div>
    </>
  );
};


// Doctor Login Page
const DoctorLogin =()=>{
  const [data, setData] = useState({
    Empid: "",
    password: "",
  });
  function changehandle(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  function submitHandle() {
    console.log(data);
  }

  return (
    <>
      <div className="flex flex-col h-screen  items-center justify-center w-full space-x-20 space-y-20 border-[20vh]  ">
        <div className="flex flex-col  justify-center space-y-4 item-justify  ">
          <label htmlFor="Empid">Emp Id</label>
          <input
            type="text"
            onChange={changehandle}
            className="w-[25vh] h-[5vh] rounded-3xl border-2"
            name="Empid"
          />
          <label htmlFor="Password">Password</label>
          <input
            type="Password"
            onChange={changehandle}
            className="w-[25vh] h-[5vh] rounded-3xl border-2"
            name="password"
          />
          <div className="flex items-center justify-center">
          <button
            onClick={submitHandle}
            className="w-[15vh] h-[5vh] bg-[#5F74DD] rounded-3xl text-white">
            Submit
          </button>
          </div>
        </div>
      </div>
    </>
  );
};

const Loginpage = () => {
  return(
    <>
    <Navbarcomponent/>
    <div className="flex">
  <div className="w-[200vh]">
        <img src={login} alt="login" className="h-screen" />
      </div>
      <div className="flex flex-col h-screen  items-center justify-center w-full  border-[20vh]  ">
      <h1 className=" text-[#5F74DD]  text-[3.5vh] font-black justify-center">Login</h1>
      <ul className="flex space-x-4 border-solid border-2 border-sky-500 ">
        <Link to={'/login/Doctor'}>
        <li className="flex justify-center w-[10vh] rounded-md focus:text-purple-400">Doctor</li>
        </Link>
        <Link to={'/login/Patient'}>
        <li>Patient</li>
      </Link>
      </ul>
      <Outlet/>
      </div>
    </div>
    </>

  )
}
export {Loginpage,Patientlogin,DoctorLogin};
