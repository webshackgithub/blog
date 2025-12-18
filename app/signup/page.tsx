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
import { Separator } from "@/components/ui/separator";
import { Github } from "lucide-react";
import Link from "next/link";

export default function SignupPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
            <Card className="w-full max-w-md shadow-lg">
                <CardHeader className="space-y-1 text-center">
                    <div className="flex justify-center mb-2">
                        <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                            <span className="text-primary-foreground font-bold text-xl">B</span>
                        </div>
                    </div>
                    <CardTitle className="text-2xl font-bold">계정 생성</CardTitle>
                    <CardDescription>
                        이메일로 새 계정을 만들고 시작하세요.
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" className="w-full">
                            <Github className="mr-2 h-4 w-4" />
                            Github
                        </Button>
                        <Button variant="outline" className="w-full">
                            <svg role="img" viewBox="0 0 24 24" className="mr-2 h-4 w-4">
                                <path
                                    fill="currentColor"
                                    d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                                />
                            </svg>
                            Google
                        </Button>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <Separator />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">
                                또는 이메일로 계속하기
                            </span>
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="name">이름</Label>
                        <Input id="name" placeholder="홍길동" required />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">이메일</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="name@example.com"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">비밀번호</Label>
                        <Input id="password" type="password" required />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="confirm-password">비밀번호 확인</Label>
                        <Input id="confirm-password" type="password" required />
                    </div>
                    <Button className="w-full mt-2">계정 생성</Button>
                </CardContent>
                <CardFooter className="flex flex-col space-y-2">
                    <div className="text-center text-sm text-muted-foreground">
                        이미 계정이 있으신가요?{" "}
                        <Link
                            href="/login"
                            className="font-medium text-primary hover:underline underline-offset-4"
                        >
                            로그인
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
