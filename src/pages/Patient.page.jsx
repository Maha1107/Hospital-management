import React from 'react'
import Navbarcomponent from '../components/Navbar.component'

const Patientpage = () => {
  return (
    <>
    <Navbarcomponent/>
    <div className='flex'>
        
      {/* <div className="grid-container">
        <div className="grid-item border border-slate-600">Dashboard</div>
        <div className="grid-item border border-slate-600 ">Book Appointment</div>
        <div className="grid-item border border-slate-600 ">Appointment History</div>
        <div className="grid-item border border-slate-600 ">Prescription</div>
        <div className="grid-item border border-slate-600 ">Payment</div>
      </div> */}
      <div className='flex flex-col bg-[#5F74DD] rounded-md '>
      <button className=''>Dashboard</button>
      <button className=' '>Book Appointment</button>
      <button className=''>Appointment History</button>
      <button className=' '>Prescription</button>
      <button className=' '>Payment</button>
      </div>
      
    </div>
    </>
      
    
  )
}

export default Patientpage
