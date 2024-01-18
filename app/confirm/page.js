'use client';
import Map from '@/components/map'
import React, { useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect } from 'react';
import RideSelectSection from '@/components/RideSelectSection';

import { usePathname, useSearchParams } from 'next/navigation'
import { data } from 'autoprefixer';
import Link from 'next/link';
import Image from 'next/image';




const page = () => {
  
  // const pathname = usePathname()
  const searchParams = useSearchParams()



  const accessToken = 'pk.eyJ1IjoibmlzaGFudGgyMzA4IiwiYSI6ImNsaG45NXppbjFkcHkzcm94ZzA4YTcyaHEifQ.fsXhCELfT7dnyxghnDS4Kg';
  // const {Place,DPlace}= router.query;
  const Place = searchParams.get('Place');
  const DPlace = searchParams.get('DPlace');




  const [pickup,setpickup] = useState();
  const [dropoff,setdropoff] = useState();

  const [distance, setdistance] = useState(null);
  const [car,setcar] = useState(null);

  // Callback function to receive data from the child
  const handleChildData = (data) => {
    setdistance(data);
  };
  const setcarid= (id)=>{
    setcar(null)
    setcar(id)
    
  }


    async function getCoordinates() {
        try {

          const apiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${Place}.json`;
      
          const response = await fetch(`${apiUrl}?access_token=${accessToken}`);
          const data = await response.json();
      
          // // Print the data to the console
          // console.log('Fetched Data:', data.features[0].center);
          setpickup(data.features[0].center)
          

        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      
      // Call the asynchronous function
  async function getDropoffCoordinates(){

    try {

      const apiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${DPlace}.json`;
  
      const response = await fetch(`${apiUrl}?access_token=${accessToken}`);
      const data = await response.json();
  
      // // Print the data to the console
      // console.log('Fetched Data:', data.features[0].center);
      setdropoff(data.features[0].center)
      

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
      

useEffect(() =>{
    getCoordinates();
    getDropoffCoordinates()

},[])   




  return (
 
    <div className='flex flex-col h-screen md:flex-row '>
      {/* back button */}
      <div className='rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer' onClick={() => window.history.back()}>
        {/* <Link href={"/search"}> */}
          <Image src={"/Back.png"} width={40} height={40} className=""/>

        {/* </Link> */}

      </div>
      {/* map */}
        <Map pickup={pickup} dropoff={dropoff} setdistance={handleChildData}/>
      {/* select section   */}
      <div className='flex-1 flex flex-col  h-1/2  md:h-auto overflow-hidden'>
     <RideSelectSection distance={distance} setcarid={setcarid} car={car}/>
     <div className='border-t-2'>
      
      <div className='bg-black text-white my-4 mx-4 py-4 text-center cursor-pointer' onClick={()=>{if(car != null){window.location.href = '/confirm/safe'; } }}>
        Confirm Ride
      </div>
    
     </div>
        
    </div>
    </div>    
   
  )
}

export default page