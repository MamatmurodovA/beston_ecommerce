<template>
  <nav id="nav">
    <div id="menu1">
      <ul class="menu_horizontal">
        <li><a href="" class="active">home</a></li>
        <li><a href="">about us</a></li>
        <li><a href="">news</a></li>
        <li><a href="">sertificates</a></li>
        <li><a href="">contact us</a></li>
      </ul>
    </div>
    <div id="menu2" class="hide">
      <nav>
        <ul class="nav">
          <li><a href="#">home</a></li>
          <li><a href="#">about us</a></li>
          <li><a href="#">news</a></li>
          <li><a href="#">sertificates</a></li>
          <li><a href="#">contact us</a></li>
          <li class="category">categories</li>
          <li>
            <a href="#" class="collapse" id="btn-1" data-toggle="collapse" data-target="#submenu1" aria-expanded="false">Rubber Product Making Machinery<p></p></a>
            <ul class="nav collapse" id="submenu1" role="menu" aria-labelledby="btn-1">
              <li><a href="#">Plastic Pellet Machine</a></li>
              <li><a href="#">Urban Garbage Sorting Plant</a></li>
              <li><a href="#">Solid Waste Pyrolysis Machine</a></li>
              <li><a href="#">Oil Distillation Machine</a></li>
              <li><a href="#">Biomass Carbonization Furnace</a></li>
            </ul>
          </li>
          <li><a href="#" class="collapse" id="btn-2" data-toggle="collapse" data-target="#submenu2" aria-expanded="false">Plastic Pellet Machine</a>
            <ul class="nav collapse" id="submenu2" role="menu" aria-labelledby="btn-2">
              <li><a href="#">Plastic Pellet Machine</a></li>
              <li><a href="#">Urban Garbage Sorting Plant</a></li>
              <li><a href="#">Solid Waste Pyrolysis Machine</a></li>
              <li><a href="#">Oil Distillation Machine</a></li>
              <li><a href="#">Biomass Carbonization Furnace</a></li>
            </ul>
          </li>
          <li><a href="#" class="collapse" id="btn-3" data-toggle="collapse" data-target="#submenu3" aria-expanded="false">Urban Garbage Sorting Plant</a>
            <ul class="nav collapse" id="submenu3" role="menu" aria-labelledby="btn-3">
              <li><a href="#">Plastic Pellet Machine</a></li>
              <li><a href="#">Urban Garbage Sorting Plant</a></li>
              <li><a href="#">Solid Waste Pyrolysis Machine</a></li>
              <li><a href="#">Oil Distillation Machine</a></li>
              <li><a href="#">Biomass Carbonization Furnace</a></li>
            </ul>
          </li>
          <li><a href="#" class="collapse" id="btn-4" data-toggle="collapse" data-target="#submenu4" aria-expanded="false">Solid Waste Pyrolysis Machine</a>
            <ul class="nav collapse" id="submenu4" role="menu" aria-labelledby="btn-4">
              <li><a href="#">Plastic Pellet Machine</a></li>
              <li><a href="#">Urban Garbage Sorting Plant</a></li>
              <li><a href="#">Solid Waste Pyrolysis Machine</a></li>
              <li><a href="#">Oil Distillation Machine</a></li>
              <li><a href="#">Biomass Carbonization Furnace</a></li>
            </ul>
          </li>
          <li><a href="#" class="collapse" id="btn-5" data-toggle="collapse" data-target="#submenu5" aria-expanded="false">Oil Distillation Machine</a>
            <ul class="nav collapse" id="submenu5" role="menu" aria-labelledby="btn-5">
              <li><a href="#">Plastic Pellet Machine</a></li>
              <li><a href="#">Urban Garbage Sorting Plant</a></li>
              <li><a href="#">Solid Waste Pyrolysis Machine</a></li>
              <li><a href="#">Oil Distillation Machine</a></li>
              <li><a href="#">Biomass Carbonization Furnace</a></li>
            </ul>
          </li>
          <li><a href="#" class="collapse" id="btn-6" data-toggle="collapse" data-target="#submenu6" aria-expanded="false">Biomass Carbonization Furnace</a>
            <ul class="nav collapse" id="submenu6" role="menu" aria-labelledby="btn-6">
              <li><a href="#">Plastic Pellet Machine</a></li>
              <li><a href="#">Urban Garbage Sorting Plant</a></li>
              <li><a href="#">Solid Waste Pyrolysis Machine</a></li>
              <li><a href="#">Oil Distillation Machine</a></li>
              <li><a href="#">Biomass Carbonization Furnace</a></li>
            </ul>
          </li>
          <li><a href="#" class="collapse" id="btn-7" data-toggle="collapse" data-target="#submenu7" aria-expanded="false">Product categories</a>
            <ul class="nav collapse" id="submenu7" role="menu" aria-labelledby="btn-7">
              <li><a href="#">Plastic Pellet Machine</a></li>
              <li><a href="#">Urban Garbage Sorting Plant</a></li>
              <li><a href="#">Solid Waste Pyrolysis Machine</a></li>
              <li><a href="#">Oil Distillation Machine</a></li>
              <li><a href="#">Biomass Carbonization Furnace</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      <a href="#" id="menuclosed">
        <i class="fa fa-times fa-2x" aria-hidden="true"></i>
      </a>
    </div>
    <div id="overlay"></div>
  </nav>
