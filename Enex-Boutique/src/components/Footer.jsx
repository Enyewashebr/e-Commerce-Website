// import React from 'react'
import {assets} from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="bg-[rgb(195,195,210)]">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div>
          <img src={assets.logo3} className="mb-5 w-16" alt="" />
          <p className="w-full md:w-2/3 text-[#15a3a8]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos ipsa
            officiis ex, inventore reiciendis quia?
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 text-[#15a3a8]">COMPANY</p>
          <ul className="flex flex-col gap-1 text-[#10bfc5] cursor-pointer">
            <li ><Link to="/">Home</Link></li>
            <li><Link to="/about">About us </Link></li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 text-[#10bfc5]">
            GET IN TOUCH
          </p>
          <ul className="flex flex-col gap-1 text-[#10bfc5] cursor-pointer text-sm">
            <li><a>+251948006098</a></li>
            <li>contact@enexiboutique.com</li>
          </ul>
        </div>
      </div>
      <div >
        <hr className='border-[#15a3a8]'/>
        <p className="py-5 text-sm text-center">
          Copyright 2024@enexboutique.com -All Right Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer

