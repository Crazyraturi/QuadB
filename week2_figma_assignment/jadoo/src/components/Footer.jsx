import React from 'react'
import playstore from '../assets/playstore.png'

const Footer = () => {
  return (
    <div>


<footer class="bg-white text-[#5E6282] mt-20 ">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <h2 href="#" class="flex items-center">

                  <span class="self-center text-4xl  [color:#181E4B] font-semibold whitespace-nowrap e">Jadoo.</span>
              </h2>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold  uppercase  [color:#181E4B]">Company</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline">About</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Mobile</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold  [color:#181E4B] uppercase e">contact</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline ">Help/FAQ</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Press</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Affilates</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold [color:#181E4B] uppercase">More</h2>
                  <ul class="text-gray-500 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Airlinefees</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Airline</a>
                      </li><li>
                      <li>
                          
                          <a href="#" class="hover:underline">Low fare tips</a>
                      </li>
                      </li>
                  </ul>
              </div>
          </div>

          <img src={playstore} width={"300px"} alt="playstore" />
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="flex items-center justify-between">
          <span class=" flex items-center justify-center text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="#" class="hover:underline">&nbsp; jadoo™</a>. All Rights Reserved.
          </span>
          
      </div>
    </div>
</footer>

    </div>
  )
}

export default Footer