import React from 'react'

export const Framesec = () => {
  return (
    <div className='w-[216px] h-[448px] flex flex-col bg-custom-orange text-white rounded-md border-solid border-[1px] '>
        <h2 className='ml-5 mt-2'>Star fact About your orders!!!</h2>
        <div className='w-[176px] h-[280px] grid gap-[32px] mx-auto'>
            <p>There are 8 shipments that have been in out for delivery for more than 3 days.</p>
            <p>There are 5 shipments in exception right now</p>
            <p>The maximum chargebacks are from Miami.</p>
            <button className='text-black bg-white rounded-md'>Check Orders Page</button>
        </div>
    </div>
  )
}
