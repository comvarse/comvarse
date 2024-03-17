import React from 'react'
import InnerSubtitle from './InnerSubtitle'

function InfoCard() {
    return (
        <div className='max-w-[1400px] mx-auto pb-40 border-t border-gray-300'>
            <InnerSubtitle
                subtitle={"Moments..."}
                pretext={"From the latest news to travel inspiration, learn more about Comvarse."}
                subtext={""}
            />
            <div className='h-8'></div>
            <div className='grid gap-5 w-full lg:grid-cols-2 px-5 lg:gap-10'>
                <div className=''>
                    <img className='w-full' src="/img/sobha.jpg" alt="" />
                </div>
                <div>
                    <h3 className='text-[50px] md:text-[40px] md:leading-[40px] lg:text-[60px] lg:leading-[50px] 2xl:text-[70px] 2xl:leading-[80px] font-bold'>Bold steps forward.</h3>
                    <div className='text-[20px] text-gray-500 font-extralight mt-4 leading-8 md:text-[22px]'>See how we’ve helped ambitious clients achieve extraordinary outcomes.</div>

                    <div className='mt-5'>
                        <div className='text-[25px] border-b-2 border-gray-300 font-bold'>How we helped</div>
                        <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-2 lg:gap-3 md:gap-2'>
                            <div className=' border-t-8 border-gray-600 mt-4 p-5 border-b border-b-gray-200 '>
                                <div className='text-2xl mt-1 md:text-2xl font-serif'>Lorem but the majority have suffered slightly believable.</div>
                                <div className=' mt-4 font-bold'>View offering</div>
                            </div>
                            <div className=' border-t-8 border-t-gray-600 mt-4 p-5 border border-gray-300'>
                                <div className='text-2xl mt-1 font-bold'>Comvarse Omnichannel</div>
                                <div className=' mt-3 font-serif text-xl'>Lorem but the majority have suffered alteration in some.</div>
                                <div className=' mt-4 font-bold text-right'>View offering</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default InfoCard
