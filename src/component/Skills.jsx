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
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";

const skillsData = {
  frontend: [
    { name: "HTML5", percentage: 95, icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", percentage: 90, icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", percentage: 90, icon: <FaJs className="text-yellow-400" /> },
    { name: "React", percentage: 85, icon: <FaReact className="text-blue-400" /> },
    { name: "Tailwind CSS", percentage: 80, icon: <FaLaptopCode className="text-teal-400" /> },
   
  ],
  backend: [
    { name: "Node.js", percentage: 65, icon: <FaNodeJs className="text-green-600" /> },
    { name: "Express", percentage: 60, icon: <FaServer className="text-gray-400" /> },
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
    <div className="mt-8 flex flex-col items-center">
  <h3 className="text-2xl font-semibold mb-6">Additional Skills</h3>
  <div className="flex flex-wrap gap-2">
    <span className="px-3 py-2 bg-green-100 dark:bg-gray-700 dark:text-green-500 rounded-full text-md font-medium">DaisyUI</span>
    <span className="px-3 py-2 bg-green-100 dark:bg-gray-700 dark:text-green-500 rounded-full text-md font-medium">Mamba UI</span>
    <span className="px-3 py-2 bg-green-100 dark:bg-gray-700 dark:text-green-500 rounded-full text-md font-medium">Figma</span>
    <span className="px-3 py-2 bg-green-100 dark:bg-gray-700 dark:text-green-500 rounded-full text-md font-medium">Pixso</span>
    <span className="px-3 py-2 bg-green-100 dark:bg-gray-700 dark:text-green-500 rounded-full text-md font-medium">Stripe</span>
    <span className="px-3 py-2 bg-green-100 dark:bg-gray-700 dark:text-green-500 rounded-full text-md font-medium">Imgbb</span>
    <span className="px-3 py-2 bg-green-100 dark:bg-gray-700 dark:text-green-500 rounded-full text-md font-medium">Canva</span>
    <span className="px-3 py-2 bg-green-100 dark:bg-gray-700 dark:text-green-500 rounded-full text-md font-medium">REST API Integration</span>
    <span className="px-3 py-2 bg-green-100 dark:bg-gray-700 dark:text-green-500 rounded-full text-md font-medium">Firebase Hosting / Authentication</span>
  </div>
</div>
    </section>
  );
};

export default Skills;
