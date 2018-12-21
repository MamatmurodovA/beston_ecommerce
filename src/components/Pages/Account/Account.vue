<template>
  <div>
      <Breadcrumb :params="param_list"></Breadcrumb>
      <div class="sign-in-container col-md-6" >
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
      <div class="sign-up-container col-md-6">
        <h2 class="title">{{ $t('message.sign_up') }}</h2>
        <form action="" method="">
          <div class="form-group">
            <label for="sign_in_mail">{{ $t('message.email') }}:</label>
            <input type="password" class="form-control" id="sign_in_mail">
          </div>
          <div class="form-group">
            <label for="sign_in_pwd">{{ $t('message.password') }}:</label>
            <input type="password" class="form-control" id="sign_in_pwd">
          </div>
          <button type="button" class="btn btn-default">{{ $t('message.sign_up') }}</button>
        </form>
      </div>
      <div class="clearfix"></div>
  </div>
</template>

<script>
  import Breadcrumb from '../../Parts/Breadcrumb'
  export default {
      name: 'Account',
      components: {
          Breadcrumb
      },
      data(){
          return {
            param_list: []
          }
      }
  }
</script>

<style scoped>
  .sign-up-container::after {
    clear: both;
  }
</style>
