<template>
  <div class="hero-bg"></div>
  <div class="hero-content">
    <h1 class="hero-h1">Just landed.</h1>
    <h2 class="hero-h2">The New Year Collection</h2>
    <p class="hero-p">
      Our latest collection is here. Discover the latest trends and styles for
      the new year
    </p>
    <button @click="goToAbout" class="hero-btn">Shop now</button>
  </div>
</template>

<style scoped>
.hero-bg {
  background-image: url("../assets/images.png");
  background-size: cover;
  background-position: center;
  height: 550px;
  width: 100%;
  position: relative;
}
.hero-content {
  position: absolute;
  z-index: 1;
  top: 10rem;
  width: 268px;
  display: flex;
  flex-direction: column;
  column-gap: 2px;
  left: 96px;
}
.hero-h1 {
  font-size: 48px;
  height: 5px;
  color: rgb(82, 82, 82);
}
.hero-p {
  height: 10px;
  font-size: 14px;
  color: #6b6b6b;
}
.hero-h2 {
  height: 5px;
  color: rgb(82, 82, 82);
}
.hero-btn {
  width: 113px;
  height: 41px;
  color: white;
  background-color: #313131;
  border-radius: 6px;
  border: none;
  position: absolute;
  bottom: -66px;
}
.hero-btn:hover {
  background-color: #4f4f4f;
}

@media (max-width: 500px) {
  .hero-bg {
    background-image: url("../assets/images.png");
    background-size: cover;
    background-position: center;
    height: 404px;
    width: 92%;
    position: relative;
  }
}
</style>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function goToAbout() {
  router.push("/products"); // Navigates to /about page
}
</script>
