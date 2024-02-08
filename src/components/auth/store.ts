import { create } from "zustand";
import TokenService from "../../services/TokenService.ts";

interface User {
  username: string;
  token: string;
}

interface AuthStore {
  user: User;
  login: (token: string) => void;
  logout: () => void;
  error?: string;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: {} as User,
  login: (token) => {
    TokenService.decode(token)
      .then((res) => {
        set(() => ({
          user: {
            username: res.payload.username,
            token: token,
          },
        }));
        localStorage.setItem("token", token);
        console.log("logged in successfully");
      })
      .catch((error) => {
        set(() => ({ error: error }));
      });
  },
  logout: () => {
    localStorage.removeItem("token");
    set(() => ({ user: {} as User }));
  },
}));

export default useAuthStore;
