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
import { signup } from "./actions";

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
                            <Label htmlFor="password">비밀번호</Label>
                            <Input id="password" name="password" type="password" required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="confirm-password">비밀번호 확인</Label>
                            <Input
                                id="confirm-password"
                                name="confirm-password"
                                type="password"
                                required
                            />
                        </div>
                        <Button formAction={signup} className="w-full mt-2">
                            계정 생성
                        </Button>
                    </form>
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


