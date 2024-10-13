import SectionTitle from "../Hooks/SectionTitle";

const Services = () => {
  return (
    <section className="services section py-12" id="services">
      {/* <!--==================== SERVICES ====================--> */}
      <SectionTitle title="My Services" subTitle="What I Offer" />

      <div className="services__container container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Example Service Cards */}
        <div className="services__content p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
          <div className="flex items-center mb-4">
            <i className="uil uil-code services__icon text-3xl text-blue-600 mr-4"></i>
            <h3 className="services__title text-xl font-semibold text-gray-800">
              Web Development
            </h3>
          </div>
          <p className="text-gray-600 mb-4">
            Building responsive and dynamic websites with modern technologies.
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
            <i className="uil uil-mobile-android services__icon text-3xl text-blue-600 mr-4"></i>
            <h3 className="services__title text-xl font-semibold text-gray-800">
              Mobile Development
            </h3>
          </div>
          <p className="text-gray-600 mb-4">
            Creating mobile applications that provide great user experiences.
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
              UI/UX Design
            </h3>
          </div>
          <p className="text-gray-600 mb-4">
            Designing user-friendly interfaces and engaging user experiences.
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
