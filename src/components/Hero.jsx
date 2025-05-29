import React from "react";
import images from "../assets/images.json";

const Hero = () => {
  return (
    <header className="text-white py-10 px-4 md:px-16">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          {images.map((img) => (
            <img
              key={img.id}
              src={img.src}
              alt={img.alt}
              className="w-64 h-64 object-cover rounded-full shadow-lg"
            />
          ))}
        </div>
        {/* Text Section */}
        <div className="flex-1 space-y-4">
          <h4 className="text-sm text-gray-400 uppercase tracking-wider">
            Web Developer
          </h4>
          <h1 className="text-3xl md:text-5xl font-bold">Emmanuel Nwankwo</h1>
          <p className="text-gray-300 text-base leading-relaxed max-w-xl">
            I am a web developer with a passion for creating beautiful and
            functional websites. I specialize in front-end development, but I
            also have experience with back-end technologies.
          </p>
          <div className="flex gap-4 pt-4 justify-center">
            <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition">
              Download CV
            </button>
            <button className="border border-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-black transition">
              Contact
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
