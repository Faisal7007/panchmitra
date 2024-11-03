import React from 'react'
import MyBarChart from '../MyBarChart'

const Test_two = () => {
  return (
    <main  className=" w-full bg-[#0d2a13] h-[100vh] flex items-center justify-center ">
    <div className=" max-w-1600px  w-full flex items-center justify-center relative ">
      <div className=" w-[88%] py-16 flex justify-evenly items-end ">
      <div>

      <div className='font-bold text-[60px] text-[#73bad8] mb-4'>Revenue Growth Analysis</div>
      <div className='border-[3px] border-white h-[450px] w-[700px] rounded-xl p-2 text-yellow-600' >
      <div className='font-bold text-[12px] mb-2'>Revenue Growth Analysis Based on the Bar Graph for Selling 1,000,000 Bottles
The bar graph illustrates the financial performance of selling 1,000,000 bottles of mineral water, highlighting various revenue streams and the associated profit. Here’s a detailed description of the revenue growth:
</div>

<div className='mb-2'>

<div className='font-bold text-[12px]'>
    1.Revenue from Sales:
</div>
<div className='font-bold text-[12px] ml-4'><span className='h-[1px] w-[1px] bg-black absolute left-1 rounded-full' ></span>The revenue generated from direct sales to distributors amounts to ₹8,000,000. This represents a significant portion of the total revenue and underscores the importance of product sales in driving overall income. The robust demand for bottled water, especially during high-traffic events like the Maha Kumbh, is a key factor contributing to this revenue stream.
</div>
</div>

<div className='mb-2'>

<div className='font-bold text-[12px]'>
    2.Revenue from Endorsements:
</div>
<div className='font-bold text-[12px] ml-4'><span className='h-[1px] w-[1px] bg-black absolute left-1 rounded-full' ></span>The graph shows that the company anticipates generating ₹4,000,000 from brand endorsements. This revenue is critical as it adds a supplementary income source beyond direct sales, demonstrating the effectiveness of strategic partnerships and marketing efforts to enhance brand visibility.

</div>
</div>

<div className='mb-2'>

<div className='font-bold text-[12px]'>
    3.Total Revenue:

</div>
<div className='font-bold text-[12px] ml-4'><span className='h-[1px] w-[1px] bg-black absolute left-1 rounded-full' ></span>The combined total revenue from sales and endorsements reaches ₹12,000,000. This figure illustrates the overall market potential for the mineral water business, indicating a strong financial outlook. The successful integration of product sales with endorsement income emphasizes a diversified revenue strategy.

</div>
</div>

<div className='mb-2'>

<div className='font-bold text-[12px]'>
    4.Total Profit:
</div>
<div className='font-bold text-[12px] ml-4'><span className='h-[1px] w-[1px] bg-black absolute left-1 rounded-full' ></span>The profit calculated after deducting costs and expenses stands at ₹4,700,000. This amount reflects the operational efficiency of the business model and highlights a favorable profit margin. The profit margin showcases the viability of scaling operations, which is crucial for achieving sustainability and growth in the long term.

</div>
</div>




      </div>
      </div>


    {/* Right */}
      <div className='h-[500px] w-[600px]'>
      <MyBarChart/>

      </div>
      </div>
     </div>
   </main>
  )
}

export default Test_two
