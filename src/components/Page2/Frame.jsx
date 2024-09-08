import React from 'react'
import { useState } from 'react';
import CustomPieChart from './CustomPieChart';

const filters = ['Delivery', 'Out for Delivery', 'Intransit', 'Pending', 'Extension', 'Education'];

export const Frame = () => {
    const [selectedFilter, setSelectedFilter] = useState('All');
    // Handler to set the selected filter
    const handleFilterClick = (filter) => {
        setSelectedFilter(filter);
    };

  return (
    <div className='bg-white w-[600px] h-[458px]  mt-20 ml-20 space-y-[16px] rounded-md flex flex-col border-solid border-[1px] overflow-hidden '>

        <div className='flex justify-between items-center'>
            <h2 className='mt-2 ml-2'>Shipment Updates </h2>
            <div className='mt-2 mr-2'>Total Orders : 394</div>
        </div>

        <div className="flex space-x-2 py-2 w-[416px] h-[60px]">
            {filters.map((filter, index) => (
                <button 
                    key={index}
                    onClick={() => handleFilterClick(filter)}
                    className={`ml-2 px-2 py-1 rounded-md border whitespace-nowrap ${
                    selectedFilter === filter
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-black'
                    }`}>{filter}
                </button>
            ))}
        </div>

        <div className='w-[102.52px] h-[80px] top-[176px] left-[185.48px] ml-10'>
            <CustomPieChart className='pb-48'/>
        </div>
        
    </div>
  )
}
