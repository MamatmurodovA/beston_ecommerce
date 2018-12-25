<template>
  <div>
      <div class="sign-in-container">
          <h2 class="title">{{ $t('message.sign_in') }}</h2>
          <form action="" method="">
            <div class="form-group">
              <label for="mail">{{ $t('message.email') }}:</label>
              <input type="password" class="form-control" id="mail">
            </div>
            <div class="form-group">
              <label for="pwd">{{ $t('message.password') }}:</label>
              <input type="password" class="form-control" id="pwd">
            </div>
            <button type="button" class="btn btn-default">{{ $t('message.sign_in') }}</button>
          </form>
      </div>
      <div class="create-account" >
          <div class="title-line">
            <span class="create-account-title">New customer?</span>
          </div>
          <span class="button-create-account">
              <router-link :to="{name: 'sign_up_page'}" class="create-account-link">
                Create your Account
              </router-link>
          </span>
      </div>
  </div>
</template>

<script>
  import Breadcrumb from '../../Parts/Breadcrumb'
  export default {
      name: 'SignIn',
      components: {
          Breadcrumb
      },
      data(){
          return {
            param_list: [],
          }
      },
  }
</script>

<style scoped>


</style>
