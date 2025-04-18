// Check status login
const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

export { isAuthenticated };
