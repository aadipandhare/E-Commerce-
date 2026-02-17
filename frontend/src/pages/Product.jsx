import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets.js";
import {RelatedProducts} from '../components/RelatedProducts'

export const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);

  const { addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size,setSize] = useState('')

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id || item.id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      
      {/* PRODUCT DATA */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        
        {/* Product Small Images */} 
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
        <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
          {productData.image.map((item, index) => (
            <img
              onClick={() => setImage(item)}
              src={item}
              key={index}
              className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              alt=""
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="w-full sm:w-[80%]">
          <img className="w-full h-auto" src={image} alt="" />
        </div>

      </div>

      {/* PRODUCT INFO */}
      <div className="flex-1">
        <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>

        <div className="flex items-center gap-1 mt-2">
          <img src={assets.star_icon} alt="" />
          <img src={assets.star_icon} alt="" />
          <img src={assets.star_icon} alt="" />
          <img src={assets.star_icon} alt="" />
          <img src={assets.star_dull_icon} alt="" />
          <p className="pl-2">122</p>
        </div>

        <p className="mt-2 text-3xl font-medium">
          {currency}{productData.price}
        </p>

        <p className="mt-2 text-gray-500 md:w-4/5">{productData.description}</p>

        {/* SIZE SECTION */}
        <div className="flex flex-col gap-4 my-8">
          <p>Select Size</p>
          <div className="flex gap-2">
            {productData.sizes.map((item, index) => (
              <button onClick={()=>setSize(item)} key={index} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}>{item}</button>
            ))}
          </div>
        </div>

        <button onClick={()=>addToCart(productData.id,size)} className='bg-black text:sm text-white px-8 py-3 active:bg-gray-700'>ADD TO CART</button>
        <hr className='mt-8 sm:w-4/5'/>
        <div className='text:sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days</p>
        </div>


        </div>
      </div>


      {/* *******Description & Review Section ********/}
        <div className='mt-8'>
          <div className='flex'>
            <b className='border px-5 py-3 text:sm'>Description</b>
            <p className='border px-5 py-3 text:sm'>Review</p>
          </div>

          <div className='flex flex-col gap-4 border px-6 py-4 text-sm text-gray-500'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quis facilis maiores sapiente aliquam in molestias odio, quo delectus nobis veniam culpa. Culpa, amet explicabo! Quam quos laborum natus quisquam.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia soluta, ullam, totam debitis blanditiis obcaecati accusamus eligendi quis sit unde, consequatur id voluptate quo officiis ea ut necessitatibus eius veniam.</p>
          </div>
        </div>


{/* Related Products */}

       <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>   
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};
