"use client"

import Link, { LinkProps } from "next/link";
import { Large } from "../ui/typography";
import React from "react";
import { Courier_Prime } from "next/font/google";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "../ui/button";

const courier_prime = Courier_Prime({ subsets: ["latin"], weight: '700' });

export function LinkHoverAnim({ children, ...props }: LinkProps & { children: React.ReactNode, className?: string }) {
  return (
    <Link
      className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center"
      {...props}
    >
      {children}
    </Link>
  );
}

function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default function Header() {
  return (
    <div className="fixed w-full p-6 z-[2] backdrop-blur-md">
      <div className="flex justify-between items-center">
        <div className="flex justify-start">
          <Large className={` absolute self-center transition-all hover:scale-105 ${courier_prime.className}`}>
            <Link href="/">Ankush Ahuja</Link>
          </Large>
        </div>

        <div className="flex flex-row items-center justify-center space-x-2 lg:hidden">
          <Sheet>
            <SheetTrigger>
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </SheetTrigger>
            <SheetContent side="top">
              <SheetHeader>
                <SheetTitle>Ankush Ahuja</SheetTitle>
                <SheetDescription>
                  CS & AI, Founder@<Link className="underline" href="https://kayf.app">Kayf.app</Link>
                </SheetDescription>
              </SheetHeader>
              <div className="space-y-4 mt-4">
                <LinkHoverAnim href="/education">EDUCATION</LinkHoverAnim>
                <LinkHoverAnim href="/research">RESEARCH</LinkHoverAnim>
                <LinkHoverAnim href="/professional">PROFESSIONAL</LinkHoverAnim>
                <LinkHoverAnim href="/Resume.pdf" locale={false}>
                  RESUME
                </LinkHoverAnim>
              </div>
            </SheetContent>
          </Sheet>
          <ModeToggle />
        </div>

        <div className="hidden lg:flex space-x-6">
          <LinkHoverAnim href="/education">EDUCATION</LinkHoverAnim>
          <LinkHoverAnim href="/research">RESEARCH</LinkHoverAnim>
          <LinkHoverAnim href="/professional">PROFESSIONAL</LinkHoverAnim>
          <LinkHoverAnim href="/Resume.pdf" locale={false}>
            RESUME
          </LinkHoverAnim>
        </div>
        <div className="hidden lg:block">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
