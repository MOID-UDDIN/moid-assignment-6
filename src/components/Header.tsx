import React from 'react'
import Image from 'next/image'
import facebook from  '@/public/images/Facebook.svg'
import insta from '@/public/images/Instagram.svg'
import twitter from '@/public/images/Twitter.svg'
import linkedin from '@/public/images/LinkedIn.svg'
import DdsgnrLibrary from '@/public/logo/Ddsgnr Library.svg'
import column from '@/public/images/Column.svg'
import { Button } from "@/components/ui/button"



function Header() {
  return (
    <div>
      
      <div className='hidden lg:flex h-[54px] w-full bg-[#F7F7F7] items-center justify-between px-[62px]'>
        <div className='flex w-full max-w-[1154px] h-[54px] items-center justify-between py-3 mx-auto'>
         
          <section className='flex w-[386px] h-[30px] items-center gap-4'>
            <h1 className='text-sm text-[#000000]'>Phone Number: 956 742 455 678</h1>
            <h1 className='text-[14px] text-[#000000]'>Email: info@ddsgnr.com</h1>
          </section>

          
          <section className='flex h-[24px] gap-4 items-center'>
            <Image src={facebook} alt='facebook-icon' width={24} height={24} />
            <Image src={insta} alt='instagram-icon' width={24} height={24} />
            <Image src={twitter} alt='twitter-icon' width={24} height={24} />
            <Image src={linkedin} alt='linkedin-icon' width={24} height={24} />
          </section>
        </div>
      </div>

      
      <div className='hidden lg:flex w-full h-[72px] px-[64px] border-b border-solid border-[#676767] bg-[#F7F7F7] items-center'>
        <div className='flex w-full max-w-[1154px] h-[44px] items-center justify-between mx-auto'>
          
          <section>
            <Image src={DdsgnrLibrary} alt='logo' width={130.6} height={41} />
          </section>

          
          <section className='flex gap-8'>
            {['Home', 'Courses', 'Services', 'Achievement', 'About Us', 'Testimonial'].map((item) => (
              <div
                key={item}
                className='h-11 p-2 flex items-center justify-center border-b border-transparent hover:border-black'
              >
                <h1 className='text-[16px] text-black'>{item}</h1>
              </div>
            ))}
          </section>

          
          <div className='flex gap-4'>
            <Button
              variant='outline'
              className='w-[80px] h-10 px-5 py-2 rounded-[5px] text-[16px] text-black border-black'
            >
              Login
            </Button>

            <Button
              variant='outline'
              className='w-[95px] h-10 px-5 py-2 rounded-[5px] text-white bg-black border-black'
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>

      
      <div className='flex lg:hidden h-[54px] w-full bg-[#F7F7F7] items-center px-4'>
       
        <Image src={DdsgnrLibrary} alt='logo' width={130.6} height={41} />

        
        <div className='ml-auto'>
          <Image src={column} alt='menu-icon' width={48} height={48} />
        </div>
      </div>
    </div>
  );
}

export default Header;

