import React from 'react'
import Image from 'next/image'
import sliderDots from '@/public/h7/Slider Dots.svg'
import sliderButtons from '@/public/h7/Slider Buttons.svg'
import stars from '@/public/h7/Stars.svg'
import img1 from '@/public/h7/img1.svg'
import img2 from '@/public/h7/img2.svg'
import img3 from '@/public/h7/img3.svg'


function Hero7() {
    return (
        <div className="bg-[#F7F7F7] flex flex-col items-center justify-center p-8">
           
            <div className="w-full max-w-[1280px] flex flex-col gap-8">
                
                <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold text-black">
                        Customer testimonials
                    </h1>
                    <p className="text-base md:text-lg text-black">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>

                
                <div className="flex flex-wrap justify-center gap-8">
                    
                    <div className="w-[362.67px] sm:w-[362.67px] lg:w-[362.67px] border border-black p-4 flex flex-col gap-4">
                        <Image src={stars} alt="Stars" width={116} height={18.89} />
                        <p className="text-black">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
                        </p>
                        <div className="flex items-center gap-4 mt-auto">
                            <Image src={img1} alt="Avatar" width={56} height={56} />
                            <div>
                                <p className="text-sm font-semibold">James Nduku</p>
                                <p className="text-sm">Software Developer</p>
                            </div>
                        </div>
                    </div>
                   
                    <div className="w-[362.67px] sm:w-[362.67px] lg:w-[362.67px] border border-black p-4 flex flex-col gap-4">
                        <Image src={stars} alt="Stars" width={116} height={18.89} />
                        <p className="text-black">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
                        </p>
                        <div className="flex items-center gap-4 mt-auto">
                            <Image src={img2} alt="Avatar" width={56} height={56} />
                            <div>
                                <p className="text-sm font-semibold">Erick Kipkemboi</p>
                                <p className="text-sm">Scrum Master</p>
                            </div>
                        </div>
                    </div>
                 
                    <div className="w-[362.67px] sm:w-[362.67px] lg:w-[362.67px] border border-black p-4 flex flex-col gap-4">
                        <Image src={stars} alt="Stars" width={116} height={18.89} />
                        <p className="text-black">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
                        </p>
                        <div className="flex items-center gap-4 mt-auto">
                            <Image src={img3} alt="Avatar" width={56} height={56} />
                            <div>
                                <p className="text-sm font-semibold">Stephen Kerubo</p>
                                <p className="text-sm">UI/UX Designer</p>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="w-full flex justify-between items-center">
                    <Image src={sliderDots} alt="Dots" width={72} height={8} />
                    <Image src={sliderButtons} alt="Buttons" width={111} height={48} />
                </div>
            </div>
        </div>
    );
}

export default Hero7;

