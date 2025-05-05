import React from 'react'
import testemonial from '../assets/testemonial.png'

const Testinomials = () => {
  return (
    <div className="flex items-center justify-center  mx-auto mt-5  px-4">
      <div className="flex justify-between  w-full max-w-7xl gap-8">
         <div className="flex flex-col flex-1 gap-4 leading-2   ">
          <h2 className="text-[#5E6282] p-2 uppercase">Testimonials</h2>
          <h1 className="main-head text-6xl leading-17 text-[#181E4B]">
            What people say about Us.
          </h1>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <img src={testemonial} alt="testimonial" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  )
}

export default Testinomials
