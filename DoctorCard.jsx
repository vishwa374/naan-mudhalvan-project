import React, { useState } from 'react';
import { Star, Clock } from 'lucide-react';
import AppointmentForm from './AppointmentForm';

export default function DoctorCard({ doctor }) {
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);

  return (
    <>
      <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:scale-105">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img className="h-48 w-full object-cover md:w-48" src={doctor.image} alt={doctor.name} />
          </div>
          <div className="p-8">
            <div className="flex items-center">
              <h2 className="text-xl font-semibold text-gray-800">{doctor.name}</h2>
              <div className="ml-4 flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-1 text-gray-600">{doctor.rating}</span>
              </div>
            </div>
            <p className="mt-2 text-blue-600 font-medium">{doctor.specialty}</p>
            <p className="mt-1 text-gray-600">{doctor.experience} years experience</p>
            <p className="mt-2 text-gray-500">{doctor.description}</p>
            <div className="mt-4 flex items-center">
              <Clock className="h-5 w-5 text-gray-400" />
              <span className="ml-2 text-sm text-gray-500">
                Available: {doctor.availability.join(', ')}
              </span>
            </div>
            <button
              onClick={() => setShowAppointmentForm(true)}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
      {showAppointmentForm && (
        <AppointmentForm doctor={doctor} onClose={() => setShowAppointmentForm(false)} />
      )}
    </>
  );
}
