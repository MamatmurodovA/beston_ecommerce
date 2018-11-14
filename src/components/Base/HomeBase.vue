<template>
  <div>
      <Header></Header>
      <router-view></router-view>
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
