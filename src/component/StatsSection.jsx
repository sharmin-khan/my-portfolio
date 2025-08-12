import { useEffect, useState } from "react";
import { FaBookOpen, FaLaptopCode, FaBolt, FaUsers } from "react-icons/fa";

const StatsSection = () => {
  const statsData = [
    { id: 1, icon: <FaBookOpen size={50} />, number: 1, suffix: "+", title: "Years of Learning" },
    { id: 2, icon: <FaLaptopCode size={50} />, number: 15, suffix: "+", title: "Projects Completed" },
    { id: 3, icon: <FaBolt size={50} />, number: 5, suffix: "+", title: "Technologies Mastered" },
    { id: 4, icon: <FaUsers size={50} />, number: 3, suffix: "+", title: "Team Collaborations" },
  ];

  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    statsData.forEach((stat, index) => {
      let start = 0;
      const timer = setInterval(() => {
        start += 1;
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = start;
          return newCounts;
        });
        if (start === stat.number) clearInterval(timer);
      }, 150);
    });
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
      {statsData.map((stat, index) => (
        <div
          key={stat.id}
          className="bg-gray-200/50 dark:bg-green-900/50 shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
        >
          <div className="text-green-500 mb-2">{stat.icon}</div>
          <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-1">
            {counts[index]}
            {stat.suffix}
          </h3>
          <p className="text-gray-600 dark:text-gray-200">{stat.title}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
