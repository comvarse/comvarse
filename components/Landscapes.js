import React from 'react'
import InnerSubtitle from './InnerSubtitle'

function Landscapes() {
    const landscapesJson = [
        {
            title: "Modern Family",
            description: "Modern family: meet Clarisa, Rivers and the Fabric family union.",
            linkText: "Technical Assessment",
            link: "http://amazon.com",
            img: "https://images.sonder.com/image/upload/q_auto:eco,c_scale,dpr_auto,f_auto,w_588/v1616609706/catalina/homepage/blog/sonder-spotlight-with-noxz.jpg"
        },
        {
            title: "Taste Buds",
            description: "Year end reflections with the developers of the inner working city of texas.",
            linkText: "Holy Grail of Buds",
            link: "http://amazon.com",
            img: "https://images.sonder.com/image/upload/q_auto:eco,c_scale,dpr_auto,f_auto,w_588/v1616609706/catalina/homepage/blog/modern-family.jpg"
        },
        {
            title: "Year-end Reflection",
            description: "Meet with lovers of food and drinks and make most connections worthwhile this season.",
            linkText: "Food lovers day",
            link: "http://amazon.com",
            img: "https://images.sonder.com/image/upload/q_auto:eco,c_scale,dpr_auto,f_auto,w_588/v1616609706/catalina/homepage/blog/tasting-new-york-city.jpg"

        },
        {
            title: "City Development",
            description: "Blockchain has powered the world since the last four years. Get to know more and the city.",
            linkText: "Blockchain Events",
            link: "http://amazon.com",
            img: "https://images.sonder.com/image/upload/q_auto:eco,c_scale,dpr_auto,f_auto,w_588/v1616609706/catalina/homepage/blog/year-end-reflection.jpg"
        },
    ]
    return (
        <>
            <div className=' bg-white '>
                <InnerSubtitle
                    subtitle={"Comvarse stories"}
                    pretext={"From the latest news to travel inspiration, learn more about Comvarse."}
                    subtext={""}
                />



                <div className='grid gap-20 w-full lg:max-w-[1400px] mx-auto  mt-[40px] px-5 pb-[140px] sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 '>
                    {
                        landscapesJson.map(item => (
                            <div className='hover:opacity-75 cursor-pointer'>
                                <img src={item.img} alt="" />
                                <div className='text-2xl mt-2'>
                                    {item.title}
                                </div>
                                <div className='text-[15px] mt-2'>
                                    {item.description}
                                </div>
                                <div className='text-md mt-3 underline cursor-pointer'>
                                    <a href={item.link}>{item.linkText}</a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Landscapes
