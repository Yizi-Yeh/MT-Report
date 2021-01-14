import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Brand from '../components/pages/brand.vue'
import Dashboard from '../components/Dashboard.vue'
import Plan from '../components/pages/plan.vue'
import NewPlan from '../components/pages/newplan.vue'
import Member from '../components/pages/member.vue'
import Join from '../components/pages/join.vue'
import Contact from '../components/pages/contact.vue'
import Login from '../components/pages/login.vue'
import Products from '../components/adminpages/Products.vue'
import store from '../store/index.js'
import itemPlan from '../components/plans/itemplan.vue'

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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
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
    path: '/newplan',
    name: 'NewPlan',
    component: NewPlan,
    mata: {
      needLogin: false
    }
  },
  {
    path: '/member',
    name: 'Member',
    component: Member,
    mata: {
      needLogin: false
    }
  },
  {
    path: '/join',
    name: 'Join',
    component: Join,
    mata: {
      needLogin: true
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
    children: [
      {
        path: 'products',
        name: 'Products',
        component: Products,
      },
    ],
  }
]

const router = new VueRouter({
  routes
})


// 進入每頁前檢查登入狀態
router.beforeEach((to, from, next) => {
  if(to.meta.needLogin && store.state.login.length === 0) {
    alert('請先註冊會員才能報名喔！')
    next('/member')
  } else {
    next()
  }
})

export default router
