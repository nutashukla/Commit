import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className=' m-2 p-2 shadow-md w-56 h-56'>
    <div className='text-3xl m-2 p-2 mt-4 text-purple-500'>
        <Link to="/addproduct">
            <button>Add Product</button>
        </Link>
    </div >
    <div className='text-3xl m-2 p-2 mt-4 text-purple-500'>
             <Link to="/listproduct">
                <button>Product List</button>
                </Link>  
    </div>
    </div>
  )
}

export default Sidebar