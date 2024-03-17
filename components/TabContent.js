import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import Image from "next/image";

function TabContent() {
    const [tabIndex, setTabIndex] = useState(0);

    const tabJson = [
        {
            img: "/img/sobha.jpg",
            title: "The Heidi Building",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia. If you are going to use a passage of Lorem Ipsum, you need to be sure there",
            linkText: "Contrary to popular belief",
            link: "http://google.com"
        },
        {
            img: "/img/philly.jpg",
            title: "Chelsea Green",
            description: `Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as`,
            linkText: "Section 30",
            link: "http://google.com"
        },
        {
            img: "/img/interior.jpg",
            title: "The Randolph",
            description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. Very popular during the Renaissance and the many mansions of Rudolpha`,
            linkText: "Dubai downtown in summer",
            link: "http://google.com"
        },


    ]

    return (
        <>
            <Tabs
                selectedIndex={tabIndex}
                onSelect={(index) => setTabIndex(index)}
                className={"max-w-[1400px] mx-auto px-5 mt-[40px]"}
            >
                <TabList>
                    <Tab>London</Tab>
                    <Tab>New York</Tab>
                    <Tab>Dubai</Tab>
                </TabList>

                {
                    tabJson.map(item => (
                        <TabPanel>
                            <div>
                                <div className="relative w-full h-full mt-[40px] md:flex">
                                    <img

                                        className=" rounded-se-[60px] rounded-es-[80px] md:w-[350px] lg:w-[500px]"
                                        src={item.img}
                                    />

                                    <div className="md:ml-[30px]">
                                        <div className="mt-[30px] tracking-wide text-[40px] font-bold lg:text-6xl">
                                            <span className="">{item.title}</span>
                                        </div>
                                        <div className=" ml-1 mt-5 w-full">
                                            {item.description}
                                        </div>

                                        <div className=" ml-1 mt-5 w-full text-blue-800 text-md font-normal underline">
                                            <a href={item.link}>{item.linkText} {">>"}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    ))
                }

            </Tabs >
        </>
    )
}

export default TabContent
