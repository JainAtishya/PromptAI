import React from "react";

function WelcomePage() {
  return (
    <div className="h-screen flex">
      {/* Left side - Hero Section */}
      <div className="w-1/3 flex flex-col justify-center px-16 bg-gray-50">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Welcome to My Project
        </h1>
        <p className="text-xl text-gray-600">Build. Connect. Simplify.</p>
      </div>

      {/* Middle - Login/Signup Form */}
      <div className="w-1/3 bg-white flex items-center justify-center">
        <div className="w-full max-w-sm p-8 shadow-md rounded-xl border border-gray-200">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Welcome Back</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition duration-300"
            >
              Login
            </button>
            <p className="text-sm text-center text-gray-500">
              Don't have an account?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="w-1/3 hidden lg:flex items-center justify-center bg-gray-100">
        <img
          src="/image1.jpeg"
          alt="PromptAI illustration"
          className="max-w-full max-h-full object-cover"
        />
      </div>
    </div>
  );
}

export default WelcomePage;
