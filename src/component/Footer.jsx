import React from "react";

const Footer = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="dark:bg-gray-800 text-gary-200 py-10 sm:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <nav>
          <h6 className="text-2xl font-bold text-green-500 mb-4">Sarmin.</h6>
          <p className="dark:text-gray-200 max-w-xs">
            I am a passionate Frontend Developer focused on building responsive
            and user-friendly web applications. Dedicated to writing clean and
            efficient code with modern technologies.
          </p>
        </nav>
        <nav>
          <h6 className="text-lg font-semibold mb-4 text-green-600">
            Quick Links
          </h6>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-green-400 transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-green-400 transition-colors"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("skills")}
                className="hover:text-green-400 transition-colors"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className="hover:text-green-400 transition-colors"
              >
                Projects
              </button>
            </li>
             <li>
              <button
                onClick={() => scrollToSection("services")}
                className="hover:text-green-400 transition-colors"
              >
                Services
              </button>
            </li>
             <li>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="hover:text-green-400 transition-colors"
              >
                Testimonials
              </button>
            </li>
          </ul>
        </nav>

        <nav>
          <h6 className="text-lg font-semibold mb-4 text-green-600">Contact</h6>
          <ul className="space-y-2">
            <li>
              <span className="text-green-500">Email:</span>{" "}
              <a
                href="mailto:sharminkhancse@gmail.com"
                className="hover:text-green-400"
              >
                sharminkhancse@gmail.com
              </a>
            </li>
            <li>
             <span className="text-green-500">Phone:</span>{" "}
              <a href="tel:+8801883685442" className="hover:text-green-400">
                +880 1883685442
              </a>
            </li>
          
          </ul>
        </nav>
      </div>
      <div className="w-full h-[1px] mt-4 bg-gray-400"></div>

      <p className="text-center text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} Sarmin Akter. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
