<template>
  <div class="ucenter-main">
    <div class="ucenter-content container-box">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="user-header">
            <div class="user-title">
              <img
                src="https://cn.gravatar.com/avatar/7e95f2ffd7c0005c325b48443a80b4c2?s=96"
                alt=""
              />
              <p>用户名</p>
            </div>
            <p class="user-intro">这人很懒，没有留言！</p>
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
                  ><span class="iconfont icon-zhanghaoxinxi"></span> 账号信息</a
                >
              </li>
              <li>
                <a @click="tab(6)" :class="tab_i == 6 ? 'active' : ''"
                  ><span class="iconfont icon-xiugaimima"></span> 修改密码</a
                >
              </li>
              <li>
                <a><span class="iconfont icon-tuichudenglu"></span> 退出登录</a>
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
                <input name="post_title" class="article-title" type="text" placeholder="请输入文章标题..." value="">
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
                  <li>
                    <a href="">
                      <img
                        src="https://www.ynly.cc/wp-content/uploads/2020/11/1605422790-caf2dc1.jpg-scale1.3-1024x768.jpg"
                        alt=""
                      />
                      <div>
                        <p>
                          <span class="meta-time">2020-12-25</span>
                          <span class="count">105 次浏览</span>
                          <span class="meta-comment">0 条评论</span>
                        </p>
                        <h4>重庆到云南丽江大理香格里拉双飞5日游</h4>
                        <p class="article-txt">
                          重庆到云南丽江大理香格里拉双飞5日游 第1天 重庆-丽江
                          丽江机场接机，之后安排入住酒店休息。
                          如果您抵达丽江过早，可以自行前往丽江古城游览。
                          致前往丽江朋友的一封欢迎信…
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        src="https://www.ynly.cc/wp-content/uploads/2020/11/1605422790-caf2dc1.jpg-scale1.3-1024x768.jpg"
                        alt=""
                      />
                      <div>
                        <p>
                          <span class="meta-time">2020-12-25</span>
                          <span class="count">105 次浏览</span>
                          <span class="meta-comment">0 条评论</span>
                        </p>
                        <h4>重庆到云南丽江大理香格里拉双飞5日游</h4>
                        <p class="article-txt">
                          重庆到云南丽江大理香格里拉双飞5日游 第1天 重庆-丽江
                          丽江机场接机，之后安排入住酒店休息。
                          如果您抵达丽江过早，可以自行前往丽江古城游览。
                          致前往丽江朋友的一封欢迎信…
                        </p>
                      </div>
                    </a>
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
                  <li>
                    <a href="">
                      <img
                        src="https://www.ynly.cc/wp-content/uploads/2020/11/1605422790-caf2dc1.jpg-scale1.3-1024x768.jpg"
                        alt=""
                      />
                      <div>
                        <p>
                          <span class="meta-time">2020-12-25</span>
                          <span class="count">105 次浏览</span>
                          <span class="meta-comment">0 条评论</span>
                        </p>
                        <h4>重庆到云南丽江大理香格里拉双飞5日游</h4>
                        <p class="favorite-txt">
                          重庆到云南丽江大理香格里拉双飞5日游 第1天 重庆-丽江
                          丽江机场接机，之后安排入住酒店休息。
                          如果您抵达丽江过早，可以自行前往丽江古城游览。
                          致前往丽江朋友的一封欢迎信…
                        </p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        src="https://www.ynly.cc/wp-content/uploads/2020/11/1605422790-caf2dc1.jpg-scale1.3-1024x768.jpg"
                        alt=""
                      />
                      <div>
                        <p>
                          <span class="meta-time">2020-12-25</span>
                          <span class="count">105 次浏览</span>
                          <span class="meta-comment">0 条评论</span>
                        </p>
                        <h4>重庆到云南丽江大理香格里拉双飞5日游</h4>
                        <p class="favorite-txt">
                          重庆到云南丽江大理香格里拉双飞5日游 第1天 重庆-丽江
                          丽江机场接机，之后安排入住酒店休息。
                          如果您抵达丽江过早，可以自行前往丽江古城游览。
                          致前往丽江朋友的一封欢迎信…
                        </p>
                      </div>
                    </a>
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
                  <li>
                    <p>hi 我也很喜欢云南</p>
                    <div>
                      <span>2021-02-07 19:31:27</span>
                      <span
                        >评论文章：<a target="_blank" href=""
                          >重庆到云南丽江大理香格里拉双飞5日游</a
                        ></span
                      >
                    </div>
                  </li>
                  <li>
                    <p>hi 我也很喜欢云南</p>
                    <div>
                      <span>2021-02-07 19:31:27</span>
                      <span
                        >评论文章：<a target="_blank" href=""
                          >重庆到云南丽江大理香格里拉双飞5日游</a
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
                      <img
                        src="https://cn.gravatar.com/avatar/7e95f2ffd7c0005c325b48443a80b4c2?s=96"
                        alt=""
                      />
                      <a href="">修改头像</a>
                      <input
                        type="file"
                        accept=".jpg, .gif, .png"
                        name="addPic"
                      />
                    </div>
                  </li>
                  <li>
                    <label class="">用户ID</label>
                    <input
                      type="text"
                      class=""
                      name="username"
                      value=""
                      placeholder="您的用户名"
                    />
                  </li>
                  <li>
                    <label class="">用户昵称</label>
                    <input
                      type="text"
                      class=""
                      name="username"
                      value=""
                      placeholder="您的昵称"
                    />
                  </li>
                  <li>
                    <label class="">邮箱</label>
                    <input
                      type="text"
                      class=""
                      name="username"
                      value=""
                      placeholder="您的邮箱"
                    />
                  </li>
                  <li>
                    <label class="">一句话简介</label>
                    <textarea
                      class=""
                      placeholder="您的简介"
                      name="description"
                    ></textarea>
                  </li>
                  <li>
                    <button type="submit">提交</button>
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
                      name="username"
                      value=""
                      placeholder="请输入6位以上密码"
                    />
                  </li>
                  <li>
                    <label class="">重置新密码</label>
                    <input
                      type="text"
                      class=""
                      name="username"
                      value=""
                      placeholder=""
                    />
                  </li>
                  <li>
                    <button type="submit">修改</button>
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
</template>

<script>
import wangEditor from "wangeditor";
export default {
  data() {
    return {
      tab_i: 1, //选项卡参数
      editor: null, //富文本编辑器参数
      editorData: "",
    };
  },
  methods: {
    tab(i) {
      this.tab_i = i;
    },
  },
  mounted() {
    const editor = new wangEditor(`#editor1`);

    // 配置 onchange 回调函数，将数据同步到 vue 中
    editor.config.onchange = (newHtml) => {
      this.editorData = newHtml;
    };

    // 创建编辑器
    editor.create();

    this.editor = editor;
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
}

.ucenter-main .article-post .article-title {
    appearance: none;
    border-bottom: 1px solid #e6e6e6;
    color: #1a1a1a;
    display: block;
    height: 40px;
    line-height: 38px;
    margin-bottom: 10px;
    transition: border-color cubic-bezier(.4,.01,.165,.99);
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

/* my-article start*/
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
/* my-article over*/

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