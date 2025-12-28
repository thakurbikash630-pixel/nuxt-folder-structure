<script setup lang="ts">
import Products from "~/components/Products.vue";

// Define a TypeScript interface for type safety (optional)
interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
}

// Fetch products from API
const {
  data: products,
  pending,
  error,
} = await useFetch<Product[]>("https://api.escuelajs.co/api/v1/products");
</script>
<template>
  <div class="container">
    <h2>Products</h2>

    <p v-if="pending">Loading products...</p>
    <p v-else-if="error">Failed to load products</p>

    <div class="products" v-if="products && products.length">
      <Products
        v-for="item in products"
        :key="item.id"
        :id="item.id"
        :name="item.title"
        :price="item.price"
        :image="item.images?.[0] || ''"
      />
    </div>
    <button>Add to cart</button>
  </div>
</template>

<style scoped>
.products {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
.container {
  margin-left: 20px;
}
</style>
