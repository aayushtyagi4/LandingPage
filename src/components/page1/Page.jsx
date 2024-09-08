import React from 'react'
import { Card } from './Card'

export const Page = () => {
  return (
    <div className='bg-gradient-to-b from-orange-50 to-white flex-row '>
        <h2 className='font-inter text-[40px] font-bold ml-20 pt-20'>
          Welcome,John Mathew!!
        </h2>
        
        <div className='flex pb-14'>
          <Card 
            head="Order Sync Successfully!!"
            paragraph="your order in details forom the last 30 days have been successfully synced. check them out now!!"
            buttonname="Explore the orders"
            colr="bg-offwhite"/>

          <Card
            head="Customize Customer Notification"
            paragraph="Tailor Your Email Experience: Set the Sender the Email and Choose Notification Triggers "
            buttonname="Configure Notifications"
            colr="bg-yellow-100"/>

          <Card
            head="Order Sync Successfully!!"
            paragraph="your order in details forom the last 30 days have been successfully synced. check them out now!!"
            buttonname="Go to Navigation Menu"
            colr="bg-blue-100"/>
        </div>
    </div>
  )
}
