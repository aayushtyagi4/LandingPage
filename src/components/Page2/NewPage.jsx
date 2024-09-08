import React from 'react'
import { IoBagCheckOutline } from "react-icons/io5";
import { Frame } from './Frame';
import { Framesec } from './Framesec';
import { Framethir } from './Framethir';

export const NewPage = () => {
  return (
    <div>
        <div className='font-bold bg-orange-50 w-100vw h-[707px] top-[396px]'>
            <div className='w-[496px] h-[32px] top-[436px] left-[68px]'>
                <h2 className='font-inter text-2xl font-bold  text-center ml-20 pt-10 whitespace-nowrap'>
                    Instant Dive into Your Performance Metrics
                </h2>
            </div>

            <div className='w-[740px] h-[36px] top-[500px] left-[68px] flex justify-between ml-20 mt-14 pt-10 items-center'>
                <div className='bg-white cursor-pointer rounded-sm w-[96px] h-[36px] p-[8px_12px] gap-0 rounded-tl-md '>Lifetime</div>
                <div className='bg-white cursor-pointer items-center whitespace-nowrap rounded-sm w-[96px] h-[36px] p-[8px_12px] gap-0 rounded-tl-md '>Last Week</div>
                <div className='bg-white cursor-pointer whitespace-nowrap rounded-sm w-[96px] h-[36px] p-[8px_12px] rounded-tl-md '>Last Month</div>
                <div className='bg-white cursor-pointer whitespace-nowrap rounded-sm w-[96px] h-[36px] p-[8px_12px] rounded-tl-md '>Last Year</div>
                <div className='bg-white cursor-pointer whitespace-nowrap rounded-sm w-[200px] h-[36px] p-[8px_12px] rounded-tl-md flex items-center space-x-2 '>
                    <div>Customize Time Line</div>
                    <IoBagCheckOutline className='w-14 h-14' />

                </div>
            </div>

            <div className='flex space-x-10 items-baseline'>
                <Frame/>
                <Framesec/>
                <Framethir/>
            </div>

            
        </div>
    </div>
  )
}
