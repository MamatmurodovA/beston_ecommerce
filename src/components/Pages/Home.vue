<template>
  <div>
    <SectionTop></SectionTop>
    <section id="main">
      <div id="content">
        <div id="center">
          <section id="toprod">
            <h2 class="block-title">Top products</h2>
            <div class="block-content">
              <div class="swiper-container top-products-container">
                <div class="swiper-wrapper top-products-wrapper">
                  <swiper :options="top_products_slider_config">
                    <swiper-slide v-for="(top_product, index) in top_products" :key="index" >
                      <TopProductItem :product="top_product"></TopProductItem>
                    </swiper-slide>
                  </swiper>
                </div>
                <div class="swiper-button top-products-controls">
                  <div class="swiper-button-next top-products-controls-next"></div>
                  <div class="swiper-button-prev top-products-controls-prev"></div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div id="right">
          <section id="new-prod">
            <h2 class="block-title">New product</h2>
            <div class="block-content">
              <SmallProductItem v-for="(product, index) in new_products" :key="index" :product="product"></SmallProductItem>
            </div>
          </section>
          <section id="recent-prod">
            <h2 class="block-title">Recently viewed items</h2>
            <div class="block-content">
              <SmallProductItem v-for="(product, index) in recently_viewed_products" :key="index" :product="product"></SmallProductItem>
            </div>
          </section>
        </div>
      </div>
      <div id="major"><a href="#"><img src="/static/images/major.png"></a></div>
    </section>
    <Underground></Underground>
    <SectionBottom></SectionBottom>
  </div>
</template>

<script>
  import SectionTop from '../Parts/SectionTop'
  import Underground from '../Parts/Underground'
  import SectionBottom from '../Parts/SectionBottom'
  import SmallProductItem from '../Items/SmallProductItem'
  import TopProductItem from '../Items/TopProductItem'
  import API_ROOT from '../../config'

  export default {
    name: 'Home',
    data(){
      return {
        top_products: [],
        recently_viewed_products: [],
        new_products: [],
        products: [],
        top_products_slider_config: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 30,
          navigation: {
            nextEl:  '.top-products-controls-next',
            prevEl: '.top-products-controls-prev'
          }
        },
      }
    },
    components: {
      TopProductItem,
      SectionTop,
      SectionBottom,
      Underground,
      SmallProductItem
    },
    methods: {
      getTopProducts()
      {
        let top_products_url = API_ROOT + '/products/?top_rated=2'
        fetch(top_products_url, {
          method: 'GET'
        })
          .then(response => response.json())
          .then(json => this.top_products = json.results)
      },
      getRecentlyViewedProducts(){
        let recently_viewed_products_url = API_ROOT + '/products/?featured=2'
        fetch(recently_viewed_products_url, {
          method: 'GET'
        })
          .then(response => response.json())
          .then(json => this.recently_viewed_products = json.results)
      },
      getNewProducts(){
        let new_products_url = API_ROOT + '/products/?new=2'
        fetch(new_products_url, {
          method: 'GET'
        })
          .then(response => response.json())
          .then(json => this.new_products = json.results)
      },
    },
    created(){
      this.getTopProducts()
      this.getRecentlyViewedProducts()
      this.getNewProducts()
    }
  }
</script>

