import React from 'react';
import { UserCircle2, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">MedBook</span>
            </Link>
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/doctors" className="text-gray-700 hover:text-blue-600">Doctors</Link>
              <Link to="/schedule" className="text-gray-700 hover:text-blue-600">Schedule</Link>
              {user && (
                <Link to="/appointments" className="text-gray-700 hover:text-blue-600">Appointments</Link>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <span className="text-gray-700">{user.name}</span>
                <button
                  onClick={logout}
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600"
                >
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link to="/register" className="text-gray-700 hover:text-blue-600">Register</Link>
                <Link to="/login" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600">
                  <UserCircle2 size={20} />
                  <span>Login</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
