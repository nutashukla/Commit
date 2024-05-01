import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className='p-2 m-6'>
            <NavLink className="p-2 text-xl m-2" to="/">Home</NavLink>
            <NavLink className="p-2 m-2 text-xl" to='/mens'>Men's</NavLink>
            <NavLink className="p-2 m-2 text-xl"to='/womens'>Women's</NavLink>

        </nav>
    </div>
  )
}

export default Navbar