<template>
  <div>
    <Breadcrumb :params="param_list"></Breadcrumb>
    <section class="section-product-list">
      <SubCategory :category="category_item" v-for="(category_item,index) in category.children" :key="index"></SubCategory>
    </section>
  </div>
</template>

<script>
  import * as config from '../../config'
  import Breadcrumb from '../Parts/Breadcrumb'

  import SmallProductItem from '../Items/SmallProductItem'
  import ProductItem from '../Items/ProductItem'
  import SubCategory from '../Items/SubCategory'


  export default {
    name: 'ProductListPage',
    data(){
        return {
            category: {},
            param_list: [],
        }
    },
    components: {
      SubCategory,
      ProductItem,
      Breadcrumb,
      SmallProductItem
    },
    methods: {
      handleRouteChange()
      {
        this.getCategory()
      },
      getCategory(){
        let url = config.API_ROOT + '/categories/' + this.$route.params.category_slug + '/'
        axios.get(url)
          .then(json => {
            this.category = json.data
            this.param_list = [json.data]
          })
      }
    },
    watch: {
      '$route': 'handleRouteChange',
    },
    created()
    {
      this.getCategory()
    },
  }
</script>

<style lang="scss">
  @import "~susy";
  @import "~breakpoint-sass/stylesheets/breakpoint";

  .section-product-list{
    max-width: 1470px;
    min-height: 400px;
    margin: 0 auto;
    .subcategory-products{
      border-top: 1px solid #e8e8e8;
      padding-top: 40px;
      margin-bottom: 40px;
      display: flex;
      &:nth-child(1){
        border: none;
      }
      .wrapper{
        width: 100%;
        display: flex;
        margin: 0 auto;
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
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: start;
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
            margin-left: 30px;
            .image{
              width: 265px;
              height: 223px;
              overflow: hidden;
              display: flex;
              align-items: center;
              justify-content: center;
              a{
                display: block;
                width: 100%;
                height: 100%;
              }
              img {
                max-width: 100%;
                height: auto;
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
