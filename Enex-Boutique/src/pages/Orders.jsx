// import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'

const Orders = () => {

const {products,  currency} = useContext(ShopContext)



  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"MY "} text2={"ORDERS"} />
      </div>
      <div>
        {products.slice(1, 4).map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:justify-between md:items-center gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img className="w-16 sm:w-20" src={item.image[0]} alt="" />
              <div>
                <p className=" font-medium sm:text-base">{item.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-600">
                  <p className="text-lg">
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                </div>
                <p className="mt-2">
                  Date: <span className="text-gray-400">29,Dec, 2024</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-[#00ADB4]"></p>
                <p>Ready To Ship</p>
              </div>
              <button className="bg-[#02c0c7] text-white px-7 py-2 text-sm rounded-[10px] active:bg-[#afeaed]">Track Order</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders
