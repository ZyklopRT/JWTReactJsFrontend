import { useMutation } from "@tanstack/react-query";
import apiClient from "../services/ApiClient.ts";
import useAuthStore from "../components/auth/store.ts";
import { NavigateOptions, useNavigate } from "react-router-dom";

interface AuthBody {
  username: string;
  password: string;
}

interface AuthResponse {
  token: string;
}

interface Props {
  successTo: string;
  routeOptions?: NavigateOptions;
}

const useLogin = ({ successTo, routeOptions = {} }: Props) => {
  const { login } = useAuthStore();
  const navigate = useNavigate();

  return useMutation<AuthResponse, Error, AuthBody>({
    mutationFn: ({ username, password }) =>
      apiClient
        .post("/login_check", { username, password })
        .then((res) => res.data),
    onSuccess: (data) => {
      login(data.token);
      navigate(successTo, routeOptions);
    },
  });
};

export default useLogin;
