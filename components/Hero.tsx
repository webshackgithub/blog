import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroProps {
    title: string;
    subtitle: string;
    backgroundImage: string;
    ctaText?: string;
    ctaLink?: string;
    className?: string; // 추가적인 스타일링을 위해
}

export function Hero({
    title,
    subtitle,
    backgroundImage,
    ctaText = "바로 가기",
    ctaLink = "#",
    className,
}: HeroProps) {
    return (
        <div
            className={cn(
                "relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat",
                className
            )}
            style={{
                backgroundImage: `url(${backgroundImage})`,
            }}
        >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center px-4 text-center text-white">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-balance">
                    {title}
                </h1>
                <p className="mb-8 max-w-2xl text-lg text-gray-200 sm:text-xl md:text-2xl text-balance">
                    {subtitle}
                </p>
                <Link href={ctaLink}>
                    <Button size="lg" className="text-lg font-semibold px-8 py-6">
                        {ctaText}
                    </Button>
                </Link>
            </div>
        </div>
    );
}
