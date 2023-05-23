import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../components/MainPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savePosition) {
    if (savePosition) {
      return savePosition
    }
    return {x: 0, y: 0}
  },
  routes: [{
    path: '',
    component: MainPage,
    children: [{
      path: '/',
      component: () => import('../pages/Home/Home.vue')
    }, {
      path: '/play',
      component: () => import('../pages/Play/Play.vue')
    }, {
      path: '/token',
      component: () => import('../pages/TokenEconomics/TokenEconomics.vue')
    }, {
      path: '/road',
      component: () => import('../pages/Road/Road.vue')
    }, {
      path: '/audit',
      component: () => import('../pages/Audit/Audit.vue')
    }, {
      path: '/contact',
      component: () => import('../pages/Contact/Contact.vue')
    }]
  }]
})