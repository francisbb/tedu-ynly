<template>
  <div class="reg-container">
    <div class="login-box">
      <el-row>
        <el-col :span="10">
          <div class="box-left">
            <router-link to="/" class="box-left-logo">
              <img src="../../public/img/logo/logo.jpg" />
            </router-link>
            <h3>欢迎回来，旅途快乐</h3>
            <p>云南旅游网，提供高品质旅游攻略</p>
            <div class="box-left-btn">
              <button @click="toLogin">登录已有账号</button>
            </div>
          </div>
        </el-col>
        <el-col :span="14">
          <div class="box-right">
            <h3>新用户注册</h3>
            <div class="input-group username">
              <el-input
                v-model="username"
                auto-complete="off"
                placeholder="输入用户名"
                @blur="checkUsername"
              ></el-input>
            </div>
            <div class="input-group email">
              <el-input
                type="email"
                placeholder="输入常用邮箱"
                v-model="email"
                @blur="check_email"
              ></el-input>
            </div>
            <div class="input-group email2">
              <el-row>
                <el-col :span="16">
                  <el-input
                    type="text"
                    placeholder="输入验证码"
                    v-model="verification_code"
                  ></el-input>
                </el-col>
                <el-col :span="8">
                  <div class="code"><span>获取验证码</span></div>
                </el-col>
              </el-row>
            </div>
            <div class="input-group password">
              <el-input
                type="password"
                placeholder="输入密码"
                v-model="password"
                @blur="checkPassword"
              ></el-input>
            </div>
            <div class="input-group password2">
              <el-input
                type="password"
                placeholder="重复输入密码"
                v-model="password2"
                @blur="checkConPassword"
              ></el-input>
            </div>
            <div class="checkbox">
              <input
                class="inpt"
                id="tick"
                type="checkbox"
                name="choose"
                value="1"
                :checked='choose'
              />
              <label for="tick">确认并接受</label>
            </div>
            <div class="box-right-btn">
              <button @click="handle">立即注册</button>
            </div>
            <div class="box-right-p">
              <p>已有账号？ <el-link :underline="false">点击登录</el-link></p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      password2: "",
      checked: false,
      choose:false,
      verification_code: "",
    };
  },
  methods: {
    toLogin(){
      this.$router.push('/login');
    },
    //验证用户名是否正确
     checkUsername() {
      let usernameRegExp = /^[0-9a-zA-Z]{6,20}$/;
      if (usernameRegExp.test(this.username)) {        
        return true;        
      } else {
        //短消息提示框
        this.$alert("", "用户名格式错误", {
          confirmButtonText: "确定",
          type: "error",
          center: true,
        });
        return false;
      }
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
    //检测邮箱
    check_email() {
      // let reg = /^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/;
      let reg=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      if (reg.test(this.email)) {
        this.error_email = false;
        return true;
      } else {
        //短消息提示框
        this.$alert("", "输入邮箱格式不正确", {
          confirmButtonText: "确定",
          type: "error",
          center: true,
        });
        return false;
      }
    },
    // 用户注册处理函数
    handle() {
      console.log(1)
      if(this.checkUsername() && this.checkPassword() && this.checkConPassword()&&this.check_email()){
        //声明一个对象来保存用户名和密码
        this.axios.post('/user/reg',`uname=${this.username}&password=${this.password}&email=${this.email}`)
        .then(res=>{
          if(res.data.code==200){
            this.$router.push('/login')
          }else{
             //短消息提示框
              this.$alert("", "格式不正确", {
                confirmButtonText: "确定",
                type: "error",
                center: true,
              });
          }
        })
      }
    },

  },
  mounted() {
    (function () {
      var click_cnt = 0;
      var content = [
        "云南旅游网",
        "云南丽江旅游",
        "云南旅游景点",
        "云南旅游路线",
        "丽江旅游景点",
        "大理旅游攻略必去景点",
        "昆明旅游攻略景点大全",
        "云南丽江旅游",
        "云南旅游",
        "云南旅游攻略",
        "❤",
      ];
      var $html = document.getElementsByTagName("html")[0];
      var $body = document.getElementsByTagName("body")[0];
      function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
      $html.onclick = function (e) {
        var $elem = document.createElement("b");
        $elem.style.color = "#f40c4a";
        $elem.style.zIndex = 9999;
        $elem.style.position = "absolute";
        $elem.style.select = "none";
        $elem.style.userSelect = "none";
        var x = e.pageX;
        var y = e.pageY;
        $elem.style.left = x - 10 + "px";
        $elem.style.top = y - 20 + "px";
        clearInterval(anim);
        if (click_cnt > content.length - 1) {
          click_cnt = 0;
        }
        $elem.innerText = content[click_cnt];
        // 按序展示
        ++click_cnt;
        // 随机展示
        // click_cnt = getRandomInt(content.length);
        $elem.style.fontSize = Math.random() * 10 + 8 + "px";
        var increase = 0;
        var anim;
        setTimeout(function () {
          anim = setInterval(function () {
            if (++increase == 150) {
              clearInterval(anim);
              $body.removeChild($elem);
            }
            $elem.style.top = y - 20 - increase + "px";
            $elem.style.opacity = (150 - increase) / 120;
          }, 8);
        }, 70);
        $body.appendChild($elem);
      };
    })();
  },
};
</script>
<style scoped>
@import url("../assets/register.css");
.reg-container {
  width: 100%;
  height: 100vh;
  background-color: #797e8a;
  position: relative;
}
.reg-container .login-box {
  width: 800px;
  position: absolute;
  top: 30%;
  left: 50%;
  margin-left: -400px;
  margin-top: -10%;
}
.reg-container .login-box .box-left {
  width: 100%;
  height: 100%;
  background-image: url("../../public/img/register/login_bg_img.jpg");
  text-align: center;
  color: #fbfbfb;
  padding: 52.3% 0;
}

