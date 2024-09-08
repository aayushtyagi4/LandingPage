import React from 'react'
import pic1 from '../assects/pic1.png'
import pic2 from '../assects/pic2.jpg'
import pic3 from '../assects/pic3.jpg'
import pic4 from '../assects/pic4.webp'
import pic5 from '../assects/pic5.jpg'

export const Middown = () => {
  return (
    <div className='w-[448px] h-[200px] bg-white ml-20 mt-8 rounded-md border-solid border-[1px]  space-y-3'>
        <div className='flex flex-col'>
            <h2 className='font-inter text-[15px] font-semibold leading-[20px] pt-2 pl-2'>Explore Our Integrated System</h2>
            <p className='font-inter text-[13px] font-medium leading-[20px] pt-2 pl-2 w-[380px]'>Discover the variety of Popular Integrations tailored for your Convenience.</p>
        </div>
        <div className='flex flex-col'>
            <div className='flex flex- justify-evenly w-[296px] h-[34px]'>
                <img src={pic1} className='w-[34px] h-[34px]'/>
                <img src={pic2} className='w-[34px] h-[34px]'/>
                <img src={pic3} className='w-[34px] h-[34px]'/>
                <img src={pic4} className='w-[34px] h-[34px]'/>
                <img src={pic5} className='w-[34px] h-[34px]'/>
            </div>

            <div className='mt-4 ml-2'>
                <button className='bg-black text-white pt-1 pb-1 pr-1 pl-1 rounded-md'>Explore Integrations</button>
            </div>
        </div>
    </div>
  )
}
