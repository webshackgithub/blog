"use client";

import { cn } from "@/lib/utils";

interface TocItem {
    id: string;
    title: string;
    level: number;
}

interface TableOfContentsProps {
    items?: TocItem[];
    activeId?: string;
}

// Mock items for demo purposes if none provided
const DEFAULT_ITEMS: TocItem[] = [
    { id: "intro", title: "1. 시작하며", level: 2 },
    { id: "feature-1", title: "2. 주요 기능 소개", level: 2 },
    { id: "feature-1-1", title: "2.1. 서버 컴포넌트", level: 3 },
    { id: "feature-1-2", title: "2.2. 스트리밍", level: 3 },
    { id: "performance", title: "3. 성능 최적화", level: 2 },
    { id: "conclusion", title: "4. 결론", level: 2 },
];

export function TableOfContents({ items = DEFAULT_ITEMS, activeId = "feature-1" }: TableOfContentsProps) {
    return (
        <nav className="space-y-2">
            <h4 className="font-medium text-sm mb-4 text-foreground/80">목차</h4>
            <ul className="space-y-2 text-sm">
                {items.map((item) => (
                    <li
                        key={item.id}
                        style={{ paddingLeft: `${(item.level - 2) * 12}px` }}
                    >
                        <a
                            href={`#${item.id}`}
                            className={cn(
                                "block transition-colors hover:text-foreground",
                                activeId === item.id
                                    ? "text-primary font-medium"
                                    : "text-muted-foreground"
                            )}
                            onClick={(e) => e.preventDefault()} // Prevent jump for demo
                        >
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
