import React from 'react'
import Link from 'next/link'

function Categories() {
    const catInfo = [
        {
            img: "/img/dmcc.jpg",
            title: "State of the art fintec",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
            linkText: "Fintecs",
            link: "http://google.com"
        },
        {
            img: "/img/timesquare.jpg",
            title: "Machine learning and AI",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
            linkText: "Artificial Intelligence",
            link: "http://google.com"
        },
        {
            img: "/img/wallstr.png",
            title: "Crypto & Digital Currency",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
            linkText: "Crypto",
            link: "http://google.com"
        },

    ]
    return (
        <div className=' shadow-sm border-b border-gray-300'>
            <div className=' h-5'></div>
            <div className='grid w-full lg:max-w-[1400px] mx-auto gap-20 p-5 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 md:gap-7 lg:gap-10'>
                {
                    catInfo.map(item => (
                        <div className=''>
                            <div className='p-[1px] rounded-none overflow-hidden'>
                                <img
                                    className='w-full rounded-none border-b-red-300'
                                    src={item.img} alt="" />
                            </div>
                            <div className='text-2xl mt-3 py-2'>
                                {item.title}
                            </div>
                            <div className='text-sm mt-2 py-2 '>
                                {item.description}
                            </div>
                            <div className='text-bold text-md underline mt-2'>
                                <Link href={item.link}>
                                    {item.linkText}
                                </Link>
                            </div>

                        </div>
                    ))
                }
            </div >
            <div className='h-28'></div>
        </div >
    )
}

export default Categories
