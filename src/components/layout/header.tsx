"use client";

import Link, { LinkProps } from "next/link";
import { Large } from "../ui/typography";
import React, { useState } from "react";

export function LinkHoverAnim({ children, ...props }: LinkProps & { children: React.ReactNode, className?: string }) {
  return (
    <Link
      className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center"
      {...props}
    >
      {children}
    </Link>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed w-full p-6 z-[999] backdrop-blur-md mix-blend-difference text-primary-foreground">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex justify-start">
          <Large>
            <Link href="/">Ankush Ahuja</Link>
          </Large>
        </div>

        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary-foreground focus:outline-none"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        <div className="hidden lg:flex space-x-6">
          <LinkHoverAnim href="/edu">EDUCATION</LinkHoverAnim>
          <LinkHoverAnim href="/res">RESEARCH</LinkHoverAnim>
          <LinkHoverAnim href="/prof">PROFESSIONAL</LinkHoverAnim>
          <LinkHoverAnim href="/Resume.pdf" locale={false}>
            RESUME
          </LinkHoverAnim>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} lg:hidden mt-4 space-y-4`}>
        <LinkHoverAnim href="/edu">EDUCATION</LinkHoverAnim>
        <LinkHoverAnim href="/res">RESEARCH</LinkHoverAnim>
        <LinkHoverAnim href="/prof">PROFESSIONAL</LinkHoverAnim>
        <LinkHoverAnim href="/Resume.pdf" locale={false}>
          RESUME
        </LinkHoverAnim>
      </div>
    </div>
  );
}
