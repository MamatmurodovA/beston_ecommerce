<template>
  <div>
      <Header></Header>
      <Navbar></Navbar>
      <router-view></router-view>
      <SectionBottom></SectionBottom>
      <Footer></Footer>
  </div>
</template>

<script>

  import Header from '../Parts/Header'
  import Navbar from '../Parts/Navbar'
  import SectionBottom from '../Parts/SectionBottom'
  import Footer from '../Parts/Footer'


  export default {
    name: 'HomeBase',
    components: {
      Header,
      Navbar,
      SectionBottom,
      Footer
    }
  }
</script>

<style scoped>

</style>
