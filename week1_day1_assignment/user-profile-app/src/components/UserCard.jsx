import React from 'react';

const UserCard = ({ img, name, age, bio }) => {
  return (
    <div className="bg-white w-[15%] shadow-md  rounded-2xl p-6 max-w-sm mx-auto mb-6 border border-gray-200 hover:shadow-xl transition-shadow">
        
     <img  className=' items-center rounded-lg border-2 border-gray-300 h-80 w-60 object-cover' src={img} alt="" />

      <h2 className="text-xl font-semibold text-gray-800 mb-1">{name}</h2>

      <p className="text-sm text-gray-500 mb-2">Age: {age}</p>

      <p className="text-gray-700">{bio}</p>
    </div>
  );
};

export default UserCard;
