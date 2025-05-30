import React from "react";
import { services } from "../assets/data";

const WhatIDo = () => {
  return (
    <section className="text-white py-16">
      <div>
        <h2 className="text-start text-2xl font-bold">What I do</h2>
        <div className=" bg-white w-28 rounded-full">
          <div className="border border-blue-600 w-8 rounded-full"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8 px-4 md:px-16">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex gap-4 p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-blue-500 transition-shadow duration-300 mb-4"
          >
            <img src={service.icon} alt={service.title} className="w-12 h-12" />
            <div>
              <h3 className="text-xl font-semibold text-start">
                {service.title}
              </h3>
              <p className="text-gray-400 text-start">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatIDo;
