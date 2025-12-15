import instance from "@/lib/axios";

export const authService = {
  login: async (credentials) => {
    return instance.post('/auth/login', { credentials });
  },

  register: async (data) => {
    return instance.post('/users', data);
  },

  getProfile: async () => {
    return await instance.get("/auth/profile");
  },
};

