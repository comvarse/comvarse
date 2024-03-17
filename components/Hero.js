import React from 'react'
import { MapIcon } from '@heroicons/react/outline';



function Hero({ category, topTitle, description, img, location, property }) {

    const heroDiv = `relative ${img} h-full bg-cover bg-no-repeat bg-center shadow-lg`;
    return (
        <div className='h-[600px]'>

            <div className={heroDiv}>
                <div className='absolute inset-0 w-full bg-black/60'></div>
                {/* <div className='absolute inset-0 w-[100%] bg-gradient-to-l from-orange-500/50 to-white/0'></div> */}

                <div className='relative h-full text-white'>
                    <div className=' pt-[150px] max-w-[1400px] px-5 mx-auto '>
                        <div className='text-[20px] text-left tracking-normal'>
                            <span className=' font-extralight'>{category}</span>
                        </div>
                        <div className='text-[48px] leading-[44px] mt-6 text-left tracking-tight font-bold lg:text-[60px]'>
                            <span className=''>{topTitle}</span>
                        </div>
                        <div className=' text-[24px] leading-[30px] mt-12 max-w-170 text-left h-2 text-gray-400 tracking-tight font-extralight'>
                            {description}
                        </div>

                        <div className='text-sm mt-32 max-w-80 text-left flex tracking-wider space-x-3'>
                            <MapIcon className='w-6 mr-2' />
                            <div>
                                {location}
                            </div>
                            <div className=''>
                                |
                            </div>
                            <div className='font-normal'>
                                {property}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
