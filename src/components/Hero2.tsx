import React from 'react'
import Image from 'next/image'
import logo1 from '@/public/logo/logo1.svg'
import logo2 from '@/public/logo/logo2.svg'
import logo3 from '@/public/logo/logo3.svg'
import logo4 from '@/public/logo/logo4.svg'
import logo5 from '@/public/logo/logo5.svg'
import logo6 from '@/public/logo/logo6.svg'




function Hero2() {
  return (
    <div className="w-full h-auto p-6 md:w-full md:h-[239px] md:pt-20 md:pb-20 md:px-16 bg-[#F7F7F7] my-36 flex flex-col items-center md:flex-row md:justify-between gap-6">
      
      <section className="w-full md:w-auto flex items-center justify-center text-center md:text-left">
        <h1 className="font-bold text-[16px] md:text-[24px] text-[#000000]">
          Trusted by 2000+ companies worldwide.
        </h1>
      </section>

     
      <section className="w-full md:w-auto flex items-center justify-center flex-wrap md:flex-nowrap gap-4">
        <div className="flex justify-center w-full md:w-auto gap-4">
          <Image
            src={logo1}
            alt="logo1"
            width={123.8}
            height={38.52}
            className="w-[123.8px] h-[38.52px] md:w-[107.15px] md:h-[33.34px]"
          />
          <Image
            src={logo2}
            alt="logo2"
            width={123.8}
            height={38.52}
            className="w-[123.8px] h-[38.52px] md:w-[107.15px] md:h-[33.34px]"
          />
          <Image
            src={logo3}
            alt="logo3"
            width={123.8}
            height={38.52}
            className="w-[123.8px] h-[38.52px] md:w-[107.15px] md:h-[33.34px]"
          />
          <Image
            src={logo4}
            alt="logo4"
            width={123.8}
            height={38.52}
            className="w-[123.8px] h-[38.52px] md:w-[107.15px] md:h-[33.34px]"
          />
          <Image
            src={logo5}
            alt="logo5"
            width={123.8}
            height={38.52}
            className="w-[123.8px] h-[38.52px] md:w-[107.15px] md:h-[33.34px]"
          />
          <Image
            src={logo6}
            alt="logo6"
            width={123.8}
            height={38.52}
            className="w-[123.8px] h-[38.52px] md:w-[107.15px] md:h-[33.34px]"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero2;

