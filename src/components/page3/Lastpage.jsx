import React from 'react'
import { Leftcardpage } from './Leftcardpage'
import { Midup } from './Midup'
import { Middown } from './Middown'
import { Rightcard } from './Rightcard'

export const Lastpage = () => {
  return (
    <div className='w-100vw h-[550px] top-[1067px] left-[68px] bg-custom-orange3'>
      <h2 className='font-bold text-3xl pt-10 ml-20'>Discover the Heart of Our Functionality</h2>
      <div className='flex items-baseline'>
        <Leftcardpage/>
        <div className='flex flex-col'>
          <Midup/>
          <Middown/>
        </div> 
        <Rightcard/> 
      </div>  
    </div>
  )
}
