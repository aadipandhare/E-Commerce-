import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Title } from "../components/Title";
import { assets } from "../assets/assets";
import { CartTotal } from './../components/CartTotal';

export const Cart = () => {

  const { cartItems, products, currency, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  // Convert cartItems object → array
  useEffect(() => {
    const tempData = [];

    for (const productId in cartItems) {
      for (const size in cartItems[productId]) {
        if (cartItems[productId][size] > 0) {
          tempData.push({
            id: productId,
            size: size,
            quantity: cartItems[productId][size],
          });
        }
      }
    }

    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="pt-14 border-t">

      {/* TITLE */}
      <div className="text-2xl mb-6">
        <Title text1="YOUR" text2="CART" />
      </div>

      {/* CART ITEMS */}
      <div className="flex flex-col gap-4">

        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product.id === item.id
          );

          if (!productData) return null;

          return (
            <div
              key={index}
              className="
                py-4 border-t border-b text-gray-700 
                grid grid-cols-[1fr_3fr_1fr_0.5fr]
                sm:grid-cols-[1fr_4fr_1fr_0.5fr]
                items-center gap-4
              "
            >

              {/* PRODUCT IMAGE */}
              <img
                className="w-16 sm:w-20"
                src={productData.image[0]}
                alt={productData.name}
              />

              {/* PRODUCT DETAILS */}
              <div className="flex flex-col gap-2">
                <p className="text-sm sm:text-lg font-medium">
                  {productData.name}
                </p>

                <div className="flex items-center gap-4 text-sm">
                  <p>{currency}{productData.price}</p>
                  <p className="px-2 py-1 border bg-slate-50">
                    {item.size}
                  </p>
                </div>
              </div>


              {/* REMOVE ICON */}
              <input onChange={(e)=> e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item.id,item.size,Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number" />
              <img onClick={()=>updateQuantity(item.id,item.size,0)} className="w-4 sm:w-5 cursor-pointer" src={assets.bin_icon} alt="Remove item"
              />

            </div>
          );
        })}
      </div>

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
             <CartTotal/>
             <div className='w-full text-end py-2'>
                <button onClick={()=> navigate('/placeorder')}className='bg-black text-white text-sm py-3 px-8 cursor-pointer'>PROCEED TO PAY</button>
             </div>
        </div>
          
      </div>
       


    </div>
  );
};
