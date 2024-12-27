// import React from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets';
import { products } from '../assets/assets';

const Product = () => {

const {productId} = useParams();
const {Products, currency} =useContext(ShopContext);
const [productData, setProductData] = useState(false);
const [image, setImage] = useState('');
const [size, setSize] = useState('');

const fetchProductData = async () => {
  products.map((item)=>{
    if (item._id===productId) {
      setProductData(item)
      setImage(item.image[0])
      return null
    }
  })
}

useEffect(() => {
  fetchProductData();
}, [productId, Products])

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className=" flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product Image */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row justify-between ">
          <div className="flex sm:flex-col overflow-x-auto overflow-y-scroll   justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3  flex-shrink-0  cursor-pointer"
                src={item}
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="font-semibold text-2xl mt-2">{productData.name}</h1>
          <div className="flex gap-1 mt-2 items-center">
            <img className="w-3.5" src={assets.star_icon} alt="" />
            <img className="w-3.5" src={assets.star_icon} alt="" />
            <img className="w-3.5" src={assets.star_icon} alt="" />
            <img className="w-3.5" src={assets.star_icon} alt="" />
            <img className="w-3.5" src={assets.star_dull_icon} alt="" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency} {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p className="font-semibold ">Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-[#9de3e6] ${
                    size === item ? "border-orange-500" : ""
                  } `}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button className="bg-[#04a6ab] py-3  text-white px-8 text-sm active:bg-[#9de3e6] ">
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* .....Description and Reviews....... */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 text-sm text-gray-500'>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae nesciunt beatae esse dolor ea, sapiente facere, sit magni atque debitis magnam quidem molestias quae dignissimos hic. Vero temporibus libero perspiciatis?</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores cum fugit unde corporis similique expedita, distinctio vero sequi pariatur dignissimos officia voluptate laudantium autem totam inventore ad amet ratione. Autem.</p>
        </div>
      </div>
      {/* ......Display related products...... */}
      
    </div>
  ) : (
    <div className="opacity-0 "></div>
  );
}

export default Product