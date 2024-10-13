import SectionTitle from "../Hooks/SectionTitle";

const Services = () => {
  return (
    <section className="services section py-12 bg-gray-100" id="services">
      <SectionTitle title="My Services" subTitle="What I Offer" />

      <div className="services__container container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[70%]">
        <div className="services__content p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
          <div className="flex items-center mb-4">
            <i className="uil uil-code services__icon text-3xl text-blue-600 mr-4"></i>
            <h3 className="services__title text-xl font-semibold text-gray-800">
              Frontend Development
            </h3>
          </div>
          <p className="text-gray-600 mb-4">
            I create engaging and responsive user interfaces using HTML, CSS,
            JavaScript, and Tailwind CSS. My focus is on delivering high-quality
            frontend experiences.
          </p>
          <a
            href="#projects"
            className="button button--flex button--small button--link text-blue-600 font-semibold hover:underline"
          >
            View Projects
            <i className="uil uil-arrow-right button__icon ml-2"></i>
          </a>
        </div>

        <div className="services__content p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
          <div className="flex items-center mb-4">
            <i className="uil uil-server services__icon text-3xl text-blue-600 mr-4"></i>
            <h3 className="services__title text-xl font-semibold text-gray-800">
              Web Development
            </h3>
          </div>
          <p className="text-gray-600 mb-4">
            I build dynamic and responsive websites using ReactJS and Node.js,
            ensuring seamless user experiences and efficient performance.
          </p>
          <a
            href="#projects"
            className="button button--flex button--small button--link text-blue-600 font-semibold hover:underline"
          >
            View Projects
            <i className="uil uil-arrow-right button__icon ml-2"></i>
          </a>
        </div>

        <div className="services__content p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
          <div className="flex items-center mb-4">
            <i className="uil uil-paint-tool services__icon text-3xl text-blue-600 mr-4"></i>
            <h3 className="services__title text-xl font-semibold text-gray-800">
              Figma to HTML
            </h3>
          </div>
          <p className="text-gray-600 mb-4">
            I specialize in converting Figma designs into pixel-perfect,
            responsive HTML code, ensuring design integrity across devices.
          </p>
          <a
            href="#projects"
            className="button button--flex button--small button--link text-blue-600 font-semibold hover:underline"
          >
            View Projects
            <i className="uil uil-arrow-right button__icon ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
