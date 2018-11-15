<template>
  <div>
    <Breadcrumb></Breadcrumb>
    <section class="section-product-list">
      <div class="subcategory-products" v-for="category in categories">
        <div class="wrapper">
          <div class="list">
            <h2 class="block-title">
              <router-link :to="{name: 'product_category_page', params: {id: category.id}}">
                {{ category.title }}
              </router-link>
            </h2>
            <div class="menu">
              <ul class="sub_menu">
                <li class="sub_list"><a href="product_page.html">shenzhen</a></li>
                <li class="sub_list"><a href="">wireless charger</a></li>
                <li class="sub_list"><a href="">headset</a></li>
                <li class="sub_list active"><a href="">power bank</a></li>
                <li class="sub_list"><a href="">shenzhen</a></li>
                <li class="sub_list"><a href="">wireless charger</a></li>
                <li class="sub_list"><a href="">headset</a></li>
                <li class="sub_list"><a href="">power bank</a></li>
              </ul>
            </div>
          </div>
          <div class="items">
            <SmallProductItem :product="product"  v-for="(product, index) in products" :key="index"></SmallProductItem>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Breadcrumb from '../Parts/Breadcrumb'
  import products from '../../data/products.json'
  import categories from '../../data/category.json'
  import SmallProductItem from '../Items/SmallProductItem'
  import ProductItem from '../Items/ProductItem'
  export default {
    name: 'ProductListPage',
    data(){
      return {
        products: products,
        categories: categories
      }
    },
    components: {
      ProductItem,
      Breadcrumb,
      SmallProductItem
    }
  }
</script>

<style lang="scss">
  @import "~susy";
  @import "~breakpoint-sass/stylesheets/breakpoint";

  .section-product-list{
    .subcategory-products{
      border-top: 1px solid #e8e8e8;
      padding-top: 40px;
      margin-bottom: 40px;
      display: flex;
      &:nth-child(1){
        border: none;
      }
      .wrapper{
        display: flex;
        margin: auto;
        .list{
          font-family: 'Circe Regular';
          font-size: 12px;
          min-width: 267px;
          padding: 40px;
          border-radius: 5px;
          border: 1px solid #e8e8e8;
          .block-title {
            text-align: center;
            margin-bottom: 75px;
            font-size: 18px;
            border-radius: 5px;
          }
          .menu{
            #sub_menu_button{
              display: none;
            }
            .sub_menu{
              position: relative;
              .sub_list{
                border: 1px solid #e8e8e8;
                text-align: center;
                border-radius: 5px;
                padding: 14px;
                margin-bottom: 20px;
                text-transform: uppercase;
                font-size: 13px;
                &:last-child{
                  margin-bottom: 0;
                }
                .sub_products{
                  display: none;
                }
                a {
                  color: #222;
                  font-size: 14px;
                  display: block;
                }
                &:hover{
                  cursor: pointer;
                  border: 1px solid $orange;
                  transition: .2s;
                  a{
                    color: $orange;
                    transition: .2s;
                  }
                }
                &.active{
                  background: $orange;
                  border: 1px solid $orange;
                  a{
                    color: #fff;
                  }
                }
              }
            }
          }
        }
        .items{
          max-width: 1171px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
          .item {
            display: inline-block;
            box-sizing: border-box;
            background: #fff;
            text-align: center;
            max-width: 267px;
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
          &.none{
            display: none;
          }
          &.block{
            display: block;
          }
        }
      }
    }
    @include b(992px, max-width){
      .subcategory-products{
        .wrapper{
          flex-direction: column;
          .list{
            min-width: 200px;
            padding: 20px;
            margin-bottom: 20px;
            .block-title{
              font-size: 14px;
              margin-bottom: 15px;
            }
            .menu{
              .sub_menu{
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                .sub_list{
                  padding: 10px;
                  margin: 5px;
                  a{
                    font-size: 11px;
                  }
                  &:last-child{
                    margin: 5px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
