import React from 'react';

const UserCard = () => {
  const profile = "https://www.pngmart.com/files/23/Profile-PNG-Photo.png";
  const name = "John Doe";
  const email = "aQOYK@example.com";
  const phone = "123-456-7890";
  const address = "123 Main St, Anytown, USA";

  return (
    <div>
        <div className="max-w-sm w-full bg-white rounded-lg shadow-lg p-6 space-y-4">
            <div className="flex justify-center">
                <img
                src={profile}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-indigo-600"
                />
            </div>
            <div className="text-center">
                <label>Name:</label>
                <p className="text-2xl font-semibold text-gray-800">{name}</p>
                <label>Email:</label>
                <p className="text-gray-600">{email}</p>
                <label>Phone:</label>
                <p className="text-gray-600">{phone}</p>
                <label>Address:</label>
                <p className="text-gray-600">{address}</p>
            </div>
            </div>
    </div>
    
  );
};

export default UserCard;
