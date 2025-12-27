<template>
  <div class="bgimg"></div>
  <div class="login-c">
    <h2 class="title">Sign Up</h2>
    <div class="first">
      <p class="n">Name :</p>
      <input
        class="enter-n"
        v-model="name"
        type="text"
        placeholder="enter name"
      />
    </div>
    <div class="second">
      <p class="e">Email :</p>
      <input class="enter-e" type="email" placeholder="enter email" />
    </div>
    <div class="third">
      <p class="p">Password :</p>
      <input
        class="enter-n"
        v-model="name"
        type="text"
        placeholder="enter name"
      />
    </div>
    <div class="btn-wrapper">
      <button class="btn-sign" @click="loginClick()">SignIn</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "~/store/user";
const name = ref("");
const email = ref("");

const userfromStore = useUserStore();

const loginClick = () => {
  console.log(name.value, email.value);
  userfromStore.login(name.value, email.value);
};
</script>

<style scope>
.first {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.login-c {
  height: fit-content;
  width: 337px;
  position: absolute;
  top: 12rem;
  left: 33rem;
  border: 2px solid #ffffff;
  box-shadow: 0 0 4px 2px rgb(255 67 104);
}
.bgimg {
  background-image: url("../assets/loginbg.jpg");
  background-size: cover;
  background-position: center;
  height: 741.5px;
  width: 100%;
  position: relative;
}
.n {
  width: 75px;
  font-size: 22px;
  padding-top: 6px;
  color: #ededed;
  margin-left: 53px;
}
.e {
  width: 76px;
  font-size: 22px;
  margin-top: 22px;
  color: #dfdfdf;
  margin-left: 53px;
}
.third {
  display: flex;
  flex-direction: row;
  align-items: baseline;
}
.p {
  width: 105px;
  font-size: 22px;
  margin-top: 1px;
  color: #dfdfdf;
  margin-left: 26px;
}
.title {
  color: #f1f1f1;
  margin-left: 101px;
  font-size: 30px;
  margin-bottom: 0px;
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
}
.enter-e {
  margin-right: 30px;
  /* padding-right: 30px; */
  height: 35px;
  border-radius: 5px;
  background-color: rgb(174, 174, 174);
  border: rgb(156, 156, 156);
  margin-top: 4px;
}

.btn-sign {
  width: 113px;
  height: 41px;
  font-size: 15px;
  font-family: ui-monospace;
  background-color: #ababab;
  color: #000000;
  border-radius: 5px;
}
.btn-sign:hover {
  background-color: #929292;
}
.btn-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
