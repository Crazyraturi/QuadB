import React from 'react';
import testemonial from '../assets/testemonial.png';

const Testinomials = () => {
  return (
    <div className="flex items-center justify-center mx-auto mt-5 px-4">
      <div className="flex flex-col lg:flex-row justify-between w-full max-w-7xl gap-8 items-center lg:items-start">
        
        {/* Text Content */}
        <div className="flex flex-col flex-1 gap-4 text-center lg:text-left">
          <h2 className="text-[#5E6282] text-sm sm:text-base uppercase">Testimonials</h2>
          <h1 className="main-head text-[#181E4B] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-snug">
            What people say about Us.
          </h1>
        </div>

        {/* Image */}
        <div className="flex flex-1 items-center justify-center">
          <img
            src={testemonial}
            alt="testimonial"
            className="max-w-full h-auto w-full sm:w-3/4 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Testinomials;
