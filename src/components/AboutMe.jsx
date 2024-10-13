import SectionTitle from "../Hooks/SectionTitle";

const AboutMe = () => {
  return (
    <section className="about section py-12" id="about">
      <SectionTitle title="About Me" subTitle="Get to Know Me" />
      <div className="about__container container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src="your-image-url.jpg" // Replace with your image URL
          alt="about me"
          className="about__img rounded-lg shadow-md"
        />

        <div className="about__data">
          <p className="about__description text-gray-700 mb-4">
            I am a passionate developer with a knack for building efficient and
            scalable applications. My journey in tech has been fulfilling, and
            I’m excited to keep growing and learning.
          </p>
          <ul className="about__description-ul list-disc list-inside mb-4">
            <li>Skilled in front-end and back-end development.</li>
            <li>Experienced in modern web technologies.</li>
            <li>Strong problem-solving skills.</li>
          </ul>

          <div className="about__info grid grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <span className="about__info-title text-2xl font-bold">3</span>
              <span className="about__info-name text-gray-500">
                years
                <br />
                experience
              </span>
            </div>
            <div className="text-center">
              <span className="about__info-title text-2xl font-bold">10</span>
              <span className="about__info-name text-gray-500">
                Completed
                <br />
                projects
              </span>
            </div>
            <div className="text-center">
              <span className="about__info-title text-2xl font-bold">5</span>
              <span className="about__info-name text-gray-500">
                Companies
                <br />
                worked
              </span>
            </div>
          </div>

          <div className="about__buttons">
            <a
              href="your-cv-link.pdf" // Replace with your CV link
              download
              className="button button--flex bg-blue-600 text-white py-2 px-4 rounded-md flex items-center hover:bg-blue-700 transition duration-300"
            >
              Download CV
              <i className="uil uil-download-alt button__icon ml-2"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
