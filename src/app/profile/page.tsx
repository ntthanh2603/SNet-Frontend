import Image from "next/image";
import avatar from "./default-avatar.jpg";
export default function ProfilePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
                {/* Avatar */}
                <Image
                    src={avatar} // Đổi thành ảnh của bạn
                    alt="User Avatar"
                    width={120}
                    height={120}
                    className="rounded-full mx-auto"
                />

                {/* Thông tin người dùng */}
                <h2 className="text-2xl font-semibold mt-4">Nguyễn Văn A</h2>
                <p className="text-gray-500">Developer tại ABC Corp</p>

                
            </div>
        </div>
    );
}
