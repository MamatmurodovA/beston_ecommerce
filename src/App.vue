<template>
  <div id="app">
    <router-view />
    <div id="loader" v-if="$store.getters.loading">
      <atom-spinner
        :animation-duration="1000"
        :size="100"
        :color="'#ff6a00'"
      />
    </div>
  </div>
</template>

<script>
import {AtomSpinner} from 'epic-spinners'
export default {
  name: 'App',
  components: {
    AtomSpinner
  }
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
  div#loader {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    width: 200px;
    height: 200px;
    z-index: 99999;
  }
</style>
