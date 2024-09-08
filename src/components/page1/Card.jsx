import React from 'react'

export const Card = ({head,paragraph,buttonname ,colr}) => {
  return (
    <div className=''>
        <div className={` border-solid border-[1px]  w-[362px] h-[188px] mt-[164px] ml-[68px] gap-4 flex flex-col rounded-md ${colr}`}>
            <h2 className='font-bold mr-5 ml-5 mt-3'>{head}</h2>
            <p className='ml-5 mr-5'>{paragraph}</p>
            <div className='flex'>
                <button className='text-white bg-black rounded-md w-44 h-7 ml-5 mb-4 '>{buttonname}</button>
            </div>
        </div>
    </div>
  )
}
