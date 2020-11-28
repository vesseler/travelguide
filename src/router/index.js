import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
// @代表src这个目录,在bulid/webpack.base.conf.js中的resolve里可已看到。也就是你可以自定义
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
