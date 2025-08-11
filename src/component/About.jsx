import React, { useEffect, useRef, useState } from "react";

const skills = [
  { name: "Hard Work", percentage: 80 },
  { name: "Web Designing", percentage: 60 },
  { name: "Creativity", percentage: 85 },
  { name: "Web Development", percentage: 70 },
];

const AboutMe = () => {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={containerRef} className="pt-20">
      {/* Title full width */}
      <div className="flex items-center justify-center mb-16">
        <h2 className="text-4xl font-extrabold text-green-500 tracking-wide border-b-4 border-green-600 pb-2 max-w-max">
          About Me
        </h2>
      </div>

      {/* Two columns below title */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left: About Me text */}
        <div className="lg:w-1/2 text-lg font-sans leading-relaxed">
        <h2 className="text-xl font-semibold text-green-600 mb-6">Programming Journey</h2>
          <p className="mb-4">
            I started my programming journey with a curiosity to understand how
            websites and apps are built. Over time, I have developed strong
            skills in frontend development, especially working with React and
            Tailwind CSS. I enjoy creating clean, responsive, and user-friendly
            interfaces that provide great experiences for users.
          </p>
          <p className="mb-4">
            Besides coding, I love painting and exploring different art styles.
            It helps me stay creative and relaxed. I also enjoy playing sports
            like badminton which keeps me active and focused. I believe a good
            balance between work and hobbies is essential to grow both
            professionally and personally.
          </p>
          <p>
            In my work, I am passionate about continuous learning and solving
            real-world problems through technology. I’m always eager to take on
            new challenges and collaborate with others to build meaningful
            projects.
          </p>
        </div>

        {/* Right: Skills */}
        <div className="lg:w-1/2">
          <h3 className="text-xl font-semibold mb-6 text-green-600">
            My Strengths
          </h3>
          <div className="space-y-6">
            {skills.map(({ name, percentage }) => (
              <div key={name}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {name}
                  </span>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-green-500 h-3 rounded-full transition-all duration-1000 ease-in-out"
                    style={{
                      width: visible ? `${percentage}%` : "0%",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
