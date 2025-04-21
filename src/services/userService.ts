import userApi from "../api/userApi";

const userService = {
  sendOtpLogin: async (username: string, password: string) => {
    return userApi.sendOtp({ username, password });
  },
};

export default userService;
