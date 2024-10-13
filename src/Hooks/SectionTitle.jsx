const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
      <p className="text-lg text-gray-500">{subTitle}</p>
    </div>
  );
};

export default SectionTitle;
