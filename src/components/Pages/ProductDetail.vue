<template>
  <div>
    <Breadcrumb :params="[root_category, product]"></Breadcrumb>
    <section class="product-section">
      <div class="wrapper">
        <main class="main">
          <div class="main-product-section">
            <div class="product-image">
              <div id="main-product-image">
                <div class="" :style="{backgroundImage: 'url(' + current_image + ')'}"></div>
              </div>
              <div id="thumbnails-images">
                  <div class="thumbnails-wrapper" >
                      <carousel :perPage="6" :navigationEnabled="true"  :mouse-drag="false">
                          <slide v-for="(item, index) in product.images" class="product-image-item" :key="index" :class="{active: item===current_image}">
                              <img :src="item" @click="setActiveImage(item)" />
                          </slide>
                      </carousel>
                  </div>
              </div>
            </div>
            <div class="product-description">
              <div class="description_top">
                <p id="product_title">{{ product.title }}</p>
                <p id="transportation_price">FOB <span>Reference</span> Price:<a href="">Get Latest Price</a></p>
                <ProductPriceItem :product="product"></ProductPriceItem>
                <form class="buttons">
                  <button id="add-compare">
                    <input type="checkbox">
                    <p>Add to compare</p>
                  </button>
                  <button id="supplier_mail">Contact supplier</button>
                </form>
              </div>
              <div class="description_bottom">
                <div class="payments">
                  <p>Payment:</p>
                  <div>
                    <span class="payment-item visa"></span>
                    <span class="payment-item mastercard"></span>
                    <span class="payment-item tt"></span>
                    <span class="payment-item e-cheking"></span>
                    <div class="more">
                      <p class="hover">More <i class="fa fa-angle-down" aria-hidden="true"></i></p>
                      <div class="also"><p>This supplier also supports L/C,T/T,Western Union payments for offline orders.</p></div>
                    </div>
                  </div>
                </div>
                <div class="shipping">
                  <p>Shipping:</p>
                  <p>Less than Container Load (LCL) Service to US <a href="">Get shipping quote</a></p>
                </div>
              </div>
              <div class="adds">
                <a href="" class="shop">Add to favorite<i class="fa fa-heart-o"></i></a>
                <a href="" class="cart">Add to cart<i class="fa fa-shopping-cart"></i></a>
              </div>
            </div>
          </div>
          <div class="details-block">
            <h2 class="product-details">Product details</h2>
            <div class="details-description">
              <h2 class="overview">Overview</h2>
              <ul class="details" v-if="product.specifications && product.specifications.length">
                <li class="quick-details">{{ $t('message.quick_details')}}</li>
                <li class="place-of-origin" v-for="specification in product.specifications">
                  {{ specification.title }}:
                  <span>{{ specification.info }}</span>
                </li>
              </ul>
              <ul class="packing-delivery">
                <li class="packing-and-delivery">Packing and delivery</li>
                <ul class="packing-details">
                  <li class="details">Packaging Details:</li>
                  <ul>
                    <li>1) standard exporting kraft carton, 36x23.5x23.5cm, 200pcs, or colourful carton</li>
                    <li>2) round plastic case is acceptable</li>
                    <li>3) 100x6x16 China flexible grinding wheel and grinding disc for stainless steel are sealed by plastic</li>
                    <li>4) all cartons would be wrapped by plastic film and fixed on the pallet.</li>
                  </ul>
                </ul>
                <ul class="delivery-time">
                  <li>Delivery Time:</li><span>Shipped in 30 days after payment</span>
                </ul>
              </ul>
            </div>
          </div>
        </main>
        <aside class="aside">
          <h2 class="title">You May Like</h2>
          <div class="related_items">
            <div class="swiper-container">
              <div class="swiper-wrapper related_products">
                  <TopProductItem :product="product" v-for="(product, index) in $store.getters.top_products" :key="index" class="swiper-slide"></TopProductItem>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>

