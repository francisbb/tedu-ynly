import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Ucenter from '../views/Ucenter.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import ArticleDetail from '../views/ArticleDetail.vue'
import ArticleList from '../views/Article_list.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/ucenter',
    component: Ucenter
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/article_detail/:id',
    component: ArticleDetail,
    props:true
  },
  {
    path: '/article_list/:id',
    component: ArticleList,
    props:true
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