.reg-container .login-box .box-left .box-left-logo {
  display: inline-block;

  width: 95px;
  height: 30px;
  margin: 0 0 15px;
}
.reg-container .login-box .box-left .box-left-logo > img {
  width: 100%;
  height: 100%;
}
.reg-container .login-box .box-left .box-left-btn > button {
  display: inline-block;
  width: 198px;
  height: 40px;
  outline: 0;
  padding: 0;
  border: 0;
  border: 1px solid #fff;
  color: #fff;
  padding: 10px 50px 8px;
  border-radius: 50px;
  background-color: transparent;
}
.reg-container .login-box .box-left .box-left-btn > button:hover {
  color: #c41230;
  background-color: #e8e8e8;
  cursor: pointer;
  /* 光标变成手型 */
}
.reg-container .login-box .box-left > h3 {
  font-size: 22px;
  margin: 0 0 15px;
}
.reg-container .login-box .box-left > p {
  font-size: 16px;
  margin: 0 0 37px;
}
.reg-container .login-box .box-right {
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 30px 80px;
}
.reg-container .login-box .box-right > h3 {
  text-align: center;
  font-size: 22px;
  margin: 0 0 25px;
  color: #717171;
}
.reg-container .login-box .box-right .input-group {
  margin-bottom: 15px;
}
.reg-container .login-box .box-right .input-group .code {
  width: 101px;
  height: 40px;
  background-color: #eff0f2;
  border-left: 1px solid #d2d8d8;
  text-align: center;
  line-height: 40px;
  border-radius: 0 3px;
  color: #343642;
}

.reg-container .login-box .box-right .input-group .email2 {
  background-color: #eff0f2;
}
.reg-container .login-box .box-right .checkbox {
  margin: 15px 0 25px;
}
.reg-container .login-box .box-right .box-right-btn {
  text-align: center;
}
.reg-container .login-box .box-right .box-right-btn > button {
  display: inline-block;
  width: 168px;
  height: 37px;
  border-radius: 50px;
  background: #f0151f;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 20px;
}
.reg-container .login-box .box-right .box-right-btn > button:hover {
  background-color: #c41230;
  cursor: pointer;
  /* 光标变成手型 */
}
.reg-container .login-box .box-right .box-right-p {
  display: block;
  text-align: center;
  color: #717171 !important;
  margin: 0 0 15px;
}
.reg-container .login-box .box-right .box-right-p > p > :hover {
  color: #999;
}
.reg-container .login-box .box-right .checkbox {
  width: 100%;
  height: 30px;
  position: relative;
}
.reg-container .login-box .box-right .checkbox > label {
  position: absolute;
  left: 25px;
  top: 3px;
  color: #717171;
}
.reg-container .login-box .box-right .checkbox > input,
.reg-container .login-box .box-right .checkbox > label {
  display: inline-block;
  vertical-align: bottom;
}
.reg-container .login-box .box-right .checkbox .inpt {
  height: 17px;
  width: 17px;
  margin: 0 10px 0 0;
  border-radius: 3px;
}
</style>
