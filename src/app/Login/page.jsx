'use client'

import React from 'react'
import funlogin from "@/app/CheckLogin.jsx";

console.log(funlogin());
const page = () => {
  return (
    <div>
        {!funlogin() ?  <LoginDiv/> : "false"}
    </div>
  )
}


function LoginDiv() {
    return (
      <>
        <div className="md:w-[50%] w-[90%] mx-auto py-10">
          <div className="border-4 border-black rounded-3xl grid justify-center bg-[#169385]">
            <h1 className="text-4xl justify-self-center text-white">Login</h1>
  
            <h1 className="justify-self-start text-xl p-2 text-white">Email/PhoneNumber:</h1>
            <input className="border-2 rounded-lg border-black" placeHolder="eg.example@gmail.com" required></input>
  
            <h1 className="justify-self-start text-xl p-2 text-white">Password:</h1>
            <input className="border-2 rounded-lg border-black" type="password"></input>
  
            <div className="grid">
              <button className="bg-blue-700 p-2 px-6 m-4 rounded-xl text-white justify-self-center text-lg border-2" >Login</button>
            </div>
          </div>
        </div>
      </>
    );
  }

export default page