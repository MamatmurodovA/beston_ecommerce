<template>
  <div>
      <Header></Header>
      <Navbar></Navbar>
      <router-view></router-view>
      <Footer></Footer>
  </div>
</template>

<script>

  import Header from '../Parts/Header'
  import Navbar from '../Parts/Navbar'
  import Footer from '../Parts/Footer'


  export default {
    name: 'HomeBase',
    components: {
      Header,
      Navbar,
      Footer
    }
  }
</script>

<style scoped>

</style>
