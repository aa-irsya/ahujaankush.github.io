"use client"

import AboutMeSection from "@/components/sections/home/about";
import HeroSection from "@/components/sections/home/hero";
import ServicesSection from "@/components/sections/home/services";
import TestimonialsSection from "@/components/sections/home/testimonials";
import FooterSection from "@/components/footer";
import ContactSection from "@/components/sections/home/contact";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export default function Home() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: "ahujaankush" });
            cal("ui", {
                layout: "column_view",
                theme: "dark",
                styles: {
                    branding: { brandColor: "#000000" },
                },

            });
        })();
    }, []);

    return (
        <main className="min-h-screen">
            <div className="space-y-32">
                <HeroSection />
                <ServicesSection />
                <AboutMeSection />
                {/*
            <TestimonialsSection />
            */}
                <ContactSection />
            </div>
            <FooterSection />
        </main>
    );
}
