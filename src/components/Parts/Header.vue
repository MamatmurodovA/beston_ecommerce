<template>
  <div>
    <div id="header" :class="{'fixed': scrolled}">
      <div id="top">
        <div id="navbar">
          <div class="burger1">
            <span id="burger1" class="left_menu_open" @click="left_menu_is_open=true"></span>
          </div>
          <div class="logo">
            <router-link :to="{name: 'home_page'}">
              <img src="/static/images/logo-top.png">
            </router-link>
          </div>
          <div class="column">
            <div class="reclame">
              <img src="/static/images/reclame.png">
            </div>
            <div class="search-block">
              <Search :categories="categories"></Search>
            </div>
          </div>

          <Cart></Cart>
          <div class="languages">
            <a href=""><p>Uz</p><img src="/static/images/uz.png" alt=""></a>
            <a href=""><p>Ru</p><img src="/static/images/ru.png" alt=""></a>
            <a href="" class="active"><p>En</p><img src="/static/images/en.png" alt=""></a>
          </div>
        </div>
      </div>


      <!--<div id="top_fixed" :class="{'flex': scrolled}">-->
        <!--<div id="navbar_fixed">-->
          <!--<div class="burger2">-->
            <!--<span id="burger2" @click="left_menu_is_open=true"></span>-->
          <!--</div>-->
          <!--<div class="logo"><a href=""><img src="/static/images/logo-top.png"></a></div>-->
          <!--<Search :categories="categories"></Search>-->
          <!--<Cart></Cart>-->
        <!--</div>-->
      <!--</div>-->
    </div>

    <nav id="nav" :class="{'fixed': scrolled}">
      <div id="menu1">
        <ul class="menu_horizontal">
          <li><a href="" class="active">home</a></li>
          <li><a href="">about us</a></li>
          <li><a href="">news</a></li>
          <li><a href="">sertificates</a></li>
          <li><a href="">contact us</a></li>
        </ul>
      </div>
      <div id="menu2" class="hide" :class="{'open':left_menu_is_open}">
        <nav>
          <ul class="nav">
            <li><a href="#">home</a></li>
            <li><a href="#">about us</a></li>
            <li><a href="#">news</a></li>
            <li><a href="#">sertificates</a></li>
            <li><a href="#">contact us</a></li>
            <li class="category">Categories</li>
            <li v-for="category in categories">
              <template v-if="category.children">
                <a class="collapse" @click="open_children($event)">
                  {{ category.title }}
                  <p></p>
                </a>
                <ul class="nav collapse" >
                  <li v-for="child_cat in category.children">
                    <a href="#">
                      {{ child_cat.title }}
                    </a>
                  </li>
                </ul>
              </template>
              <template v-else>
                <a href="">
                  {{ category.title }}
                </a>
              </template>
            </li>
          </ul>
        </nav>
        <a href="#" id="menuclosed" @click="left_menu_is_open=false">
          <i class="fa fa-times fa-2x" aria-hidden="true"></i>
        </a>
      </div>
      <div id="overlay" :class="{'open': left_menu_is_open}" @click="left_menu_is_open=false"></div>
    </nav>
  </div>
</template>

