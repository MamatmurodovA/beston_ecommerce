<template>
    <div class="">
      <p id="product_price">
        <template v-if="product.variation_type === 'no_variation'">
          <span> {{ product.price }} $</span>
        </template>
        <template v-else-if="product.variation_type === 'color'">
            <div class="color-label"> Color: {{ current_variation? current_variation : product.product_variation[0].variation_label }} </div>
            <div class="color-variations">
              <a class="color-variation-item" v-for="variation in product.product_variation" @click="current_variation=variation.variation_label">
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
        current_variation: ''
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
    cursor: pointer;
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
    width: 100%;
    height: 100%;
    display: block;
  }
</style>
