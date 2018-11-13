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
        ]
      }
    }
  }
</script>

<style scoped>

</style>
