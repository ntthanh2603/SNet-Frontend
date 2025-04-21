import axios from "axios";

const port = process.env.REACT_APP_PORT_BACKEND;
const host = process.env.REACT_APP_HOST_BACKEND;

const axiosInstance = axios.create({
  baseURL: `http://${host}:${port}`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    console.log(`url ${port}`);
    // Get token from localStorage
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      // Handle different error status codes
      switch (error.response.status) {
        case 401:
          // Handle unauthorized access
          localStorage.removeItem("token");
          window.location.href = "/login";
          break;
        case 403:
          // Handle forbidden access
          break;
        case 404:
          // Handle not found
          break;
        default:
          // Handle other errors
          break;
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;

// Handle Refresh token
// let isRefreshing = false;
// let failedQueue = [];

// const processQueue = (error, token = null) => {
//   failedQueue.forEach((prom) => {
//     if (error) {
//       prom.reject(error);
//     } else {
//       prom.resolve(token);
//     }
//   });

//   failedQueue = [];
// };

// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response.status === 401 && !originalRequest._retry) {
//       if (isRefreshing) {
//         return new Promise((resolve, reject) => {
//           failedQueue.push({ resolve, reject });
//         })
//           .then((token) => {
//             originalRequest.headers.Authorization = `Bearer ${token}`;
//             return api(originalRequest);
//           })
//           .catch((err) => {
//             return Promise.reject(err);
//           });
//       }

//       originalRequest._retry = true;
//       isRefreshing = true;

//       try {
//         const refreshToken = localStorage.getItem("refreshToken");
//         const response = await axios.post("https://api.example.com/refresh", {
//           refreshToken,
//         });
//         const { token } = response.data;

//         localStorage.setItem("token", token);
//         api.defaults.headers.common.Authorization = `Bearer ${token}`;
//         originalRequest.headers.Authorization = `Bearer ${token}`;

//         processQueue(null, token);
//         return api(originalRequest);
//       } catch (refreshError) {
//         processQueue(refreshError, null);
//         localStorage.removeItem("token");
//         localStorage.removeItem("refreshToken");
//         window.location.href = "/login";
//         return Promise.reject(refreshError);
//       } finally {
//         isRefreshing = false;
//       }
//     }

//     return Promise.reject(error);
//   }
// );
