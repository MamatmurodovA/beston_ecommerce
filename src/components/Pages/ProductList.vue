<template>
  <div>
    <Breadcrumb></Breadcrumb>
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
            <div class="item" v-for="product in products">
              <div class="image">
                <img :src="product.picture">
              </div>
              <div class="title">
                  <router-link :to="{name: 'product_detail_page', params: {category_id: 1, id: product.id}}">
                    {{ product.title }}
                  </router-link>
              </div>
              <div class="price">
                {{ product.price }} / Set
              </div>
            </div>
          </div>
        </section>
      </aside>
      <main class="main">
        <div class="toprod">
          <div class="head">
            <h2 class="block-title">Categories name</h2>
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
                <div class="buttons">
                  <a href="" class="button list"><i class="fa fa-th-list" aria-hidden="true"></i></a>
                  <a href="" class="button grid active"><i class="fa fa-th-large" aria-hidden="true"></i></a>
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
          <div class="block-content">
            <div class="row grid">
              <div class="item" v-for="product in products">
                <div class="top">
                  <div class="image">
                    <img :src="product.picture">
                  </div>
                  <div class="cart">
                    <a href=""><i class="fa fa-shopping-cart"></i></a>
                    <a href="" id="add-fav"><i class="fa fa-heart-o"></i></a>
                    <a href=""><i class="fa fa-eye"></i></a>
                  </div>
                </div>
                <div class="middle">
                  <div class="title">
                    <router-link :to="{name: 'product_detail_page', params: {category_id: 1, id: product.id}}">
                      {{ product.title }}
                    </router-link>
                  </div>
                  <div class="price">
                    <span>{{ product.price }}</span> / Set
                  </div>
                  <p class="min-quantity"><span>1 Piece</span>(Min. Order)</p>
                  <form class="buttons">
                      <span id="add-compare">
                          <label><input type="checkbox" value="">Add to Compare</label>
                      </span>
                      <button id="supplier_mail">Contact supplier</button>
                  </form>
                </div>
                <ul class="information">
                  <li>Place of Origin: <span>Jiangsu,China (Mainland)</span></li>
                  <li>Shape: <span>Cup-Shaped</span></li>
                  <li>Size: <span>4"</span></li>
                  <li>Hardness: <span>T</span></li>
                  <li>Abrasive: <span>Silicon Carbide</span></li>
                  <li>Model Number: <span>T27</span></li>
                </ul>
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
  import Breadcrumb from '../Parts/Breadcrumb'
  export default {
    name: 'Subcategory',
    data() {
      return {
        products: [
          {
            id: 1,
            title: "Best price waste essential oil distillation equipme...",
            picture: "/static/images/prod1.png",
            price: "US $30,000 - 180,000",
          },
          {
            id: 2,
            title: "Best price waste essential oil distillation equipme...",
            picture: "/static/images/prod2.png",
            price: "US $30,000 - 180,000",
          },
          {
            id: 3,
            title: "Best price waste essential oil distillation equipme...",
            picture: "/static/images/prod3.png",
            price: "US $30,000 - 180,000",
          },
          {
            id: 4,
            title: "Best price waste essential oil distillation equipme...",
            picture: "/static/images/prod4.png",
            price: "US $30,000 - 180,000",
          },
          {
            id: 5,
            title: "Best price waste essential oil distillation equipme...",
            picture: "/static/images/prod4.png",
            price: "US $30,000 - 180,000",
          },
          {
            id: 6,
            title: "Best price waste essential oil distillation equipme...",
            picture: "/static/images/prod5.png",
            price: "US $30,000 - 180,000",
          },
          {
            id: 7,
            title: "Best price waste essential oil distillation equipme...",
            picture: "/static/images/prod1.png",
            price: "US $30,000 - 180,000",
          },
          {
            id: 8,
            title: "Best price waste essential oil distillation equipme...",
            picture: "/static/images/prod2.png",
            price: "US $30,000 - 180,000",
          },
        ]
      }
    },
    components: {
      Breadcrumb
    }
  }
</script>

<style scoped>

</style>
