
import Image from 'next/image';
import React from 'react';
import { carList } from '@/data/carList';

const RideSelectSection = (props) => {
  return (
    <div className='flex-1 overflow-y-scroll  overflow-hidden flex flex-col'>

      <div className='text-gray-500 text-center text-xs py-2 border-b'>Choose a ride, or Swipe up for More</div>

      <div className=''>
        {carList.map((car, index) => (
          <div className={`flex p-4 items-center transition-all border-gray-300  ${
            props.car === car.id ? "bg-gray-300 hover:bg-gray-300 hover:border-gray-800 hover:scale-100" : "hover:border-gray-200 hover:bg-gray-100 hover:scale-105"
          }`} onClick={() => { props.setcarid(car.id) }} key={index}>
            <Image src={car.imageUrl} width={car.id == 4? 70 :90} height={90} className='mr-4' />
             <div className='flex-1 flex flex-col'>
              <div className="font-medium ">{car.name}</div>
              <div className="text-xs text-blue-500">5 min Away</div>
            </div>
            <div className='text-sm'>{`${Math.round(car.multiplayer * props.distance).toLocaleString('en-IN', {
              maximumFractionDigits: 0,
              style: 'currency',
              currency: 'INR'
            })}`}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RideSelectSection;
