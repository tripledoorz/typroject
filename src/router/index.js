import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DbList from '@/db_list/db_list'
import WxScan from '@/wx_scan/wx_scan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/db_list',
      name: 'db_list',
      meta: {
        title: '节目列表'
      },
      component: DbList
    },
    {
      path: '/wx_scan',
      name: 'wx_scan',
      meta: {
        title: '打开'
      },
      component: WxScan
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
