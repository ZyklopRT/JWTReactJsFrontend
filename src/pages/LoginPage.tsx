import { FieldValues } from "react-hook-form";
import { Login } from "../components/auth/Login.tsx";
import useAuthStore from "../components/auth/store.ts";
import { Text } from "@chakra-ui/react";

const LoginPage = () => {
  const { user } = useAuthStore();
  const handleLogin = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <>
      {user && <Text>{user.username}</Text>}
      <Login onSubmit={(data) => handleLogin(data)}></Login>
    </>
  );
};

export default LoginPage;
