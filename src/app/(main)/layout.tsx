import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/layout/header";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import Footer from "@/components/layout/footer";
import { Separator } from "@/components/ui/separator";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ankush Ahuja",
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
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider >
            <Header />
            {children}
            <Separator />
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html >
  );
}
