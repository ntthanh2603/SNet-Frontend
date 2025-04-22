import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../common/Footer";
import userService from "../../services/userService";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [website, setWebsite] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
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
        // Check password
        if (password !== confirmPassword) {
          setError("Mật khâu không khớp");
          return;
        }
        // Send OTP
        await userService.sendOtpRegister(email, username);

        // Enter OTP
        setShowOtp(true);
      } catch (err: any) {
        if (
          err.response &&
          err.response.data &&
          err.response.data.statusCode === 400
        ) {
          setError("Email đã được sử dụng");
        } else {
          setError("Không thể gửi OTP");
        }
      } finally {
        setLoading(false);
      }
    } else {
      // Step 2: OTP Authentication
      try {
        const res = await userService.verifyOtpRegister({
          otp,
          email,
          password,
          username,
          bio,
          website,
          birthday,
          gender,
          address,
        });

        if (res.data?.statusCode === 201) {
          alert("Đăng ký thành công!");
          navigate("/login");
        }
      } catch (err: any) {
        if (err?.response?.data?.statusCode === 400) {
          setError("OTP không hợp lệ hoặc đã hết hạn");
        } else {
          setError("Không thể gửi OTP");
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="register-bg">
      <div className="register-logo">SNet</div>
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Đăng ký tài khoản</h2>
        <input
          type="email"
          placeholder="Email*"
          className="register-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={showOtp}
          required
        />
        <input
          type="password"
          placeholder="Mật khẩu*"
          className="register-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={showOtp}
          required
        />

        <input
          type="password"
          placeholder="Nhập lại mật khẩu*"
          className="register-input"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          disabled={showOtp}
          required
        />

        <input
          type="text"
          placeholder="Tên người dùng*"
          className="register-input"
          value={username}
          disabled={showOtp}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Mô tả bản thân"
          className="register-input"
          value={bio}
          disabled={showOtp}
          onChange={(e) => setBio(e.target.value)}
        />
        <input
          type="url"
          placeholder="Website"
          className="register-input"
          value={website}
          disabled={showOtp}
          onChange={(e) => setWebsite(e.target.value)}
        />
        <input
          type="datetime-local"
          placeholder="Ngày sinh"
          className="register-input"
          value={birthday}
          disabled={showOtp}
          onChange={(e) => setBirthday(e.target.value)}
        />
        <select
          className="register-input"
          value={gender}
          disabled={showOtp}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Chọn giới tính</option>
          <option value="male">Nam</option>
          <option value="female">Nữ</option>
          <option value="other">Khác</option>
        </select>
        <input
          type="text"
          placeholder="Địa chỉ"
          className="register-input"
          value={address}
          disabled={showOtp}
          onChange={(e) => setAddress(e.target.value)}
        />

        {showOtp && (
          <>
            <input
              type="text"
              placeholder="Nhập mã OTP"
              className="register-input"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </>
        )}
        {error && <div className="register-error">{error}</div>}
        <button className="register-btn" type="submit" disabled={loading}>
          {loading ? "Đang gửi..." : showOtp ? "Đăng ký" : "Gửi OTP"}
        </button>
        {!showOtp && (
          <>
            <div className="register-divider">
              <span>hoặc</span>
            </div>
            <Link to="/auth/login" className="register-login-link">
              Đã có tài khoản? Đăng nhập
            </Link>
          </>
        )}
      </form>
      <Footer />
    </div>
  );
};

export default Register;
