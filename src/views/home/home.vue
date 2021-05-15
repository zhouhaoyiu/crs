<template>
  <div class="home">
    <noscript><strong>fuck</strong></noscript>
    <side-bar class="side-bar" @backToLogin="quit"></side-bar>
    <div class="search-wrap">
      <h2>输入关键字搜索</h2>
      <input
        type="text"
        id="keyword-inp"
        v-model="keyWord"
        placeholder="Enter the key word"
        required
      />
      <br />
      <input
        type="submit"
        id="submit-btn"
        @click="reqCT"
        value="GET STARTED"
        href="#Responses"
      />
    </div>
    <div class="cipher-files-wrap">
      <i class="iconfont icon-daosanjiao"></i>
      <h2>密文集合</h2>
      <a target="temp" download :href="i" v-for="i in CTList" v-bind:key="i"
        >{{ i }}<br
      /></a>
      <button class="load-all"></button>
    </div>
    <iframe name="temp" style="display: none"></iframe>
    <el-backtop target="#app">
      <i class="iconfont icon-backTop"></i>
    </el-backtop>
  </div>
</template>

<script>
import sideBar from "../../components/sideBar";
import { setCookie, getCookie, delCookie } from "../../assets/js/cookie.js";

export default {
  data() {
    return {
      name: "",
      keyWord: "",
      CTList: [],
    };
  },
  components: {
    sideBar,
  },
  filters: {
    // filter1: function (value) {
    //   let new_value = value.substring(5);
    //   return new_Value;
    // },
  },
  mounted() {
    // let uname = getCookie("username");
    // this.name = uname;
    // if (uname == "") {
    //   this.$router.push("/");
    // }
  },
  methods: {
    quit() {
      delCookie("username");
      this.$router.push("/");
    },
    reqCT() {
      if (this.keyWord == "") {
        alert("请输入关键字");
      } else {
        this.$axios({
          method: "get",
          // url: "/crushdada/Test/backEnd/doPost", //proxyTable 反向代理
          // url: "http://zhouhaoyiu.oicp.vip/test/backEnd", 内网穿透
          url: "http://localhost:8088/backEnd", //后端加请求头,success
          params: { keyWord: this.keyWord },
        })
          .then((res) => {
            console.log(res.data);
            if (res.data == -1) {
              console.log("不存在包含该关键字的文件!");
            } else {
              this.$message({
                message: "恭喜你，这是一条成功消息",
                type: "success",
              });
              console.log("检索成功");

              for (let i in res.data) {
                // res.data[i] = "../../static/testSet/" + res.data[i];
                res.data[i] = "http://10.96.114.140/" + res.data[i] + ".rar";
              }
              this.CTList = res.data;
            }
          })
          .catch((err) => {
            // console.log(err);
            alert(err);
          });
      }
    },
  },
};
</script>
<style>
.home {
  background: #eee;
}
.side-bar {
  position: fixed;
  height: 100%;
  width: 200px;
  margin-top: 50px;
}
.search-wrap {
  margin-top: 90px;
  padding: 25px 0;
  width: 100%;
  height: 240px;
  text-align: center;
}
.search-wrap #keyword-inp {
  width: 280px;
  min-height: 1.25rem;
  min-width: 1.25rem;
}
.search-wrap #submit-btn {
  padding: 0;
  font-weight: 900;
  width: 140px;
  height: 40px;
  background-color: #fad74b;
}

#submit-btn:hover {
  background-color: orange;
  transition: background-color 1s;
  transition-property: background-color;
  transition-duration: 1s;
  transition-timing-function: ease;
}
.cipher-files-wrap {
  text-align: center;
  border-top: 2px solid black;
  width: 100%;
}
li {
  list-style: none;
}
/* 回到顶部按钮 */
.icon-backTop {
  font-size: 28px !important;
}
</style>