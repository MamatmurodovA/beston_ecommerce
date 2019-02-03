<template>
    <div class="">
        <div class="sign-up-container" >
          <h2 class="title">{{ $t('message.sign_up') }}</h2>
          <form action="">
            <div class="form-group">
              <label for="sign_in_mail">{{ $t('message.email') }}:</label>
              <input required type="email" class="form-control" id="sign_in_mail">
            </div>
            <div class="form-group">
              <label for="sign_in_pwd">{{ $t('message.password') }}:</label>
              <input required type="password" class="form-control" id="sign_in_pwd">
            </div>
            <div class="form-group">
              <label for="sign_in_pwd_confirm">{{ $t('message.confirm_password') }}:</label>
              <input required type="password" class="form-control" id="sign_in_pwd_confirm">
            </div>
            <button type="submit" class="btn btn-default">{{ $t('message.sign_up') }}</button>
          </form>
        </div>
        <div class="create-account" >
          <div class="title-line">
            <span class="create-account-title">
                {{ $t('message.account_exist') }}?
            </span>
          </div>
          <span class="button-create-account">
            <router-link :to="{name: 'sign_in_page'}" class="create-account-link">
              {{ $t('message.sign_in_with_existing_account') }}
            </router-link>
          </span>
        </div>
    </div>
</template>

<script>
  import Breadcrumb from '../../Parts/Breadcrumb'
  export default {
    name: 'SignUp',
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
  label{
    font-weight: 700;
    margin-top: 15px;
    margin-bottom: 10px;
  }
</style>
