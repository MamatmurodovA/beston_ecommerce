<template>
  <section id="underground">
    <div class="region">
      <section id="news">
        <h2 class="block-title">
          Latest news
        </h2>
        <div class="block-content">
          <div class="item">
            <div class="date">
              <span>24</span><span>dec</span>
            </div>
            <div class="image"><a href=""><img src="images/news1.png"></a></div>
            <div class="title"><a href="">Sed ut perspiciatis unde omnis iste natus</a></div>
            <div class="body"><p>Sed ut perspicihhhhhatis unde omnis iste natus error sit voluptatem accusantium doloremque lau</p></div>
            <div class="link"><a href="">Read more</a></div>
          </div>
          <div class="item">
            <div class="date">
              <span>24</span><span>dec</span>
            </div>
            <div class="image"><a href=""><img src="images/news2.png"></a></div>
            <div class="title"><a href="">Sed ut perspiciatis unde omnis iste natus</a></div>
            <div class="body"><p>Sed ut perspicihhhhhatis unde omnis iste natus error sit voluptatem accusantium doloremque lau</p></div>
            <div class="link"><a href="">Read more</a></div>
          </div>
          <div class="item">
            <div class="date">
              <span>24</span><span>dec</span>
            </div>
            <div class="image"><a href=""><img src="images/news3.png"></a></div>
            <div class="title"><a href="">Sed ut perspiciatis unde omnis iste natus</a></div>
            <div class="body"><p>Sed ut perspicihhhhhatis unde omnis iste natus error sit voluptatem accusantium doloremque lau</p></div>
            <div class="link"><a href="">Read more</a></div>
          </div>
        </div>
      </section>
      <section id="news-baner">
        <a href="">
          <img src="images/news-baner.png">
        </a>
      </section>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Underground'
  }
</script>

<style lang="scss">
  #underground {
    @include innerbox(0, 0);
    background: #fff;
    font-family: 'Circe Regular';
    .region {
      padding-top: 50px;
      #news {
        @include span(10.5);
        font-size: 0;
        .block-title {
          font-size: 25px;
          color: #222;
          text-transform: uppercase;
          margin-bottom: 30px;
        }
        .block-content{
          display: flex;
          justify-content: space-between;
          .item {
            height: 413px;
            width: 32%;
            display: inline-block;
            vertical-align: top;
            box-sizing: border-box;
            position: relative;
            border: 1px solid #e8e8e8;
            position: relative;
            .date {
              width: 48px;
              height: 57px;
              position: absolute;
              top: 13px;
              left: 13px;
              padding: 12px;
              border-radius: 2px;
              background: $orange;
              color: #fff;
              span {
                display: block;
                text-align: center;
                &:nth-child(1) {
                  font-size: 20px;
                  font-family: 'Circe Bold';
                }
                &:nth-child(2) {
                  font-size: 12px;
                  text-transform: uppercase;
                  margin-top: 5px;
                }
              }
            }
            .image{
              img {
                width: 100%;
                height: auto;
              }
            }
            .title {
              font-size: 18px;
              color: #222;
              font-weight: bold;
              padding: 25px;
              line-height: 1.3;
              a{
                &:hover{
                  color: $orange;
                  transition: .2s;
                }
              }
            }
            .body {
              padding: 0 25px;
              color: #888888;
              font-size: 14px;
              line-height: 1.3;
            }
            .link {
              padding: 25px;
              a {
                font-size: 12px;
                color: $gray;
                font-weight: bold;
                text-transform: uppercase;
                &:hover{
                  color: $orange;
                  transition: .2s;
                }
              }
            }
          }
        }
      }
      #news-baner {
        @include span(3.5 last);
        margin-top: 55px;
        height: 413px;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    @include b(992px, max-width){
      .region{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 30px;
        #news{
          @include span(13.8);
          margin: auto;
          .block-content{
            overflow-x: scroll;
            .item{
              min-width: 90%;
              margin-right: 20px;
              height: auto;
            }
            &::-webkit-scrollbar {
              display: none;
            }
          }
        }
        #news-baner{
          @include span(13.8);
          margin: 20px auto;
          height: auto;
        }
      }
    }
  }
</style>
