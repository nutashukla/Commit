import React from 'react'
import all_products from "../assets/all_products"
import Item from '../components/Item'

const Category = ({category, banner}) => {
  return (
    <section className='py-12 xl:py-28'>
      <div>
        <div>
          <img src={banner} alt="" className='block my-7 mx-auto' />
        </div>
        <div className=''>
          <h5><span>Showing 1-12 out of 36 products</span> </h5>
        </div>
        <div className='flex'>
         {all_products.map((item) => {
          if(category === item.category){
            return <Item key={item.id} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
              
          }
        })} 
        </div>
      </div>
    </section>
  )
}

export default Category