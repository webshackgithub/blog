import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="flex h-16 items-center justify-between px-4 relative">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-xl font-bold tracking-tight">코드팩토리</span>
                    </Link>
                </div>

                {/* Navigation - Desktop (Centered Absolutely) */}
                <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8 text-sm font-medium">
                    <Link
                        href="/"
                        className="transition-colors hover:text-foreground/80 text-foreground"
                    >
                        홈
                    </Link>
                    <Link
                        href="/blog"
                        className="transition-colors hover:text-foreground/80 text-foreground/60"
                    >
                        블로그
                    </Link>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <ModeToggle />
                    <Link href="/login">
                        <Button variant="ghost" size="sm">
                            로그인
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
