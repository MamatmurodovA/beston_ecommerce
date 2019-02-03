<template>
  <ul class="menu">
    <li id="cart1" @mouseenter="cart_opened=!cart_opened" @mouseleave="cart_opened=false">
      <div>
        <img src="/static/images/shopping-cart-icon.png" alt="shopping cart">
        <span>{{ $t('message.cart')}}</span>
      </div>
      <h2 id="value">0</h2>
    </li>
    <li id="reg">
      <router-link :to="{name: 'sign_in_page'}">
          {{ $t("message.sign_in") }}
      </router-link>
    </li>
    <div id="cartview" :class="{'open': cart_opened}">
      <div class="item">
        <img src="/static/images/cartview.png">
        <div class="description">
          <h2>Halogen Room Handwear</h2>
          <p>$125.00 x2</p>
        </div>
        <a href="" id="delete"><p>X</p></a>
      </div>
      <p>ORDER TOTAL<span>325$</span></p>
      <div class="buttons">
        <a href="" class="button" id="viewcart">view cart</a>
        <a href="" class="button" id="cancel">cancel</a>
      </div>
    </div>
  </ul>
</template>

<script>
  export default {
    name: 'Cart',
    data() {
      return {
        cart_opened: false
      }
    }

  }
</script>

<style scoped>

</style>
