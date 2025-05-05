import React from 'react'
import telygram from "../assets/telygram.png"

const NewsLetter = () => {
  return (
    <div className='items-center flex justify-center mt-20 relative '>

        <img src={telygram} alt="telygram" width={"80px"} className='absolute top-0 right-60' />
        <section class=" w-[70%] mt-5   bg-[#dfdce9] rounded-tl-4xl rounded-2xl rounded-br-3xl">
  <div class="py-8 px-4 mx-auto max-w-screen-xl  lg:py-16 lg:px-6 ">
      <div class="mx-auto max-w-screen-md sm:text-center ">
          <h2 class="mb-4 text-2xl  text-[rgb(94,98,130)]  sm:text-3xl ">Subscribe to get information, latest news and other
          interesting offers about Jadoo</h2>
         
          <form action="#">
              <div class="items-center mx-auto mb-3 mt-20 space-y-4 gap-5 max-w-screen-sm sm:flex sm:space-y-0">
                  <div class="relative w-full">
                      <label for="email" class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                      <div class=" flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg class="w-7 h-7 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                      </div>
                      <input class="block p-3  pl-15 h-15  font-xl w-full text-[#5E6282] bg-gray-50 rounded-lg  sm:rounded-lg focus:ring-primary-500 focus:border-primary-500  border-none  dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required=""/>
                  </div>
                  <div>
                      <button type="submit" class="py-3 px-5 w-full text-sm  text-center  rounded-lg cursor-pointer  border-primary-600  h-15  sm:rounded-lg    bg-gradient-to-r text-white font-bold from-[#FF946D] to-[#FF7D68] ">Subscribe</button>
                  </div>
              </div>
              
          </form>
      </div>
  </div>
</section>

    </div>
  )
}

export default NewsLetter