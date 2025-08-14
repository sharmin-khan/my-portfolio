import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import ToggleTheme from "../toggle/ToggleTheme";
import { HiOutlineDownload } from "react-icons/hi";
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaServicestack, FaEnvelope } from "react-icons/fa";

const NavItems = ({ activeSection, setIsOpen, isMobile = false }) => {
  const items = [
    { id: "home", label: "Home", icon: <FaHome className="inline" /> },
    { id: "about", label: "About", icon: <FaUser className="inline" /> },
    { id: "skills", label: "Skills", icon: <FaCode className="inline" /> },
    { id: "projects", label: "Projects", icon: <FaProjectDiagram className="inline" /> },
    { id: "services", label: "Services", icon: <FaServicestack className="inline" /> },
    { id: "contact", label: "Contact", icon: <FaEnvelope className="inline" /> },
  ];

  return (
    <>
      {items.map(({ id, label, icon }) => (
        <li key={id}>
          <a
            href={`#${id}`}
            onClick={() => setIsOpen(false)}
            className={`relative px-4 py-2 transition-transform duration-200 text-base font-medium bg-transparent
              ${
                activeSection === id
                  ? isMobile
                    ? "text-white dark:text-gray-800"
                    : "text-green-500"
                  : isMobile
                  ? "text-gray-800 dark:text-gray-200 hover:text-white dark:hover:text-gray-800"
                  : "text-gray-800 dark:text-gray-200 hover:-translate-y-1 hover:underline hover:text-green-500"
              } underline-offset-4 focus:outline-none focus:ring-0 focus:bg-transparent active:bg-transparent`}
            style={{ textDecorationThickness: "2px" }}
          >
            {icon} {label}
          </a>
        </li>
      ))}
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "services", "contact"];
      let current = "home";
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 150;
          const bottom = top + section.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full fixed top-0 z-50 bg-white bg-opacity-30 dark:bg-gray-800 dark:opacity-95 backdrop-blur-md">
      <div className="navbar w-11/12 mx-auto relative px-0">
        {/* Left side */}
        <div className="navbar-start">
          <Link to="/" className="text-2xl font-bold text-green-500">
            Sarmin.
          </Link>
        </div>

        {/* Middle part */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavItems activeSection={activeSection} setIsOpen={setIsOpen} isMobile={false} />
          </ul>
        </div>

        {/* Right side */}
        <div className="navbar-end flex items-center gap-4">
          <ToggleTheme />

          {/* Hamburger Button for mobile */}
          <button onClick={() => setIsOpen(true)} className="btn btn-ghost lg:hidden" aria-label="Open menu">
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
            <a
              href="/Resume-Sarmin.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-md rounded-md cursor-pointer flex items-center gap-2"
            >
              <HiOutlineDownload className="text-lg" />
              Resume
            </a>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-base-100 dark:bg-gray-900 shadow-lg transform transition-transform duration-300 z-50 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-green-500" onClick={() => setIsOpen(false)}>
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
          <ul className="flex flex-col p-4 space-y-2 bg-green-500">
            <NavItems activeSection={activeSection} setIsOpen={setIsOpen} isMobile={true} />
          </ul>
        </div>

        {/* Backdrop */}
        {isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black bg-opacity-30" />}
      </div>
    </div>
  );
};

export default Navbar;
