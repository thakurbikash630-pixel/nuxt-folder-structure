<script setup lang="js">
const products = [
  {
    name: "shirt",
    price: 1500,
    delivery: "Jun 2 2026",
    image:"_nuxt/assets/shirt.webp"

  },
  {
    name: "PANT",
    price: 8500,
    delivery: "Jun 5 2026",
    image:"_nuxt/assets/pant.webp"
  },
  {
    name: "Men Clothing",
    price: 6900,
    delivery: "Jun 5 2026",
     image:"../assets/pant.webp"
  },
];
</script>
<template>
  <div class="blogg">
    <Products
      v-for="p in products"
      :name="p.name"
      :price="p.price"
      :delivery="p.delivery"
      :image="p.image"
    />
  </div>
</template>
<style lang="css">
.blogg {
  display: flex;
  flex-direction: row;
}
</style>
