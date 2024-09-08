import React from 'react'

export const Rightcard = () => {
  return (
    <div className='h-[404px] w-[432px]  bg-white ml-20 mt-8 rounded-md border-solid border-[1px] space-y-3'>
        <div className='flex flex-col'>
            <h2 className='font-inter text-[20px] font-semibold leading-[20px] pt-2 pl-2'>
                Seamlessly Integrate Custom HTML Element</h2>
            <p className='font-inter text-[15px] font-medium leading-[20px] pt-2 pl-2 pr-2'>
                Unleash creativity with our Custom HTML feature. Add links, custom messages,
                or any HTML content to elevate the tracking page experience for your customers.
            </p>
        </div>

        <div className='flex flex-col w-[300px] h-[160px] pl-2 space-y-2'>
            <h2 className='font-inter text-body-md font-450 leading-20 '>HTML Link</h2>
            <input className='w-[400px] h-[150px] border-solid border-[1px] rounded-md  'placeholder='' />
        </div>
        <div className='flex space-x-3 pt-5'>
            <button className='bg-white text-black pt-1 pb-1 pr-1 pl-1 ml-2 border-[1px] border-black rounded-md shadow-md'>Preview</button>
            <button  className='bg-black text-white pt-1 pb-1 pr-1 pl-1 rounded-md'>Apply Changes</button>
        </div>
    </div>
  )
}
