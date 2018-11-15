<template>
  <div class="item">
    <div class="image">
      <router-link :to="{name: 'product_detail_page', params: {category_id: 1, id: product.id}}">
        <img :src="product.picture">
      </router-link>
    </div>
    <div class="cart">
      <a href=""><i class="fa fa-shopping-cart"></i></a>
      <a href="" class="add-fav"><i class="fa fa-heart-o"></i></a>
      <a href=""><i class="fa fa-eye"></i></a>
    </div>
    <div class="title">
      <router-link :to="{name: 'product_detail_page', params: {category_id: 1, id: product.id}}">
        {{ product.title }}
      </router-link>
    </div>
    <div class="price">
      {{ product.price }} / Set
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProductItem',
    props: ['product'],
  }
</script>

<style scoped>

</style>
