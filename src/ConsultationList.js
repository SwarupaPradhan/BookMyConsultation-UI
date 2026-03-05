import React, { useEffect, useState } from "react";

function ConsultationList() {
  const [consultations, setConsultations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/consultations")
      .then((response) => response.json())
      .then((data) => setConsultations(data))
      .catch((error) => console.error("Error fetching consultations:", error));
  }, []);

  return (
    <div>
      <h2>All Consultations</h2>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {consultations.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.patientName}</td>
              <td>{c.doctorName}</td>
              <td>{c.consultationDate}</td>
              <td>{c.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ConsultationList;