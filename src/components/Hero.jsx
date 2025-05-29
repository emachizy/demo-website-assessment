import React from "react";

const Hero = () => {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center justify-between p-4">
        <img src="" alt="" />
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h4 className="text-gray-500 text-sm">Web developer</h4>
          <h1 className="text-2xl text-white font-bold">Emmanuel Nwankwo</h1>
          <p>
            I am a web developer with a passion for creating beautiful and
            functional websites. I specialize in front-end development, but I
            also have experience with back-end technologies.
          </p>
        </div>
        <div className="flex justify-center ">
          <button>Download CV</button>
          <button>Contact</button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
