import React, { useEffect, useState } from 'react';

const ListProduct = () => {
  
  const [allProducts, setAllProducts] = useState([]); // Initialize allProducts as an array

  const fetchInfo = async () => {
    await fetch('http://localhost:4000/allproducts')
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }

  useEffect(() => {
    fetchInfo();
  }, []);
 
  // logic for removing the product

  const remove_product = async (id)=>{
    await fetch('http://localhost:4000/removeProduct', {
       method: 'POST',
       headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
       },
       body:JSON.stringify({id:id})

    })
    await fetchInfo();
  }


  return (
    <div className='p-2 box-border bg-white mb-0 rounded-sm w-full mt-4 sm:m-7 '>
      <h4>Product List</h4>
      <div>
        <table>
          <thead>
            <tr>
              <th className='p-2'>Products</th>
              <th className='p-2'>Title</th>
              <th className='p-2'>Old Price</th>
              <th className='p-2'>New Price</th>
              <th className='p-2'>Category</th> {/* Fixed the table header */}
              <th className='p-2'>Remove</th>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((product, i) => (
              <tr key={i}>
                <td>
                  <img src={product.image} alt="" />
                </td>
                <td>{product.name}</td>
                <td>${product.old_price}</td>
                <td>${product.new_price}</td>
                <td>{product.category}</td>
                <td><div onClick={()=> remove_product(product.id)}>Delete</div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListProduct;
