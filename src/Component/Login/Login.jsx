import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = () => {
    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (!storedUser || storedUser.password !== password) {
      alert('Invalid credentials. Please try again.');
      return;
    }

    localStorage.setItem('isLoggedIn', 'true');

    navigate('/');
  };

  return (
    <div className="w-full max-w-sm mx-auto mt-8">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-6">Log In</h2>
        <div className="mb-4">
          <input
            className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <button
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleLogin}
          >
            Log In
          </button>
          <div className='mt-5 text-center'>
          <Link to ='/singup'>New User Please? <span className='underline text-blue-400'>Create a account</span></Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
