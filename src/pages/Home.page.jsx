import React from 'react'
import H1 from '../assets/H1.png'
import home1 from '../assets/home1.jpg'
import Navbarcomponent from '../components/Navbar.component'

const Homepage = () => {
  return (
    <div>
         <Navbarcomponent/>
        <h1 className='text-6xl font-[poppins] text-[5vh] text-[#5F74DD] text-center mt-[5vh]'>Manipal Hospital</h1>
        <p className='text-[2vh] text-center font-[poppins] text-[#5F74DD] mt-[1vh]'>Behind AP Secretariat,VIT-AP University,AB-1,Amaravathi,AndhraPradesh</p>
       
        <div className='flex ml-[5vh] mt-[15vh] justify-center '>
        <img src={H1} alt="image1" className='w-[75vh] h-[80vh] ' />
        <p className='p-[3vh] text-justify break-words'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quo, dolor officia sapiente nisi soluta non maiores sit impedit numquam velit culpa optio dolores rem recusandae deleniti eius nostrum ab.
        Veritatis recusandae delectus aperiam pariatur corrupti accusantium laudantium atque asperiores animi suscipit similique quam et, dignissimos eveniet inventore obcaecati illo nulla! Vero vel voluptatum quia labore repellat corrupti quibusdam voluptatem.
        Nulla quae hic porro animi aut nam sunt maiores facilis soluta quis. In fugiat, temporibus maxime quia adipisci quae? Tempore sequi vel ipsa et neque quam rem in voluptatem debitis!Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse architecto nihil, labore id repellat suscipit? Voluptates, architecto ducimus repellendus fuga aliquid praesentium ut temporibus earum! Voluptatibus sunt sit temporibus ad.
            Unde eligendi quibusdam voluptates voluptatem, explicabo dolores deleniti mollitia quas cumque autem nam necessitatibus placeat impedit quam adipisci iste, nemo porro amet! Similique magnam ea quas deleniti. Voluptatum, velit libero!
            Eveniet incidunt nisi iusto veniam, quam quae culpa quos. Amet recusandae commodi illum officiis consequuntur corrupti odit animi tenetur voluptas. Quidem iure eveniet nisi qui aliquam ipsum ut dolor id.
            Rerum quisquam soluta corporis inventore voluptates officiis necessitatibus pariatur fugiat expedita a nostrum vel ipsam eius eos tempore quod fugit, ratione magnam quis vero! Minus voluptates dolores explicabo vero placeat!
            Consequuntur eos nobis totam earum enim et ab doloribus deleniti eum id dolor nostrum atque eligendi quas magnam dolorum rem tempora, culpa amet consectetur reiciendis iste, nulla reprehenderit aut! Vel</p>
        </div>

        <div className='flex  mr-[1vh] mb-[1vh] p-[4vh]'>
            <p className='p-[3vh] text-justify '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse architecto nihil, labore id repellat suscipit? Voluptates, architecto ducimus repellendus fuga aliquid praesentium ut temporibus earum! Voluptatibus sunt sit temporibus ad.
            Unde eligendi quibusdam voluptates voluptatem, explicabo dolores deleniti mollitia quas cumque autem nam necessitatibus placeat impedit quam adipisci iste, nemo porro amet! Similique magnam ea quas deleniti. Voluptatum, velit libero!
            Eveniet incidunt nisi iusto veniam, quam quae culpa quos. Amet recusandae commodi illum officiis consequuntur corrupti odit animi tenetur voluptas. Quidem iure eveniet nisi qui aliquam ipsum ut dolor id.
            Rerum quisquam soluta corporis inventore voluptates officiis necessitatibus pariatur fugiat expedita a nostrum vel ipsam eius eos tempore quod fugit, ratione magnam quis vero! Minus voluptates dolores explicabo vero placeat!
            Consequuntur eos nobis totam earum enim et ab doloribus deleniti eum id dolor nostrum atque eligendi quas magnam dolorum rem tempora, culpa amet consectetur reiciendis iste, nulla reprehenderit aut! Vel.</p>

            <img src={home1} alt="image2" className='w-[90vh] h-[50vh]' />
        </div>
        
        
      
    </div>
  )
}

export default Homepage
