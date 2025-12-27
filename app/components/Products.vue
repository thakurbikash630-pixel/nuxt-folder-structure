<script setup lang="ts">
defineProps<{
  name: string;
  price: number;

  image: string;
}>();
</script>

<template>
  <div class="Blog">
    <img :src="image" alt="Product image" class="product-img" />

    <div class="p-details">
      <h3 class="h3">Product Details</h3>
      <p class="name">{{ name }}</p>
      <p class="p">price:$ {{ price }}</p>
    </div>
  </div>
</template>

<style scoped>
.product-img {
  width: 270px;
  height: 311px;
  object-fit: contain;
  margin-top: -22px;
}

.Blog {
  width: 270px;
  height: 425px;
  font-family: sans-serif;
  box-shadow: 0 0 4px 2px rgb(90 90 90 / 38%);
}

.p-details {
  margin-left: 18px;
  color: #343434;
  line-height: 24px;
  font-family: serif;
  padding-top: 10px;
}

.p {
  margin-top: -15px;
  font-family: sans-serif;
}
.h3 {
  margin-top: -23px;
}
.name {
  font-family: ui-monospace;
  margin-top: -15px;
  width: 249px;
}
</style>
