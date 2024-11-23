import React from 'react'
import Image from 'next/image'
import icon from '@/public/h6/Social Icons.svg'
import img1 from '@/public/h6/img1.svg'
import img2 from '@/public/h6/img2.svg'
import img3 from '@/public/h6/img3.svg'
import img4 from '@/public/h6/img4.svg'
import img5 from '@/public/h6/img5.svg'
import img6 from '@/public/h6/img6.svg'

function Hero6() {
  return (
    <div className="w-full px-4 py-16 bg-[#F7F7F7] flex flex-col items-center gap-[80px]">
     
      <div className="w-full max-w-[768px] flex flex-col items-center gap-[24px]">
        
        <div className="w-full text-[48px] font-bold text-[#000000] text-center">
          Our Team
        </div>
        
        <div className="w-full text-[18px] text-[#000000] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>

      
      <div className="w-full max-w-[1280px] grid grid-cols-1 md:grid-cols-3 gap-[48px] justify-items-center">
        
        <div className="flex flex-col items-center gap-[24px]">
          <Image
            src={img1} 
            alt="Team Member 1"
            width={80}
            height={80}
          />
          <div className="text-[20px] font-semibold text-[#000000] text-center">
            James Nduku
          </div>
          <div className="text-[18px] text-[#000000] text-center">
            Marketing Coordinator
          </div>
          <Image
            src={icon} 
            alt="Icon"
            width={100}
            height={24}
          />
        </div>

        
        <div className="flex flex-col items-center gap-[24px]">
          <Image
            src={img2} 
            alt="Team Member 2"
            width={80}
            height={80}
          />
          <div className="text-[20px] font-semibold text-[#000000] text-center">
            Joseph Munyambu
          </div>
          <div className="text-[18px] text-[#000000] text-center">
            Nursing Assistant
          </div>
          <Image
            src={icon} 
            alt="Icon"
            width={100}
            height={24}
          />
        </div>

        
        <div className="flex flex-col items-center gap-[24px]">
          <Image
            src={img3} 
            alt="Team Member 3"
            width={80}
            height={80}
          />
          <div className="text-[20px] font-semibold text-[#000000] text-center">
            Joseph Ngumbau
          </div>
          <div className="text-[18px] text-[#000000] text-center">
            Medical Assistant
          </div>
          <Image
            src={icon} 
            alt="Icon"
            width={100}
            height={24}
          />
        </div>
      </div>

      
      <div className="w-full max-w-[1280px] grid grid-cols-1 md:grid-cols-3 gap-[48px] justify-items-center">
        
        <div className="flex flex-col items-center gap-[24px]">
          <Image
            src={img4} 
            alt="Team Member 4"
            width={80}
            height={80}
          />
          <div className="text-[20px] font-semibold text-[#000000] text-center">
            Erick Kipkemboi
          </div>
          <div className="text-[18px] text-[#000000] text-center">
            Web Designer
          </div>
          <Image
            src={icon} 
            alt="Icon"
            width={100}
            height={24}
          />
        </div>

        
        <div className="flex flex-col items-center gap-[24px]">
          <Image
            src={img5} 
            alt="Team Member 5"
            width={80}
            height={80}
          />
          <div className="text-[20px] font-semibold text-[#000000] text-center">
            Stephen Kerubo
          </div>
          <div className="text-[18px] text-[#000000] text-center">
            President of Sales
          </div>
          <Image
            src={icon} 
            alt="Icon"
            width={100}
            height={24}
          />
        </div>

        
        <div className="flex flex-col items-center gap-[24px]">
          <Image
            src={img6} 
            alt="Team Member 6"
            width={80}
            height={80}
          />
          <div className="text-[20px] font-semibold text-[#000000] text-center">
            John Leboo
          </div>
          <div className="text-[18px] text-[#000000] text-center">
            Dog Trainer
          </div>
          <Image
            src={icon} 
            alt="Icon"
            width={100}
            height={24}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero6;
