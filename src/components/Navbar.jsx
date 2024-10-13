import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close the menu after navigation
    }
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center w-[70%] mx-auto">
        <div className="text-white text-lg font-bold">Fardin Ahmed Alif</div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? "✖️" : "☰"}
          </button>
        </div>
        <div
          className={`md:flex md:items-center md:space-x-4 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <button
            onClick={() => scrollToSection("home")}
            className="text-white hover:text-gray-400"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-white hover:text-gray-400"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-white hover:text-gray-400"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-white hover:text-gray-400"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("qualification")}
            className="text-white hover:text-gray-400"
          >
            Qualification
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-white hover:text-gray-400"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-white hover:text-gray-400"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
