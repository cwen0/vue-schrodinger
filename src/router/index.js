import Vue from 'vue'
import Router from 'vue-router'
import AdminView from '@/views/AdminView'



Vue.use(Router)

const NotFoundView = Vue.component('NotFoundView', {
  template: '<h1>...Ops, 404</h1>'
})

export default new Router({
  routes: [
    // {
    //   path: '/view',
    //   name: 'Hello',
    //   component: Hello
    // },
    { path: '/', redirect: '/demopage' },
    {
      path: '/404',
      name: 'NotFoundView',
      component: NotFoundView
    },
    {
      path: '/admin',
      name: 'AdminView',
      component: AdminView 
    }
  ]
})
