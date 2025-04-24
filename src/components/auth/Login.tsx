import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import Footer from "../common/Footer";
import React, { useState } from "react";
import userService from "../../services/userService";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!showOtp) {
      // Step 1: Send OTP request
      try {
        const res = await userService.sendOtpLogin(email, password);

        if (res?.data?.statusCode === 201) {
          setShowOtp(true);
        } else {
          setError("Không thể gửi OTP");
        }
      } catch (err: any) {
        setError("Không thể gửi OTP");
      } finally {
        setLoading(false);
      }
    } else {
      // Step 2: OTP Authentication
      try {
        const res = await userService.verifyOtpLogin(email, password, otp);

        if (res.data?.statusCode === 200) {
          // Save accessToken in localStorage
          if (res.data?.data?.accessToken) {
            localStorage.setItem("accessToken", res.data.data.accessToken);
          }
          alert("Đăng nhập thành công!");
          navigate("/");
        }
      } catch (err: any) {
        setError("OTP đã hết hạn hoặc không hợp lệ");
      } finally {
        setLoading(false);
      }
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={showOtp}
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={showOtp}
        />
        {showOtp && (
          <input
            type="text"
            placeholder="Nhập mã OTP"
            className="login-input"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        )}
        {error && <div className="login-error">{error}</div>}
        <button className="login-btn" type="submit" disabled={loading}>
          {loading ? "Đang gửi..." : showOtp ? "Đăng nhập" : "Gửi OTP"}
        </button>
        {!showOtp && (
          <>
            <Link to="/forgot-password" className="login-forgot">
              Bạn quên mật khẩu ư?
            </Link>
            <div className="login-divider">
              <span>hoặc</span>
            </div>
            <button className="login-create-btn" type="button">
              Tạo tài khoản mới
            </button>
          </>
        )}
      </form>
      <Footer />
    </div>
  );
};

export default Login;
