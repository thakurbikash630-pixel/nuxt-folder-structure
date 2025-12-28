<script setup>
const counter = useCount();
</script>

<template>
  <div class="contact">
    Counter:{{ counter }}
    <button @click="counter++">+</button>
    <button @click="counter++">+</button>
  </div>
  <new />
  <new />
</template>
<style lang="css">
.contact {
  height: 508px;
}
</style>
