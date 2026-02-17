import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import {products} from '../assets/assets.js'

export const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} className="block text-gray-700 cursor-pointer"
    >
      {/* Image wrapper with fixed aspect ratio */}
      <div className="overflow-hidden ">
        <img
          className="object-cover w-full h-full hover:scale-110 transition ease-in-out"
          src={Array.isArray(image) ? image[0] : image}
          alt={name}
        />
      </div>

      {/* Product Info */}
      <p className="pt-3 pb-1 text-sm truncate">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};


// import React,{ useContext} from 'react'
// import {ShopContext} from '../context/ShopContext'
// import {Link} from 'react-router-dom'


// // product fiching logic
// export const ProductItem = ({id,image,name,price}) => {

//     const {currency} = useContext(ShopContext);
//   return (
//     <>
//         <Link className='text-gray-700 cursor-pointer' to={`/products/${id}`}></Link>
//         <div className='overflow-hidden'>
//             <img className='hover:scale-110 transition ease-in-out' src={Array.isArray(image) ? image[0] : image}alt="" /> 
//             {/* src={image[0]} */}
//         </div>
//         <p className='pt-3 pb-1 text-sm'>{name}</p>
//         <p className='text-sm font-medium'>{currency}{price}</p>
//     </>
    
//   )
// }
