import { Link } from "react-router-dom";
import "./Login.css";
import Footer from "../common/Footer";
import React, { useState } from "react";
import userService from "../../services/userService";

const SendOtpLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await userService.sendOtpLogin(username, password);
      // Xử lý kết quả ở đây (ví dụ: chuyển trang, lưu token, hiển thị thông báo...)
      console.log("OTP sent:", res.data);
    } catch (err: any) {
      setError(err?.response?.data?.message || "Đăng nhập thất bại");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-bg">
      <div className="login-logo">SNet</div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Đăng nhập SNet</h2>
        <input
          type="text"
          placeholder="Email"
          className="login-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <div className="login-error">{error}</div>}
        <button className="login-btn" type="submit" disabled={loading}>
          {loading ? "Đang gửi..." : "Đăng nhập"}
        </button>
        <Link to="login-forgot" className="login-forgot">
          Bạn quên mật khẩu ư?
        </Link>
        <div className="login-divider">
          <span>hoặc</span>
        </div>
        <button className="login-create-btn" type="button">
          Tạo tài khoản mới
        </button>
      </form>
      <Footer />
    </div>
  );
};

const VerifyOtpLogin = () => {
  return (
    <div>
      <h2>Verify OTP</h2>
      <form>
        <input type="text" placeholder="OTP" />
        <button type="submit">Verify</button>
      </form>
    </div>
  );
};

export { SendOtpLogin, VerifyOtpLogin };
