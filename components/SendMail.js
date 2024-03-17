import React from 'react'

function SendMail() {
    return (
        <>
            <div className='px-5 max-w-[1400px] mx-auto'>
                <div className='border border-gray-400 p-[42px]   grid lg:grid-cols-2 gap-10'>
                    <div>
                        <div className=' text-[40px]  md:text-[45px]'>Ready to talk?</div>
                        <div className='mt-10 text-[24px] leading-[28px] md:text-[32px] md:leading-[40px] tracking-wide font-serif  text-gray-600'>To talk to experts in our field right away? Please, Fill the form and we will reply back.</div>
                    </div>
                    <div>
                        <div className=' text-[20px] lg:text-2xl'>We work with ambitious leaders who want to define the future, not hide from it. Together, we achieve extraordinary outcomes.</div>
                        <div className='mt-8'>
                            <form action="">
                                <input
                                    placeholder={'Your email'}
                                    className='border border-gray-300 bg-gray-100/50 w-full text-[22px] tracking-wide text-gray-500 font-light px-5 py-4 focus:outline-none'
                                    type="text" />
                                <button className=' bg-red-600 text-white px-10 py-5 mt-8 uppercase tracking-tight font-extralight'>
                                    Contact us
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SendMail
