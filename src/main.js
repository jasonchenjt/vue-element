import Vue from 'vue'
import App from './App.vue'
import router from './router'
// element 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//vuex
import Vuex from 'vuex'
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vuex);


//router钩子,相当于后台的路由拦截器
//该方法相当于路由跳转前,需要进行的操作
router.beforeEach((to, from, next) => {
  let isLogin = sessionStorage.getItem("isLogin");

  //注销
  if(to.path=='/logout'){
    sessionStorage.clear();//清空session
    next({path:'/login'});//跳转
  }else if(to.path == '/login'){
    if(isLogin!=null){
      next({path:'/main'});//跳转
    }
  }else if(isLogin == null){
    next({path:'/login'})
  }

  next();//不添加这个会阻塞
})

//路由跳转后需要进行的操作
// router.afterEach( route => {
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
