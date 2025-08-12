import React from "react";
import { Link } from "react-router";

import project1Img from "../assets/project1.png"
import project2Img from "../assets/project2.png";
import project3Img from "../assets/project3.png";

const projects = [
{
  id: 1,
  name: "MarathonPro",
  image: project1Img,
  description: "- Manage and organize marathon events easily.\n- Track runners with live updates during the race.\n- View participant details and race progress in real-time.\n- Get instant notifications and live timing.\n- Access reports and analytics for better event planning.",
  tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
  liveLink: "https://marathon-management-syst-3a566.web.app",
},

{
  id: 2,
  name: "PropEasy",
  image: project2Img,
  description: "- A user-friendly real estate marketplace.\n- Buy and sell properties quickly and securely.\n- Explore property listings with detailed info.\n- Connect buyers and sellers seamlessly.\n- Powered by React, Firebase, and Tailwind CSS.",
  tech: ["React", "Firebase", "Tailwind CSS", "Node.js", "MongoDB"],
  liveLink: "https://real-estate-platform-4dacc.web.app",
},

{
  id: 3,
  name: "TaskNest",
  image: project3Img,
  description:
    "- Freelance task marketplace connecting clients and freelancers.\n- Post and manage tasks easily.\n- Secure communication between clients and freelancers.\n- Real-time updates on task progress.\n- Built with React, Node.js, and MongoDB.",
  tech: ["React","Tailwind CSS", "Node.js","firebase", "MongoDB"],
  liveLink: "https://freelance-task-marketpla-73040.web.app/",
}

];

const Project = () => {
  return (
    <div id="projects" className="pt-20 ">
      <h2 className="text-3xl font-bold text-green-500 tracking-wide border-b-4 border-green-600 pb-2 max-w-max mx-auto mb-16">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map(({ id, name, image, description, tech, liveLink }) => (
          <div key={id} className="rounded-lg shadow-lg p-4 relative  border border-green-800/50">
            <img
              src={image}
              alt={name}
              className="rounded-md mb-4 h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <h3 className="text-lg text-green-600 font-semibold mb-2">
              {name}
            </h3>
            <h4 className="text-md mb-4 text-gray-400"style={{ whiteSpace: "pre-line" }}>{description}</h4>
            <p className="text-md mb-4">
              <span className="font-semibold text-green-600 mr-2">Tech:</span>
              {tech.map((item, index) => (
                <span
                  key={index}
                  className="inline-block bg-green-600/70 text-white text-xs px-2 py-1 rounded-md mr-2"
                >
                  {item}
                </span>
              ))}
            </p>

            <div className="flex gap-3">
              <Link
                to={`/projects/${id}`}
                className="bg-green-500 text-white px-4 py-2 rounded font-semibold hover:bg-green-600 text-md"
              >
                View Details
              </Link>
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-green-500 bg-transparent text-green-500 hover:text-gray-200 px-4 py-2 rounded font-semibold hover:bg-green-600 text-md transition-colors duration-300"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
