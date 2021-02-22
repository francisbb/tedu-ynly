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
              <a href="/article_list/1">云南旅游攻略</a>
            </li>
            <li>
              <a>云南旅游景点</a>
              <i class="el-icon-arrow-down"></i>
              <ul class="sub-menu">
                <li>
                  <a href="/article_list/2">昆明旅游景点</a>
                </li>
                <li>
                  <a href="/article_list/3">丽江旅游景点</a>
                </li>
                <li>
                  <a href="/article_list/4">大理旅游景点</a>
                </li>
                <li>
                  <a href="/article_list/5">腾冲旅游景点</a>
                </li>
                <li>
                  <a href="/article_list/6">西双版纳旅游</a>
                </li>
                <li>
                  <a href="/article_list/7">香格里拉旅游</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/article_list/8">云南美食</a>
            </li>
            <li>
              <a href="/article_list/9">周边景点</a>
            </li>
            <li>
              <a href="/article_list/10">达人游记</a>
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
            <a class="" href="/login" rel="nofollow" v-if="!islogin"
              ><i class="el-icon-user"></i> 登录</a
            >
            <a class="" href="/ucenter" rel="nofollow" v-else
              ><i class="el-icon-user"></i>用户中心</a
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
      islogin:this.$store.state.islogin
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