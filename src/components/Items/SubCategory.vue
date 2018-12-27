<template>
  <div class="subcategory-products" >
    <div class="wrapper" >
      <div class="list">
        <h2 class="block-title">
          <router-link :to="{name: 'product_list_page', params: {category_slug: category.slug}}">
            {{ category.title }}
          </router-link>
        </h2>
        <div class="menu">
          <ul class="sub_menu" v-if="category.brands.length">
            <li class="sub_list" @click.prevent="current_brand=0" :class="{active: current_brand === 0}">
              <a href="">All brands</a>
            </li>
            <li class="sub_list " v-for="brand in category.brands" @click.prevent="current_brand=brand.id" :class="{active: brand.id === current_brand}">
              <a >{{ brand.title }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="items">
        <template v-if="products.length">
          <SmallProductItem :product="product"  v-for="(product, index) in products" :key="index"></SmallProductItem>
        </template>
        <template v-else>
          Products not exist
        </template>
      </div>
    </div>
  </div>
</template>

<script>

  import SmallProductItem from '../Items/SmallProductItem'
  import * as config from '../../config'
  export default {
    name: 'SubCategory',
    props: ['category'],
    data(){
        return {
            products: [],
            current_brand: 0
        }
    },
    watch: {
      'category': 'getProducts',
      'current_brand': 'getProducts'
    },
    components: {SmallProductItem, },
    methods: {
      getProducts(){
        let url = config.API_ROOT + "/products/?cat_slug=" + this.category.slug
        console.log(this.current_brand)
        if (this.current_brand)
        {
          url += `&brand=${this.current_brand}`
          console.log(url)
        }
        this.axios.get(url)
          .then(json => {
            this.products = json.data.results
          })
      },
    },
    created(){
      this.getProducts()
    },
  }
</script>

<style scoped>

</style>
