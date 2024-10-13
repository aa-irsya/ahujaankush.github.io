"use client"

import Section from "@/components/layout/layout";
import { Separator } from "@/components/ui/separator";

import { Heading1, Heading2, Heading3, Large, Mute, Paragraph } from "@/components/ui/typography";
import Link from "next/link";
import React from "react";
import { Typewriter } from 'react-simple-typewriter'

const institutions = [{
  title: "tgm - Die Schule der Technik",
  description: "Specializing in data science and artificial intelligence within the department of information technology. Led the Botball team and actively participated in Olympiads and coding contests. Elected as Second Vice Student representative, SGA member, and Class Representative. Member of the school's taskforce. Responsible for the evacuation of students in case of an emergency as a member of the Fire Preventation Team. Diploma thesis: kayf.app/tracer, building a scalable semantic enterprise search engine.",
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
          I&apos;m currently in my final year of highschool at Vienna&apos;s largest school, <Link href="https://www.tgm.ac.at/" className="font-bold underline">tgm</Link>, where I specialized in data science and artificial intelligence. I&apos;m very grateful for privelege I&apos;ve had at tgm of being able to deep dive into one topic.
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
      </Section>
    </main>
  );
}
