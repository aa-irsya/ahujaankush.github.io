import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";

export default function AnimatedLink({ children, className, ...props }: LinkProps & { children: React.ReactNode, className?: string }) {
    return (
        <Link
            className={cn("relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center", className)}
            {...props}
        >
            {children}
        </Link>
    );
}
