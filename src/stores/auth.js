import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    accessToken: null,
    refreshToken: null,
    user: null,
  }),
  actions: {
    fetchUser() {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.user = {
            id: 1,
            name: "Admin",
            email: "admin@gmail.com",
          };
          resolve();
        }, 100);
      });
    },
  },
  persist: ["accessToken", "refreshToken", "user"],
});
