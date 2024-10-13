"use client"

import Section from "@/components/layout/layout";
import { Separator } from "@/components/ui/separator";

import { Heading1, Heading2, Heading3, Large, Mute, Paragraph } from "@/components/ui/typography";
import Link from "next/link";
import React from "react";
import { Typewriter } from 'react-simple-typewriter'

export default function Education() {
  return (
    <main className="flex flex-col grow items-center px-6 md:px-0 mt-20">
      <Section>
        <div className="flex flex-col md:space-y-6 lg:space-y-0">
          <Heading1 >
            <Typewriter
              words={['WIP', 'Work In Progress']}
              loop={5}
              cursor
              cursorStyle='_'
              typeSpeed={75}
              deleteSpeed={50}
              delaySpeed={3000}
            />
          </Heading1>
        </div>
      </Section>
    </main>
  );
}