</template>

<script>
  export default {
    name: 'Navbar'
  }
</script>

<style lang="scss">
  #nav{
    font-family: 'Circe Bold';
    font-size: 14px;
    padding: 25px 0;
    display: block;
    #menu1{
      @include innerbox(0, 0);
      text-transform: uppercase;
      .menu_horizontal{
        display: flex;
      }
      li{
        margin-right: 35px;
        a{
          color: $gray;
          &.active{
            color: $orange;
          }
          &:hover{
            color: $orange;
            transition: .4s;
          }
        }
      }
    }
    #menu2{
      text-transform: uppercase;
      display: block !important;
      position: fixed;
      left: -1500px;
      right: 0;
      top: 0;
      bottom: 0;
      width: 30%;
      background: #fff;
      color: $orange;
      border: 1px solid $lightgray;
      z-index: 20;
      transition: .5s;
      -webkit-box-shadow: 2px 0px 20px 1px rgba(0,0,0,.5);
      -moz-box-shadow: 2px 0px 20px 1px rgba(0,0,0,.5);
      box-shadow: 2px 0px 20px 1px rgba(0,0,0,.5);
      overflow-y: scroll;
      nav{
        .nav{
          li{
            font-size: 16px;
            border-bottom: 1px solid $lightgray;
            a{
              color: $gray;
              padding: 25px;
              &.active{
                color: $orange;
              }
              &:hover{
                color: $orange;
                transition: .4s;
              }
              // &.collapse{
              // 	display: flex;
              // 	justify-content: space-between;
              // 	align-items: center;
              // 	&::after{
              // 		font-family: 'FontAwesome';
              // 		content: '\f077';
              // 	}
              // }
              // &.collapsed{
              // 	&::after{
              // 		font-family: 'FontAwesome';
              // 		content: '\f078';
              // 	}
              // }
            }
            .in{
              li{
                a{
                  margin-left: 30px;
                  background: none;
                  transition: .3s;
                }
              }
            }
          }
          .category{
            color: #fff;
            background: $orange;
            padding: 25px;
            text-align: center;
          }
        }
      }
      &.open{
        position: fixed;
        left: 0;
        transition: .5s;
        z-index: 25;
        #menuclosed{
          display: block;
          position: absolute;
          top: 5px;
          right: 10px;
          i{
            &:hover{
              cursor: pointer;
            }
          }
          &:hover{
            color: $orange;
          }
        }
      }
    }
    #overlay{
      z-index: 19;
      background: rgba(0,0,0,.5);
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: none;
      &.open{
        display: block;
      }
    }
    @include b(992px, max-width){
      #menu1{
        display: flex;
        justify-content: center;
      }
      #menu2{
        &.hide{
          width: 50%;
          font-size: 10px;
          &.open{
            li{
              font-size: 15px;
            }
          }
        }
      }
    }
    @include b(768px, max-width){
      padding: 0;
      #menu1{
        display: none;
      }
      #menu2{
        &.hide{
          width: 100%;
        }
        #menuclosed{
          font-size: 13px;
          width: 30px;
          height: 50px;
          text-align: center;
        }
      }
    }
    @include b(540px, max-width){
      #menu2{
        #menuclosed{
          font-size: 16px;
        }
      }
    }
  }
</style>
