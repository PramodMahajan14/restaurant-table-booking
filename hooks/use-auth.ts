import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  sessionExpired: boolean;
  isAuthenticated: boolean;
  isUserSignUp: boolean;

  logout: () => void;
  userSignUp: () => void;
  setUser: (user: User) => void;
  setSessionExpired: (status: boolean) => void;
}

const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isUserSignUp: false,
      sessionExpired: false,
      isAuthenticated: false,

      logout: () =>
        set(() => ({
          user: null,
          isAuthenticated: false,
          sessionExpired: false,
        })),
      setSessionExpired: (status) =>
        set(() => ({
          sessionExpired: status,
        })),
      setUser: (user: User) =>
        set(() => ({
          user,
          isAuthenticated: true,
        })),
      userSignUp: () =>
        set(() => ({
          isUserSignUp: true,
        })),
    }),
    {
      name: "auth-storage", // Key in storage
      storage: createJSONStorage(() => localStorage), // Use localStorage
    }
  )
);

export default useAuth;
