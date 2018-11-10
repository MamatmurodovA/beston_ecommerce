<template>
  <section id="section-bottom">
    <div id="partners">
      <div class="block-title">
        <div><img src="/static/images/partners-line.png"></div>
        <h2>Partners</h2>
        <div><img src="/static/images/partners-line.png"></div>
      </div>
      <div class="owl-carousel">
        <div class="item">
          <a href="">
            <img src="/static/images/clientlogo1.png">
          </a>
        </div>
        <div class="item">
          <a href="">
            <img src="/static/images/clientlogo2.png">
          </a>
        </div>
        <div class="item">
          <a href="">
            <img src="/static/images/clientlogo3.png">
          </a>
        </div>
        <div class="item">
          <a href="">
            <img src="/static/images/clientlogo4.png">
          </a>
        </div>
        <div class="item">
          <a href="">
            <img src="/static/images/clientlogo5.png">
          </a>
        </div>
        <div class="item">
          <a href="">
            <img src="/static/images/clientlogo6.png">
          </a>
        </div>
        <div class="item">
          <a href="">
            <img src="/static/images/clientlogo7.png">
          </a>
        </div>
        <div class="item">
          <a href="">
            <img src="/static/images/clientlogo1.png">
          </a>
        </div>
        <div class="item">
          <a href="">
            <img src="/static/images/clientlogo2.png">
          </a>
        </div>
        <div class="item">
          <a href="">
            <img src="/static/images/clientlogo3.png">
          </a>
        </div>
      </div>
    </div>
    <div id="description">
      <div>
        <img src="/static/images/ship.png">
        <p>Free Shipping</p>
        <span>Free Shipping on World <br> wide Order</span>
      </div>
      <div>
        <img src="/static/images/trust.png">
        <p>Trusted Pay</p>
        <span>100% Payment Protection & <br> Easy Return</span>
      </div>
      <div>
        <img src="/static/images/pay.png">
        <p>Secured Payment</p>
        <span>All Major Credit & Debit Cards <br> Accepted</span>
      </div>
    </div>
    <div class="region-footer">
      <div id="newsletter">
        <div class="left">
          <div class="signup">
            <img src="/static/images/signup_footer.png">
            <p>SIGNUP TO <br> NEWSLETTER</p>
          </div>
          <form class="form">
            <input type="text" name="" placeholder="Enter Your Email Address" class="submit_panel">
            <button type="button" class="submit_button">Submit</button>
          </form>
        </div>
        <div class="socials" id="socials">
          <span>KEEP IN TOUCH</span>
          <a href=""><i class="fa fa-twitter" aria-hidden="true"></i></a>
          <a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a>
          <a href=""><i class="fa fa-google-plus" aria-hidden="true"></i></a>
          <a href=""><i class="fa fa-linkedin" aria-hidden="true"></i></a>
          <a href=""><i class="fa fa-youtube" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'SectionBottom'
  }
</script>

