"use client"

import Section from "@/components/layout/layout";

import { Heading1 } from "@/components/ui/typography";
import React from "react";
import { Typewriter } from 'react-simple-typewriter'

export default function Education() {
  return (
    <main className="flex flex-col grow items-center px-6 md:px-0 mt-20">
      <Section>
        <div className="flex flex-col md:space-y-6 lg:space-y-0">
          <Heading1 >
            <Typewriter
              words={['WIP', 'Work In Progress', "I'm still working on my papers..."]}
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
