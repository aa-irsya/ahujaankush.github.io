"use client";

import Link, { LinkProps } from "next/link";
import { Large } from "../ui/typography";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";

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

export default function Header() {
  return (
    <div className="fixed w-full p-6 z-[999] backdrop-blur-md">
      <div className="flex justify-between items-center">
        <div className="flex justify-start">
          <Large className="absolute self-center transition-all hover:scale-105">
            <Link href="/">Ankush Ahuja</Link>
          </Large>
        </div>

        <Sheet>
          <SheetTrigger className="lg:hidden">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </SheetTrigger>
          <SheetContent side="top" className="z-[1000]">
            <SheetHeader>
              <SheetTitle>Ankush Ahuja</SheetTitle>
              <SheetDescription>
                CS & AI, Founder@<Link className="underline" href="https://kayf.app">Kayf.app</Link>
              </SheetDescription>
            </SheetHeader>
            <div className="space-y-4 mt-4">
              <LinkHoverAnim href="/edu">EDUCATION</LinkHoverAnim>
              <LinkHoverAnim href="/res">RESEARCH</LinkHoverAnim>
              <LinkHoverAnim href="/prof">PROFESSIONAL</LinkHoverAnim>
              <LinkHoverAnim href="/Resume.pdf" locale={false}>
                RESUME
              </LinkHoverAnim>
            </div>
          </SheetContent>
        </Sheet>

        <div className="hidden lg:flex space-x-6">
          <LinkHoverAnim href="/edu">EDUCATION</LinkHoverAnim>
          <LinkHoverAnim href="/res">RESEARCH</LinkHoverAnim>
          <LinkHoverAnim href="/prof">PROFESSIONAL</LinkHoverAnim>
          <LinkHoverAnim href="/Resume.pdf" locale={false}>
            RESUME
          </LinkHoverAnim>
        </div>
      </div>
    </div>
  );
}
