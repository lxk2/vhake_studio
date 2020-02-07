import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'vant/lib/index.css'
import './styles/reset.styl' // 引入全局样式
import request from './utils/request'
import { Dialog } from 'vant'

Vue.use(Dialog)

// 简单配置
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  document.getElementById('title').innerText = to.meta.title
  next()
})

router.afterEach(async (to, from) => {
  store.dispatch('setActive', to.name, from.name)
  NProgress.done()
})

Vue.config.productionTip = false

Vue.prototype.$http = request

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
