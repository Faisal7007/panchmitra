import React from 'react'
import RevenueComp from '../revenueComp/RevenueComp'

const Test_One = () => {
  return (
    <main  className=" w-full bg-[#4CC9FE] flex items-center justify-center ">
        <div className=" max-w-1600px w-full flex items-center justify-center relative ">
          <div className="w-[88%] py-16 px-24 h-[100vh] ">
          <div className='font-semibold text-[45px] mb-12'>Revenue Breakdown</div>
          <RevenueComp perc={40} title={'Distributors'} description_one={'Largest revenue share through regional distributors.'} description_two={'Mass distribution to ensure availability during Maha Kumbh 2025.'}  />
          <RevenueComp perc={33} title={'Brand Endorsement'} description_one={' Endorsements add 33% revenue and credibility.'} description_two={'Collaborate with brands and influencers to boost visibility and trust.'} />
          <RevenueComp perc={27} title={'Salesman'} description_one={' Direct sales add 22% to overall revenue.'} description_two={' On-ground sales efforts target local vendors and event stalls for deeper market penetration.'}/>

          </div>
        </div>
    </main>
  )
}

export default Test_One
