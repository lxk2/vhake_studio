import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home2/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '广州市晋拓建筑工程有限公司'
    },
    component: Home
  },
  {
    path: '/applyForProject',
    name: 'applyForProject',
    meta: {
      title: '申请工程款'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/applyForProject/index.vue')
  },
  {
    path: '/signContract',
    name: 'signContract',
    meta: {
      title: '签约合同'
    },
    component: () => import('../views/signContract/index.vue')
  },
  {
    path: '/bookTicket',
    name: 'bookTicket',
    meta: {
      title: '预约票务服务'
    },
    component: () => import('../views/bookTicket/index.vue')
  },
  {
    path: '/otherService',
    name: 'otherService',
    meta: {
      title: '其他服务'
    },
    component: () => import('../views/otherService/index.vue')
  },
  {
    path: '/otherService2',
    name: 'otherService2',
    meta: {
      title: '其他服务'
    },
    component: () => import('../views/otherService2/index.vue')
  },
  {
    path: '/feedback',
    name: 'feedback',
    meta: {
      title: '投诉与建议'
    },
    component: () => import('../views/feedback/index.vue')
  },
  {
    path: '/qualification',
    name: 'qualification',
    meta: {
      title: '公司资质'
    },
    component: () => import('../views/qualification/index.vue')
  },
  {
    path: '/taxAdvice',
    name: 'taxAdvice',
    meta: {
      title: '税务咨询'
    },
    component: () => import('../views/taxAdvice/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
