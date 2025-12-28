<script setup></script>

<template>
  <div class="footer">
    <ul class="f-ul">
      Information
      <li class="f-li">About</li>
      <li class="f-li">Careers</li>
      <li class="f-li">Press</li>
      <li class="f-li">FAQ's</li>
    </ul>
    <ul class="f-ul">
      Products Gift Cards
      <li class="f-li">New Arrivals</li>
      <li class="f-li">On Sale</li>
      <li class="f-li">Top rated</li>
      <li class="f-li">Gift Cards</li>
    </ul>
    <ul class="f-ul">
      Customer Service
      <li class="f-li">Contact Us</li>
      <li class="f-li">Shipping & Returns</li>
      <li class="f-li">Privacy Policy</li>
      <li class="f-li">Terms & Conditions</li>
    </ul>
    <ul class="f-ul">
      My Account
      <li class="f-li">Order</li>
      <li class="f-li">History</li>
      <li class="f-li">Wishlist</li>
      <li class="f-li">Newsletter</li>
    </ul>
  </div>
</template>

<style lang="css">
.footer {
  height: 147px;
  background-color: rgb(164, 164, 164);
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  position: fixed;
}

.f-ul {
  padding-top: 0px;
  font-size: 17px;
  font-weight: 600;
  line-height: 22px;
  color: rgb(40 8 84);
}
.f-li {
  font-size: 13px;
  color: rgb(45, 45, 45);
  font-weight: 400;
}
.fb-icn {
  height: 20px;
  width: 20px;
}

@media (max-width: 500px) {
  .footer {
    height: 147px;
    background-color: rgb(164, 164, 164);
    display: flex;
    flex-direction: row;
    width: 92%;
    justify-content: center;
    position: fixed;
  }
  .f-ul {
    padding-top: 0px;
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    color: rgb(40 8 84);
  }
  .f-li {
    font-size: 9px;
    color: rgb(45, 45, 45);
    font-weight: 400;
  }
}
</style>
