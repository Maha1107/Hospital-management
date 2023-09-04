import React from 'react'
import logo from '../assets/shop.png'

const Dnavbarcomponent = () => {
  return (
    <div className='flex bg-blue-500/100 w-auto h-[50px] space-x-8  '>
        <div className="flex items-center">
        <img src={logo} alt="logo" className="w-[90px] h-[30px] " />
      </div>

        <ul className='flex space-x-6 text-white text-xl'>
            <li>Appointments</li>
            <li>Leave Application</li>
            <li>Operations</li>
        </ul>
      
    </div>
  )
}

export default Dnavbarcomponent
