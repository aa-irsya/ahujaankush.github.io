import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { Inter } from "next/font/google";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import Footer from "@/components/layout/footer";
import { Separator } from "@/components/ui/separator";
import "../../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ankush Ahuja, SV Wahlen",
  description: "CS & AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body className={`${inter.className} flex flex-col`}>
        <TooltipProvider >
          {children}
          <Separator />
          <Footer />
        </TooltipProvider>
      </body>
    </html >
  );
}
