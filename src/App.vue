<template>
  <div id="app">
    <router-view/>
    <div id="loader" v-if="$store.getters.loading">
      <atom-spinner
        :animation-duration="500"
        :size="140"
        :color="'#ff6a00'"
        class="loader"
        v-if="$store.getters.loading"
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
    },
    beforeCreate(){
        this.$store.dispatch('loadCategories')
        this.$store.dispatch('loadTopProducts')
        this.$store.dispatch('loadNewProducts')
    }
  }
</script>

<style lang="scss">

  @import "~susy";
  @import "~breakpoint-sass/stylesheets/breakpoint";
  @import "../static/scss/main";
  @import "../static/plugins/fontawesome/font-awesome.min.css";

  h1 {
    font-size: 24px;
  }

  .swiper-container {
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
    width: 100%;
    height: 100%;
    z-index: 99;
    background-color: white;
    opacity: 0.8;
  }
  #loader .atom-spinner.loader {
    z-index: 9999999999999;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    position: absolute;
  }
  .form-control {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
    -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  }

  .col-md-12 {
    width: 100%;
  }

  .col-md-4 {
    width: 33.33333333%;
  }

  .col-md-3 {
    width: 25%;
  }
  .col-md-6 {
    width: 50%;
  }

  .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12,  .col-lg-2,
  .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7,
  .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11,
  .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5,
  .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1,
  .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3,
  .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9,
  .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3,
  .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
  }
  .form-group {
    margin-bottom: 15px;
  }
  label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 700;
  }
  .btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
  }
  .btn-default {
    color: #333;
    background-color: #fff;
    border-color: #ccc;
  }
  .btn-primary {
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
  }
  .btn-success {
    color: #fff;
    background-color: #5cb85c;
    border-color: #4cae4c;
  }
  .btn-danger {
    color: #fff;
    background-color: #d9534f;
    border-color: #d43f3a;
  }
</style>