<script>
  import {Carousel, Slide} from 'vue-carousel'
  import VueHZoom from 'vue-h-zoom';
  import Breadcrumb from '../Parts/Breadcrumb'
  import TopProductItem from '../Items/TopProductItem'
  import ProductPriceItem from '../Items/ProductPriceItem'
  import * as config from '../../config'

  export default {
    name: 'ProductDetail',
    components: {
        TopProductItem,
        Breadcrumb,
        Carousel,
        Slide,
        VueHZoom,
        ProductPriceItem,
    },
    data(){
      return {
        products: [],
        root_category: {},
        param_list: [],
        product: {},
        current_image: ''
      }
    },
    watch: {
      '$route': 'routeChangeHandler',
    },
    methods: {
        routeChangeHandler(){
          this.fetchProduct()
        },
        setActiveImage(image_src){
          this.current_image = image_src;
        },
        fetchProduct(){
          let product_url = config.API_ROOT + '/products/' + this.$route.params.product_slug + '/'
          this.axios.get(product_url)
            .then(json => {
              this.product = json.data
              this.current_image = this.product.main_image
            })

        },
        getRootCategory(){
          let url = config.API_ROOT + '/categories/' + this.$route.params.category_slug + '/root/'

          this.axios.get(url)
            .then(json => {
              this.root_category = json.data
              this.param_list = [json.data]
            })
        },
    },
    created()
    {
      this.fetchProduct()
      this.getRootCategory()
    },
    mounted(){

    }
  }
</script>