<script>
  import categories from '../../data/category.json'
  import Search from './Search'
  import Cart from './Cart'
  export default {
    name: 'Header',
    components: {Search, Cart},
    data(){
      return {
        left_menu_is_open: false,
        categories: categories,
        scrolled: false
      }
    },
    methods: {
      open_children(e)
      {
        let el = e.target;
        el.classList.toggle('active')
        el.nextElementSibling.classList.toggle('in')
      },

      handleScroll(event)
      {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        this.scrolled = scrollTop > 105;
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    },
  }
</script>

<style lang="scss">
  @import "~susy";
  @import "~breakpoint-sass/stylesheets/breakpoint";
  #header{
    #top{
      @include innerbox(0, 0);
      width: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
      #navbar{
        display: flex;
        align-items: start;
        .burger1{
          display: flex;
          align-items: center;
          width: 62px;
          height: 110px;
          border-right: 1px solid #f0f2f7;
          #burger1{
            background-image: url('/static/images/burger.png');
            width: 20px;
            height: 14px;
          }
        }
        .logo{
          display: flex;
          align-items: center;
          margin: 0 33px;
          height: 110px;
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
          height: 110px;
          #cart1, #cart2{
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
          height: 110px;
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
            content: url('/static/images/arrow-search.png');
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
            background-image: url('/static/images/burger.png');
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
              content: url('/static/images/arrow-search.png');
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
                background: url('/static/images/arrow-orange.png');
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
                background: url('/src/assets/images/arrow-orange.png');
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

  #header.fixed{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background-color: #FFFFFF;
    z-index: 99;
    #top{
      #navbar{
        justify-content: space-between;
        .reclame{
          display: none;
        }
      }
    }
    .search-block{
      width: 600px;
      border: none;
      display: flex;
      align-items: center;
      height: 110px;
      #search{
        margin: 0;
      }
    }

  }
  #nav{
    font-family: 'Circe Bold';
    font-size: 14px;
    padding: 25px 0;
    display: block;
    #menu1{
      @include innerbox(0, 0);
      text-transform: uppercase;
      .menu_horizontal{
        display: flex;
      }
      li{
        margin-right: 35px;
        a{
          color: $gray;
          &.active{
            color: $orange;
          }
          &:hover{
            color: $orange;
            transition: .4s;
          }
        }
      }
    }
    #menu2{
      text-transform: uppercase;
      display: block !important;
      position: fixed;
      left: -1500px;
      right: 0;
      top: 0;
      bottom: 0;
      width: 30%;
      background: #fff;
      color: $orange;
      border: 1px solid $lightgray;
      z-index: 20;
      transition: .5s;
      -webkit-box-shadow: 2px 0px 20px 1px rgba(0,0,0,.5);
      -moz-box-shadow: 2px 0px 20px 1px rgba(0,0,0,.5);
      box-shadow: 2px 0px 20px 1px rgba(0,0,0,.5);
      overflow-y: scroll;
      nav{
        .nav{
          li{
            font-size: 16px;
            border-bottom: 1px solid $lightgray;
            a{
              position: relative;
              display: block;
              color: $gray;
              padding: 25px;
              &.active{
                color: $orange;
              }
              &:hover{
                color: $orange;
                transition: .4s;
              }
              &.collapse{
                display: flex;
                justify-content: space-between;
                align-items: center;
                &::after{
                  font-family: 'FontAwesome';
                  content: '\f054';
                }
               &.active{
                 &::after{
                   font-family: 'FontAwesome';
                   content: '\f078';
                 }
               }
              }
              &.collapsed{
                &::after{
                  font-family: 'FontAwesome';
                  content: '\f078';
                }
              }
            }
            .collapse.in{
              display: block ;
              li{
                a{
                  margin-left: 30px;
                  background: none;
                  transition: .3s;
                }
              }
            }
            .collapse{
              display: none;
            }
          }
          .category{
            color: #fff;
            background: $orange;
            padding: 25px;
            text-align: center;
          }
        }
      }
      &.open{
        position: fixed;
        left: 0;
        transition: .5s;
        z-index: 25;
        #menuclosed{
          display: block;
          position: absolute;
          top: 5px;
          right: 10px;
          i{
            &:hover{
              cursor: pointer;
            }
          }
          &:hover{
            color: $orange;
          }
        }
      }
    }
    #overlay{
      z-index: 19;
      background: rgba(0,0,0,.5);
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: none;
      &.open{
        display: block;
      }
    }
    @include b(992px, max-width){
      #menu1{
        display: flex;
        justify-content: center;
      }
      #menu2{
        &.hide{
          width: 50%;
          font-size: 10px;
          &.open{
            li{
              font-size: 15px;
            }
          }
        }
      }
    }
    @include b(768px, max-width){
      padding: 0;
      #menu1{
        display: none;
      }
      #menu2{
        &.hide{
          width: 100%;
        }
        #menuclosed{
          font-size: 13px;
          width: 30px;
          height: 50px;
          text-align: center;
        }
      }
    }
    @include b(540px, max-width){
      #menu2{
        #menuclosed{
          font-size: 16px;
        }
      }
    }
  }
</style>
