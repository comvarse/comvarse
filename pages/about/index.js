"use client"
import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Subtitle from "@/components/Subtitle";
import Categories from "@/components/Categories";
import Tabzone from "@/components/Tabzone";
import Tabmaster from "@/components/Tabmaster";
import TabContent from "@/components/TabContent";
import Landscapes from "@/components/Landscapes";
import Footer from "@/components/Footer";
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import SingleHero from "@/components/SingleHero";
import Subheader from '@/components/Subheader';
import ClientResult from '@/components/ClientResult';
import SendMail from "@/components/SendMail";
import ServiceMark from "@/components/ServiceMark";
import HorizontalLine from "@/components/HorizontalLine";
import ListOfItems from "@/components/ListOfItems";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
    const heroJson = [
        {
            topTitle: "A Better Way",
            midTitle: "to stay",
            description: "Inspiring, award winning design meets modern, mobile-first service.",
            img: `bg-[url("/img/contact.jpg")]`,
            location: 'Down Town Dubai',
            property: 'The Winchester'
        },
        {
            topTitle: "Different mobile",
            midTitle: "for clients",
            description: "Inspiring, award winning design meets modern, mobile-first service.",
            img: `bg-[url("/img/dubnight.jpg")]`,
            location: 'West London',
            property: 'Dorchester Valley'
        },
        {
            topTitle: "Latest Crypto",
            midTitle: "Dubai events",
            description: "Inspiring, award winning design meets modern, mobile-first service.",
            img: `bg-[url("/img/intr.jpg")]`,
            location: 'New York',
            property: 'Times Square'
        },
        {
            topTitle: "Dine With Micro",
            midTitle: "Dubai events",
            description: "Inspiring, award winning design meets modern, mobile-first service.",
            img: `bg-[url("/img/dine.jpg")]`,
            location: 'New York',
            property: 'Times Square'
        },

    ]
    return (
        <main>
            <Head>
                <title>Comvarse</title>
            </Head>
            {/* <SingleHero
                topTitle={"Contact Services"}
                midTitle={"Informational Disclosure"}
                description={"Accelerate your organization’s results through your people and teams"}
                img={`bg-[url("/img/dubnight.jpg")]`}
                location={"Churchill, Los Angels"}
                property={"Birmingham Building"}
            /> */}

            <Subtitle
                subtitle={"A stay infused with creativity & culture"}
                pretext={"From award-winning interiors to curated neighborhood guides, our stays celebrate what’s special about each city we call home."}
                subtext={""}
            />

            <div className=" h-8"></div>

            <ClientResult />



            <Subheader title={"London"} />

            <div className=" relative max-w-[1400px] mx-auto px-5 py-10 grid  gap-10 text-[22px] font-serif lg:grid-cols-2">
                <div className=" space-y-20">
                    <div>
                        How do you grow sustainably while preserving an insurgent mindset? How do you boost efficiency while remaining flexible? How do you launch and scale innovation while continuing to execute tried and tested processes? We help you balance all these considerations and more, ensuring that you attract and retain great talent and effectively manage organizational change.
                    </div>

                    <div>
                        How do you grow sustainably while preserving an insurgent mindset? How do you boost efficiency while remaining flexible? How do you launch and scale innovation while continuing to execute tried and tested processes? We help you balance all these considerations and more, ensuring that you attract and retain great talent and effectively manage organizational change.
                    </div>

                    <div>
                        How do you grow sustainably while preserving an insurgent mindset? How do you boost efficiency while remaining flexible? How do you launch and scale innovation while continuing to execute tried and tested processes? We help you balance all these considerations and more, ensuring that you attract and retain great talent and effectively manage organizational change.
                    </div>

                    <div>
                        How do you grow sustainably while preserving an insurgent mindset? How do you boost efficiency while remaining flexible? How do you launch and scale innovation while continuing to execute tried and tested processes? We help you balance all these considerations and more, ensuring that you attract and retain great talent and effectively manage organizational change.
                    </div>

                    <ListOfItems />

                </div>
                <div className="relative ">
                    <div className=" lg:sticky lg:top-[100px] border-gray-600 border border-t-[8px] p-8 md:ml-0 lg:ml-[25%]">
                        <div className="font-sans font-extrabold text-2xl">Defcon</div>
                        <div className="font-extralight text-xl mt-5">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-[50px]"></div>
            <HorizontalLine />
            <div className="h-[90px]"></div>
            <SendMail />


            <div className="h-[150px]"></div>

            <ServiceMark />
            <div className="h-[80px]"></div>
        </main>
    );
}
