import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');

    navigate('/login');
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Task Manager
        </Link>
        <ul className="flex space-x-4">
          <Link to='/'>
          <li className="text-white hover:text-gray-200">Home</li>
          </Link>
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
                <button
                  onClick={handleLogout}
                  className="text-white hover:text-gray-200"
                >
                  Logout
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
