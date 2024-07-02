// src/components/DoctorConsultation.js
import React, { useState } from 'react';
import axios from 'axios';

const DoctorConsultation = () => {
  const [consultation, setConsultation] = useState({
    patientName: '',
    patientId:'',
    notes: '',
    prescription: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setConsultation({
      ...consultation,
      [name]: value,
    });
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    // Handle consultation record logic here
    console.log('Consultation Recorded:', consultation);
    try{
    const res = await axios.post('https://localhost:8080/',{
      data:consultation
    })
    if ( res.status==200){

    }
    }catch(err){
      console.log(err)
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg border-t-4 border-red-600">
      <h2 className="text-3xl font-semibold text-center mb-6 text-red-600">Doctor Consultation</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Patient Name:</label>
          <input
            type="text"
            name="patientName"
            value={consultation.patientName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="Enter patient's name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Patient ID:</label>
          <input
            type="text"
            name="patientID"
            value={consultation.patientId}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="Enter patient's ID"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Consultation Notes:</label>
          <textarea
            name="notes"
            value={consultation.notes}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="Enter consultation notes"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Prescription:</label>
          <textarea
            name="prescription"
            value={consultation.prescription}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="Enter prescription"
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition duration-300">
          Save Consultation
        </button>
      </form>
    </div>
  );
};

export default DoctorConsultation;
