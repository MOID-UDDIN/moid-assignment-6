import React from 'react'
import Image from 'next/image'
import img1 from '@/public/h3/img1.svg'
import img2 from '@/public/h3/img2.svg'
import img3 from '@/public/h3/img3.svg'
import img4 from '@/public/h3/img4.svg'
import img5 from '@/public/h3/img5.svg'
import img6 from '@/public/h3/img6.svg'
import img7 from '@/public/h3/img7.svg'
import img8 from '@/public/h3/img8.svg'
import img9 from '@/public/h3/img9.svg'
import { Button } from "@/components/ui/button"



function Hero3() {
  return (
    <div className="w-full h-[1049px] px-[64px] py-[112px] bg-white">
      
      <div className="w-full max-w-[1280px] mx-auto text-center space-y-6">
        <section className="text-[48px] font-bold text-black">
          Explore Courses By Category
        </section>
        <section className="text-[18px] text-black">
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </section>
      </div>

      
      <div className="pt-12">
        <div className="w-full max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-[64px]">
          
          <div className="w-full max-w-[410.67px] flex flex-col gap-[32px]">
            <div className="w-full max-w-[410.67px] h-[132px] p-[16px] rounded-tl-[5px] bg-[#F7F7F7] flex items-center">
              <div className="w-[100px] h-[100px] flex items-center justify-center rounded-tl-[5px] bg-[#FFFFFF]">
                <Image src={img1} alt="Image 1" width={100} height={100} />
              </div>
              <div className="w-[246.67px]">
                <div className="text-[20px] font-[600] text-[#000000]">Design & Development</div>
                <div className="text-[18px] font-[400] text-[#000000]">50+ Courses Available</div>
              </div>
            </div>

            
            <div className="w-full max-w-[410.67px] h-[132px] p-[16px] rounded-tl-[5px] bg-[#F7F7F7] flex items-center">
              <div className="w-[100px] h-[100px] flex items-center justify-center rounded-tl-[5px] bg-[#FFFFFF]">
                <Image src={img2} alt="Image 2" width={100} height={100} />
              </div>
              <div className="w-[246.67px]">
                <div className="text-[20px] font-[600] text-[#000000]">Marketing</div>
                <div className="text-[18px] font-[400] text-[#000000]">Second Text</div>
              </div>
            </div>

            
            <div className="w-full max-w-[410.67px] h-[132px] p-[16px] rounded-tl-[5px] bg-[#F7F7F7] flex items-center">
              <div className="w-[100px] h-[100px] flex items-center justify-center rounded-tl-[5px] bg-[#FFFFFF]">
                <Image src={img3} alt="Image 3" width={100} height={100} />
              </div>
              <div className="w-[246.67px]">
                <div className="text-[20px] font-[600] text-[#000000]">Development</div>
                <div className="text-[18px] font-[400] text-[#000000]">50+ Courses Available</div>
              </div>
            </div>
          </div>

          
          <div className=" lg:w-full lg:max-w-[410.67px] lg:space-y-[30px] flex-col lg:gap-[32px] hidden lg:block">
            <div className="w-full max-w-[410.67px] h-[132px] p-[16px] rounded-tl-[5px] bg-[#F7F7F7] flex items-center">
              <div className="w-[100px] h-[100px] flex items-center justify-center rounded-tl-[5px] bg-[#FFFFFF]">
                <Image src={img4} alt="Image 4" width={100} height={100} />
              </div>
              <div className="w-[246.67px]">
                <div className="text-[20px] font-[600] text-[#000000]">Communication</div>
                <div className="text-[18px] font-[400] text-[#000000]">50+ Courses Available</div>
              </div>
            </div>

            
            <div className="w-full max-w-[410.67px] h-[132px] p-[16px] rounded-tl-[5px] bg-[#F7F7F7] flex items-center">
              <div className="w-[100px] h-[100px] flex items-center justify-center rounded-tl-[5px] bg-[#FFFFFF]">
                <Image src={img5} alt="Image 5" width={100} height={100} />
              </div>
              <div className="w-[246.67px]">
                <div className="text-[20px] font-[600] text-[#000000]">Digital Marketing</div>
                <div className="text-[18px] font-[400] text-[#000000]">50+ Courses Available</div>
              </div>
            </div>

           
            <div className="w-full max-w-[410.67px] h-[132px] p-[16px] rounded-tl-[5px] bg-[#F7F7F7] flex items-center">
              <div className="w-[100px] h-[100px] flex items-center justify-center rounded-tl-[5px] bg-[#FFFFFF]">
                <Image src={img6} alt="Image 6" width={100} height={100} />
              </div>
              <div className="w-[246.67px]">
                <div className="text-[20px] font-[600] text-[#000000]">Self Development</div>
                <div className="text-[18px] font-[400] text-[#000000]">50+ Courses Available</div>
              </div>
            </div>
          </div>

          
          <div className="lg:w-full lg:max-w-[410.67px] lg:space-y-[30px] flex-col lg:gap-[32px] hidden lg:block">
            <div className="w-full max-w-[410.67px] h-[132px] p-[16px] rounded-tl-[5px] bg-[#F7F7F7] flex items-center">
              <div className="w-[100px] h-[100px] flex items-center justify-center rounded-tl-[5px] bg-[#FFFFFF]">
                <Image src={img7} alt="Image 7" width={100} height={100} />
              </div>
              <div className="w-[246.67px]">
                <div className="text-[20px] font-[600] text-[#000000]">Business</div>
                <div className="text-[18px] font-[400] text-[#000000]">50+ Courses Available</div>
              </div>
            </div>

            
            <div className="w-full max-w-[410.67px] h-[132px] p-[16px] rounded-tl-[5px] bg-[#F7F7F7] flex items-center">
              <div className="w-[100px] h-[100px] flex items-center justify-center rounded-tl-[5px] bg-[#FFFFFF]">
                <Image src={img8} alt="Image 8" width={100} height={100} />
              </div>
              <div className="w-[246.67px]">
                <div className="text-[20px] font-[600] text-[#000000]">Finance</div>
                <div className="text-[18px] font-[400] text-[#000000]">50+ Courses Available</div>
              </div>
            </div>

            
            <div className="w-full max-w-[410.67px] h-[132px] p-[16px] rounded-tl-[5px] bg-[#F7F7F7] flex items-center">
              <div className="w-[100px] h-[100px] flex items-center justify-center rounded-tl-[5px] bg-[#FFFFFF]">
                <Image src={img9} alt="Image 9" width={100} height={100} />
              </div>
              <div className="w-[246.67px]">
                <div className="text-[20px] font-[600] text-[#000000]">Technology</div>
                <div className="text-[18px] font-[400] text-[#000000]">50+ Courses Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="flex justify-center mt-[64px]">
        <Button 
          variant="outline" 
          className="flex justify-center items-center w-[155px] h-[48px] px-[24px] py-[12px] gap-[8px] rounded-[5px] border-[1px] border-solid border-black mx-auto text-base text-[#000000] whitespace-nowrap"
        >
          View All Courses
        </Button>
      </div>
    </div>
  );
}

export default Hero3;





