import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Clock, Calendar, Shield } from 'lucide-react';

export default function Welcome() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Your Health, Our Priority
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Book appointments with top doctors instantly. Quality healthcare made simple and accessible.
          </p>
          <Link
            to="/doctors"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Find a Doctor
          </Link>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Stethoscope className="h-8 w-8 text-blue-600" />,
              title: 'Expert Doctors',
              description: 'Consult with highly qualified and experienced medical professionals'
            },
            {
              icon: <Clock className="h-8 w-8 text-blue-600" />,
              title: 'Instant Booking',
              description: 'Schedule appointments quickly and easily at your convenience'
            },
            {
              icon: <Calendar className="h-8 w-8 text-blue-600" />,
              title: 'Available 24/7',
              description: 'Access healthcare services any time, any day'
            },
            {
              icon: <Shield className="h-8 w-8 text-blue-600" />,
              title: 'Secure Platform',
              description: 'Your health information is protected with top-tier security'
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}