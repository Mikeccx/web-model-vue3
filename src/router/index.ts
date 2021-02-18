import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
        icon: 'el-icon-document',
        rname: '家',
        menu: true,
        // button: [{
        //     optName: '查询1',
        //     functionName: 'search'
        // }]
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
        icon: 'el-icon-document',
        rname: '家家',
        menu: true,
        // pageheader右上角按钮
        button: [{
            optName: '查询',
            functionName: 'search'
        }]
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
