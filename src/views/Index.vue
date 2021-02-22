<template>
  <div>
    <common-header></common-header>
    <div class="index-main">
      <div class="index-banner">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="slide-item box1">
                <div class="banner-content">
                  <h2>
                    免费分享高品质的云南旅游攻略景点大全线路社交自媒体平台
                  </h2>
                  <div>丽江泸沽湖</div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="slide-item box2">
                <div class="banner-content">
                  <h2>云南旅游网打造“去大众化”的旅行攻略，高品质的旅行生活</h2>
                  <div>香格里拉 松赞林寺</div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="slide-item box3">
                <div class="banner-content">
                  <h2>去云南自驾游，纯游玩，享受不一样的高品质小众旅游景点</h2>
                  <div>西双版纳</div>
                </div>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="slide-item box4">
                <div class="banner-content">
                  <h2>重新定义旅行，以“心情+社交+生活+体验”不一样的旅行经历</h2>
                  <div>腾冲银杏村</div>
                </div>
              </div>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
          <!-- 如果需要导航按钮 -->
          <!-- <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div> -->
        </div>
      </div>
      <div class="index-content container-box">
        <div class="category-list">
          <div class="swiper-container1">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(v, i) of category" :key="i">
                <router-link :to="`/article_list/${v.id}`">
                  <div class="category-box">
                    <div class="thumbnail-pic">
                      <div class="big thumbnail">
                        <img :src="`/img/picture/${v.img1}`" alt="" />
                      </div>
                      <div class="small">
                        <div class="thumbnail">
                          <img :src="`/img/picture/${v.img2}`" alt="" />
                        </div>
                        <div class="thumbnail">
                          <img
                            :src="`/img/picture/${v.img3}`"
                            alt="云南旅游攻略"
                          />
                          <span>{{ v.amount }}篇文章</span>
                        </div>
                      </div>
                    </div>
                    <div class="entry-content">
                      <h3 class="entry-title">{{ v.typename }}</h3>
                      <a class="arrow" href=""
                        ><i class="iconfont icon-zhaoyou"></i
                      ></a>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
            <!-- Add Pagination -->
            <!-- <div class="swiper-pagination1"></div> -->
          </div>
        </div>
        <div class="newest">
          <div class="news-title">
            <h3>最新文章</h3>
          </div>
          <el-row
            :gutter="20"
            class="news-list infinite-list"
            v-infinite-scroll="load"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="100"
          >
            <el-col
              :span="8"
              v-for="(v, i) of articles"
              :key="i"
              class="infinite-list-item"
            >
              <router-link :to="`/article_detail/${v.aid}`">
                <div class="news-box">
                  <img :src="`/img/picture/${v.img}`" alt="" />
                  <div class="news-content">
                    <span>{{ v.subtitle }}</span>
                    <h4>
                      <router-link :to="`/article_detail/${v.aid}`">
                        {{ v.title }}
                      </router-link>
                    </h4>
                    <div class="author-info">
                      <img :src="`/img/ucenter/${v.avater}`" alt="" />
                      <div>
                        <p>{{ v.nickname }}</p>
                        <span>{{
                          new Date(v.created_at).toLocaleString()
                        }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="news-details">
                    <div>
                      <a class="time" href=""
                        ><i class="iconfont icon-rili"></i
                        ><span class="count">{{
                          new Date(v.created_at).toLocaleString()
                        }}</span></a
                      >

                      <a class="view" href=""
                        ><i class="iconfont icon-icon-test"></i
                        ><span class="count">{{ v.view }}</span></a
                      >

                      <a class="comment" href=""
                        ><i class="iconfont icon-pinglun"></i
                        ><span class="count">{{ v.comment }}</span></a
                      >
                    </div>
                  </div>
                </div>
              </router-link>
            </el-col>
          </el-row>
          <div class="infinite-scroll-button" v-if="loading">
            <p>
              <i class="iconfont icon-shuaxin"></i>
              加载更多
            </p>
          </div>
          <div class="infinite-scroll-button" v-if="noMore">
            <p>没有更多了</p>
          </div>
        </div>
      </div>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      // 存储服务器返回分类数据
      category: [],
      // 存储服务器返回的文章数据
      articles: [],

      //翻页数据
      page: 1,
      loading: false,
      pagecount: 1,
    };
  },
  computed: {
    noMore() {
      return this.page > this.pagecount;
    },
  },
  methods: {
    load() {
      console.log(this.page,this.pagecount);
      if (this.page <= this.pagecount) {
        
        this.loading = true;
        // 发送异步请求
        this.axios
          .get("/article/newArticle", {
            params: {
              page: this.page,
            },
          })
          .then((res) => {
            // 将服务器返回的页数总数赋值给pagecount变量
            console.log(res);
            this.pagecount = res.data.pagecount;
            //将服务器返回的文章列表数据赋值给results变量
            let result = res.data.result;
            console.log(result);
            result.forEach((item) => {
              this.articles.push(item);
            });
            this.page++;
            this.loading = false;
          });
      }
    },
  },
  mounted() {
    // 发送HTTP请求以获取期望的文章分类数据
    this.axios
      .get("/article/category")
      .then((res) => {
        // 将服务器返回的数据赋予category变量
        console.log(res);
        this.category = res.data.splice(0, 5);
      })
      .then(
        //首页分类列表轮播swiper
        function () {
          if (window.innerWidth >= 1900) {
            new Swiper(".swiper-container1", {
              slidesPerView: 5,
              spaceBetween: 20,
              // pagination: {
              //   el: ".swiper-pagination1",
              //   clickable: true,
              // },
              // navigation: {
              //   nextEl: ".swiper-button-next",
              //   prevEl: ".swiper-button-prev",
              // },
            });
          } else {
            new Swiper(".swiper-container1", {
              slidesPerView: 4,
              spaceBetween: 20,
            });
          }
        }
      );
    // 发送HTTP请求以获取期望的最新文章数据
    //  this.axios.get("/article/newArticle").then(res=>{
    //    console.log(res);
    //    this.articles = res.data;
    //  });

    //首页轮播swiper
    (function () {
      new Swiper(".index-main .swiper-container", {
        pagination: {
          el: ".swiper-pagination",
          loop: true,
          clickable: true,
        },
        autoplay: {
          delay: 5000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        loop: true,
      });
    })();
  },
};
</script>

