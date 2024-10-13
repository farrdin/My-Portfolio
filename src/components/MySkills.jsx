import SectionTitle from "../Hooks/SectionTitle";

const MySkills = () => {
  return (
    <section id="skills" className="skills section py-12 bg-gray-50">
      <SectionTitle title="My Skills" subTitle="Technical Proficiencies" />
      <div className="skills__container container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Example Skill Cards */}
        <div className="skills__card flex items-center p-4 bg-white rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
          <i className="uil uil-brackets-curly skills__icon text-3xl text-blue-600 mr-4"></i>
          <div>
            <h3 className="skills__name text-xl font-semibold text-gray-800">
              JavaScript
            </h3>
            <p className="skills__category text-gray-500">
              Programming Language
            </p>
          </div>
        </div>

        <div className="skills__card flex items-center p-4 bg-white rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
          <i className="uil uil-react skills__icon text-3xl text-blue-600 mr-4"></i>
          <div>
            <h3 className="skills__name text-xl font-semibold text-gray-800">
              React
            </h3>
            <p className="skills__category text-gray-500">JavaScript Library</p>
          </div>
        </div>

        <div className="skills__card flex items-center p-4 bg-white rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
          <i className="uil uil-nodejs skills__icon text-3xl text-blue-600 mr-4"></i>
          <div>
            <h3 className="skills__name text-xl font-semibold text-gray-800">
              Node.js
            </h3>
            <p className="skills__category text-gray-500">JavaScript Runtime</p>
          </div>
        </div>

        <div className="skills__card flex items-center p-4 bg-white rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
          <i className="uil uil-database skills__icon text-3xl text-blue-600 mr-4"></i>
          <div>
            <h3 className="skills__name text-xl font-semibold text-gray-800">
              MongoDB
            </h3>
            <p className="skills__category text-gray-500">
              Database Management
            </p>
          </div>
        </div>

        <div className="skills__card flex items-center p-4 bg-white rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
          <i className="uil uil-css3 skills__icon text-3xl text-blue-600 mr-4"></i>
          <div>
            <h3 className="skills__name text-xl font-semibold text-gray-800">
              CSS
            </h3>
            <p className="skills__category text-gray-500">Styling Language</p>
          </div>
        </div>

        <div className="skills__card flex items-center p-4 bg-white rounded-lg shadow-lg transition duration-300 hover:shadow-xl">
          <i className="uil uil-html5 skills__icon text-3xl text-blue-600 mr-4"></i>
          <div>
            <h3 className="skills__name text-xl font-semibold text-gray-800">
              HTML
            </h3>
            <p className="skills__category text-gray-500">Markup Language</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MySkills;
