import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const links = [
  { to: "/", label: "Trang chủ" },
  { to: "/users/otp/send/login", label: "Đăng nhập" },
  { to: "/register", label: "Đăng ký" },
  { to: "/messager", label: "Tin nhắn" },
  { to: "/policy", label: "Chính sách" },
  { to: "/recruitment", label: "Tuyển dụng" },
  { to: "/cookie", label: "Cookie" },
  { to: "/help", label: "Trợ giúp" },
  { to: "/introduction", label: "Giới thiệu" },
  { to: "/advertisement", label: "Quảng cáo" },
];

const Footer = () => (
  <footer className="footer">
    <nav>
      <ul className="footer-nav">
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
    <div className="footer-group">XICT @ 2025</div>
  </footer>
);

export default Footer;
