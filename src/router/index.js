import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Layout from '@/Layout';

/**
 * desc:静态路由,不管什么权限都能访问到的路由
*/
export const constantRoutes = [
 /**
  *  /redirect:
  * 1、按我的理解，这个主要是用来重定向的，比如路由没发生改变时，页面是不会刷新的，这个时候就可以先跳转到这个/redirect，然后在跳转到需要刷新的页面,hidden为true，就是不显示在侧边栏
  * 2、因为加载的组件为Layout,会把对应的路由放在layout的router-view里面
  * 
  * */ 
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children:[
      {
        path:'/test',
        component: ()=> import('@/views/test/index')
      }
    ]
  },
  
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRoutes
})

export default router
