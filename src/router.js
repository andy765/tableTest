import Vue from 'vue'
import Router from 'vue-router'
import List from './views/List.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: List
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
