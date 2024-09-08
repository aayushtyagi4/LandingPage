import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

// Sample data for the Pie chart
const data = [
  { name: 'Group A', value: 40 },
  { name: 'Group B', value: 40 },
  { name: 'Group C', value: 20 },
  { name: 'Group D', value: 20 },
  {name: 'Group E', value: 20}
];

// Colors for the slices
const COLORS = ['rgba(94, 66, 0, 1)', 
    'rgba(255, 221, 182, 1)', 
    'rgba(255, 200, 121, 1)', 
    'rgba(229, 165, 0, 1)',
    'rgba(149, 111, 0, 1)',
];

const CustomPieChart = () => {
  return (
    <PieChart width={300} height={300} className='items-center mr-48'>
      <Pie
        data={data}
        cx={100} // x-coordinate of the center of the Pie
        cy={100} // y-coordinate of the center of the Pie
        innerRadius={45}
        outerRadius={100}
        fill="#8884d8"
        paddingAngle={1}
        dataKey="value"
        className='items-center mt-48'>
            
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} className='items-center mt-48'  />
        ))}
      </Pie>
      <Tooltip className='items-center' />
      <Legend className='items-center' />
    </PieChart>
  );
};

export default CustomPieChart;