<style>
/* banner start */
.index-main .swiper-container {
  width: 100%;
  height: 450px;
}

.index-main .swiper-container .slide-item {
  width: 100%;
  height: 100%;
  position: sticky;
}

.index-main .swiper-container .slide-item::before {
  content: "";
  background-color: rgba(0, 0, 0, 0.25);
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 0;
}

.index-main .swiper-container .swiper-slide .box1 {
  background: url(https://www.ynly.cc/wp-content/uploads/2020/10/1604118509-泸沽湖.jpg)
    no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.index-main .swiper-container .swiper-slide .box2 {
  background: url(https://www.ynly.cc/wp-content/uploads/2020/10/1604118339-香格里拉-松赞林寺.jpg)
    no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.index-main .swiper-container .swiper-slide .box3 {
  background: url(https://www.ynly.cc/wp-content/uploads/2020/10/1604118487-西双版纳野象谷.jpg)
    no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.index-main .swiper-container .swiper-slide .box4 {
  background: url(https://www.ynly.cc/wp-content/uploads/2020/10/1604118130-腾冲银杏村.jpg)
    no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.index-main .swiper-container .banner-content {
  max-width: 650px;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 0 20px;
}

.index-main .swiper-container .swiper-slide-active .banner-content {
  animation-timing-function: ease-in-out;
  animation-name: fadein;
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-delay: 0.5s;
}

.index-main .swiper-container .banner-content h2 {
  text-shadow: 3px 4px 5px #333;
  font-size: 32px;
  color: #fff;
}

.index-main .swiper-container .banner-content div {
  font-size: 16px;
  margin-top: 15px;
  color: #fff;
  text-shadow: 3px 4px 5px #333;
}

.index-main .swiper-pagination > span {
  width: 20px;
  height: 6px;
  border-radius: 4px;
  opacity: 0.3;
}

.index-main .swiper-pagination > .swiper-pagination-bullet-active {
  background-color: #ccc;
  opacity: 1;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
/* banner over */

/* category-list start */
.index-main .category-list {
  padding: 30px 0;
  overflow: hidden;
}

.index-main .category-box {
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
}

.index-main .category-box .thumbnail-pic {
  display: flex;
  height: 220px;
  overflow: hidden;
}

.index-main .category-box .thumbnail-pic .thumbnail {
  position: relative;
}

.index-main .category-box .thumbnail-pic .thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.index-main .category-box .thumbnail-pic .big {
  width: 70%;
  margin-right: 4px;
}

.index-main .category-box .thumbnail-pic .small {
  flex: 0 0 30%;
}

.index-main .category-box .thumbnail-pic .small div {
  display: flex;
  flex-direction: column;
  height: 50%;
  margin-bottom: 4px;
}

.index-main .category-box .thumbnail-pic .small div:nth-child(2) {
  position: relative;
}

.index-main .category-box .thumbnail-pic .small div:nth-child(2)::before {
  content: "";
  display: block;
  position: absolute;
  background: rgba(0, 0, 0, 0.4);
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
}

.index-main .category-box .thumbnail-pic .small div:nth-child(2) span {
  position: absolute;
  width: 100%;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  z-index: 30;
}

.index-main .category-box .entry-content {
  align-items: center;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
}

.index-main .category-box .entry-title {
  font-size: 15px;
  margin-bottom: 0;
}

.index-main .category-box .arrow {
  font-size: 18px;
}

/* category-list over */

/* newest start */
.index-main .newest {
  position: relative;
}

.index-main .newest .news-title {
  margin-bottom: 40px;
  position: relative;
}

.index-main .newest .news-title h3 {
  font-size: 16px;
  font-weight: normal;
}

.index-main .newest .news-title::after {
  background-color: #333;
  bottom: -10px;
  content: "";
  height: 3px;
  left: 0;
  position: absolute;
  width: 25px;
}

.index-main .infinite-list {
  min-height: 100px;
  overflow-y: auto;
}

.index-main .news-box {
  position: relative;
  min-height: 330px;
  overflow: hidden;
  border-radius: 4px;
  margin-bottom: 20px;
}

.index-main .news-box::before {
  content: "";
  background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
}

.index-main .news-box > img {
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
}

.index-main .news-box .news-content {
  position: absolute;
  width: 100%;
  padding: 15px;
  z-index: 11;
  bottom: 37px;
  left: 0;
  right: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
}

.index-main .news-box .news-content > span {
  background: rgba(0, 0, 0, 0.6);
  display: inline-block;
  padding: 4px 8px;
  color: #fff;
  font-size: 12px;
  margin-bottom: 5px;
}

.index-main .news-box .news-content > h4 a {
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  min-height: 45px;
  color: #fff;
  font-weight: normal;
}

.index-main .news-box .news-content .author-info {
  margin-top: 5px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

.index-main .news-box .news-content .author-info > img {
  border-radius: 50%;
  margin-right: 10px;
  width: 36px;
}

.index-main .news-box .news-content .author-info > div {
  color: #fff;
  flex: 1;
}

.index-main .news-box .news-details {
  z-index: 11;
  border-color: rgba(255, 255, 255, 0.3);
  bottom: 0;
  left: 0;
  position: absolute;
  padding: 0 15px;
}

.index-main .news-box .news-details div {
  width: 100%;
  display: flex;
  align-items: center;
  height: 37px;
}

.index-main .news-box .news-details div a i {
  margin-right: 2px;
}

.index-main .news-box .news-details div a {
  color: #e0e0e0;
  margin-right: 5px;
}

.index-main .news-box .news-details div a:hover {
  color: #fff;
}

.index-main .infinite-scroll-button {
  text-align: center;
  margin: 30px 0 50px;
}

.index-main .infinite-scroll-button p {
  background-color: #333;
  border-radius: 30px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 12px;
  line-height: 1;
  padding: 10px 22px;
  text-align: center;
}
/* newest over */
</style>