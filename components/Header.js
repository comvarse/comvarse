import React, { useState } from 'react'
import TopMenu from './TopMenu'
import Logo from './Logo'
import RightMenu from './RightMenu'
import { Inter } from "next/font/google";
import ResponsiveMenu from './ResponsiveMenu';


function Header() {
    function initialToggleState() {
        return false;
    }
    const [toggle, setToggle] = useState(() => initialToggleState);

    return (
        <header className='sticky top-0 z-10   py-3 shadow-lg   bg-black'>
            <div className='flex items-center justify-between w-full mx-auto max-w-[1400px] p-2 '>
                <div>
                    <Logo />
                </div>
                <div className='max-w-[800px]'>
                    <RightMenu toggle={toggle} setToggle={setToggle} />
                </div>

            </div>
            <ResponsiveMenu toggle={toggle} />

        </header>
    )
}

export default Header
