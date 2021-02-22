<template>
  <div>
    <common-header></common-header>
    <div class="article-list">
      <div class="page-banner" :style="{background:bgimg}">
        <img :src="bgimg" alt="">
        <div class="dark-overlay"></div>
        <div class="container-box">
          <div class="row">
            <div class="page-content">
              <h2>{{title}}</h2>
              <p class="lead">
                {{subtitle}}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="site-content container-box">
        <div class="row"></div>
         <el-row
          :gutter="20"
          class="news-list"
        >
          <el-col
            :span="6"
            v-for="(v, i) of item"
            :key="i"
          >
            <router-link :to="`/article_detail/${v.aid}`">
              <div class="news-box">
                <img
                  :src="`/img/picture/${v.img}`"
                  alt=""
                />
                <div class="news-content">
                  <span>{{v.subtitle}}</span>
                  <h4>
                    <a href="">{{v.title}}</a>
                  </h4>
                  <div class="author-info">
                    <img
                      :src="`/img/ucenter/${v.avater}`"
                      alt=""
                    />
                    <div>
                      <p>{{v.nickname}}</p>
                      <span>{{new Date(v.created_at).toLocaleString()}}</span>
                    </div>
                  </div>
                </div>
                <div class="news-details">
                  <div>
                    <a class="time" href=""
                      ><i class="iconfont icon-rili"></i
                      ><span class="count">{{new Date(v.created_at).toLocaleString()}}</span></a
                    >

                    <a class="view" href=""
                      ><i class="iconfont icon-icon-test"></i
                      ><span class="count">{{v.view}}</span></a
                    >

                    <a class="comment" href=""
                      ><i class="iconfont icon-pinglun"></i
                      ><span class="count">{{v.comment}}</span></a
                    >
                  </div>
                </div>
              </div>
            </router-link>
          </el-col>
        </el-row>
      </div>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item:[],
      bgimg:"",
      title:'',
      subtitle:''
    };
  },
  mounted(){
     // 获取URL中的动态参数        
        let cid = this.$route.params.id;

        // 将此id发送到WEB服务器以获取当前文章的详细信息
        this.axios.get('/article/categorylist',{
            params:{
                id:cid
            }
        }).then(res=>{
            console.log(res);
            this.item = res.data;  
            console.log(this.item[0].bigimg);
            //非空验证
            if(this.item[0].bigimg!=null){
              this.bgimg=require('../../public/img/picture/'+this.item[0].bigimg)
            }
            console.log(this.bgimg);
            this.title=this.item[0].ctitle;
            this.subtitle=this.item[0].csubtitle;

        });
  },
  methods:{

  }
}
</script>

<style>
.article-list .page-banner {
  position: relative;
    padding: 120px 0 95px;
    /* background: url(http://www.ynly.cc/wp-content/uploads/2020/09/QQ图片20200903170131_看图王-scaled.jpg); */
    background-position: center center;
    background-size: cover;
    overflow: hidden;
}

.article-list .page-banner>img{
    position: absolute;
    width: 100%;
    top: 0;
}

.article-list .dark-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #111;
  opacity: 0.4;
}

.article-list .page-content h2 {
  font-size: 26px;
  color: #fff;
}

.article-list .page-content p.lead {
  margin-top: 1rem;
  font-size: 16px;
  color: #eee !important;
}

.article-list .site-content {
  padding-bottom: 50px;
  padding-top: 30px;
}


.article-list .news-box {
  position: relative;
  min-height: 330px;
  overflow: hidden;
  border-radius: 4px;
  margin-bottom: 20px;
}

.article-list .news-box::before {
  content: "";
  background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
}

.article-list .news-box > img {
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
}

.article-list .news-box .news-content {
  position: absolute;
  width: 100%;
  padding: 15px;
  z-index: 11;
  bottom: 37px;
  left: 0;
  right: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
}

.article-list .news-box .news-content > span {
  background: rgba(0, 0, 0, 0.6);
  display: inline-block;
  padding: 4px 8px;
  color: #fff;
  font-size: 12px;
  margin-bottom: 5px;
}

.article-list .news-box .news-content > h4 a {
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

.article-list .news-box .news-content .author-info {
  margin-top: 5px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

.article-list .news-box .news-content .author-info > img {
  border-radius: 50%;
  margin-right: 10px;
  width: 36px;
}

.article-list .news-box .news-content .author-info > div {
  color: #fff;
  flex: 1;
}

.article-list .news-box .news-details {
  z-index: 11;
  border-color: rgba(255, 255, 255, 0.3);
  bottom: 0;
  left: 0;
  position: absolute;
  padding: 0 15px;
}

.article-list .news-box .news-details div {
  width: 100%;
  display: flex;
  align-items: center;
  height: 37px;
}

.article-list .news-box .news-details div a i {
  margin-right: 2px;
}

.article-list .news-box .news-details div a {
  color: #e0e0e0;
  margin-right: 5px;
}

.article-list .news-box .news-details div a:hover {
  color: #fff;
}
</style>