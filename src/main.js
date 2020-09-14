// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import axios from 'axios'
import "../static/iconfont.js"
import "../static/iconfont.css"

Vue.config.productionTip = false

Vue.use(ElementUI);
// Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
import '@/icons'




/* eslint-disable no-new */
var vx = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})

