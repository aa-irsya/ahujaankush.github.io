"use client"

import Section from "@/components/layout/layout";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Heading1, Heading2, Heading3, Paragraph } from "@/components/ui/typography";
import { DoubleArrowDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import { Typewriter } from 'react-simple-typewriter'

const summary = [{
    title: "Kayf",
    description: <>Data centralization & processing platform. Our application consists of a scalable enterprise search, allowing users to search across all workspaces simultaneously, and a real-time note-taking editor. The editor integrates seamlessly with workflow action providers, enabling users to directly access and process tracked data with ease.
        <br />
        Break free from the grind and reclaim your time with Kayf!</>,
    tags: ["AI", "Productivity", "Automation"],
    link: "https://kayf.app",
},
{
    title: "Robotics",
    description: <>
        Team leader for the school&apos;s Botball team. Besides strategy- and organization-related activities, I developed a robotics library to reduce device management overhead for new team members. It implements robot communication via Wi-Fi, advanced object detection via OpenCV, and a navigation system with collision detection. Utilities like a PID motor, smooth servo functions, and a field-to-graph mapper for robot navigation are included as well.
    </>,
    tags: ["Robotics", "OpenCV", "Low-level"],
    link: "https://github.com/ApeironOrg/apeiron-lib",
},
{
    title: "Fitness",
    description: <>
        I enjoy powerlifting, and I appreciate open-source software. Thus, I developed TrackIt - a web app that allows you to log your calories, macros, and workouts in one simple interface, with direct access to large food databases. It&apos;s self-hosted.
    </>,
    tags: ["Nutrition", "Fitness", "Web"],
    link: "https://github.com/ahujaankush/TrackIt",
},
{
    title: "School Representative",
    description: <>Elected as one of the three representatives of Vienna&apos;s largest high school. Member of the SGA, a committee responsible for making decisions and organizing events for around 2,700 students and over 400 teachers.</>,
    tags: ["Organization", "Decision Making", "SGA"],
    link: "https://www.tgm.ac.at/",
}
]

export default function Home() {
    return (
        <main className="flex w-screen flex-col grow items-center px-6 md:px-0 mt-20">
            <Section>
                <div className="absolute mt-[-30vmax] right-[-30vmax] w-[60vmax] h-[60vmax] rounded-full green-circle" />
                <div className="absolute mt-[35vmax] left-[-20vmax] w-[30vmax] h-[30vmax] rounded-full blue-circle" />
                <div className="flex flex-col md:space-y-6 lg:space-y-0">
                    <Heading1 className="!text-[10vw]">
                        <Typewriter
                            words={['Hello!', 'Servus!', 'Salut!', 'Hola!']}
                            loop={5}
                            cursor
                            cursorStyle='|'
                            typeSpeed={75}
                            deleteSpeed={50}
                            delaySpeed={3000}
                        />
                    </Heading1>
                    <Heading2>
                        I&apos;m Ankush. I enjoy solving problems.
                    </Heading2>
                </div>
                <Paragraph>
                    I&apos;ve always been curious about how things work. As a kid, I would take apart my toys just to see what was inside. That curiosity stuck with me and now drives how I learn. Instead of just focusing on one tool, I like to dig into the ideas and concepts behind it. This way of learning has made everything more interesting and keeps me excited about what I do.

                    I love solving problems, especially when it comes to math and algorithms. <br />
                    Right now, I&apos;m diving deep into AI while finishing up my HTL education at tgm.
                </Paragraph>
                <Link href="/#overview">
                    <Button className="mt-6">
                        <DoubleArrowDownIcon className="mr-2" />
                        Overview
                    </Button>
                </Link>
            </Section>
            <Separator className="z-[-2]" />
            <Section>
                <Heading2 id="overview">Overview</Heading2>
                {
                    summary.map((e, i) => (
                        <div className="flex flex-col space-y-8" key={`selected-projects-${i}`}>
                            <div className="flex mt-6">
                                <div className="flex flex-col flex-row grow space-y-2">
                                    <Heading3>
                                        <Link href={e.link} target="_blank">
                                            {e.title}
                                        </Link>
                                    </Heading3>
                                    <Paragraph>
                                        {e.description}
                                    </Paragraph>
                                    <div className="flex flex-row space-x-2">
                                        {e.tags.map((f, j) => (
                                            <div key={`project-${i}-tag-${j}`} className="p-1 px-2 bg-accent rounded">
                                                {f}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {i < summary.length - 1 ? <Separator className="z-[-2]" /> : null}
                        </div>
                    ))
                }
                <div className="absolute mt-[-10vmax] right-[-6vmax] w-[20vmax] h-[20vmax] rounded-full red-circle" />
            </Section>
        </main>
    );
}
