# SNet - Mạng Xã Hội Hiện Đại

SNet là một nền tảng mạng xã hội hiện đại được phát triển với mục tiêu kết nối mọi người một cách đơn giản, thân thiện và bảo mật. Dự án này tập trung vào trải nghiệm người dùng và các tính năng tương tác xã hội đa dạng.

## 🌟 Tính Năng Chính

### 📱 Trang Chủ & Bảng Tin
- Bảng tin cá nhân hóa dựa trên sở thích và kết nối của người dùng
- Hỗ trợ các định dạng bài đăng phong phú: văn bản, hình ảnh, video, liên kết
- Tính năng story 24h
- Đề xuất kết bạn và nội dung phù hợp

### 👥 Mạng Lưới & Kết Nối
- Hệ thống bạn bè với các mức độ quyền riêng tư khác nhau
- Nhóm công khai và riêng tư
- Trang cá nhân tùy chỉnh
- Theo dõi người dùng, trang và nhóm

### 💬 Giao Tiếp
- Tin nhắn riêng tư với khả năng end-to-end encryption
- Chat nhóm với nhiều tính năng tương tác
- Gọi video và audio
- Chia sẻ file và media trong cuộc trò chuyện

### 🔔 Thông Báo
- Hệ thống thông báo thời gian thực
- Tùy chỉnh loại thông báo nhận được
- Thông báo push trên thiết bị di động

### 🔎 Tìm Kiếm & Khám Phá
- Tìm kiếm nâng cao với bộ lọc
- Khám phá nội dung xu hướng
- Đề xuất sự kiện gần bạn

### 🛒 Marketplace
- Mua bán sản phẩm giữa người dùng
- Đánh giá và xếp hạng người bán
- Thanh toán an toàn

### 📊 Quản Lý Tài Khoản
- Cài đặt bảo mật và quyền riêng tư mạnh mẽ
- Quản lý dữ liệu cá nhân
- Tùy chọn xác thực hai yếu tố

## 🛠️ Công Nghệ Sử Dụng

- **Frontend**: React, Redux, TypeScript
- **Style & UI**: Styled Components, Material UI
- **State Management**: Redux Toolkit
- **Routing**: React Router
- **Networking**: Axios, Socket.io (real-time features)
- **Testing**: Jest, React Testing Library
- **Build Tools**: Webpack, Babel

## 🚀 Cài Đặt & Chạy Dự Án

### Yêu Cầu Tiên Quyết
- Node.js (v14 trở lên)
- npm hoặc yarn
- Git

### Bước 1: Clone repository
```bash
git clone https://github.com/your-username/snet-frontend.git
cd snet-frontend
```

### Bước 2: Cài đặt dependencies
```bash
npm install
# hoặc
yarn install
```

### Bước 3: Cấu hình biến môi trường
Tạo file `.env` dựa trên file `.env.example`:
```bash
cp .env.example .env
```
Chỉnh sửa các biến môi trường phù hợp với môi trường của bạn.

### Bước 4: Chạy ứng dụng ở môi trường phát triển
```bash
npm start
# hoặc
yarn start
```

Ứng dụng sẽ chạy tại `http://localhost:3001`.

### Bước 5: Build cho môi trường production
```bash
npm run build
# hoặc
yarn build
```

## 📁 Cấu Trúc Thư Mục

```
src/
├── assets/         # Hình ảnh, font, và các tài nguyên tĩnh khác
├── components/     # Các component React tái sử dụng
│   ├── common/     # Các component dùng chung
│   ├── feed/       # Components liên quan đến bảng tin
│   ├── profile/    # Components cho trang cá nhân
│   └── ...
├── config/         # Cấu hình ứng dụng
├── constants/      # Các hằng số
├── hooks/          # Custom React hooks
├── layouts/        # Layout components
├── pages/          # Các trang hoàn chỉnh
├── redux/          # Redux store, reducers, actions
├── services/       # API calls và business logic
├── styles/         # Global styles
├── types/          # TypeScript type definitions
├── utils/          # Các hàm tiện ích
└── App.tsx         # Component gốc
```

## 🔧 Scripts

- `npm start`: Khởi chạy ứng dụng ở môi trường phát triển
- `npm test`: Chạy bộ test
- `npm run build`: Build ứng dụng cho môi trường production
- `npm run lint`: Kiểm tra và sửa lỗi code theo chuẩn
- `npm run format`: Format code với Prettier

## 🤝 Đóng Góp

Chúng tôi rất hoan nghênh mọi đóng góp cho dự án SNet!

1. Fork repository
2. Tạo branch mới (`git checkout -b feature/amazing-feature`)
3. Commit thay đổi của bạn (`git commit -m 'Add some amazing feature'`)
4. Push lên branch (`git push origin feature/amazing-feature`)
5. Mở Pull Request

Xem thêm trong [CONTRIBUTING.md](CONTRIBUTING.md).

## 📄 Giấy Phép

Dự án được phân phối dưới giấy phép MIT. Xem file [LICENSE](LICENSE) để biết thêm chi tiết.

## 📞 Liên Hệ

- Facebook: [tuanthanh2603](https://www.facebook.com/ntthanh2603)
- Email: tuanthanh2kk4@gmail.com
- GitHub: [tuanthanh2603](https://github.com/ntthanh2603)

---

Made with ❤️ by Team SNet
