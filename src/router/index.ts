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

    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
