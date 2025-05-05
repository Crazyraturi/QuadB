import React from "react";
import trip from "../assets/trip.png";
import destination from "../assets/destination.png";
import paymenent from "../assets/payment.png";
import reach from "../assets/reach.png";

const NextTrip = () => {
  return (
    <div className="flex  mx-auto max-w-7xl  mt-10  px-4" >
      <div className="wrapper justify-between items-center flex ">
      <div className="left-part flex-1 flex-col ">
        <h2 className="text-[#5E6282]">Easy and Fast</h2>  
        <h1 className="main-head  mt-3 [color:#181E4B] text-5xl  ">
          Book your next trip in 3 easy steps
        </h1>
        <div className=" flex    flex-col gap-5 mt-10 ">
          <div className="flex [color:#5E6282] gap-5">
            <img src={destination} className="object-contain" width={"40px"} alt="destination" />
            <div>
              <h2 className="font-semibold">choose Destination</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.{" "}
              </p>
            </div>
          </div>

          <div className="flex [color:#5E6282] gap-5">
            <img src={paymenent} className="object-contain" width={"40px"} height={"30px"} alt="destination" />
            <div>
              <h2 className="font-semibold">Make Payment</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.{" "}
              </p>
            </div>
          </div>

          <div className="flex [color:#5E6282] gap-5">
            <img src={reach} className="object-contain" width={"40px"} alt="destination" />
            <div>
              <h2 className="font-semibold">Reach Airport on Selected Date  </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="right-part flex-1 flex justify-end">
        <img src={trip} className="max-w-[700px] w-full"  alt="trip" />
      </div>

      </div>
    </div>
  );
};

export default NextTrip;
