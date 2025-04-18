// src/states/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Tạo context
interface AuthContextType {
  currentUser: any;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  login: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; user?: any; message?: string }>;
  register: (
    userData: any
  ) => Promise<{ success: boolean; data?: any; message?: string }>;
  logout: () => void;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Kiểm tra token từ localStorage khi khởi động
  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        // Thiết lập token cho axios
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        // Gọi API để kiểm tra token hợp lệ
        const response = await axios.get("/api/auth/verify-token");

        if (response.data.success) {
          setCurrentUser(response.data.user);
          setIsAuthenticated(true);
        } else {
          // Token không hợp lệ
          localStorage.removeItem("token");
          delete axios.defaults.headers.common["Authorization"];
        }
      } catch (error) {
        console.error("Auth verification error:", error);
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        setError("Session expired. Please login again.");
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  // Hàm đăng nhập
  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/auth/login", { email, password });

      const { token, user } = response.data;

      // Lưu token vào localStorage
      localStorage.setItem("token", token);

      // Thiết lập token cho axios
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setCurrentUser(user);
      setIsAuthenticated(true);

      return { success: true, user };
    } catch (error) {
      console.error("Login error:", error);
      setError(
        error.response?.data?.message || "Login failed. Please try again."
      );
      return {
        success: false,
        message: error.response?.data?.message || "Login failed",
      };
    } finally {
      setLoading(false);
    }
  };

  // Hàm đăng ký
  const register = async (userData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("/api/auth/register", userData);

      // Nếu đăng ký tự động đăng nhập, xử lý như login
      if (response.data.token) {
        const { token, user } = response.data;

        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        setCurrentUser(user);
        setIsAuthenticated(true);
      }

      return { success: true, data: response.data };
    } catch (error) {
      console.error("Register error:", error);
      setError(
        error.response?.data?.message ||
          "Registration failed. Please try again."
      );
      return {
        success: false,
        message: error.response?.data?.message || "Registration failed",
      };
    } finally {
      setLoading(false);
    }
  };

  // Hàm đăng xuất
  const logout = () => {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    setCurrentUser(null);
    setIsAuthenticated(false);
  };

  // Cung cấp contextual value
  const value = {
    currentUser,
    isAuthenticated,
    loading,
    error,
    login,
    register,
    logout,
    setError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook để sử dụng AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthContext;
