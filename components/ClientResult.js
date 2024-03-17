import React from 'react'

function ClientResult() {
    const clientResJson = [
        {
            title: "Client Results",
            img: `bg-[url("https://www.bain.com/contentassets/d6c2bfd27a6c482c896dd3aa38762e89/v1_speedagilityempowermentunilever_thumbnail_768x768_2.png?width=350&height=350&mode=crop")]`,
            categorytext: "Consumer Products",
            category: "Products",
            subtitle: "Speed. Agility. Empowerment: Modernizing Unilever's Operating Model",
            description: "With 400 brands in 160 markets, Unilever has storied 100-year history. But to sustain its legacy, it needed to become simper and faster. At scale."
        },
        {
            title: "Client Results",
            img: `bg-[url("https://www.bain.com/contentassets/cddcf04e81634fda8803d82bad1e9bd1/15524-gameco-1x1.jpg?width=350&height=350&mode=crop")]`,
            categorytext: "Consumer Products",
            category: "Products",
            subtitle: "Speed. Agility. Empowerment: Modernizing Unilever's Operating Model",
            description: "With 400 brands in 160 markets, Unilever has storied 100-year history. But to sustain its legacy, it needed to become simper and faster. At scale."
        },
    ]
    return (
        <>
            <div className='max-w-[1400px] mx-auto px-5 my-5'>
                <div className='text-center'>
                    <span className=' text-center  px-5 py-2 text-4xl font-semibold bg-gray-50'>
                        Client Results
                    </span>
                    <div className='border-b border-gray-500 -mt-5'></div>
                </div>

                <div className='mt-20 grid grid-cols-1 md:grid-cols-2 gap-5  md:gap-8 lg:gap-10'>

                    {
                        clientResJson.map(item => (
                            <div className='grid grid-cols-1 mb-10 md:grid-cols-1 lg:grid-cols-2 gap-10 md:gap-6  '>
                                <div className={`relative ${item.img} h-[300px] bg-cover bg-no-repeat bg-center`}>
                                    <span className='bg-black text-white font-extralight text-sm uppercase px-3 py-1 absolute'>Products</span>
                                </div>
                                <div className='border-b border-gray-300'>
                                    <div className='font-bold'>Consumer Products</div>
                                    <div className='font-bold text-2xl mt-3 leading-7 md:text-2xl'>Speed. Agility. Empowerment: Modernizing Unilever's Operating Model</div>
                                    <div className='font-serif text-lg mt-4 pb-5'>With 400 brands in 160 markets, Unilever has storied 100-year history. But to sustain its legacy, it needed to become simper and faster. At scale.</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div >
            <div className='h-8'></div>

        </>
    )
}

export default ClientResult
