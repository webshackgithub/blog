import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { login } from "./actions";

export default async function LoginPage({
    searchParams,
}: {
    searchParams: Promise<{ message?: string; error?: string }>
}) {
    const { message, error } = await searchParams

    return (
        <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
            <Card className="w-full max-w-md shadow-lg">
                <CardHeader className="space-y-1 text-center">
                    <div className="flex justify-center mb-2">
                        {/* 로고 영역: 실제 로고가 있다면 이미지로 교체 */}
                        <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                            <span className="text-primary-foreground font-bold text-xl">B</span>
                        </div>
                    </div>
                    <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
                    <CardDescription>
                        계정을 통해 더 많은 기능을 이용하세요.
                    </CardDescription>
                    {message && (
                        <div className="p-3 bg-green-100 border border-green-200 text-green-700 rounded-md text-sm">
                            {message}
                        </div>
                    )}
                    {error && (
                        <div className="p-3 bg-red-100 border border-red-200 text-red-700 rounded-md text-sm">
                            {error}
                        </div>
                    )}
                </CardHeader>
                <CardContent className="grid gap-4">
                    <form className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">이메일</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="name@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">비밀번호</Label>
                                <Link
                                    href="#"
                                    className="text-xs text-muted-foreground hover:underline hover:text-primary transition-colors"
                                    tabIndex={-1}
                                >
                                    비밀번호를 잊으셨나요?
                                </Link>
                            </div>
                            <Input id="password" name="password" type="password" required />
                        </div>
                        <Button formAction={login} className="w-full mt-2">
                            로그인
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex flex-col space-y-2">
                    <div className="text-center text-sm text-muted-foreground">
                        계정이 없으신가요?{" "}
                        <Link
                            href="/signup"
                            className="font-medium text-primary hover:underline underline-offset-4"
                        >
                            회원가입
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}

