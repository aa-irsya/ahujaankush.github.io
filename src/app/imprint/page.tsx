"use client"

import FooterSection from "@/components/footer";
import ImprintSection from "@/components/sections/imprint/imprint";

export default function Home() {

    return (
        <main className="min-h-screen">
            <div className="space-y-32">
                <ImprintSection />
            </div>
            <FooterSection />
        </main>
    );
}
