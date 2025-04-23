// Check status login
const isAuthenticated = () => {
  return !!localStorage.getItem("accessToken");
};

export { isAuthenticated };
