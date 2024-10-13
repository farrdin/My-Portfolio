import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className=" bg-gray-800 p-6 md:p-8">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 w-full md:w-[70%]">
        <div className="flex flex-col">
          <h1 className="text-2xl text-yellow-300 mb-2">Fardin Ahmed Alif</h1>
          <p className="text-base mb-4 text-gray-300">Junior Web Developer</p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300 text-2xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300 text-2xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300 text-2xl"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap md:flex-row md:items-start gap-6">
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

      <p className="text-center text-gray-400 text-sm mt-10">
        © Designed and Developed by Fardin Ahmed Alif.
      </p>
    </footer>
  );
};

export default Footer;
