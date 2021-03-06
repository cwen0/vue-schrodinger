import Vue from 'vue'
import Router from 'vue-router'
import DailyView from '@/views/DailyView'
import ScenesView from '@/views/ScenesView'
import ClusterView from '@/views/ClusterView'
import CasesView from '@/views/CasesView'
import HistoryView from '@/views/HistoryView'
import ReleaseView from '@/views/ReleaseView'
import MissionViw from '@/views/MissionView'

Vue.use(Router)

const NotFoundView = Vue.component('NotFoundView', {
  template: '<h1>...Ops, 404</h1>'
})

export default new Router({
  // mode: 'history',
  routes: [
    // {
    //   path: '/view',
    //   name: 'Hello',
    //   component: Hello
    // },
    { path: '/', redirect: '/daily' },
    {
      path: '/404',
      name: 'NotFoundView',
      component: NotFoundView
    },
    {
      path: '/daily',
      name: 'DailyView',
      component: DailyView
    },
    {
      path: '/mission', 
      name: 'MissionView', 
      component: MissionViw
    },
    {
      path: '/scenes',
      name: 'ScenesView',
      component: ScenesView
    },
    {
      path: '/cluster',
      name: 'ClusterView',
      component: ClusterView
    },
    {
      path: '/cases', 
      name: 'CasesView', 
      component: CasesView 
    }, 
    {
      path: '/history', 
      name: 'HistoryView', 
      component: HistoryView
    }, 
    {
      path: '/release', 
      name: 'ReleaseView', 
      component: ReleaseView
    }
  ]
})
