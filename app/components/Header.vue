<template>
  <div>
    <nav>
      <ul class="nav-bar">
        <li><NuxtLink to="/" class="header">Home</NuxtLink></li>
        <li><NuxtLink to="/about" class="header">About</NuxtLink></li>
        <li><NuxtLink to="/contact" class="header">Contact</NuxtLink></li>
        <li><NuxtLink to="/blog" class="header">Products</NuxtLink></li>
        <div class="search">
          <label for="username"></label>
          <input type="text" , id="username" placeholder="Search..." />
          <MagnifyingGlassIcon class="search-icn" />
        </div>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/24/solid";
</script>

<style lang="css">
body {
  margin: 0;
  padding: 0;
}

.header {
  color: rgb(38, 2, 88);
  /* width: 30px; */
  font-size: 30px;
}
.header:hover {
  color: rgb(77, 15, 134);
}
li a {
  text-decoration: none;
  /* color: blue; */
}
.nav-bar {
  background-color: rgb(139 139 139);
  width: 1435px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  padding-left: 30px;
  padding-right: 18px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin: 0;
}

li {
  list-style-type: none;
}

.search-icn {
  height: 21px;
  width: 17px;
  position: absolute;
  right: 38px;
  padding-top: 4px;
  color: #383838;
}
.search {
  display: flex;
  flex-direction: row;
  margin-right: 30px;
  align-items: center;
  font-size: 20px;
  /* width: 30px; */
  height: 30px;
  gap: 5px;
  position: relative;
}

input {
  margin-right: 30px;
  /* padding-right: 30px; */
  height: 30px;
  border-radius: 5px;
  background-color: rgb(174, 174, 174);
  border: rgb(156, 156, 156);
  margin-top: 4px;
}
</style>
