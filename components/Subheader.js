import React from 'react'

function Subheader({ title }) {
    return (
        <>
            <div className='  relative max-w-[1400px] mx-auto px-5'>
                <div className='border-b border-gray-400 text-[24px] w-full relative'>
                    <span className=' border-b-4 border-gray-500 relative -top-[2px] py-1'>{title}</span>
                </div>
            </div>
        </>
    )
}

export default Subheader
