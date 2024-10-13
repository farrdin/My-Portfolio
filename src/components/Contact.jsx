const Contact = () => {
  // Static contact information
  const contactInformation = [
    {
      icon: "uil uil-phone",
      title: "Call Me",
      subtitle: "+123 456 789",
    },
    {
      icon: "uil uil-envelope",
      title: "Email",
      subtitle: "example@example.com",
    },
    {
      icon: "uil uil-map-marker",
      title: "Location",
      subtitle: "1234 Street Name, City, Country",
    },
  ];

  const title = "Get in Touch";
  const subTitle = "I'd love to hear from you";

  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-lg text-gray-600 mt-2">{subTitle}</p>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {/* Contact Information */}
        <div className="flex flex-col space-y-6">
          {contactInformation.map((info, index) => (
            <div key={index} className="flex items-center">
              <i className={`${info.icon} text-4xl text-blue-500 mr-4`}></i>
              <div>
                <h3 className="text-xl font-semibold">{info.title}</h3>
                <span className="text-gray-600">{info.subtitle}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <form
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="grid grid-cols-1 gap-6 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="user_name"
                className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm"
                placeholder="name@gmail.com"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows={4}
              name="message"
              className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
