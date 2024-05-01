import React from 'react'


const Navbar = () => {
  return (
    <nav className=' bg-slate-400 flex justify-between  p-2'>
        <div>
            <h1 className='text-3xl text-white'>nica</h1>
        </div>
        <div className='text-3xl text-white h-12 w-48 rounded-md justify-center opacity-55 bg-slate-600'> Admin pannel</div>
        <div><img src="bg.JPG" alt="" className='h-12 w-12 rounded-full' /></div>
    </nav>
  )
}

export default Navbar