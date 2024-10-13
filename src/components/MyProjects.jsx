import { useState } from "react";
import SectionTitle from "../Hooks/SectionTitle";
import parcepro from "../assets/ParcelPro.jpg";
import ArtCraft from "../assets/ArtCraft.jpg";
import Library from "../assets/Library.jpg";

const MyProjects = () => {
  const [modalData, setModalData] = useState(null);

  const projects = [
    {
      imgSrc: parcepro,
      title: "Parcel Management",
      description:
        "An efficient parcel management system for booking and tracking deliveries. Technologies Used: React.js, Express.js, Node.js, MongoDB. Key Features: Parcel booking, delivery tracking, role-based access control, real-time status updates.",
      projectLink: "https://parcelpro.netlify.app",
    },
    {
      imgSrc: Library,
      title: "Library Management",
      description:
        "A full-fledged library management system where users can search, borrow, and return books. Technologies Used: React.js, Node.js, MongoDB, Express.js. Key Features: Book search, user authentication, borrowing history, book management.",
      projectLink: "https://knowledgeshelf.netlify.app",
    },
    {
      imgSrc: ArtCraft,
      title: "Art & Craft Management",
      description:
        "A platform for managing and showcasing art and craft products, aimed at artisans and sellers. Technologies Used: React.js, Firebase, MongoDB. Key Features: Product listing, secure authentication, and responsive design.",
      projectLink: "https://prb9-a10.web.app",
    },
  ];

  const openModal = (project) => {
    setModalData(project);
  };

  const closeModal = () => {
    setModalData(null);
  };

  const handleOutsideClick = (e) => {
    // Close modal if the user clicks outside the modal content
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  return (
    <section id="projects" className="py-16 ">
      <SectionTitle title="My Projects" subTitle="Check out some of my work" />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg bg-white"
          >
            <img
              src={project.imgSrc}
              alt={project.title}
              className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-105"
              onClick={() => openModal(project)}
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={() => openModal(project)}
                className="text-white bg-blue-500 px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Detailed View */}
      {modalData && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 modal-overlay"
          onClick={handleOutsideClick} // This will close the modal on outside click
        >
          <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-lg mx-auto p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-4 text-gray-600 hover:text-gray-900 text-2xl"
            >
              &times;
            </button>
            <img
              src={modalData.imgSrc}
              alt={modalData.title}
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {modalData.title}
            </h3>
            <p className="text-gray-600 mb-4">{modalData.description}</p>
            <a
              href={modalData.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
            >
              View Project
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyProjects;
