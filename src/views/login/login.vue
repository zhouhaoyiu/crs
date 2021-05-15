<template>
  <div class="sign">
    <div class="login-wrap" v-show="showLogin">
      <h3>请登录</h3>
      <p v-show="showTishi">{{ tishi }}</p>
      <input type="text" placeholder="请输入用户名" v-model="username" />
      <input type="password" placeholder="请输入密码" v-model="password" />
      <!-- <button v-on:click="login">登录</button> -->
      <div class="btn-cont">
        <a class="btn" href="#" v-on:click="login">
          登录
          <span class="line-1"></span>
          <span class="line-2"></span>
          <span class="line-3"></span>
          <span class="line-4"></span>
        </a>
      </div>
      <span v-on:click="ToRegister">没有账号？马上注册</span>
    </div>

    <div class="register-wrap" v-show="showRegister">
      <h3>注册</h3>
      <p v-show="showTishi">{{ tishi }}</p>
      <input type="text" placeholder="请输入用户名" v-model="newUsername" />
      <input type="password" placeholder="请输入密码" v-model="newPassword" />
      <!-- <button v-on:click="register">注册</button> -->
      <div class="btn-cont">
        <a class="btn" href="#" v-on:click="register">
          注册
          <span class="line-1"></span>
          <span class="line-2"></span>
          <span class="line-3"></span>
          <span class="line-4"></span>
        </a>
      </div>
      <span v-on:click="ToLogin">已有账号？马上登录</span>
    </div>
  </div>
</template>

<style>
.sign {
  height: 100%;
  width: 100%;
  padding-top: 230px;
  background: rgb(47, 79, 79);
}
.login-wrap,
.register-wrap {
  text-align: center;
}
h3 {
  color: rgb(175, 238, 238);
}
input {
  display: block;
  width: 250px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  margin-bottom: 10px;
  outline: none;
  border: 1px solid #888;
  padding: 10px;
  box-sizing: border-box;
}
p {
  color: red;
}
/* button {
  display: block;
  width: 250px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  border: none;
  background-color: #41b883;
  color: #fff;
  font-size: 16px;
  margin-bottom: 5px;
} */

/* submit-btn动效 */
.btn-cont {
  text-align: center;
  margin: 25px 0;
}
.btn-cont .btn {
  position: relative;
  padding: 12px 70px;
  border: 1px solid white;
  color: white;
  text-decoration: none;
  font-size: 1.125em;
  font-family: "Open Sans", sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  -webkit-font-smoothing: antialiased;
}
.btn-cont .btn:hover {
  border: none;
}
.btn-cont .btn:hover .line-1 {
  -webkit-animation: move1 1500ms infinite ease;
  animation: move1 1500ms infinite ease;
}
.btn-cont .btn:hover .line-2 {
  -webkit-animation: move2 1500ms infinite ease;
  animation: move2 1500ms infinite ease;
}
.btn-cont .btn:hover .line-3 {
  -webkit-animation: move3 1500ms infinite ease;
  animation: move3 1500ms infinite ease;
}
.btn-cont .btn:hover .line-4 {
  -webkit-animation: move4 1500ms infinite ease;
  animation: move4 1500ms infinite ease;
}
.btn-cont .line-1 {
  content: "";
  display: block;
  position: absolute;
  width: 1px;
  background-color: white;
  left: 0;
  bottom: 0;
}
.btn-cont .line-2 {
  content: "";
  display: block;
  position: absolute;
  height: 1px;
  background-color: white;
  left: 0;
  top: 0;
}
.btn-cont .line-3 {
  content: "";
  display: block;
  position: absolute;
  width: 1px;
  background-color: white;
  right: 0;
  top: 0;
}
.btn-cont .line-4 {
  content: "";
  display: block;
  position: absolute;
  height: 1px;
  background-color: white;
  right: 0;
  bottom: 0;
}
@-webkit-keyframes move1 {
  0% {
    height: 100%;
    bottom: 0;
  }
  54% {
    height: 0;
    bottom: 100%;
  }
  55% {
    height: 0;
    bottom: 0;
  }
  100% {
    height: 100%;
    bottom: 0;
  }
}
@keyframes move1 {
  0% {
    height: 100%;
    bottom: 0;
  }
  54% {
    height: 0;
    bottom: 100%;
  }
  55% {
    height: 0;
    bottom: 0;
  }
  100% {
    height: 100%;
    bottom: 0;
  }
}
@-webkit-keyframes move2 {
  0% {
    width: 0;
    left: 0;
  }
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 100%;
  }
}
@keyframes move2 {
  0% {
    width: 0;
    left: 0;
  }
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 100%;
  }
}
@-webkit-keyframes move3 {
  0% {
    height: 100%;
    top: 0;
  }
  54% {
    height: 0;
    top: 100%;
  }
  55% {
    height: 0;
    top: 0;
  }
  100% {
    height: 100%;
    top: 0;
  }
}
@keyframes move3 {
  0% {
    height: 100%;
    top: 0;
  }
  54% {
    height: 0;
    top: 100%;
  }
  55% {
    height: 0;
    top: 0;
  }
  100% {
    height: 100%;
    top: 0;
  }
}
@-webkit-keyframes move4 {
  0% {
    width: 0;
    right: 0;
  }
  55% {
    width: 100%;
    right: 0;
  }
  100% {
    width: 0;
    right: 100%;
  }
}
@keyframes move4 {
  0% {
    width: 0;
    right: 0;
  }
  55% {
    width: 100%;
    right: 0;
  }
  100% {
    width: 0;
    right: 100%;
  }
}
span {
  cursor: pointer;
}
.login-wrap span .register-wrap span {
  color: #888;
}
span:hover {
  color: #41b883;
}
</style>

