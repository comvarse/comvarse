import React from 'react';
import Link from 'next/link';

function TopMenu() {
    const menuJson = [
        {
            title: "Home",
            img: "/img/english.jpg",
            link: "/"
        },
        {
            title: "About",
            link: "/about"
        },
        {
            title: "Services",
            link: "/services"
        },
        {
            title: "Smart Contracts",
            link: "/data-operations"
        },
        {
            title: "MachineLearning",
            link: "/machine-learning"
        },
        {
            title: "Contact",
            link: "/contact"
        }
    ]

    return (
        <div className='lg:flex hidden  gap-5 tracking-normal min-w-[780px] text-[17px] flex-grow font-normal  place-content-end mr-[-15px] pr-[-15px]'>
            {
                menuJson.map(item => (
                    item.img ? (
                        <div className='flex relative rounded-full hover:bg-red-200/40 px-3 py-2 cursor-pointer'>
                            <img
                                className='w-[25px] h-[25px] rounded-full relative mr-4 '
                                src={item.img} alt=""
                            />
                            <span className=' '>
                                <Link href={item.link}>
                                    {item.title}
                                </Link>
                            </span>
                        </div>
                    ) : (
                        <div className='relative rounded-full hover:bg-red-200/40 px-3 py-2 cursor-pointer'>
                            <Link href={item.link}>
                                {item.title}
                            </Link>
                        </div>
                    )
                ))
            }
        </div>
    )
}

export default TopMenu
