<template>
  <div>
    <Breadcrumb :params="param_list"></Breadcrumb>
    <div class="subcategory-section">
      <aside class="aside">
        <div class="filter">
          <h2 class="filter-title">Filter</h2>
          <div class="filter-section brand">
            <h3 class="filter-name">Product Features</h3>
            <form action="" method="">
              <input type="checkbox" name="Filter-1" value="Filter-1"> Transparent<br>
              <input type="checkbox" name="Filter-2" value="Filter-2"> White<br>
              <input type="checkbox" name="Filter-3" value="Filter-3"> Translucent<br>
              <input type="checkbox" name="Filter-4" value="Filter-4"> Pale-yellow<br>
            </form>
          </div>
          <div class="filter-section feature">
            <h3 class="filter-name">Supplier Features</h3>
            <form action="" method="">
              <input type="checkbox" name="Filter-1" value="Filter-1"> Africa<br>
              <input type="checkbox" name="Filter-2" value="Filter-2"> Asia<br>
              <input type="checkbox" name="Filter-3" value="Filter-3"> Europe<br>
              <input type="checkbox" name="Filter-4" value="Filter-4"> Middle East<br>
              <input type="checkbox" name="Filter-5" value="Filter-5"> North America<br>
              <input type="checkbox" name="Filter-6" value="Filter-6"> South America<br>
              <input type="checkbox" name="Filter-7" value="Filter-7"> Oceania<br>
            </form>
          </div>
          <div class="filter-section color">
            <h3 class="filter-name">Total Revenue</h3>
            <form action="" method="">
              <input type="checkbox" name="Filter-1" value="Filter-1"> Africa<br>
              <input type="checkbox" name="Filter-2" value="Filter-2"> Asia<br>
              <input type="checkbox" name="Filter-3" value="Filter-3"> Europe<br>
              <input type="checkbox" name="Filter-4" value="Filter-4"> Middle East<br>
              <input type="checkbox" name="Filter-5" value="Filter-5"> North America<br>
              <input type="checkbox" name="Filter-6" value="Filter-6"> South America<br>
              <input type="checkbox" name="Filter-7" value="Filter-7"> Oceania<br>
            </form>
          </div>
        </div>
        <section id="recent-prod" class="recent-prod-list-page">
          <h2 class="block-title">Recently viewed items</h2>
          <div class="block-content">
            <SmallProductItem v-for="(product, index) in products" :key="index" :product="product"></SmallProductItem>
          </div>
        </section>
      </aside>
      <main class="main">
        <div class="toprod">
          <div class="head">
            <h2 class="block-title" v-if="root_category.child">{{ root_category.child.title }}</h2>
            <div class="view">
              <p class="views">View <span>575,715</span> Product(s)</p>
              <div class="right">
                <p>Sort by</p>
                <form action="">
                  <select name="sort">
                    <option value="volvo">Select</option>
                    <option value="saab">Sort 1</option>
                    <option value="mercedes">Sort 2</option>
                    <option value="audi">Sort 3</option>
                  </select>
                </form>
                <div class="buttons view-changer">
                  <a href="#" class="button list" @click="set_view_type($event, 'list')" ><i class="fa fa-th-list" aria-hidden="true"></i></a>
                  <a href="#" class="button grid active" @click="set_view_type($event, 'grid')"><i class="fa fa-th-large" aria-hidden="true"></i></a>
                </div>
              </div>
              <div class="mobile_filter_btn" id="mobile-filter-btn">
                <button>Filter</button>
              </div>
              <div id="filterview">
                <h2>Filter</h2>
                <button class="accordion">Бренды</button>
                <div class="panel brand">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum nobis molestias commodi officia, vel. Quo ratione vitae aliquid aliquam provident nostrum itaque quam minima molestias. Provident labore error earum. Minima!</div>
                <button class="accordion">Features</button>
                <div class="panel feature"></div>
                <button class="accordion">Цвета</button>
                <div class="panel color"></div>
              </div>
            </div>
          </div>
          <div class="block-content" >
            <div class="row products-list-page" :class="[view_type]">
              <div v-for="(product, index) in products" :key="index" class="products-list-page-item">
                <ProductItem :product="product"></ProductItem>
                <hr>
              </div>
            </div>
          </div>
          <div class="pagination">
            <div class="pagination-page">
              <a href="#"><i class="fa fa-angle-left" aria-hidden="true"></i></a>
              <a href="#" class="active">1</a>
              <a href="#">2</a>
              <a href="#">3</a>
              <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i></a>
            </div>
            <div class="pagination-goto">
              <p>Go to Page</p>
              <input type="text" maxlength="10" class="pag-goto-input">
              <input type="submit" value="Go" class="pag-goto-button">
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
  import * as config from '../../config'
  import Breadcrumb from '../Parts/Breadcrumb'
  import ProductItem from '../Items/ProductItem'
  import SmallProductItem from '../Items/SmallProductItem'

  export default {
    name: 'Subcategory',
    data() {
      return {
        products: [],
        view_type: 'grid',
        param_list: [],
        root_category: {},
      }
    },
    components: {
      Breadcrumb,
      ProductItem,
      SmallProductItem
    },
    methods: {
      set_view_type(event, view_type)
      {
        event.preventDefault();
        this.view_type = view_type;
        let el = event.target.parentNode;

        let children = el.parentNode.children
        for(let x = 0; x < children.length; x++)
        {
            children[x].classList.remove('active')
        }
        el.classList.add('active')
      },
      getRootCategory(){
        let url = config.API_ROOT + '/categories/' + this.$route.params.category_id + '/root/'
        fetch(url, {
          method: 'GET'
        })
          .then(response => response.json())
          .then(json => {
            this.root_category = json
            this.param_list = [json]
          })
      },
      getProducts(){
        let url = config.API_ROOT + '/products/?cat=' + this.$route.params.category_id;
        fetch(url, {
          method: 'GET'
        })
          .then(response => response.json())
          .then(json => {
            this.products = json.results
          })
      }
    },
    created(){
      this.getRootCategory()
      this.getProducts()
    },
  }
</script>

<style lang="scss">
  .subcategory-section{
    #recent-prod{
      .cart{
        display: none;
      }
    }
  }

</style>
