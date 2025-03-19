import React from "react";

const Footer = () => {
  return (
    <div className="relative m-2 rounded-lg overflow-hidden">
      <img
        src="/nature.jpg"
        alt="Nature inspiration scene"
        className="h-[500px] w-full object-cover z-40 block"
      />
      <div className="absolute inset-0 bg-gray  bg-opacity-90 text-white flex flex-col justify-center items-center text-center p-5">
        <h3 className="text-xl md:text-2xl lg:text-3xl mb-2">
          Every inspiration from nature
        </h3>
        <p className="text-sm md:text-base mb-4">
          Get started today for updates with a strong next step
        </p>
        <button className="bg-black text-white px-4 py-2 rounded-full text-sm">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Footer;
