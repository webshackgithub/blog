"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Heading {
    id: string;
    text: string;
    level: number;
}

interface TableOfContentsProps {
    headings: Heading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "-100px 0px -66% 0px" }
        );

        headings.forEach((heading) => {
            const element = document.getElementById(heading.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [headings]);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Header height or spacing
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });

            // Update active ID immediately on click
            setActiveId(id);
        }
    };

    if (headings.length === 0) return null;

    return (
        <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                목차
            </h3>
            <nav className="flex flex-col space-y-2">
                {headings.map((heading) => (
                    <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        onClick={(e) => handleClick(e, heading.id)}
                        className={cn(
                            "text-sm transition-colors hover:text-primary leading-snug",
                            heading.level === 3 ? "pl-4" : "",
                            activeId === heading.id
                                ? "text-primary font-medium"
                                : "text-muted-foreground"
                        )}
                    >
                        {heading.text}
                    </a>
                ))}
            </nav>
        </div>
    );
}
