import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import axios from "axios"
import Card from '../Card'

const Home = () => {
  const [products,setProducts] = useState([]);
  const fetchProducts = async () =>{
    const response = await axios.get('https://66dd1915f7bcc0bbdcdd57cc.mockapi.io/products')
   if(response.status == 200 ){
    setProducts(response.data)
   }
  }

useEffect(()=>{
fetchProducts()
},[])

console.log(products)
  return (
    <>
  <Navbar/>
<div className="lg:flex  flex-wrap justify-evenly pt-20 ">
{
  products.map((product)=>{
 return (
  <Card product={product} />
 )
  })
}

 </div>
    </>
  )
}

export default Home