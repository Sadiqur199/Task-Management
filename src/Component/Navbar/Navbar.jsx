import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logout from '../Logout/Logout';

function Navbar() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const navigate = useNavigate();

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-white text-2xl font-bold mr-4 mb-2 sm:mb-0">
            Task Manager
          </Link>
         
        </div>
        <ul className="flex space-x-4 mt-4 sm:mt-0">
        <li>
                <Link to="/" className="text-white hover:text-gray-200">
                  Home
                </Link>
          </li>
          {isLoggedIn ? (
            <>
              <li>
                <Link to="/dashboard" className="text-white hover:text-gray-200">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-white hover:text-gray-200">
                  Profile
                </Link>
              </li>
              <li>
                <button className="text-white hover:text-gray-200">
                  <Logout />
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login" className="text-white hover:text-gray-200">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
