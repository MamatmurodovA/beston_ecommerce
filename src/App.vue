<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">

  @import "~susy";
  @import "~breakpoint-sass/stylesheets/breakpoint";
  @import "../static/scss/main";
  @import "../static/plugins/fontawesome/font-awesome.min.css";
 h1{
   font-size: 24px;
 }
  .swiper-container{
    width: 100%;
    margin-bottom: 30px;
  }
</style>
