import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Form from '../form.jsx'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Edit = () => {
  const id = useParams().id;
  const [product,setProduct] = useState({})
  const fetchProducts = async()=>{
 const response = await axios.get('https://66dd1915f7bcc0bbdcdd57cc.mockapi.io/products/' + id)
 if(response.status == 200){
  setProduct(response.data)
 }  
}
useEffect(()=>{
  fetchProducts()
},[])

return (
    <>
    <Navbar/>
    <Form  type="edit" product={product}  />
    </>
     )
}

export default Edit