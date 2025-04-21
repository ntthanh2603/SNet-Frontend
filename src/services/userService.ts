import userApi from "../api/userApi";

const userService = {
  sendOtpLogin: async (email: string, password: string) => {
    try {
      const fetch = await userApi.sendOtp({ email, password });
      return fetch;
    } catch (err) {
      console.log(err);
    }
  },
  verifyOtpLogin: (email: string, password: string, otp: string) => {
    try {
      const fetch = userApi.verifyOtp({ email, password, otp });
      return fetch;
    } catch (err) {
      console.log(err);
    }
  },
};

export default userService;
