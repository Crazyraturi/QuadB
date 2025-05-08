import React from 'react'
import Products from '../components/Products'

const Home = () => {
  return (
    <div className=' flex w-[88%] volkhov m-auto flex-col ' >
    <h2 className='text-2xl  text-green-600'>welcome, to Redux Toolkit Store.</h2>

    <section className='mt-5'>
      <h3 className='text-xl uppercase text-violet-600'>Products:</h3>
    <Products/>
     
    </section>
    </div>
  )
}

export default Home