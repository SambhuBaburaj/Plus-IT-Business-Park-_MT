import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="bg-gray-800 fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between">
            <div className="flex-shrink-0">
              <p
                onClick={() => {
                  navigate("/items");
                }}
                className="text-white font-bold text-xl cursor-pointer"
              >
                Plus Service
              </p>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/items"
                  className={`${
                    window.location.pathname === "/items"
                      ? "font-bold text-white"
                      : "text-gray-300"
                  }  hover:text-white`}
                >
                  Home
                </Link>
                <Link
                  to="/profile"
                  className={`${
                    window.location.pathname === "/profile"
                      ? "font-bold text-white"
                      : "text-gray-300"
                  }  hover:text-white`}
                >
                  Profile
                </Link>
                <Link
                  to="/protected"
                  className={`${
                    window.location.pathname === "/protected"
                      ? "font-bold text-white"
                      : "text-gray-300"
                  }  hover:text-white`}
                >
                  Protected
                </Link>
              </div>
            </div>
          </div>
          <div className="ml-auto  justify-end hidden md:block">
            <p
              onClick={() => {
                localStorage.removeItem("Userdata");
                navigate("/login");
              }}
              className={`${
                window.location.pathname === "/logout"
                  ? "font-bold text-white"
                  : "text-gray-300"
              }  text-red-400 hover:text-red-600 justify-end cursor-pointer`}
            >
              Logout
            </p>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="/items" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/profile" className="text-gray-300 hover:text-white">
            Profile
          </Link>

          <Link to="/protected" className="text-gray-300 hover:text-white">
            Protected
          </Link>
          <Link to="/" className="text-red-400 hover:text-red-600">
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
