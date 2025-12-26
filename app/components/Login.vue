<template>
  <div class="bgimg"></div>
  <div class="login-c">
    <div class="first">
      <p class="n">Enter Name :</p>
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
    <button class="btn" @click="loginClick()">login</button>
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
  height: 400px;
  width: 337px;

  position: absolute;
  top: 15rem;
  left: 33rem;
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
  width: 125px;
  font-size: 22px;
  padding-top: 6px;
  color: #ededed;
}
.e {
  width: 122px;
  font-size: 22px;
  margin-top: 22px;
  color: #dfdfdf;
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

.btn {
  width: 113px;
  height: 41px;
  font-size: 19px;
  font-family: ui-monospace;
  background-color: #ababab;
  color: #000000;
  border-radius: 5px;
  position: absolute;
  left: 85px;
  top: 9rem;
}
.btn:hover {
  background-color: #929292;
}
</style>
