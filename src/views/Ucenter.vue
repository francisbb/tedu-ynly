<template>
  <div>
    <common-header></common-header>
    <div class="ucenter-main">
      <div class="ucenter-content container-box">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="user-header">
              <div class="user-title">
                <img :src="`/img/ucenter/${avater}`" alt="" />
                <p>{{ nickname }}</p>
              </div>
              <p class="user-intro">{{ intro }}</p>
            </div>
            <div class="user-nav">
              <h5>用户中心</h5>
              <ul>
                <li>
                  <a @click="tab(1)" :class="tab_i == 1 ? 'active' : ''"
                    ><span class="iconfont icon-ykq_tab_tougao"></span>
                    文章投稿</a
                  >
                </li>
                <li>
                  <a @click="tab(2)" :class="tab_i == 2 ? 'active' : ''"
                    ><span class="iconfont icon-wenzhang"></span> 我的文章</a
                  >
                </li>
                <li>
                  <a @click="tab(3)" :class="tab_i == 3 ? 'active' : ''"
                    ><span class="iconfont icon-collection"></span> 我的收藏</a
                  >
                </li>
                <li>
                  <a @click="tab(4)" :class="tab_i == 4 ? 'active' : ''"
                    ><span class="iconfont icon-pinglun"></span> 我的评论</a
                  >
                </li>
                <li>
                  <a @click="tab(5)" :class="tab_i == 5 ? 'active' : ''"
                    ><span class="iconfont icon-zhanghaoxinxi"></span>
                    账号信息</a
                  >
                </li>
                <li>
                  <a @click="tab(6)" :class="tab_i == 6 ? 'active' : ''"
                    ><span class="iconfont icon-xiugaimima"></span> 修改密码</a
                  >
                </li>
                <li>
                  <a @click="logout"
                    ><span class="iconfont icon-tuichudenglu"></span>
                    退出登录</a
                  >
                </li>
              </ul>
            </div>
          </el-col>
          <el-col :span="18">
            <div class="user-panels">
              <!-- article-post start -->
              <div class="article-post" v-show="tab_i == 1">
                <div class="common-title">
                  <h3>文章投稿</h3>
                </div>
                <div class="article-editor">
                  <input
                    name="post_title"
                    class="article-title"
                    type="text"
                    placeholder="请输入文章标题..."
                    value=""
                  />
                  <div id="editor1"></div>
                  <!-- <h3>内容预览</h3>
                <textarea
                  name=""
                  id=""
                  cols="170"
                  rows="20"
                  readonly
                  v-model="editorData"
                ></textarea> -->
                  <div class="content-editor">
                    <div class="category">
                      <b>选择文章分类</b>
                      <div class="package">
                        <select name="article-cate" title="请选择所属分类">
                          <option value="0">未分类</option>
                          <option value="1">丽江旅游景点</option>
                          <option value="2">云南周边景点</option>
                          <option value="3">云南旅游攻略</option>
                          <option value="4">云南旅游景点</option>
                          <option value="5">云南旅游线路</option>
                          <option value="6">云南旅游美食</option>
                          <option value="7">去云南旅游</option>
                          <option value="8">大理旅游景点</option>
                          <option value="9">昆明旅游景点</option>
                          <option value="10">腾冲旅游景点</option>
                          <option value="11">西双版纳旅游</option>
                          <option value="12">达人游记</option>
                          <option value="13">香格里拉旅游</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="tijiao">
                    <input type="submit" name="submit" value="提交文章" />
                  </div>
                </div>
              </div>
              <!-- article-post over -->

              <!-- my-article start -->
              <div class="my-article" v-show="tab_i == 2">
                <div class="common-title">
                  <h3>我的文章</h3>
                </div>
                <div class="myarticle-list">
                  <ul>
                    <li v-for="(v, i) of myArticle" :key="i">
                      <router-link :to="`/article_detail/${v.aid}`">
                        <img :src="`/img/picture/${v.img}`" alt="" />
                        <div>
                          <p>
                            <span class="meta-time">{{
                              new Date(v.created_at).toLocaleString()
                            }}</span>
                            <span class="count">{{ v.view }}次浏览</span>
                            <span class="meta-comment"
                              >{{ v.comment }}条评论</span
                            >
                          </p>
                          <h4>{{ v.title }}</h4>
                          <p class="article-txt">
                            {{ v.subtitle }}
                          </p>
                        </div>
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- my-article over -->

              <!-- my-favorite start -->
              <div class="my-favorite" v-show="tab_i == 3">
                <div class="common-title">
                  <h3>我的收藏</h3>
                </div>
                <div class="myfavorite-list">
                  <ul>
                    <li v-for="(v, i) of myFavorite" :key="i">
                      <router-link :to="`/article_detail/${v.aid}`">
                        <img :src="`/img/picture/${v.img}`" alt="" />
                        <div>
                          <p>
                            <span class="meta-time">{{
                              new Date(v.created_at).toLocaleString()
                            }}</span>
                            <span class="count">{{ v.view }}次浏览</span>
                            <span class="meta-comment"
                              >{{ v.comment }}条评论</span
                            >
                          </p>
                          <h4>{{ v.title }}</h4>
                          <p class="favorite-txt">
                            {{ v.subtitle }}
                          </p>
                        </div>
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- my-favorite over -->

              <!-- comment start -->
              <div class="comment" v-show="tab_i == 4">
                <div class="common-title">
                  <h3>我的评论</h3>
                </div>
                <div class="comment-list">
                  <ul>
                    <li v-for="(v, i) of myComment" :key="i">
                      <p>{{ v.comment_content }}</p>
                      <div>
                        <span>{{
                          new Date(v.created_at).toLocaleString()
                        }}</span>
                        <span
                          >评论文章：<router-link
                            :to="`/article_detail/${v.aid}`"
                            >{{ v.title }}</router-link
                          ></span
                        >
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- comment over -->

              <!-- userinfo start -->
              <div class="userinfo" v-show="tab_i == 5">
                <div class="common-title">
                  <h3>账号信息</h3>
                </div>
                <div class="userinfo-box">
                  <ul>
                    <li>
                      <div class="avatar">
                        <img :src="`/img/ucenter/${avater}`" alt="" />
                        <a href="">修改头像</a>
                        <input
                          type="file"
                          accept=".jpg, .gif, .png"
                          name="addPic"
                        />
                      </div>
                    </li>
                    <li>
                      <label class="">用户名</label>
                      <input
                        type="text"
                        class=""
                        name="username"
                        v-model="username"
                        placeholder="您的用户名"
                      />
                    </li>
                    <li>
                      <label class="">用户昵称</label>
                      <input
                        type="text"
                        class=""
                        name="nickname"
                        v-model="nickname"
                        placeholder="您的昵称"
                      />
                    </li>
                    <li>
                      <label class="">邮箱</label>
                      <input
                        type="text"
                        class=""
                        name="email"
                        v-model="email"
                        placeholder="您的邮箱"
                      />
                    </li>
                    <li>
                      <label class="">一句话简介</label>
                      <textarea
                        class=""
                        placeholder="您的简介"
                        name="description"
                        v-model="intro"
                      ></textarea>
                    </li>
                    <li>
                      <button type="submit" @click="infoUpdate">提交</button>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- userinfo over -->

              <!-- changepw start -->
              <div class="changepw" v-show="tab_i == 6">
                <div class="common-title">
                  <h3>账号信息</h3>
                </div>
                <div class="changepw-box">
                  <ul>
                    <li>
                      <label class="">输入新密码</label>
                      <input
                        type="text"
                        class=""
                        name="password"
                        v-model="password"
                        placeholder="请输入6位以上密码"
                        @blur="checkPassword"
                      />
                    </li>
                    <li>
                      <label class="">确认新密码</label>
                      <input
                        type="text"
                        class=""
                        name="checkpassword"
                        v-model="password2"
                        placeholder=""
                        @blur="checkConPassword"
                      />
                    </li>
                    <li>
                      <button type="submit" @click="handle">修改</button>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- changepw over -->
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
import wangEditor from "wangeditor";
export default {
  data() {
    return {
      tab_i: 1, //选项卡参数
      editor: null, //富文本编辑器参数
      editorData: "",

      //我的文章参数
      myArticle: [],

      //我的收藏参数
      myFavorite: [],

      //我的评论参数
      myComment: [],

      //个人信息参数
      username: "",
      email: "",
      nickname: "",
      intro: "",
      avater: "",

      //修改个人密码参数
      password: "",
      password2: "",
    };
  },
  methods: {
    tab(i) {
      this.tab_i = i;
    },
    logout() {
      console.log(this.user);
      window.sessionStorage.removeItem("user");
      this.$router.push("/");
      this.$router.go(0);
    },

    // 发送HTTP请求以更新我的信息数据
    infoUpdate() {
      let obj = {
        uid: this.$store.state.user.uid,
        uname: this.username,
        email: this.email,
        nickname: this.nickname,
        intro: this.intro,
      };

      this.axios
        .post("/ucenter/updateUserinfo", this.qs.stringify(obj))
        .then((res) => {
          console.log(res);
        });
    },

    //验证密码是否正确
    checkPassword() {
      let passwordRegExp = /^\w{6,20}$/;
      if (passwordRegExp.test(this.password)) {
        return true;
      } else {
        //短消息提示框
        this.$alert("", "密码格式错误", {
          confirmButtonText: "确定",
          type: "error",
          center: true,
        });
        return false;
      }
    },
    checkConPassword() {
      if (this.password == this.password2) {
        return true;
      } else {
        //短消息提示框
        this.$alert("", "输入密码不一致", {
          confirmButtonText: "确定",
          type: "error",
          center: true,
        });
        //alert('输入密码不一致');
        return false;
      }
    },

    // 用户注册处理函数
    handle() {
      console.log(1);
      let obj = {
        uid: this.$store.state.user.uid,
        upwd: this.password,
      };
      if (this.checkPassword() && this.checkConPassword()) {
        this.axios
          .post("/ucenter/changePassword", this.qs.stringify(obj))
          .then((res) => {
            console.log(res);
          });
      }else{
        //短消息提示框
        this.$alert("", "密码格式错误", {
          confirmButtonText: "确定",
          type: "error",
          center: true,
        });
      }
    },
  },
  mounted() {
    // 创建富文本编辑器

    const editor = new wangEditor(`#editor1`);

    // 配置 onchange 回调函数，将数据同步到 vue 中
    editor.config.onchange = (newHtml) => {
      this.editorData = newHtml;
    };
    // 创建编辑器
    editor.create();
    this.editor = editor;

    // 发送HTTP请求以获取我的文章数据
    this.axios
      .get("/ucenter/myArticle", {
        params: {
          uid: this.$store.state.user.uid,
        },
      })
      .then((res) => {
        console.log(res);
        this.myArticle = res.data;
      });

    // 发送HTTP请求以获取我的收藏文章数据
    this.axios
      .get("/ucenter/myFavorite", {
        params: {
          uid: this.$store.state.user.uid,
        },
      })
      .then((res) => {
        console.log(res);
        this.myFavorite = res.data;
      });

    // 发送HTTP请求以获取我的评论数据
    this.axios
      .get("/ucenter/myComment", {
        params: {
          uid: this.$store.state.user.uid,
        },
      })
      .then((res) => {
        console.log(res);
        this.myComment = res.data;
      });

    // 发送HTTP请求以获取我的信息数据
    this.axios
      .get("/ucenter/userinfo", {
        params: {
          uid: this.$store.state.user.uid,
        },
      })
      .then((res) => {
        console.log(res);
        this.username = res.data.rs[0].uname;
        this.nickname = res.data.rs[0].nickname;
        this.avater = res.data.rs[0].avater;
        this.intro = res.data.rs[0].intro;
        this.email = res.data.rs[0].email;
        console.log(res, this.username, this.nickname);
      });
  },
  beforeDestroy() {
    // 调用销毁 API 对当前编辑器实例进行销毁
    this.editor.destroy();
    this.editor = null;
  },
};
</script>

