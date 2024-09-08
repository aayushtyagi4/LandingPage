import React from 'react'
import { IoBagRemoveOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";

export const Framethir = () => {
  return (
    <div className='w-[600px] h-[458px] bg-white rounded-md flex flex-col border-solid border-[1px] '>
        <div className='w-[415px] h-[90px]  ml-4 pt-2 mb-10 space-y-3'>
            <h2 className='mt-2'>Tracking Page View vs Orders</h2>
            <div className='font-semibold'>UnderStand User Engagement Pattern and Optimize your 
                tracking Page for enhanced Customer Experience
            </div>
        </div>

        <div className='flex flex-col justify-evenly w-[570px] h-[250px] ml-4 space-y-5 '>
            <div className=' flex flex-col bg-custom-orange1 justify-between h-[120px] rounded-e-md'>
                <h2 className='ml-3 mt-2 '>Orders</h2>
                <div className='flex justify-between'>
                    <div className='text-3xl mb-9 ml-3'>80</div>
                    <IoBagRemoveOutline className='text-3xl mb-9 mr-3' />
                </div>
            </div>

            <div className='flex flex-col bg-custom-orange2 h-[120px] justify-between rounded-md'>
                <h2 className='ml-3 mt-2'>Tracking Page Views</h2>
                <div className='flex justify-between items-center'>
                    <div className='text-3xl mb-9 ml-3'>44</div>
                    <MdOutlineRemoveRedEye className='text-3xl mb-9 mr-3'/>
                </div>
            </div>

        </div>
    </div>
  )
}
