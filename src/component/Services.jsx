import { FaLaptopCode, FaMobileAlt, FaPaintBrush, FaSearch } from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode className="text-green-500 text-4xl" />,
    title: "Web Development",
    description:
      "Build fast, responsive, and scalable websites with modern technologies like React and Tailwind CSS.",
  },
  {
    icon: <FaMobileAlt className="text-green-500 text-4xl" />,
    title: "Responsive Design",
    description:
      "Ensure your website looks great and works perfectly on all devices including mobiles and tablets.",
  },
  {
    icon: <FaPaintBrush className="text-green-500 text-4xl" />,
    title: "UI/UX Design",
    description:
      "Craft engaging and intuitive user interfaces with a focus on excellent user experience.",
  },
  {
    icon: <FaSearch className="text-green-500 text-4xl" />,
    title: "SEO Optimization",
    description:
      "Optimize your website to rank higher on search engines and attract more organic traffic.",
  },
];

const Services = () => {
  return (
    <section id="services" className="pt-20 ">
           <div className="flex items-center justify-center mb-3">
        <h2 className="text-3xl font-bold text-green-500 tracking-wide border-b-4 border-green-600 pb-2 max-w-max">
          Services
        </h2>
      </div>
      <p className="text-center dark:text-gray-200 mb-12 max-w-xl mx-auto">
        I provide a variety of professional services to help you build, design, and grow your digital presence.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:h-72 ">
        {services.map(({ icon, title, description }) => (
          <div
            key={title}
          className="bg-gradient-to-br from-green-200/50 to-green-500/50 
             dark:bg-gray-800 dark:bg-opacity-70 
             p-6 rounded-lg shadow-md 
             border border-transparent
             hover:border-2 hover:border-green-800  dark:hover:border-gray-200 
             hover:shadow-xl transform hover:-translate-y-2 
             transition-all duration-300 ease-in-out box-sizing: border-box "

          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-green-600 dark:text-green-400">{title}</h3>
            <p className="text-gray-800 dark:text-gray-300">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
