import { useState } from "react";
import SectionTitle from "../Hooks/SectionTitle";

const Qualification = () => {
  const [activeSection, setActiveSection] = useState("education");

  const handleTabClick = (section) => {
    setActiveSection(section);
  };

  return (
    <section className="section" id="qualification">
      <SectionTitle
        title="My Qualifications"
        subTitle="Check my qualifications"
      />

      <div className="container mx-auto">
        <div className="flex justify-center mb-6">
          <div
            className={`qualification__button button--flex px-4 py-2 rounded-md transition duration-300 cursor-pointer ${
              activeSection === "education"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleTabClick("education")}
          >
            <i className="uil uil-graduation-cap qualification__icon mr-2"></i>
            Education
          </div>

          <div
            className={`qualification__button button--flex px-4 py-2 rounded-md transition duration-300 cursor-pointer ${
              activeSection === "work"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleTabClick("work")}
          >
            <i className="uil uil-bag qualification__icon mr-2"></i>
            Work
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={`qualification__content ${
              activeSection === "education" ? "block" : "hidden"
            }`}
            data-content
          >
            {/* Static Education Qualifications */}
            <div className="qualification__data flex items-start mb-4">
              <div>
                <h3 className="qualification__title text-lg font-semibold">
                  Bachelors Degree
                </h3>
                <span className="qualification__subtitle text-gray-500">
                  Computer Science
                </span>
                <div className="qualification__calendar text-gray-400 flex items-center mt-1">
                  <i className="uil uil-calendar-alt mr-1"></i>
                  2018 - 2022
                </div>
              </div>
              <div className="flex items-center ml-4">
                <span className="qualification__rounder bg-blue-600 w-4 h-4 rounded-full"></span>
                <span className="qualification__line bg-gray-300 w-1 h-full"></span>
              </div>
            </div>

            <div className="qualification__data flex items-start mb-4">
              <div className="flex items-center mr-4">
                <span className="qualification__rounder bg-blue-600 w-4 h-4 rounded-full"></span>
                <span className="qualification__line bg-gray-300 w-1 h-full"></span>
              </div>
              <div>
                <h3 className="qualification__title text-lg font-semibold">
                  High School Diploma
                </h3>
                <span className="qualification__subtitle text-gray-500">
                  XYZ High School
                </span>
                <div className="qualification__calendar text-gray-400 flex items-center mt-1">
                  <i className="uil uil-calendar-alt mr-1"></i>
                  2014 - 2018
                </div>
              </div>
            </div>
          </div>

          <div
            className={`qualification__content ${
              activeSection === "work" ? "block" : "hidden"
            }`}
            data-content
          >
            {/* Static Work Qualifications */}
            <div className="qualification__data flex items-start mb-4">
              <div>
                <h3 className="qualification__title text-lg font-semibold">
                  Software Engineer
                </h3>
                <span className="qualification__subtitle text-gray-500">
                  Tech Company ABC
                </span>
                <div className="qualification__calendar text-gray-400 flex items-center mt-1">
                  <i className="uil uil-calendar-alt mr-1"></i>
                  2022 - Present
                </div>
              </div>
              <div className="flex items-center ml-4">
                <span className="qualification__rounder bg-blue-600 w-4 h-4 rounded-full"></span>
                <span className="qualification__line bg-gray-300 w-1 h-full"></span>
              </div>
            </div>

            <div className="qualification__data flex items-start mb-4">
              <div className="flex items-center mr-4">
                <span className="qualification__rounder bg-blue-600 w-4 h-4 rounded-full"></span>
                <span className="qualification__line bg-gray-300 w-1 h-full"></span>
              </div>
              <div>
                <h3 className="qualification__title text-lg font-semibold">
                  Intern
                </h3>
                <span className="qualification__subtitle text-gray-500">
                  XYZ Startup
                </span>
                <div className="qualification__calendar text-gray-400 flex items-center mt-1">
                  <i className="uil uil-calendar-alt mr-1"></i>
                  2021 - 2022
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
