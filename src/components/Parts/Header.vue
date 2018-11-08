<template>
  <div id="header">
    <div id="top">
      <div id="navbar">
        <div class="burger1"><a href="#" id="burger1"></a></div>
        <div class="logo"><a href=""><img src="images/logo-top.png"></a></div>
        <div class="reclame"><img src="images/reclame.png"></div>
        <ul class="menu">
          <li id="cart1">
            <a href="#"><img src="images/shopping-cart-icon.png" alt="shopping cart">CART</a>
            <h2 id="value">0</h2>
          </li>
          <li id="cart1_hide">
            <a href="#"><img src="images/shopping-cart-icon.png" alt="shopping cart">CART</a>
            <h2 id="value_hide">0</h2>
          </li>
          <li id="reg">
            <a href="pages/signin_page.html">SIGN IN</a>
          </li>
          <!-- <li id="sign"><a href="pages/profile_page.html">User profile</a></li> -->
          <!-- <li id="sign2"><a href="pages/profile_page_merchant.html">Merchant profile</a></li> -->
          <div id="cartview">
            <div class="item">
              <img src="images/cartview.png">
              <div class="description">
                <h2>Halogen Room Handwear</h2>
                <p>$125.00 x2</p>
              </div>
              <a href="" id="delete"><p>X</p></a>
            </div>
            <div class="item">
              <img src="images/cartview.png">
              <div class="description">
                <h2>Shaving Cream, 100 gm</h2>
                <p>$75.00 x1</p>
              </div>
              <a href="" id="delete"><p>X</p></a>
            </div>
            <div class="item">
              <img src="images/cartview.png">
              <div class="description">
                <h2>Shaving Cream, 100 gm</h2>
                <p>$75.00 x1</p>
              </div>
              <a href="" id="delete"><p>X</p></a>
            </div>
            <div class="item">
              <img src="images/cartview.png">
              <div class="description">
                <h2>Shaving Cream, 100 gm</h2>
                <p>$75.00 x1</p>
              </div>
              <a href="" id="delete"><p>X</p></a>
            </div>
            <div class="item">
              <img src="images/cartview.png">
              <div class="description">
                <h2>Shaving Cream, 100 gm</h2>
                <p>$75.00 x1</p>
              </div>
              <a href="" id="delete"><p>X</p></a>
            </div>
            <p>ORDER TOTAL<span>325$</span></p>
            <div class="buttons">
              <a href="" class="button" id="viewcart">view cart</a>
              <a href="" class="button" id="cancel">cancel</a>
            </div>
          </div>
        </ul>
        <div class="languages">
          <a href=""><p>Uz</p><img src="images/uz.png" alt=""></a>
          <a href=""><p>Ru</p><img src="images/ru.png" alt=""></a>
          <a href="" class="active"><p>En</p><img src="images/en.png" alt=""></a>
        </div>
      </div>
    </div>
    <div class="search-block">
      <div id="search">
        <form class="form">
          <input type="search" class="search_panel" placeholder="Search...">
          <select>
            <option class="main">All categories</option><i class="fa fa-sort-desc" aria-hidden="true"></i>
            <option>Rubber Product Making Machinery</option>
            <option>Plastic Pellet Machine</option>
            <option>Urban Garbage Sorting Plant</option>
            <option>Solid Waste Pyrolysis Machine</option>
            <option>Oil Distillation Machine</option>
            <option>Biomass Carbonization Furnace</option>
            <option>Carbon Black Processing Machine</option>
            <option>Biomass Pellet Machine</option>
            <option>Tyre Pretreating Machine</option>
            <option>Concrete Mixer</option>
            <option>Concrete Mixing Plant</option>
          </select>
          <button type="submit" class="search_button"><img src="images/search-icon.png"></button>
        </form>
      </div>
    </div>
    <div id="top_fixed">
      <div id="navbar_fixed">
        <div class="burger2"><a href="#" id="burger2"></a></div>
        <div class="logo"><a href=""><img src="images/logo-top.png"></a></div>
        <div id="search">
          <form class="form">
            <input type="text" class="search_panel" placeholder="Search...">
            <select>
              <option class="main">All categories</option><i class="fa fa-sort-desc" aria-hidden="true"></i>
              <option>Rubber Product Making Machinery</option>
              <option>Plastic Pellet Machine</option>
              <option>Urban Garbage Sorting Plant</option>
              <option>Solid Waste Pyrolysis Machine</option>
              <option>Oil Distillation Machine</option>
              <option>Biomass Carbonization Furnace</option>
              <option>Carbon Black Processing Machine</option>
              <option>Biomass Pellet Machine</option>
              <option>Tyre Pretreating Machine</option>
              <option>Concrete Mixer</option>
              <option>Concrete Mixing Plant</option>
            </select>
            <button type="submit" class="search_button"><img src="images/search-icon.png"></button>
          </form>
        </div>
        <ul class="menu">
          <li id="cart2">
            <a href="#"><img src="images/shopping-cart-icon.png" alr="shopping cart">CART</a>
            <h2 id="value">0</h2>
          </li>
          <li id="cart2_hide">
            <a href="#"><img src="images/shopping-cart-icon.png" alr="shopping cart">CART</a>
            <h2 id="value_hide">0</h2>
          </li>
          <li id="reg">
            <a href="">SIGN IN</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style lang="scss">
  #header{
    #top{
      @include innerbox(0, 0);
      width: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
      #navbar{
        display: flex;
        align-items: center;
        .burger1{
          display: flex;
          align-items: center;
          width: 62px;
          height: 110px;
          border-right: 1px solid #f0f2f7;
          #burger1{
            background-image: url('../images/burger.png');
            width: 20px;
            height: 14px;
          }
        }
        .logo{
          display: flex;
          align-items: center;
          margin: 0 33px;
          a{
            display: inline-block;
            img{
              width: 100%;
            }
          }
        }
        .reclame{
          display: flex;
          align-items: center;
          padding: 15px 0;
          img{
            width: 100%;
          }
        }
        .menu{
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: 'Circe Bold';
          font-size: 12px;
          #cart1{
            display: flex;
            align-items: center;
            margin-left: 38px;
            #value{
              background: $lightgray;
              border: 1px solid $lightgray;
              border-radius: 50%;
              height: 26px;
              width: 26px;
              padding: 7px 8.5px;
              margin: 0 10px;
            }
            a{
              display: flex;
              align-items: center;
              img{
                margin-right: 8px;
              }
            }
          }
          #cart1_hide{
            display: none;
          }
          #reg{
            color: $gray;
            display: flex;
            align-items: center;
            width: 82.5px;
            padding: 9.5px 16.5px;
            border: 2px solid $lightgray;
            background: #fff;
            border-radius: 30px;
            position: relative;
            margin: 0 31px;
            font-family: 'Circe Bold';
            font-size: 11px;
          }
          #cartview{
            width: 310px;
            max-height: 420px;
            padding: 23px 23px 0 23px;
            background: #fff;
            border: none;
            border-radius: 3px;
            position: fixed;
            top: 105px;
            z-index: 14;
            font-family: 'Circe Regular';
            overflow-y: none;
            display: none;
            -webkit-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
            box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
            &.scroll{
              overflow-y: scroll;
            }
            p{
              display: flex;
              justify-content: space-between;
              font-family: 'Circe Bold';
            }
            .item{
              display: flex;
              margin-bottom: 15px;
              padding-bottom: 15px;
              border-bottom: 1px solid $lightgray;
              position: relative;
              #delete{
                position: absolute;
                left: -6px;
                top: -5px;
                background: #fff;
                border: 1px solid $lightgray;
                border-radius: 50%;
                padding: 2px 4px;
                p{
                  font-size: 9px;
                  color: #555555;
                }
              }
              .description{
                margin-left: 10px;
                h2{
                  margin-bottom: 10px;
                }
              }
            }
            .buttons{
              display: flex;
              justify-content: space-between;
              align-items: center;
              text-transform: uppercase;
              font-family: 'Circe Bold';
              margin-top: 15px;
              #viewcart{
                background: $blue;
                color: #fff;
                border-radius: 3px;
                margin-bottom: 23px;
                width: 115px;
                height: 41px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: .3s;
                &:hover{
                  background: #fff;
                  color: $blue;
                  border: 1px solid $blue;
                  transition: .3s;
                }
              }
              #cancel{
                border: 1px solid $lightgray;
                margin-bottom: 23px;
                color: #000;
                background: #fcfcfc;
                border-radius: 3px;
                width: 115px;
                height: 41px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: .3s;
                &:hover{
                  color: $lightgray;
                  background: #fff;
                  transition: .3s;
                }
              }
            }
            &.open{
              display: block;
            }
          }
        }
        .languages{
          display: flex;
          align-items: center;
          height: 100%;
          font-size: 14px;
          font-family: 'Circe Regular';
          a{
            display: flex;
            align-items: center;
            margin: 5px;
            color: #777777;
            img{
              margin: 0 5px;
            }
            &.active{
              color: #000;
            }
          }
        }
      }
    }
    .search-block{
      border-top: 1px solid #f0f2f7;
      border-bottom: 1px solid #ececec;
      #search{
        margin: 40px auto;
        border: 3px solid $orange;
        border-radius: 4px;
        max-width: 860px;
        background: #fff;
        .form{
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          .search_panel{
            height: 50px;
            width: 80%;
            border: none;
            border-right: 1px solid $lightgray;
            margin-left: 27px;
            font-family: 'Circe Bold';
            font-size: 13px;
            color: #7b8085;
            &:hover{
              cursor: text;
            }
          }
          select{
            height: 52px;
            border: none;
            font-family: 'Circe Bold';
            color: #7b8085;
            background: none;
            text-align: right;
            clear: both;
            width: 20%;
            padding: 0 33px 0 20px;
            margin-right: 15px;
            appearance: none;
            position: relative;
            z-index: 2;
            option{

            }
          }
          &::before{
            content: url('../images/arrow-search.png');
            opacity: .6;
            width: 10px;
            height: 17px;
            position: absolute;
            z-index: 1;
            right: 80px;
          }
          .search_button{
            height: 56px;
            margin: -1px;
            width: 60px;
            background: $orange;
            border: none;
            color: #fff;
            &:hover{
              cursor: pointer;
            }
          }
        }
        &.none{
          display: none;
        }
      }
    }
    #top_fixed{
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: #fff;
      z-index: 10;
      display: none;
      -webkit-box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.75);
      -moz-box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.75);
      box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.75);
      &.flex{
        display: flex;
      }
      #navbar_fixed{
        @include innerbox(0, 0);
        width: 100%;
        margin-top: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .burger2{
          display: flex;
          align-items: center;
          width: 62px;
          height: 110px;
          border-right: 1px solid #f0f2f7;
          #burger2{
            background-image: url('../images/burger.png');
            width: 20px;
            height: 14px;
          }
        }
        .logo{
          a{
            display: inline-block;
            width: 182px;
            height: 48px;
          }
        }
        #search{
          border-radius: 5px;
          width: 50%;
          border: 3px solid $orange;
          border-radius: 4px;
          max-width: 860px;
          background: #fff;
          .form{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            .search_panel{
              height: 50px;
              width: 70%;
              border: none;
              border-right: 1px solid $lightgray;
              margin-left: 27px;
              font-family: 'Circe Bold';
              font-size: 13px;
              color: #7b8085;
              &:hover{
                cursor: text;
              }
            }
            select{
              height: 52px;
              border: none;
              font-family: 'Circe Bold';
              color: #7b8085;
              background: none;
              text-align: right;
              clear: both;
              width: 22%;
              padding: 0 22px;
              margin-right: 15px;
              appearance: none;
              position: relative;
              z-index: 2;
            }
            &::before{
              content: url('../images/arrow-search.png');
              opacity: .6;
              width: 10px;
              height: 17px;
              position: absolute;
              z-index: 1;
              right: 80px;
            }
            .search_button{
              height: 56px;
              margin: -1px;
              width: 60px;
              background: $orange;
              border: none;
              color: #fff;
              &:hover{
                cursor: pointer;
              }
            }
          }
        }
        .menu{
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: 'Circe Bold';
          font-size: 12px;
          #cart2{
            display: flex;
            align-items: center;
            margin-left: 38px;
            #value{
              background: $lightgray;
              border: 1px solid $lightgray;
              border-radius: 50%;
              height: 26px;
              width: 26px;
              padding: 7px 8.5px;
              margin: 0 10px;
            }
            a{
              display: flex;
              align-items: center;
              color: #000;
              img{
                margin-right: 8px;
              }
            }
          }
          #cart2_hide{
            display: none;
          }
          #reg{
            color: $gray;
            display: flex;
            align-items: center;
            width: 82.5px;
            padding: 9.5px 16.5px;
            border: 2px solid $lightgray;
            background: #fff;
            border-radius: 30px;
            position: relative;
            margin: 0 31px;
            font-family: 'Circe Bold';
            font-size: 11px;
            #reg-hover{
              position: absolute;
              top: 32px;
              left: -90px;
              width: 250px;
              height: 100px;
              display: none;
              border-radius: 5px;
              background: #fff;
              border: 1px solid $orange;
              font-size: 14px;
              &:before{
                content: '';
                background: url('../images/arrow-orange.png');
              }
              .button{
                padding: 10px;
                border-radius: 5px;
                background: $orange;
                color: #fff;
              }
            }
            &:hover{
              #reg-hover{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;

              }
            }
            a{
              color: #000;
            }
          }
          a{
            color: #fff;
            display: flex;
            align-items: center;
          }
        }
        .menu{
          #reg{
            color: $gray;
            display: flex;
            align-items: center;
            width: 82.5px;
            padding: 9.5px 16.5px;
            border: 2px solid $lightgray;
            background: #fff;
            border-radius: 30px;
            position: relative;
            margin: 0 31px;
            font-family: 'Circe Bold';
            font-size: 11px;
            #reg-hover{
              position: absolute;
              top: 32px;
              left: -90px;
              width: 250px;
              height: 100px;
              display: none;
              border-radius: 5px;
              background: #fff;
              border: 1px solid $orange;
              font-size: 14px;
              &:before{
                content: '';
                background: url('../images/arrow-orange.png');
              }
              .button{
                padding: 10px;
                border-radius: 5px;
                background: $orange;
                color: #fff;
              }
            }
            &:hover{
              #reg-hover{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;

              }
            }
          }
          #sign{
            color: $gray;
            display: flex;
            align-items: center;
            width: 55px;
          }
          #cartview{
            width: 300px;
            max-height: 420px;
            padding: 20px 20px 0 20px;
            background: #fff;
            border: 1px solid $orange;
            border-radius: 3px;
            position: fixed;
            top: 105px;
            z-index: 14;
            font-family: 'Circe Regular';
            overflow-y: none;
            display: none;
            &.scroll{
              overflow-y: scroll;
            }
            p{
              display: flex;
              justify-content: space-between;
              font-family: 'Circe Bold';
            }
            .item{
              display: flex;
              margin-bottom: 10px;
              #delete{
                position: absolute;
                left: 15px;
                background: #fff;
                color: $gray;
                border: none;
                border-radius: 50%;
                padding: 3px 6px;
              }
              .description{
                margin-left: 10px;
                h2{
                  margin-bottom: 10px;
                }
              }
            }
            .buttons{
              display: flex;
              justify-content: space-between;
              text-transform: uppercase;
              font-family: 'Circe Bold';
              margin-top: 10px;
              #viewcart{
                background: $orange;
                color: #fff;
                border-radius: 3px;
                padding: 15px 20px;
                margin-bottom: 10px;
              }
              #checkout{
                padding: 13.6px 19px;
                color: $orange;
              }
            }
            &.open{
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }
          }
        }
      }
    }
    @include b(1440px, max-width){
      #top{
        #navbar{
          .burger1{
            justify-content: center;
          }
        }
      }
    }
    @include b(1300px, max-width){
      #top_fixed{
        #navbar_fixed{
          #search{
            .form{
              select{
                width: 27%;
              }
              &::before{
                right: 72px;
              }
            }
          }
        }
      }
    }
    @include b(1200px, max-width){
      #top{
        #navbar{
          .logo{
            margin: 0 15px;
          }
          .menu{
            #cart1{
              margin-left: 15px;
            }
            #reg{
              margin: 0 15px;
            }
          }
        }
      }
      #top_fixed{
        #navbar_fixed{
          .burger2{
            display: flex;
            justify-content: center;
          }
          .logo{
            margin-left: 10px;
            a{
              img{
                width: 90%;
              }
            }
          }
          .menu{
            #cart2{
              margin-left: 10px;
            }
            #reg{
              margin: 0 15px;
            }
          }
        }
      }
    }
    @include b(992px, max-width){
      #top{
        #navbar{
          .menu{
            margin-top: 35px;
            #cart1{
              margin-left: 10px;
            }
            #reg{
              margin: 0;
            }
            #cartview{
              right: 0;
              max-height: 240px;
            }
          }
          .languages{
            position: absolute;
            right: 3px;
            top: 30px;
            height: 20px;
          }
        }
      }
      #top_fixed{
        #navbar_fixed{
          #search{
            .form{
              select{
                width: 35%;
                margin-right: 0;
                padding: 0 15px;
              }
              &::before{
                display: none;
              }
            }
          }
        }
      }
    }
    @include b(768px, max-width) {
      #top{
        #navbar{
          display: flex;
          justify-content: space-between;
          align-items: center;
          .burger1{
            height: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .logo{
            margin: 0 5px;
          }
          .menu{
            margin: 0;
            #cartview{
              top: 70px;
            }
          }
          .languages{
            position: static;
            a{
              margin: 1px;
              p{
                display: none;
              }
            }
          }
          .reclame{
            display: none;
          }
        }
      }
      .search-block{
        #search{
          margin: 25px 60px;
          .form{
            height: 40px;
            .search_panel{
              height: 38px;
            }
            select{
              height: 40px;
              width: 25%;
              padding: 0 15px 0 15px;
              background: #fff;
            }
            .search_button{
              height: 42px;
            }
            &::before{
              z-index: 3;
              right: 61px;
            }
          }
        }
      }
      #top_fixed{
        height: 70px;
        #navbar_fixed{
          height: 70px;
          .burger2{
            height: 70px;
          }
          .logo{
            margin-left: 5px;
            margin-right: -5px;
            display: none;
          }
          #search{
            height: 45px;
            .form{
              height: 40px;
              margin: auto;
              .search_panel{
                height: 30px;
              }
              select{
                height: 38px;
                background: #fff;
              }
              .search_button{
                height: 40px;
                width: 40px;
              }
            }
          }
          .menu{
            display: flex;
            #cart2{
              display: none;
            }
            #cart2_hide{
              display: flex;
              align-items: center;
              .fa-shopping-cart{
                margin-right: 10px;
                font-size: 22px;
              }
              #value_hide{
                background: $lightgray;
                border: 1px solid $lightgray;
                border-radius: 50%;
                height: 26px;
                width: 26px;
                padding: 7px 8.5px;
                margin: 0 10px;
              }
              a{
                display: flex;
                align-items: center;
                color: #000;
                img{
                  margin-right: 8px;
                }
              }
            }
            #reg{
              color: $gray;
              display: flex;
              align-items: center;
              width: 82.5px;
              padding: 9.5px 16.5px;
              border: 2px solid $lightgray;
              background: #fff;
              border-radius: 30px;
              position: relative;
              margin: 0 5px;
              font-family: 'Circe Bold';
              font-size: 11px;
            }
          }
        }
      }
    }
    @include b(540px, max-width) {
      #top{
        #navbar{
          .languages{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            a{
              margin: 4px;
            }
          }
          .menu{
            display: flex;
            flex-direction: column-reverse;
            justify-content: space-around;
            height: 100%;
            #cart1{
              margin-top: 5px;
            }
          }
        }
      }
      .search-block{
        #search{
          margin: 20px 5px;
          .form{
            select{
              width: 35%;
            }
            &::before{
              right: 52px;
            }
          }
        }
      }
      #top_fixed{
        box-shadow: none;
        #navbar_fixed{
          #search{
            @include span(14);
            width: 100%;
            position: absolute;
            top: 65px;
            border: 1px solid #ececec;
            border-radius: 0;
            height: 42px;
            -webkit-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.35);
            -moz-box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.35);
            box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.35);
            .form{
              border-radius: 0;
              width: 100%;
              .search_button{
                background: #ececec;
              }
            }
          }
        }
        &::after{
          display: none;
        }
      }
    }
  }
</style>
