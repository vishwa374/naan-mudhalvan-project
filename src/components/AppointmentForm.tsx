import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Doctor } from '../types';
import { useAuth } from '../context/AuthContext';

interface AppointmentFormProps {
  doctor: Doctor;
  onClose: () => void;
}

export default function AppointmentForm({ doctor, onClose }: AppointmentFormProps) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>([]);
  const [error, setError] = useState('');
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (date) {
      const dayOfWeek = new Date(date).toLocaleDateString('en-US', { weekday: 'short' });
      if (doctor.availability.includes(dayOfWeek)) {
        setAvailableTimeSlots([
          '09:00', '10:00', '11:00',
          '14:00', '15:00', '16:00'
        ]);
      } else {
        setAvailableTimeSlots([]);
        setTime('');
      }
    }
  }, [date, doctor.availability]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      navigate('/login');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          doctorId: doctor.id,
          date,
          time,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to book appointment');
      }

      onClose();
      navigate('/appointments');
    } catch (error) {
      setError('Failed to book appointment. Please try again.');
    }
  };

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Book Appointment</h2>
        <h3 className="text-lg text-gray-600 mb-4">with {doctor.name}</h3>
        
        {error && <p className="text-red-500 mb-4">{error}</p>}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              min={today}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
            {date && !availableTimeSlots.length && (
              <p className="mt-1 text-sm text-red-500">
                Doctor is not available on this day. Available days: {doctor.availability.join(', ')}
              </p>
            )}
          </div>
          
          {availableTimeSlots.length > 0 && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Time</label>
              <select
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              >
                <option value="">Select a time</option>
                {availableTimeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot.includes(':') ? 
                      `${parseInt(slot) > 12 ? (parseInt(slot) - 12) : slot}:00 ${parseInt(slot) >= 12 ? 'PM' : 'AM'}` 
                      : slot}
                  </option>
                ))}
              </select>
            </div>
          )}
          
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
              disabled={!date || !time}
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}