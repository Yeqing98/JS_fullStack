import Vue from 'vue'
import Router from 'vue-router'
import Table from '@/components/Table'
import Login from '@/components/Login'
import Survey from '@/components/Survey'
import Data from '@/components/Data'
import Deal from '@/components/Deal'
import Goods from '@/components/Goods'
import Order from '@/components/Order'
import Client from '@/components/Client'
import Setting from '@/components/Setting'


Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Table',
      component: Table,
      children: [
        {
          path: '/',
          name: 'Survey',
          component: Survey
        },
        {
          path: '/data',
          name: 'Data',
          component: Data
        },
        {
          path: '/deal',
          name: 'Deal',
          component: Deal
        },
        {
          path: '/goods',
          name: 'Goods',
          component: Goods
        },
        {
          path: '/order',
          name: 'Order',
          component: Order
        },
        {
          path: '/client',
          name: 'Client',
          component: Client
        },
        {
          path: '/setting',
          name: 'Setting',
          component: Setting
        },
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

router.beforeEach((to,from,next) => {
  let tmp = localStorage.getItem('user')
  if (!tmp && to.name != 'Login') {
    next({ path: '/login' })
    return
  }
  next()
})

export default router;