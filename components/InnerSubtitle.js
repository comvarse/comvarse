import React from 'react'

function InnerSubtitle({ subtitle, pretext, subtext }) {
    return (
        <div className='max-w-[1400px] mx-auto relative px-5'>
            <div className=' h-20'></div>
            <div className='text-5xl font-bold'>
                <span className=''>{subtitle}</span>
            </div>

            <div className='text-lg font-extralight mt-6 w-[350px]'>
                {pretext}
            </div>
            <div className='text-lg font-extralight mt-0'>
                {subtext}
            </div>
        </div>
    )
}

export default InnerSubtitle
