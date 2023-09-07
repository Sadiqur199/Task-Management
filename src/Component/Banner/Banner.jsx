import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://miro.medium.com/v2/resize:fit:1000/1*8G1vA7egoxrL4Bb7RAgnPQ.jpeg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-white">Hello there</h1>
          <p className="mb-5 text-xl font-semibold text-white">
            Here is My profile
          </p>
          {isLoggedIn ? (
            <Link to='/profile'>
              <button className="w-50% bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Profile</button>
            </Link>
          ) : (
            <Link to='/login'>
              <button className="w-50% bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login to View Profile</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
