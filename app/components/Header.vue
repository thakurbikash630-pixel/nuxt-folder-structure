<template>
  <div>
    <nav>
      <ul class="nav-bar">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/contact">Contact</NuxtLink>
          <NuxtLink to="/blog">Blog</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="css">
body {
  margin: 0;
  padding: 0;
}

li a {
  text-decoration: none;
  color: blue;
}
.nav-bar {
  background-color: aquamarine;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  padding: 0;
  margin: 0;
}

li {
  background-color: aquamarine;
  font-size: 30px;
  list-style-type: none;
  width: 100%;
  /* display: flex; */
  /* flex-direction: row; */
}
</style>
