import { useState, useEffect } from "react";
import LazyImage from "./LazyImage"; // Adjust path as needed

const Hero = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched JSON:", data);
        setImages(data.images || []);
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <header className="text-white py-10 px-4 md:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Image Section */}
        <div className="flex-1 flex justify-center ">
          {images.length > 0 &&
            images.map((img) => (
              <div
                className="p-6 bg-gray-400 rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300"
                key={img.id}
              >
                <LazyImage
                  //   key={img.id}
                  src={img.src}
                  alt={img.alt}
                  className="w-64 h-64"
                  placeholderClassName="w-64 h-64"
                />
              </div>
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
