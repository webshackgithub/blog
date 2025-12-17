import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Youtube, Facebook, Instagram, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t bg-background">
            <div className="container px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
                    {/* Brand & Contact */}
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="text-xl font-bold tracking-tight">코드팩토리</span>
                        </Link>
                        <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                            <p>최신 기술 트렌드와 개발 경험을 공유합니다.</p>
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                <a href="mailto:jc@codefactory.ai" className="hover:text-foreground">
                                    jc@codefactory.ai
                                </a>
                            </div>
                            <p>010-1234-5678</p>
                        </div>

                        {/* Social Links */}
                        <div className="mt-6 flex gap-4">
                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                <Youtube className="h-5 w-5" />
                                <span className="sr-only">YouTube</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-foreground">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold">빠른 이동</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>
                                <Link href="/" className="hover:text-foreground">
                                    홈
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-foreground">
                                    블로그
                                </Link>
                            </li>
                            <li>
                                <Link href="/components-demo" className="hover:text-foreground">
                                    컴포넌트 데모
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal/Info */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold">정보</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li>
                                <Link href="#" className="hover:text-foreground">
                                    개인정보처리방침
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-foreground">
                                    이용약관
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="md:col-span-1 lg:col-span-1">
                        <h3 className="mb-4 text-sm font-semibold">뉴스레터 구독</h3>
                        <p className="mb-4 text-sm text-muted-foreground">
                            최신 포스트를 이메일로 받아보세요.
                        </p>
                        <div className="flex flex-col gap-2">
                            <Input
                                type="email"
                                placeholder="이메일 주소"
                                className="bg-background"
                            />
                            <Button>구독하기</Button>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} 코드팩토리. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
