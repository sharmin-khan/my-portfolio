import { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const ToggleTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded flex items-center gap-2"
    >
      {theme === "light" ? (
        <>
          <MdOutlineLightMode className="text-green-500 text-2xl" />
          
        </>
      ) : (
        <>
          <MdOutlineDarkMode className="text-green-500 text-2xl" />
          
        </>
      )}
    </button>
  );
};

export default ToggleTheme;


