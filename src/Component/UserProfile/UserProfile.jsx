import React from "react";

function UserProfile() {
  //  user data from local storage
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <h2 className="text-2xl font-bold mb-5 text-center mt-5">User Profile</h2>
      <div className="mt-10 p-8 shadow-md rounded-lg bg-gray-200 mb-8">
        {user && (
          <div className="flex items-center space-x-4 ">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img
                src={user.profileImage}
                alt={user.username}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Name: {user.username}</h3>
              <p className="text-gray-600">Bio: {user.bio}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default UserProfile;
