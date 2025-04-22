import React from 'react';
import UserCard from './components/UserCard';

const App = () => {
  return (
    <div className="min-h-screen  bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">User Profile Cards</h1>
      
      <div className="flex flex-col items-center space-y-4">
        <UserCard img="https://img.freepik.com/premium-photo/adventures-curious-kid-with-notebook-charming-cartoon-illustration_1000124-233957.jpg" name="Subodh Raturi" age={22} bio="Frontend Developer & Tech Enthusiast." />


        <UserCard img="https://i.pinimg.com/736x/8f/7a/da/8f7ada6d11a5a78c968c0afeff09c6e9.jpg" name="Anita Sharma" age={28} bio="Loves hiking and painting." />


        <UserCard img="https://easy-peasy.ai/cdn-cgi/image/quality=70,format=auto,width=300/https://media.easy-peasy.ai/b5b84088-9711-47a9-a5c6-ea2e5ca8a5eb/0c879edf-8a00-4369-90d2-89bbe6623b8d.png" name="Ravi Kumar" age={35} bio="Full-stack developer from Delhi." />
      </div>
    </div>
  );
};

export default App;
