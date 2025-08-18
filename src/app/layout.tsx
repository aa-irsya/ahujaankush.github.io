import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { HeroHeader } from "@/components/header";

const inter = Inter({
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Ankush Ahuja | Automation & AI Consultant",
    description:
        "Automation and AI consultant helping teams streamline workflows, integrate AI, and build custom tools. Cut inefficiencies and scale with smarter systems.",
    openGraph: {
        title: "Ankush Ahuja | Automation & AI Consultant",
        description:
            "I help businesses streamline workflows, migrate to AI, and develop custom tools to reduce overhead and boost growth.",
        url: "https://yourdomain.com",
        siteName: "Ankush Ahuja",
        images: [
            {
                url: "https://ahuja.app/logo_white_bg.png",
                width: 1200,
                height: 630,
                alt: "Ankush Ahuja – Automation & AI Consultant",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Ankush Ahuja | Automation & AI Consultant",
        description:
            "Helping teams turn complexity into momentum with workflow automation, AI strategy, and custom tools.",
        images: ["https://ahuja.app/logo_white_bg.png"],
    },
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className="scroll-smooth">
            <body
                className={`${inter.className} antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <HeroHeader />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
