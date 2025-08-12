import React, { useEffect } from "react";
import { useParams, Link } from "react-router";

import project1Img from "../assets/project1.png";
import project2Img from "../assets/project2.png";
import project3Img from "../assets/project3.png";
import { HashLink } from "react-router-hash-link";

const projects = [
  {
    id: 1,
    name: "MarathonPro",
    image: project1Img,
    description: "A platform to manage and track marathons with live updates.",
    tech: ["Tailwind CSS","React", "Node.js", "MongoDB", "Express"],
    githubClient: "https://github.com/sharmin-khan/marathon-management-clint",
    challenges:
      "Handling real-time updates and managing large datasets efficiently.",
    improvements: "Add user notifications and improve mobile responsiveness.",
  },
  {
    id: 2,
    name: "PropEasy",
    image: project2Img,
    description: "Real estate marketplace to buy and sell properties easily.",
    tech: ["React", "Firebase","Node.js", "MongoDB", "Tailwind CSS"],
    githubClient: " https://github.com/sharmin-khan/real-estate-clint",

    challenges:
      "Integrating payment gateway and optimizing image loading times.",
    improvements: "Add agent rating system and advanced search filters.",
  },
  {
    id: 3,
    name: "TaskNest",
    image: project3Img,
    description:
      "Freelance task marketplace connecting clients and freelancers.",
    tech: ["React","Firebase", "Node.js", "MongoDB"],
    githubClient: "https://github.com/sharmin-khan/freelance-task-client",
    challenges: "Managing real-time task status and user authentication.",
    improvements: "Add chat system and improve task recommendation engine.",
  },
];

const ProjectDetails = () => {
    useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold text-red-500">Project Not Found</h2>
        <Link
          to="/projects"
          className="text-green-500 hover:underline mt-4 inline-block"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-green-600 mb-4">{project.name}</h1>
      <img
        src={project.image}
        alt={project.name}
        className="w-full rounded-md mb-6 object-cover max-h-96"
      />
      <p className="text-gray-800 dark:text-gray-200 mb-4">{project.description}</p>

      <h3 className="text-2xl font-semibold mb-2">Technology Stack</h3>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, index) => (
          <span
            key={index}
            className="bg-green-500/50 text-white px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <h3 className="text-2xl font-semibold mb-2">Challenges Faced</h3>
      <p className="mb-4">{project.challenges}</p>

      <h3 className="text-2xl font-semibold mb-2">
        Potential Improvements & Future Plans
      </h3>
      <p className="mb-6">{project.improvements}</p>

      <div className="flex gap-4">
        <a
          href={project.githubClient}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-700 text-white px-5 py-2 rounded transition"
        >
          GitHub Client
        </a>

        <HashLink
          smooth
          to="/#projects"
          className="border border-green-500 bg-transparent text-green-600 px-5 py-2 rounded hover:bg-green-500 hover:text-gray-200 transition"
        >
          Back to Projects
        </HashLink>
      </div>
    </div>
  );
};

export default ProjectDetails;
