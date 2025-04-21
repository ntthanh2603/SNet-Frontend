import axiosInstance from "./axiosInstance";

const userApi = {
  sendOtp: (credentials: { username: string; password: string }) =>
    axiosInstance.post("/users/otp/send/login", credentials),
};

export default userApi;
