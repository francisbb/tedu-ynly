<template>
  <div>
    <common-header></common-header>
    <div class="article-detail">
      <div class="container">
        <div class="container-box">
          <!-- 以下是文章介绍 -->
          <el-row :gutter="20">
            <el-col :span="18">
              <div class="article-introduction">
                <div class="article-bg">
                  <div class="start-nav">
                    <ul class="navbar">
                      <li>
                        <img
                          src="../../public/img/artical-detail/map.png"
                          alt=""
                        />
                      </li>
                      <li><a href="javascript:;">首页</a>&gt;&gt;</li>
                      <li><a href="javascript:;">云南旅游景点</a>&gt;&gt;</li>
                      <li><a href="javascript:;">丽江旅游景点</a>&gt;&gt;</li>
                      <li><a href="javascript:;">正文</a></li>

                      <li></li>
                    </ul>
                    <!-- 导航栏分割线 -->
                    <hr />
                    <div class="scenic-spot">
                      <a href="javascript:;">{{ subtitle }}</a>
                      <a href="javascript:;">云南旅游景点</a>
                      <a href="javascript:;">大理旅游景点</a>
                      <a href="javascript:;">腾冲旅游景点</a>
                      <h2>{{ title }}</h2>
                    </div>
                    <!-- 分割线 -->
                    <hr />
                    <ul class="user-handle">
                      <li class="left">
                        <img
                          src="../../public/img/artical-detail/write.png"
                          alt=""
                        />
                        {{ new Date(created_at).toLocaleString() }}
                      </li>
                      <li class="left">
                        <img
                          src="../../public/img/artical-detail/look.png"
                          alt=""
                        />{{ view }}
                      </li>
                      <li class="left">
                        <img
                          src="../../public/img/artical-detail/msg.png"
                          alt=""
                        />{{ comment }}
                      </li>
                      <li class="right">
                        <img
                          src="../../public/img/artical-detail/share.png"
                          alt=""
                        />分享
                      </li>
                      <li class="clear"></li>
                    </ul>
                    <hr />
                  </div>
                  <!-- 文章 -->
                  <div class="artical">
                    <div v-html="content"></div>
                    <hr />
                    <div class="entry-tags">
                      标签：
                      <a href="javascript:;" rel="tag">丽江</a> ·
                      <a href="javascript:;" rel="tag">云南</a> ·
                      <a href="javascript:;" rel="tag">云南十大旅游景点排名</a>
                      · <a href="javascript:;" rel="tag">云南旅游</a> ·
                      <a href="javascript:;" rel="tag">云南旅游景点</a> ·
                      <a href="javascript:;" rel="tag">云阳梯田</a> ·
                      <a href="javascript:;" rel="tag">大理</a> ·
                      <a href="javascript:;" rel="tag">洱海</a> ·
                      <a href="javascript:;" rel="tag">石林</a> ·
                      <a href="javascript:;" rel="tag">腾冲</a> ·
                      <a href="javascript:;" rel="tag">苍山</a> ·
                      <a href="javascript:;" rel="tag">西双版纳</a> ·
                      <a href="javascript:;" rel="tag">香格里拉</a>
                    </div>
                    <div class="navbar-end">
                      <ul>
                        <li>
                          <a href="javascript:;"
                            ><img
                              src="../../public/img/artical-detail/1.png"
                              alt=""
                            />生成海报</a
                          >
                        </li>
                        <li>
                          <a href="javascript:;"
                            ><img
                              src="../../public/img/artical-detail/2.png"
                              alt=""
                            />打赏作者</a
                          >
                        </li>
                        <li>
                          <a href="javascript:;"
                            ><img
                              src="../../public/img/artical-detail/3.png"
                              alt=""
                            />收藏</a
                          >
                        </li>
                        <li>
                          <a href="javascript:;"
                            ><img
                              src="../../public/img/artical-detail/4.png"
                              alt=""
                            />分享</a
                          >
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- 云南旅游网 -->
                  <div class="logo">
                    <div class="logo-img">
                      <img
                        src="../../public/img/artical-detail/logo.jpg"
                        alt=""
                        width="100%"
                      />
                    </div>
                    <div
                      class="logo-text"
                      @mouseenter="hover"
                      @mouseleave="showOff"
                    >
                      <h4>云南旅游网</h4>
                      <div class="author-bio">
                        云南旅游网，是一个免费的云南旅游攻略，云南旅游景点，云南旅游线路的旅游问答分享平台，为各位旅游爱好者提供云南旅游指南。
                      </div>

                      <a href="javascript:;" class="author-link">
                        <span v-show="author">查看作者页面</span>
                        &gt;&gt;&gt;
                      </a>
                    </div>
                  </div>
                  <div class="observe">
                    <h3 class="section-title">
                      <span>暂无评论</span>
                      <hr />
                    </h3>
                    <p>
                      要发表评论，您必须先登录
                      <router-link to="/login">
                        <img
                          src="../../public/img/artical-detail/user.png"
                          alt=""
                        />
                        登录
                      </router-link>
                    </p>
                  </div>
                  <div class="recommend">
                    <h3 class="section-title">
                      <span>相关推荐</span>
                      <hr />
                    </h3>
                    <div class="section-all">
                      <div class="section-content">
                        <div class="img-container">
                          <img
                            src="../../public/img/artical-detail/lj1.jpg"
                            alt=""
                            style="width: 100%"
                          />
                        </div>
                        <div class="section-introduce">
                          <ul>
                            <li><a href="javascript:;">丽江旅游景点</a></li>
                            <li><a href="javascript:;">云南旅游景点</a></li>
                            <li><a href="javascript:;">大理旅游景点</a></li>
                            <li><a href="javascript:;">腾冲旅游景点</a></li>
                            <li>
                              <a href="javascript:;" class="time"
                                >.&nbsp;2020-12-25</a
                              >
                            </li>
                          </ul>
                          <a href="javascript:;" class="link-to"
                            >2020年云南十大旅游景点排名！云南值得去的地方</a
                          >
                          <p>
                            2020年云南十大旅游景点排名！云南值得去的地方，春去冬来，2020年只有最后一个月了，
                            过年去哪玩，很多人会选择中国最富盛名的旅游目的地——云南，这里气候适宜，这里山水如画，
                            这里人美景美，这里真的称得上世外桃源，放下一年的疲惫，去到心中的天堂，何不快哉，
                            那云南到底有哪里好玩，一起来看看吧！
                          </p>
                        </div>
                      </div>
                      <hr />
                    </div>
                    <!-- 重复1 -->
                    <div class="section-all">
                      <div class="section-content">
                        <div class="img-container">
                          <img
                            src="../../public/img/artical-detail/lj2.jpg"
                            alt=""
                            style="width: 100%"
                          />
                        </div>
                        <div class="section-introduce">
                          <ul>
                            <li><a href="javascript:;">丽江旅游景点</a></li>
                            <li><a href="javascript:;">云南旅游景点</a></li>
                            <li><a href="javascript:;">大理旅游景点</a></li>
                            <li><a href="javascript:;">腾冲旅游景点</a></li>
                            <li>
                              <a href="javascript:;" class="time"
                                >.&nbsp;2020-12-25</a
                              >
                            </li>
                          </ul>
                          <a href="javascript:;" class="link-to"
                            >2020年云南十大旅游景点排名！云南值得去的地方</a
                          >
                          <p>
                            2020年云南十大旅游景点排名！云南值得去的地方，春去冬来，2020年只有最后一个月了，
                            过年去哪玩，很多人会选择中国最富盛名的旅游目的地——云南，这里气候适宜，这里山水如画，
                            这里人美景美，这里真的称得上世外桃源，放下一年的疲惫，去到心中的天堂，何不快哉，
                            那云南到底有哪里好玩，一起来看看吧！
                          </p>
                        </div>
                      </div>
                      <hr />
                    </div>
                    <!-- 重复2 -->
                    <div class="section-all">
                      <div class="section-content">
                        <div class="img-container">
                          <img
                            src="../../public/img/artical-detail/lj3.jpg"
                            alt=""
                            style="width: 100%"
                          />
                        </div>
                        <div class="section-introduce">
                          <ul>
                            <li><a href="javascript:;">丽江旅游景点</a></li>
                            <li><a href="javascript:;">云南旅游景点</a></li>
                            <li><a href="javascript:;">大理旅游景点</a></li>
                            <li><a href="javascript:;">腾冲旅游景点</a></li>
                            <li>
                              <a href="javascript:;" class="time"
                                >.&nbsp;2020-12-25</a
                              >
                            </li>
                          </ul>
                          <a href="javascript:;" class="link-to"
                            >2020年云南十大旅游景点排名！云南值得去的地方</a
                          >
                          <p>
                            2020年云南十大旅游景点排名！云南值得去的地方，春去冬来，2020年只有最后一个月了，
                            过年去哪玩，很多人会选择中国最富盛名的旅游目的地——云南，这里气候适宜，这里山水如画，
                            这里人美景美，这里真的称得上世外桃源，放下一年的疲惫，去到心中的天堂，何不快哉，
                            那云南到底有哪里好玩，一起来看看吧！
                          </p>
                        </div>
                      </div>
                      <hr />
                    </div>
                    <!-- 重复3 -->
                    <div class="section-all">
                      <div class="section-content">
                        <div class="img-container">
                          <img
                            src="../../public/img/artical-detail/lj4.jpg"
                            alt=""
                            style="width: 100%"
                          />
                        </div>
                        <div class="section-introduce">
                          <ul>
                            <li><a href="javascript:;">丽江旅游景点</a></li>
                            <li><a href="javascript:;">云南旅游景点</a></li>
                            <li><a href="javascript:;">大理旅游景点</a></li>
                            <li><a href="javascript:;">腾冲旅游景点</a></li>
                            <li>
                              <a href="javascript:;" class="time"
                                >.&nbsp;2020-12-25</a
                              >
                            </li>
                          </ul>
                          <a href="javascript:;" class="link-to"
                            >2020年云南十大旅游景点排名！云南值得去的地方</a
                          >
                          <p>
                            2020年云南十大旅游景点排名！云南值得去的地方，春去冬来，2020年只有最后一个月了，
                            过年去哪玩，很多人会选择中国最富盛名的旅游目的地——云南，这里气候适宜，这里山水如画，
                            这里人美景美，这里真的称得上世外桃源，放下一年的疲惫，去到心中的天堂，何不快哉，
                            那云南到底有哪里好玩，一起来看看吧！
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </el-col>
            <!-- 右边导航栏的内容 -->
            <el-col :span="6">
              <div class="navigation-bar">
                <div class="header-bg"></div>
                <div class="header-img">
                  <img
                    src="https://www.ynly.cc/wp-content/uploads/2020/10/1603358652-ynlytx.jpg"
                    alt=""
                  />
                </div>
                <div class="header-ranking">
                  <div class="header-title">云南旅游网</div>
                  <div class="header-describe">
                    云南旅游网，是一个免费的云南旅游攻略，云南旅游景点，云南旅游线路的旅游问答分享平台，
                    为各位旅游爱好者提供云南旅游指南。
                  </div>

                  <div class="artical-news">
                    <hr />
                    <span>最热文章</span>
                    <hr />
                  </div>
                  <ul class="header-navbar">
                    <li>
                      <span class="tab-item">1</span>
                      <a
                        href="javascript"
                        title="云南旅游攻略|云南香格里拉+梅里雪山5日游"
                      >
                        云南旅游攻略|云南香格里拉+梅里雪山5日游
                      </a>
                    </li>
                    <li>
                      <span class="tab-item">2</span>
                      <a
                        href="javascript"
                        title="云南旅游攻略|云南香格里拉+梅里雪山5日游"
                      >
                        云南旅游|2020春节来云南过暖冬，有哪些不可错过的体验？
                      </a>
                    </li>
                    <li>
                      <span class="tab-item">3</span>
                      <a
                        href="javascript"
                        title="云南旅游攻略|云南香格里拉+梅里雪山5日游"
                      >
                        云南旅游旅游穿搭指南，只为让你美美哒打卡！
                      </a>
                    </li>
                    <li>
                      <span class="tab-item bg-gray">4</span>
                      <a
                        href="javascript"
                        title="云南旅游攻略|云南香格里拉+梅里雪山5日游"
                        >云南旅游攻略|云南香格里拉+梅里雪山5日游</a
                      >
                    </li>
                    <li>
                      <span class="tab-item bg-gray">5</span>
                      <a
                        href="javascript"
                        title="云南旅游攻略|云南香格里拉+梅里雪山5日游"
                        >云南旅游攻略|云南香格里拉+梅里雪山5日游</a
                      >
                    </li>
                    <li>
                      <span class="tab-item bg-gray">6</span>
                      <a
                        href="javascript"
                        title="云南旅游攻略|云南香格里拉+梅里雪山5日游"
                        >云南旅游攻略|云南香格里拉+梅里雪山5日游</a
                      >
                    </li>
                  </ul>
                </div>
                <!-- 中间的导航栏开始 -->
                <div class="middle">
                  <h5>最新旅游文章</h5>
                  <div class="middle-navbar">
                    <div class="middle-img">
                      <img
                        src="../../public/img/artical-detail/lj1.jpg"
                        width="100%"
                        height="100%"
                        alt="图一"
                      />
                    </div>
                    <a href="javascript:;"
                      >2020年云南十大旅游景点排名！云南值得去的地方</a
                    >
                  </div>
                  <hr />
                  <!-- 重复1 -->
                  <div class="middle-navbar">
                    <div class="middle-img">
                      <img
                        src="../../public/img/artical-detail/lj2.jpg"
                        width="100%"
                        height="100%"
                        alt="图一"
                      />
                    </div>
                    <a href="javascript:;"
                      >2020年云南十大旅游景点排名！云南值得去的地方</a
                    >
                  </div>
                  <hr />
                  <!-- 重复2 -->
                  <div class="middle-navbar">
                    <div class="middle-img">
                      <img
                        src="../../public/img/artical-detail/lj3.jpg"
                        width="100%"
                        height="100%"
                        alt="图一"
                      />
                    </div>
                    <a href="javascript:;"
                      >2020年云南十大旅游景点排名！云南值得去的地方</a
                    >
                  </div>
                  <hr />
                  <!-- 重复3 -->
                  <div class="middle-navbar">
                    <div class="middle-img">
                      <img
                        src="../../public/img/artical-detail/lj4.jpg"
                        width="100%"
                        height="100%"
                        alt="图一"
                      />
                    </div>
                    <a href="javascript:;"
                      >2020年云南十大旅游景点排名！云南值得去的地方</a
                    >
                  </div>
                  <hr />
                  <!-- 重复5 -->
                  <div class="middle-navbar">
                    <div class="middle-img">
                      <img
                        src="../../public/img/artical-detail/lj1.jpg"
                        width="100%"
                        height="100%"
                        alt="图一"
                      />
                    </div>
                    <a href="javascript:;"
                      >2020年云南十大旅游景点排名！云南值得去的地方</a
                    >
                  </div>
                  <hr />
                  <!-- 重复6 -->
                  <div class="middle-navbar">
                    <div class="middle-img">
                      <img
                        src="../../public/img/artical-detail/lj1.jpg"
                        width="100%"
                        height="100%"
                        alt="图一"
                      />
                    </div>
                    <a href="javascript:;"
                      >2020年云南十大旅游景点排名！云南值得去的地方</a
                    >
                  </div>
                  <hr />
                </div>

                <!-- 分类栏目导航，和middlebar公用一些css样式 -->
                <div class="middle">
                  <h5>分类目录</h5>
                  <div class="middle-navbar">
                    <ul class="directory">
                      <li v-for="(ele, i) of directory" :key="i">
                        <a href="javascript:;">{{ ele }}</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- 旅游攻略大全，二维码 -->
                <div class="middle">
                  <h5>
                    大理、丽江、泸沽湖、洱海、泸沽湖、腾冲、玉龙雪山、西双版纳、云南旅游攻略大全
                  </h5>
                  <div class="middle-navbar">
                    <img
                      src="../../public/img/artical-detail/wx.jpg"
                      alt=""
                      width="100%"
                    />
                  </div>
                </div>
                <!-- 评论 -->
                <div class="middle">
                  <h5>评论</h5>
                  <div class="middle-navbar">
                    <ul>
                      <li v-for="i of 5" :key="i" class="observe-end">
                        <span>Anonymous on</span>
                        <p>
                          <a href="javascript:;">
                            云南旅游攻略|准备去云南旅游，一般玩几天比较合适？
                          </a>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
          <!-- 右边导航结束 -->
        </div>
      </div>
    </div>
    <common-footer></common-footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      author: false,
      directory: [
        "丽江旅游景点",
        "云南周边旅游景点",
        "云南旅游攻略",
        "云南旅游景点",
        "云南旅游路线",
        "云南旅游美食",
        "去云南旅游",
        "大理旅游景点",
        "昆明旅游景点",
        "腾冲旅游景点",
        "西双版纳旅游景点",
        "达人游记",
        "香格里拉旅游",
      ],
      //定一个来保存标题的变量
      title: "",
      //定一个变量来保存文章的副标题
      subtitle: "",
      //定一个变量来保存创建的时间
      created_at: "",
      //定一个变量来保存观看人数
      view: "",
      //顶一个变量来保存评论条数
      comment: "",
      //声明一个变量来保存内容
      content: "",
    };
  },
  methods: {
    hover() {
      this.author = true;
    },
    showOff() {
      this.author = false;
    },
  },
  mounted() {
    let id = this.$route.params.id;
    //发送axios请求
    this.axios
      .get("/article/detail", {
        params: {
          id: id,
        },
      })
      .then((res) => {
        let obj = res.data[0];
        console.log(obj);
        //拿到标题
        this.title = obj.title;
        console.log(this.title);
        //拿到文章的副标题
        this.subtitle = obj.subtitle;
        //拿到时间
        this.created_at = obj.created_at;
        console.log(this.created_at);
        //拿到观看人数
        this.view = obj.view;
        //拿到评论多少条
        this.comment = obj.comment;
        //拿到文章内容
        this.content = obj.content;
      });
  },
};
</script>
<style>
/*左边的样式 */
.article-detail .container {
  background: #f4f4f4;
  margin-bottom: 40px;
  margin-top: 40px;
}
.article-detail .detail-container {
  background: #f4f4f4;
  display: flex;
  width: 80%;
  margin: 0 auto;
  margin-top: 30px;
}
.article-detail .article-introduction {
  background: #f4f4f4;
}
.article-detail .article-bg {
  background: #f4f4f4;
}
.article-detail .start-nav {
  padding-top: 25px;
  background: white;
}
.article-detail .navigation-bar {
  background: #fff;
}
.article-detail .navbar {
  display: flex;
  justify-content: flex-start;
  margin-left: 15px;
  color: #777;
  font-size: 12px;
  font-family: "Microsoft YaHei", "WenQuanYi Micro Hei", Arial, Verdana, Tahoma,
    sans-serif;
}
.article-detail .navbar a {
  color: #777;
  font-size: 14px;
}
.article-detail .navbar:last-child {
  clear: both;
}
.article-detail hr {
  background: #eeeeee;
  height: 1px;
}
.article-detail .scenic-spot {
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 15px;
}
.article-detail .scenic-spot a {
  display: inline-block;
  background: #000;
  border: 1px solid #000;
  border-radius: 10px;
  color: white;
  font-size: 12px;
  padding: 1px 3px;
  margin-bottom: 10px;
}
.article-detail .scenic-spot a:not(:first-child) {
  margin-left: 3px;
}
.article-detail .scenic-spot h2 {
  font-size: 22px;
  color: #000;
  font-weight: normal;
}
.article-detail .user-handle {
  padding: 10px 15px;
}
.article-detail .user-handle .left {
  float: left;
}
.article-detail .user-handle .right {
  float: right;
}
.article-detail .user-handle li:last-child {
  clear: both;
}
.article-detail .user-handle li > img {
  vertical-align: middle;
}
.article-detail .user-handle li:not(:first-child) {
  margin-left: 5px;
}
.article-detail .artical {
  background: white;
  padding: 20px 20px 30px 20px;
}
.article-detail .artical p {
  margin-bottom: 20px;
  /* text-indent: 2em; */
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 400;
  line-height: 30px;
}
.article-detail .artical a {
  border-bottom: 2px solid #000;
}
.article-detail .artical img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
}

