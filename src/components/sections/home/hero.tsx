import React from "react";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { ArrowRightIcon } from "lucide-react";
import { NAV_LINKS } from "@/content/nav";
import AnimatedLink from "@/components/ui/link";
import { Card } from "@/components/ui/card";
import Image from "next/image";

function AnimatedGroupBp({ children, delay = 1, className }: { children: React.ReactNode, delay?: number, className?: string }) {
    return (
        <AnimatedGroup
            variants={{
                container: {
                    visible: {
                        transition: {
                            delayChildren: delay,
                        },
                    },
                },
                item: {
                    hidden: {
                        opacity: 0,
                        y: 20,
                    },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            type: "spring",
                            bounce: 0.3,
                            duration: 2,
                        },
                    },
                },
            }}
            className={className}
        >
            {children}
        </AnimatedGroup>

    )
}

export default function HeroSection() {
    return (
        <section className="flex overflow-hidden min-h-screen">
            <div className="absolute inset-2 -z-10 overflow-hidden rounded-3xl border">
                <Image
                    src={"/images/abstract-1.png"}
                    alt={"Cover image"}
                    height="480"
                    width="720"
                    loading="lazy"
                    className="size-full -scale-x-100 object-cover opacity-80 dark:opacity-40"
                />
            </div>


            <div className="relative py-24 md:py-36 px-8 md:px-0 flex-1 max-w-7xl mx-auto my-auto">
                <div
                    className="z-99 absolute hidden md:block right-0 top-1/2 -translate-y-1/2"
                >
                    <AnimatedGroupBp delay={0.3}>
                        <Card className="px-8 bg-card/50 backdrop-blur-lg">
                            <ul className="flex w-full flex-col gap-4 text-sm">
                                {NAV_LINKS.map((item, index) => (
                                    <li key={index}>
                                        <AnimatedLink
                                            href={item.href}
                                        >
                                            {item.name}
                                        </AnimatedLink>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </AnimatedGroupBp>
                </div>

                <TextEffect
                    preset="fade-in-blur"
                    speedSegment={0.3}
                    as="h1"
                    className="text-balance text-5xl md:text-7xl max-w-4xl font-semibold"
                >
                    Hi, I&apos;m Ankush 👋
                </TextEffect>

                <TextEffect
                    preset="fade-in-blur"
                    speedSegment={0.3}
                    as="h2"
                    className="mt-2 text-balance text-4xl md:text-5xl max-w-4xl font-semibold"
                >
                    I build tools that drive growth.
                </TextEffect>

                <div className="mt-8 max-w-lg">
                    <TextEffect
                        per="line"
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        delay={0.5}
                        as="p"
                        className="text-balance text-xl md:text-2xl"
                    >
                        I help teams turn complexity into momentum with strategic automation, AI migration, and custom tools tailored to you with no platform strings attached.
                    </TextEffect>

                    <AnimatedGroupBp>
                        <Button
                            asChild
                            size="lg"
                            iconPlacement="right"
                            className="h-14 mt-6 px-5 py-6 text-base rounded-full"
                            icon={ArrowRightIcon}
                            effect={'expandIcon'}
                            data-cal-link="ahujaankush"
                            data-cal-config='{"theme":"dark"}'
                        >
                            <span className="text-nowrap text-xl font-medium">Let&apos;s talk</span>
                        </Button>
                    </AnimatedGroupBp>
                </div>
            </div>
        </section >
    );
}
