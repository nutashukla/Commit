import React from 'react'
import Navbar from './Navbar'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between'>
        <div>
           <Link to="/"> <h1 className='text-5xl m-2 p-2 '>𝖓𝖎𝖈𝖆</h1> </Link>
        </div>
        <Navbar/>
        <div className="p-6 m-2 text-xl">
           <NavLink className="m-2" to={'cart'}>Cart</NavLink>
           <NavLink className="m-2  text-white h-10 w-[20%] bg-slate-400" to={'login'}>Login</NavLink>
        </div>
    </div>
  )
}

export default Header