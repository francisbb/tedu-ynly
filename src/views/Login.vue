<template>
  <div class="log-container">
    <div class="login-box">
      <el-row>
        <el-col :span="10">
          <div class="box-left">
            <router-link to="/" class="box-left-logo">
              <img src="../../public/img/login/logo2.jpg" />
            </router-link>
            <h3>欢迎回来，旅途快乐</h3>
            <p>云南旅游网，提供高品质旅游攻略</p>
            <div class="box-left-btn">
              <button @click="toRegister">注册账号</button>
            </div>
          </div>
        </el-col>
        <el-col :span="14">
          <div class="box-right">
            <h3>登录账号</h3>
            <div id="input1">
              <el-input
                v-model="username"
                placeholder="输入用户名/邮箱"
                @blur="checkUsername"
              ></el-input>
            </div>
            <div style="margin: 20px 0"></div>
            <div class="input2">
              <el-input
                placeholder="输入登录密码"
                v-model="password"
                @blur="checkUserpassword"
                show-password
              ></el-input>
            </div>
            <div style="margin: 20px 0"></div>
            <div class="wangji">
              <el-link type="info" :underline="false">忘记密码 ?</el-link>
            </div>
            <div class="box-right-btn">
              <button @click="handel">登录</button>
            </div>
            <p>还没有注册账号 ?</p>
            <div class="dianji">
              <el-link type="info" :underline="false">点击注册</el-link>
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
      password: "",
    };
  },
  methods: {
    toRegister() {
      this.$router.push("/register");
    },
    //判断输入的内容是否是否是正确的格式
    checkUsername() {
      //判断用户名是否合法化
      let usernameRegExp = /^[0-9a-zA-z]{6,20}$/;
      if (usernameRegExp.test(this.username)) {
        return true;
      } else {
        this.$alert("", "用户名格式错误", {
          confirmButtonText: "确定",
          type: "error",
          center: true,
        });
        //alert('用户名格式错误');
        return false;
      }
    },
    //判断用户输入的密码是否格式正确
    checkUserpassword() {
      //判断密码是否合法化
      let passwordRegExp = /^\w{6,20}$/;
      if (passwordRegExp.test(this.password)) {
        return true;
      } else {
        this.$alert("", "密码格式错误", {
          confirmButtonText: "确定",
          type: "error",
          center: true,
        });
        //alert("密码格式错误");
        return false;
      }
    },
    //判断两者是否都正确
    handel() {
      if (this.checkUsername() && this.checkUsername()) {
        this.axios
          .post(
            "/user/login",
            `uname=${this.username}&password=${this.password}`
          )
          .then((res) => {
            console.log(res.data);
            console.log(res.data.code);
            if (res.data.code == 200) {
              let userStr = JSON.stringify(res.data.result[0]);
              window.sessionStorage.setItem("user", userStr);
              this.$router.push("/ucenter");
              this.$router.go(0);
            } else if (res.data.code == 301) {
              this.$alert("", "用户名或密码错误", {
                confirmButtonText: "确定",
                type: "error",
                center: true,
              });
            }
          });
      }
    },
  },
};
</script>
<style scoped>
@import url("../assets/login.css");
.log-container {
  width: 100%;
  height: 100vh;
  background-color: #797e8a;
  position: relative;
}
.log-container .login-box {
  width: 800px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -400px;
  margin-top: -10%;
}
.log-container .login-box .box-left {
  width: 100%;
  height: 100%;
  background-image: url("../../public/img/login/login_bg_img.jpg");
  text-align: center;
  color: #fbfbfb;
  padding: 26.12% 0;
}
.log-container .login-box .box-left .box-left-logo {
  display: inline-block;
  width: 95px;
  height: 30px;
  margin: 0 0 15px;
}
.log-container .login-box .box-left .box-left-logo > img {
  width: 100%;
  height: 100%;
}
.log-container .login-box .box-left .box-left-btn > button {
  display: inline-block;
  width: 166px;
  height: 40px;
  outline: 0;
  padding: 0;
  border: 0;
  border: 1px solid #fff;
  color: #fff;
  padding: 10px 50px 8px;
  border-radius: 50px;
  background-color: transparent;
  font-size: 15px;
}
.log-container .login-box .box-left .box-left-btn > button:hover {
  color: #c41230;
  background-color: #e8e8e8;
  cursor: pointer;
}
.log-container .login-box .box-left > h3 {
  font-size: 22px;
  margin: 0 0 15px;
  text-align: center;
}
.log-container .login-box .box-left > p {
  font-size: 16px;
  margin: 0 0 37px;
}
.log-container .login-box .box-right {
  width: 100%;
  height: 100%;
  margin-left: 0;
  margin-top: 0;
  padding: 30px 80px;
  text-align: center;
  margin-bottom: 32px;
  background-color: #fff;
}
.log-container .login-box .box-right > h3 {
  font-size: 22px;
  color: #717171;
  margin: 0 0 25px;
  text-align: center;
}
.log-container .login-box .box-right > p {
  display: inline-block;
  font-size: 14px;
  color: #717171;
}
.log-container .login-box .box-right .dianji {
  display: inline-block;
  font-size: 14px !important;
  color: #717171 !important;
  margin-left: 10px;
}
.log-container .login-box .box-right .box-right-btn > button {
  display: inline-block;
  width: 134px;
  height: 37px;
  outline: 0;
  padding: 0;
  border: 0;
  border: 1px solid #fff;
  color: #fff;
  padding: 8px 50px 10px 50px;
  border-radius: 50px;
  background-color: #f0151f;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-top: 46px;
  margin-left: -61px;
  margin-bottom: 25px;
}
.log-container .login-box .box-right .box-right-btn > button:hover {
  color: #fff;
  background-color: #dc0a18;
  cursor: pointer;
}
.log-container .login-box .box-right .wangji {
  float: left;
}
</style>