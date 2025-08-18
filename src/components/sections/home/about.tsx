import { MorphingDialog, MorphingDialogClose, MorphingDialogContainer, MorphingDialogContent, MorphingDialogDescription, MorphingDialogImage, MorphingDialogSubtitle, MorphingDialogTitle, MorphingDialogTrigger } from "@/components/motion-primitives/morphing-dialog";
import { ScrollView, ScrollViewStaggerWrapper } from "@/components/scroll-view";
import { ArrowRight } from "lucide-react";

interface Quicklink {
    title: string
    description: string
    image: string
    links: { title: string, link: string }[]
};

const quicklinks: Quicklink[] = [
    {
        title: "Curriculum Vitae",
        description:
            "A snapshot of my experience, skills, and background. Available for quick reference or download.",
        image: "/images/abstract-1.png",
        links: [
            { title: "Download CV", link: "/cv.pdf" }
        ]
    },

    {
        title: "Awards",
        description:
            "A detailed record of my competition achievements and recognitions, demonstrating proven problem-solving capabilities and technical excellence.",
        image: "/images/abstract-2.png",
        links: [
            { title: "ICPC", link: "/icpc" },
            { title: "Codeforces", link: "/codeforces" },
            { title: "Cloudflight Coding Contest", link: "/ccc" },
            { title: "Jugend Innovativ", link: "/jugend-innovativ" }
        ]
    },

    {
        title: "Projects & Publications",
        description:
            "A diverse collection of my work — including projects, case studies, articles, talks, and collaborations across different fields.",
        image: "/images/abstract-3.png",
        links: [
            { title: "Diploma Thesis: Kayf", link: "/diploma-thesis-kayf" },
            { title: "GCER: Choros", link: "/gcer-choros" },
        ]
    },
];


export default function AboutSection() {
    return (
        <section id="about">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <ScrollView>
                        <h2 className="text-balance text-4xl font-medium lg:text-5xl">
                            Purpose-Driven Problem Solving
                        </h2>
                    </ScrollView>
                    <ScrollView>
                        <p>
                            I solve problems by building solutions that stick. They work with your workflow, grow as you grow, and keep producing results. I can work alongside your team or handle it solo. What I care about most is making things simple, impactful, and lasting.
                        </p>
                    </ScrollView>
                </div>
                <ScrollView stagger delay={0.02}>
                    <div className="grid gap-10 grid-cols-1 md:grid-cols-3">
                        {quicklinks.map((link, index) => (
                            <MorphingDialog
                                transition={{
                                    type: "spring",
                                    bounce: 0.05,
                                    duration: 0.25,
                                }}
                                key={link.title + index}
                            >
                                <MorphingDialogTrigger
                                    style={{
                                        borderRadius: "12px",
                                    }}
                                    className="relative  flex aspect-[1/1] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
                                >
                                    <ScrollViewStaggerWrapper className="h-full w-full">
                                        <MorphingDialogImage
                                            src={link.image}
                                            alt="A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood."
                                            className="h-full w-full   absolute  "
                                        />
                                        <div className="z-10 flex flex-col justify-between h-full w-full py-5 px-4">
                                            <div className="self-end">
                                                <div className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1  shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                                                    <div className="bg-background group-hover:bg-muted size-8 overflow-hidden rounded-full duration-500 -rotate-45 ">
                                                        <div className="flex w-16 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                            <span className="flex size-8">
                                                                <ArrowRight className="m-auto size-4" />
                                                            </span>
                                                            <span className="flex size-8">
                                                                <ArrowRight className="m-auto size-4" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-center z-20 p-5 rounded-2xl relative bg-secondary">
                                                <MorphingDialogTitle className="">
                                                    {index + 1}
                                                </MorphingDialogTitle>
                                                <MorphingDialogSubtitle className="">
                                                    {link.title}
                                                </MorphingDialogSubtitle>
                                            </div>
                                        </div>
                                    </ScrollViewStaggerWrapper>
                                </MorphingDialogTrigger>
                                <MorphingDialogContainer>
                                    <MorphingDialogContent
                                        style={{
                                            borderRadius: "24px",
                                        }}
                                        className="pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]"
                                    >
                                        <MorphingDialogImage
                                            src={link.image}
                                            alt="A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood."
                                            className="h-full w-full"
                                        />
                                        <div className="p-6">
                                            <div className="flex items-center gap-4">
                                                <MorphingDialogTitle className="text-2xl text-zinc-700 dark:text-zinc-400">
                                                    {index + 1} {" ."}
                                                </MorphingDialogTitle>
                                                <MorphingDialogSubtitle className="text-2xl text-zinc-950 dark:text-zinc-50">
                                                    {link.title}
                                                </MorphingDialogSubtitle>
                                            </div>
                                            <MorphingDialogDescription
                                                disableLayoutAnimation
                                                variants={{
                                                    initial: { opacity: 0, scale: 0.8, y: 100 },
                                                    animate: { opacity: 1, scale: 1, y: 0 },
                                                    exit: { opacity: 0, scale: 0.8, y: 100 },
                                                }}
                                            >
                                                <p className="mt-2 text-zinc-500 dark:text-zinc-500">
                                                    {link.description}
                                                </p>

                                                <div className="space-x-2">
                                                    {
                                                        link.links.map((e, i) => {
                                                            return (
                                                                <a
                                                                    key={e.link + i}
                                                                    className="mt-2 inline-flex text-zinc-500 underline"
                                                                    href={e.link}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    {e.title}
                                                                </a>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </MorphingDialogDescription>
                                        </div>
                                        <MorphingDialogClose className="text-zinc-50" />
                                    </MorphingDialogContent>
                                </MorphingDialogContainer>
                            </MorphingDialog>
                        ))}
                    </div>
                </ScrollView>

            </div>
        </section>
    );
}
