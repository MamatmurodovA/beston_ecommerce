<template>
  <section id="section-top" :class="{scrolled: scrolled}">
    <div class="product-categories">
      <section id="category">
        <h2 class="block-title">Product categories</h2>
        <div class="menu">
          <a href="#" id="category_button">
            <i class="fa fa-plus-circle" aria-hidden="true"></i>
            <i class="fa fa-minus-circle" aria-hidden="true"></i>
          </a>
          <ul id="category_menu">
            <li class="category_list" v-for="category in categories">
                <template v-if="category.children">
                    <router-link :to="{name: 'product_category_page', params: {category_slug: category.slug}}">
                      {{ category.title }}
                    </router-link>
                    <ul class="sub_menu">
                      <li class="sub_list" v-for="child_cat in category.children">
                          <router-link :to="{name: 'product_category_page', params: {category_slug: child_cat.slug}}">
                            {{ child_cat.title }}
                          </router-link>
                      </li>
                    </ul>
                </template>
                <template v-else>
                  <router-link :to="{name: 'product_category_page', params: {category_slug: category.slug}}">
                    {{ category.title }}
                  </router-link>
                </template>
            </li>
          </ul>
        </div>
      </section>
    </div>
    <div class="main">
      <swiper :options="banner_slider_config">
        <swiper-slide v-for="(image, key) in banner_images" :key="key">
            <div class="item">
              <img :src="image">
            </div>
        </swiper-slide>
        <div class="swiper-pagination banner-slider-pagination" slot="pagination"></div>
        <div class="swiper-button-prev banner-slider-prev" slot="button-prev"></div>
        <div class="swiper-button-next banner-slider-next" slot="button-next"></div>
      </swiper>
      <div class="aside">
        <div class="item">
          <div class="offer">
            <h2>Big Offer Day</h2>
            <a href="" class="button">Extra 25% Off</a>
            <p>At $350,000</p>
          </div>
        </div>
        <div class="item">
          <div class="offer">
            <h2>BFX-400</h2>
            <p>UPTO 30% FLAT OFFER!</p>
            <a href="" class="button">Special Offer!</a>
          </div>
        </div>
        <div class="item">
          <div class="offer">
            <h2>MKKJ-9S-2</h2>
            <h3>Oneday sale</h3>
            <p>New Arrivals</p>
            <a href="" class="button">Only $50,000</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import * as config from '../../config'
  export default {
    name: 'SectionTop',
    data(){
      return {
          banner_images: [
            "/static/images/slider-image.png",
            "/static/images/slider-image.png",
            "/static/images/slider-image.png",
            "/static/images/slider-image.png"
          ],
          banner_slider_config: {
            spaceBetween: 0,
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            },
            navigation: {
              nextEl: '.banner-slider-next',
              prevEl: '.banner-slider-prev'
            }
          },
          categories: []
      }
    },
    methods: {
      getCategories()
      {
        let category_url = config.API_ROOT + '/categories/'
        axios.get(category_url)
          .then(json => {
            this.categories = json.data.results
            console.log(json)
          })
      }
    },
    created()
    {
      this.getCategories()
    },
    computed: {
      scrolled() {
        return this.$store.getters.scrolled
      }
    }
  }
</script>

