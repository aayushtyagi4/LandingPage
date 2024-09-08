import React from 'react'

export const Leftcardpage = () => {
  return (
    <div className='w-[432px] h-[408px] top-[1131px] left-[69px] flex flex-col bg-white ml-20 mt-8 rounded-md border-solid border-[1px]'>

        <div className='w-[400px] h-[108px] gap-[24px] space-y-2'>
            <h2 className='w-[400px] h-[40px] font-inter text-[20px] font-semibold leading-[20px] pt-2 pl-2'>
                Elevate Your Brand Aesthetics with Custom Tracking Page Styles</h2>
            <div className='w-[400px] h-[60px] font-inter text-[15px] 
            font-medium leading-[20px] pt-2 pl-2'>Immerse your customers in a branded experience 
            by personalizing the colors on your tracking page. </div>
        </div>

        <div className='w-[400px] h-[200px] gap-[16px] space-y-3 mt-3 '>
            <div className='w-[400px] h-[56px] gap-[16px] pt-2 pl-2 space-y-2'>
                <h2 className='w-[220px] h-[20px]'>Accent Color</h2>
                <div className='flex justify-between'>
                    <input placeholder='FF9898' className='rounded-md border-solid border-[1px] border-black w-[280px]' />
                    <div className='rounded-lg bg-bg1 h-6 w-10'></div>
                </div>
            </div>
            <div className='w-[400px] h-[56px] pt-2 pl-2 space-y-2'>
                <h2 className='w-[400px] h-[20px]'>Text Color</h2>
                <div className='flex justify-between'>
                    <input className='rounded-md border-solid border-[1px] border-black w-[280px]' placeholder='571010'/>
                    <div className='rounded-lg  bg-bg2 h-6 w-10'></div>
                </div>
            </div>
            <div className='w-[400px] h-[56px]  pt-2 pl-2 space-y-2'>
                <h2 className='w-[400px] h-[20px]'>Background Color</h2>
                <div className='flex justify-between'>
                    <input className='rounded-md border-solid border-[1px] border-black w-[280px]' placeholder='FFEAEA'/>
                    <div className='rounded-lg bg-bg3 h-6 w-10'></div>
                </div>
            </div>
        </div>

        <div className='flex flex-row mt-4 ml-2 space-x-2'>
            <button className='bg-white text-black rounded-md pt-1 pb-1 pr-1 pl-1 border-[1px] border-black shadow-md'>Preview</button>
            <button className='bg-black text-white rounded-md pt-1 pb-1 pr-1 pl-1'>Apply Colors</button>
        </div>
    </div>
  )
}
