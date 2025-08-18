import { cn } from "@/lib/utils";
import Image from "next/image";


export const Logo = ({ className }: { className?: string }) => {
    return (
        <Image
            src="/logo.svg"
            alt={"Logo"}
            width={10}
            height={10}
            className={cn("size-7 invert-0 dark:invert", className)}
        />
    );
};