<style>
.ucenter-main .ucenter-content {
  margin-top: 30px;
  margin-bottom: 50px;
}

.ucenter-main .ucenter-content .user-header {
  background: url(https://www.ynly.cc/wp-content/themes/Autumn-Pro/static/images/login_bg_img.jpg)
    no-repeat center center;
  background-size: cover;
  background-color: #eceff1;
  position: relative;
  height: 180px;
  margin-bottom: 25px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  padding: 0 20px;
}

.ucenter-main .ucenter-content .user-title {
  padding-top: 40px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

.ucenter-main .ucenter-content .user-title img {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  display: inline-block;
  margin-right: 15px;
}

.ucenter-main .ucenter-content .user-title > p {
  font-size: 18px;
  font-weight: 700;
  color: #fff;
}

.ucenter-main .ucenter-content .user-intro {
  margin: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: block;
  line-height: 1.4;
  clear: both;
  color: #fff;
  background: rgba(0, 0, 0, 0.2);
  padding: 15px;
}

.ucenter-main .user-nav {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  position: relative;
}

.ucenter-main .user-nav > h5 {
  border-bottom: 1px solid #f4f4f4;
  color: #47525d;
  font-size: 18px;
  letter-spacing: 0.5px;
  line-height: 1;
  padding: 15px 20px;
  font-weight: 700;
}

.ucenter-main .user-nav > ul {
  padding: 0 20px;
}
.ucenter-main .user-nav > ul li {
  border-bottom: 1px solid #f1f1f1;
  padding: 15px 0;
  transition: all 0.3s ease-in-out;
}

.ucenter-main .user-nav > ul li a {
  color: #777;
  cursor: pointer;
}

.ucenter-main .user-nav > ul li a.active::before {
  content: "";
  width: 3px;
  height: 18px;
  margin-top: 2px;
  background: #333;
  float: left;
  margin-right: 10px;
}

.ucenter-main .user-nav > ul li a.active {
  color: #333;
}

/* .ucenter-main .user-nav > ul li:hover {
  text-indent: 8px;
} 

.ucenter-main .user-nav > ul li:hover a {
  color: #333;
}*/

.ucenter-main .user-panels {
  background-color: #fff;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  width: 100%;
}

.ucenter-main .common-title {
  padding-bottom: 15px;
  position: relative;
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
}

.ucenter-main .common-title h3 {
  font-size: 16px;
  letter-spacing: 0.5px;
}

.ucenter-main .common-title::after {
  content: "";
  position: absolute;
  bottom: -2px;
  width: 32px;
  height: 3px;
  background: #333;
}

/* article-post start*/

.ucenter-main .article-post #editor1 {
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
}

.ucenter-main .article-post .article-title {
  appearance: none;
  border-bottom: 1px solid #e6e6e6;
  color: #1a1a1a;
  display: block;
  height: 40px;
  line-height: 38px;
  margin-bottom: 10px;
  transition: border-color cubic-bezier(0.4, 0.01, 0.165, 0.99);
  width: 100%;
}

.ucenter-main .article-post .category select {
  background-color: #fff;
  border: 1px solid #f4f4f4;
  color: #1a1a1a;
  height: 40px;
  line-height: 40px;
  padding: 0 14px;
  width: 100%;
  margin-top: 20px;
}

.ucenter-main .article-post .tijiao input {
  margin-top: 20px;
  background-color: #111;
  border: 1px solid #111;
  border-radius: 30px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 12px;
  letter-spacing: 1px;
  padding: 10px 20px;
  text-align: center;
}

/* article-post over*/

/* my-article start*/
.ucenter-main .myarticle-list li {
  border-bottom: 1px solid #ddd;
  padding: 20px 0;
}

.ucenter-main .myarticle-list li:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

.ucenter-main .myarticle-list li > a {
  display: flex;
  flex-flow: row nowrap;
}

.ucenter-main .myarticle-list li img {
  border-radius: 3px;
  flex-shrink: 0;
  height: 100px;
  margin-bottom: 0;
  margin-right: 20px;
  overflow: hidden;
  width: 100px;
}

.ucenter-main .myarticle-list li span {
  display: inline-block;
  margin-right: 4px;
  color: #aaa;
  font-size: 12px;
  font-weight: 700;
  line-height: 19px;
  margin-bottom: 4px;
}

.ucenter-main .myarticle-list li span::after {
  content: "|";
  display: inline-block;
  margin-left: 4px;
}

.ucenter-main .myarticle-list li h4 {
  font-weight: normal;
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  margin-bottom: 5px;
}

.ucenter-main .myarticle-list li .article-txt {
  color: #aaa;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
/* my-article over*/

/* my-favorite start*/
.ucenter-main .myfavorite-list li {
  border-bottom: 1px solid #ddd;
  padding: 20px 0;
}

.ucenter-main .myfavorite-list li:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

.ucenter-main .myfavorite-list li > a {
  display: flex;
  flex-flow: row nowrap;
}

.ucenter-main .myfavorite-list li img {
  border-radius: 3px;
  flex-shrink: 0;
  height: 100px;
  margin-bottom: 0;
  margin-right: 20px;
  overflow: hidden;
  width: 100px;
}

.ucenter-main .myfavorite-list li span {
  display: inline-block;
  margin-right: 4px;
  color: #aaa;
  font-size: 12px;
  font-weight: 700;
  line-height: 19px;
  margin-bottom: 4px;
}

.ucenter-main .myfavorite-list li span::after {
  content: "|";
  display: inline-block;
  margin-left: 4px;
}

.ucenter-main .myfavorite-list li h4 {
  font-weight: normal;
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  margin-bottom: 5px;
}

.ucenter-main .myfavorite-list li .favorite-txt {
  color: #aaa;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
/* my-favorite over*/

/* comment start */
.ucenter-main .comment-list ul li {
  padding: 20px 0;
  border-bottom: 1px solid #eee;
}

.ucenter-main .comment-list ul li:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}

.ucenter-main .comment-list ul li > p {
  color: #333;
  font-size: 16px;
  margin-bottom: 5px;
}

.ucenter-main .comment-list ul li > div span {
  color: #bababa;
  margin-right: 15px;
}

.ucenter-main .comment-list ul li > div span a {
  color: #bababa;
}

/* comment over*/

/* userinfo start */
.ucenter-main .userinfo ul {
  margin-top: 40px;
}

.ucenter-main .userinfo li {
  width: 45%;
  margin-bottom: 20px;
  margin-left: 20px;
}

.ucenter-main .userinfo li .avatar {
  display: flex;
  align-items: center;
  position: relative;
}

.ucenter-main .userinfo li .avatar > img {
  width: 80px;
  height: 80px;
  margin-right: 20px;
  border: 3px solid #fff;
  border-radius: 50%;
}

.ucenter-main .userinfo li .avatar > input {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.ucenter-main .userinfo li > input {
  width: 100%;
  margin-top: 10px;
  padding: 6px 12px;
  background-color: #fff;
  border: 1px solid #e4e4e4;
  transition: all ease-in-out 0.15s;
  height: 45px;
  line-height: 45px;
}

.ucenter-main .userinfo li > textarea {
  width: 100%;
  margin-top: 10px;
  padding: 6px 12px;
  background-color: #fff;
  border: 1px solid #e4e4e4;
  transition: all ease-in-out 0.15s;
  height: 120px;
  resize: vertical;
  font-family: inherit;
}

.ucenter-main .userinfo li > button {
  background-color: #111;
  border-radius: 30px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 12px;
  letter-spacing: 1px;
  padding: 10px 26px;
  text-align: center;
}

/* userinfo over*/

/* changepw start */
.ucenter-main .changepw ul {
  margin-top: 40px;
}

.ucenter-main .changepw li {
  width: 45%;
  margin-bottom: 20px;
  margin-left: 20px;
}

.ucenter-main .changepw li > input {
  width: 100%;
  margin-top: 10px;
  padding: 6px 12px;
  background-color: #fff;
  border: 1px solid #e4e4e4;
  transition: all ease-in-out 0.15s;
  height: 45px;
  line-height: 45px;
}

.ucenter-main .changepw li > button {
  background-color: #111;
  border-radius: 30px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 12px;
  letter-spacing: 1px;
  padding: 10px 26px;
  text-align: center;
}

/* changepw over */
</style>