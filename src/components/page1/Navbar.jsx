import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { CiSettings } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

export const Navbar = () => {
  return (
    <div>

        <div className='flex w-100vw h-[60px] space-x-[700px] border-b-2 border-black '>

            <div className='flex justify-evenly font-semibold w-[525px] h-[24px] my-auto  space-x-10 ml-20'>
                <div className='w-[140px] h-[20px] cursor-pointer '>Home</div>
                <div className='w-[140px] h-[20px] cursor-pointer'>Orders</div>
                <div className='w-[140px] h-[20px] flex  items-center space-x-1 cursor-pointer'>
                    <div>Integration</div>
                    <IoIosArrowDown />
                </div>
                
                <div className='w-[160px] h-[20px] whitespace-nowrap cursor-pointer'>Tracking Page</div>
                <div className='w-[160px] h-[20px] whitespace-nowrap cursor-pointer'>Partner with Us</div>

            </div>

            <div className='flex space-x-4 font-semibold w-[348px] h-[24px] top-10 right-[60px] gap-[32px] my-auto '>
                <div className='flex items-center cursor-pointer'>
                    <IoIosSearch className='w-6 h-6' />
                    <input title='text' className='ml-2 border-b-blue-950 border-b-2 p-1' placeholder='Search'/>
                </div>

                <div className='flex items-center space-x-2 cursor-pointer'>
                    <VscAccount className='w-5 h-5' />
                    <div>Account</div>
                </div>

                <div className='flex items-center space-x-2 cursor-pointer'>
                    
                    <CiSettings className='w-5 h-5' />
                    <div>Settings</div>
                </div>
            </div>
        </div>

    </div>
  )
}
