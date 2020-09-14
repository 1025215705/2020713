<template>
    <div>
        <!-- <button @click="login">login</button>
        <button @click="list">list</button> -->
    </div>
    <!--App -->
</template>

<script>
import axios from "axios";
export default {
  name: "mockServer",
  data() {
    return {
      userInfo: {}
    };
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      //请求'/user/userinfo'接口
      axios.get("/user/userinfo").then(({ data }) => {
        //打印mock data
        console.log(data);
        if (data.error === 0) {
          this.userInfo = data.data;
        } else {
          this.userInfo = {};
        }
      });
    }
  }
};
</script>

<style>
</style>
