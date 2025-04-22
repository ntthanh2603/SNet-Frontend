import axiosInstances from "./axiosInstance";

const userApi = {
  sendOtpLogin: (credentials: { email: string; password: string }) =>
    axiosInstances.post("/users/otp/send/login", credentials),

  verifyOtpLogin: (credentials: {
    email: string;
    password: string;
    otp: string;
  }) => axiosInstances.post("/users/otp/verify/login", credentials),

  sendOtpRegister: (credentials: { email: string; username: string }) =>
    axiosInstances.post("/users/otp/send/signup", credentials),

  verifyOtpRegister: (credentials: {
    email: string;
    password: string;
    otp: string;
    username: string;
    bio: string;
    website: string;
    birthday: string;
    gender: string;
    address: string;
  }) => axiosInstances.post("/users/otp/verify/signup", credentials),
};

export default userApi;
