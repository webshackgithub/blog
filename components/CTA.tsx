"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface CTAProps {
    title?: string;
    description?: string;
    buttonText?: string;
    onSubscribe?: (email: string) => void;
    className?: string; // 추가적인 스타일링을 위해
}

export function CTA({
    title = "코드팩토리에 구독하세요.",
    description = "최신 기술 소식과 튜토리얼을 가장 먼저 받아보세요. 스팸은 보내지 않습니다.",
    buttonText = "구독하기",
    onSubscribe,
    className,
}: CTAProps) {
    return (
        <div
            className={cn(
                "rounded-xl border bg-card text-card-foreground shadow-sm p-8 md:p-12",
                "flex flex-col items-center text-center space-y-6",
                className
            )}
        >
            <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
                <p className="text-muted-foreground max-w-[600px]">{description}</p>
            </div>

            <form
                className="flex flex-col w-full max-w-sm gap-3 sm:flex-row sm:max-w-md"
                onSubmit={(e) => {
                    e.preventDefault();
                    // 실제 구현에서는 여기서 폼 데이터를 처리합니다.
                    const formData = new FormData(e.currentTarget);
                    const email = formData.get("email") as string;
                    if (onSubscribe) onSubscribe(email);
                    console.log("Subscribed with:", email);
                }}
            >
                <Input
                    type="email"
                    name="email"
                    placeholder="이메일 주소를 입력하세요"
                    required
                    className="flex-1"
                />
                <Button type="submit" size="lg">
                    {buttonText}
                </Button>
            </form>
        </div>
    );
}
