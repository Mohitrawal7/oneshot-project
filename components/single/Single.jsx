import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from "axios"

const Single = () => {
const id = useParams().id

const [product,setProduct] = useState([])
const navigate= useNavigate()
const fetchProducts = async () =>{
 const response = await axios.get(`https://66dd1915f7bcc0bbdcdd57cc.mockapi.io/products/${id}`)
    if(response.status == 200){
        setProduct(response.data)
    }
}
const deleteMe = async() =>{
  const response = await axios.delete(`https://66dd1915f7bcc0bbdcdd57cc.mockapi.io/products/${id}`)
  if(response.status == 200){
    navigate("/")
  } else{
    alert("Delete vayena guys")
  }
  console.log(response)
}

useEffect(()=>{
    fetchProducts()
},[])

  return (
    <>
    <Navbar/>

    <div className="bg-gray-100 dark:bg-gray-800 py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img className="w-full h-full object-cover" src={product.productImage} alt="Product Image "/>
                </div>
                <div className="flex -mx-2 mb-4">
                    <div className="w-1/2 px-2">
                        <Link to={`/edit/${product.id}`}>
                         <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Edit</button>
                        </Link>
                    </div>
                    <div className="w-1/2 px-2">
                        <button onClick={deleteMe}  className="w-full bg-gray-200 dark:bg-red-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-red-600">Delete</button>
                    </div>
                </div>
            </div>
            <div className="md:flex-1 px-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{product.productName}</h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {product.productDescription}
                </p>
                <div className="flex mb-4">
                    <div className="mr-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                        <span className="text-gray-600 dark:text-gray-300">${product.productPrice}</span>
                    </div>
                    <div>
                        <span className="font-bold text-gray-700 dark:text-gray-300">Category:</span>
                        <span className="text-gray-600 dark:text-gray-300">{product.productCategory} </span>
                    </div>
                    <div>
                        <span className="font-bold text-gray-700 dark:text-gray-300">Brand:</span>
                        <span className="text-gray-600 dark:text-gray-300">{product.productBrand} </span>
                    </div>
                </div>
     
            </div>
        </div>
    </div>
</div>


    </>
  )
}

export default Single