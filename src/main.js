// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'
// import axios from 'axios'   //原来axios的使用
// Vue.prototype.axios = axios
//axios包装成Vue插件使用方法
import MyHttpServer from '@/plugins/http.js'

import router from './router'

import '@/assets/css/index.css'

//使用Vue的插件
Vue.use(ElementUI)

Vue.use(MyHttpServer)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
