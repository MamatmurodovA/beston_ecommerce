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
</style>
