"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import InputItem from '@/components/InputItem'
import Link from 'next/link'


const page = () => {

  const [Place,setPlace] = useState();
  const [DPlace,setDPlace] = useState();

  return (
    <div className='  h-screen md:w-9/12 md:ml-28' >
        {/* Button Container */}
        <div className='bg-white px-4 cursor-pointer' onClick={() => window.history.back()}>
          {/* <Link href={"/"}> */}
            <Image src="/Back.png" alt="back" width={40} height={40} />
            {/* </Link> */}
        </div>
        {/* Input Container */}
        <div className='md:ml-28 md:mt-10'>
        <div className='p-2 md:p-5 border-[2px] rounded-xl '>
        <p className='text-[20px] font-bold '>Get a ride</p>
       

        <div className='bg-slate-200 p-3 rounded-lg mt-3 flex gap-4 items-center '>
         <Image src={"/location.png"} alt="Loc" width={15} height={15} autoComplete="address-line1"/>
         <input type="text" placeholder={'Pickup Location'} className='bg-transparent w-full outline-none' value={Place} onChange={(e)=>{
          setPlace(e.target.value) 
       
          }}/>
        </div>

        <div className='bg-slate-200 p-3 rounded-lg mt-3 flex gap-4 items-center '>
         <Image src={"/dest.png"} alt='="dest"' width={15} height={15} autoComplete="address-line1"/>
         <input type="text" placeholder={'DropOff Location'} className='bg-transparent w-full outline-none' value={DPlace} onChange={(e)=>{
          setDPlace(e.target.value)
      

          }}/>
        </div>

        
        <Link href={{pathname:"/confirm",query:{Place:`${Place}`  ,DPlace:`${DPlace}`}}}>
        <button className='p-3 bg-black w-full mt-5 text-white rounded-lg'>Search</button>
        </Link>
    </div>

        </div>
        {/* Saved Place */}
        {/* confirm Location */}
  
    

    </div>
  )
}

export default page