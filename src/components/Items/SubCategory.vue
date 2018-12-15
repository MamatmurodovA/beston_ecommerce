<template>
  <div class="subcategory-products" v-if="products.length">
    <div class="wrapper">
      <div class="list">
        <h2 class="block-title">
          <router-link :to="{name: 'product_list_page', params: {category_id: category.id}}">
            {{ category.title }}
          </router-link>
        </h2>
        <div class="menu">
          <ul class="sub_menu">
            <li class="sub_list"><a href="product_page.html">shenzhen</a></li>
            <li class="sub_list"><a href="">wireless charger</a></li>
            <li class="sub_list"><a href="">headset</a></li>
            <li class="sub_list active"><a href="">power bank</a></li>
            <li class="sub_list"><a href="">shenzhen</a></li>
            <li class="sub_list"><a href="">wireless charger</a></li>
            <li class="sub_list"><a href="">headset</a></li>
            <li class="sub_list"><a href="">power bank</a></li>
          </ul>
        </div>
      </div>
      <div class="items">
        <SmallProductItem :product="product"  v-for="(product, index) in products" :key="index"></SmallProductItem>
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
            products: []
        }
    },
    watch: {
      'category': 'getProducts'
    },
    components: {SmallProductItem, },
    methods: {
      getProducts(){
        let url = config.API_ROOT + "/products/?cat_slug=" + this.category.slug
        console.log(url)
        axios.get(url)
          .then(json => {
            this.products = json.data.results
          })
      },
    },
    created(){
      this.getProducts()
    },
    computed: {

    }
  }
</script>

<style scoped>

</style>
