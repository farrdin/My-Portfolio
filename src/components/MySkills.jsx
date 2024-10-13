import SectionTitle from "../Hooks/SectionTitle";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiFirebase } from "react-icons/si";
import { MdDesignServices } from "react-icons/md";

const MySkills = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-3xl text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-3xl text-blue-500" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-3xl text-sky-400" />,
    },
    { name: "JavaScript", icon: <FaJs className="text-3xl text-yellow-500" /> },
    { name: "ReactJS", icon: <FaReact className="text-3xl text-blue-600" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-3xl text-green-500" /> },
    {
      name: "Express.js",
      icon: <MdDesignServices className="text-3xl text-gray-700" />,
    },
    {
      name: "MongoDB",
      icon: <FaDatabase className="text-3xl text-green-600" />,
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="text-3xl text-yellow-400" />,
    },
    // Add more component libraries as needed
  ];

  return (
    <section id="skills" className="skills section py-12 bg-gray-50">
      <SectionTitle title="My Skills" subTitle="Technical Proficiencies" />
      <div className="skills__container container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skills__card flex flex-col items-center p-4 bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            {skill.icon}
            <h3 className="skills__name text-lg font-semibold text-gray-800 mt-2">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
