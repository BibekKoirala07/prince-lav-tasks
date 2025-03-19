const Tagline = () => {
  return (
    <div className="bg-blue-50 relative rounded-lg h-[300px] text-center">
      <h2 className="text-gray-800 absolute top-12 z-10 left-2/5 font-bold text-3xl text-nowrap   lg:text-4xl mb-1">
        Building the future
      </h2>
      <img src="/original.jpg" className="absolute h-full w-full" alt="" />
    </div>
  );
};

export default Tagline;
