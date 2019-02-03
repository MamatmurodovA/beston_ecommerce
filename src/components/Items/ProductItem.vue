<template>
    <div class="item">
      <div class="top">
        <div class="image">
          <router-link :to="{name: 'product_detail_page', params: {category_slug: product.category.slug, product_slug: product.slug}}">
            <div class="product-item-image" :style="{backgroundImage: 'url('+ product.main_image +')'}"></div>
          </router-link>
        </div>
        <div class="cart">
          <a href=""><i class="fa fa-shopping-cart"></i></a>
          <a href="" id="add-fav"><i class="fa fa-heart-o"></i></a>
          <a href=""><i class="fa fa-eye"></i></a>
        </div>
      </div>
      <div class="middle">
        <div class="title">
          <router-link :to="{name: 'product_detail_page', params: {category_slug: product.category.slug, product_slug: product.slug}}">
            {{ product.title }}
          </router-link>
        </div>
        <div class="price">
          <span>{{ product.cost }}</span> / Set
        </div>
        <p class="min-quantity">
          <span>1 Piece</span>(Min. Order)
        </p>
        <form class="buttons">
          <span id="add-compare">
              <label><input type="checkbox" value="">Add to Compare</label>
          </span>
          <button id="supplier_mail">Contact supplier</button>
        </form>
      </div>
      <ul class="information">
        <li v-for="specification in product.specifications">
          {{ specification.title }}: <span>{{ specification.info }}</span>
        </li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: 'ProductItem',
    props: ['product']
  }
</script>

<style scoped>
  .product-item-image {
    width: 222px;
    height: 222px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
