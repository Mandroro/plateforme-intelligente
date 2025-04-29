import React from "react";

export default function Header() {
  return (
    <header className="bg-gray-900">
      <div className="container mx-auto flex items-center justify-between p-3">
        <div className="flex items-center space-x-25">
          <h1 className="text-white text-xl font-[Sora] font-bold">SmartHub</h1>
          <nav className="hidden md:flex">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-white font-[Sora] hover:text-green-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white font-[Sora] hover:text-green-500">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white font-[Sora] hover:text-green-500">
                  Services
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="hidden md:flex space-x-2">
          <button className="text-white font-[Sora] py-2 px-4 rounded-2xl">
            Sign in
          </button>
          <button className="border border-green-600 text-white font-[Sora] py-2 px-4 rounded-2xl">
            Sign up
          </button>
        </div>

        {/* Mobile button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
