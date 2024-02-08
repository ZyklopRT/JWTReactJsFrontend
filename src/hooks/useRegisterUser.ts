import { useMutation } from "@tanstack/react-query";
import apiClient from "../services/ApiClient.ts";
import useLogin from "./useLogin.ts";

interface UserBody {
  username: string;
  email: string;
  password: string;
}

interface UserResponse {
  username: string;
  email: string;
}

const useRegisterUser = () => {
  const loginMutation = useLogin({ successTo: "/" });

  return useMutation<UserResponse, Error, UserBody>({
    mutationFn: (user) => {
      return apiClient
        .post<UserResponse>("/register", {
          username: user.username,
          email: user.email,
          password: user.password,
        })
        .then((res) => res.data);
    },
    onSuccess: (data, variables) => {
      loginMutation.mutate({
        username: data.username,
        password: variables.password,
      });
    },
  });
};

export default useRegisterUser;
