"use client"
import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Subtitle from "@/components/Subtitle";
import Categories from "@/components/Categories";
import Tabzone from "@/components/Tabzone";
import Tabmaster from "@/components/Tabmaster";
import TabContent from "@/components/TabContent";
import Landscapes from "@/components/Landscapes";
import Footer from "@/components/Footer";
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import InfoCard from '@/components/InfoCard'
import ServiceMark from "@/components/ServiceMark";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  const heroJson = [
    {
      category: "Blockchain",
      topTitle: "Outsource Blockchain Projects with us",
      description: "Inspiring, award winning design meets modern, mobile-first service.",
      img: `bg-[url("/img/hero_tower.jpg")]`,
      location: 'Down Town Dubai',
      property: 'The Winchester'
    },
    {
      category: "Web Development",
      topTitle: "Outsource Web/WebUI Projects",
      description: "Inspiring, award winning design meets modern, mobile-first service.",
      img: `bg-[url("/img/dubnight.jpg")]`,
      location: 'West London',
      property: 'Dorchester Valley'
    },
    {
      category: "Latest Crypto",
      topTitle: "Dubai events",
      description: "Inspiring, award winning design meets modern, mobile-first service.",
      img: `bg-[url("/img/intr.jpg")]`,
      location: 'New York',
      property: 'Times Square'
    },
    {
      category: "Dine With Micro",
      topTitle: "Dubai events",
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
      <Carousel
        className="shadow-2xl"
        showArrows={true} transitionTime={1500} autoPlay={true} interval={12000} infiniteLoop={true} showThumbs={false}>
        {
          heroJson.map(item => (
            <Hero
              category={item.category}
              topTitle={item.topTitle}
              description={item.description}
              img={item.img}
              location={item.location}
              property={item.property}
            />
          ))
        }
      </Carousel>

      <Tabzone>
        <Subtitle
          subtitle={"A stay infused with creativity & culture"}
          pretext={"From award-winning interiors to curated neighborhood guides, our stays celebrate what’s special about each city we call home."}
          subtext={""}
        />

        <TabContent />

      </Tabzone>

      <div className=' h-8'></div>
      <Subtitle
        subtitle={"A world of choice"}
        pretext={"From a room for a night to a loft for as long as you like, there’s a Sonder for every occasion."}
        subtext={""}
      />

      <Categories />

      <Landscapes />

      <InfoCard />

      <ServiceMark />
      <div className="h-[80px]"></div>
    </main>
  );
}