<style lang="scss">

  .swiper-slide {
    font-size: 18px!important;
    text-align: left!important;
    height: auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 30px;
  }
  @import "~susy";
  @import "~breakpoint-sass/stylesheets/breakpoint";
  .product-section{
    background: #f2f3f7;
    padding-top: 20px;
    padding-bottom: 40px;
    .wrapper{
      @include innerbox(0, 0);
      .main{
        @include span(11.2);
        display: flex;
        flex-direction: column;
        .main-product-section{
          height: 410px;
          display: flex;
          float: left;
          overflow: hidden;
          .product-image{
            border: 1px solid #ececec;
            background: #fff;
            width: 45%;
            height: 100%;
            padding: 19px;
            min-width: 526px;
            #main-product-image{
              display: flex;
              justify-content: center;
              align-items: center;
              margin-bottom: 10px;
              border: 1px solid #000;
              height: 300px;
              overflow: hidden;
              div{
                width: 100%;
                height: 100%;
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;

              }
              .zoomWrapper{
                width: 480px !important;
                height: 291px !important;
              }
            }
            #other-images{
              height: 70px;
              display: flex;
              align-items: center;
              overflow: hidden;
              border: 1px solid #000;
              #gal1{
                .swiper-slide{
                  max-width: 115px;
                  text-align: center;
                }
              }
            }
          }
          .product-description{
            border: 1px solid #ececec;
            width: 55%;
            height: 100%;
            color: #242424;
            .description_top{
              height: 60%;
              font-size: 20px;
              #product_title{
                padding: 0 18px;
                height: 52px;
                display: flex;
                align-items: center;
                background: #fff;
                font-family: 'Circe Bold';
                font-size: 16px;
              }
              #transportation_price{
                font-family: 'Circe Regular';
                font-size: 16px;
                padding: 0 18px;
                height: 52px;
                display: flex;
                align-items: center;
                span{
                  font-family: 'Circe Bold';
                  margin: 0 5px;
                }
                a{
                  color: $orange;
                  margin-left: 5px;
                }
              }
              #product_price{
                padding: 0 18px;
                height: 56px;
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                background: #fff;
                b{
                  font-size: 20px;
                  font-family: 'Circe Bold';
                }
                span{
                  font-size: 17px;
                  font-family: 'Circe Regular';
                  margin-right: 20px;
                }
              }
              #supplier_ability{
                padding: 0 18px;
                height: 48px;
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                font-size: 16px;
                font-family: 'Circe Regular';
                span{
                  margin-right: 10px;
                }
              }
              .buttons{
                display: flex;
                padding: 0 15px;
                #supplier_mail{
                  text-transform: uppercase;
                  font-size: 13px;
                  width: 210px;
                  border: 1px solid #ececec;
                  border-radius: 5px;
                  margin: 0 5px;
                  padding: 12px;
                  background: #fff;
                }
                #add-compare{
                  background: #fff;
                  text-transform: uppercase;
                  font-size: 13px;
                  width: 210px;
                  border: 1px solid #ececec;
                  border-radius: 5px;
                  padding: 12px;
                  margin: 0;
                  margin-right: 5px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  input{
                    margin: 0 5px;
                  }
                }
              }
            }
            .description_bottom{
              background: #fff;
              margin-top: 23px;
              padding: 0 18px;
              height: 94px;
              display: flex;
              flex-direction: column;
              justify-content: space-evenly;
              .payments{
                font-size: 16px;
                display: flex;
                align-items: center;
                p:nth-child(1){
                  min-width: 100px;
                }
                div{
                  display: flex;
                  align-items: center;
                  .payment-item{
                    display: inline-block;
                    width: 30px;
                    height: 20px;
                    margin-right: 4px;
                    background-image: url("/static/images/payments.png");
                    background-repeat: no-repeat;
                  }
                  .visa{
                    background-position: -45px -231px;
                  }
                  .mastercard{
                    background-position: -231px -45px;
                  }
                  .tt{
                    background-position: -235px -161px;
                  }
                  .e-cheking{
                    width: 62px;
                    background-position: -123px -119px;
                  }
                  .more{
                    margin-left: 5px;
                    position: relative;
                    .also{
                      position: absolute;
                      z-index: -1;
                    }
                    &:hover{
                      .also{
                        z-index: 10;
                        left: 11px;
                        bottom: -43px;
                        &::before, &::after {
                          content: '';
                          position: absolute;
                          left: 20px;
                          top: -52px;
                          border: 10px solid transparent;
                          border-bottom: 10px solid #ececec;
                        }
                        &::after {
                          border-bottom: 10px solid #fff;
                          top: -51px;
                        }
                        p{
                          position: absolute;
                          width: 300px;
                          background: #fff;
                          border: 1px solid #ececec;
                          padding: 10px;
                          font-size: 15px;
                          border-radius: 5px;
                          line-height: 16px;
                        }
                      }
                    }
                  }
                }
              }
              .shipping{
                display: flex;
                font-size: 16px;
                p:nth-child(1){
                  min-width: 100px;
                }
                p{
                  a{
                    color: $orange;
                  }
                }
              }
            }
            .adds{
              display: flex;
              align-items: center;
              justify-content: flex-end;
              font-size: 16px;
              border-top: 1px solid #ececec;
              border-bottom: 1px solid #ececec;
              padding: 0 18px;
              height: 52px;
              background: #fff;
              .shop{
                i{
                  margin-left: 10px;
                  color: $orange;
                }
              }
              .cart{
                margin-left: 35px;
                i{
                  margin-left: 10px;
                  color: $orange;
                }
              }
            }
          }
        }
        .details-block{
          margin-top: 20px;
          .product-details{
            width: 200px;
            padding: 18px;
            display: block;
            background: $orange;
            text-align: center;
            color: #fff;
          }
          .details-description{
            padding: 20px 30px;
            background: #fff;
            .overview{
              font-size: 20px;
              padding-bottom: 10px;
            }
            .details{
              li{
                width: 33%;
                display: inline-block;
                padding: 12px 0;
              }
              .quick-details{
                display: block;
                font-size: 16px;
                padding: 18px 0;
                border-top: 1px solid $lightgray;
                width: 100%;

              }
            }
            .packing-delivery{
              min-height: 362px;
              li{
                padding: 12px 0;
              }
              .packing-and-delivery{
                display: block;
                font-size: 16px;
                padding: 18px 0;
                border-top: 1px solid $lightgray;
                width: 100%;
              }
              .packing-details{
                display: flex;
                .details{
                  min-width: 120px;
                }
              }
              .delivery-time{
                display: flex;
                align-items: center;
                li{
                  min-width: 120px;
                }
              }
            }
          }
        }
      }
      .aside{
        display: flex;
        flex-direction: column;
        height: 600px;
        overflow-y: scroll;
        .title{
          font-size: 17px;
          margin-bottom: 20px;
        }
        .related_items{
          .swiper-container{
            .swiper-wrapper{
              display: flex;
              flex-direction: column;
              float: right;
              max-width: 267px;
              .swiper-slide {
                box-sizing: border-box;
                background: #fff;
                text-align: center;
                height: 378px;
                display: flex;
                flex-direction: column;
                align-items: center;
                float: left;
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
                  .cart{
                    display: flex;
                    width: 100%;
                    border-bottom: 1px solid #eeeeee;
                  }
                }
                &:last-child{
                  margin-bottom: 0;
                }
              }
            }
          }
          &.scroll{
            overflow-y: scroll;
          }
        }
      }
    }
    @include b(1365px, max-width){
      .wrapper{
        display: flex;
        flex-direction: column;
        .main{
          width: 100%;
        }
        .aside{
          width: 100%;
          padding: 0 20px;
          .title{
            padding: 20px;
            margin-bottom: 0;
          }
          .related_items{
            .swiper-container{
              .swiper-wrapper {
                display: flex;
                flex-direction: row;
                float: none;
                min-width: 100%;
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
            }
          }
        }
      }
    }
    @include b(992px, max-width){
      .wrapper{
        .main{
          .main-product-section{
            flex-direction: column;
            align-items: center;
            height: auto;
            .product-image{
              width: 100%;
              .main-product-image{
                width: 526px;
                // margin: auto;

              }
            }
            .product-description{
              width: 100%;
            }
          }
        }
      }
    }
    @include b(768px, max-width){
      .wrapper{
        .main{
          .main-product-section{
            .product-description{
              .description_top{
                #product_title{
                  font-size: 14px;
                }
                #transportation_price{
                  font-size: 14px;
                }
                #product_price{
                  b{
                    font-size: 17px;
                  }
                  span{
                    font-size: 15px;
                  }
                }
                #supplier_ability{
                  font-size: 14px;
                }
                .buttons{
                  #supplier_mail, #add-compare{
                    font-size: 10px;
                    padding: 10px;
                  }
                }
              }
              .description_bottom{
                .payments{
                  font-size: 14px;
                  div{
                    .more{
                      margin-left: 5px;
                      &:hover{
                        .also{
                          left: -250px;
                          bottom: -37px;
                          p{
                            font-size: 13px;
                          }
                          &::before{
                            left: 260px;
                            top: -45px;
                          }
                          &::after{
                            left: 260px;
                            top: -44px;
                          }
                        }
                      }
                    }
                  }
                }
                .shipping{
                  font-size: 14px;
                }
              }
              .adds{
                font-size: 14px;
              }
            }
          }
          .details-block{
            .details-description{
              .overview{
                font-size: 17px;
              }
              .details{
                li{
                  width: 49%;
                  font-size: 13px;
                }
                .quick-details{
                  font-size: 15px;
                }
              }
              .packing-delivery{
                li{
                  font-size: 13px;
                }
                .packing-and-delivery{
                  font-size: 15px;
                }
                .delivery-time{
                  font-size: 13px;
                }
              }
            }
          }
        }
      }
    }
    @include b(540px, max-width){
      .wrapper{
        .main{
          .details-block{
            .details-description{
              .details{
                li{
                  width: 100%;
                }
              }
              .packing-delivery{
                .packing-details{
                  flex-direction: column;
                }
              }
            }
          }
        }
      }
    }
    @include b(400px, max-width){
      .wrapper{
        .main{
          .main-product-section{
            .product-description{
              .description_bottom{
                .payments{
                  p:nth-child(1){
                    min-width: 70px;
                  }
                }
                .shipping{
                  p:nth-child(1){
                    min-width: 70px;
                  }
                }
              }
            }
          }
          .details-block{
            .details-description{
              .packing-delivery{
                .delivery-time{
                  font-size: 13px;
                  flex-wrap: wrap;
                  li{
                    min-width: 90px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .product-image-item.active,
  .product-image-item:hover{
    border: 1px solid #ff6a00;
    cursor: pointer;
  }
  .product-image-item{
    border: 1px solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 70px;
    width: 70px;
  }
  .product-image-item img {
    max-width: 100%;
    height: auto;
  }
  #main-product-image,
  #image-zoomer{
    height: 100%;
    width: 100%;
  }
</style>
