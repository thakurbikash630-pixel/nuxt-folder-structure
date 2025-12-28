<template>
  <div class="bgimg"></div>
  <div class="login-c">
    <h2 class="login-title">Login</h2>
    <div class="first">
      <p class="n-login">Email :</p>
      <input
        class="enter-n"
        v-model="email"
        type="email"
        placeholder="enter name"
      />
    </div>
    <div class="second">
      <p class="e">Password :</p>
      <input
        v-model="password"
        class="enter-n"
        type="password"
        placeholder="enter email"
      />
    </div>
    <div class="login-wrapper">
      <button class="btn-login" @click="loginClick()">login</button>
      <button class="btn-login" @click="goTosignup()">Signup</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "~/store/user";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");

const userfromStore = useUserStore();

const loginClick = () => {
  console.log(email.value, password.value);
  userfromStore.login(email.value, password.value);
};

const router = useRouter();

function goTosignup() {
  router.push("/signup"); // Navigates to /about page
}
</script>

<style scope>
.first {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.login-c {
  height: fit-content;
  width: 400px;
  padding: 16px;
  position: absolute;
  top: 10rem;
  left: 25rem;
  border: 2px solid #fffcfc;
  box-shadow: 0 0 4px 2px rgb(236 57 57 / 77%);
}
.bgimg {
  background-image: url("../assets/loginbg.jpg");
  background-size: cover;
  background-position: center;
  height: 741.5px;
  width: 100%;
  position: relative;
}
.n-login {
  width: 79px;
  font-size: 22px;
  padding-top: 6px;
  color: #ededed;
  margin-left: 81px;
}
.e {
  width: 110px;
  font-size: 22px;
  margin-top: 22px;
  color: #dfdfdf;
  margin-left: 53px;
}

.second {
  display: flex;
  flex-direction: row;
  /* gap: 47px; */
  align-items: center;
  margin-top: -12px;
}
.enter-n {
  margin-right: 30px;
  /* padding-right: 30px; */
  height: 35px;
  border-radius: 5px;
  background-color: rgb(174, 174, 174);
  border: rgb(156, 156, 156);
  margin-top: 4px;
  padding-left: 6px;
}

.btn-login {
  width: 113px;
  height: 41px;
  font-size: 19px;
  font-family: ui-monospace;
  background-color: #ababab;
  color: #000000;
  border-radius: 5px;
}
.btn:hover {
  background-color: #929292;
}

.login-wrapper {
  display: flex;
  justify-content: center;
  gap: 6px;
}

.login-title {
  color: white;
  display: flex;
  justify-content: center;
}
body {
  margin: 0;
}
</style>
