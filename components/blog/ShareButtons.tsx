"use client";

import { Button } from "@/components/ui/button";
import { Copy, Facebook, Twitter, Linkedin } from "lucide-react";
import { useState } from "react";

interface ShareButtonsProps {
    url?: string;
    title?: string;
    orientation?: "horizontal" | "vertical";
}

export function ShareButtons({
    url = "",
    title = "",
    orientation = "vertical"
}: ShareButtonsProps) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        // In a real app, use window.location.href if url is not provided
        const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");
        navigator.clipboard.writeText(shareUrl).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    const containerClass = orientation === "vertical"
        ? "flex flex-col gap-2"
        : "flex flex-row gap-2";

    return (
        <div className={containerClass}>
            <Button variant="outline" size="icon" onClick={handleCopy} title="링크 복사">
                <Copy className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" title="트위터 공유">
                <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" title="페이스북 공유">
                <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" title="링크드인 공유">
                <Linkedin className="h-4 w-4" />
            </Button>
        </div>
    );
}
