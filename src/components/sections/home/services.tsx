"use client"

import { OrbitingCircles } from "@/components/orbiting-circles";
import { ScrollView, ScrollViewStaggerWrapper } from "@/components/scroll-view";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { SERVICES_LIST } from "@/content/services";
import {
    SiCalendly,
    SiLangchain,
    SiMake,
    SiN8n,
    SiNotion,
    SiZapier,
} from '@icons-pack/react-simple-icons'
import { Brain, LayoutDashboard, MessageCircle, SearchCode, Workflow } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ServicesSection() {
    const accordionRef = useRef<HTMLDivElement>(null);
    const [topMargin, setTopMargin] = useState(0);

    useEffect(() => {
        if (accordionRef.current) {
            const containerHeight = accordionRef.current.offsetHeight;
            setTopMargin((350 - containerHeight) / 2);
        }
    }, [accordionRef]);

    return (
        <section id="services">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <ScrollView>
                        <h2 className="text-4xl font-medium lg:text-5xl">
                            Ways I Can Help You
                        </h2>
                    </ScrollView>
                    <ScrollView delay={0.2}>
                        <p>
                            Sick of wasting time on repeat tasks, messy data, or tools that never connect? I help your team work smoother by cutting overhead, fixing inefficiencies, and freeing you to focus on what actually grows your business. Need an extra set of hands inside your team? I can jump in and push projects forward. Need someone to step back, audit your systems, and build what is missing? I do that too. I use whatever tools fit best and create custom solutions when nothing off the shelf gets the job done.
                        </p>
                    </ScrollView>
                </div>
                <div className="mt-12 md:mt-24 grid grid-cols-5 gap-12">
                    <Accordion type="single" className={`relative col-span-5 md:col-span-2 h-fit`} style={{ marginTop: `${topMargin}px` }} collapsible ref={accordionRef}>
                        {SERVICES_LIST.map((service, index) => (
                            <AccordionItem value={service.name} key={`service-${service.name}-${index}`}>
                                <AccordionTrigger>{service.name}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-muted-foreground">
                                        {service.description}
                                    </p>
                                    <div className="mt-4">
                                        {service.tags.map((tag, index) => (
                                            <div key={index} className="inline-block">
                                                <ScrollViewStaggerWrapper>
                                                    <Badge
                                                        className="mr-2 mb-2"
                                                        variant="secondary"
                                                    >
                                                        {tag}
                                                    </Badge>
                                                </ScrollViewStaggerWrapper>
                                            </div>
                                        ))}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))
                        }
                    </Accordion>
                    <div className="relative flex my-auto h-[350px] w-full flex-col items-center justify-center overflow-hidden col-span-5 md:col-span-3">
                        <OrbitingCircles iconSize={40} radius={160}>
                            <SiNotion />
                            <SiN8n />
                            <SiLangchain />
                            <SiMake />
                            <SiCalendly />
                            <SiZapier />
                        </OrbitingCircles>
                        <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
                            <SearchCode />
                            <Workflow />
                            <Brain />
                            <MessageCircle />
                            <LayoutDashboard />
                        </OrbitingCircles>
                    </div>
                </div>
            </div>
        </section >
    );
}