.article-detail .artical .wp-caption {
  width: 100%!important;
}

.article-detail .artical .entry-tags {
  margin: 50px auto;
  text-align: center;
  margin-bottom: 20px;
}
.article-detail .entry-tags a {
  border: none;
  color: #aaaaaa;
}
.article-detail .navbar-end {
  margin: 0 auto;
  text-align: center;
}
.article-detail .navbar-end > ul {
  display: flex;
  padding: 30px 25%;
}
.article-detail .navbar-end > ul > li {
  display: inline-block;
  padding: 5px 10px;
  border: 1px solid #eeeeee;
  border-radius: 15px;
  margin-bottom: 15px;
}
.article-detail .navbar-end > ul > li:not(:last-child) {
  margin-right: 10px;
}
.article-detail .navbar-end > ul > li > a {
  border-bottom: none;
  color: blue;
}
.article-detail .logo {
  background: white;
  display: flex;
  margin-top: 30px;
  padding: 90px 20px;
}
.article-detail .logo-img {
  width: 85px;
  height: 85px;
}
.article-detail .logo-text {
  margin-left: 20px;
}
.article-detail .logo-text h4 {
  font-size: 18px;
  font-weight: normal;
  color: #000;
  margin-bottom: 10px;
}

.article-detail .observe {
  background-color: #fff;
  border-radius: 5px;
  margin-top: 30px;
  padding: 23px;
}
.article-detail .observe span {
  font-size: 16px;
  font-weight: normal;
  color: #000;
}
.article-detail .observe hr {
  background: #000;
  width: 25px;
  height: 2px;
}
.article-detail .section-title {
  margin-bottom: 30px;
}
.article-detail .observe p {
  padding: 50px;
  background-color: #f4f4f4;
  text-align: center;
  font-size: 16px;
}
.article-detail .observe img {
  vertical-align: middle;
}
.article-detail .recommend {
  margin-top: 30px;
  background: #fff;
  padding: 50px 20px;
}

