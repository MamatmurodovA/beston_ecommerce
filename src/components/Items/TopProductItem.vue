<template>
    <div >
      <div class="image">
        <router-link :to="{name: 'product_detail_page', params: {category_slug: product.category.slug, product_slug: product.slug}}">
          <img :src="product.main_image">
        </router-link>
      </div>
      <div class="cart">
        <a href=""><i class="fa fa-shopping-cart"></i></a>
        <a href="" class="add-fav"><i class="fa fa-heart-o"></i></a>
        <a href=""><i class="fa fa-eye"></i></a>
      </div>
      <div class="title">
        <router-link :to="{name: 'product_detail_page', params: {category_slug: product.category.slug, product_slug: product.slug}}">
          {{ product.title }}
        </router-link>
      </div>
      <div class="price">
        {{ product.cost }} / Set
      </div>
    </div>
</template>

<script>
  export default {
    name: 'TopProductItem',
    props: ['product']
  }
</script>

<style scoped>
  .cart a{
    text-align: center;
  }
</style>
