<template>
  <div>
      <Header></Header>
      <Navbar></Navbar>
      <SectionTop></SectionTop>
      <RouterView></RouterView>
      <Underground></Underground>
      <SectionBottom></SectionBottom>
      <Footer></Footer>
  </div>
</template>

<script>

  import Header from '../Parts/Header'
  import Navbar from '../Parts/Navbar'
  import SectionTop from '../Parts/SectionTop'
  import SectionBottom from '../Parts/SectionBottom'
  import Underground from '../Parts/Underground'
  import Footer from '../Parts/Footer'


  export default {
    name: 'HomeBase',
    components: [
      Header,
      Navbar,
      SectionTop,
      SectionBottom,
      Underground,
      Footer
    ]
  }
</script>

<style scoped>

</style>
