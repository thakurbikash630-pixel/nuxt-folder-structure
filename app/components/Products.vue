<template>
  <div class="Blog">
    <!-- <img src="~/assets/shirt.webp" alt="Product Name" class="product-img" /> -->
    <img :src="product.image" alt="Product image" class="product-img" />

    <div class="p-detail">
      <h3 class="b-cls">Products Details</h3>
      <p>{{ product.name }}</p>
      <p class="p-p">{{ product.price }}</p>
      <h5 class="p-h5">{{ product.delivery }}</h5>
    </div>
  </div>
</template>
<style lang="css">
.product-img {
  width: 270px;
  height: 311px;
  -o-object-fit: cover;
  object-fit: contain;
}

.Blog {
  height: 550px;
  /* margin: 0; */
  border: 1px solid grey;
  font-family: sans-serif;
  width: 270px;
  border: none;
}

.p-details {
  line-height: 10px;
  margin-left: 18px !important;
  color: #343434;
  font-family: system-ui;
}
.p-p {
  height: 0px;
}
</style>
<script setup lang="ts">
const product = defineProps<{
  name: string;
  price: number;
  delivery: string;
  image: string;
}>();
</script>
