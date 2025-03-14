"use client";

import { useState, useEffect, useRef } from "react";
import { faker } from "@faker-js/faker";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const PAGE_SIZE = 20;

// 📌 Định nghĩa hàm tạo dữ liệu giả lập BÊN NGOÀI component
const generateFakePosts = (count: number, startId: number = 1) => {
    return Array.from({ length: count }, (_, i) => ({
        id: startId + i,
        name: faker.person.fullName(),
        avatar: faker.image.avatar(),
        image: faker.image.urlPicsumPhotos({ width: 600, height: 400 }),
        content: faker.lorem.sentences(2),
    }));
};

export default function InfiniteScroll() {
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const observerRef = useRef<HTMLDivElement | null>(null);

    // 📌 Lần đầu tiên chạy, tạo danh sách post
    useEffect(() => {
        setPosts(generateFakePosts(PAGE_SIZE));
    }, []);

    // 📌 Khi cuộn đến cuối, thêm bài viết mới
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !loading) {
                    setLoading(true);
                    setTimeout(() => {
                        setPosts((prev) => [
                            ...prev,
                            ...generateFakePosts(PAGE_SIZE, prev.length + 1),
                        ]);
                        setLoading(false);
                    }, 1000);
                }
            },
            { threshold: 1.0 }
        );

        if (observerRef.current) observer.observe(observerRef.current);

        return () => observer.disconnect();
    }, [loading]);

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">Post</h1>

            {posts.length === 0 ? (
                <div className="flex flex-col gap-4 mt-4">
                    {[...Array(5)].map((_, i) => (
                        <Skeleton key={i} className="h-24 w-full rounded-lg" />
                    ))}
                </div>
            ) : (
                <div className="space-y-4">
                    {posts.map((post) => (
                        <Card key={post.id} className="shadow-lg">
                            <CardHeader className="flex flex-row gap-4 items-center">
                                <Image src={post.avatar} alt="Avatar" width={40} height={40} className="rounded-full" />
                                <CardTitle>{post.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-2">{post.content}</p>
                                <Image src={post.image} alt="Post Image" width={600} height={400} className="rounded-lg" />
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}

            <div ref={observerRef} className="h-10"></div>

            {loading && (
                <div className="flex flex-col gap-4 mt-4">
                    {[...Array(3)].map((_, i) => (
                        <Skeleton key={i} className="h-24 w-full rounded-lg" />
                    ))}
                </div>
            )}
        </div>
    );
}
