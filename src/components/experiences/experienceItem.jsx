const ExperienceItem = ({ title, description, date, company, position }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between">
      {/* LEFT */}
      {position === 'left' ? (
        <>
          <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
              {title}
            </div>
            <div className="p-3 text-sm italic">
              {description}
            </div>
            <div className="p-3 text-sm text-red-400 font-semibold">
              {date}
            </div>
            <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
              {company}
            </div>
          </div>
          <div className="hidden lg:flex lg:w-1/6 justify-center">
            <div className="w-1 h-full bg-gray-600 rounded relative">
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
            </div>
          </div>
          <div className="w-full lg:w-1/3"></div>
        </>
      ) : (
        <>
          <div className="w-full lg:w-1/3"></div>
          <div className="hidden lg:flex lg:w-1/6 justify-center">
            <div className="w-1 h-full bg-gray-600 rounded relative">
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
              {title}
            </div>
            <div className="p-3 text-sm italic">
              {description}
            </div>
            <div className="p-3 text-sm text-red-400 font-semibold">
              {date}
            </div>
            <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
              {company}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ExperienceItem;
