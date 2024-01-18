"use client"
import React from 'react'
import Image from 'next/image'



const InputItem = ({type}) => {
  return (
    <div className='bg-slate-200 p-3 rounded-lg mt-3 flex gap-4 items-center '>

        <Image src={type =="source"?"/location.png":"/dest.png"} width={15} height={15} autoComplete="address-line1"/>
     

        <input type="text" placeholder={type=="source"?'Pickup Location':"Dropoff Location"} className='bg-transparent w-full outline-none'/>
     
        {/* <SearchBox accessToken={"pk.eyJ1IjoibmlzaGFudGgyMzA4IiwiYSI6ImNsaG45NXppbjFkcHkzcm94ZzA4YTcyaHEifQ.fsXhCELfT7dnyxghnDS4Kg"} /> */}
    </div>
    
  )
}

export default InputItem