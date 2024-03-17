import React from 'react'
import FooterLogo from './FooterLogo'

function Footer() {
    return (
        <div className='bg-black'>
            <div className='grid lg:grid-cols-4 gap-y-10 py-24  text-gray-200  max-w-[1400px] px-20 mx-auto'>

                <div className='space-y-3 text-xs text-gray-400 text-extralight'>
                    <span className=''><FooterLogo /></span>
                    <h5 className='font-normal text-2xl text-white/50 border-b-[1px] border-b-gray-700 mr-[25%] md:mr-[50%] pb-3 lowercase'><span className=''>about</span></h5>
                    <p>How Airbnb works</p>
                    <p>Newsroom</p>
                    <p>Investors</p>
                    <p>Airbnb Plus</p>
                    <p>Airbnb Luxe</p>

                </div>
                <div className='space-y-3 text-xs text-gray-400'>
                    <h5 className='font-extralight text-2xl text-white/50 border-b-[1px] border-b-gray-700 mr-[25%] md:mr-[50%]  pb-3 lowercase'><span className=''>Community</span></h5>

                    <p>Accessibility</p>
                    <p>This is not a real site</p>
                    <p>It's a pretty awesome clone</p>
                    <p>Referrals accepted</p>
                    <p>Positions</p>

                    <div className='py-[5px]'></div>
                    <h5 className='font-extralight text-2xl text-white/50 border-b-[1px] border-b-gray-700 mr-[25%] md:mr-[50%] pb-3 lowercase'><span className=''>Sanity</span></h5>

                    <p>How Airbnb works</p>
                    <p>Newsroom</p>
                    <p>Investors</p>
                    <p>Airbnb Plus</p>
                    <p>Airbnb Luxe</p>

                </div>

                <div className='space-y-3 text-xs text-gray-400'>
                    <h5 className='font-extralight text-2xl text-white/50 border-b-[1px] border-b-gray-700 mr-[25%] md:mr-[50%]  pb-3 lowercase'><span className=''>Host</span></h5>

                    <p>Dexterity Morning</p>
                    <p>Presentations</p>
                    <p>Zero to Hero Stack</p>
                    <p>Students Plus</p>
                    <p>Join Luxe</p>
                    <p>Easter Eggs</p>
                    <p>Win Triggers</p>
                </div>

                <div className='space-y-3 text-xs text-gray-400'>
                    <h5 className='font-extralight text-2xl text-white/50 border-b-[1px] border-b-gray-700 mr-[25%] md:mr-[50%]  pb-3 lowercase'><span className=''>Support</span></h5>

                    <p>Help Center</p>
                    <p>Trust and Safety</p>
                    <p>Youtube Videos</p>

                </div>
            </div>

        </div>
    )
}

export default Footer
