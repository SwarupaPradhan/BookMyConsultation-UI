import React, { useState } from "react";

function AppointmentForm() {

  const [appointment, setAppointment] = useState({
    patientName: "",
    doctorName: "",
    date: ""
  });

  const handleChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/api/consultations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(appointment)
    })
    .then(res => res.json())
    .then(data => {
      alert("Appointment booked successfully!");
      console.log(data);
    })
    .catch(err => console.error(err));
  };

  return (
    <div style={{padding:"20px"}}>
      <h2>Book Appointment</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="patientName"
          placeholder="Patient Name"
          onChange={handleChange}
          required
        />

        <br/><br/>

        <input
          type="text"
          name="doctorName"
          placeholder="Doctor Name"
          onChange={handleChange}
          required
        />

        <br/><br/>

        <input
          type="date"
          name="date"
          onChange={handleChange}
          required
        />

        <br/><br/>

        <button type="submit">Book Appointment</button>

      </form>
    </div>
  );
}

export default AppointmentForm;