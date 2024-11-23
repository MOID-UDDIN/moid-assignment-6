import React from 'react'
import Image from 'next/image'
import profile from '@/public/person/Image.png'
import { Button } from "@/components/ui/button"


function Hero1() {
  return (
    
    <div className="flex flex-col lg:flex-row w-full h-[520px] mt-[141px] bg-white">
      
      <div className="w-full  lg:w-1/2 flex items-center justify-center px-4 lg:px-10">
        <section className="text-left w-full max-w-[500px] mx-auto">
          <h1 className="text-[#000000]  text-[40px] w-[380px] h-[96px] flex justify-center items-center md:w-[500px] md:h-[134px] md:text-[56px] font-[700]  mb-4">
            Learn new skills online with ease
          </h1>
          <p className="text-[18px] text-[#000000] mb-6">
            Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
          </p>
          <div className="flex gap-4 items-center justify-start">
            
            <Button
              variant="outline"
              className="text-base text-[#FFFFFF] w-[178px] h-[48px] px-[24px] py-[12px] rounded-[5px] border-[1px] border-[#000000] bg-[#000000] flex items-center justify-center whitespace-nowrap"
            >
              Start learning now
            </Button>

           
            <Button
              variant="outline"
              className="text-base text-[#000000] w-[164px] h-[48px] px-[24px] py-[12px] rounded-[5px] border-[1px] border-[#000000] flex items-center justify-center whitespace-nowrap"
            >
              Explore Courses
            </Button>
          </div>
        </section>
      </div>

      
      <div className="w-full  lg:w-1/2 flex items-center justify-center mt-4 lg:mt-0">
        <Image src={profile} alt="photo" width={640} height={650} />
      </div>
    </div>
    
  );
}

export default Hero1;


