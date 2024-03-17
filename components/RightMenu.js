import React from 'react'
import { MenuIcon, UserCircleIcon } from '@heroicons/react/solid'
import TopMenu from './TopMenu'
import { Archivo_Narrow } from 'next/font/google';
import { useState } from 'react';

function RightMenu({ toggle, setToggle }) {
    function toggleMenu() {
        setToggle(toggle => !toggle);
    }

    return (
        <div className='relative flex space-x-2 items-center justify-end text-white'>

            <TopMenu />

            <div className='hover:bg-red-200/40 hover:cursor-pointer flex items-center space-x-2 border-1 border-gray-300 rounded-full px-4 py-2'>
                <MenuIcon className='h-6 w-7' onClick={toggleMenu} />
            </div>
        </div>
    )
}

export default RightMenu
