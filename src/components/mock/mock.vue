<template>
    <div>
        <p> mock 它的原理是: 拦截了所有的请求并代理到本地 然后进行数据模拟，所以你会发现 network 中没有发出任何的请求。</p>
        <div>
            没有进行封装的简单 mock （没有网络请求）
            <button @click="login">login</button>
            <button @click="list">list</button>
        </div>
        <div>
            封装后接口的 mock （有网络请求）
            <button @click="getUserInfo">获取用户信息</button>
        </div>
    </div>
</template>

<script>
    //import mock from './mock/mock.js'
    import mock2 from './mock2/index.js'
    import axios from 'axios'
    export default {
        methods: {
            login(){
                axios.post("/login").then(response => {
                    if (response.data) {
                        console.log(response.data)
                        alert(response.data.name)
                    }
                })
            },
            list() {
                axios.post("/list").then(response => {
                    if (response.data) {
                        console.log(response.data)
                        alert(response.data.name + ',' + response.data.age)
                    }
                })
            },
            getUserInfo() {
               axios.get("/user/userinfo").then(({ data }) => {
                //打印mock data
                if (data.error === 0) {
                this.userInfo = data.data;
                 } else {
                this.userInfo = {};
               }
            });
          }
        }
    }
</script>

<style>
</style>