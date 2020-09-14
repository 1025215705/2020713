import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Srcoll from '../components/Srcoll.vue'
import mock from '../components/mock.vue'
import mockServer from '../components/mockServer.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mockServer',
      component: mockServer
    }
  ]
})
