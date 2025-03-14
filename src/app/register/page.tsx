"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";

export default function RegisterPage() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        // Kiểm tra xác nhận mật khẩu
        if (password !== confirmPassword) {
            setError("Mật khẩu xác nhận không khớp.");
            setLoading(false);
            return;
        }

        // Giả lập quá trình đăng ký (có thể thay bằng API thực tế)
        setTimeout(() => {
            alert("Đăng ký thành công! Chuyển hướng đến đăng nhập...");
            router.push("/login");
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
            <Card className="w-full max-w-md shadow-lg">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-semibold">Đăng ký</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleRegister} className="space-y-4">
                        {/* Thông báo lỗi */}
                        {error && (
                            <Alert variant="destructive">
                                <AlertTitle>Lỗi đăng ký</AlertTitle>
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        )}

                        {/* Tên người dùng */}
                        <div className="space-y-2">
                            <Label htmlFor="username">Tên người dùng</Label>
                            <Input
                                id="username"
                                type="text"
                                placeholder="Nhập tên của bạn"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Nhập email của bạn"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        {/* Mật khẩu */}
                        <div className="space-y-2">
                            <Label htmlFor="password">Mật khẩu</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Nhập mật khẩu"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {/* Xác nhận mật khẩu */}
                        <div className="space-y-2">
                            <Label htmlFor="confirm-password">Xác nhận mật khẩu</Label>
                            <Input
                                id="confirm-password"
                                type="password"
                                placeholder="Nhập lại mật khẩu"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>

                        {/* Nút Đăng ký */}
                        <Button type="submit" className="w-full" disabled={loading}>
                            {loading ? <Loader2 className="animate-spin" size={20} /> : "Đăng ký"}
                        </Button>
                    </form>

                    {/* Link quay lại đăng nhập */}
                    <p className="text-center text-sm mt-4">
                        Đã có tài khoản?{" "}
                        <Link href="/login" className="text-blue-600 hover:underline">
                            Đăng nhập ngay
                        </Link>
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}
