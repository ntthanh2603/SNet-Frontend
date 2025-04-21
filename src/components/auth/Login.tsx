import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-bg">
      <div className="login-logo">SNet</div>
      <form className="login-form">
        <h2>Đăng nhập SNet</h2>
        <input
          type="text"
          placeholder="Email hoặc số điện thoại"
          className="login-input"
        />
        <input type="text" placeholder="Mật khẩu" className="login-input" />
        <button className="login-btn" type="submit">
          Đăng nhập
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
    </div>
  );
};

export default Login;
