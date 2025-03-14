"use client";

import { Plus, Search, House, Heart, CircleUser, Pin, ListCollapse } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import avatar from "@/app/profile/default-avatar.jpg"
// Import form từ feature
import PostForm from "@/app/features/post/form";

export default function Sidebar() {
    const [open, setOpen] = useState(false);
    const [formTitle, setFormTitle] = useState("");
    const router = useRouter();

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const openForm = (title: string) => {
        setFormTitle(title);
        setOpen(true);
    };

    const handleLogout = () => {
        alert("Bạn đã đăng xuất!");
        router.push("/login"); // Chuyển hướng về trang login
    };

    const menuItems = [
        { action: "link", link: "/", icon: <House size={32} /> },
        { action: "link", link: "/search", icon: <Search size={32} /> },
        { action: "form", icon: <Plus size={32} />, text: "New Thread" },
        { action: "link", link: "/activity", icon: <Heart size={32} /> },
        { action: "link", link: "/profile", icon: <CircleUser size={32} /> },
        { action: "link", link: "/profile", icon: <Pin size={32} /> },
        { action: "dropdown", icon: <ListCollapse size={32} /> } // Chỉ dropdown menu
    ];

    return (
        <>
            {/* Sidebar */}
            <div className="p-6 w-24 bg-white h-full flex flex-col items-center space-y-6 fixed left-0 top-0">
                {/* Logo */}
                <div className="mb-8">
                    <span className="text-3xl font-bold">🔵</span>
                </div>

                {/* Menu Items */}
                <div className="space-y-6">
                    {menuItems.map((item, index) =>
                        item.action === "link" ? (
                            <Link key={index} href={item.link as string} className="block">
                                <div className="p-3 rounded-lg transition-all duration-200 hover:bg-black hover:text-white hover:scale-105 cursor-pointer flex justify-center">
                                    {item.icon}
                                </div>
                            </Link>
                        ) : item.action === "dropdown" ? (
                            <DropdownMenu key={index} open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
                                <DropdownMenuTrigger asChild>
                                    <div
                                        className="p-3 rounded-lg transition-all duration-200 hover:bg-black hover:text-white hover:scale-105 cursor-pointer flex justify-center"
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    >
                                        <ListCollapse size={32} />
                                    </div>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" side="right" sideOffset={8} className="w-48 p-2 shadow-lg rounded-lg">
                                    <DropdownMenuItem
                                        onClick={handleLogout}
                                        className="text-lg p-3 text-red-500 border border-red-500 rounded-md hover:bg-red-500 hover:text-white transition-all"
                                    >
                                        Đăng xuất
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <button
                                key={index}
                                onClick={() => openForm(item.text!)}
                                className="p-3 rounded-lg transition-all duration-200 hover:bg-black hover:text-white hover:scale-105 flex justify-center"
                            >
                                {item.icon}
                            </button>
                        )
                    )}
                </div>
            </div>

            {/* Floating Button */}
            <button
                onClick={() => openForm("New Thread")}
                className="fixed bottom-6 right-6 bg-white/80 text-black w-40 h-16 rounded-lg shadow-lg transition-all duration-200 
               hover:bg-black hover:text-white hover:scale-110 flex items-center justify-center"
            >
                <Plus size={32} />
            </button>

            {/* Modal */}
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{formTitle}</DialogTitle>
                    </DialogHeader>
                    <div className="p-4">
                        <PostForm /> {/* Hiển thị form */}
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
