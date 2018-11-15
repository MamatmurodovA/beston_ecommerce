<template>
  <ul class="breadcrumb">
    <li>
      <router-link :to="{name: 'home_page'}">
        Home
      </router-link>
    </li>
    <li>
      <router-link :to="{name: 'product_category_page', params: {category_id: 1}}">
        Agriculture & Food
      </router-link>
    </li>
    <li class="active">
      <router-link :to="{name: 'product_list_page', params: {category_id: 1, }}">
        Categories name
      </router-link>
    </li>
    <li v-if="page.name==='product_detail'">
        <router-link :to="{name: 'product_detail_page', params: {category_id: 1, id: 1}}">
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
      }
    },
    props: {
      page: {
        default: function () {
          return {
            name: 'test',
            params: {}
          }
        },
        type: Object
      }
    },
    mounted() {
    }
  }
</script>

<style scoped>

</style>
