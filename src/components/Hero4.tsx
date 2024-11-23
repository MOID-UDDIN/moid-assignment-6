import React from 'react'
import Image from 'next/image'
import img1 from '@/public/h4/img1.svg'
import img2 from '@/public/h4/img2.svg'

function Hero4() {
  return (
    <div className="w-full h-[488px] pt-[112px] pr-[64px] pb-[112px] space-y-4">
      
      <div className="flex flex-col items-center justify-center space-y-4 w-full mx-auto text-center">
        <h1 className="text-[48px] font-extrabold">
          Our Achievements
        </h1>
        <p className="text-[18px] text-black max-w-[1152px] px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
      </div>

      
      <div className="w-full flex justify-center items-center gap-[24px] flex-col lg:flex-row">
       
        <div className="w-full max-w-[616px] flex justify-center">
          <Image
            className="pt-[8px] pr-[0px] pb-[8px] pl-[0px]"
            src={img1} 
            alt="row1"
            width={616}
            height={96}
          />
        </div>

     
        <div className="w-full max-w-[616px] flex justify-center">
          <Image
            className="pt-[8px] pr-[0px] pb-[8px] pl-[0px]"
            src={img2} 
            alt="row2"
            width={616}
            height={96}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero4;