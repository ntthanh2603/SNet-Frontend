/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.jsdelivr.net", "picsum.photos", "avatars.githubusercontent.com", "i.pravatar.cc"], // Thêm domain mới
  },
};

module.exports = nextConfig;
