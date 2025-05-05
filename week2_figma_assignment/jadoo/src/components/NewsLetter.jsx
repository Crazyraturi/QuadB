import React from 'react';
import telygram from "../assets/telygram.png";

const NewsLetter = () => {
  return (
    <div className="flex items-center justify-center mt-20 relative px-4">
      {/* Decorative Icon */}
      <img
        src={telygram}
        alt="telygram"
        width="60"
        className="absolute top-0  md:right-70 sm:"
      />

      <section className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mt-5 bg-[#dfdce9] rounded-tl-[80px] rounded-br-[80px] rounded-2xl shadow-md">
        <div className="py-10 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-lg sm:text-2xl md:text-3xl text-[#5E6282] font-semibold leading-relaxed">
              Subscribe to get information, latest news and other interesting offers about Jadoo
            </h2>

            <form action="#" className="mt-10">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {/* Email input */}
                <div className="relative w-full sm:max-w-md">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <svg
                      className="w-6 h-6 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="Enter your email"
                    className="block w-full pl-12 pr-4 py-3 h-14 text-[#5E6282] bg-white rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-[#FF7D68]"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 h-14 text-sm font-bold text-white rounded-lg bg-gradient-to-r from-[#FF946D] to-[#FF7D68] hover:opacity-90 transition"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsLetter;