<style lang="scss">
  $color-accent: #ff6a00;

  @import "~susy";
  @import "~breakpoint-sass/stylesheets/breakpoint";
  #section-top{
    &.scrolled{
      /*margin-top: 100px;*/
    }
    @include innerbox(0, 0);
    .product-categories{
      @include span(3);
      max-width: 268px;
      font-family: 'Circe Regular';
      font-size: 12px;
      margin-right: 29px;
      #category{
        .block-title {
          height: 53px;
          font-size: 14px;
          color: #fff;
          text-transform: uppercase;
          padding: 18px;
          background: $orange;
          border-radius: 5px 5px 0 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          img{
            height: 12px;
          }
        }
        .menu{
          #category_button{
            display: none;
          }
          #category_menu{
            background: #f8f8f8;
            position: relative;
            .category_list{
              height: 52px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              border-bottom: 1px solid #f0f2f7;
              border-right: 1px solid #f0f2f7;
              border-left: 1px solid #f0f2f7;
              a {
                color: #222;
                font-size: 14px;
                display: flex;
                align-items: center;
                height: 100%;
                width: 100%;
                padding-left: 18px;
                margin-right: 10px;
                background: url("/static/images/arrow.png") no-repeat right center;
              }
              .sub_menu{
                display: none;
              }
              &:hover{
                &::after{
                  content: '';
                  width: 10px;
                  height: inherit;
                  position: absolute;
                  right: -2px;
                  background: #eee;
                  z-index: 6;
                }
                cursor: pointer;
                border-right: none;
                -webkit-box-shadow: 0px 0 5px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: 0px 0 5px 0px rgba(0,0,0,0.75);
                box-shadow: 0px 0 5px 0px rgba(0,0,0,0.75);
                transition: .2s;
                background: #eee;
                a{
                  color: $orange;
                  transition: .2s;
                }
                i{
                  color: $orange;
                  cursor: pointer;
                }
                .sub_menu{
                  display: block;
                  z-index: 5;
                  position: absolute;
                  border: 1px solid #eee;
                  background: #eee;
                  top: 0;
                  bottom: 0;
                  right: -329px;
                  height: auto;
                  width: 329px;
                  padding: 20px;
                  border-left: none;
                  -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,.75);
                  box-shadow: 0px 0px 5px 0px rgba(0,0,0,.75);
                  -webkit-transition: .2s;
                  -o-transition: .2s;
                  -moz-transition: .2s;
                  transition: .2s;
                  .sub_list{
                    a{
                      color: #222;
                      font-size: 15px;
                      margin-bottom: 10px;
                      &:hover{
                        color: $orange;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    .main{
      display: flex;
      flex-direction: column;
      .swiper-pagination-bullet{
        border: 2px solid #FFFFFF;
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.4);
      }
      .swiper-pagination-bullet-active{
        background: $color-accent;
        border: none;
      }
      .owl-carousel{
        .owl-stage-outer{
          max-width: 1170px;
          max-height: 425px;
          margin-left: 30px;
          margin-bottom: 30px;
        }
        .owl-dots{
          display: flex;
          justify-content: space-around;
          margin: auto;
          position: absolute;
          width: 57px;
          height: 10px;
          right: 0;
          left: 0;
          bottom: 50px;
          .owl-dot{
            width: 7.5px;
            height: 7.5px;
            border: 2px solid #fff;
            border-radius: 50%;
            background: none;
            &.active{
              background: $orange;
              border: 1px solid $orange;
            }
          }
        }
      }
      .aside{
        display: flex;
        justify-content: space-around;
        text-transform: uppercase;
        &::-webkit-scrollbar {
          display: none;
        }
        .item{
          width: 28vw;
          height: 169px;
          font-family: 'Circe Regular';

        }
        .item:nth-child(1){
          background: url('/static/images/offer1.png');
          background-repeat: no-repeat;
          .offer{
            width: 200px;
            height: 100px;
            background-color: rgba(0, 0, 0, .6);
            margin-top: 35px;
            color: #fff;
            text-align: center;
            .button{
              display: inline-block;
              background: $orange;
              padding: 5px 27px;
              margin: 10px;
              color: #fff;
              border-radius: 3px;
            }
            h2{
              display: inline-block;
              margin-top: 10px;
              font-size: 21px;
            }
            p{
              font-size: 17px;
              text-transform: capitalize;
            }
          }
        }
        .item:nth-child(2){
          background: url('/static/images/offer2.png');
          background-repeat: no-repeat;
          margin: 0 29px;
          .offer{
            width: 215px;
            height: 130px;
            background-color: rgba(255, 255, 255, .7);
            margin-top: 20px;
            margin-left: 20px;
            padding-left: 20px;
            .button{
              display: inline-block;
              background: $orange;
              padding: 12px 15px;
              margin-top: 10px;
              color: #fff;
              border-radius: 3px;
              text-transform: capitalize;
            }
            h2{
              display: inline-block;
              margin: 20px 0 10px;
              font-size: 22px;
            }
            p{
              font-size: 16px;
              color: #555555;
            }
          }
        }
        .item:nth-child(3){
          background: url('/static/images/offer3.png');
          background-repeat: no-repeat;
          .offer{
            width: 150px;
            background: none;
            margin-top: 30px;
            margin-left: 50%;
            color: #fff;
            line-height: 25px;
            .button{
              display: inline-block;
              background: $orange;
              padding: 5px 10px;
              margin-top: 10px;
              color: #fff;
              border-radius: 3px;
              text-transform: uppercase;
            }
            h2{
              display: inline-block;
              font-size: 24px;
            }
            h3{
              font-size: 22px;
            }
            p{
              font-size: 14px;
            }
          }
        }
      }
    }
    @include b(1300px, max-width){
      .main{
        .aside{
          .item{
            &:nth-child(3){
              .offer{
                width: 130px;
                margin-left: 45%;
              }
            }
            .offer{
              h2{
                font-size: 18px !important;
              }
              h3{
                font-size: 18px !important;
              }
              p{
                font-size: 12px !important;
              }
            }
          }
        }
      }
    }
    @include b(992px, max-width){
      display: flex;
      flex-direction: column;
      .product-categories{
        display: none;
      }
      .main{
        position: relative;
        z-index: 5;
        background: #fff;
        align-items: center;
        .owl-carousel{
          @include span(13.8);
          margin: 0 0 20px;
          align-self: center;
          .owl-stage-outer{
            margin: 0;
          }
        }
        .aside{
          @include span(13.8);
          margin: 0;
          overflow-x: scroll;
          display: flex;
          justify-content: space-between;
          .item{
            min-width: 370px;
            margin: 0 10px;
            &:nth-child(1){
              margin-left: 0;
            }
            &:nth-child(2){
              margin: 0 10px;
            }
            &:nth-child(3){
              .offer{
                margin-left: 50%;
              }
            }
            &:last-child{
              margin-right: 0;
            }
          }
        }
      }
    }
    @include b(768px, max-width){
      .main{
        .owl-carousel{
          .owl-dots{
            bottom: 10px;
            .owl-dot{
              border: 2px solid #fff;
            }
          }
        }
      }
    }
    @include b(540px, max-width){
      .main{
        display: flex;
        flex-direction: column;
        .owl-carousel{
          .owl-dots{
            bottom: 5px;
          }
        }
        .aside{
          .item{
            min-width: 310px;
          }
        }
      }
    }
  }
</style>
