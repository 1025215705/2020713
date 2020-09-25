import Vue from 'vue'
import Router from 'vue-router'
import EditTree from '../components/demo/editTree.vue'
import Srcoll from '../components/demo/Srcoll.vue'
import Icon from '../components/icon/Index.vue'
import mock from '../components/mock/mock.vue'
//import mockServer from '../components/mockServer.vue'
Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/demo/editTree',
            name: 'editTree',
            component: EditTree
        },
        {
            path: '/demo/srcoll',
            name: 'srcoll',
            component: Srcoll
        },
        {
            path: '/icon',
            name: 'icon',
            component: Icon
        },
        {
            path: '/mock',
            name: 'mock',
            component: mock
        },
        {
            path: '/class/2',
            name: 'classTwoToTen',
            component: classTwoToTen
        }
    ]
})
