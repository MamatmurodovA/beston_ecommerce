<template>
  <div>
      <div class="sign-in-container">
          <h2 class="title">{{ $t('message.sign_in') }}</h2>
          <form action="" method="">
            <div class="form-group">
              <label for="mail">{{ $t('message.email') }}:</label>
              <input required type="email" class="form-control" id="mail">
            </div>
            <div class="form-group" v-if="user_exist">
              <label for="pwd">{{ $t('message.password') }}:</label>
              <input required type="password" class="form-control" id="pwd">
            </div>
            <button type="submit" class="btn btn-default" @click.prevent="user_exist=true">{{ $t('message.sign_in') }}</button>
          </form>
      </div>
      <div class="create-account" >
          <div class="title-line">
            <span class="create-account-title">
              {{ $t('message.new_account') }}?
            </span>
          </div>
          <span class="button-create-account">
              <router-link :to="{name: 'sign_up_page'}" class="create-account-link">
                {{ $t('message.create_your_account') }}
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
            user_exist: false
          }
      },
  }
</script>

<style scoped>


</style>
