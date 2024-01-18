'use client';
import Image from 'next/image';
import 'mapbox-gl/dist/mapbox-gl.css';
import Map from '@/components/Map';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col h-screen md:flex-row'>
      <Map />
      <div className='flex-1 p-3'>
        {/* Header */}
        <div className='flex items-center justify-between p-3'>
          <Image src="/logo-black.png" alt="Logo" width={70} height={70} className='p-3' />

          <div className='flex items-center'>
            <div className='w-20 text-sm mr-2'>Nishanth</div>
            <div>
              <Image src="/profile.jpg" alt="Profile" width={70} height={70} className='h-12 w-12 rounded-full border border-gray-950 p-px' />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className='flex  md:mt-20 md:mb-28'>
          <div className='flex-1'>
            <Link href="/search">
              <div className='bg-gray-200 m-1 h-32 flex flex-col items-center justify-center rounded-lg transform hover:scale-105 transition text-lg'>
                <Image src="/Ride.png" alt="Ride" width={100} height={70} />
                Ride
              </div>
            </Link>
          </div>

          <div className='flex-1'>
            <Link href="/search">
              <div className='bg-gray-200 m-1 h-32 flex flex-col items-center justify-center rounded-lg transform hover:scale-105 transition text-lg '>
                <Image src="/Rent.png" alt="Rent" width={100} height={70} />
                Rent
              </div>
            </Link>
          </div>

          <div className='flex-1'>
            <Link href="/search">
              <div className='bg-gray-200 m-1 h-32 flex flex-col items-center justify-center rounded-lg transform hover:scale-105 transition text-base'>
                <Image src="/Pink.png" alt="History" width={100} height={70} />
                Pink Caption
              </div>
            </Link>
          </div>
        </div>

        {/* Input Button */}
        <Link href="/search">
          <div className='h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8 justify-center rounded-lg transform hover:scale-90 transition '>
            Quick Ride
          </div>
        </Link>
      </div>
    </div>
  );
}
