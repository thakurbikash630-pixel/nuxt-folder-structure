import { defineStore } from "pinia";

interface UserList {
  name: string;
  email: string;
  password: string;
}
[];

export const useUserStore = defineStore("user", {
  //user stores currently logged-in user
  // initially null (no one logged in)
  state: () => ({
    user: null as {
      email: string;
      password: string;
    } | null,
    userList: [] as any[],
    // userList stores all registered users
  }),

  actions: {
    login(email: string, password: string) {
      this.userList.map((item: any) => {
        debugger;
        if (item.email == email && item.password == password) {
          this.user = {
            email: email,
            password: password,
          };
          navigateTo("/");
        }
      });
    },
    logout() {
      this.user = null;
    },

    addUsertoList(name: string, email: string, password: string) {
      this.userList.push({
        name: name,
        email: email,
        password: password,
      });
      console.log(this.userList);
    },
  },
});
