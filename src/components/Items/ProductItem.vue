<template>
    <div class="item">
      <div class="top">
        <div class="image">
          <router-link :to="{name: 'product_detail_page', params: {category_id: product.category_id, id: product.id}}">
            <img :src="product.image">
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
          <router-link :to="{name: 'product_detail_page', params: {category_id: product.category_id, id: product.id}}">
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
        <li>Place of Origin: <span>Jiangsu,China (Mainland)</span></li>
        <li>Shape: <span>Cup-Shaped</span></li>
        <li>Size: <span>4"</span></li>
        <li>Hardness: <span>T</span></li>
        <li>Abrasive: <span>Silicon Carbide</span></li>
        <li>Model Number: <span>T27</span></li>
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

</style>
