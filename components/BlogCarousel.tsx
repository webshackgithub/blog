"use client";

import * as React from "react";
import { BlogCard, BlogCardProps } from "@/components/BlogCard";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

interface BlogCarouselProps {
    posts: BlogCardProps[];
}

export function BlogCarousel({ posts }: BlogCarouselProps) {
    return (
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold tracking-tight">추천 아티클</h2>
                <div className="hidden md:flex gap-2">
                    {/* Navigation buttons will be positioned absolutely by the Carousel component, 
                but we can also add custom controls here if needed. 
                For now we rely on the default CarouselPrevious/Next which are absolute.
            */}
                </div>
            </div>
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent className="-ml-4">
                    {posts.map((post, index) => (
                        <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                            <div className="h-full p-1">
                                <BlogCard {...post} />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}
