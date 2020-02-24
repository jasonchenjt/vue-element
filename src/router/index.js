import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/main.vue'),
    children: [ //子路由配置
        {
          path:'/user/profile',
          component:()=>import('../views/user/UserProfile.vue')
        },
        {
          path:'/user/list',
          component:()=>import('../views/user/UserList.vue')
        }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue')
  },
  {
    path: '*',
    component: () => import('../views/error/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
