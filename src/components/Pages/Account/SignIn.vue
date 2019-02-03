<template>
  <div>
      <div class="sign-in-container">
          <h2 class="title">{{ $t('message.sign_in') }}</h2>
          <form @submit.prevent="loginSubmit">
            <div class="form-group">
              <label for="mail">{{ $t('message.email') }}:</label>
              <input required type="email" class="form-control" id="mail" v-model="user.username">
            </div>
            <div class="form-group" v-if="user_exist">
              <label for="pwd">{{ $t('message.password') }}:</label>
              <input autocomplete="false" required type="password" class="form-control" id="pwd" v-model="user.password">
            </div>
            <button type="submit" class="btn btn-default" >{{ $t('message.sign_in') }}</button>
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
            user_exist: false,
            user: {
              username: '',
              password: ''
            }
          }
      },
      methods: {
        loginSubmit(){
            if (this.user.password.length)
            {
              console.dir(this.user)
              let message = ''
              if (this.user.username === 'azam.mamatmurodov@gmail.com' && this.user.password === '123')
              {
                message = 'Login successful'
              }
              else
              {
                message = 'Login failed'
              }
              alert(message)
            }
            else
            {
              this.user_exist = true
            }
        }
      }
  }
</script>

<style scoped>
  label{
    font-weight: 700;
    margin-top: 15px;
    margin-bottom: 10px;
  }

</style>
