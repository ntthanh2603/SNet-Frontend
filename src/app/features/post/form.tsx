"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Upload } from "lucide-react";
import Image from "next/image";
import avatar from "@/app/profile/default-avatar.jpg"
export default function PostForm() {
    const [text, setText] = useState("");
    const [image, setImage] = useState<string | null>(null);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => setImage(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    const handlePost = () => {
        console.log("Post submitted:", { text, image });
    };

    return (
        <Card className="w-full max-w-lg p-4">
            <CardHeader className="flex items-center space-x-4">
                <Image src={avatar} width={40} height={40} alt="User" className="rounded-full" />
                <span className="font-semibold">Tên Người Đăng</span>
            </CardHeader>
            <CardContent>
                <Textarea 
                    placeholder="Bạn đang nghĩ gì?" 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} 
                    className="mb-4"
                />
                {image && <Image src={image} width={200} height={200} alt="Preview" className="rounded-lg mb-4" />}
                <div className="flex space-x-4">
                    <label className="cursor-pointer flex items-center space-x-2 border rounded-lg px-4 py-2 text-sm hover:bg-gray-100">
                        <Upload size={20} />
                        <span>Thêm ảnh</span>
                        <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                    </label>
                    <Button onClick={handlePost} className="bg-blue-500 text-white">Post</Button>
                    <Button variant="outline">Cancel</Button>
                </div>
            </CardContent>
        </Card>
    );
}