<script>
import { setCookie, getCookie } from "../../assets/js/cookie.js";
export default {
  data() {
    return {
      username: "",
      password: "",
      newUsername: "",
      newPassword: "",
      tishi: "",
      showTishi: false,
      showLogin: true,
      showRegister: false,
    };
  },
  mounted() {
    // if (getCookie("username")) {
    //   this.$router.push("/home");
    // }
  },
  methods: {
    //登录校验
    login() {
      if (this.username == "" || this.password == "") {
        alert("请输入用户名或密码");
      } else {
        let data = { username: this.username, password: this.password };
        console.log(this.$http);
        this.$http
          .post(
            "https://8a5386e8-7013-4639-954f-f7bd1fc8986f.mock.pstmn.io/mockget",
            data
          )
          .then((res) => {
            console.log(res);
            if (res.data == -1) {
              this.tishi = "该用户不存在";
              this.showTishi = true;
            } else if (res.data == 0) {
              this.tishi = "密码输入错误";
              this.showTishi = true;
            } else {
              this.tishi = "登录成功";
              this.$message({
                message: "登陆成功",
                type: "success",
              });
              this.showTishi = true;
              setCookie("username", this.username, 1000 * 60);
              setTimeout(
                function () {
                  this.$router.push({ path: "home", query: { id: 1 } });
                }.bind(this),
                1000
              );
            }
          });
      }
    },
    ToRegister() {
      this.showRegister = true;
      this.showLogin = false;
    },
    ToLogin() {
      this.showRegister = false;
      this.showLogin = true;
    },
    // 注册传参
    register() {
      if (this.newUsername == "" || this.newPassword == "") {
        alert("请输入用户名或密码");
      } else {
        let data = { username: this.newUsername, password: this.newPassword };
        this.$http.post("", data).then((res) => {
          console.log(res);
          if (res.data == "ok") {
            this.tishi = "注册成功";
            this.showTishi = true;
            this.username = "";
            this.password = "";
            setTimeout(
              function () {
                this.showRegister = false;
                this.showLogin = true;
                this.showTishi = false;
              }.bind(this),
              1000
            );
          }
        });
      }
    },
  },
};
</script>
