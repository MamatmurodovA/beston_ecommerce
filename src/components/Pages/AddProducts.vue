<template>
    <div>
      <section class="add-products">
        <ul class="steps-section">
          <li class="passed"><a href="#!">1</a></li>
          <li class="active"><a href="#!">2</a></li>
          <li><a href="#!">3</a></li>
          <li><a href="#!">4</a></li>
          <li><a href="#!">5</a></li>
        </ul>
        <div class="form">
          <h1>Sign Up Your User Account</h1>
          <p>Fill all form field to go next step</p>
          <form>
            <div class="form-s-01">
              <input type="text" placeholder="name">
              <input type="email" placeholder="email">
              <input type="password" placeholder="password">
            </div>
          </form>
        </div>
      </section>

    </div>
</template>

<script>
  export default {
    name: 'AddProducts'
  }
</script>


<style lang="scss">
  $color-accent: #ff6a00;



   .add-products{
     max-width: 1300px;
     margin: 0 auto;
     .steps-section{
       list-style: none;
       display: flex;
       justify-content: center;
       align-items: center;
       li{
         border-radius: 50%;
         width: 100%;
         height: 100px;
         display: flex;
         justify-content: center;
         align-items: center;
         position: relative;
         z-index: 10;
         a{
           width: 50px;
           height: 50px;
           display: flex;
           justify-content: center;
           align-items: center;
           border-radius: 50%;
           border: 1px solid #333333;
           position: relative;
           z-index: 9;
           background-color: #FFFFFF;
         }
         &:before{
           content: '';
           position: absolute;
           height: 2px;
           width: 100%;
           top: 50%;
           left: 25px;
           transform: translateX(-50%);
           background-color: #333333;
           z-index: 1;
         }
         &:first-child{
           &:before{
             display: none;
           }
         }
         &.active{
           &:before{
             background-color: $color-accent;
             z-index: 1;
           }
           a{
             background-color: $color-accent;
             color: #FFFFFF;
           }
         }
         &.passed{
           &:before{
             background-color: $color-accent;
             z-index: 1;
           }
           a{
             background-color: $color-accent;
             color: #FFFFFF;
           }
         }
       }
     }
   }
</style>
