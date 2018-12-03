<template>
  <div id="search">
    <form class="form">
      <input type="text" class="search_panel" :placeholder="$t('message.search')">
      <select>
        <option class="main">{{ $t("message.all_categories") }}</option>
        <i class="fa fa-sort-desc" aria-hidden="true"></i>
        <option :value="category.id" v-for="category in categories">
            {{ category.title }}
        </option>
      </select>
      <button type="submit" class="search_button">
        <img src="/static/images/search-icon.png">
      </button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Search',
    props: ['categories']
  }
</script>

<style scoped>

</style>
