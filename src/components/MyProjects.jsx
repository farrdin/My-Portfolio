import { useState } from "react";
import SectionTitle from "../Hooks/SectionTitle";

const MyProjects = () => {
  const [modalImgSrc, setModalImgSrc] = useState(null);

  const projects = [
    {
      imgSrc: "project1.jpg",
      title: "Project One",
      description: "This is a description for Project One.",
      projectLink: "https://project1.com",
    },
    {
      imgSrc: "project2.jpg",
      title: "Project Two",
      description: "This is a description for Project Two.",
      projectLink: "https://project2.com",
    },
    // Add more projects as needed
  ];

  const openModal = (imgSrc) => {
    setModalImgSrc(imgSrc);
  };

  const closeModal = () => {
    setModalImgSrc(null);
  };

  return (
    <section id="projects" className="py-8">
      <SectionTitle title="My Projects" subTitle="Check out my work" />
      <div className="gap-6 grid grid-cols-2">
        {projects.map((project, index) => (
          <div
            className="flex flex-col justify-between bg-gray-800 p-4 rounded-md shadow transition duration-300"
            key={index}
          >
            <img
              className="rounded cursor-pointer"
              src={project.imgSrc}
              alt={project.title}
              onClick={() => openModal(project.imgSrc)}
            />
            <div className="flex flex-col justify-between flex-grow">
              <h3 className="mt-4 mb-2 text-white">{project.title}</h3>
              <p className="text-sm text-gray-400 flex-grow">
                {project.description}
              </p>
              <a
                className="self-start mt-4 button"
                href={project.projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
      {modalImgSrc && (
        <div
          className="flex items-center justify-center fixed z-50 left-0 top-0 w-full h-full overflow-auto bg-black bg-opacity-90"
          onClick={closeModal}
        >
          <span
            className="absolute top-2 right-6 text-white text-3xl font-bold cursor-pointer"
            onClick={closeModal}
          >
            &times;
          </span>
          <img
            className="max-w-4xl max-h-[80%] mx-auto"
            src={modalImgSrc}
            alt="Modal"
          />
        </div>
      )}
    </section>
  );
};

export default MyProjects;
