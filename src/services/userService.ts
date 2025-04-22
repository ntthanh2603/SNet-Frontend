import cleanObject from "lib/cleanObject";
import userApi from "../api/userApi";

const userService = {
  sendOtpLogin: async (email: string, password: string) => {
    const fetch = await userApi.sendOtpLogin({ email, password });
    return fetch;
  },
  verifyOtpLogin: (email: string, password: string, otp: string) => {
    const fetch = userApi.verifyOtpLogin({ email, password, otp });
    return fetch;
  },

  sendOtpRegister: async (email: string, username: string) => {
    const fetch = await userApi.sendOtpRegister({ email, username });
    return fetch;
  },

  verifyOtpRegister: async (data: {
    email: string;
    password: string;
    otp: string;
    username: string;
    bio: string;
    website: string;
    birthday: string;
    gender: string;
    address: string;
  }) => {
    const formData = cleanObject(data);
    const fetch = await userApi.verifyOtpRegister(formData);
    return fetch;
  },
};

export default userService;
