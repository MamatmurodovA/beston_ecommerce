<template>
  <div id="app">
    <header id="header">
      <div id="top">
        <div id="navbar">
          <div class="burger1"><a href="#" id="burger1"></a></div>
          <div class="logo"><a href=""><img src="images/logo-top.png"></a></div>
          <div class="reclame"><img src="images/reclame.png"></div>
          <ul class="menu">
            <li id="cart1">
              <a href="#"><img src="images/shopping-cart-icon.png" alt="shopping cart">CART</a>
              <h2 id="value">0</h2>
            </li>
            <li id="cart1_hide">
              <a href="#"><img src="images/shopping-cart-icon.png" alt="shopping cart">CART</a>
              <h2 id="value_hide">0</h2>
            </li>
            <li id="reg">
              <a href="pages/signin_page.html">SIGN IN</a>
            </li>
            <!-- <li id="sign"><a href="pages/profile_page.html">User profile</a></li> -->
            <!-- <li id="sign2"><a href="pages/profile_page_merchant.html">Merchant profile</a></li> -->
            <div id="cartview">
              <div class="item">
                <img src="images/cartview.png">
                <div class="description">
                  <h2>Halogen Room Handwear</h2>
                  <p>$125.00 x2</p>
                </div>
                <a href="" id="delete"><p>X</p></a>
              </div>
              <div class="item">
                <img src="images/cartview.png">
                <div class="description">
                  <h2>Shaving Cream, 100 gm</h2>
                  <p>$75.00 x1</p>
                </div>
                <a href="" id="delete"><p>X</p></a>
              </div>
              <div class="item">
                <img src="images/cartview.png">
                <div class="description">
                  <h2>Shaving Cream, 100 gm</h2>
                  <p>$75.00 x1</p>
                </div>
                <a href="" id="delete"><p>X</p></a>
              </div>
              <div class="item">
                <img src="images/cartview.png">
                <div class="description">
                  <h2>Shaving Cream, 100 gm</h2>
                  <p>$75.00 x1</p>
                </div>
                <a href="" id="delete"><p>X</p></a>
              </div>
              <div class="item">
                <img src="images/cartview.png">
                <div class="description">
                  <h2>Shaving Cream, 100 gm</h2>
                  <p>$75.00 x1</p>
                </div>
                <a href="" id="delete"><p>X</p></a>
              </div>
              <p>ORDER TOTAL<span>325$</span></p>
              <div class="buttons">
                <a href="" class="button" id="viewcart">view cart</a>
                <a href="" class="button" id="cancel">cancel</a>
              </div>
            </div>
          </ul>
          <div class="languages">
            <a href=""><p>Uz</p><img src="images/uz.png" alt=""></a>
            <a href=""><p>Ru</p><img src="images/ru.png" alt=""></a>
            <a href="" class="active"><p>En</p><img src="images/en.png" alt=""></a>
          </div>
        </div>
      </div>
      <div class="search-block">
        <div id="search">
          <form class="form">
            <input type="search" class="search_panel" placeholder="Search...">
            <select>
              <option class="main">All categories</option><i class="fa fa-sort-desc" aria-hidden="true"></i>
              <option>Rubber Product Making Machinery</option>
              <option>Plastic Pellet Machine</option>
              <option>Urban Garbage Sorting Plant</option>
              <option>Solid Waste Pyrolysis Machine</option>
              <option>Oil Distillation Machine</option>
              <option>Biomass Carbonization Furnace</option>
              <option>Carbon Black Processing Machine</option>
              <option>Biomass Pellet Machine</option>
              <option>Tyre Pretreating Machine</option>
              <option>Concrete Mixer</option>
              <option>Concrete Mixing Plant</option>
            </select>
            <button type="submit" class="search_button"><img src="images/search-icon.png"></button>
          </form>
        </div>
      </div>
      <div id="top_fixed">
        <div id="navbar_fixed">
          <div class="burger2"><a href="#" id="burger2"></a></div>
          <div class="logo"><a href=""><img src="images/logo-top.png"></a></div>
          <div id="search">
            <form class="form">
              <input type="text" class="search_panel" placeholder="Search...">
              <select>
                <option class="main">All categories</option><i class="fa fa-sort-desc" aria-hidden="true"></i>
                <option>Rubber Product Making Machinery</option>
                <option>Plastic Pellet Machine</option>
                <option>Urban Garbage Sorting Plant</option>
                <option>Solid Waste Pyrolysis Machine</option>
                <option>Oil Distillation Machine</option>
                <option>Biomass Carbonization Furnace</option>
                <option>Carbon Black Processing Machine</option>
                <option>Biomass Pellet Machine</option>
                <option>Tyre Pretreating Machine</option>
                <option>Concrete Mixer</option>
                <option>Concrete Mixing Plant</option>
              </select>
              <button type="submit" class="search_button"><img src="images/search-icon.png"></button>
            </form>
          </div>
          <ul class="menu">
            <li id="cart2">
              <a href="#"><img src="images/shopping-cart-icon.png" alr="shopping cart">CART</a>
              <h2 id="value">0</h2>
            </li>
            <li id="cart2_hide">
              <a href="#"><img src="images/shopping-cart-icon.png" alr="shopping cart">CART</a>
              <h2 id="value_hide">0</h2>
            </li>
            <li id="reg">
              <a href="">SIGN IN</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <router-view />

  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">

  @import "~susy";
  @import "~breakpoint-sass/stylesheets/breakpoint";
  @import "assets/scss/main";
 h1{
   font-size: 24px;
 }
</style>
