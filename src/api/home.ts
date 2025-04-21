import axiosInstance from "./axiosInstance";

const home = {
  getHome: () => {
    return axiosInstance.get("/api/home");
  },
};

export default home;
