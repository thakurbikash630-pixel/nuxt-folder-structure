<template>
  <div>
    <nav>
      <ul class="nav-bar">
        <NuxtLink to="/" class="header">Home</NuxtLink>
        <li><NuxtLink to="/about" class="header">About</NuxtLink></li>
        <li><NuxtLink to="/contact" class="header">Contact</NuxtLink></li>
        <li><NuxtLink to="/products" class="header">Products</NuxtLink></li>
        <div class="search">
          <label for="username"></label>
          <input
            class="searchInput"
            type="text"
            ,
            id="username"
            placeholder="Search..."
          />
          <MagnifyingGlassIcon class="search-icn" />
        </div>
        <button class="btn-logout" v-if="userStore.user" @click="logoutClick">
          Logout
        </button>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/24/solid";
import { useUserStore } from "~/store/user";
const userStore = useUserStore();

const logoutClick = () => {
  userStore.logout(); // 1️⃣ clear user
  navigateTo("/login"); // 2️⃣ go to login page
};
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
  text-decoration: none;
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
  width: 1447px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  padding-left: 30px;
  padding-right: 6px;
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

.searchInput {
  margin-right: 30px;
  /* padding-right: 30px; */
  height: 30px;
  border-radius: 5px;
  background-color: rgb(174, 174, 174);
  border: rgb(156, 156, 156);
  margin-top: 4px;
}

.btn-logout {
  height: 34px;
  width: 64px;
  color: #1b0047;
  font-size: 15px;
  border-radius: 5px;
  box-shadow: 0 0 4px 2px rgb(82 82 82 / 51%);
  border: 2px solid #282828b0;
  font-family: serif;
  background-color: #d8d8d8;
}

.btn-logout:hover {
  background-color: #e9e9e9;
}

@media (max-width: 500px) {
  .header {
    color: rgb(38, 2, 88);
    font-size: 20px;
    text-decoration: none;
  }
  .nav-bar {
    background-color: rgb(139 139 139);
    width: 85%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-size: 15px;
    padding-left: 30px;
    padding-right: 6px;
    padding-top: 15px;
    padding-bottom: 5px;
    margin: 0;
    gap: 14px;
  }
  .searchInput {
    display: none;
  }
  .search-icn {
    display: none;
  }
}
</style>
