import useAuthStore from "../components/auth/store.ts";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const { user, login } = useAuthStore();
  const token = localStorage.getItem("token");
  if (user.username == undefined && token) {
    login(token);
  }
  console.log(user.username);
  return user.username !== undefined ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
