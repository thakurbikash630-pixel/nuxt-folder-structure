<template>
  <div>
    <NuxtLayout>
      <!-- <template v-if="user == null"> <Login /> </template> -->
      <template v-if="user == null"> <Signup /> </template>
      <template v-else="user != null">
        <Header></Header>
        <NuxtPage />
        <Footer></Footer>
      </template>
    </NuxtLayout>
  </div>
</template>
<script setup>
import { useUserStore } from "./store/user";
import { storeToRefs } from "pinia";

const userFromStore = useUserStore();
const { user } = storeToRefs(userFromStore);
console.log(user.value);
</script>
