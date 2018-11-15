<template>
  <div>
      <Header></Header>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
      <Footer></Footer>
  </div>
</template>

<script>

  import Header from '../Parts/Header'
  import Footer from '../Parts/Footer'


  export default {
    name: 'HomeBase',
    components: {
      Header,
      Footer
    }
  }
</script>

<style scoped>
</style>
