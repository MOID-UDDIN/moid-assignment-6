import React from 'react'
import Image from 'next/image'
import img1 from '@/public/h5/img1.svg'
import img2 from '@/public/h5/img2.svg'
import img3 from '@/public/h5/img3.svg'
import img4 from '@/public/h5/img4.svg'
import img5 from '@/public/h5/img5.svg'
import img6 from '@/public/h5/img6.svg'
import star from  '@/public/h5/star.svg'
import { Button } from "@/components/ui/button"




function Hero5() {  
  return (
    <div className="w-full py-[112px] gap-[60px] bg-white flex flex-col items-center">
      <div className="w-full max-w-[768px] h-[118px] flex flex-col items-center gap-[24px] mx-auto">
        <h1 className="text-[56px] font-bold text-center text-black">Courses</h1>
        <p className="text-[18px] font-normal text-center text-black">Your Ultimate Guide to Learning</p>
      </div>

      <div className="w-336 max-w-[768px] h-[40px] flex gap-x-2 mx-auto">
        <p className="text-[16px] font-normal text-[#000000] border-b-[1px] border-[#676767]">Popular</p>
        <p className="text-[16px] font-normal text-[#000000]">Recommended</p>
        <p className="text-[16px] font-normal text-[#000000]">Best Price</p>
      </div>

      
      <div className="w-full grid grid-cols-1 gap-[24px] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 mx-auto">
        
        <div className="w-[416px] h-[534px] rounded-[5px] bg-white flex flex-col mx-auto">
          <div className="w-[416px] h-[300px]">
            <Image src={img1} alt="Image" width={416} height={300} className="w-full h-[300px]" />
          </div>
          <div className="w-full h-[210px] p-[0px_16px_24px_16px] bg-[#F7F7F7] flex flex-col">
            <div className="flex justify-between items-start">
              <div className="text-[14px] font-semibold text-black">Design</div>
              <div className="w-[48px] h-[24px]">
                <Image src={star} alt="Image" width={48} height={24} />
              </div>
            </div>
            <div className="w-full text-[24px] font-bold text-black">UX/UI Design</div>
            <div className="w-full text-[16px] font-normal text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div className="w-full flex justify-between items-center mt-auto">
              <Button variant={"enroll"}>Enroll Now</Button>
              <div className="text-[16px] font-medium text-black">$400</div>
            </div>
          </div>
        </div>

        
        <div className="w-[416px] h-[534px] rounded-[5px] bg-white flex flex-col mx-auto">
          <div className="w-[416px] h-[300px]">
            <Image src={img2} alt="Image" width={416} height={300} className="w-full h-[300px]" />
          </div>
          <div className="w-full h-[210px] p-[0px_16px_24px_16px] bg-[#F7F7F7] flex flex-col">
            <div className="flex justify-between items-start">
              <div className="text-[14px] font-semibold text-black">Programming</div>
              <div className="w-[48px] h-[24px]">
                <Image src={star} alt="Image" width={48} height={24} />
              </div>
            </div>
            <div className="w-full text-[24px] font-bold text-black">Introduction to Python</div>
            <div className="w-full text-[16px] font-normal text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div className="w-full flex justify-between items-center mt-auto">
              <Button variant={"enroll"}>Enroll Now</Button>
              <div className="text-[16px] font-medium text-black">$400</div>
            </div>
          </div>
        </div>

       
        <div className="w-[416px] h-[534px] rounded-[5px] bg-white flex flex-col mx-auto">
          <div className="w-[416px] h-[300px]">
            <Image src={img3} alt="Image" width={416} height={300} className="w-full h-[300px]" />
          </div>
          <div className="w-full h-[210px] p-[0px_16px_24px_16px] bg-[#F7F7F7] flex flex-col">
            <div className="flex justify-between items-start">
              <div className="text-[14px] font-semibold text-black">Business</div>
              <div className="w-[48px] h-[24px]">
                <Image src={star} alt="Image" width={48} height={24} />
              </div>
            </div>
            <div className="w-full text-[24px] font-bold text-black">Data Analysis for Beginners</div>
            <div className="w-full text-[16px] font-normal text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div className="w-full flex justify-between items-center mt-auto">
              <Button variant={"enroll"}>Enroll Now</Button>
              <div className="text-[16px] font-medium text-black">$400</div>
            </div>
          </div>
        </div>

        
        <div className="w-[416px] h-[534px] rounded-[5px] bg-white flex flex-col mx-auto">
          <div className="w-[416px] h-[300px]">
            <Image src={img4} alt="Image" width={416} height={300} className="w-full h-[300px]" />
          </div>
          <div className="w-full h-[210px] p-[0px_16px_24px_16px] bg-[#F7F7F7] flex flex-col">
            <div className="flex justify-between items-start">
              <div className="text-[14px] font-semibold text-black">Art</div>
              <div className="w-[48px] h-[24px]">
                <Image src={star} alt="Image" width={48} height={24} />
              </div>
            </div>
            <div className="w-full text-[24px] font-bold text-black">Art Specialization</div>
            <div className="w-full text-[16px] font-normal text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div className="w-full flex justify-between items-center mt-auto">
              <Button variant={"enroll"}>Enroll Now</Button>
              <div className="text-[16px] font-medium text-black">$400</div>
            </div>
          </div>
        </div>

        
        <div className="w-[416px] h-[534px] rounded-[5px] bg-white flex flex-col mx-auto">
          <div className="w-[416px] h-[300px]">
            <Image src={img5} alt="Image" width={416} height={300} className="w-full h-[300px]" />
          </div>
          <div className="w-full h-[210px] p-[0px_16px_24px_16px] bg-[#F7F7F7] flex flex-col">
            <div className="flex justify-between items-start">
              <div className="text-[14px] font-semibold text-black">Law</div>
              <div className="w-[48px] h-[24px]">
                <Image src={star} alt="Image" width={48} height={24} />
              </div>
            </div>
            <div className="w-full text-[24px] font-bold text-black">Rule of Law</div>
            <div className="w-full text-[16px] font-normal text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div className="w-full flex justify-between items-center mt-auto">
              <Button variant={"enroll"}>Enroll Now</Button>
              <div className="text-[16px] font-medium text-black">$400</div>
            </div>
          </div>
        </div>

        
        <div className="w-[416px] h-[534px] rounded-[5px] bg-white flex flex-col mx-auto">
          <div className="w-[416px] h-[300px]">
            <Image src={img6} alt="Image" width={416} height={300} className="w-full h-[300px]" />
          </div>
          <div className="w-full h-[210px] p-[0px_16px_24px_16px] bg-[#F7F7F7] flex flex-col">
            <div className="flex justify-between items-start">
              <div className="text-[14px] font-semibold text-black">Marketing</div>
              <div className="w-[48px] h-[24px]">
                <Image src={star} alt="Image" width={48} height={24} />
              </div>
            </div>
            <div className="w-full text-[24px] font-bold text-black">Marketing Mastery</div>
            <div className="w-full text-[16px] font-normal text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            <div className="w-full flex justify-between items-center mt-auto">
              <Button variant={"enroll"}>Enroll Now</Button>
              <div className="text-[16px] font-medium text-black">$400</div>
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

export default Hero5;
