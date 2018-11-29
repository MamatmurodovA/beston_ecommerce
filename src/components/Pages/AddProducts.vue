<template>
    <div>
      <section class="add-products">
        <ul class="steps-section">
          <li class="passed">
            <a href="#!">1</a>
            <h4>
              Product info
            </h4>
          </li>
          <li class="active">
            <a href="#!">2</a>
            <h4>Variations </h4>
          </li>
          <li>
            <a href="#!">3</a>
            <h4>Offer</h4>
          </li>
          <li>
            <a href="#!">4</a>
            <h4>Images</h4>
          </li>
        </ul>
        <div class="form">
          <p>Fill all form field to go next step</p>
          <form>
            <div class="form-s-01">
              <label for="productTitle">Title</label>
              <input type="text" placeholder="name" id="productTitle">

              <label for="productBrand">Brand</label>
              <input type="text" placeholder="brand" id="productBrand">

              <label for="productColor">Color</label>
              <input type="text" placeholder="color" id="productColor">

              <label for="productSize">Size</label>
              <input type="text" name="" id="productSize">

              <input type="submit" value="Next" class="button-next">
            </div>
            <div class="form-s-01">
              <label for="productTitle">Title</label>
              <input type="text" placeholder="name" id="productTitle">

              <label for="productBrand">Brand</label>
              <input type="text" placeholder="brand" id="productBrand">

              <label for="productColor">Color</label>
              <input type="text" placeholder="color" id="productColor">

              <label for="productSize">Size</label>
              <input type="text" name="" id="productSize">

              <input type="submit" value="Next" class="button-next">
            </div>
            <div class="form-s-01">
              <label for="productTitle">Title</label>
              <input type="text" placeholder="name" id="productTitle">

              <label for="productBrand">Brand</label>
              <input type="text" placeholder="brand" id="productBrand">

              <label for="productColor">Color</label>
              <input type="text" placeholder="color" id="productColor">

              <label for="productSize">Size</label>
              <input type="text" name="" id="productSize">

              <input type="submit" value="Next" class="button-next">
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
       margin-bottom: 30px;
       li{
         border-radius: 50%;
         width: 100%;
         height: 100px;
         display: flex;
         justify-content: center;
         align-items: flex-start;
         flex-direction: column;
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
           margin-bottom: 15px;
         }
         &:before{
           content: '';
           position: absolute;
           height: 2px;
           width: 100%;
           top: 34px;
           left: -84%;
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
           }
           a{
             background-color: $color-accent;
             color: #FFFFFF;
           }
         }
         &.passed{
           &:before{
             background-color: $color-accent;
           }
           a{
             background-color: $color-accent;
             color: #FFFFFF;
           }
         }
       }
     }
     .form-s-01{
       display: flex;
       flex-direction: column;
       margin-top: 30px;
       margin-bottom: 30px;
       label{
         margin-bottom: 10px;
         margin-left: 10px;
       }
       input{
         margin-bottom: 20px;
         border-radius: 3px;
         box-shadow: 1px 1px 1px #cccccc;
         border: 1px solid #333333;
         padding: 10px 20px;
         width: 300px;
       }
       input[type=submit]{
         background-color: $color-accent;
         color: #FFFFFF;
         width: 200px;
       }
     }
   }
</style>
