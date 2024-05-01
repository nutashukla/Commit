import React from 'react'
import { NavLink } from 'react-router-dom'

const Hero = () => {
  return (
    <section>
        <div className=''>
        <div className='absolute opacity-55 mt-56 ml-[33%]  text-white  '>
            <h1 className='text-6xl'>Tailored To Impower</h1>
            </div>
            <div className='absolute opacity-55 mt-80 ml-[45%]  text-white  '>
            <NavLink to={''}><button className='text-xl '>Shop now</button></NavLink>
            </div>
        <div className=''>
         <img className='' src="bg.JPG" alt="" />
        </div>
        </div>
    </section>
  )
}

export default Hero