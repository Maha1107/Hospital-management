import React from "react";
import Dnavbarcomponent from "../components/Dnavbar.component";


const Doctorpage = () => {
  const data = [
    {
      PatientName: "Mahalakshmi",
      Age: 20,
      Time: "12:30PM",
      Problem: "Cold,Stomach Pain"
    },
    {
      PatientName: "Aashrytha",
      Age: 20,
      Time: "1:00PM",
      Problem: "Cold,Headache"
    },
    {
      PatientName: "Jaron",
      Age: 20,
      Time: "1:30PM",
      Problem: "Cold,Body Pain"
    },
    {
      PatientName: "Gnanesh",
      Age: 20,
      Time: "2:00PM",
      Problem: "No smell"
    },
    {
      PatientName: "Ganesh",
      Age: 20,
      Time: "2:30PM",
      Problem: "Eye Infection"
    }
  ];
  return (
    <> <Dnavbarcomponent/>
   
    <div className="flex flex-col">
        <h1 className="flex flex-col items-center justify-center text-[#5F74DD] text-[3vh]">Welcome, Dr.Gayathri Oruganti</h1>
        <h3 className=" flex items-center justify-center text-[2vh] font-[Poppins]">Today's Appointments</h3>
        <div className="grid grid-cols-2 lg:grid-cols-3 font-[Montserrat] lg:mx-4 lg:gap-6">
        <table className="table-auto">
        <tr className="bg-[#5F74DD] ">
          <th  class="text-white border border-slate-600 ...">Patient Name</th>
          <th class="text-white border border-slate-600 ...">Age</th>
          <th class="text-white border border-slate-600 ...">Time</th>
          <th class="text-white border border-slate-600 ...">Problem</th>
        </tr>
        {data.map((data) => (
          <>
            <tr>
              <td  class="border border-slate-700 ...">{data.PatientName}</td>
              <td class="border border-slate-700 ...">{data.Age}</td>
              <td class="border border-slate-700 ...">{data.Time}</td>
              <td class="border border-slate-700 ...">{data.Problem}</td>
            </tr>
          </>
        ))}
      </table>
        </div>
      
    </div>
    </>
  );
};

export default Doctorpage;