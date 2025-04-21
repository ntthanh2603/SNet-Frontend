import axiosInstances from "./axiosInstance";

const home = {
  getHome: () => {
    return axiosInstances.get("/api/home");
  },
};

export default home;
