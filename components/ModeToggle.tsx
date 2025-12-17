"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Switch } from "@/components/ui/switch"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    // Prevent hydration mismatch
    if (!mounted) {
        return <div className="w-[1.2rem] h-[1.2rem] opacity-0" />
    }

    return (
        <div className="flex items-center gap-2">
            <Sun className="h-[1.2rem] w-[1.2rem] opacity-70" />
            <Switch
                checked={theme === "dark"}
                onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                aria-label="Toggle dark mode"
            />
            <Moon className="h-[1.2rem] w-[1.2rem] opacity-70" />
        </div>
    )
}
