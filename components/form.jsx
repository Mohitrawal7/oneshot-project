import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Form = ({type,product}) => {
const id = useParams().id
console.log(id)
const navi = useNavigate()

const [data,setData] = useState({})
const fetchProducts = async()=>{
    const response = await axios.get('https://66dd1915f7bcc0bbdcdd57cc.mockapi.io/products/' + id)
    if(response.status == 200){
     setData(response.data)
    }  
   }
   
   useEffect(()=>{
    if(type=="edit"){
     fetchProducts()
    }
   },[])
   

const handleChange =(e)=>{
const{name,value} = e.target
console.log(value,name)
setData({
...data,
[name]:value
})

}

const createProduct = async (e)=>{
 e.preventDefault()
 if(type === 'create'){
 const response =  await axios.post('https://66dd1915f7bcc0bbdcdd57cc.mockapi.io/products',data)
    if(response.status == 201){
       navi("/") 
    } else{
        alert("Create na bhayo la ")
    }
} else {
    const response =  await axios.put('https://66dd1915f7bcc0bbdcdd57cc.mockapi.io/products/'+id,data)
    console.log(response)
    if(response.status == 200){
        navi("/single/"+id) 
     } else{
         alert("Create na bhayo la ")
     }
}
}

  return (
  <>
  <div className="bg-white  border-4 rounded-lg shadow relative m-10">

<div className="flex items-start justify-between p-5 border-b rounded-t">
    <h3 className="text-xl font-semibold">
      {type} product
    </h3>
    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-toggle="product-modal">
       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
</div>

<div className="p-6 space-y-6">
    <form action="#" onSubmit={createProduct}>
        <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
                <label for="product-name" className="text-sm font-medium text-gray-900 block mb-2">Product Name</label>
                <input type="text" name="productName"  id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Apple Imac 27”" required="" value={data.productName} onChange={handleChange} />
            </div>
            <div className="col-span-6 sm:col-span-3">
                <label for="category" className="text-sm font-medium text-gray-900 block mb-2">Category</label>
                <input type="text" name="productCategory"  id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Electronics" required="" value={data.productCategory}  onChange={handleChange}  />
            </div>
            <div className="col-span-6 sm:col-span-3">
                <label for="brand" className="text-sm font-medium text-gray-900 block mb-2">Brand</label>
                <input type="text" name="productBrand" id="brand" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Apple" required="" value={data.productBrand}  onChange={handleChange}  />
            </div>
            <div className="col-span-6 sm:col-span-3">
                <label for="image" className="text-sm font-medium text-gray-900 block mb-2">Image</label>
                <input type="text" name="productImage"  id="brand" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="https://example.com/hello.png" required=""  value={data.productImage} onChange={handleChange}  />
            </div>
            <div className="col-span-6 sm:col-span-3">
                <label for="price" className="text-sm font-medium text-gray-900 block mb-2">Price</label>
                <input type="number" name="productPrice"  id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="$2300" required=""  value={data.productPrice} onChange={handleChange}  />
            </div>
            <div className="col-span-full">
                <label for="product-details" className="text-sm font-medium text-gray-900 block mb-2">Product Details</label>
                <textarea id="product-details" name="productDescription"  rows="6" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Details"  value={data.productDescription} onChange={handleChange} ></textarea>
            </div>
        </div>
        <div className="p-6 border-t border-gray-200 rounded-b">
    <button className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit"> {type =="edit" ? "Edit" : "Create"} </button>
</div>
    </form>
</div>


</div>
  </>
  )
}

export default Form