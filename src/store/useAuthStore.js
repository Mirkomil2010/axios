import { create } from "zustand";
import { authService } from "@/services/authService";

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,

  login: async (payload) => {
    set({ loading: true, error: null });

    try {
      const data = await authService.login(payload);

      const { access_token, refresh_token } = data;

      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);

      try {
        const user = await authService.getProfile();
        set({ user, isAuthenticated: true, loading: false, });
      } catch (error) {
        console.warn("profil yuklanmadi", error);
        set({ user: { email: payload.email }, isAuthenticated: true, loading: false })
      }

      return true;
    } catch (error) {
      console.error("Login Error:", error)
      set({
        error: error?.response?.data?.message || error.message || "Login failed",
        loading: false,
      });
      return false;
    }
  },
  register: async (formData) => {
    set({ loading: true, error: null })
    try {
      const payload = {
        ...formData,
        avatar: "https://picsum.photos/800"
      }

      await authService.register(payload)

      set({ isLoading: false });

      return true;

    } catch (error) {
      console.error("Register Error:", error);
      set({
        isLoading: false,
         error: error?.response?.data?.message || error.message || "Ro'yxatdan o'tishda xatolik",
      })

      return false;

    }
  },
}));

