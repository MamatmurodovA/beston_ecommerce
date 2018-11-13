<template>
  <div>
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
    <footer id="footer">
      <div class="footer-top">
        <div class="info">
          <img src="/static/images/logo-foot.png">
          <p>
            <strong>Address:</strong> 9 Floor, Building A, Central China Electronic Commerce Port, South <br> Daxue Rd., Erqi District, Zhengzhou, Henan, China (Mainland)
          </p><br>
          <p>
            <strong>Phone:</strong> +86 17839909611
          </p><br>
          <p>
            <strong>Email:</strong> info@beston.uz
          </p>
        </div>
        <div class="right">
          <div class="policy">
            <h2 class="block-title">Policy info</h2>
            <div class="block-content">
              <ul>
                <li>
                  <a href="">Orders & Returns</a>
                </li>
                <li>
                  <a href="">Advanced Search</a>
                </li>
                <li>
                  <a href="">Help & FAQs</a>
                </li>
                <li>
                  <a href="">Consultant</a>
                </li>
                <li>
                  <a href="">Store Locations</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="account">
            <h2 class="block-title">My account</h2>
            <div class="block-content">
              <ul>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Delivery Information</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Terms & Conditions</a>
                </li>
                <li>
                  <a href="">Custom Link</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="desc">
          <div class="copyright"><p>Copyright © Beston Group - Beston (Henan) Machinery Co., Ltd.</p></div>
          <div class="developed">
                    <span>
                        Site developed by <br>
                        Design Studio
                    </span>
            <img src="/static/images/dst.png">
          </div>
        </div>
        <div class="chat">
          <div class="chaticon" id="chaticon">
            <p>Let's chat? - <span>Online</span></p><i class="fa fa-chevron-up"></i><i class="fa fa-chevron-down"></i>
          </div>
          <div class="chatwindow" id="chatwindow"></div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style lang="scss">
  @import "~susy";
  @import "~breakpoint-sass/stylesheets/breakpoint";
  #footer{
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    font-family: 'Circe Regular';
    .footer-top{
      @include innerbox(0, 0);
      width: 100%;
      display: flex;
      .info{
        color: #8c8c8c;
        @include span(8);
        p{
          margin-bottom: 10px;
          line-height: 24px;
          strong{
            color: #555555;
          }
        }
        img{
          margin-bottom: 40px;
        }
        margin-top: 30px;
      }
      .right{
        display: flex;
        justify-content: space-around;
        width: 300px;
        line-height: 40px;
        @include span(6);
        .block-title{
          font-size: 15px;
          text-transform: uppercase;
          font-family: 'Circe Bold';
        }
        a{
          font-size: 14px;
          color: #8c8c8c;
        }
      }
    }
    .footer-bottom{
      color: #8c8c8c;
      border-top: 1px solid #ececec;
      margin-top: 60px;
      .desc{
        height: 78px;
        max-width: 1470px;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .developed{
          display: flex;
          span{
            text-align: right;
            margin-right: 10px;
          }
        }
      }
      .chat{
        display: block;
        position: fixed;
        right: 0;
        bottom: 0;
        z-index: 15;
        transition: .3s;
        .chaticon{
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 250px;
          height: 40px;
          background: #50b748;
          color: #fff;
          border-top-left-radius: 6px;
          border-top-right-radius: 6px;
          padding: 10px;
          .fa-chevron-down{
            display: none;
          }
          .fa-chevron-up{
            display: block;
          }
          &.open{
            .fa-chevron-up{
              display: none;
            }
            .fa-chevron-down{
              display: block;
            }
          }
          &:hover{
            cursor: pointer;
          }
        }
        .chatwindow{
          &.open{
            width: 250px;
            height: 250px;
            background: #fff;
            border: 1px solid #50b748;
          }
        }
        &.fixed{
          bottom: 79px;
          transition: .3s;
        }
      }
    }
    @include b(768px, max-width) {
      .footer-top{
        display: flex;
        flex-direction: column;
        align-items: center;
        .info{
          @include span(10);
          margin-bottom: 20px;
          margin-top: 0;
          display: flex;
          flex-direction: column;
          img{
            align-self: center;
          }
        }
        .right{
          @include span(10);
          display: flex;
          justify-content: space-between;
        }
      }
      .footer-bottom{
        padding-top: 20px;
        .desc{
          display: flex;
          flex-direction: column;
          align-items: center;
          .developed{
            margin-top: 10px;
            margin-bottom: 5px;
          }
        }
        .chat{
          .chaticon{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 250px;
            height: 40px;
            background: #50b748;
            color: #fff;
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
            padding: 10px;
            .fa-chevron-down{
              display: none;
            }
            .fa-chevron-up{
              display: block;
            }
            &.open{
              .fa-chevron-up{
                display: none;
              }
              .fa-chevron-down{
                display: block;
              }
            }
            &:hover{
              cursor: pointer;
            }
          }
          .chatwindow{
            &.open{
              width: 250px;
              height: 200px;
              background: #fff;
              border: 1px solid #50b748;
            }
          }
          &.fixed{
            bottom: 98px;
          }
        }
      }
    }
    @include b(540px, max-width) {
      .footer-top{
        display: flex;
        flex-direction: column;
        align-items: center;
        .info{
          margin-bottom: 20px;
          margin-top: 0;
          display: flex;
          flex-direction: column;
          img{
            align-self: center;
          }
        }
      }
      .footer-bottom{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 20px;
        .copyright{
          text-align: center;
        }
        .developed{
          margin-top: 10px;
        }
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


</style>