<style lang="scss">
  @import "~susy";
  @import "~breakpoint-sass/stylesheets/breakpoint";
  #main {
    border-top: 1px solid #ececec;
    border-bottom: 1px solid #ececec;
    padding-top: 43px;
    margin-top: 42px;
    font-family: 'Circe Regular';
    #content {
      @include innerbox(0, 0);
      #center {
        @include span(11);
        #toprod {
          overflow: hidden;
          padding-left: 5px;
          .block-title {
            font-size: 25px;
            color: #222222;
            text-transform: uppercase;
            margin-bottom: 24px;
          }
          .block-content {
            font-size: 0;
            .swiper-container{
              overflow: visible;
              .swiper-wrapper {
                .swiper-slide {
                  height: 378px;
                  max-width: 268px;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  vertical-align: top;
                  box-sizing: border-box;
                  background: #fff;
                  margin-bottom: 30px;
                  border-radius: 5px;
                  text-align: center;
                  .image{
                    width: 100%;
                    height: 223px;
                    overflow: hidden;
                    img {
                      width: 100%;
                      height: 224px;
                      border-radius: 5px 5px 0 0;
                    }
                  }
                  .cart {
                    display: none;
                    background: none;
                    a{
                      width: 33.3%;
                      height: 40px;
                      color: #000;
                      i{
                        margin-top: 10px;
                        font-size: 12px;
                        &:hover{
                          cursor: pointer;
                        }
                      }
                      &:hover{
                        background: $orange;
                        color: #fff;
                      }
                      &:nth-child(2){
                        border-left: 1px solid #eeeeee;
                        border-right: 1px solid #eeeeee;
                      }
                    }
                  }
                  .title {
                    font-size: 15px;
                    color: #444444;
                    margin-top: 35px;
                    margin-bottom: 15px;
                    line-height: 1.3;
                    width: 200px;
                    height: 58px;
                    text-align: center;
                    overflow: hidden;
                  }
                  .price {
                    color: #000;
                    font-size: 15px;
                    width: 222px;
                    text-align: center;
                  }
                  &:hover{
                    -webkit-box-shadow: 0px 1px 8px 0px rgba(0,0,0,0.3);
                    -moz-box-shadow: 0px 1px 8px 0px rgba(0,0,0,0.3);
                    box-shadow: 0px 1px 8px 0px rgba(0,0,0,0.3);
                    transition: .1s;
                    .title {
                      margin-top: 15px;
                    }
                    .price{
                      margin-bottom: 10px;
                    }
                    .cart{
                      display: flex;
                      width: 100%;
                      border-bottom: 1px solid #eeeeee;
                      &:hover{
                      }
                    }
                  }
                }
              }
              .swiper-button{
                position: absolute;
                top: -47px;
                right: 40px;
                .swiper-button-next, .swiper-button-prev{
                  margin: 0 3px;
                  border: 1px solid #ddd;
                  border-radius: 2px;
                  background: none;
                  width: 26px;
                  height: 26px;
                  font-size: 10px;
                  font-family: 'FontAwesome';
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  .fa-angle-left:hover,
                  .fa-angle-right:hover{
                    cursor: pointer;
                  }
                  span{
                    color: #555;
                  }
                  &:hover{
                    border: 1px solid $orange;
                    background: $orange;
                    color: #fff;
                    span{
                      color: #fff;
                    }
                  }
                }
                .swiper-button-prev{
                  left: -25px;
                  &::before{
                    content: '\f053';
                  }
                }
                .swiper-button-next{
                  right: -40px;
                  &::before{
                    content: '\f054';
                  }
                }
              }
            }
          }
        }
      }
      #right {
        @include span(3 last);
        width: 265px;
        #new-prod,
        #recent-prod {
          .block-title {
            color: #222;
            padding-top: 5px;
            text-transform: uppercase;
            margin-bottom: 25px;
            font-size: 20px;
          }
          .block-content {
            background: #fff;
            padding: 0 15px;
            border-radius: 5px 5px 0 0;
            height: 86%;
            overflow-y: scroll;
            margin-bottom: 15px;
            &::-webkit-scrollbar {
              width: 4px;
            }
            &::-webkit-scrollbar-track {
              -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            }
            &::-webkit-scrollbar-thumb {
              background-color: darkgrey;
              outline: 1px solid slategrey;
            }
            .item {
              padding: 20px 0;
              border-bottom: 1px solid #eeeeee;
              @include clearfix;
              .cart{
                display: none;
              }
            }
            .image {
              float: left;
            }
            .title {
              float: right;
              font-size: 15px;
              color: #222;
              width: calc(100% - 65px);
              margin-left: 10px;
              height: 28px;
              overflow: hidden;
            }
            .price {
              float: right;
              margin-top: 10px;
              color: #000;
              font-size: 13px;
              width: calc(100% - 65px);
              margin-left: 10px;
            }
            img {
              width: 55px;
              height: 55px;
            }
          }
        }
        #new-prod{
          height: 410px;
          overflow-y: hidden;
        }
        #recent-prod{
          height: 385px;
          margin-top: 40px;
          overflow-y: hidden;
          margin-bottom: 37px;
        }
      }
    }
    #major {
      @include innerbox(0, 0);
      margin-bottom: 40px;
      margin-top: 10px;
      img {
        width: 100%;
        height: auto;
      }
    }
    @include b(1325px, max-width){
      #content{
        #center{
          @include span(14);
          .swiper-button{
            display: none;
          }
        }
        #right{
          @include span(14);
          width: 100%;
          #new-prod, #recent-prod{
            height: auto;
            padding-left: 5px;
            .block-content{
              display: flex;
              margin-bottom: 0;
              padding: 0;
              &::-webkit-scrollbar {
                display: none;
              }
              .item {
                height: 378px;
                min-width: 270px;
                display: flex;
                flex-direction: column;
                align-items: center;
                vertical-align: top;
                box-sizing: border-box;
                background: #fff;
                margin-bottom: 5px;
                margin-right: 20px;
                margin-left: 0;
                border-radius: 5px;
                text-align: center;
                padding: 0;
                border-bottom: 0;
                .image{
                  width: 100%;
                  height: 223px;
                  overflow: hidden;
                  img {
                    width: 100%;
                    height: 224px;
                    border-radius: 5px 5px 0 0;
                  }
                }
                .cart {
                  display: none;
                  background: none;
                  a{
                    width: 33.3%;
                    height: 40px;
                    color: #000;
                    i{
                      margin-top: 10px;
                      font-size: 12px;
                      &:hover{
                        cursor: pointer;
                      }
                    }
                    &:hover{
                      background: $orange;
                      color: #fff;
                    }
                    &:nth-child(2){
                      border-left: 1px solid #eeeeee;
                      border-right: 1px solid #eeeeee;
                    }
                  }
                }
                .title {
                  font-size: 15px;
                  color: #444444;
                  margin-top: 35px;
                  margin-bottom: 15px;
                  margin-left: 0;
                  line-height: 1.3;
                  width: 200px;
                  height: 58px;
                  text-align: center;
                  overflow: hidden;
                }
                .price {
                  color: #000;
                  font-size: 15px;
                  width: 222px;
                  text-align: center;
                  margin-left: 0;
                  margin-top: 0;
                }
                &:last-child{
                  margin-right: 0;
                }
                &:hover{
                  -webkit-box-shadow: 0px 1px 8px 0px rgba(0,0,0,0.3);
                  -moz-box-shadow: 0px 1px 8px 0px rgba(0,0,0,0.3);
                  box-shadow: 0px 1px 8px 0px rgba(0,0,0,0.3);
                  transition: .1s;
                  .title {
                    margin-top: 15px;
                  }
                  .price{
                    margin-bottom: 10px;
                  }
                  .cart{
                    display: flex;
                    width: 100%;
                    border-bottom: 1px solid #eeeeee;
                    &:hover{
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    @include b(992px, max-width){
      padding-top: 25px;
      margin-top: 20px;
      #content{
        #right{
          #recent-prod{
            margin-top: 25px;
          }
        }
      }
      #major{
        display: none;
      }
    }
  }
</style>
