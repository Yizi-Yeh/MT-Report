import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Brand from '../components/pages/brand.vue'
import Dashboard from '../components/Dashboard.vue'
import Plan from '../components/pages/plan.vue'
import NewPlan from '../components/pages/newplan.vue'
import Member from '../components/pages/member.vue'
import UsersOrder from '../components/pages/order.vue'
import Contact from '../components/pages/contact.vue'
import Login from '../components/pages/login.vue'
import newplans from '../components/adminpages/newplans.vue'
import Products from '../components/adminpages/Products.vue'
import Users from '../components/adminpages/Members.vue'
import Orders from '../components/adminpages/Orders.vue'
import store from '../store/index.js'
import itemPlan from '../components/plans/itemplan.vue'
import newplan from '../components/plans/newplan.vue'
import Reg from '../components/members/Reg.vue'
import Log from '../components/members/Log.vue'
import UserConfirm from  '../components/pages/userconfirm.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    // 設定是否需要登入
    mata: {
      needLogin: false
    }
  },
  {
    path: '/brand',
    name: 'Brand',
    component: Brand,
    mata: {
      needLogin: false
    }
  },
  {
    path: '/plan',
    name: 'Plan',
    component: Plan,
    mata: {
      needLogin: false
    },
  },
  {
    path: '/itemPlan/:id',
    name: 'itemPlan',
    component: itemPlan,
    mata: {
      needLogin: false
    },
  },
  {
    // 近期活動
    path: '/newplan',
    name: 'NewPlan',
    component: NewPlan,
    mata: {
      needLogin: false
    }
  },
  {
    // 近期活動內頁
    path: '/newplan/:id',
    name: 'newplan',
    component: newplan,
    mata: {
      needLogin: false
    },
  },
  {
    path: '/order/:id',
    name: 'UsersOrder',
    component: UsersOrder,
    mata: {
      needLogin: true
    },
  },
  {
    path: '/order/:id/:id',
    name: 'UserConfirm',
    component: UserConfirm,
    mata: {
      needLogin: true
    },
  },
  {
    path: '/memberReg',
    name: 'Member',
    component: Member,
    children: [
      {
        path: '',
        name: 'Reg',
        component: Reg,
      },

    ],
    mata: {
      needLogin: false
    },
  },
  {
    path: '/memberLogin',
    name: 'Log',
    component: Log,
    mata: {
      needLogin: false
    }
  },
 
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    mata: {
      needLogin: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    mata: {
      needLogin: false
    }
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: Dashboard,
    mata: {
      needLogin: true
    },
    children: [
      {
        path: 'products',
        name: 'Products',
        component: Products,
      },
      {
        path: 'newplans',
        name: 'newplans',
        component: newplans,
      },
      {
        path: 'users',
        name: 'Users',
        component: Users,
      },
      {
        path: 'orders',
        name: 'orders',
        component: Orders,
      },
    ],
  }
]

const router = new VueRouter({
  routes
})


// 進入每頁前檢查登入狀態
router.beforeEach((to, from, next) => {
  if (to.meta.needLogin && store.state.login.length === 0) {
    alert('請先註冊會員才能報名喔！')
    next('/memberLogin')
  } else {
    next()
  }
})

export default router
