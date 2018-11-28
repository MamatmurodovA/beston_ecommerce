<template>
  <ul class="breadcrumb">
    <li>
      <router-link :to="{name: 'home_page'}">
        Home
      </router-link>
    </li>
    <li>
      <router-link to="/category/50/">
        Agriculture & Food
      </router-link>
    </li>
    <li class="active">
      <router-link to="/category/50/">
        Categories name
      </router-link>
    </li>
    <li >
        <router-link to="/category/50/products/403/">
            Product detail
        </router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'Breadcrumb',
    data() {
      return {
        paths: [
          {
            name: 'Home',
            path: 'home'
          }
        ],
        page: {
          name: 'home_page'
        }
      }
    },
    props: {
      args: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    methods: {
        defineRouter(){
          let page_name = this.$route.name;
          let path = {}
          if (page_name === 'product_category_page')
          {
            let category = this.args.category

          }
        }
    },
    beforeRouteEnter() {

    }
  }
</script>

<style scoped>

</style>
