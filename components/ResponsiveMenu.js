import React from 'react'
import Link from 'next/link';
import { FaHome } from 'react-icons/fa'
import { IoIosCart } from 'react-icons/io'
import { IoSettingsOutline } from "react-icons/io5";
import { PiProjectorScreenDuotone } from "react-icons/pi";
import { FaServicestack } from "react-icons/fa6";
import { BsFacebook, BsInstagram, BsPinterest, BsTwitter } from 'react-icons/bs'
import { useState } from 'react';


function ResponsiveMenu({ toggle }) {


    return (
        <div>
            <div className={` mt-6 duration-500 lg:hidden flex flex-col w-[70%] h-screen fixed bg-black/70 text-white top-[40px] ${toggle ? `left-[0]` : `left-[-100%]`}`}>
                <Link href="/" className='hover:text-green-400 p-5 flex'><FaHome className='text-[15px] text-l mt-[5px] ml-1 mr-2' /> Home </Link>
                <Link href="/" className='hover:text-green-400 p-5 flex'><IoIosCart className='text-[15px] text-l mt-[5px] ml-1 mr-2' />Products</Link>
                <Link href="/" className='hover:text-green-400 p-5 flex'><IoSettingsOutline className='text-[15px] text-l mt-[5px] ml-1 mr-2' />Categories</Link>
                <Link href="/" className='hover:text-green-400 p-5 flex'><PiProjectorScreenDuotone className='text-[15px] text-l mt-[5px] ml-1 mr-2' />Projects</Link>
                <Link href="/" className='hover:text-green-400 p-5 flex'><FaServicestack className='text-[15px] text-l mt-[5px] ml-1 mr-2' />Services</Link>

                <div className=' flex gap-5 items-center mt-28'>
                    <div className='bg-cyan-600 w-[150px] h-[1.5px] '></div>
                    <Link href="https://www.facebook.com/comvarse" target='_blank'><span><BsFacebook size={22} className=' text-blue-600 hover:-translate-y-1.5 duration-300 hover:text-gray-500' /></span></Link>
                    <Link href="https://www.twitter.com/comvarse" target='_blank'><span><BsTwitter size={22} className=' text-blue-400 hover:-translate-y-1.5 duration-300 hover:text-gray-500' /></span></Link>
                    <Link href="https://www.instagram.com/comvarse" target='_blank'><span><BsInstagram size={22} className=' text-orange-600 hover:-translate-y-1.5 duration-300 hover:text-gray-500' /></span></Link>
                    <Link href="https://www.pinterest.com/comvarse" target='_blank'><span><BsPinterest size={22} className=' text-red-600 hover:-translate-y-1.5 duration-300 hover:text-gray-500' /></span></Link>
                </div>
            </div>
        </div>
    )
}

export default ResponsiveMenu
