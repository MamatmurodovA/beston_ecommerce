<template>
    <div class="">
      <p id="product_price">
        <span> {{ price }} $</span>
        <template v-if="product.variation_type === 'color'">
            <div class="color-label"> Color: {{ current_variation? current_variation : product.product_variation[0].variation_label }} </div>
            <div class="color-variations">
              <a class="color-variation-item" v-for="variation in product.product_variation" @click="current_variation=variation.variation_label; price=variation.price">
                  <span class="color-code" :style="{backgroundColor: variation.color}"></span>
              </a>
            </div>
        </template>
        <template v-else>
          <span class="set"><b>US $12000 - 250000</b> / Set</span>
          <span class="piece">1 Piece/Pieces (Min. Order)</span>
        </template>
      </p>
      <p id="supplier_ability"><span>Supply Ability:</span><span>200000 Piece/Pieces per Month</span></p>
    </div>
</template>

<script>
  export default {
    props: ['product'],
    name: 'ProductPriceItem',
    data(){
      return {
        current_variation: '',
        price: product.price? product.price : 0
      }
    }
  }
</script>

<style scoped>
  .color-variations {
    width: 100%;
    height: 100%;
  }
  .color-variation-item:hover {
    border: 1px solid #cccccc;
  }
  .color-variation-item {
    display: inline-block;
    width: 40px;
    height: 40px;
    margin: 1px;
    border: 1px solid transparent;
  }
  .color-variation-item .color-code
  {
    cursor: pointer;
    width: 100%;
    height: 100%;
    display: block;
  }
</style>
