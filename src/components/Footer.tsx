import React from 'react'
import Image from 'next/image'
import logo from '@/public/footer/Ddsgnr Library.svg'


function Footer() {
  return (
    <div className="w-full p-[20px] md:p-[80px]">
      <div className="w-full max-w-[1120px] mx-auto space-y-[40px] md:space-y-[80px] flex flex-col items-center">
       
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full">
          <div className="w-full md:w-[500px]">
            <p className="text-[18px] font-semibold text-black text-center md:text-left">
              Subscribe to our newsletter
            </p>
            <p className="text-[16px] text-black text-center md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="w-full md:w-[400px] flex flex-col gap-4">
            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="flex items-center border border-black rounded-md p-3 w-full md:w-[265px]">
                <p className="text-[16px] text-[#505050]">Enter your email</p>
              </div>
              <button className="border border-black rounded-md px-6 py-3 w-full md:w-[119px]">
                <span className="text-[16px] text-black">Subscribe</span>
              </button>
            </div>
            <p className="text-[12px] text-black text-center md:text-left">
              By subscribing you agree to with our Privacy Policy
            </p>
          </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[20px] md:gap-[40px] w-full">
          <div className="flex flex-col items-center md:items-start gap-[16px]">
            <Image
              src={logo}
              alt="logo"
              width={130.6}
              height={30.38}
              className="w-[130.6px] h-[30.38px]"
            />
          </div>

          <div className="flex flex-col items-center md:items-start space-y-2">
            <p className="text-[16px] font-semibold text-black">Courses</p>
            {["Business", "Development", "Technology", "Design", "Programming"].map((item) => (
              <p key={item} className="text-[14px] font-normal text-black">
                {item}
              </p>
            ))}
          </div>

          <div className="flex flex-col items-center md:items-start space-y-2">
            <p className="text-[16px] font-semibold text-black">Resources</p>
            {["Career", "Resume", "Learning", "Interview Preparation", "Jobs"].map((item) => (
              <p key={item} className="text-[14px] font-normal text-black">
                {item}
              </p>
            ))}
          </div>

          <div className="flex flex-col items-center md:items-start space-y-2">
            <p className="text-[16px] font-semibold text-black">About US</p>
            {[
              "Contact",
              "Help/Support",
              "FAQ",
              "Terms and Conditions",
              "Partners",
            ].map((item) => (
              <p key={item} className="text-[14px] font-normal text-black">
                {item}
              </p>
            ))}
          </div>
        </div>

        
        <div className="w-full border-t border-black flex flex-col sm:flex-row justify-center items-center gap-[16px] sm:gap-0 py-4">
          <p className="text-[14px] text-black text-center">
            2023 Ddsgnr. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {["Privacy Policy", "Terms of Service", "Cookies Settings"].map((link) => (
              <p key={link} className="text-[14px] text-black underline">
                {link}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
