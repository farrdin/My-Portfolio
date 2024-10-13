import { useState, useRef } from "react";
import SectionTitle from "../Hooks/SectionTitle";

const Qualification = () => {
  const [activeSection, setActiveSection] = useState("education");
  const contactRef = useRef(null); // Create a ref for the contact section

  const handleTabClick = (section) => {
    setActiveSection(section);
  };

  const handleScrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-gray-50" id="qualification">
      <SectionTitle
        title="My Qualifications"
        subTitle="Check my qualifications"
      />

      <div className="mx-auto flex flex-wrap md:flex-nowrap justify-between items-center w-[70%]">
        {/* Qualification Tabs Section */}
        <div className="w-full md:w-1/2">
          <div className="flex justify-center mb-8">
            <button
              className={`qualification__button px-6 py-2 mx-2 rounded-md transition duration-300 cursor-pointer ${
                activeSection === "education"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => handleTabClick("education")}
            >
              Education
            </button>
            <button
              className={`qualification__button px-6 py-2 mx-2 rounded-md transition duration-300 cursor-pointer ${
                activeSection === "work"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => handleTabClick("work")}
            >
              Work
            </button>
          </div>

          <div className="relative">
            <div className="absolute border-l-2 border-gray-300 h-full left-1/2 transform -translate-x-1/2"></div>
            <div className="flex flex-col">
              {/* Education Section */}
              <div
                className={`qualification__content ${
                  activeSection === "education" ? "block" : "hidden"
                }`}
                data-content
              >
                <div className="flex items-center mb-8">
                  <div className="w-1/2 pr-4 text-right">
                    <h3 className="text-lg font-semibold">
                      Higher Secondary Certificate
                    </h3>
                    <span className="text-gray-500">Dhaka City College</span>
                    <div className="text-gray-400 mt-1">
                      <i className="uil uil-calendar-alt mr-1"></i> 2016 - 2018
                    </div>
                  </div>
                  <div className="w-1/2 pl-4 text-left">
                    <span className="bg-blue-600 w-4 h-4 rounded-full block mb-2"></span>
                  </div>
                </div>
              </div>

              {/* Work Section */}
              <div
                className={`qualification__content ${
                  activeSection === "work" ? "block" : "hidden"
                }`}
                data-content
              >
                <div className="flex items-center mb-8">
                  <div className="w-1/2 pr-4 text-right">
                    <h3 className="text-lg font-semibold">
                      Looking For Intern
                    </h3>
                    <span className="text-gray-500">Startup Company</span>
                    <div className="text-gray-400 mt-1">
                      <i className="uil uil-calendar-alt mr-1"></i>Current
                    </div>
                  </div>
                  <div className="w-1/2 pl-4 text-left">
                    <span className="bg-blue-600 w-4 h-4 rounded-full block mb-2"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Should You Hire Me Section */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 p-6 bg-white rounded-lg shadow-lg ml-0 md:ml-12">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Why Should You Hire Me?
          </h2>
          <p className="text-gray-700 mb-6">
            I am confident that my full-stack web development experience and
            eagerness to learn quickly will make me a valuable asset to any
            team. I am dedicated to building scalable and efficient solutions
            that enhance user experiences. My ability to quickly grasp new
            technologies and frameworks allows me to stay adaptable in a
            fast-evolving tech landscape.
          </p>
          <button
            onClick={handleScrollToContact}
            className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* Contact Section */}
      <section
        ref={contactRef} // Reference for the contact section
        id="contact"
        className="py-16 bg-gray-100 mt-16"
      >
        <h2 className="text-center text-3xl font-bold text-blue-600">
          Contact Me
        </h2>
        {/* Add your contact form or details here */}
      </section>
    </section>
  );
};

export default Qualification;
