import React from "react";
import { testimonials } from "../assets/data";

const Testimonial = () => {
  return (
    <div>
      <section className="text-white py-16 px-4 md:px-16">
        <div className="pb-14">
          <h2 className="text-start text-2xl font-bold">Testimonials</h2>
          <div className=" bg-white w-35 rounded-full">
            <div className="border border-blue-600 w-10 rounded-full"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {testimonials.map(({ id, name, feedback, image, company }) => (
            <div
              key={id}
              className="flex flex-col relative p-6 border border-gray-300 rounded-md "
            >
              <img
                src={image}
                alt={name}
                className="w-16 h-16 rounded-full object-cover absolute -top-6 -left-3.5"
              />
              <div className="ml-20 text-start">
                <p className="mt-2 text-gray-300">{feedback}</p>
                <h3 className="text-sm text-white font-semibold">{name}</h3>
                <p className="text-gray-500 text-xs">{company}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
