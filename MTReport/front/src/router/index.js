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

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/brand',
    name: 'Brand',
    component: Brand
  },
  {
    path: '/plan',
    name: 'Plan',
    component: Plan
  },
  {
    path: '/newplan',
    name: 'NewPlan',
    component: NewPlan
  },
  {
    path: '/member',
    name: 'Member',
    component: Member
  },
  {
    path: '/join',
    name: 'Join',
    component: Join
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
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
        meta: { requiresAuth: true },
      },
    ],
  }
]

const router = new VueRouter({
  routes
})

export default router
