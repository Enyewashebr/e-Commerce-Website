// import React from 'react'
import { useState } from "react";

const Login = () => {

const [currentState, setCurrentState] = useState('Sign Up');
const onSubmitHandler = async (e) => {
  e.preventDefault();
}


  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96  m-auto mt-14 gap-4 text-[#15a3a8]">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-[#15a3a8]" />
      </div>
      {currentState === 'Login' ? '' :<input
        className="w-full px-3 py-2 border border-[#15a3a8]"
        type="text"
        placeholder="Name"
      required/>}
      <input
        className="w-full px-3 py-2 border border-[#15a3a8]"
        type="email"
        placeholder="Email"
      required/>
      <input
        className="w-full px-3 py-2 border border-[#15a3a8]"
        type="password"
        placeholder="Password"
      required/>
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password?</p>
        {
          currentState === 'Login' ? 
          <p onClick={()=>setCurrentState('Sign Up')} className="cursor-pointer">Create Account</p>
          :<p onClick={()=>setCurrentState('Login')} className="cursor-pointer">Login Here</p>
        }
      </div>
      <button className="bg-[#15a3a8] text-white py-2 px-8 rounded-[5px] mt-4 font-light">{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  );
}

export default Login
