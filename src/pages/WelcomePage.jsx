import React from "react";

const WelcomePage = () => {
  return (
    <div className="h-screen flex">
      {/* Left side - Hero Section */}
      <div className="flex-1 flex flex-col justify-center px-16 bg-gray-50">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Welcome to My Project
        </h1>
        <p className="text-xl text-gray-600">Build. Connect. Simplify.</p>
      </div>

      {/* Right side - Login/Signup Form (Coming soon) */}
      <div className="flex-1 bg-white flex items-center justify-center">
        <p className="text-gray-400">Form coming soon...</p>
      </div>
    </div>
  );
};

export default WelcomePage;
