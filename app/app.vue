<template>
  <div>
    <NuxtLayout>
      <!-- <template v-else="user != null"> -->
      <Header v-if="user != null"></Header>
      <NuxtPage />
      <Footer></Footer>
      <!-- </template> -->
    </NuxtLayout>
  </div>
</template>
<script setup>
import { useUserStore } from "./store/user";
import { storeToRefs } from "pinia";

const userFromStore = useUserStore();
const { user } = storeToRefs(userFromStore);
// console.log(user.value);

onMounted(() => {
  if (user.value == null) {
    navigateTo("/login");
  }
});
</script>
