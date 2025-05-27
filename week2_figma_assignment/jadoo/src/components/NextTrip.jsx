import React from "react";
import trip from "../assets/trip.png";
import destination from "../assets/destination.png";
import paymenent from "../assets/payment.png";
import reach from "../assets/reach.png";

const NextTrip = () => {
  return (
    <div className="flex mx-auto max-w-7xl mt-10 px-4">
      <div className="wrapper flex flex-col lg:flex-row justify-between items-center w-full gap-10">
        
        {/* Left Part */}
        <div className="left-part flex-1 flex flex-col">
          <h2 className="text-[#5E6282] text-sm sm:text-base">Easy and Fast</h2>
          <h1 className="main-head mt-3 text-[#181E4B] text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Book your next trip in 3 easy steps
          </h1>

          <div className="flex flex-col gap-6 mt-10 text-[#5E6282]">
            {/* Step 1 */}
            <div className="flex gap-4">
              <img src={destination} className="w-10 h-10 object-contain" alt="destination" />
              <div>
                <h2 className="font-semibold text-base sm:text-lg">Choose Destination</h2>
                <p className="text-sm sm:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <img src={paymenent} className="w-10 h-10 object-contain" alt="payment" />
              <div>
                <h2 className="font-semibold text-base sm:text-lg">Make Payment</h2>
                <p className="text-sm sm:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <img src={reach} className="w-10 h-10 object-contain" alt="reach airport" />
              <div>
                <h2 className="font-semibold text-base sm:text-lg">Reach Airport on Selected Date</h2>
                <p className="text-sm sm:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Part (Image) */}
        <div className="right-part flex-1 flex justify-center lg:justify-end">
          <img
            src={trip}
            className="w-full max-w-[500px] md:max-w-[600px] lg:max-w-[700px] h-auto object-contain"
            alt="trip"
          />
        </div>
      </div>
    </div>
  );
};

export default NextTrip;
