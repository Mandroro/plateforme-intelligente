import { Navigate } from "react-router";

const isAuthenticated = () => {
  return localStorage.getItem('token') !== null;
};

const ProtectedRouter = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/authentification" />;
};

export default ProtectedRouter;
