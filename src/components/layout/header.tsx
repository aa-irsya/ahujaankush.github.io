import Link, { LinkProps } from "next/link";
import { Large } from "../ui/typography";
import React from "react";

export function LinkHoverAnim({ children, ...props }: LinkProps & { children: React.ReactNode, className?: string }
) {
  return (
    <Link className="relative relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" {...props}>{children}</Link>
  )
}

export default function Header() {
  return (
    <div className="fixed flex flex-row w-full p-6 z-999 backdrop-blur-md">
      <div className="grow flex justify-start">
        <Large>
          <Link href={'/'}>
            Ankush Ahuja
          </Link>
        </Large>
      </div>
      <div className="grow flex justify-end space-x-6">
        <LinkHoverAnim href="/edu">EDUCATION</LinkHoverAnim>
        <LinkHoverAnim href="/res">RESEARCH</LinkHoverAnim>
        <LinkHoverAnim href="/prof">PROFESSIONAL</LinkHoverAnim>
        <LinkHoverAnim href="/Resume.pdf" locale={false}>RESUME</LinkHoverAnim>
      </div>
    </div>
  )
}
