// import React from 'react'

import CartTotal from "../components/CartTotal";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {

const [method, setMethod] = useState('cod')
const {navigate} = useContext(ShopContext)


  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t ">
      {/* ....Left side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY "} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-[#0ce6e6] rounded py-1.5 px-3.5 w-full "
            type="text"
            placeholder="First name"
          />
          <input
            className="border border-[#0ce6e6] rounded py-1.5 px-3.5 w-full "
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          className="border border-[#0ce6e6] rounded py-1.5 px-3.5 w-full "
          type="email"
          placeholder="Email address"
        />
        <input
          className="border border-[#0ce6e6] rounded py-1.5 px-3.5 w-full "
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            className="border border-[#0ce6e6] rounded py-1.5 px-3.5 w-full "
            type="text"
            placeholder="City"
          />
          <input
            className="border border-[#0ce6e6] rounded py-1.5 px-3.5 w-full "
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-[#0ce6e6] rounded py-1.5 px-3.5 w-full "
            type="number"
            placeholder="Zipcode"
          />
          <input
            className="border border-[#0ce6e6] rounded py-1.5 px-3.5 w-full "
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          className="border border-[#0ce6e6] rounded py-1.5 px-3.5 w-full "
          type="number"
          placeholder="Phone"
        />
      </div>

      {/* ...Right Side.... */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT "} text2={"METHOD"} />
          {/* ....Payment Method Selection.... */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("strip")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "strip" ? "bg-green-400" : ""
                }`}
              ></p>
              <img src={assets.stripe_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "razorpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img src={assets.razorpay_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-[#057a81aa] text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
            <div
              onClick={() => setMethod("telebir")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "telebir" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="w-30 h-10" src={assets.telebir_logo} alt="" />
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button onClick={()=>{navigate("/orders")}} className="bg-[#02c0c7] text-white px-16 py-3 text-sm rounded-[20px] active:bg-[#afeaed]">PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder

