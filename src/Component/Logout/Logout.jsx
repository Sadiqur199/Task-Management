import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Logout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };
  const user = JSON.parse(localStorage.getItem('user'));


  
  return (
    <div className="relative">
      {/* User Image */}
      <img
        src={user.profileImage}
        alt={user.username}
        className="w-10 h-10 rounded-full cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />

      {/* User Menu */}
      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-blue-500 border-gray-300 rounded-lg shadow-lg">
          <ul className="py-2">
            <li className="px-4 py-2 cursor-pointer">
              <Link to="/profile" className="text-white hover:text-gray-200">
                Profile
              </Link>
            </li>
            <li className="px-4 py-2 cursor-pointer">
              <Link to="/dashboard" className="text-white hover:text-gray-200">
                Dashboard
              </Link>
            </li>
            <li className="px-4 py-2 cursor-pointer">
              <button
                onClick={handleLogout}
                className="text-white hover:text-gray-200"
              >
                Log Out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Logout;
