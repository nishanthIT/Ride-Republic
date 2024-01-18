// Import necessary modules
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MobilePage = () => {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleConfirm = () => {
    // Add logic to handle confirmation, e.g., send a verification code
    console.log(`Mobile Number confirmed: ${mobileNumber}`);
  };

  const handleSkip = () => {
    // Add logic to handle skipping mobile number verification
    console.log('Skipped mobile number verification');
  };

  const handleBookRide = () => {
    // Add logic to book the ride using the provided mobile number
    console.log('Booking ride with mobile number:', mobileNumber);
  };

  return (
    <div className="h-screen md:w-9/12 md:ml-28">
      {/* Back Button */}
      <div className="bg-white px-4 cursor-pointer" onClick={() => window.history.back()}>
        <Image src="/Back.png" alt="back" width={40} height={40} />
      </div>
      

      {/* Mobile Number Input */}
      <div className='md:ml-28 md:mt-10'>
      <div className="p-2 md:p-5 border-[2px] rounded-xl">
        <p className="text-[20px] font-bold">Enter Whatsapp Number</p>

        <div className="bg-slate-200 p-3 rounded-lg mt-3 flex gap-4 items-center">
          <Image src={"/whatsapp.png"} alt="Mobile" width={25} height={25} />
          <input
            type="text"
            placeholder={'Mobile Number'}
            className="bg-transparent w-full outline-none"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          
        </div>
        <p className="text-[14px] font-bold text-gray-500 text-center text-xs py-2 border-b">Your live location will be shared with this number. </p>
        
          {/* Buttons */}
      <div className="flex justify-between p-5">

        <button className="p-3 bg-black w-1/3 text-white rounded-lg" onClick={handleConfirm}>
          Skip
        </button>
        <button className="p-3 bg-black w-1/3 text-white rounded-lg" onClick={handleBookRide}>
          Confirm
        </button>
      </div>
      </div>

      </div>
    </div>
  );
};

export default MobilePage;
