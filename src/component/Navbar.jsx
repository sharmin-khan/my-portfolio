import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import ToggleTheme from "../toggle/ToggleTheme";
import { HiOutlineDownload } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavItems = (
    <>
      <li>
        <NavLink
          to="/"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `relative px-4 py-2 transition-transform duration-200 text-base font-medium
            ${
              isActive
                ? "text-green-500"
                : "text-gray-700 dark:text-gray-200"
            }
            hover:-translate-y-1 hover:underline underline-offset-4 hover:text-green-500 bg-transparent`
          }
          style={{ textDecorationThickness: "2px" }}
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `relative px-4 py-2 transition-transform duration-200 text-base font-medium
            ${
              isActive
                ? "text-green-500"
                : "text-gray-700 dark:text-gray-200"
            }
            hover:-translate-y-1 hover:underline underline-offset-4 hover:text-green-500 bg-transparent`
          }
          style={{ textDecorationThickness: "2px" }}
        >
          About
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/skills"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `relative px-4 py-2 transition-transform duration-200 text-base font-medium
            ${
              isActive
                ? "text-green-500"
                : "text-gray-700 dark:text-gray-200"
            }
            hover:-translate-y-1 hover:underline underline-offset-4 hover:text-green-500 bg-transparent`
          }
          style={{ textDecorationThickness: "2px" }}
        >
          Skills
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/projects"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `relative px-4 py-2 transition-transform duration-200 text-base font-medium
            ${
              isActive
                ? "text-green-500"
                : "text-gray-700 dark:text-gray-200"
            }
            hover:-translate-y-1 hover:underline underline-offset-4 hover:text-green-500 bg-transparent`
          }
          style={{ textDecorationThickness: "2px" }}
        >
          Projects
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/services"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `relative px-4 py-2 transition-transform duration-200 text-base font-medium
            ${
              isActive
                ? "text-green-500"
                : "text-gray-700 dark:text-gray-200"
            }
            hover:-translate-y-1 hover:underline underline-offset-4 hover:text-green-500 bg-transparent`
          }
          style={{ textDecorationThickness: "2px" }}
        >
          Services
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/testimonials"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `relative px-4 py-2 transition-transform duration-200 text-base font-medium
            ${
              isActive
                ? "text-green-500"
                : "text-gray-700 dark:text-gray-200"
            }
            hover:-translate-y-1 hover:underline underline-offset-4 hover:text-green-500 bg-transparent`
          }
          style={{ textDecorationThickness: "2px" }}
        >
          Testimonials
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/contact"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            `relative px-4 py-2 transition-transform duration-200 text-base font-medium
            ${
              isActive
                ? "text-green-500"
                : "text-gray-700 dark:text-gray-200"
            }
            hover:-translate-y-1 hover:underline underline-offset-4 hover:text-green-500 bg-transparent`
          }
          style={{ textDecorationThickness: "2px" }}
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar w-11/12 mx-auto relative">
      {/* Left side */}
      <div className="navbar-start">
        <Link to="/" className="text-2xl font-bold text-green-500">
          Sarmin
        </Link>
      </div>

      {/* Middle part */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavItems}</ul>
      </div>

      {/* Right side */}
      <div className="navbar-end flex items-center gap-4">
        {/* Theme Toggle */}
        <ToggleTheme />

        {/* Hamburger Button for mobile */}
        <button
          onClick={() => setIsOpen(true)}
          className="btn btn-ghost lg:hidden"
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round" />
            <line x1="3" y1="12" x2="21" y2="12" strokeLinecap="round" />
            <line x1="3" y1="18" x2="21" y2="18" strokeLinecap="round" />
          </svg>
        </button>

        {/* Resume button */}
        <div className="hidden lg:block">
          <button className="px-4 py-2 bg-green-500 text-white font-semibold text-md rounded-md cursor-pointer flex items-center gap-2">
            <HiOutlineDownload className="text-lg" />
            Resume
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-base-100 dark:bg-gray-900 shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold text-green-500"
            onClick={() => setIsOpen(false)}
          >
            Sarmin
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round" />
              <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col p-4 space-y-2 text-gray-700 dark:text-gray-200">
          {NavItems}
        </ul>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
        />
      )}
    </div>
  );
};

export default Navbar;
