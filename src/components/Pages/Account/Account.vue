<template>
  <div>
      <Breadcrumb :params="param_list"></Breadcrumb>
      <div class="sign-in-container" >
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
      <div class="create-account">
        <div class="title-line">
          <span class="create-account-title">New customer?</span>
        </div>
        <span class="button-create-account">
          <a class="create-account-link" href="">Create your Accout</a>
        </span>

      </div>
      <div class="sign-up-container">
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

  .sign-in-container, .sign-up-container {
    border: 1px solid #ddd;
    width: 30rem;
    margin: 30px auto;
    padding: 20px;
    border-radius: .2142857143rem;
  }
  .title{
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 30px;
  }
  form{
    width: 100%;
  }
  .form-group{
    box-sizing: border-box;
  }
  .form-control{
    box-sizing: border-box;
    height: 46px;
  }
  label{
    font-weight: 700;
    margin-top: 15px;
    margin-bottom: 10px;
  }
  .btn-default{
    width: 100%;
    padding: 12px 0;
    margin-top: 15px;
    background-color: #ff6a00;
    color: #ffffff;
    font-weight: 700;
    font-size: 16px;
  }
  .btn-default:hover{
    background-color: #f58c42;
  }
  .create-account{
    width: 30rem;
    margin: 30px auto;
    padding: 20px;
  }
  .title-line{
    position: relative;
  }
  .title-line::after{
    display: block;
    content: '';
    width: 100%;
    height: 1px;
    background-color: rgba(28, 30, 35, 0.4);
    position: absolute;
    top: 39%;
    left: 0;
  }
  .create-account .create-account-title{
    font-weight: 400;
    font-size: 16px;
    display: block;
    background-color: #fff;
    text-align: center;
    position: relative;
    z-index: 10;
    width: 150px;
    margin: 0 auto;
    margin-bottom: 30px;
  }
  .button-create-account{
    display: block;
    position: relative;
    overflow: hidden;
    height: 37px;
    box-shadow: 0 1px 0 rgba(255,255,255,.6) inset;
    border-radius: 2px;
    background: linear-gradient(to bottom,#f7f8fa,#e7e9ec);
    border: 1px solid #cccccc;
  }
  .create-account-link {
    color: #111;
    background-color: transparent;
    border: 0;
    display: block;
    font-family: Arial,sans-serif;
    font-size: 13px;
    line-height: 37px;
    margin: 0;
    outline: 0;
    padding: 0 10px 0 11px;
    text-align: center;
    white-space: nowrap;
    font-weight: 600;
    height: 100%;
  }
</style>