.article-detail .recommend hr {
  background: #000;
  width: 25px;
  height: 2px;
}
.article-detail .recommend span {
  font-size: 16px;
  font-weight: normal;
  color: #000;
}

.article-detail .section-content {
  display: flex;
  margin-top: 18px;
}
.article-detail .img-container {
  width: 250px;
  height: 100px;
}
.article-detail .img-container img {
  width: 100%;
  height: 100%;
}
.article-detail .section-introduce {
  margin-left: 18px;
  /* margin-top: 10px; */
}
.article-detail .section-introduce ul {
  display: flex;
  margin-bottom: 6px;
}
.article-detail .section-introduce ul li a {
  font-size: 12px;
  font-weight: bold;
  color: #000;
}
.article-detail .section-introduce ul li:not(:first-child) {
  margin-left: 8px;
}
.article-detail .section-introduce ul li .time {
  color: #777;
  font-weight: normal;
}
.article-detail .link-to {
  display: inline-block;
  font-size: 18px;
  color: #1a1a1a;
  padding: 12px 0px;
}
.article-detail .section-introduce p {
  text-indent: 0;
  font-size: 12px;
  color: #1a1a1a;
}

.article-detail .section-all hr {
  margin-top: 5px;
  width: 100%;
  background: #eeeeee;
  height: 1px;
}
/* 左边的样式结束 */
/*右边的样式*/
.article-detail .navigation-bar {
  background: #f4f4f4;
  position: relative;
}
.article-detail .navigation-bar .header-bg {
  /* position: absolute; */
  height: 120px;
  background: url("https://www.ynly.cc/wp-content/uploads/2020/10/1603358652-ynlytx.jpg")
    center center no-repeat;
  background-size: cover;
  filter: blur(4px);
}
.article-detail .navigation-bar .header-img img {
  width: 100px;
  position: absolute;
  top: 60px;
  left: 50%;
  margin-left: -50px;
  border-radius: 50%;
  transition: 0.3s linear;
  box-shadow: -2px 2px 18px;
}
.article-detail .navigation-bar img:hover {
  transform: rotate(360deg);
}
.article-detail .navigation-bar .header-ranking {
  background: #fff;
  padding: 35px;
  margin-bottom: 20px;
}
.article-detail .navigation-bar .header-title {
  margin: 35px 0;
  font-size: 16px;
  text-align: center;
}
.article-detail .navigation-bar .header-describe {
  color: #999;
  font-size: 14px;
  margin: 14px 0;
  text-align: center;
}
.article-detail .navigation-bar .artical-news {
  font-size: 18px;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-bottom: 15px;
}
.article-detail .navigation-bar .artical-news hr {
  width: 65px;
  height: 1px;
  background: #eeeeee;
}
.article-detail .navigation-bar .header-navbar .tab-item {
  float: left;
  text-align: center;
  padding: 5px;
  background: #000;
  width: 10%;
  color: white;
  margin-top: 5px;
  margin-right: 8px;
}

