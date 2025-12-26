import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null as {
      name: string;
      email: string;
    } | null,
  }),

  //   getters: {
  //     name: (state: any) => state?.user?.name,
  //     email: (state: any) => state?.user?.email,
  //   },

  actions: {
    login(name: string, email: string) {
      this.user = {
        name: name,
        email: email,
      };
    },
    logout() {
      this.user = null;
    },
  },
});
