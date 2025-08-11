import React, { useEffect, useRef, useState } from "react";
import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaCode,
  FaTools,
  FaServer,
  FaLaptopCode,
} from "react-icons/fa";

const skillsData = {
  frontend: [
    { name: "React", percentage: 85, icon: <FaReact className="text-blue-500" /> },
    { name: "JavaScript", percentage: 90, icon: <FaJs className="text-yellow-400" /> },
    { name: "Tailwind CSS", percentage: 80, icon: <FaLaptopCode className="text-teal-400" /> },
  ],
  backend: [
    { name: "Node.js", percentage: 65, icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express", percentage: 60, icon: <FaServer className="text-gray-600" /> },
    { name: "MongoDB", percentage: 70, icon: <FaDatabase className="text-green-700" /> },
  ],
  tools: [
    { name: "Git", percentage: 85, icon: <FaGitAlt className="text-red-500" /> },
    { name: "VS Code", percentage: 90, icon: <FaCode className="text-blue-700" /> },
    { name: "Postman", percentage: 70, icon: <FaTools className="text-orange-500" /> },
  ],
};

const SkillCategory = ({ title, icon, skills, animate }) => (
  <div className="w-full p-6 bg-gray-800 bg-opacity-70 rounded-lg shadow-md">
    <h3 className="flex items-center gap-2 text-xl font-semibold mb-6 text-green-400">
      {icon}
      {title}
    </h3>
    <div className="space-y-6">
      {skills.map(({ name, percentage, icon }) => (
        <div key={name}>
          <div className="flex justify-between mb-2 items-center gap-2">
            <span className="flex items-center gap-2 font-medium text-gray-200">
              {icon}
              {name}
            </span>
            <span className="font-medium text-gray-200">{percentage}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div
              className="bg-green-500 h-3 rounded-full transition-all duration-1000 ease-in-out"
              style={{ width: animate ? `${percentage}%` : "0%" }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const containerRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={containerRef} className="pt-20">
      <h2 className="text-4xl font-extrabold text-green-500 mb-16 text-center border-b-4 border-green-600 pb-2 max-w-max mx-auto">
        My Skills
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        <SkillCategory
          title="Frontend"
          icon={<FaLaptopCode className="text-green-600" />}
          skills={skillsData.frontend}
          animate={animate}
        />
        <SkillCategory
          title="Backend"
          icon={<FaServer className="text-green-600" />}
          skills={skillsData.backend}
          animate={animate}
        />
        <SkillCategory
          title="Tools"
          icon={<FaTools className="text-green-600" />}
          skills={skillsData.tools}
          animate={animate}
        />
      </div>
    </section>
  );
};

export default Skills;
