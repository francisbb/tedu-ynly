<template>
  <header class="site-header">
    <div class="container-box">
      <div class="navbar" v-if="show==false">
        <div class="branding">
          <a class="logo" href="/"
            ><img src="/img/logo/logo.jpg" alt="云南旅游网"
          /></a>
        </div>
        <nav class="main-menu">
          <ul>
            <li>
              <a href="/">首页</a>
            </li>
            <li>
              <a href="yngl.html">云南旅游攻略</a>
              <i class="el-icon-arrow-down"></i>
              <ul class="sub-menu">
                <li>
                  <a href="zjy.html">去云南旅游</a>
                </li>
                <li>
                  <a href="ynxl.html">云南旅游线路</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="ynjd.html">云南旅游景点</a>
              <i class="el-icon-arrow-down"></i>
              <ul class="sub-menu">
                <li>
                  <a href="km.html">昆明旅游景点</a>
                </li>
                <li>
                  <a href="lijiang.html">丽江旅游景点</a>
                </li>
                <li>
                  <a href="dali.html">大理旅游景点</a>
                </li>
                <li>
                  <a href="tcly.html">腾冲旅游景点</a>
                </li>
                <li>
                  <a href="xsbn.html">西双版纳旅游</a>
                </li>
                <li>
                  <a href="xgll.html">香格里拉旅游</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="meishi.html">云南美食</a>
            </li>
            <li>
              <a href="zbjd.html">周边景点</a>
            </li>
            <li>
              <a href="topic.html">旅游问答</a>
            </li>
            <li>
              <a href="youji.html">达人游记</a>
            </li>
            <li>
              <a href="tag.html">旅游标签</a>
            </li>
          </ul>
        </nav>
        <div class="nav-tools">
          <div class="search-open navbar-button" @click="showSearch">
            <a href="javascript:;">
              <i class="el-icon-search"></i>
            </a>
          </div>
          <div class="main-nav">
            <a class="" href="/ucenter" rel="nofollow"
              ><i class="el-icon-user"></i> 登录</a
            >
          </div>
        </div>
      </div>
      <div class="main-search"  v-if="show == true">
        <input
          type="search"
          placeholder="输入关键词进行搜索…"
          autocomplete="on"
          value=""
        />
        <div class="search-close" @click="closeSearch">
          <i class="iconfont icon-guanbi1"></i>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showSearch() {
      if (this.show == false) {
        this.show = true;
      }
    },
    closeSearch() {
      if (this.show == true) {
        this.show = false;
      }
    },
  },
};
</script>

<style>
</style>