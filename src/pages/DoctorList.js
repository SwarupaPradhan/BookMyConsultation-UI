import React from "react";

function DoctorList() {

  const doctors = [
    {id:1, name:"Dr. Smith", specialty:"Cardiologist"},
    {id:2, name:"Dr. Johnson", specialty:"Dermatologist"},
    {id:3, name:"Dr. Brown", specialty:"Neurologist"}
  ];

  return (
    <div style={{padding:"20px"}}>
      <h2>Available Doctors</h2>

      {doctors.map((doctor)=>(
        <div key={doctor.id} style={{
          border:"1px solid #ddd",
          padding:"10px",
          margin:"10px 0",
          borderRadius:"8px"
        }}>
          <h3>{doctor.name}</h3>
          <p>Specialty: {doctor.specialty}</p>
          <button>Book Appointment</button>
        </div>
      ))}

    </div>
  );
}

export default DoctorList;