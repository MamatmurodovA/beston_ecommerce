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
  @import "assets/scss/main";
 h1{
   font-size: 24px;
 }
  /*#app {*/
    /*max-width: 1200px;*/
    /*margin: 0 auto;*/
  /*}*/
  /*#main #content #right {*/
    /*width: 20%;*/
  /*}*/
  .swiper-container{
    width: 100%;
  }
</style>
