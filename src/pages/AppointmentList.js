// AppointmentsList.js
import React, { useState } from 'react';

const AppointmentsList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredAppointments, setFilteredAppointments] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    filterAppointments(event.target.value);
  };
  let appointments=[
    {
      id:1,
      patientName:'Ravi',
      doctorName: 'Panda',
      date:'2/5/3235'
    },
    {
      id:2,
      patientName:'Weena',
      doctorName: 'Addy',
      date:'4/6/3445'
    },
    {
      id:3,
      patientName:'Paddy',
      doctorName: 'Motu',
      date:'2/4/5654'
    },
    {
      id:4,
      patientName:'Gadu',
      doctorName: 'paad',
      date:'2/6/7345'
    }
  ];

  const filterAppointments = (query) => {
    const filtered = appointments.filter(appointment =>
      appointment.patientName.toLowerCase().includes(query.toLowerCase()) ||
      appointment.doctorName.toLowerCase().includes(query.toLowerCase())
    
    );
    setFilteredAppointments(filtered);
  };

  return (
    <div className="mt-4 ml-8 mr-8">
      <div className="flex justify-center mb-4">
        <label className="mt-2.5 mr-2.5">Search  :</label>
        <input
          type="text"
          placeholder="Patient/Doctor Name"
          value={searchQuery }
          onChange={handleSearchChange}
          className="p-2 mt-0.5 border border-gray-300 rounded-md"
        />
      </div>
      <ul className="mt-8 space-y-4">
  {filteredAppointments.map((appointment) => (
    <li key={appointment.id} className="p-4 bg-white shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold text-blue-600">{appointment.patientName}</h2>
        <span className="text-sm text-gray-500">{appointment.date} at {appointment.time}</span>
      </div>
      <div className="text-gray-700">
        <p className="mb-1"><strong className="font-medium text-gray-900">Doctor:</strong> {appointment.doctorName}</p>
        <p><strong className="font-medium text-gray-900">Details:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac lorem vel lacus bibendum suscipit.</p>
      </div>
    </li>
  ))}
</ul>
    </div>
  );
};

export default AppointmentsList;
