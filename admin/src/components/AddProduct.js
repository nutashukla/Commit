import React, { useState } from 'react'

const AddProduct = () => {
   
    const [image, setImage] = useState(false)
    const [productDetails, setProductDetails] = useState({
        name:"",
        image:"",
        category:"women",
        new_price:"",
        old_price:"",
    })
    const imageHandler = (e)=>{
       setImage(e.target.files[0])
    }

    const changeHandler = (e)=>{
        setProductDetails({...productDetails, [e.target.name]:e.target.value})
    }

    const Add_Product = async ()=>{
        console.log(productDetails);
        let responseData;
        let product = productDetails;
        let formData = new FormData();
        formData.append('product', image);
        await fetch('http://localhost:4000/upload', {
            method: 'POST',
            headers:{
                Accept:'application/json',
            },
            body: formData,
           }).then((resp)=>resp.json()).then((data)=> {responseData = data} )

           if(responseData.success){
            product.image = responseData.image_url
            console.log(product)
            await fetch('http://localhost:4000/addproduct', {
                method: 'POST',
                header: {
                    Accept: 'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(product),
            }).then((resp)=> resp.json()).then((data)=>{
                 data.success?alert('Successfully added'):alert('Upload Failed')
           })
            }
    }

  return (
    <div className='p-8 box-border bg-white w-full rounded-sm mt-4 lg:m-7'>
    <div className='mb-3'>
        <h4 className='font-bold pb-2'>
            Product title:
        </h4>
        <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder=' Type here... ' className='bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md' />

    </div>
    <div className='mb-3'>
        <h4 className='font-bold pb-2'>
            Price:
        </h4>
        <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder=' Type here... ' className='bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md' />

    </div>
    <div className='mb-3'>
        <h4 className='font-bold pb-2'>
            Offer Price:
        </h4>
        <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder=' Type here... ' className='bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md' />

    </div>
    <div className='flex'>
        <h4 className=''>
          Product Category:
        </h4>
        <select value={productDetails.category} onChange={changeHandler}  name='category' id="" className='bg-primary '>
         <option value="men">Men</option>
         <option value="women">Women</option>
         </select>
    </div>
    <div className='m-2 p-2'>
        <label htmlFor="file-input">
        </label>
        <input onChange={imageHandler} type="file" name='image' id="file-input" />
    </div> 
    <button onClick={()=> Add_Product()} className='bg-black text-white h-8 w-28 rounded-full'>Add Product</button>
    </div>
  )
}

export default AddProduct