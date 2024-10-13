"use client"

import Section from "@/components/layout/layout";
import { Separator } from "@/components/ui/separator";

import { Heading1, Heading2, Heading3, Large, Mute, Paragraph } from "@/components/ui/typography";
import Link from "next/link";
import React from "react";
import { Typewriter } from 'react-simple-typewriter'

const organizations = [
  {
    company: "Vienna University of Technology",
    position: "Machine Learning Intern",
    description: "WIP",
    timeframe: "July 2024 - August 2024",
    link: "https://www.tuwien.at/en/",
  },
  {
    company: "Dynatrace Autria GmbH",
    position: "Software Engineering Intern",
    description: "WIP",
    timeframe: "July 2023 - August 2023",
    link: "https://www.dynatrace.com/",
  },
]

export default function Professional() {
  return (
    <main className="flex flex-col grow items-center px-6 md:px-0 mt-20">
      <Section>
        <div className="flex flex-col md:space-y-6 lg:space-y-0">
          <Heading1 >
            <Typewriter
              words={['Professional', 'Experience', 'Volunteering']}
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
          WIP
        </Paragraph>
        <Heading2 className="mt-4">Organizations</Heading2>
        {
          organizations.map((e, i) => (
            <div className="flex flex-col space-y-8" key={`selected-projects-${i}`}>
              <div className="flex mt-6">
                <div className="flex flex-col flex-row grow space-y-2">
                  <Heading3>
                    <Link href={e.link} target="_blank">
                      {e.company}
                    </Link>
                  </Heading3>
                  <Large>
                    {e.position}
                  </Large>
                  <Mute>
                    {e.timeframe}
                  </Mute>
                  <Paragraph>
                    {e.description}
                  </Paragraph>
                </div>
              </div>
              {i < organizations.length - 1 ? <Separator /> : null}
            </div>
          ))
        }
      </Section>
    </main>
  );
}
