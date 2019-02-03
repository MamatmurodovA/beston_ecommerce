<template>
    <div id="root">
      <h1>404</h1>
      <p>Page not found !</p>
    </div>
</template>

<script>
  export default {
    name: 'NotFound'
  }
</script>

<style lang="scss">
  #root {
    text-align: center;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    height: 100vh;
    h1 {
      font-size: 28px;
    }
  }
</style>