.article-detail .header-navbar li{
  margin-bottom: 15px;
}


.article-detail .navigation-bar .header-navbar .bg-gray {
  background: #bebebe;
}
.article-detail .navigation-bar .header-navbar a {
  display: block;
  /* width: 87%; */
  overflow: hidden;
  /* white-space: nowrap; */
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: 20px;
  color: #333;
}
/* header-navbar结束 */
/*middle-navbar开始*/
.article-detail .navigation-bar .middle {
  background: #fff;
  margin-top: 45px;
}
.article-detail .navigation-bar .middle-navbar {
  padding: 35px;
  background: #fff;
}
.article-detail .navigation-bar .middle h5 {
  font-size: 18px;
  font-weight: normal;
  border-bottom: 1px solid #eeeeee;
  padding: 20px 20px;
  margin: -15px -10px 20px;
}
.article-detail .navigation-bar .middle hr {
  height: 1px;
  background: #eeeeee;
}
.article-detail .navigation-bar .middle-navbar {
  display: flex;
  margin-bottom: 15px;
}
.article-detail .navigation-bar .middle-navbar .middle-img {
  height: 75px;
  width: 160px;
  margin-right: 15px;
}
.article-detail .navigation-bar .middle-navbar .directory a {
  color: #777;
}
.article-detail .navigation-bar .middle-navbar .directory li:not(:first-child) {
  margin-top: 15px;
}
.article-detail .navigation-bar .middle-navbar .observe-end {
  margin-bottom: 15px;
}

/* @midia (min-width: 576px;) {
       .article-detail .detail-container{
      display: flex;
      widows: 80%;
      margin: 0 auto;
   }
    .article-detail .article-introduction{
     flex: 0 0 ;
    }
    }
     @midia (min-width: 768px;) {

     }
     @midia (min-width: 992px;) {

      }
     @midia (min-width: 1200px;) {

       } */
</style>