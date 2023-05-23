import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 初始化样式
import './assets/css/reset.css'
import './assets/font/font.scss'
// 引入页面resize监听事件
import './assets/js/rem'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
