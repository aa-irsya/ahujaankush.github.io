"use client"

import Section from "@/components/layout/layout";
import { Separator } from "@/components/ui/separator";

import { Heading1, Heading2, Heading3, Large, Mute, Paragraph } from "@/components/ui/typography";
import Link from "next/link";
import React from "react";
import { Typewriter } from 'react-simple-typewriter'

const institutions = [{
    title: "tgm - Die Schule der Technik",
    description: <>
        Specialized in Data Science & AI within the Department of Information Technology. Elected as one of the three student representatives for over 2700 students of Vienna&apos;s largest school. Served as team leader for the robotics team in the Botball competition. Member of the school&apos;s fire emergency response team and taskforce. Enjoyed problem-solving through informatics and math olympiad. Diploma thesis: <Link href="https://kayf.app" className="font-bold underline">Kayf</Link>
    </>,
    timeframe: "September 2020 - June 2025",
    degree: "HTL Matura (Engineer's degree), ISCED 5",
    link: "https://www.tgm.ac.at/",
},
{
    title: "University of Vienna",
    description: "Participated in a series of summer courses on computer science, artificial intelligence, and astronomy.",
    timeframe: "Summer 2024",
    degree: "",
    link: "https://www.univie.ac.at/en/",
},
]

export default function Education() {
    return (
        <main className="flex flex-col grow items-center px-6 md:px-0 mt-20">
            <Section>
                <div className="absolute mt-[-10vmax] left-[-20vmax] w-[40vmax] h-[40vmax] rounded-full red-circle" />
                <div className="flex flex-col md:space-y-6 lg:space-y-0">
                    <Heading1 >
                        <Typewriter
                            words={['Education', 'Knowledge', 'Learning']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={75}
                            deleteSpeed={50}
                            delaySpeed={3000}
                        />
                    </Heading1>
                </div>
                <Paragraph>
                    I&apos;m currently in my final year of high school at Vienna&apos;s largest school, <Link href="https://www.tgm.ac.at/" className="font-bold underline">tgm</Link>, where I specialized in data science and artificial intelligence. I&apos;m very grateful for the privilege I&apos;ve had at tgm of being able to deep dive into one topic, and I&apos;m also thankful for the people I&apos;ve met along the way.
                </Paragraph>
                <Heading2 id="projects" className="mt-4">Institutions</Heading2>
                {
                    institutions.map((e, i) => (
                        <div className="flex flex-col space-y-8" key={`selected-projects-${i}`}>
                            <div className="flex mt-6">
                                <div className="flex flex-col flex-row grow space-y-2">
                                    <Heading3>
                                        <Link href={e.link} target="_blank">
                                            {e.title}
                                        </Link>
                                    </Heading3>
                                    <Large>
                                        {e.degree}
                                    </Large>
                                    <Mute>
                                        {e.timeframe}
                                    </Mute>
                                    <Paragraph>
                                        {e.description}
                                    </Paragraph>
                                </div>
                            </div>
                            {i < institutions.length - 1 ? <Separator /> : null}
                        </div>
                    ))
                }
                <div className="absolute mt-[-20vmax] right-[-30vmax] w-[60vmax] h-[60vmax] rounded-full purple-circle" />
            </Section>
        </main>
    );
}
