<template>
  <div class="abt">
    <h3 class="abt-h3">Shopping Cart</h3>
    <p>Shirts:{{ shirts }}</p>
    <button class="add-btn" @click="addShirt">item:Add Shirt</button>
    <button class="remove-shirt" @click="removeShirt" :disabled="shirts <= 0">
      Remove Shirt
    </button>

    <p>Pants:{{ pants }}</p>
    <button class="add-btn" @click="addPant">item:Add Pant</button>
    <button class="remove-shirt" @click="removePant" :disabled="pants <= 0">
      Remove Pant
    </button>
  </div>
  <button class="total">Total Items: {{ totalItems }}</button>
</template>
<style lang="css">
.btn {
  width: 40px;
  height: 20px;
}
</style>

<script setup>
const { shirts, pants, addShirt, addPant, removePant, removeShirt } =
  useCounter();
const totalItems = computed(() => shirts.value + pants.value);
</script>

<style lang="css">
.add-btn {
  width: 100px;
  height: 30px;
  border: 1px solid #b6b6b6;
  border-radius: 4px;
  margin-right: 10px;
}
.remove-shirt {
  width: 100px;
  height: 30px;
  border: 1px solid #b6b6b6;
  border-radius: 4px;
}
.abt {
  height: 532px;
  margin-left: 100px;
  position: relative;
}
.total {
  position: absolute;
  z-index: 1;
  top: 17rem;
  left: 9rem;
  width: 100px;
  height: 37px;
}
</style>
