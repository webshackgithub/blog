import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { ReactNode } from "react";

interface AdminPageHeaderProps {
    title: string;
    description?: string;
    backLink?: string;
    backLinkText?: string;
    actions?: ReactNode;
}

export function AdminPageHeader({
    title,
    description,
    backLink,
    backLinkText = "Back to List",
    actions,
}: AdminPageHeaderProps) {
    return (
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between pb-6 border-b mb-6">
            <div className="space-y-1">
                {backLink && (
                    <Button variant="ghost" size="sm" className="-ml-2 mb-2 h-auto p-2 text-muted-foreground" asChild>
                        <Link href={backLink}>
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            {backLinkText}
                        </Link>
                    </Button>
                )}
                <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
                {description && (
                    <p className="text-muted-foreground">{description}</p>
                )}
            </div>
            {actions && <div className="flex items-center gap-2">{actions}</div>}
        </div>
    );
}
