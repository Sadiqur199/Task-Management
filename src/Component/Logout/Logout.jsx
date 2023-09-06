import React from 'react';

function Logout() {
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <div>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}

export default Logout;
