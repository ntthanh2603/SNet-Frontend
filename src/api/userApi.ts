import axiosInstances from "./axiosInstance";

const userApi = {
  sendOtp: (credentials: { email: string; password: string }) =>
    axiosInstances.post("/users/otp/send/login", credentials),

  verifyOtp: (credentials: { email: string; password: string; otp: string }) =>
    axiosInstances.post("/users/otp/verify/login", credentials),
};

export default userApi;