<style lang="scss">
  @import "~susy";
  @import "~breakpoint-sass/stylesheets/breakpoint";
  #section-bottom{
    background: #fff;
    font-family: 'Circe Regular';
    #partners {
      clear: both;
      margin-top: 50px;
      padding-top: 30px;
      border-top: 1px solid #ececec;
      border-bottom: 1px solid #ececec;
      .block-title {
        display: flex;
        justify-content: center;
        align-items: center;
        h2{
          margin: 20px 0;
          font-size: 28px;
          color: #000;
          text-transform: uppercase;
          text-align: center;
          padding: 0 20px;
        }
        div{
          display: flex;
          align-items: center;
        }
      }
      .owl-carousel{
        @include innerbox(0, 0);
        .owl-stage-outer {
          overflow: hidden;
          padding: 10px 0;
          .owl-item {
            display: inline-block;
            box-shadow: 0 5px 10px 0 #ccc;
            height: 95px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #fff;
            margin: 0 10px;
            a {
              padding: 10px;
              display: block;
            }
            img {
              width: 100%;
              height: auto;
            }
          }
        }
        .owl-nav {
          display: flex;
          justify-content: center;
          position: absolute;
          left: 0;
          right: 0;
          color: #777777;
          bottom: 45px;
          .owl-prev, .owl-next{
            margin: 2.5px;
            border: 1px solid #e5e5e5;
            border-radius: 2px;
            background: none;
            width: 25.5px;
            height: 25.5px;
            color: #555555;
            span{
              cursor: pointer;
            }
          }
        }
      }
    }
    #description {
      @include innerbox(0, 0);
      font-size: 0;
      &>div {
        height: 210px;
        padding-top: 38.5px;
        display: inline-block;
        vertical-align: middle;
        width: 33%;
        text-align: center;
        img{
          min-height: 50px;
        }
        p {
          font-size: 13px;
          color: #222;
          margin: 15px 0;
          font-weight: bold;
          text-transform: uppercase;
          font-family: 'Circe Bold';
        }
        span {
          display: block;
          font-size: 14px;
          color: #999999;
          line-height: 1.3;
        }
        &:nth-child(2){
          border-left: 1px solid #ececec;
          border-right: 1px solid #ececec;
        }
      }
    }
    .region-footer {
      background: #353535;
      height: 100px;
      display: flex;
      align-items: center;
      #newsletter{
        max-width: 1470px;
        width: 100%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        font-family: 'Circe Bold';
        .left{
          display: flex;
          align-items: center;
          .signup{
            display: flex;
            font-size: 18px;
            img{
              margin-right: 20px;
            }
            p{
              color: #fff;
            }
          }
          .form{
            margin-left: 50px;
            background: #fff;
            border-radius: 4px;
            .submit_panel{
              height: 30px;
              width: 400px;
              background: #fff;
              border: none;
              border-top-left-radius: 4px;
              border-bottom-left-radius: 4px;
              padding: 0 20px;
              box-sizing: border-box;
              font-family: 'Circe Regular';
              &:hover{
                cursor: text;
              }
            }
            .submit_button{
              height: 50px;
              width: 100px;
              background: $orange;
              border: none;
              border-top-right-radius: 4px;
              border-bottom-right-radius: 4px;
              text-transform: uppercase;
              color: #fff;
              font-family: 'Circe Bold';
              font-size: 14px;
              &:hover{
                cursor: pointer;
              }
            }
          }
        }
        #socials{
          display: flex;
          align-items: center;
          border-left: 1px solid #535353;
          padding-left: 45px;
          span{
            color: #fff;
            margin-right: 15px;
          }
          a{
            background: #fff;
            margin-left: 5px;
            border-radius: 50%;
            i{
              display: flex;
              align-items: center;
              justify-content: center;
              height: 40px;
              width: 40px;
              font-size: 15px;
              &:hover{
                transition: .4s;
                color: #fff;
                cursor: pointer;
              }
            }
            &:hover{
              background: $orange;
              transition: .4s;
            }
          }
        }
      }
    }
    @include b(1200px, max-width){
      .region-footer{
        min-height: 170px;
        #newsletter{
          display: flex;
          flex-direction: column;
          text-align: center;
          align-items: center;
          .left{
            @include span(12);
            display: flex;
            flex-direction: row;
            justify-content: center;
            margin-bottom: 15px;
            margin-right: 0;
            .signup{
              margin-bottom: 10px;
              margin-right: 30px;
            }
            .form{
              margin-bottom: 10px;
              margin-left: 0;
              max-height: 50px;
            }
          }
          #socials{
            border: 0;
            span{
              margin-left: 10px;
            }
            a{
              margin-left: 7px;
            }
          }
        }
      }
    }
    @include b(992px, max-width){
      #partners{
        margin-top: 0;
        padding-top: 20px;
      }
      #description{
        display: flex;
        flex-direction: column;
        align-items: center;
        div{
          @include span(13.8);
          margin: 0;
          padding-top: 25px;
          margin-bottom: -25px;
          &:nth-child(2){
            border: none;
          }
        }
      }
      .region-footer{
        #newsletter{
          .left{
            .form{
              .submit_panel{
                width: 300px;
              }
            }
          }
        }
      }
    }
    @include b(768px, max-width) {
      #partners{
        max-width: 100%;
        .owl-nav{
          display: none;
        }
      }
      .region-footer{
        #newsletter{
          .left{
            .form{
              .submit_panel{
                width: 200px;
              }.submit_button{
                 width: 70px;
               }
            }
          }
        }
      }
    }
    @include b(540px, max-width) {
      #partners{
        .owl-carousel{
          display: flex;
          height: 150px;
          .owl-nav{
            display: none;
          }
        }
      }
      .region-footer{
        min-height: 200px;
        #newsletter{
          display: flex;
          flex-direction: column;
          text-align: center;
          .left{
            display: flex;
            flex-direction: column;

            .signup{
              margin-bottom: 10px;
            }
            .form{
              margin-bottom: 10px;
              margin-left: 0;
              max-height: 50px;
              .submit_panel{
                max-width: 240px;
              }
              .submit_button{
              }
            }
          }
          #socials{
            padding-left: 0;
            margin-right: 10px;
            span{
              font-size: 16px;
              width: 70px;
              margin-right: 0;
            }
            a{
              margin-left: 7px;
            }
          }
        }
      }
    }
  }
</style>
