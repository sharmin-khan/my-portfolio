import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import photo from "../assets/photo.JPG";
import { HiOutlineDownload } from "react-icons/hi";

const Hero = () => {
  return (
   <div className="hero min-h-screen flex items-center">
  <div className="hero-content flex-col lg:flex-row items-center px-0 gap-12 w-full ">
    
    {/* Left side - Text */}
    <div className="lg:w-1/2 ">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I'm  <span className="text-green-500">Sarmin Akter</span>
      </h1>
      <h2 className="text-2xl md:text-4xl font-bold mb-4">Frontend Developer</h2>
      <p className="mb-6 text-md md:text-lg">
        I'm a passionate Frontend Developer focused on building responsive and user-friendly websites using React, Tailwind CSS, and modern web technologies.
      </p>

      {/* Resume button (only for small devices) */}
      <div className="w-full max-w-xs lg:hidden">
        <a
          href="/Resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-green-500 hover:bg-green-600 transition-colors text-white font-semibold text-md rounded-md cursor-pointer mb-6 shadow-md"
        >
          <HiOutlineDownload className="text-xl" />
          Download Resume
        </a>
      </div>

        {/* Social Links */}
          <div className="flex gap-6 text-2xl text-green-500">
            <a
              href="https://github.com/sharmin-khan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/sarmin18"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com/sarmin.khan.509190"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          
       
      </div>
    </div>

    {/* Right side - Image */}
    <div className="lg:w-1/2 flex justify-center">
      <img
        src={photo}
        alt="Sarmin Akter"
        className="max-w-sm rounded-lg shadow-2xl"
      />
    </div>

  </div>
</div>

  );
};

export default Hero;
