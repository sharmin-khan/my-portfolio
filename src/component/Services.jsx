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
    <section id="services" className="pt-20">
      <h2 className="text-4xl font-extrabold text-green-500 mb-6 text-center">
        My Services
      </h2>
      <p className="text-center dark:text-gray-200 mb-12 max-w-xl mx-auto">
        I provide a variety of professional services to help you build, design, and grow your digital presence.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {services.map(({ icon, title, description }) => (
          <div
            key={title}
            className="bg-gray-800 bg-opacity-70 p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300"
          >
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-green-400">{title}</h3>
            <p className="text-gray-300">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
