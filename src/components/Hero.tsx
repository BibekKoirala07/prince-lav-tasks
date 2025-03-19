const NetworkDiagram = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    className="w-full h-full"
  >
    <circle cx="20" cy="20" r="5" fill="black" />
    <circle cx="50" cy="20" r="5" fill="black" />
    <circle cx="80" cy="20" r="5" fill="black" />
    <circle cx="35" cy="50" r="5" fill="black" />
    <circle cx="65" cy="50" r="5" fill="black" />
    <circle cx="20" cy="80" r="5" fill="black" />
    <circle cx="50" cy="80" r="5" fill="black" />
    <circle cx="80" cy="80" r="5" fill="black" />
    <line x1="20" y1="20" x2="50" y2="20" stroke="black" strokeWidth="2" />
    <line x1="50" y1="20" x2="80" y2="20" stroke="black" strokeWidth="2" />
    <line x1="20" y1="20" x2="35" y2="50" stroke="black" strokeWidth="2" />
    <line x1="50" y1="20" x2="35" y2="50" stroke="black" strokeWidth="2" />
    <line x1="50" y1="20" x2="65" y2="50" stroke="black" strokeWidth="2" />
    <line x1="80" y1="20" x2="65" y2="50" stroke="black" strokeWidth="2" />
    <line x1="35" y1="50" x2="20" y2="80" stroke="black" strokeWidth="2" />
    <line x1="35" y1="50" x2="50" y2="80" stroke="black" strokeWidth="2" />
    <line x1="65" y1="50" x2="50" y2="80" stroke="black" strokeWidth="2" />
    <line x1="65" y1="50" x2="80" y2="80" stroke="black" strokeWidth="2" />
  </svg>
);

const Hero = () => {
  return (
    <div className="bg-gray-100 rounded-lg m-2 p-4 md:p-6 lg:p-10 relative overflow-hidden min-h-48 md:min-h-64">
      <div className="inline-block bg-red-600 text-white font-bold px-2 py-1 rounded text-sm mb-4">
        YouTube video
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 my-4">
          <NetworkDiagram />
        </div>
      </div>
    </div>
  );
};

export default Hero;
