import { create } from "zustand";

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
  setUser: (use: User) => void;
  setSessionExpired: (status: boolean) => void;
}

const useAuth = create<AuthState>((set) => ({
  user: null,
  isUserSignUp: false,
  sessionExpired: false,
  isAuthenticated: false,

  logout: () => set({ isAuthenticated: false }),
  setSessionExpired: (status) => set({ sessionExpired: status }),
  setUser: (user: User) => set({ user: user, isAuthenticated: true }),
  userSignUp: () => set({ isUserSignUp: true }),
}));

export default useAuth;
