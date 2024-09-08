import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({product}) => {
  return (
   <>
  <Link to={`/Single/${product.id}`}>
  <div className="flex px-3 py-3">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={product.productImage} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{product.productName}</div>
            <p className="text-gray-700 text-base">
               {product.productDescription}
            </p>
        </div>
        <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{product.productBrand}</span>
        </div>
    </div>
</div>
  </Link>
   </>
  )
}

export default Card