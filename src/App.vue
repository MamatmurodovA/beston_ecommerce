<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    handleScroll(event)
    {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let top_fixed = document.querySelector('#top_fixed')
      let nav = document.querySelector('#nav')
      if (scrollTop > 105)
      {
        top_fixed.classList.add('flex')
        nav.classList.add('fixed')
      }
      else
      {
        top_fixed.classList.remove('flex')
        nav.classList.remove('fixed')
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
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
</style>
