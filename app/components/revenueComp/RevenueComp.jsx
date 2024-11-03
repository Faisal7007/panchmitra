import React from 'react';

const RevenueComp = ({perc,title,description_one,description_two}) => {
   // Example percentage value
const background = perc
  ? `conic-gradient(#7CF5FF 0deg ${perc * 3.6}deg, #0d2a13 ${perc * 3.6}deg 360deg)`
  : '';

  const style = {
    background: background,
    padding: '6px',
  };
  return (
    <div className="flex gap-12  items-start  pt-8 ">
    <div className='h-[100px] w-[100px] rounded-full shadow-custom flex justify-center items-center'>

      <div
        className="h-[88px] w-[88px] rounded-full "
        style={style}
      >
        <div className="h-full w-full rounded-full bg-[#4CC9FE] flex justify-center items-center">
          <span className="font-bold">{perc}%</span>
        </div>
      </div>
    </div>

    <div >
    <div className='flex items-center gap-4 ml-8 text-[30px] font-semibold relative'>
    <span className='h-[5px] w-[5px] bg-black absolute -left-4 rounded-full'></span>
      {title}
    </div>
    <div className="relative flex justify-start items-center ml-12 ">
  <span className="h-[4px] w-[4px] bg-black absolute -left-4 rounded-full"></span>
  <span className="font-semibold mr-1">Contribution:</span>
{description_one}
</div>

<div className="relative flex justify-start items-center ml-12">
  <span className="h-[4px] w-[4px] bg-black absolute -left-4 rounded-full"></span>
  <span className="font-semibold mr-1">Strategy:</span>
 {description_two}

</div>

 
    </div>
    </div>
  );
};

export default RevenueComp;
