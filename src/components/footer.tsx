"use client";
import { Logo } from "@/components/logo";
import Link from "next/link";
import { motion } from "motion/react";
import { ScrollView } from "./scroll-view";
import { NAV_LINKS } from "@/content/nav";

const footer_links = [...NAV_LINKS, { name: "Imprint", href: "/imprint" }]

export default function FooterSection() {
    return (
        <footer className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <ScrollView>
                    <Link
                        href="/"
                        aria-label="go home"
                        className="mx-auto block size-fit"
                    >
                        <Logo />
                    </Link>
                </ScrollView>
                <ScrollView stagger delay={0.1}>
                    <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                        {footer_links.map((link, index) => (
                            <div key={link.name}>
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                                        visible: {
                                            opacity: 1,
                                            scale: 1,
                                            filter: "blur(0px)",
                                        },
                                    }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary block duration-150"
                                    >
                                        <span>{link.name}</span>
                                    </Link>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </ScrollView>
                <ScrollView delay={0.15} viewMargin="0px 0px -20px 0px">
                    <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                        <Link
                            href="https://www.linkedin.com/in/ahujaankush/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="text-muted-foreground hover:text-primary block"
                        >
                            <svg
                                className="size-6"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" />
                            </svg>
                        </Link>

                        <Link
                            href="https://github.com/aa-irsya"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="text-muted-foreground hover:text-primary block"
                        >
                            <svg
                                className="size-6"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </svg>
                        </Link>

                        <Link
                            href="https://codeforces.com/profile/irsya"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Codeforces"
                            className="text-muted-foreground hover:text-primary block"
                        >
                            <svg
                                className="size-6"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.673 21 0 20.328 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.827 0-1.5-.672-1.5-1.5v-15c0-.828.673-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z" />
                            </svg>
                        </Link>
                    </div>
                </ScrollView>
                <ScrollView delay={0.2} viewMargin="0px 0px -20px 0px">
                    <span className="text-muted-foreground block text-center text-sm">
                        © {new Date().getFullYear()} Ankush Ahuja, All rights reserved
                    </span>
                </ScrollView>
            </div>
        </footer>
    );
}
