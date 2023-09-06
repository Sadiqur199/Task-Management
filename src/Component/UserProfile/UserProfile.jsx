import React from 'react';

function UserProfile() {
  // Retrieve user data from local storage
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      {user && (
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img
              src={user.profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold">{user.username}</h3>
            <p className="text-gray-600">{user.bio}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
